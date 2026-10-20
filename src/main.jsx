import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./i18n";
import App from "./App.jsx";

// Quita el <head> estático de scripts/prerender.mjs; SEO.jsx lo reemplaza
document.querySelectorAll("[data-prerender]").forEach((el) => el.remove());

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
