// Theme toggle logic
const body = document.body;

// Check theme user
if (localStorage.getItem("theme") === "default") {
  body.classList.add("default-mode");
} else {
  body.classList.remove("default-mode");
}

document.addEventListener("click", (e) => {
  if (e.target.closest(".toggle-wrapper")) {
    body.classList.toggle("default-mode");
    const isDefault = body.classList.contains("default-mode");
    localStorage.setItem("theme", isDefault ? "default" : "dark");
  }
});
// Inject header
fetch("partials/header.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("header").innerHTML = data;
  });

// Inject toggle
fetch("partials/toggle.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("li-da-mode-toggle").innerHTML = data;
  });

// Inject navbar
fetch("partials/socials.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("socials").innerHTML = data;
  });

// Inject subject navbar
fetch("partials/subjects.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("subjects").innerHTML = data;
  });

// Inject post lead
fetch("template/post-lead.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("lead-post-one").innerHTML = data;
  });
