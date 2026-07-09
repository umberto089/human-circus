import Link from "next/link";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import Marquee from "@/components/Marquee";
import NarrativeStrip from "@/components/NarrativeStrip";
import GalleryGrid from "@/components/GalleryGrid";
import VideoSection from "@/components/VideoSection";
import SectionHead from "@/components/SectionHead";
import { galleryImages } from "@/lib/images";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Manifesto */}
      <section className="px-5 md:px-10 py-32 md:py-48 max-w-4xl mx-auto text-center">
        <Reveal>
          <p className="font-display text-3xl md:text-5xl leading-tight text-bone">
            Ogni giorno sali su un palco che non hai scelto.
            Indossi una maschera, reciti un ruolo, aspetti l'applauso.{" "}
            <em className="text-gold">La fotografia guarda la crepa.</em>
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-smoke mt-12">
            Nessuna risposta. Solo domande in mostra.
          </p>
        </Reveal>
      </section>

      {/* Frammenti — il viaggio */}
      <NarrativeStrip />

      <Marquee text="La commedia è reale — gli attori non lo sanno" />

      {/* Sala 01 — Archivio */}
      <section className="px-5 md:px-10 py-32 md:py-40 max-w-7xl mx-auto">
        <SectionHead kicker="Sala 01 — Archivio" title="Le maschere" />
        <GalleryGrid images={galleryImages.slice(0, 9)} />
        <Reveal className="mt-14 text-center">
          <Link
            href="/portfolio"
            className="inline-block font-mono text-[11px] tracking-[0.3em] uppercase border border-bone/25 px-10 py-4 text-bone hover:border-gold hover:text-gold transition-colors duration-300"
          >
            Attraversa l'archivio →
          </Link>
        </Reveal>
      </section>

      {/* Sala 02 — Movimento */}
      <section className="px-5 md:px-10 py-32 md:py-40 max-w-7xl mx-auto">
        <SectionHead kicker="Sala 02 — Movimento" title="Ciò che la posa nasconde" />
        <VideoSection />
      </section>

      {/* Uscita */}
      <section className="px-5 md:px-10 py-36 md:py-52 text-center">
        <Reveal>
          <p className="font-mono text-[10px] md:text-xs tracking-widest2 uppercase text-gold mb-6">Uscita</p>
          <h2 className="font-display text-5xl md:text-8xl leading-[0.95] text-bone max-w-4xl mx-auto">
            Cosa mostri. <em className="text-gold">Cosa nascondi.</em>
          </h2>
          <p className="text-smoke mt-8 max-w-md mx-auto">
            Se vuoi un ritratto, un racconto o un video che non mente, parliamone.
          </p>
          <Link
            href="/contatti"
            className="inline-block mt-12 font-mono text-[11px] tracking-[0.3em] uppercase bg-bone text-ink px-12 py-5 hover:bg-gold transition-colors duration-300"
          >
            Scrivimi
          </Link>
        </Reveal>
      </section>
    </>
  );
}
