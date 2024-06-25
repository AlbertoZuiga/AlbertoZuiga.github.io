const video = document.getElementById("video");
const snapButton = document.getElementById("snap");
const recordButton = document.getElementById("record");
const errorMessage = document.getElementById("error-message");
const pictures = document.getElementById("pictures");

let mediaRecorder;
let chunks = [];
let stream;

async function startCamera() {
  try {
    stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true,
    });
    setupVideoStream(stream);
    enableButtons();
  } catch (err) {
    try {
      stream = await navigator.mediaDevices.getUserMedia({ video: true });
      setupVideoStream(stream);
      enableButtons();
    } catch (err) {
      handleCameraError(err);
    }
  }
}

function setupVideoStream(stream) {
  video.srcObject = stream;
  video.play();
  mediaRecorder = new MediaRecorder(stream);

  mediaRecorder.ondataavailable = handleDataAvailable;
  mediaRecorder.onstop = saveRecordedVideo;
}

function handleDataAvailable(event) {
  chunks.push(event.data);
}

function saveRecordedVideo() {
  const vidSave = document.createElement("video");
  vidSave.width = (video.offsetWidth - 4) / 3;
  vidSave.height = (video.offsetHeight - 4) / 3;
  const blob = new Blob(chunks, { type: "video/mp4" });
  chunks = [];
  const videoURL = URL.createObjectURL(blob);
  vidSave.src = videoURL;
  vidSave.controls = true;
  pictures.appendChild(vidSave);
}

function handleCameraError(error) {
  console.error("Error al acceder a la cámara: ", error);
  snapButton.remove();
  recordButton.remove();
  errorMessage.style.display = "block";
}

function enableButtons() {
  snapButton.disabled = false;
  recordButton.disabled = false;
}

function takePicture() {
  const downloadLink = document.createElement("a");
  const newCanvas = document.createElement("canvas");

  newCanvas.width = (video.offsetWidth - 4) / 3;
  newCanvas.height = (video.offsetHeight - 4) / 3;

  const context = newCanvas.getContext("2d");
  context.drawImage(video, 0, 0, newCanvas.width, newCanvas.height);

  downloadLink.href = newCanvas.toDataURL("image/png");
  downloadLink.download = "snapshot.png";
  downloadLink.appendChild(newCanvas);
  pictures.appendChild(downloadLink);
}

function startRecording() {
  mediaRecorder.start();
  console.log("Recording started:", mediaRecorder.state);
}

function stopRecording() {
  mediaRecorder.stop();
  console.log("Recording stopped:", mediaRecorder.state);
}

function toggleRecording(event) {
  const btn = event.target;
  if (btn.classList.contains("start")) {
    btn.classList.replace("start", "stop");
    btn.textContent = "Detener grabación";
    startRecording();
  } else {
    btn.classList.replace("stop", "start");
    btn.textContent = "Comenzar grabación";
    stopRecording();
  }
}

// Event listeners
snapButton.addEventListener("click", takePicture);
recordButton.addEventListener("click", toggleRecording);

document.addEventListener("keydown", (event) => {
  if (event.code === "Space" && !snapButton.disabled) takePicture();
});

// Start the camera on page load
startCamera();
