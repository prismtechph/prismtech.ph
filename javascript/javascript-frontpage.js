// index.html Style Script
document.addEventListener("DOMContentLoaded", () => {
  const logo = document.getElementById("logo");

  logo.addEventListener("click", () => {
    // Fade out effect before redirect
    document.body.style.transition = "opacity 1s ease-out";
    document.body.style.opacity = "0";

    setTimeout(() => {
      window.location.href = "home.html";
    }, 1000);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const logo = document.getElementById("logo");
  const overlay = document.getElementById("loading-overlay");

  logo.addEventListener("click", () => {
    // Show overlay
    overlay.classList.add("show");

    // Fade out body
    document.body.style.transition = "opacity 1s ease-out";
    document.body.style.opacity = "0";

    // Redirect after delay
    setTimeout(() => {
      window.location.href = "home.html";
    }, 1500);
  });
});
