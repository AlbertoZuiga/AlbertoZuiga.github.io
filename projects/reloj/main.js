let formato24h = true;
const reloj = document.getElementById("relojDigital");
const fecha = document.getElementById("fecha");

const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");

let precision = 0

function actualizarHora() {
  const ahora = new Date();
  let opcionesHora = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  };
  // Reloj digital
  if (precision === 0){
    opcionesHora["hour12"] = formato24h ? false : true;
  } else {
    opcionesHora["hour12"] = formato24h ? false : true;
    opcionesHora["fractionalSecondDigits"] = precision;
  }
  const opcionesFecha = { day: "2-digit", month: "2-digit", year: "numeric" };

  const horaActual = ahora.toLocaleTimeString("es-CH", opcionesHora);
  const fechaActual = ahora.toLocaleDateString("es-CH", opcionesFecha);

  reloj.textContent = horaActual;
  fecha.textContent = fechaActual;

  // Reloj analogico
  const hora = ahora.getHours() % 12;
  horas.style.transform = `rotate(${(hora * 360) / 12}deg)`;

  const minuto = ahora.getMinutes();
  minutos.style.transform = `rotate(${(minuto * 360) / 60}deg)`;

  const segundo = Math.floor((ahora.getSeconds() * 1000 + ahora.getMilliseconds())/(10**(3-precision)));
  segundos.style.transform = `rotate(${(segundo * 360) / parseInt(60000/(10**(3-precision))) }deg)`;
}

function cambiarFormato() {
  const cambiarFormatoButton = document.getElementById("cambiarFormato");

  formato24h = !formato24h;
  cambiarFormatoButton.innerHTML = formato24h ? "Formato 12h" : "Formato 24h";
  actualizarHora();
}

function cambiarPrecision() {
  clearInterval(intervalo);
  precision = (precision + 1) % 4;
  intervalo = setInterval(actualizarHora, 10**(3-precision));
  actualizarHora();
}

let intervalo = setInterval(actualizarHora, 10**(3-precision));
actualizarHora();