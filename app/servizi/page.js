import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";

export const metadata = {
  title: "Servizi",
  description: "Servizi fotografici e video: ritratti, eventi, reportage, contenuti per brand e artisti.",
};

const services = [
  {
    n: "01",
    title: "Ritratto d'autore",
    desc: "Sessioni individuali fuori dallo studio: il tuo ambiente, la tua luce, la tua faccia vera. Per artisti, professionisti e chi non si riconosce nelle foto in posa.",
  },
  {
    n: "02",
    title: "Reportage & eventi",
    desc: "Matrimoni, feste, spettacoli dal vivo raccontati come storie, non come cataloghi. Occhio documentario, zero foto di rito.",
  },
  {
    n: "03",
    title: "Video & showreel",
    desc: "Videoclip, backstage, contenuti brand con montaggio cinematografico. Dall'idea alla color grading finale.",
  },
  {
    n: "04",
    title: "Progetti su misura",
    desc: "Hai un'idea strana? Meglio. Progetti editoriali, mostre, campagne che hanno bisogno di uno sguardo fuori formato.",
  },
];

export default function Servizi() {
  return (
    <section className="px-5 md:px-10 pt-36 md:pt-44 pb-20 max-w-6xl mx-auto">
      <SectionHead kicker="Il palco è tuo" title="Servizi" />
      <div className="divide-y divide-bone/10 border-y border-bone/10">
        {services.map((s, i) => (
          <Reveal key={s.n} delay={i * 0.08}>
            <div className="group grid md:grid-cols-[80px_1fr_2fr] gap-4 md:gap-10 py-10 md:items-baseline">
              <span className="font-mono text-xs text-gold">{s.n}</span>
              <h3 className="font-display text-3xl md:text-4xl text-bone group-hover:text-gold transition-colors duration-300">
                {s.title}
              </h3>
              <p className="text-smoke leading-relaxed">{s.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-16 text-center">
        <p className="text-smoke mb-8">Ogni progetto ha un prezzo suo. Parliamone.</p>
        <Link
          href="/contatti"
          className="inline-block font-mono text-[11px] tracking-[0.3em] uppercase bg-bone text-ink px-12 py-5 hover:bg-gold transition-colors duration-300"
        >
          Chiedi un preventivo
        </Link>
      </Reveal>
    </section>
  );
}
