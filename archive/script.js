// Toggle mode + check default mode user
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
    /* 
    Fetching parts out of html files stored in folders, to implement in main.
    
    Notes with line of code are for -> 1st = developer mode, 
    2nd = production mode.
    */
    fetch("../partials/toggle.html")
      // fetch("/partials/toggle.html")
      .then((e) => e.text())
      .then((e) => {
        document.querySelector(".mode-toggle").innerHTML = e;
      }),
    fetch("partials/header.html")
      // fetch("/partials/header.html")
      .then((e) => e.text())
      .then((e) => {
        document.getElementById("header").innerHTML = e;
      }),
    // get toggle out of folder partials
    // get socials out of folder partials
    fetch("partials/socials.html")
      // fetch("/partials/socials.html")
      .then((e) => e.text())
      .then((e) => {
        document.getElementById("socials").innerHTML = e;
      }),
    // get subjects out of folder partials
    fetch("partials/subjects.html")
      // fetch("/partials/subjects.html")
      .then((e) => e.text())
      .then((e) => {
        document.getElementById("subjects").innerHTML = e;
      }),
    // get post-lead out of folder template
    fetch("template/post-lead.html")
      // fetch("/template/post-lead.html")
      .then((e) => e.text())
      .then((e) => {
        document.getElementById("lead-post-one").innerHTML = e;
      });
});
