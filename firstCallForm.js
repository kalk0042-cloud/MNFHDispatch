

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("firstCallForm");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch(
        "YOUR_APPS_SCRIPT_URL_HERE",
        {
          method: "POST",
          body: JSON.stringify({
            type: "firstCall",
            data
          })
        }
      );

      alert("First Call Submitted!");
      form.reset();

    } catch (err) {
      alert("Error submitting first call.");
      console.error(err);
    }
  });
});
