// Wait until the page is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;

  // Check saved theme in browser (default or dark)
  if (localStorage.getItem("theme") === "default") {
    body.classList.add("default-mode"); // Apply default theme
  } else {
    body.classList.remove("default-mode"); // Use dark theme
  }

  // When you click on the toggle button, switch theme
  document.addEventListener("click", (e) => {
    if (e.target.closest(".toggle-wrapper")) {
      body.classList.toggle("default-mode"); // Switch theme class
      const currentTheme = body.classList.contains("default-mode")
        ? "default"
        : "dark";
      localStorage.setItem("theme", currentTheme); // Save theme choice
    }
  });

  // Load HTML parts into your page
  fetch("partials/header.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("header").innerHTML = data;
    });

  fetch("partials/toggle.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("li-da-mode-toggle").innerHTML = data;
    });

  fetch("partials/socials.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("socials").innerHTML = data;
    });

  fetch("partials/subjects.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("subjects").innerHTML = data;
    });

  fetch("template/post-lead.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("lead-post-one").innerHTML = data;
    });
  fetch("../partials/toggle.html")
    .then((response) => response.text())
    .then((data) => {
      document.querySelector(".mode-toggle").innerHTML = data;
    });
});
