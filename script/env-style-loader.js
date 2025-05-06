// env-loader.js
document.body.style.visibility = "visible";
const isLocal =
  location.hostname === "localhost" || location.hostname === "127.0.0.1";

// Styles
const stylesheets = isLocal
  ? [
      "style/anchor.css",
      "style/full-post.css",
      "style/header.css",
      "style/link-list.css",
      "style/main.css",
      "style/post-lead.css",
      "style/socials.css",
      "style/subjects.css",
      "style/toggle.css",
    ]
  : ["/dist/main.min.css"];

stylesheets.forEach((href) => {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = href;
  document.head.appendChild(link);
});

// Script
const script = document.createElement("script");
script.defer = true;
script.src = isLocal ? "script/script.js" : "/dist/script.min.js";
document.body.appendChild(script);
