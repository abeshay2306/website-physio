# Physio Synergie – Website für Florina Frunza BSc

Dies ist die offizielle Website der Physiotherapeutin Florina Frunza BSc, entwickelt als moderne, minimalistische und vertrauensvolle Plattform zur Präsentation ihrer therapeutischen Leistungen.

Zielgruppe sind Patient*innen, die nach professioneller Physiotherapie, Hausbesuchen und fundierter Beratung suchen.

---

## 🎯 Ziele der Website

- Seriöser & professioneller Webauftritt
- Klare Darstellung der Leistungen
- Vertrauensvolle Präsentation der Praxis
- Möglichkeit zur Kontaktaufnahme & Terminvereinbarung
- Datenschutzkonform (DSGVO)
- Barrierearm und mobil nutzbar

---

## 📂 Projektstruktur

```
/Website-Florina/
├── index.html          # Hauptseite mit allen Infos
├── style.css           # Design & Layout
├── script.js           # Interaktive Elemente
├── Danke.html          # Bestätigungsseite nach Formular
├── AGENTS.md           # Anweisungen für Codex-Agent
├── README.md           # Diese Datei
└── img/
    └── Logo-Physiosynergie.jpeg
```

---

## 💡 Tech-Stack

- HTML5, CSS3, JavaScript
- Responsives Layout (Grid/Flexbox)
- Keine externen Frameworks
- Optionales Formular via [Formspree.io](https://formspree.io)

## Newsletter Backend

Die Anmeldung zum Newsletter wird über einen separaten Backend-Service verarbeitet. Die URL des Endpunkts muss in
`script.js` hinterlegt sein. Stelle sicher, dass der Dienst läuft und Anfragen
akzeptiert, bevor du die Seite veröffentlichst.

---

## 🌐 Geplante Erweiterungen

- CMS-Anbindung (Strapi/Sanity)
- Terminbuchungssystem
- Patientenbereich (Login)
- DSGVO-konformer Cookie-Manager
- SEO mit Schema.org
- Mehrsprachigkeit

---

## 🧪 Validierung & Tests

- HTML: W3C Validator
- CSS: stylelint
- JS: eslint (optional)
- Performance: Google Lighthouse
- Barrierefreiheit: a11y-Checks

### Lokale Prüfung
Führe nach Konfigurationsänderungen folgende Befehle aus:

```bash
# CSS-Analyse
# via npm
npm run lint:css
# alternativ direkt
npx stylelint style.css
# HTML-Analyse
npm run lint:html
# alternativ
npx htmlhint index.html
# JavaScript-Analyse
npx eslint script.js
```

---

## 👩‍⚕️ Projektinhaberin

Florina Frunza BSc  
Physiotherapeutin  
[www.Physiosynergie.at](https://www.Physiosynergie.at)

---

**Diese Website wurde mit besonderem Fokus auf Vertrauen, Qualität und Einfachheit erstellt.**
