import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const TicTacToe = () => {
  const [board, setBoard] = useState(new Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);
  const [gameOn, setGameOn] = useState(true);
  const [winningCells, setWinningCells] = useState([]);
  const [firstPlayer, setFirstPlayer] = useState("X"); // Quien inicia el juego
  const [scores, setScores] = useState({ X: 0, O: 0, draws: 0 });
  const [gamesPlayed, setGamesPlayed] = useState(0);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (e) => {
      const key = e.key.toLowerCase();
      if (key === "n") {
        e.preventDefault();
        restartGame();
      } else if (key === "r" && gamesPlayed > 0) {
        e.preventDefault();
        resetAll();
      }
    };

    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [gamesPlayed]);

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
      
      // Calcular puntos: 3 puntos si empezó primero, 5 puntos si empezó segundo
      const points = currentPlayer === firstPlayer ? 3 : 5;
      
      setTimeout(() => {
        setScores((prev) => ({
          ...prev,
          [currentPlayer]: prev[currentPlayer] + points,
        }));
        setGamesPlayed((prev) => prev + 1);
      }, 100);
    } else if (isDraw(newBoard)) {
      setGameOn(false);
      setTimeout(() => {
        setScores((prev) => ({ ...prev, draws: prev.draws + 1 }));
        setGamesPlayed((prev) => prev + 1);
      }, 100);
    } else {
      setIsXTurn(!isXTurn);
    }
  };

  const restartGame = () => {
    setBoard(new Array(9).fill(null));
    // Alternar quien empieza cada juego
    const nextFirst = firstPlayer === "X" ? "O" : "X";
    setFirstPlayer(nextFirst);
    setIsXTurn(nextFirst === "X");
    setGameOn(true);
    setWinningCells([]);
  };

  const resetAll = () => {
    setBoard(new Array(9).fill(null));
    setIsXTurn(true);
    setGameOn(true);
    setWinningCells([]);
    setFirstPlayer("X");
    setScores({ X: 0, O: 0, draws: 0 });
    setGamesPlayed(0);
  };

  const getWinner = () => {
    if (winningCells.length > 0) {
      return board[winningCells[0]];
    }
    return null;
  };

  const winner = getWinner();
  const isDraw_ = !gameOn && !winner;
  const winPoints = winner && winner === firstPlayer ? 3 : 5;

  // Función para calcular el mensaje de estado
  const getStatusMessage = () => {
    if (winner) {
      const pointsText = winner === firstPlayer ? "(inició primero)" : "(inició segundo)";
      return (
        <div>
          <span className="text-yellow-300">¡Ganó {winner}!</span>
          <div className="text-lg mt-1">
            +{winPoints} puntos {pointsText}
          </div>
        </div>
      );
    }
    if (isDraw_) {
      return <span className="text-yellow-300">¡Empate!</span>;
    }
    return (
      <span>
        Turno de: <span className="text-yellow-300">{isXTurn ? "X" : "O"}</span>
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 py-8">
      <SEO 
        title="Tic-Tac-Toe - Alberto Zúñiga | Juego React"
        description="Juego de Tres en Línea (Tic-Tac-Toe) desarrollado con React. Sistema de puntuación, detección de ganador, navegación por teclado. Proyecto interactivo del portfolio."
        url="https://albertozuiga.github.io/projects/tic-tac-toe"
        keywords="tic-tac-toe React, tres en línea JavaScript, juego interactivo, proyecto React"
      />
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
          <div className="text-2xl md:text-3xl font-bold">
            {getStatusMessage()}
          </div>
          {gamesPlayed > 0 && (
            <div className="text-sm text-purple-200">
              Partidas jugadas: {gamesPlayed} | Atajos: <kbd className="px-1 py-0.5 bg-white/20 rounded text-xs">N</kbd> Siguiente | <kbd className="px-1 py-0.5 bg-white/20 rounded text-xs">R</kbd> Resetear
            </div>
          )}
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
        <div className="text-center flex gap-4 justify-center">
          <button
            onClick={restartGame}
            className="bg-yellow-400 hover:bg-yellow-300 text-purple-900 font-bold py-4 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 text-lg"
          >
            {gameOn ? "🔄 Reiniciar" : "▶️ Siguiente Juego"}
          </button>
          {gamesPlayed > 0 && (
            <button
              onClick={resetAll}
              className="bg-red-500 hover:bg-red-400 text-white font-bold py-4 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 text-lg"
            >
              🗑️ Resetear Todo
            </button>
          )}
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
            <div className="mt-4 pt-4 border-t border-white/20">
              <h4 className="font-semibold mb-2">Sistema de Puntos:</h4>
              <ul className="text-sm space-y-1 text-left">
                <li>🥇 Ganar iniciando primero: <strong>3 puntos</strong></li>
                <li>🏆 Ganar iniciando segundo: <strong>5 puntos</strong></li>
                <li>🔄 Los turnos se alternan cada juego</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Estadísticas del juego */}
        <div className="mt-6 grid grid-cols-3 gap-4 max-w-lg mx-auto">
          <div className="bg-blue-500/20 backdrop-blur-sm rounded-lg p-4 text-center">
            <div className="text-4xl font-bold text-blue-400 mb-1">X</div>
            <div className="text-2xl font-bold text-white mb-1">{scores.X}</div>
            <div className="text-xs text-white/80">puntos</div>
            {firstPlayer === "X" && gameOn && (
              <div className="text-xs text-yellow-300 mt-1">⭐ Inicia</div>
            )}
          </div>
          <div className="bg-purple-500/20 backdrop-blur-sm rounded-lg p-4 text-center">
            <div className="text-3xl font-bold text-purple-300 mb-1">⚖️</div>
            <div className="text-2xl font-bold text-white mb-1">{scores.draws}</div>
            <div className="text-xs text-white/80">empates</div>
          </div>
          <div className="bg-pink-500/20 backdrop-blur-sm rounded-lg p-4 text-center">
            <div className="text-4xl font-bold text-pink-400 mb-1">O</div>
            <div className="text-2xl font-bold text-white mb-1">{scores.O}</div>
            <div className="text-xs text-white/80">puntos</div>
            {firstPlayer === "O" && gameOn && (
              <div className="text-xs text-yellow-300 mt-1">⭐ Inicia</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicTacToe;
