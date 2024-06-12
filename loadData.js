const jsDiv = document.getElementById("js");
const jsFiles = ["toggle-button.js"];
jsFiles.forEach((file) => {
  const src = "./js/" + file;
  const script = document.createElement("script");
  script.src = src;

  jsDiv.appendChild(script);
});

const cssFiles = [
  "download-curriculum.css",
  "class-styles.css",
  "footer-styles.css",
  "nav-styles.css",
  "table-styles.css",
  "tag-styles.css",
  "toggle-styles.css",
];

cssFiles.forEach((file) => {
  const href = "./styles/" + file;
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = href;

  document.head.appendChild(link);
});
