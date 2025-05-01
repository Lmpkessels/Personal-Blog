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
      });
});
