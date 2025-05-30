const html = document.documentElement;

// Set theme on load
if (localStorage.getItem("theme") === "default") {
  html.classList.add("default-mode");
}

// Listen for toggle clicks
document.querySelector(".toggle-wrapper").addEventListener("click", () => {
  html.classList.toggle("default-mode");
  const mode = html.classList.contains("default-mode") ? "default" : "dark";
  localStorage.setItem("theme", mode);
});

// // Toggle mode + check default mode user
// let e = document.body;
// /*
//   Check local storage user if theme is light add default-mode,
//   else remove default-mode
//   */
// "default" === localStorage.getItem("theme")
//   ? e.classList.add("default-mode")
//   : e.classList.remove("default-mode"),
//   // Listen to click of toggle and do the following within the funtion
//   document.addEventListener("click", (t) => {
//     // When toggle is clicked, change theme to default mode
//     if (t.target.closest(".toggle-wrapper")) {
//       e.classList.toggle("default-mode");
//       // Check body contains default, if so set to default, else dark
//       let l = e.classList.contains("default-mode") ? "default" : "dark";
//       // Set local storage to chosen theme
//       localStorage.setItem("theme", l);
//     }
//   });
// //     /*Toggle from */
// //     fetch("../partials/toggle.html")
// //       // fetch("/partials/toggle.html")
// //       .then((e) => e.text())
// //       .then((e) => {
// //         document.querySelector(".mode-toggle").innerHTML = e;
// //       });
// // })
