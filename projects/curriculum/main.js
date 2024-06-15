function toggleFormat() {
  const toggleStatus = document.getElementById("toggleStatus");
  const toggleButton = document.getElementById("toggleButton");
  if (toggleButton.checked) {
    toggleStatus.textContent = "Formato: PDF";
    showSections();
  } else {
    toggleStatus.textContent = "Formato: Web";
    hideSections();
  }

  updateTitles();
}

function updateTitles() {
  const all = document.querySelectorAll(".section-title");

  all.forEach((element) => {
    if (element.classList.contains("hidden")) {
      element.classList.remove("hidden");
    } else {
      element.classList.add("hidden");
    }
  });
}

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

function showSections() {
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

function hideSections() {
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