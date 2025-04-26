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
