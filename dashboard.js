// ===========================================
// FUNERAL HOME DRAWER — MATCHES YOUR HTML
// Uses #drawerToggle, #drawer, #fhList
// ===========================================

document.addEventListener("DOMContentLoaded", initDrawer);

function initDrawer() {
  const drawer = document.getElementById("drawer");
  const toggle = document.getElementById("drawerToggle");
  const list = document.getElementById("fhList");
  const search = document.getElementById("fhSearch");

  if (!drawer || !toggle || !list) return;

  // Toggle drawer open/close
  toggle.addEventListener("click", () => {
    drawer.classList.toggle("open");
  });

  // Render funeral homes
  function renderDrawer(filter = "") {
    list.innerHTML = "";

    FUNERAL_HOMES
      .slice()
      .sort((a, b) => a.name.localeCompare(b.name))
      .filter(fh =>
        fh.name.toLowerCase().includes(filter.toLowerCase()) ||
        fh.city.toLowerCase().includes(filter.toLowerCase())
      )
      .forEach(fh => {
        const item = document.createElement("div");
        item.className = "drawer-item";
        item.textContent = `${fh.name} (${fh.city})`;

        item.addEventListener("click", () => {
          window.location.href = `funeralHomeDetail.html?id=${fh.id}`;
        });

        list.appendChild(item);
      });
  }

  // Initial load
  renderDrawer();

  // Search filter
  if (search) {
    search.addEventListener("input", () => {
      renderDrawer(search.value);
    });
  }
}
