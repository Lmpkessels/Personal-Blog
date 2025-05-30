const html = document.documentElement;

// Set theme on load
if (localStorage.getItem("theme") === "default") {
  html.classList.add("default-mode");
}

// Fetch and insert the toggle from partials
// Production
// fetch("/toggle.html")
// Development
fetch("/partials/toggle.html")
  .then((res) => res.text())
  .then((htmlContent) => {
    const container = document.querySelector(".light-dark-toggle");
    container.innerHTML = htmlContent;
    container.style.visibility = "visible";

    // Add toggle listener *after* it's inserted
    container.querySelector(".toggle-wrapper").addEventListener("click", () => {
      html.classList.toggle("default-mode");
      const mode = html.classList.contains("default-mode") ? "default" : "dark";
      localStorage.setItem("theme", mode);
    });
  });