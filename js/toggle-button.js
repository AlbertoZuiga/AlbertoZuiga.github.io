function toggleFunction() {
  const toggleStatus = document.getElementById('toggleStatus');
  const toggleButton = document.getElementById('toggleButton');
  if (toggleButton.checked) {
      toggleStatus.textContent = "Formato: PDF";
  } else {
      toggleStatus.textContent = "Formato: Web";
  }
}
