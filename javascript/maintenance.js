// ---------------- Maintenance Mode ----------------
fetch('../config.json')
  .then(res => res.json())
  .then(cfg => {
    if (cfg.maintenance) {
      window.location.href = "../page/maintenance.html";
    }
  })
  .catch(err => console.error("Config missing, defaulting to live site.", err));
