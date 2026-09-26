// Lógica pura del gato: tablero de 9 celdas con "X", "O" o null.
export const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// Devuelve la combinación ganadora de `player` o null si no ganó
export const checkWin = (board, player) => {
  for (const combination of WINNING_COMBINATIONS) {
    if (combination.every((index) => board[index] === player)) {
      return combination;
    }
  }
  return null;
};

export const isDraw = (board) => board.every((cell) => cell !== null);
