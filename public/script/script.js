document.addEventListener("DOMContentLoaded", () => {
  let e = document.body;
  "default" === localStorage.getItem("theme")
    ? e.classList.add("default-mode")
    : e.classList.remove("default-mode"),
    document.addEventListener("click", (t) => {
      if (t.target.closest(".toggle-wrapper")) {
        e.classList.toggle("default-mode");
        let l = e.classList.contains("default-mode") ? "default" : "dark";
        localStorage.setItem("theme", l);
      }
    }),
    fetch("/partials/header.html")
      .then((e) => e.text())
      .then((e) => {
        document.getElementById("header").innerHTML = e;
      }),
    fetch("/partials/toggle.html")
      .then((e) => e.text())
      .then((e) => {
        document.getElementById("li-da-mode-toggle").innerHTML = e;
      }),
    fetch("/partials/socials.html")
      .then((e) => e.text())
      .then((e) => {
        document.getElementById("socials").innerHTML = e;
      }),
    fetch("/partials/subjects.html")
      .then((e) => e.text())
      .then((e) => {
        document.getElementById("subjects").innerHTML = e;
      }),
    fetch("/template/post-lead.html")
      .then((e) => e.text())
      .then((e) => {
        document.getElementById("lead-post-one").innerHTML = e;
      }),
    //  fetch("../partials/toggle.html")
    fetch("/partials/toggle.html")
      .then((e) => e.text())
      .then((e) => {
        document.querySelector(".mode-toggle").innerHTML = e;
      });
});
