document.addEventListener("DOMContentLoaded", initDrawer);

function initDrawer() {
  const drawer = document.querySelector(".fh-drawer");
  const tab = document.querySelector(".fh-tab");
  const list = document.getElementById("fhDrawerList");
  const search = document.getElementById("fhSearch");

  if (!drawer || !tab || !list) return;

  tab.addEventListener("click", () => {
    drawer.classList.toggle("open");
  });

  
  function renderDrawer(filter = "") {
    list.innerHTML = "";

    FUNERAL_HOMES
      .slice() // clone array
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

  
  renderDrawer();

 
  if (search) {
    search.addEventListener("input", () => {
      renderDrawer(search.value);
    });
  }
}
