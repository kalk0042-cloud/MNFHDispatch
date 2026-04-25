// on-call-dashboard.js


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


const ON_CALL_SCHEDULE = [
  { funeralHome: "Anderson", director: "Kyle", start: "2026-04-20T00:00", end: null },
  { funeralHome: "Brooks", director: "Margaret", start: "2026-04-20T00:00", end: null },
  { funeralHome: "Bertas", director: "Matt", start: "2026-04-20T00:00", end: null },

  { funeralHome: "Dares", director: "Christina", start: "2026-04-20T16:00", end: "2026-04-22T08:30" },
  { funeralHome: "Dares", director: "Johnathon", start: "2026-04-22T08:30", end: "2026-04-30T23:59" },
  { funeralHome: "Dares", director: "Erica", start: "2026-05-01T00:00", end: "2026-05-05T23:59" },

  { funeralHome: "Carlson Lillemoen", director: "Ty", start: "2026-04-20T00:00", end: "2026-05-01T23:59" },

  { funeralHome: "Anatomy Bequest", director: "Sarah", start: "2026-04-20T00:00", end: "2026-04-29T23:59" },
  { funeralHome: "Anatomy Bequest", director: "Dave", start: "2026-04-30T00:00", end: "2026-05-03T23:59" },
  { funeralHome: "Anatomy Bequest", director: "Brittney", start: "2026-05-04T00:00", end: "2026-05-10T23:59" },

  { funeralHome: "Evans Nordby", director: "Maverick", start: "2026-04-20T00:00", end: "2026-05-01T23:59" },
  { funeralHome: "Evans Nordby", director: "Rachel", start: "2026-05-02T00:00", end: "2026-05-06T23:59" },
  { funeralHome: "Evans Nordby", director: "Maverick", start: "2026-05-07T00:00", end: "2026-05-12T23:59" },

  { funeralHome: "Billman Hunt", director: "AJ", start: "2026-04-20T00:00", end: "2026-05-03T23:59" },
  { funeralHome: "Billman Hunt", director: "Chad", start: "2026-05-04T00:00", end: "2026-05-11T23:59" },
  { funeralHome: "Billman Hunt", director: "Tom", start: "2026-05-12T00:00", end: "2026-05-18T23:59" },

  { funeralHome: "Kozlak", director: "Brady", start: "2026-04-20T00:00", end: "2026-04-30T23:59" },
  { funeralHome: "Kozlak", director: "Todd", start: "2026-05-01T00:00", end: "2026-05-07T23:59" },
  { funeralHome: "Kozlak", director: "Kimberly", start: "2026-05-08T00:00", end: "2026-05-15T23:59" },
  { funeralHome: "Kozlak", director: "Brady", start: "2026-05-16T00:00", end: "2026-05-20T23:59" },

  { funeralHome: "Klecatsky", director: "Jennifer", start: "2026-04-20T00:00", end: "2026-05-01T23:59" },
  { funeralHome: "Klecatsky", director: "Tony", start: "2026-05-02T00:00", end: "2026-05-13T23:59" },
  { funeralHome: "Klecatsky", director: "Brynn", start: "2026-05-14T00:00", end: "2026-05-21T23:59" }
];


function getCurrentOnCall() {
  const now = new Date();

  return ON_CALL_SCHEDULE.filter(entry => {
    const start = new Date(entry.start);
    const end = entry.end ? new Date(entry.end) : null;

    return now >= start && (!end || now <= end);
  });
}


function renderCurrentOnCall() {
  const container = document.getElementById("currentOnCall");
  const active = getCurrentOnCall();

  container.innerHTML = active
    .map(a => `
      <div class="oncall-item">
        <strong>${a.funeralHome}</strong><br>
        ${a.director}
      </div>
    `)
    .join("");
}


function renderUpcoming() {
  const container = document.getElementById("upcomingOnCall");

  const upcoming = ON_CALL_SCHEDULE.filter(entry => {
    const start = new Date(entry.start);
    return start > new Date();
  });

  container.innerHTML = upcoming
    .map(u => `
      <div class="oncall-upcoming">
        <strong>${u.funeralHome}</strong><br>
        ${u.director}<br>
        <span>${new Date(u.start).toLocaleString()}</span>
      </div>
    `)
    .join("");
}


function initExpandable() {
  document.querySelectorAll(".expand-toggle").forEach(btn => {
    btn.addEventListener("click", () => {
      btn.closest(".expandable").classList.toggle("open");
    });
  });
}


document.addEventListener("DOMContentLoaded", () => {
  loadGreeting();
  renderCurrentOnCall();
  renderUpcoming();
  initExpandable();
});
