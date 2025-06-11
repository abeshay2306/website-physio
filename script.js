# JavaScript erweitern: nützliche Effekte & Funktionen passend zur aktuellen Website
// Hinweis: Tooltips bei Leistungen sind über CSS realisiert – keine JS-Logik nötig.

js_enhanced = """
// Scroll-to-Top Button (optional hinzufügen)
document.addEventListener(\"DOMContentLoaded\", () => {
  // Smooth anchor scroll
  document.querySelectorAll('a[href^=\"#\"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Formular Bestätigung im lokalen Modus (falls ohne Redirect getestet wird)
  const form = document.querySelector('form');
  if (form && window.location.protocol === 'file:') {
    form.addEventListener('submit', e => {
      e.preventDefault();
      alert('Formular abgeschickt (Testmodus). In Live-Umgebung wird weitergeleitet.');
    });
  }

  // Optional: kleine Animation bei Hover für Karten (CSS ist vorbereitet)
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
"""

# Speichern als neue Version von script.js
js_path_enhanced = Path("/mnt/data/script.js")
js_path_enhanced.write_text(js_enhanced.strip(), encoding="utf-8")
js_path_enhanced.name
