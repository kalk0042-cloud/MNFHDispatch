const API = "https://script.google.com/macros/s/AKfycbzMGxnJitCadY7Q9Q5TvT-KFPIL3KUjhmixFz6t67Qs9W1tjQ-n5r3BXbTWy64Lxg7v/exec";


document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("callForm");
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    formData.append("formType", "callLog");

    try {
      const res = await fetch(API, {
        method: "POST",
        body: formData
      });

      const result = await res.json();

      if (result.success) {
        alert("Call logged successfully.");
        form.reset();
      } else {
        alert("Error submitting call. Please try again.");
      }
    } catch (err) {
      console.error("Call intake error:", err);
      alert("Network error. Please try again.");
    }
  });
});
