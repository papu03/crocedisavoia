# Hotel Croce di Savoia — Angular App

Applicazione Angular per il sito web dell'Hotel Croce di Savoia, Vallombrosa.
Design Art Nouveau / Liberty, basato sul design system "Heritage Sanctuary".

## Prerequisiti

- [Node.js](https://nodejs.org/) v18 o superiore
- npm (incluso con Node.js)

## Installazione

```bash
# Installa le dipendenze
npm install

# Avvia il server di sviluppo
npm start
```

L'app sarà disponibile su `http://localhost:4200`.

## Build di produzione

```bash
npm run build
```

I file di output saranno in `dist/hotel-croce-di-savoia/`.

## Struttura del progetto

```
src/
├── app/
│   ├── components/
│   │   ├── navbar/          # Navigazione (top bar + sidebar + mobile bottom nav)
│   │   └── footer/          # Footer con contatti e link
│   ├── pages/
│   │   ├── home/            # Home page con hero, stats, bento grid, testimonial
│   │   ├── camere/          # Pagina camere con lista e amenities
│   │   ├── ristorante/      # Pagina ristorante con menu e atmosfera
│   │   ├── storia/          # Pagina storia con timeline e sezioni narrative
│   │   └── contatti/        # Pagina contatti con form validato e mappa
│   ├── app.component.ts     # Root component
│   ├── app.routes.ts        # Routing con lazy loading
│   └── app.config.ts        # Configurazione app (providers)
├── styles.css               # Stili globali + classi custom Art Nouveau
└── index.html               # Entry point HTML
```

## Design System

- **Palette**: Colori heritage ispirati alla Belle Époque toscana
- **Tipografia**: Noto Serif (headline) + Newsreader (body)
- **Effetti**: filtro sepia su immagini con reveal al hover, glassmorphism navbar
- **Componenti custom**: `.art-nouveau-frame`, `.heritage-badge`, `.sepia-overlay`, `.floral-watermark`
