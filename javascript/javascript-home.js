// Fade-in Effects to Main Page Script

  document.addEventListener("DOMContentLoaded", () => {
    
    document.body.classList.add("fade-in");
  });

  document.addEventListener("DOMContentLoaded", () => {
  const navLogo = document.querySelector(".nav_logo");

  if (navLogo) {
    navLogo.addEventListener("click", (e) => {
      e.preventDefault(); // stop instant redirect
      document.body.style.transition = "opacity 1s ease-out";
      document.body.style.opacity = "0";

      setTimeout(() => {
        window.location.href = "index.html";
      }, 1000);
    });
  }
});
