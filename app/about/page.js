import Exhibit from "@/components/Exhibit";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "About",
  description: "Chi c'è dietro Human Circus: Umberto De Rosa, fotografo e videomaker.",
};

export default function About() {
  return (
    <div className="pt-[18vh] pb-[6vh]">
      <Exhibit src="/images/hc-03.webp" index={0} variant="spot" layout="center" alt="Umberto De Rosa — Human Circus" />
      <section className="max-w-2xl mx-auto px-6 pb-[10vh] space-y-8">
        <Reveal>
          <p className="font-display text-2xl md:text-3xl leading-snug text-bone/90">
            Mi chiamo Umberto De Rosa. Fotografo e videomaker.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-smoke leading-loose">
            Human Circus è un archivio della commedia umana, raccolto per strada, in spiaggia,
            nei bar — ovunque qualcuno stia, senza saperlo, recitando. Non cerco il momento
            perfetto: cerco il momento vero. Quello in cui la posa cade e resta la persona.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="text-smoke leading-loose">
            Lavoro tra street photography, ritratto e video documentario, con una regola sola:
            nessuna rete di protezione. Per me e per chi guarda.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <p className="font-mono text-[10px] tracking-[0.35em] uppercase text-bone/30 pt-6">
            Napoli · disponibile in tutta Italia
          </p>
        </Reveal>
      </section>
    </div>
  );
}
