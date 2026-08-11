// Fade-in Effects to Main Page Script
document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("fade-in");
});

// Navbar logo fade-out redirect
document.addEventListener("DOMContentLoaded", () => {
  const navLogoLink = document.querySelector(".navbar a");
  const navLogo = document.querySelector(".nav_logo");

  if (navLogoLink && navLogo) {
    navLogoLink.addEventListener("click", (e) => {
      e.preventDefault(); // stop instant redirect

      // Trigger page fade-out
      document.body.classList.add("fade-out");

      // Redirect after animation
      setTimeout(() => {
        window.location.href = navLogoLink.getAttribute("href"); // frontpage.html
      }, 800); // matches fadeOut duration
    });
  }
});


// Accordion behavior for Services using event delegation
document.addEventListener("click", (e) => {
  const card = e.target.closest(".service-card");
  if (!card) return;

  // Close all other cards
  document.querySelectorAll(".service-card.active").forEach(c => {
    if (c !== card) c.classList.remove("active");
  });

  // Toggle clicked card
  card.classList.toggle("active");
});
