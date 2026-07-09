import Image from "next/image";
import Reveal from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";

export const metadata = {
  title: "About",
  description: "Chi c'è dietro Human Circus: Umberto De Rosa, fotografo e videomaker.",
};

export default function About() {
  return (
    <section className="px-5 md:px-10 pt-36 md:pt-44 pb-20 max-w-6xl mx-auto">
      <SectionHead kicker="Dietro la maschera" title="About" />
      <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
        <Reveal>
          <div className="border-[4px] border-navy rounded-t-full p-2 bg-white max-w-sm mx-auto">
            <div className="rounded-t-full overflow-hidden aspect-[3/4] relative">
              <Image
                src="/images/hc-03.webp"
                alt="Umberto De Rosa — Human Circus"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.15} className="space-y-6">
          <p className="font-display text-2xl md:text-3xl leading-snug text-bone">
            Mi chiamo <em className="text-blood">Umberto De Rosa</em>. Fotografo e videomaker.
            Human Circus è il mio taccuino visivo: un archivio della commedia umana,
            raccolto per strada, in spiaggia, nei bar, ovunque qualcuno stia — senza saperlo — recitando.
          </p>
          <p className="text-smoke leading-relaxed">
            Non cerco il momento perfetto: cerco il momento vero. Quello in cui la posa cade e
            resta la persona. Lavoro tra street photography, ritratto e video documentario,
            con una regola sola: nessuna rete di protezione, per me e per chi guarda.
          </p>
          <p className="text-smoke leading-relaxed">
            Il circo non è una metafora crudele. È tenerezza: siamo tutti in pista, tutti
            goffi, tutti magnifici. Io mi limito ad accendere il riflettore.
          </p>
          <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-gold pt-4">
            ★ Napoli · Disponibile in tutta Italia
          </p>
        </Reveal>
      </div>
    </section>
  );
}
