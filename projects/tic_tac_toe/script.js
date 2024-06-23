const CELLS = document.querySelectorAll("[data-cell]");
const BOARD = document.getElementById("board");
const RESTART_BUTTON = document.getElementById("restartButton");
let isOTurn = false;
let gameOn = true;
const X_CLASS = "X";
const O_CLASS = "O";
const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2],
];

startGame();

RESTART_BUTTON.addEventListener("click", startGame);

function startGame() {
  isOTurn = false;
  CELLS.forEach((cell) => {
    cell.classList.remove(X_CLASS);
    cell.classList.remove(O_CLASS);
    cell.classList.remove("win");
    cell.textContent = "";
    cell.removeEventListener("click", handleClick);
    cell.addEventListener("click", handleClick, { once: true });
  });
}

function handleClick(e) {
  if (!gameOn) return;
  const cell = e.target;
  const currentClass = isOTurn ? O_CLASS : X_CLASS;
  placeMark(cell, currentClass);
  if (checkWin(currentClass)) {
    setTimeout(endGame, 10, false);
  } else if (isDraw()) {
    setTimeout(endGame, 10, true);
  } else {
    swapTurns();
  }
}

function placeMark(cell, currentClass) {
  cell.classList.add(currentClass);
  cell.textContent = currentClass.toUpperCase();
}

function swapTurns() {
  isOTurn = !isOTurn;
}

function checkWin(currentClass) {
  let winningCombination = null;
  const isWin = WINNING_COMBINATIONS.some((combination) => {
    const isWinningCombination = combination.every((index) => {
      return CELLS[index].classList.contains(currentClass);
    });
    if (isWinningCombination) {
      winningCombination = combination;
    }
    return isWinningCombination;
  });

  if (isWin) {
    winEffect(winningCombination);
  }

  gameOn = !isWin;
  return isWin;
}

function isDraw() {
  return [...CELLS].every((cell) => {
    return cell.classList.contains(X_CLASS) || cell.classList.contains(O_CLASS);
  });
}

function endGame(draw) {
  if (draw) {
    console.log("Empate!");
  } else {
    console.log(`Gano ${isOTurn ? "O" : "X"}!`);
  }
}

function winEffect(combination) {
  let index;
  for (let i in combination) {
    setTimeout(() => {
      index = combination[i];
      CELLS[index].classList.add("win");
      CELLS[index].style.transform = "scale(1.1)";
    }, 400 * i);

    setTimeout(() => {
      index = combination[i];
      CELLS[index].style.transform = "scale(1)";
    }, 400 * i + 200);
  }
}

window.addEventListener("resize", () => {
  handleResize();
});

function handleResize() {
  const SCALER = 0.8;
  const CONTAINER = document.querySelector(".container");
  let SIZE = { width: 0, height: 0, x: 0, y: 0 };

  console.log("hola");

  const RESIZER =
    SCALER *
    Math.min(
      window.innerWidth / CONTAINER.offsetWidth,
      window.innerHeight / CONTAINER.offsetHeight
    );

  SIZE.width = RESIZER * CONTAINER.offsetWidth;
  SIZE.height = RESIZER * CONTAINER.offsetHeight;
  SIZE.x = window.innerWidth / 2 - SIZE.width / 2;
  SIZE.y = window.innerHeight / 2 - SIZE.height / 2;

  CONTAINER.style.width = `${SIZE.width}px`;
  CONTAINER.style.height = `${SIZE.height}px`;
  CONTAINER.style.left = `${SIZE.x}`;
  CONTAINER.style.top = `${SIZE.y}`;

  const cellSide = Math.min(CONTAINER.offsetWidth, CONTAINER.offsetHeight - (1300) / 9) /
    3;
  CELLS.forEach((cell)=>{
    cell.style.width = `${cellSide}px`;
    cell.style.height = `${cellSide}px`;
  })
  
}

handleResize();