// frontpage.js
document.addEventListener("DOMContentLoaded", () => {
  const logo = document.getElementById("logo");
  const overlay = document.getElementById("loading-overlay");
  const redirectTarget = "home.html";

  // Show overlay immediately (dim background)
  overlay.classList.add("show");

  // Redirect after logo flip animation ends
  logo.addEventListener("animationend", (event) => {
    if (event.animationName === "flipLogo") {
      // Fade out overlay
      overlay.style.opacity = 0;

      // Redirect after fade-out completes
      setTimeout(() => {
        window.location.href = redirectTarget;
      }, 500);
    }
  });
});
