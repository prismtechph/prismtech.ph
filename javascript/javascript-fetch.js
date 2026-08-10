// Load navbar
fetch("page/navbar.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("navbar").innerHTML = data;
  });

// Load main content
fetch("page/maincontent.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("content").innerHTML = data;
  });

// Load footer
fetch("page/footer.html")
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
