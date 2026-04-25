
document.addEventListener("DOMContentLoaded", () => {
  loadFuneralHomeDetails();
});

function loadFuneralHomeDetails() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  const home = FUNERAL_HOMES.find(fh => fh.id === id);

  if (!home) {
    document.getElementById("fhDetailCard").innerHTML =
      "<p>Funeral home not found.</p>";
    return;
  }

  
  setText("fhNameHeader", home.name);

  setText("fhName", home.name);
  setText("fhCity", home.city);
  setText("fhAddress", home.address);

 
  setText("fhPhoneMain", home.phoneMain);
  setText("fhPhoneAlt", home.phoneAlt);
  setText("fhDid", home.didNumber);


  const emailList = document.getElementById("fhEmails");
  emailList.innerHTML = "";
  (home.emails || []).forEach(email => {
    const li = document.createElement("li");
    li.textContent = email;
    emailList.appendChild(li);
  });

  setText("fhHours", home.hours);


  setHTML("fhSpecial", formatMultiline(home.specialInstructions));

  
  setHTML("fhNotes", formatMultiline(home.notes));

  const photo = document.getElementById("fhPhoto");
  if (home.photo) {
    photo.src = home.photo;
    photo.style.display = "block";
  } else {
    photo.style.display = "none";
  }

 
  const website = document.getElementById("fhWebsite");
  if (home.website) {
    website.href = home.website;
    website.style.display = "inline-block";
  } else {
    website.style.display = "none";
  }

  // Obituaries
  const obits = document.getElementById("fhObits");
  if (home.obituaryLink) {
    obits.href = home.obituaryLink;
    obits.style.display = "inline-block";
  } else {
    obits.style.display = "none";
  }
}


function setText(id, value) {
  document.getElementById(id).textContent = value || "—";
}

function setHTML(id, value) {
  document.getElementById(id).innerHTML = value || "—";
}

// Markdown-style formatting
function formatMultiline(text) {
  if (!text) return "—";

  return text
    .replace(/\n/g, "<br>")
    .replace(/### (.*)/g, "<h4>$1</h4>")
    .replace(/- (.*)/g, "<li>$1</li>");
}
