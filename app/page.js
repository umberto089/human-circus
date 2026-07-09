import Link from "next/link";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import Marquee from "@/components/Marquee";
import GalleryGrid from "@/components/GalleryGrid";
import VideoSection from "@/components/VideoSection";
import SectionHead from "@/components/SectionHead";
import { galleryImages } from "@/lib/images";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Manifesto */}
      <section className="px-5 md:px-10 py-28 md:py-40 max-w-4xl mx-auto text-center">
        <Reveal>
          <p className="font-display text-3xl md:text-5xl leading-tight text-bone">
            Non servono acrobati, né domatori.{" "}
            <em className="text-gold">La gente comune è già lo spettacolo</em> — basta guardarla
            un secondo più a lungo del previsto.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-smoke mt-10">
            Street photography · Ritratti · Documentario
          </p>
        </Reveal>
      </section>

      <Marquee text="Human Circus — lo spettacolo è là fuori" />

      {/* Galleria (anteprima) */}
      <section className="px-5 md:px-10 py-28 md:py-36 max-w-7xl mx-auto">
        <SectionHead kicker="Atto I — Galleria" title="Il repertorio" />
        <GalleryGrid images={galleryImages.slice(0, 9)} />
        <Reveal className="mt-14 text-center">
          <Link
            href="/portfolio"
            className="inline-block font-mono text-[11px] tracking-[0.3em] uppercase border border-bone/25 px-10 py-4 text-bone hover:border-gold hover:text-gold transition-colors duration-300"
          >
            Tutta la galleria →
          </Link>
        </Reveal>
      </section>

      {/* Video */}
      <section className="px-5 md:px-10 py-28 md:py-36 max-w-7xl mx-auto">
        <SectionHead kicker="Atto II — Video" title="Immagini in movimento" />
        <VideoSection />
      </section>

      {/* CTA */}
      <section className="px-5 md:px-10 py-32 md:py-44 text-center">
        <Reveal>
          <p className="font-mono text-[10px] md:text-xs tracking-widest2 uppercase text-gold mb-6">Ultimo atto</p>
          <h2 className="font-display text-5xl md:text-8xl leading-[0.95] text-bone max-w-4xl mx-auto">
            Vuoi entrare <em className="text-gold">in pista</em>?
          </h2>
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
