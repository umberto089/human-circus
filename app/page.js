import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import Marquee from "@/components/Marquee";
import NarrativeStrip from "@/components/NarrativeStrip";
import ScrollWord from "@/components/ScrollWord";
import ElephantCross from "@/components/ElephantCross";
import KeyholeGate from "@/components/KeyholeGate";
import PopcornRain from "@/components/PopcornRain";
import GalleryGrid from "@/components/GalleryGrid";
import VideoSection from "@/components/VideoSection";
import SectionHead from "@/components/SectionHead";
import { galleryImages } from "@/lib/images";

export default function Home() {
  return (
    <>
      <PopcornRain />
      <Hero />

      {/* Manifesto — un pensiero per riga */}
      <section className="relative px-5 md:px-10 py-28 md:py-40 max-w-3xl mx-auto text-center">
        <Reveal>
          <p className="font-display text-2xl md:text-4xl leading-snug text-navy">
            Ogni giorno sali su un palco che non hai scelto.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="font-display text-2xl md:text-4xl leading-snug text-navy mt-6">
            Indossi una maschera.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="font-display text-2xl md:text-4xl leading-snug text-navy mt-6">
            Reciti un ruolo.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <p className="font-display text-2xl md:text-4xl leading-snug text-navy mt-6">
            Aspettiamo l'applauso.
          </p>
        </Reveal>
        <Reveal delay={0.45}>
          <p className="font-circus text-2xl md:text-4xl leading-snug text-black mt-10">
            Siamo tutti animali che si esibiscono.
          </p>
        </Reveal>
        <Reveal delay={0.55}>
          <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-smoke mt-12">
            ★ Nessuna risposta. Solo domande in mostra ★
          </p>
        </Reveal>
      </section>

      <ScrollWord word="MASCHERA" dir={1} />

      {/* Il percorso — tre tappe */}
      <NarrativeStrip />

      <Marquee text="La commedia è reale — gli attori non lo sanno" />

      {/* L'elefante attraversa la pista */}
      <ElephantCross dir={1} />

      {/* Sala 01 — la galleria dentro il tendone */}
      <section className="relative py-24 md:py-36 overflow-hidden">
        <Image src="/scene/ring.webp" alt="" fill sizes="100vw" className="object-cover" aria-hidden="true" />
        <div className="absolute inset-0 bg-navy/75" />
        <div className="relative max-w-7xl mx-auto px-5 md:px-10">
          <SectionHead light kicker="★ Sala 01 — Archivio" title="Le maschere" />
          <GalleryGrid onDark images={galleryImages.slice(0, 9)} />
          <Reveal className="mt-14 text-center">
            <Link
              href="/portfolio"
              className="inline-block font-circus text-sm uppercase bg-paper border-[3px] border-paper px-10 py-4 text-navy hover:bg-gold hover:border-gold transition-colors duration-300"
            >
              Attraversa l'archivio →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Il passaggio segreto: dentro la serratura */}
      <KeyholeGate />

      {/* Sala 02 — Movimento */}
      <section className="relative px-5 md:px-10 py-24 md:py-36 max-w-6xl mx-auto">
        <SectionHead kicker="★ Sala 02 — Movimento" title="Ciò che la posa nasconde" />
        <VideoSection />
      </section>

      {/* L'elefante torna indietro */}
      <ElephantCross dir={-1} />

      <ScrollWord word="CREPA" dir={1} />

      {/* Uscita — banda blu da manifesto */}
      <section className="relative bg-navy text-center py-28 md:py-40 px-5 overflow-hidden">
        <span className="star-tw absolute top-10 left-[12%] text-gold text-2xl" aria-hidden="true">★</span>
        <span className="star-tw absolute bottom-12 right-[10%] text-blood text-2xl" style={{ animationDelay: "1.4s" }} aria-hidden="true">★</span>
        <Reveal>
          <p className="flicker inline-block font-mono text-[10px] md:text-xs tracking-widest2 uppercase text-blood bg-paper border-2 border-blood px-4 py-2 mb-8">
            Uscita
          </p>
          <h2 className="font-circus text-4xl md:text-7xl leading-tight text-paper max-w-4xl mx-auto">
            Cosa mostri. <span className="text-gold">Cosa nascondi.</span>
          </h2>
          <p className="text-paper/60 mt-8 max-w-md mx-auto">
            Se vuoi un ritratto, un racconto o un video che non mente, parliamone.
          </p>
          <Link
            href="/contatti"
            className="inline-block mt-12 font-circus text-sm uppercase bg-blood text-paper px-12 py-5 hover:bg-gold hover:text-navy transition-colors duration-300"
          >
            Scrivimi ★
          </Link>
        </Reveal>
      </section>
    </>
  );
}
