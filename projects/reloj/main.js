let format24h = true;
const CLOCK = document.getElementById("digitalClock");
const TODAY = document.getElementById("date");

const HOURS = document.getElementById("hours");
const MINUTES = document.getElementById("minutes");
const SECONDS = document.getElementById("seconds");

let precision = 0

function setTime() {
  const now = new Date();
  let hourOptions = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  };
  // Digital Clock
  if (precision === 0){
    hourOptions["hour12"] = format24h ? false : true;
  } else {
    hourOptions["hour12"] = format24h ? false : true;
    hourOptions["fractionalSecondDigits"] = precision;
  }
  const dateOptions = { day: "2-digit", month: "2-digit", year: "numeric" };

  const actualTime = now.toLocaleTimeString("es-CH", hourOptions);
  const actualDate = now.toLocaleDateString("es-CH", dateOptions);

  CLOCK.textContent = actualTime;
  TODAY.textContent = actualDate;

  // Analogical Clock
  const hour = now.getHours() % 12;
  HOURS.style.transform = `rotate(${(hour * 360) / 12}deg)`;

  const minute = now.getMinutes();
  MINUTES.style.transform = `rotate(${(minute * 360) / 60}deg)`;

  const second = Math.floor((now.getSeconds() * 1000 + now.getMilliseconds())/(10**(3-precision)));
  SECONDS.style.transform = `rotate(${(second * 360) / parseInt(60000/(10**(3-precision))) }deg)`;
}

function setFormat() {
  const setFormatButton = document.getElementById("setFormat");

  format24h = !format24h;
  setFormatButton.innerHTML = format24h ? "Formato 12h" : "Formato 24h";
  setTime();
}

function setPrecision() {
  clearInterval(interval);
  precision = (precision + 1) % 4;
  interval = setInterval(setTime, 10**(3-precision));
  setTime();
}

let interval = setInterval(setTime, 10**(3-precision));
setTime();