// Global variables
let currentResult = 0;
let lastCalculation = { operation: "add", value: 0 };
let readyToCalculate = true;

// Calculation functions
function calculateResult() {
  const display = document.getElementById("display");

  try {
    switch (lastCalculation.operation) {
      case "add":
        currentResult += lastCalculation.value;
        break;
      case "subtract":
        currentResult -= lastCalculation.value;
        break;
      case "multiply":
        currentResult *= lastCalculation.value;
        break;
      case "divide":
        if (lastCalculation.value === 0) {
          currentResult = "Error";
        } else {
          currentResult /= lastCalculation.value;
        }
        break;
    }
  } catch (error) {
    console.error(error);
    currentResult = "Error";
  }

  display.textContent = currentResult;
  readyToCalculate = true;
}

function calculatePercentage() {
  const display = document.getElementById("display");
  const result = parseFloat(display.innerText);
  currentResult = result / 100;
  display.textContent = currentResult;
  readyToCalculate = true;
}

// Display management functions
function writeOnDisplay(text) {
  const display = document.getElementById("display");
  const currentText = display.innerText;

  const selectedOperator = document.querySelector(".selected");

  if (selectedOperator !== null) {
    lastCalculation.operation = selectedOperator.id;
    lastCalculation.value = parseFloat(text);
    display.textContent = text;
    selectedOperator.classList.remove("selected");
    readyToCalculate = true;
  } else if (currentText === "0" || currentText === "Error" || readyToCalculate) {
    display.textContent = text;
    currentResult = parseFloat(text);
    readyToCalculate = false;
  } else {
    display.textContent = currentText + text;
    currentResult = parseFloat(currentText + text);
    readyToCalculate = false;
  }
}

function clearDisplay() {
  clearSelectedOperator();
  const display = document.getElementById("display");
  if (readyToCalculate && currentResult === 0) {
    lastCalculation = { operation: "add", value: 0 };
  }
  readyToCalculate = true;
  currentResult = 0;
  display.textContent = currentResult;

}

function toggleSign() {
  const display = document.getElementById("display");
  const number = parseFloat(display.innerText);
  currentResult = -number;
  display.innerText = currentResult;
}

// Operator management functions
function setSelectedOperator(id) {
  clearSelectedOperator();
  document.getElementById(id).classList.add("selected");
}

function clearSelectedOperator() {
  document.querySelectorAll(".operator.selected").forEach(operator => {
    operator.classList.remove("selected");
  });
}

// Debug function
function debugState() {
  console.log(currentResult, readyToCalculate, lastCalculation);
}
