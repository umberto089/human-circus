# Human Circus

Sito portfolio di Umberto De Rosa — fotografia e video.

Costruito con Next.js, Tailwind CSS, GSAP, Lenis, Three.js e Framer Motion.

## Comandi (per sviluppo locale, opzionale)

```bash
npm install
npm run dev
```

## Come aggiornare le foto

1. Aggiungi i file in `public/images/` con nome `hc-27.webp`, `hc-28.webp`, ecc.
2. In `lib/images.js` aggiorna il numero `26` con il nuovo totale.

## Come aggiungere i video

Modifica `components/VideoSection.js` — le istruzioni sono nei commenti del file.
I video vanno caricati su Cloudinary (o Vimeo/YouTube) e incorporati con l'URL.

## Deploy

Il sito è collegato a Vercel: ogni modifica caricata su GitHub viene pubblicata automaticamente.

