// Home Page Matrix Style Script

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById('matrix');
  const ctx = canvas.getContext('2d');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const chars = '&WENDELLPRINCIPE*GREGGYRAMOS%PRISMTECHPH!';
  // const chars = '🌸🌐';
  const fontSize = 24;
  let columns = Math.floor(canvas.width / fontSize);
  const drops = Array(columns).fill(1);

  // Wider speed range for natural variation
  let speeds = Array(columns).fill().map(() => Math.random() * 1.2 + 0.3);

  function draw() {
    ctx.fillStyle = 'rgba(0,0,0,0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#00FF00';
    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < drops.length; i++) {
      const text = chars.charAt(Math.floor(Math.random() * chars.length));
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);

      if (drops[i] * fontSize > canvas.height) {
        drops[i] = 0;
      }

      drops[i] += speeds[i];
    }
  }

  function animate() {
    draw();
    requestAnimationFrame(animate);
  }
  animate();

  // Resize handler: refresh columns and speeds
  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    columns = Math.floor(canvas.width / fontSize);
    drops.length = columns;
    speeds.length = columns;
    for (let i = 0; i < speeds.length; i++) {
      speeds[i] = Math.random() * 1.2 + 0.3;
      drops[i] = 1;
    }
  });
});
