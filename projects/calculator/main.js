let display = document.getElementById("display");
let currentInput = "";
let previousInput = "";
let operator = "";
let lastResult = "";
let lastInput = "";
let lastOperator = "";

function debugState() {
  console.log(
    `display: ${display}\ncurrentInput: ${currentInput}\npreviousInput: ${previousInput}\noperator: ${operator}\nlastResult: ${lastResult}\nlastInput: ${lastInput}\nlastOperator: ${lastOperator}`
  );
}

function appendNumber(number) {
  clearOperator();
  if (currentInput.includes(".") && number === ".") return;
  number = currentInput === "" && number === "." ? "0." : number;
  currentInput += number;
  updateDisplay(currentInput);
}

function updateDisplay(number) {
  display.innerText = number.toString().replace(".", ",");
}

function clearDisplay() {
  if (currentInput !== "" && previousInput !== "" && operator !== "") {
    currentInput = "";
    clearOperator();
    updateDisplay("0");
  } else if (previousInput !== "" && operator !== "") {
    currentInput = previousInput;
    previousInput = "";
    operator = "";
    clearOperator();
  } else {
    currentInput = "";
    previousInput = "";
    operator = "";
    lastResult = "";
    lastInput = "";
    lastOperator = "";
    updateDisplay("0");
  }
}

function toggleSign() {
  if (currentInput) {
    currentInput = (parseFloat(currentInput) * -1).toString();
    updateDisplay(currentInput);
  }
}

function percent() {
  if (currentInput) {
    currentInput = (parseFloat(currentInput) / 100).toString();
    updateDisplay(currentInput);
  }
}

function clearOperator() {
  document.querySelectorAll(".selected").forEach((operator) => {
    operator.classList.remove("selected");
  });
}

function setOperator(op) {
  clearOperator();
  let element = document.getElementById(op);
  element.classList.add("selected");

  if (currentInput === "" && lastResult === "") return;
  if (previousInput !== "") calculate();
  operator = op;
  previousInput = currentInput;
  currentInput = "";
}

function calculate() {
  clearOperator();
  previousInput = previousInput === "" ? lastResult : parseFloat(previousInput);
  currentInput = currentInput === "" ? lastInput : parseFloat(currentInput);
  operator = operator === "" ? lastOperator : operator;

  if (previousInput === "" || currentInput === "") return;
  let result;
  let prev = parseFloat(previousInput);
  let curr = parseFloat(currentInput);

  switch (operator) {
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

  lastResult = result.toString();
  lastInput = currentInput;
  lastOperator = operator;
  updateDisplay(lastResult);
  previousInput = "";
  currentInput = "";
  operator = "";
}

document.addEventListener("keydown", (event) => {
  const key = event.key;
  if (!isNaN(key) || key === "." || key === ",") {
    appendNumber(key.replace(",","."));
  } else if (key === "Enter" || key === "=") {
    calculate();
  } else if (key === "Backspace") {
    currentInput = currentInput.slice(0, -1);
    updateDisplay(currentInput || "0");
  } else if (key === "Escape" || key.toLowerCase() === "c") {
    clearDisplay();
  } else if (key === "+" || key === "-" || key === "*" || key === "/") {
    let operatorMap = { "+": "sum", "-": "dif", "*": "mul", "/": "div" };
    setOperator(operatorMap[key]);
  }
});
