const API = "https://script.google.com/macros/s/AKfycbzMGxnJitCadY7Q9Q5TvT-KFPIL3KUjhmixFz6t67Qs9W1tjQ-n5r3BXbTWy64Lxg7v/exec";


document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("serviceRequestForm");
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    formData.append("formType", "serviceRequest");

    try {
      const res = await fetch(API, {
        method: "POST",
        body: formData
      });

      const result = await res.json();

      if (result.success) {
        alert("Service Request submitted successfully.");
        form.reset();
      } else {
        alert("Error submitting Service Request. Please try again.");
      }
    } catch (err) {
      console.error("Service Request submission error:", err);
      alert("Network error. Please try again.");
    }
  });
});
