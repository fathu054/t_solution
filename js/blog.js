// Malayalam Blog Starter - main.js

// Theme preference load
(function initTheme() {
  const stored = localStorage.getItem("theme");
  const root = document.documentElement;
  const isDark = stored ? stored === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (isDark) root.classList.add("dark");
})();

// DOM ready
document.addEventListener("DOMContentLoaded", function() {
  // Theme toggle
  const toggle = document.getElementById("themeToggle");
  if (document.documentElement.classList.contains("dark")) {
    toggle.checked = true;
  }
  toggle.addEventListener("change", () => {
    const root = document.documentElement;
    root.classList.toggle("dark");
    const mode = root.classList.contains("dark") ? "dark" : "light";
    localStorage.setItem("theme", mode);
  });

  // Mobile menu toggle
  const btn = document.querySelector(".menu-toggle");
  const list = document.getElementById("nav-list");
  if (btn && list) {
    btn.addEventListener("click", () => {
      const expanded = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", String(!expanded));
      list.classList.toggle("open");
    });
  }

  // Fake search (demo)
  const form = document.querySelector(".search-box");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const q = form.querySelector("input[type='search']").value.trim();
      if (q) alert(`താങ്കൾ തിരഞ്ഞത്: ${q}`);
    });
  }
});