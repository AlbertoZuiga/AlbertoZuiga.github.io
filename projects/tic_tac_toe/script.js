let gameBoard = document.getElementById("game");
let SCALER = 0.8;
let SIZE = { x: 0, y: 0, width: 0, height: 0 };
const body = document.querySelector("body");

let playing = true;
let playerXTurn = true;
const restart = document.getElementById("restart");

restart.addEventListener("click", () => {
  document.querySelectorAll(".X").forEach((element) => {
    element.classList.remove("X");
    element.classList.add("clear");
    element.textContent = "";
  });

  document.querySelectorAll(".O").forEach((element) => {
    element.classList.remove("O");
    element.classList.add("clear");
    element.textContent = "";
  });

  restart.classList.add("hidden");
  playing = true;
});

function displayButton() {
  restart.classList.remove("hidden");
}

document.querySelectorAll(".box").forEach((element) => {
  element.addEventListener("click", function (event) {
    // Aquí puedes acceder al div
    const div = event.target;

    if (div.classList.contains("clear") && playing) {
      div.classList.remove("clear");
      playerXTurn ? div.classList.add("X") : div.classList.add("O");
      let player = playerXTurn ? "X" : "O";
      div.textContent = player;
      playerXTurn = !playerXTurn;

      if (checkWin(player)) {
        setTimeout(alert, 10, `Gano ${player}`);
      }
      if (document.querySelector(".clear") == null && playing) {
        setTimeout(alert, 10, "Empate");
        playing = false;
      }

      if (!playing) displayButton();
    }
  });
});

function checkWin(player) {
  let playerWin = true;

  document.querySelectorAll(".up").forEach((element) => {
    if (!element.classList.contains(player)) {
      playerWin = false;
    }
  });
  if (playerWin) {
    playing = false;
    return playerWin;
  } else {
    playerWin = true;
  }

  document.querySelectorAll(".middle").forEach((element) => {
    if (!element.classList.contains(player)) {
      playerWin = false;
    }
  });
  if (playerWin) {
    playing = false;
    return playerWin;
  } else {
    playerWin = true;
  }

  document.querySelectorAll(".down").forEach((element) => {
    if (!element.classList.contains(player)) {
      playerWin = false;
    }
  });
  if (playerWin) {
    playing = false;
    return playerWin;
  } else {
    playerWin = true;
  }

  document.querySelectorAll(".left").forEach((element) => {
    if (!element.classList.contains(player)) {
      playerWin = false;
    }
  });
  if (playerWin) {
    playing = false;
    return playerWin;
  } else {
    playerWin = true;
  }

  document.querySelectorAll(".center").forEach((element) => {
    if (!element.classList.contains(player)) {
      playerWin = false;
    }
  });
  if (playerWin) {
    playing = false;
    return playerWin;
  } else {
    playerWin = true;
  }

  document.querySelectorAll(".right").forEach((element) => {
    if (!element.classList.contains(player)) {
      playerWin = false;
    }
  });
  if (playerWin) {
    playing = false;
    return playerWin;
  } else {
    playerWin = true;
  }

  if (document.querySelector(".middle.center").classList.contains(player)) {
    if (
      (document.querySelector(".right.up").classList.contains(player) &&
        document.querySelector(".left.down").classList.contains(player)) ||
      (document.querySelector(".left.up").classList.contains(player) &&
        document.querySelector(".right.down").classList.contains(player))
    ) {
      playing = false;
      return true;
    }
  }
  return false;
}

window.addEventListener("resize", handleResize);

function handleResize() {
  let resizer = SCALER * Math.min(body.offsetWidth, body.offsetHeight);
  SIZE.width = resizer;
  SIZE.height = resizer;
  SIZE.x = body.offsetWidth / 2 - SIZE.width / 2;
  SIZE.y = body.offsetHeight / 2 - SIZE.height / 2;

  gameBoard.style.left = `${SIZE.x}px`;
  gameBoard.style.top = `${SIZE.y}px`;

  gameBoard.style.width = `${SIZE.width}px`;
  gameBoard.style.height = `${SIZE.height}px`;

  const cellWidth =
    (SIZE.width - 2 * parseFloat(getComputedStyle(gameBoard).gap)) / 3;
  const cellHeight =
    (SIZE.height - 2 * parseFloat(getComputedStyle(gameBoard).gap)) / 3;

  Array.from(gameBoard.children).map(function (element) {
    element.style.width = `${cellWidth}px`;
    element.style.height = `${cellHeight}px`;
  });
}

handleResize();
