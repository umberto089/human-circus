import SectionHead from "@/components/SectionHead";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata = {
  title: "Contatti",
  description: "Prenota uno shooting o racconta il tuo progetto. Human Circus — fotografia e video.",
};

export default function Contatti() {
  return (
    <section className="px-5 md:px-10 pt-36 md:pt-44 pb-20 max-w-6xl mx-auto">
      <SectionHead kicker="Ultima sala" title="Contatti" />
      <div className="grid md:grid-cols-[1fr_1.5fr] gap-12 md:gap-20">
        <Reveal className="space-y-6">
          <p className="font-display text-2xl md:text-3xl text-bone leading-snug">
            Niente moduli infiniti. Dimmi <em className="text-gold">chi sei</em> e{" "}
            <em className="text-gold">cosa immagini</em>: al resto pensiamo insieme.
          </p>
          <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-smoke space-y-2">
            <p>Email — <a href={`mailto:${site.email}`} className="text-bone hover:text-gold transition-colors">{site.email}</a></p>
            <p>Base — Napoli, Italia</p>
            <p>Risposta — entro 48h</p>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
