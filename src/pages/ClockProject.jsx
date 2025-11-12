import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Clock = () => {
  const [time, setTime] = useState(new Date());
  const [format24h, setFormat24h] = useState(true);
  const [precision, setPrecision] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 10 ** (3 - precision));

    return () => clearInterval(interval);
  }, [precision]);

  const formatTime = () => {
    const options = {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: !format24h,
    };

    if (precision > 0) {
      options.fractionalSecondDigits = precision;
    }

    return time.toLocaleTimeString("es-CH", options);
  };

  const formatDate = () => {
    const options = { day: "2-digit", month: "2-digit", year: "numeric" };
    return time.toLocaleDateString("es-CH", options);
  };

  const getHandRotation = (unit, max) => {
    const rotation = (unit * 360) / max;
    return `rotate(${rotation}deg)`;
  };

  const hour = time.getHours() % 12;
  const minute = time.getMinutes();
  const second = Math.floor(
    (time.getSeconds() * 1000 + time.getMilliseconds()) / 10 ** (3 - precision)
  );
  const maxSeconds = parseInt(60000 / 10 ** (3 - precision));

  const toggleFormat = () => setFormat24h(!format24h);
  const cyclePrecision = () => setPrecision((precision + 1) % 4);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-6">
          <Link
            to="/projects"
            className="inline-flex items-center text-white hover:text-yellow-300 transition-colors"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Volver a Proyectos
          </Link>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 font-mono">
            {formatTime()}
          </h1>
          <p className="text-2xl md:text-3xl text-purple-200 font-semibold">
            {formatDate()}
          </p>
        </div>

        {/* Reloj Analógico */}
        <div className="flex justify-center mb-8">
          <div className="relative w-80 h-80 bg-white rounded-full shadow-2xl">
            {/* Marcas de horas */}
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-4 bg-gray-800 left-1/2 top-2"
                style={{
                  transform: `translateX(-50%) rotate(${i * 30}deg)`,
                  transformOrigin: "50% 158px",
                }}
              />
            ))}

            {/* Números de horas */}
            {[12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((num, i) => {
              const angle = (i * 30 - 90) * (Math.PI / 180);
              const x = 50 + 35 * Math.cos(angle);
              const y = 50 + 35 * Math.sin(angle);
              return (
                <div
                  key={num}
                  className="absolute text-gray-800 font-bold text-xl"
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  {num}
                </div>
              );
            })}

            {/* Punto central */}
            <div className="absolute w-4 h-4 bg-gray-800 rounded-full left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10" />

            {/* Manecilla de horas */}
            <div
              className="absolute w-2 h-20 bg-gray-800 rounded-full left-1/2 top-1/2 origin-bottom transition-transform duration-1000"
              style={{
                transform: `translateX(-50%) translateY(-100%) ${getHandRotation(
                  hour,
                  12
                )}`,
              }}
            />

            {/* Manecilla de minutos */}
            <div
              className="absolute w-1.5 h-28 bg-gray-600 rounded-full left-1/2 top-1/2 origin-bottom transition-transform duration-1000"
              style={{
                transform: `translateX(-50%) translateY(-100%) ${getHandRotation(
                  minute,
                  60
                )}`,
              }}
            />

            {/* Manecilla de segundos */}
            <div
              className="absolute w-1 h-32 bg-red-500 rounded-full left-1/2 top-1/2 origin-bottom"
              style={{
                transform: `translateX(-50%) translateY(-100%) ${getHandRotation(
                  second,
                  maxSeconds
                )}`,
                transition: precision === 0 ? "transform 0.1s linear" : "none",
              }}
            />
          </div>
        </div>

        {/* Controles */}
        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={toggleFormat}
            className="bg-white hover:bg-gray-100 text-purple-900 font-semibold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            {format24h ? "Formato 12h" : "Formato 24h"}
          </button>
          <button
            onClick={cyclePrecision}
            className="bg-yellow-400 hover:bg-yellow-300 text-purple-900 font-semibold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Precisión:{" "}
            {precision === 0
              ? "Segundos"
              : `${precision} decimal${precision > 1 ? "es" : ""}`}
          </button>
        </div>

        <div className="mt-8 text-center">
          <div className="inline-block bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white">
            <p className="text-sm mb-2">⌨️ Atajos de teclado:</p>
            <p className="text-xs opacity-80">
              F - Cambiar formato | P - Cambiar precisión
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clock;
