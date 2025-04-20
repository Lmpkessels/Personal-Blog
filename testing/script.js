// Creating a constant variable called toggle, then we access the whole HTML
// document, we use querySelector to access the class.
const toggle = document.querySelector(".toggle-wrapper");
// Here we access the body in the HTML document.
const body = document.body;

// We listen to the click event, and write a function to tell the program what
// to do if the event is heard.
toggle.addEventListener("click", () => {
  // Here we tell what to do, switch to dark-mode, which we have created by
  // using the class in HTML, and styling it in CSS
  body.classList.toggle("dark-mode");
});
