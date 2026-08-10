fetch('config.json', { cache: "no-store" })
  .then(res => res.json())
  .then(cfg => {
    // If maintenance is true → always maintenance
    if (cfg.maintenance) {
      window.location.href = "maintenance.html";
    }
    // If maintenance is false but frontpage is true → splash
    else if (cfg.frontpage) {
      window.location.href = "frontpage.html";
    }
    // If both false → maintenance (fail-safe)
    else {
      window.location.href = "home.html";
    }
  })
  .catch(() => window.location.href = "maintenance.html"); // fallback
