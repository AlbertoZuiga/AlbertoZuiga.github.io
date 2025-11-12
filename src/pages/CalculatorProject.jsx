import { useState } from "react";
import { Link } from "react-router-dom";

const Calculator = () => {
  const [display, setDisplay] = useState("0");
  const [currentInput, setCurrentInput] = useState("");
  const [previousInput, setPreviousInput] = useState("");
  const [operator, setOperatorState] = useState("");
  const [lastResult, setLastResult] = useState("");
  const [lastInput, setLastInput] = useState("");
  const [lastOperator, setLastOperator] = useState("");

  const updateDisplay = (value) => {
    setDisplay(value.toString().replace(".", ","));
  };

  const appendNumber = (number) => {
    setOperatorState("");
    if (currentInput.includes(".") && number === ".") return;
    const newNumber = currentInput === "" && number === "." ? "0." : number;
    const newInput = currentInput + newNumber;
    setCurrentInput(newInput);
    updateDisplay(newInput);
  };

  const clearDisplay = () => {
    if (currentInput !== "" && previousInput !== "" && operator !== "") {
      setCurrentInput("");
      setOperatorState("");
      updateDisplay("0");
    } else if (previousInput !== "" && operator !== "") {
      setCurrentInput(previousInput);
      setPreviousInput("");
      setOperatorState("");
      setOperatorState("");
    } else {
      setCurrentInput("");
      setPreviousInput("");
      setOperatorState("");
      setLastResult("");
      setLastInput("");
      setLastOperator("");
      updateDisplay("0");
    }
  };

  const toggleSign = () => {
    if (currentInput) {
      const newValue = (parseFloat(currentInput) * -1).toString();
      setCurrentInput(newValue);
      updateDisplay(newValue);
    }
  };

  const percent = () => {
    if (currentInput) {
      const newValue = (parseFloat(currentInput) / 100).toString();
      setCurrentInput(newValue);
      updateDisplay(newValue);
    }
  };

  const handleSetOperator = (op) => {
    if (currentInput === "" && lastResult === "") return;
    if (previousInput !== "") calculate();
    setOperatorState(op);
    setPreviousInput(currentInput);
    setCurrentInput("");
  };

  const calculate = () => {
    const prev =
      previousInput === "" ? parseFloat(lastResult) : parseFloat(previousInput);
    const curr =
      currentInput === "" ? parseFloat(lastInput) : parseFloat(currentInput);
    const op = operator === "" ? lastOperator : operator;

    if (isNaN(prev) || isNaN(curr)) return;

    let result;
    switch (op) {
      case "sum":
        result = prev + curr;
        break;
      case "dif":
        result = prev - curr;
        break;
      case "mul":
        result = prev * curr;
        break;
      case "div":
        result = prev / curr;
        break;
      default:
        return;
    }

    const resultStr = result.toString();
    setLastResult(resultStr);
    setLastInput(currentInput);
    setLastOperator(operator);
    updateDisplay(resultStr);
    setPreviousInput("");
    setCurrentInput("");
    setOperatorState("");
  };

  const handleKeyPress = (e) => {
    const key = e.key;
    if (!isNaN(key) || key === "." || key === ",") {
      appendNumber(key.replace(",", "."));
    } else if (key === "Enter" || key === "=") {
      calculate();
    } else if (key === "Backspace") {
      const newInput = currentInput.slice(0, -1);
      setCurrentInput(newInput);
      updateDisplay(newInput || "0");
    } else if (key === "Escape" || key.toLowerCase() === "c") {
      clearDisplay();
    } else if (key === "+" || key === "-" || key === "*" || key === "/") {
      const operatorMap = { "+": "sum", "-": "dif", "*": "mul", "/": "div" };
      handleSetOperator(operatorMap[key]);
    }
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-8"
      onKeyDown={handleKeyPress}
      tabIndex="0"
    >
      <div className="max-w-md mx-auto px-4">
        <div className="mb-6">
          <Link
            to="/projects"
            className="inline-flex items-center text-white hover:text-primary-400 transition-colors"
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

        <div className="bg-gray-800 rounded-3xl shadow-2xl p-6">
          <div className="bg-gray-900 rounded-2xl p-6 mb-6 min-h-[100px] flex items-center justify-end">
            <div className="text-white text-5xl font-light tracking-wider">
              {display}
            </div>
          </div>

          <div className="grid grid-cols-4 gap-3">
            {/* Primera fila */}
            <button
              onClick={clearDisplay}
              className="bg-gray-600 hover:bg-gray-500 text-white text-xl font-semibold py-6 rounded-2xl transition-all duration-200 active:scale-95"
            >
              C
            </button>
            <button
              onClick={toggleSign}
              className="bg-gray-600 hover:bg-gray-500 text-white text-xl font-semibold py-6 rounded-2xl transition-all duration-200 active:scale-95"
            >
              +/-
            </button>
            <button
              onClick={percent}
              className="bg-gray-600 hover:bg-gray-500 text-white text-xl font-semibold py-6 rounded-2xl transition-all duration-200 active:scale-95"
            >
              %
            </button>
            <button
              onClick={() => handleSetOperator("div")}
              className={`${
                operator === "div" ? "bg-primary-600" : "bg-primary-500"
              } hover:bg-primary-600 text-white text-2xl font-semibold py-6 rounded-2xl transition-all duration-200 active:scale-95`}
            >
              ÷
            </button>

            {/* Segunda fila */}
            {["7", "8", "9"].map((num) => (
              <button
                key={num}
                onClick={() => appendNumber(num)}
                className="bg-gray-700 hover:bg-gray-600 text-white text-xl font-semibold py-6 rounded-2xl transition-all duration-200 active:scale-95"
              >
                {num}
              </button>
            ))}
            <button
              onClick={() => handleSetOperator("mul")}
              className={`${
                operator === "mul" ? "bg-primary-600" : "bg-primary-500"
              } hover:bg-primary-600 text-white text-2xl font-semibold py-6 rounded-2xl transition-all duration-200 active:scale-95`}
            >
              ×
            </button>

            {/* Tercera fila */}
            {["4", "5", "6"].map((num) => (
              <button
                key={num}
                onClick={() => appendNumber(num)}
                className="bg-gray-700 hover:bg-gray-600 text-white text-xl font-semibold py-6 rounded-2xl transition-all duration-200 active:scale-95"
              >
                {num}
              </button>
            ))}
            <button
              onClick={() => handleSetOperator("dif")}
              className={`${
                operator === "dif" ? "bg-primary-600" : "bg-primary-500"
              } hover:bg-primary-600 text-white text-2xl font-semibold py-6 rounded-2xl transition-all duration-200 active:scale-95`}
            >
              −
            </button>

            {/* Cuarta fila */}
            {["1", "2", "3"].map((num) => (
              <button
                key={num}
                onClick={() => appendNumber(num)}
                className="bg-gray-700 hover:bg-gray-600 text-white text-xl font-semibold py-6 rounded-2xl transition-all duration-200 active:scale-95"
              >
                {num}
              </button>
            ))}
            <button
              onClick={() => handleSetOperator("sum")}
              className={`${
                operator === "sum" ? "bg-primary-600" : "bg-primary-500"
              } hover:bg-primary-600 text-white text-2xl font-semibold py-6 rounded-2xl transition-all duration-200 active:scale-95`}
            >
              +
            </button>

            {/* Quinta fila */}
            <button
              onClick={() => appendNumber("0")}
              className="col-span-2 bg-gray-700 hover:bg-gray-600 text-white text-xl font-semibold py-6 rounded-2xl transition-all duration-200 active:scale-95"
            >
              0
            </button>
            <button
              onClick={() => appendNumber(".")}
              className="bg-gray-700 hover:bg-gray-600 text-white text-xl font-semibold py-6 rounded-2xl transition-all duration-200 active:scale-95"
            >
              ,
            </button>
            <button
              onClick={calculate}
              className="bg-primary-500 hover:bg-primary-600 text-white text-2xl font-semibold py-6 rounded-2xl transition-all duration-200 active:scale-95"
            >
              =
            </button>
          </div>
        </div>

        <div className="text-center mt-6 text-gray-400 text-sm">
          Usa el teclado para una experiencia más rápida
        </div>
      </div>
    </div>
  );
};

export default Calculator;
