@ -0,0 +1,97 @@
# AGENTS.md – Codex Agenten-Anleitung für Website-Florina

## Projektbeschreibung
Dies ist eine moderne, minimalistische und datenschutzkonforme Website für eine physiotherapeutische Praxis („Physio Synergie – Florina Frunza BSc“). Ziel ist eine vertrauensvolle, responsive und performante Präsenz für Patient*innen mit klarer Navigation, medizinisch korrekten Informationen und einer barrierearmen Gestaltung. Die Seite ist derzeit statisch (HTML/CSS/JS), kann aber in Zukunft um weitere Funktionen erweitert werden (Kontaktformular, Datenbankanbindung, CMS, Mehrsprachigkeit etc.).

---

## Codex-Arbeitsrichtlinien

### 🔍 Codequalität & Struktur
- Verwende semantisch korrektes HTML (z. B. `<section>`, `<nav>`, `<main>`, `<footer>`)
- CSS soll modular, wartbar und responsiv gestaltet sein
- JavaScript nur einsetzen, wenn es für UX oder Funktionalität notwendig ist (kein unnötiger Overhead)
- Kein Inline-CSS oder Inline-JS, außer es ist klar begründet
- Verwende `data-`-Attribute für dynamische Hovertexte oder Tooltip-Funktionen

---

### ♿ Barrierefreiheit
- Alle Bilder müssen sinnvolle `alt`-Texte enthalten
- Farbkontraste sollen WCAG-konform sein
- Interaktive Elemente (z. B. Buttons, Links, Formulare) müssen mit der Tastatur erreichbar sein
- ARIA-Attribute gezielt und begründet einsetzen

---

### 🔐 Sicherheit & Datenschutz
- Formulare sollen nie ungeschützt (z. B. direkt an PHP-Skripte) senden
- Bei Nutzung externer Dienste (z. B. Formspree, Google Maps) muss eine datenschutzkonforme Einbindung erfolgen (Opt-in, Cookie-Hinweis etc.)
- DSGVO-Compliance ist Pflicht, z. B. Impressum & Datenschutzseite bereitstellen

---

### 📱 Responsivität & Performance
- Layout muss auf mobilen Geräten, Tablets und Desktop optimiert sein (Flex/Grid, Media Queries)
- Schriftgrößen und Abstände skalierbar anlegen (z. B. `rem` statt `px`)
- Bilder möglichst im `webp`-Format, Ladezeiten optimieren (lazy loading etc.)
- Wenn externe Schriftarten verwendet werden, lokal einbinden oder DSGVO-konform laden

---

### 🌐 SEO & Struktur
- Nutze `meta title`, `meta description`, `keywords`
- Nur eine `<h1>` pro Seite
- Klarer URL-Aufbau (für spätere CMS-Anbindung vorbereiten)
- SEO-freundliche Struktur (z. B. `<main>`, `<article>`, klare Benennung von Klassen)

---

### 🧠 Entwicklungsregeln
- Verwende möglichst einfache, aber leistungsfähige Lösungen
- Wenn komplexere Funktionen hinzukommen (z. B. Newsletter, Patientenbereich), sauber modularisieren
- Vermeide Frameworks wie Bootstrap – Custom CSS ist bevorzugt
- Keine Abhängigkeiten ohne Rücksprache einführen
- Kommentiere Code sinnvoll und nur dort, wo Mehrwert besteht

---

## Projektstruktur (aktuell)

```
/workspace/Website-Florina/
├── index.html
├── style.css
├── script.js
├── Danke.html
├── img/
│   └── Logo-Physiosynergie.jpeg
└── AGENTS.md (diese Datei)
```

---

## Erweiterungspotenzial (zukünftig)

- CMS-Anbindung (z. B. Strapi, Sanity)
- Backend (z. B. Node/Express, Python Flask)
- Mehrsprachigkeit (z. B. i18n.js)
- Terminbuchungstool (Kalender-UI, Mailintegration)
- DSGVO-konformes Cookie-Management
- SEO-Optimierung mit strukturierten Daten (Schema.org)
- Patientenbereich mit Login (Datenschutz beachten)

---

## Validierung & Tests

Bitte führe automatisierte Prüfungen aus, wenn möglich:
- HTML-Validator (z. B. W3C)
- Lighthouse Performance Check
- CSS Linting mit stylelint
- JS-Analyse mit eslint (nur wenn nötig)

---

## Abschluss
Dieser AGENTS.md soll Codex helfen, effizient, verantwortungsbewusst und im Sinne des Projekts zu arbeiten. Du darfst mitdenken, warnen, vorschlagen und strukturieren – jedoch immer unter Rücksicht auf Klarheit, Performance und Datenschutz.
