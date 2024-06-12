function toggleVisibility(id) {
  const section = document.getElementById(`section-${id}`);
  const arrowIcon = document.getElementById(`arrow-${id}`);

  if (section.classList.contains("hidden")) {
    section.classList.remove("hidden");
    arrowIcon.classList.remove("fa-chevron-down");
    arrowIcon.classList.add("fa-chevron-up");
  } else {
    section.classList.add("hidden");
    arrowIcon.classList.remove("fa-chevron-up");
    arrowIcon.classList.add("fa-chevron-down");
  }
}

function toggleFunction() {
  const toggleStatus = document.getElementById("toggleStatus");
  const toggleButton = document.getElementById("toggleButton");
  if (toggleButton.checked) {
    toggleStatus.textContent = "Formato: PDF";
    mostrarSecciones();
  } else {
    toggleStatus.textContent = "Formato: Web";
    ocultarSecciones();
  }

  buscarH2();
}

function mostrarSecciones() {
  for (let index = 1; index <= 6; index++) {
    let section = document.getElementById(`section-${index}`);

    if (section.classList.contains("hidden")) {
      section.classList.remove("hidden");

      let arrow = document.getElementById(`arrow-${index}`);
      arrow.classList.remove("fa-chevron-down");
      arrow.classList.add("fa-chevron-up");
    }
  }
}

function ocultarSecciones() {
  for (let index = 1; index <= 6; index++) {
    let section = document.getElementById(`section-${index}`);

    if (!section.classList.contains("hidden")) {
      section.classList.add("hidden");

      let arrow = document.getElementById(`arrow-${index}`);
      arrow.classList.remove("fa-chevron-up");
      arrow.classList.add("fa-chevron-down");
    }
  }
}

function buscarH2() {
  // Buscar todos los elementos h2
  const allH2 = document.querySelectorAll("h2");

  allH2.forEach((h2) => {
    if (h2.classList.contains("hidden")) {
      h2.classList.remove("hidden");
    } else {
      h2.classList.add("hidden");
    }
  });
}
