// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Animate skill bars
const skillObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.skill-bar').forEach(bar => {
        setTimeout(() => { bar.style.width = bar.dataset.w + '%'; }, 200);
      });
      skillObs.unobserve(e.target);
    }
  });
}, { threshold: 0.3 });
document.querySelectorAll('.skills-grid').forEach(el => skillObs.observe(el));

// Load certificate as base64 for download
const certImg = document.getElementById('certImg');
if (certImg) {
  certImg.onload = function() {
    try {
      const canvas = document.createElement('canvas');
      canvas.width = certImg.naturalWidth;
      canvas.height = certImg.naturalHeight;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(certImg, 0, 0);
      const dataUrl = canvas.toDataURL('image/png');
      document.getElementById('downloadBtn').href = dataUrl;
    } catch(e) {}
  };
}
