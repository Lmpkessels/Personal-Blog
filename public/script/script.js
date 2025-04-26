const body = document.body;
"default" === localStorage.getItem("theme")
  ? body.classList.add("default-mode")
  : body.classList.remove("default-mode"),
  document.addEventListener("click", (e) => {
    if (e.target.closest(".toggle-wrapper")) {
      body.classList.toggle("default-mode");
      let t = body.classList.contains("default-mode");
      localStorage.setItem("theme", t ? "default" : "dark");
    }
  }),
  fetch("partials/header.html")
    .then((e) => e.text())
    .then((e) => {
      document.getElementById("header").innerHTML = e;
    }),
  fetch("partials/toggle.html")
    .then((e) => e.text())
    .then((e) => {
      document.getElementById("li-da-mode-toggle").innerHTML = e;
    }),
  fetch("partials/socials.html")
    .then((e) => e.text())
    .then((e) => {
      document.getElementById("socials").innerHTML = e;
    }),
  fetch("partials/subjects.html")
    .then((e) => e.text())
    .then((e) => {
      document.getElementById("subjects").innerHTML = e;
    }),
  fetch("template/post-lead.html")
    .then((e) => e.text())
    .then((e) => {
      document.getElementById("lead-post-one").innerHTML = e;
    });
