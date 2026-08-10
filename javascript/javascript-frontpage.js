// frontpage.js
document.addEventListener("DOMContentLoaded", () => {
  const logo = document.getElementById("logo");
  const overlay = document.getElementById("loading-overlay");

  // Toggle target here: "maintenance.html" or "home.html"
  const redirectTarget = "home.html"; 

  logo.addEventListener("click", () => {
    overlay.classList.add("show");

    // Fade out body
    document.body.style.transition = "opacity 1s ease-out";
    document.body.style.opacity = "0";

    // Redirect after delay
    setTimeout(() => {
      window.location.href = redirectTarget;
    }, 1500);
  });
});

document.querySelector("#start-button").addEventListener("click", function(e) {
  e.preventDefault();
  document.body.classList.add("fade-out");
  setTimeout(() => {
    window.location.href = "home.html";
  }, 800); // matches fadeOut duration
});