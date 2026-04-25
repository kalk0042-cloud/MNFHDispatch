// employee-portal.js

function loadGreeting() {
  const title = document.getElementById("greetingTitle");
  if (!title) return;

  const hour = new Date().getHours();
  let greeting = "Hi";

  if (hour < 12) greeting = "Good morning";
  else if (hour < 18) greeting = "Good afternoon";
  else greeting = "Good evening";

  title.textContent = greeting;
}

function initExpandable() {
  document.querySelectorAll(".expand-toggle").forEach(btn => {
    btn.addEventListener("click", () => {
      btn.closest(".expandable").classList.toggle("open");
    });
  });
}

function initForms() {
  const timeOffForm = document.getElementById("timeOffForm");
  const contactForm = document.getElementById("contactUpdateForm");

  if (timeOffForm) {
    timeOffForm.addEventListener("submit", e => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(timeOffForm));
      savePortalEntry("Time Off Request", data);
      timeOffForm.reset();
      alert("Time off request submitted.");
    });
  }

  if (contactForm) {
    contactForm.addEventListener("submit", e => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(contactForm));
      savePortalEntry("Contact Update", data);
      contactForm.reset();
      alert("Contact information updated.");
    });
  }
}

function savePortalEntry(type, data) {
  const entry = {
    type,
    time: new Date().toLocaleString(),
    details: data
  };

  const saved = JSON.parse(localStorage.getItem("employeePortalLog") || "[]");
  saved.unshift(entry);
  localStorage.setItem("employeePortalLog", JSON.stringify(saved));
}

document.addEventListener("DOMContentLoaded", () => {
  loadGreeting();
  initExpandable();
  initForms();
});
