import { useState, useRef, useEffect } from "react";

const CameraProject = () => {
  const [stream, setStream] = useState(null);
  const [isRecording, setIsRecording] = useState(false);
  const [error, setError] = useState(null);
  const [captures, setCaptures] = useState([]);
  const [buttonsEnabled, setButtonsEnabled] = useState(false);
  const [isMirrored, setIsMirrored] = useState(true);

  const videoRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const chunksRef = useRef([]);

  useEffect(() => {
    document.title = "Cámara - Alberto Zúñiga";
  }, []);

  useEffect(() => {
    startCamera();

    return () => {
      // Cleanup: stop camera when component unmounts
      if (stream) {
        for (const track of stream.getTracks()) {
          track.stop();
        }
      }
    };
  }, []); // Empty dependency array - only run once on mount

  // Keyboard shortcut handler
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (!buttonsEnabled) return;

      if (event.code === "Space") {
        event.preventDefault();
        takePicture();
      } else if (event.code === "KeyR") {
        event.preventDefault();
        toggleRecording();
      } else if (event.code === "KeyM") {
        event.preventDefault();
        setIsMirrored((prev) => !prev);
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [buttonsEnabled, isRecording]); // Update when buttonsEnabled or isRecording changes

  // Separate effect to update video element when stream changes
  useEffect(() => {
    if (stream && videoRef.current) {
      videoRef.current.srcObject = stream;
    }
  }, [stream]);

  const startCamera = async () => {
    try {
      // Try to get highest quality video and audio
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: {
          width: { ideal: 4096 },
          height: { ideal: 2160 },
          facingMode: "user",
          frameRate: { ideal: 60 }
        },
        audio: true,
      });
      setupVideoStream(mediaStream);
    } catch (initialError) {
      try {
        // Fallback: try Full HD video only
        const mediaStream = await navigator.mediaDevices.getUserMedia({
          video: {
            width: { ideal: 1920 },
            height: { ideal: 1080 },
            facingMode: "user",
            frameRate: { ideal: 60 }
          },
        });
        setupVideoStream(mediaStream);
      } catch (secondError) {
        try {
          // Final fallback: try basic video only
          const mediaStream = await navigator.mediaDevices.getUserMedia({
            video: true,
          });
          setupVideoStream(mediaStream);
        } catch (finalError) {
          handleCameraError(finalError);
        }
      }
    }
  };

  const setupVideoStream = (mediaStream) => {
    setStream(mediaStream);

    // Setup MediaRecorder
    const recorder = new MediaRecorder(mediaStream);
    recorder.ondataavailable = (event) => {
      chunksRef.current.push(event.data);
    };
    recorder.onstop = saveRecordedVideo;
    mediaRecorderRef.current = recorder;

    setButtonsEnabled(true);
    setError(null);
  };

  const handleCameraError = (err) => {
    console.error("Error al acceder a la cámara:", err);
    setError(
      "Se requiere permiso para usar la cámara. Por favor, permite el acceso y recarga la página."
    );
    setButtonsEnabled(false);
  };

  const takePicture = () => {
    if (!videoRef.current) return;

    const canvas = document.createElement("canvas");
    const video = videoRef.current;

    // Use the actual video stream dimensions for high quality
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const context = canvas.getContext("2d", { 
      alpha: false,
      willReadFrequently: false 
    });
    
    // Enable image smoothing for better quality
    context.imageSmoothingEnabled = true;
    context.imageSmoothingQuality = "high";
    
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Use JPEG with maximum quality (1 = 100%)
    const imageUrl = canvas.toDataURL("image/jpeg", 1);
    setCaptures((prev) => [
      ...prev,
      {
        type: "image",
        url: imageUrl,
        id: Date.now(),
      },
    ]);
  };

  const toggleRecording = () => {
    if (!mediaRecorderRef.current) return;

    if (isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      console.log("Recording stopped");
    } else {
      chunksRef.current = [];
      mediaRecorderRef.current.start();
      setIsRecording(true);
      console.log("Recording started");
    }
  };

  const saveRecordedVideo = () => {
    const blob = new Blob(chunksRef.current, { type: "video/mp4" });
    const videoURL = URL.createObjectURL(blob);
    
    setCaptures((prev) => [
      ...prev,
      {
        type: "video",
        url: videoURL,
        id: Date.now(),
      },
    ]);
    
    chunksRef.current = [];
  };

  const downloadImage = (url, index) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = `photo-${index + 1}-${Date.now()}.jpg`;
    link.click();
  };

  const downloadVideo = (url, index) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = `video-${index + 1}-${Date.now()}.webm`;
    link.click();
  };

  const deleteCapture = (id) => {
    setCaptures((prev) => prev.filter((capture) => capture.id !== id));
  };

  return (
    <div className="min-h-screen py-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            📸 Cámara Web
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Toma fotos y graba videos usando tu cámara
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            Atajos: <kbd className="px-2 py-1 bg-gray-200 dark:bg-gray-700 dark:text-gray-200 rounded">Espacio</kbd>{" "}
            Foto | <kbd className="px-2 py-1 bg-gray-200 dark:bg-gray-700 dark:text-gray-200 rounded ml-1">R</kbd>{" "}
            Grabar | <kbd className="px-2 py-1 bg-gray-200 dark:bg-gray-700 dark:text-gray-200 rounded ml-1">M</kbd>{" "}
            Reflejar
          </p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="max-w-2xl mx-auto mb-6 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
            <p className="text-red-700 dark:text-red-400 text-center">{error}</p>
          </div>
        )}

        {/* Camera Container */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
          <div className="flex flex-col items-center">
            {/* Video Element */}
            <div className="relative mb-6">
              <video
                ref={videoRef}
                autoPlay
                playsInline
                muted
                className="w-full max-w-2xl h-auto border-4 border-gray-800 dark:border-gray-600 rounded-lg bg-gray-300 dark:bg-gray-700 transition-transform duration-300"
                style={{ 
                  maxHeight: "480px",
                  transform: isMirrored ? "scaleX(-1)" : "scaleX(1)"
                }}
              />
              {isRecording && (
                <div className="absolute top-4 right-4 flex items-center gap-2 bg-red-600 text-white px-3 py-2 rounded-full">
                  <span className="w-3 h-3 bg-white rounded-full animate-pulse"></span>
                  <span className="text-sm font-semibold">REC</span>
                </div>
              )}
            </div>

            {/* Control Buttons */}
            <div className="flex gap-4 flex-wrap justify-center">
              <button
                onClick={takePicture}
                disabled={!buttonsEnabled}
                className="px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg shadow-md transition-colors disabled:bg-gray-300 dark:disabled:bg-gray-700 disabled:cursor-not-allowed flex items-center gap-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                Sacar Foto
              </button>

              <button
                onClick={toggleRecording}
                disabled={!buttonsEnabled}
                className={`px-6 py-3 font-semibold rounded-lg shadow-md transition-colors disabled:bg-gray-300 dark:disabled:bg-gray-700 disabled:cursor-not-allowed flex items-center gap-2 ${
                  isRecording
                    ? "bg-red-600 hover:bg-red-700 text-white"
                    : "bg-green-600 hover:bg-green-700 text-white"
                }`}
              >
                {isRecording ? (
                  <>
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <rect x="6" y="6" width="12" height="12" />
                    </svg>
                    Detener Grabación
                  </>
                ) : (
                  <>
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="12" r="8" />
                    </svg>
                    Comenzar Grabación
                  </>
                )}
              </button>

              <button
                onClick={() => setIsMirrored(!isMirrored)}
                disabled={!buttonsEnabled}
                className={`px-6 py-3 font-semibold rounded-lg shadow-md transition-colors disabled:bg-gray-300 dark:disabled:bg-gray-700 disabled:cursor-not-allowed flex items-center gap-2 ${
                  isMirrored
                    ? "bg-purple-600 hover:bg-purple-700 text-white"
                    : "bg-gray-600 hover:bg-gray-700 text-white"
                }`}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                  />
                </svg>
                Reflejar
              </button>
            </div>
          </div>
        </div>

        {/* Captures Gallery */}
        {captures.length > 0 && (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Capturas ({captures.length})
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {captures.map((capture, index) => (
                <div
                  key={capture.id}
                  className="relative group border-2 border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                >
                  {capture.type === "image" ? (
                    <img
                      src={capture.url}
                      alt={`Snapshot ${index + 1}`}
                      className="w-full h-auto"
                    />
                  ) : (
                    <video
                      src={capture.url}
                      controls
                      className="w-full h-auto"
                    >
                      <track kind="captions" label="Sin subtítulos disponibles" />
                    </video>
                  )}
                  
                  {/* Overlay with actions */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
                    <button
                      onClick={() => 
                        capture.type === "image" 
                          ? downloadImage(capture.url, index)
                          : downloadVideo(capture.url, index)
                      }
                      className="px-3 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg text-sm font-semibold"
                      title={capture.type === "image" ? "Descargar imagen" : "Descargar video"}
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                        />
                      </svg>
                    </button>
                    <button
                      onClick={() => deleteCapture(capture.id)}
                      className="px-3 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm font-semibold"
                      title="Eliminar"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CameraProject;
