import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// Fade sections up as they scroll into view.
const seen = new IntersectionObserver((entries) => {
  for (const e of entries) if (e.isIntersecting) { e.target.classList.add("shown"); seen.unobserve(e.target); }
}, { threshold: 0.15 });
new MutationObserver(() => document.querySelectorAll(".reveal:not(.shown)").forEach((el) => seen.observe(el)))
  .observe(document.body, { childList: true, subtree: true });

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
