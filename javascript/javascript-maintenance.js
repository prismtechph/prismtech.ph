// javascript/javascript-maintenance.js
fetch('config.json', { cache: "no-store" })
  .then(res => res.json())
  .then(cfg => {
    if (cfg.maintenance) {
      const overlay = document.getElementById("loading-overlay");
      if (overlay) overlay.style.display = "none";

      // Redirect to maintenance page
      window.location.href = "maintenance.html";
    } else {
      // Redirect to live site
      window.location.href = "home.html";
    }
  })
  .catch(err => {
    console.error("Config not found, defaulting to live site.", err);
    window.location.href = "home.html";
  });
