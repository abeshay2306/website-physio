/**
 * JavaScript erweitern: nützliche Effekte und Funktionen passend zur aktuellen Website
 */

document.addEventListener('DOMContentLoaded', () => {
  // Smooth anchor scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Formular-Bestätigung im lokalen Modus (falls ohne Redirect getestet wird)
  const form = document.querySelector('form');
  if (form && window.location.protocol === 'file:') {
    form.addEventListener('submit', e => {
      e.preventDefault();
      alert('Formular abgeschickt (Testmodus). In Live-Umgebung wird weitergeleitet.');
    });
  }

  // Kleine Hover-Animation für Karten (CSS ist vorbereitet)
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-5px)';
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0)';
    });
  });
});
