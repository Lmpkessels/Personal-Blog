// Theme toggle logic
const body = document.body;

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

// Inject navbar
fetch("main/components/navbar.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("main-header").innerHTML = data;
  });

// Inject subject navbar
fetch("main/components/subject-navbar.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("subject-navbar").innerHTML = data;
  });
