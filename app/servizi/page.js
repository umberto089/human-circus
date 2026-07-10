import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Servizi",
  description: "Servizi fotografici e video: ritratti, eventi, reportage, contenuti per brand e artisti.",
};

const services = [
  {
    n: "01",
    title: "Ritratto d'autore",
    desc: "Sessioni individuali fuori dallo studio: il tuo ambiente, la tua luce, la tua faccia vera.",
  },
  {
    n: "02",
    title: "Reportage & eventi",
    desc: "Matrimoni, feste, spettacoli dal vivo raccontati come storie, non come cataloghi.",
  },
  {
    n: "03",
    title: "Video & showreel",
    desc: "Videoclip, backstage, contenuti brand con montaggio cinematografico.",
  },
  {
    n: "04",
    title: "Progetti su misura",
    desc: "Progetti editoriali, mostre, campagne che hanno bisogno di uno sguardo fuori formato.",
  },
];

export default function Servizi() {
  return (
    <section className="px-6 md:px-10 pt-[20vh] pb-[10vh] max-w-3xl mx-auto">
      <p className="font-mono text-[10px] tracking-[0.45em] uppercase text-bone/30 mb-16">Servizi</p>
      <div className="space-y-14">
        {services.map((s, i) => (
          <Reveal key={s.n} delay={i * 0.06}>
            <div className="group border-b border-bone/10 pb-10">
              <p className="font-mono text-[9px] tracking-[0.4em] text-bone/25 mb-3">{s.n}</p>
              <h2 className="font-display text-3xl md:text-4xl text-bone/90 group-hover:text-bone transition-colors duration-700">
                {s.title}
              </h2>
              <p className="text-smoke leading-loose mt-3 max-w-xl">{s.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-20">
        <Link
          href="/contatti"
          className="font-mono text-[10px] tracking-[0.4em] uppercase text-bone/40 hover:text-bone transition-colors duration-700"
        >
          Parliamone →
        </Link>
      </Reveal>
    </section>
  );
}
