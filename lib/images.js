// Galleria Human Circus — sostituisci o aggiungi immagini in /public/images
const pad = (n) => String(n).padStart(2, "0");

export const galleryImages = Array.from({ length: 26 }, (_, i) => ({
  src: `/images/hc-${pad(i + 1)}.webp`,
  alt: `Human Circus — atto ${pad(i + 1)}`,
  id: i + 1,
}));

export const heroImage = "/images/hc-01.webp";
