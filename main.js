const jsDiv = document.getElementById("js");
const jsFiles = ["curriculum.js"];

jsFiles.forEach((file) => {
  const src = "./js/" + file;
  const script = document.createElement("script");
  script.src = src;

  jsDiv.appendChild(script);
});