
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "modernteal";
  applyTheme(savedTheme);

  const presetPicker = document.getElementById("themePresetPicker");
  if (presetPicker) {
    presetPicker.value = savedTheme;
    presetPicker.addEventListener("change", (e) => {
      if (e.target.value) applyTheme(e.target.value);
    });
  }

  const resetBtn = document.getElementById("resetTheme");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      applyTheme("modernteal");
      if (presetPicker) presetPicker.value = "modernteal";
    });
  }

  const themeToggle = document.getElementById("themeToggle");
  const themePanel = document.getElementById("themePanel");
  if (themeToggle && themePanel) {
    themePanel.style.display = "none";
    themeToggle.addEventListener("click", () => {
      themePanel.style.display =
        themePanel.style.display === "none" ? "block" : "none";
    });
  }
});

function applyTheme(themeName) {
  document.body.setAttribute("data-theme", themeName);
  localStorage.setItem("theme", themeName);
}
