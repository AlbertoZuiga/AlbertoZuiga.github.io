import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const Calculator = () => {
  const [display, setDisplay] = useState("0");
  const [currentValue, setCurrentValue] = useState(null);
  const [pendingOperation, setPendingOperation] = useState(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);
  const [lastOperand, setLastOperand] = useState(null);
  const [lastOperation, setLastOperation] = useState(null);
  const calculatorRef = useRef(null);

  useEffect(() => {
    // Dar foco al contenedor para que capture eventos de teclado
    if (calculatorRef.current) {
      calculatorRef.current.focus();
    }
  }, []);

  const updateDisplay = (value) => {
    setDisplay(value.toString().replace(".", ","));
  };

  const clearDisplay = () => {
    setDisplay("0");
    setCurrentValue(null);
    setPendingOperation(null);
    setWaitingForOperand(false);
    setLastOperand(null);
    setLastOperation(null);
  };

  const inputDigit = (digit) => {
    if (waitingForOperand) {
      setDisplay(String(digit));
      setWaitingForOperand(false);
    } else {
      setDisplay(display === "0" ? String(digit) : display + digit);
    }
  };

  const inputDot = () => {
    if (waitingForOperand) {
      setDisplay("0,");
      setWaitingForOperand(false);
    } else if (!display.includes(",")) {
      setDisplay(display + ",");
    }
  };

  const toggleSign = () => {
    const value = Number.parseFloat(display.replace(",", "."));
    updateDisplay(value * -1);
  };

  const percent = () => {
    const value = Number.parseFloat(display.replace(",", "."));
    updateDisplay(value / 100);
  };

  const performOperation = (nextOperation) => {
    const inputValue = Number.parseFloat(display.replace(",", "."));

    if (currentValue === null) {
      setCurrentValue(inputValue);
    } else if (pendingOperation) {
      const currentVal = currentValue || 0;
      const newValue = calculate(currentVal, inputValue, pendingOperation);

      updateDisplay(newValue);
      setCurrentValue(newValue);
    }

    setWaitingForOperand(true);
    setPendingOperation(nextOperation);
  };

  const calculate = (firstValue, secondValue, operation) => {
    switch (operation) {
      case "sum":
        return firstValue + secondValue;
      case "dif":
        return firstValue - secondValue;
      case "mul":
        return firstValue * secondValue;
      case "div":
        return firstValue / secondValue;
      default:
        return secondValue;
    }
  };

  const performEquals = () => {
    const inputValue = Number.parseFloat(display.replace(",", "."));

    if (pendingOperation && currentValue !== null) {
      const newValue = calculate(currentValue, inputValue, pendingOperation);
      updateDisplay(newValue);
      setLastOperand(inputValue);
      setLastOperation(pendingOperation);
      setCurrentValue(null);
      setPendingOperation(null);
      setWaitingForOperand(true);
    } else if (lastOperation && lastOperand !== null) {
      // Repetir la última operación
      const newValue = calculate(inputValue, lastOperand, lastOperation);
      updateDisplay(newValue);
      setWaitingForOperand(true);
    }
  };

  const handleKeyPress = (e) => {
    const key = e.key;
    if (key >= "0" && key <= "9") {
      inputDigit(key);
    } else if (key === ".") {
      inputDot();
    } else if (key === ",") {
      inputDot();
    } else if (key === "Enter" || key === "=") {
      e.preventDefault();
      performEquals();
    } else if (key === "Backspace") {
      e.preventDefault();
      if (display !== "0" && !waitingForOperand) {
        const newDisplay = display.slice(0, -1) || "0";
        setDisplay(newDisplay);
      }
    } else if (key === "Escape" || key.toLowerCase() === "c") {
      clearDisplay();
    } else if (key === "+") {
      performOperation("sum");
    } else if (key === "-") {
      performOperation("dif");
    } else if (key === "*") {
      performOperation("mul");
    } else if (key === "/") {
      e.preventDefault();
      performOperation("div");
    }
  };

  return (
    <div
      ref={calculatorRef}
      className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 py-8"
      onKeyDown={handleKeyPress}
      tabIndex={0}
      role="application"
      aria-label="Calculadora"
    >
      <SEO 
        title="Calculadora Interactiva - Alberto Zúñiga | Proyecto React"
        description="Calculadora funcional desarrollada con React. Operaciones básicas, soporte para teclado, interfaz responsive. Proyecto interactivo del portfolio de Alberto Zúñiga."
        url="https://albertozuiga.github.io/projects/calculator"
        keywords="calculadora React, proyecto JavaScript, calculadora interactiva, desarrollo frontend"
      />
      <div className="max-w-md mx-auto px-4">
        <div className="mb-6">
          <Link
            to="/projects"
            className="inline-flex items-center text-gray-700 dark:text-white hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
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

        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-6">
          <div className="bg-gray-100 dark:bg-gray-900 rounded-2xl p-6 mb-6 min-h-[100px] flex items-center justify-end">
            <div className="text-gray-900 dark:text-white text-5xl font-light tracking-wider">
              {display}
            </div>
          </div>

          <div className="grid grid-cols-4 gap-3">
            {/* Primera fila */}
            <button
              onClick={clearDisplay}
              className="bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-500 text-gray-900 dark:text-white text-xl font-semibold py-6 rounded-2xl transition-all duration-200 active:scale-95"
            >
              C
            </button>
            <button
              onClick={toggleSign}
              className="bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-500 text-gray-900 dark:text-white text-xl font-semibold py-6 rounded-2xl transition-all duration-200 active:scale-95"
            >
              +/-
            </button>
            <button
              onClick={percent}
              className="bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-500 text-gray-900 dark:text-white text-xl font-semibold py-6 rounded-2xl transition-all duration-200 active:scale-95"
            >
              %
            </button>
            <button
              onClick={() => performOperation("div")}
              className={`${
                pendingOperation === "div" ? "bg-primary-600" : "bg-primary-500"
              } hover:bg-primary-600 text-white text-2xl font-semibold py-6 rounded-2xl transition-all duration-200 active:scale-95`}
            >
              ÷
            </button>

            {/* Segunda fila */}
            {["7", "8", "9"].map((num) => (
              <button
                key={num}
                onClick={() => inputDigit(num)}
                className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white text-xl font-semibold py-6 rounded-2xl transition-all duration-200 active:scale-95"
              >
                {num}
              </button>
            ))}
            <button
              onClick={() => performOperation("mul")}
              className={`${
                pendingOperation === "mul" ? "bg-primary-600" : "bg-primary-500"
              } hover:bg-primary-600 text-white text-2xl font-semibold py-6 rounded-2xl transition-all duration-200 active:scale-95`}
            >
              ×
            </button>

            {/* Tercera fila */}
            {["4", "5", "6"].map((num) => (
              <button
                key={num}
                onClick={() => inputDigit(num)}
                className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white text-xl font-semibold py-6 rounded-2xl transition-all duration-200 active:scale-95"
              >
                {num}
              </button>
            ))}
            <button
              onClick={() => performOperation("dif")}
              className={`${
                pendingOperation === "dif" ? "bg-primary-600" : "bg-primary-500"
              } hover:bg-primary-600 text-white text-2xl font-semibold py-6 rounded-2xl transition-all duration-200 active:scale-95`}
            >
              −
            </button>

            {/* Cuarta fila */}
            {["1", "2", "3"].map((num) => (
              <button
                key={num}
                onClick={() => inputDigit(num)}
                className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white text-xl font-semibold py-6 rounded-2xl transition-all duration-200 active:scale-95"
              >
                {num}
              </button>
            ))}
            <button
              onClick={() => performOperation("sum")}
              className={`${
                pendingOperation === "sum" ? "bg-primary-600" : "bg-primary-500"
              } hover:bg-primary-600 text-white text-2xl font-semibold py-6 rounded-2xl transition-all duration-200 active:scale-95`}
            >
              +
            </button>

            {/* Quinta fila */}
            <button
              onClick={() => inputDigit("0")}
              className="col-span-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white text-xl font-semibold py-6 rounded-2xl transition-all duration-200 active:scale-95"
            >
              0
            </button>
            <button
              onClick={inputDot}
              className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white text-xl font-semibold py-6 rounded-2xl transition-all duration-200 active:scale-95"
            >
              ,
            </button>
            <button
              onClick={performEquals}
              className="bg-primary-500 hover:bg-primary-600 text-white text-2xl font-semibold py-6 rounded-2xl transition-all duration-200 active:scale-95"
            >
              =
            </button>
          </div>
        </div>

        <div className="text-center mt-6 text-gray-600 dark:text-gray-400 text-sm">
          Usa el teclado para una experiencia más rápida
        </div>
      </div>
    </div>
  );
};

export default Calculator;
