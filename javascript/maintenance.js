// javascript/maintenance.js
fetch('config.json')
  .then(res => res.json())
  .then(cfg => {
    if (cfg.maintenance) {
      // Redirect to maintenance page
      window.location.href = "pages/maintenance.html";
    } else {
      // Redirect to live site
      window.location.href = "home.html";
    }
  })
  .catch(err => console.error("Config not found, defaulting to live site.", err));
