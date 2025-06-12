document.addEventListener('DOMContentLoaded', () => {
  /* Smooth Anchor Scroll */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      target?.scrollIntoView({ behavior: 'smooth' });
    });
  });

  /* Formular-Hinweis im lokalen Testmodus (Datei-URL) */
  const form = document.querySelector('form');
  if (form && window.location.protocol === 'file:') {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert(
        'Formular abgeschickt (Testmodus). In der Live-Umgebung wird weitergeleitet.'
      );
    });
  }

  /* Kleine Hover-Animation für Karten – reine Ergänzung zu Tooltip-CSS */
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-5px)';
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0)';
    });
  });
  const newsletter = document.getElementById('newsletter-form');
  if (newsletter) {
    newsletter.addEventListener('submit', async (e) => {
      e.preventDefault();
      const data = new FormData(newsletter);
      if (data.get('website')) return;
      const msg = newsletter.querySelector('.success-message');
      try {
        // TODO: ersetze durch die URL des Newsletter-Backends
        const res = await fetch('https://example.com/api/newsletter', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: data.get('email'),
            name: data.get('name'),
          }),
        });
        if (res.ok) {
          msg.textContent = 'Danke für Ihre Anmeldung!';
          newsletter.reset();
        } else {
          msg.textContent = 'Leider ist ein Fehler aufgetreten.';
        }
      } catch {
        msg.textContent = 'Netzwerkfehler – bitte erneut versuchen.';
      }
    });
  }
});
