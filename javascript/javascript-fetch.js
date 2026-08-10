// Load navbar
fetch("pages/navbar.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("navbar").innerHTML = data;
  });

// Load footer
fetch("pages/footer.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("footer").innerHTML = data;
  });

function loadSection(file) {
  fetch(file)
    .then(res => res.text())
    .then(data => {
      document.getElementById("content").innerHTML = data;
    })
    .catch(err => console.error("Error loading " + file, err));
}
