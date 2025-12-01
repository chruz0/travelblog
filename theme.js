/* theme.js
   Simple accessible theme switcher that:
   - Applies theme class to <body>
   - Persists selection to localStorage
   - Closes menu on outside click / Esc
   - Adds basic keyboard support
*/

const themes = [
  "theme-teal",
  "theme-coral",
  "theme-sand",
  "theme-ocean",
  "theme-sunset",
  "theme-night"
];

const menu = document.getElementById("themeMenu");
const toggle = document.getElementById("themeToggle");

// Apply saved theme (or keep default if none)
const saved = localStorage.getItem("preferredTheme");
if (saved && themes.includes(saved)) {
  document.body.classList.add(saved);
}

// Toggle dropdown
toggle.addEventListener("click", (e) => {
  e.stopPropagation();
  menu.classList.toggle("show");
  // focus first button for keyboard users
  const first = menu.querySelector("button");
  if (menu.classList.contains("show") && first) first.focus();
});

// Apply theme when a menu button is clicked
document.querySelectorAll(".theme-menu button").forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    const selected = btn.getAttribute("data-theme");
    if (!selected || !themes.includes(selected)) return;

    // Remove old theme classes
    themes.forEach(t => document.body.classList.remove(t));

    // Add new
    document.body.classList.add(selected);

    // Save selection
    localStorage.setItem("preferredTheme", selected);

    // Close menu
    menu.classList.remove("show");

    // Return focus to the toggle for better keyboard flow
    toggle.focus();
  });

  // Add keyboard support: Enter/Space should activate
  btn.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      e.target.click();
    }
  });
});

// Close menu when clicking outside
document.addEventListener("click", (e) => {
  if (!e.target.closest(".theme-dropdown")) {
    menu.classList.remove("show");
  }
});

// Close on ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    menu.classList.remove("show");
    toggle.focus();
  }
});

// Optional: close menu on window blur (mobile UX)
window.addEventListener("blur", () => menu.classList.remove("show"));
