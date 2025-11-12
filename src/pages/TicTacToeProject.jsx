import { useState } from "react";
import { Link } from "react-router-dom";

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);
  const [gameOn, setGameOn] = useState(true);
  const [winningCells, setWinningCells] = useState([]);

  const WINNING_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const checkWin = (currentBoard, player) => {
    for (const combination of WINNING_COMBINATIONS) {
      if (combination.every((index) => currentBoard[index] === player)) {
        return combination;
      }
    }
    return null;
  };

  const isDraw = (currentBoard) => {
    return currentBoard.every((cell) => cell !== null);
  };

  const handleClick = (index) => {
    if (!gameOn || board[index]) return;

    const newBoard = [...board];
    const currentPlayer = isXTurn ? "X" : "O";
    newBoard[index] = currentPlayer;
    setBoard(newBoard);

    const winCombination = checkWin(newBoard, currentPlayer);
    if (winCombination) {
      setWinningCells(winCombination);
      setGameOn(false);
      setTimeout(() => {
        const message = `¡Ganó ${currentPlayer}!`;
        alert(message);
      }, 500);
    } else if (isDraw(newBoard)) {
      setGameOn(false);
      setTimeout(() => {
        alert("¡Empate!");
      }, 100);
    } else {
      setIsXTurn(!isXTurn);
    }
  };

  const restartGame = () => {
    setBoard(Array(9).fill(null));
    setIsXTurn(true);
    setGameOn(true);
    setWinningCells([]);
  };

  const getWinner = () => {
    if (winningCells.length > 0) {
      return board[winningCells[0]];
    }
    return null;
  };

  const winner = getWinner();
  const isDraw_ = !gameOn && !winner;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 py-8">
      <div className="max-w-2xl mx-auto px-4">
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
          <h1 className="text-5xl font-bold text-white mb-4">Tres en Línea</h1>
          <div className="text-2xl text-purple-200 font-semibold">
            {winner ? (
              <span className="text-yellow-300">¡Ganó {winner}!</span>
            ) : isDraw_ ? (
              <span className="text-yellow-300">¡Empate!</span>
            ) : (
              <span>
                Turno de:{" "}
                <span className="text-yellow-300">{isXTurn ? "X" : "O"}</span>
              </span>
            )}
          </div>
        </div>

        {/* Tablero */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-2xl mb-8">
          <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
            {board.map((cell, index) => (
              <button
                key={index}
                onClick={() => handleClick(index)}
                disabled={!gameOn || cell !== null}
                className={`
                  aspect-square rounded-2xl text-6xl font-bold transition-all duration-300
                  ${cell === "X" ? "text-blue-400" : "text-pink-400"}
                  ${
                    winningCells.includes(index)
                      ? "bg-yellow-400 scale-110 shadow-xl"
                      : "bg-white/20 hover:bg-white/30 hover:scale-105"
                  }
                  ${
                    !gameOn || cell !== null
                      ? "cursor-not-allowed"
                      : "cursor-pointer"
                  }
                  ${cell ? "shadow-lg" : ""}
                `}
              >
                {cell}
              </button>
            ))}
          </div>
        </div>

        {/* Botón de reinicio */}
        <div className="text-center">
          <button
            onClick={restartGame}
            className="bg-yellow-400 hover:bg-yellow-300 text-purple-900 font-bold py-4 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 text-lg"
          >
            🔄 Reiniciar Juego
          </button>
        </div>

        {/* Instrucciones */}
        <div className="mt-8 text-center">
          <div className="inline-block bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white max-w-md">
            <h3 className="text-xl font-semibold mb-3">Cómo Jugar</h3>
            <ul className="text-sm space-y-2 text-left">
              <li>✓ Los jugadores se turnan para colocar X u O</li>
              <li>✓ Gana el primero que logre tres en línea</li>
              <li>
                ✓ Las líneas pueden ser horizontales, verticales o diagonales
              </li>
              <li>✓ Si se llena el tablero sin ganador, es empate</li>
            </ul>
          </div>
        </div>

        {/* Estadísticas del juego */}
        <div className="mt-6 grid grid-cols-2 gap-4 max-w-md mx-auto">
          <div className="bg-blue-500/20 backdrop-blur-sm rounded-lg p-4 text-center">
            <div className="text-4xl font-bold text-blue-400 mb-1">X</div>
            <div className="text-sm text-white/80">Jugador 1</div>
          </div>
          <div className="bg-pink-500/20 backdrop-blur-sm rounded-lg p-4 text-center">
            <div className="text-4xl font-bold text-pink-400 mb-1">O</div>
            <div className="text-sm text-white/80">Jugador 2</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicTacToe;
