// Lógica pura de la calculadora. División por cero devuelve "Error".
export const calculate = (firstValue, secondValue, operation) => {
  switch (operation) {
    case "sum":
      return firstValue + secondValue;
    case "dif":
      return firstValue - secondValue;
    case "mul":
      return firstValue * secondValue;
    case "div":
      return secondValue === 0 ? "Error" : firstValue / secondValue;
    default:
      return secondValue;
  }
};
