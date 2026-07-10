import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata = {
  title: "Contatti",
  description: "Racconta il tuo progetto. Human Circus — fotografia e video.",
};

export default function Contatti() {
  return (
    <section className="px-6 md:px-10 pt-[20vh] pb-[10vh] max-w-4xl mx-auto">
      <p className="font-mono text-[10px] tracking-[0.45em] uppercase text-bone/30 mb-16">Contatti</p>
      <div className="grid md:grid-cols-[1fr_1.6fr] gap-14 md:gap-20">
        <Reveal className="space-y-8">
          <p className="font-display text-2xl md:text-3xl text-bone/90 leading-snug">
            Dimmi chi sei e cosa immagini.
          </p>
          <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-smoke space-y-3">
            <p><a href={`mailto:${site.email}`} className="hover:text-bone transition-colors duration-500">{site.email}</a></p>
            <p>Napoli, Italia</p>
            <p>Risposta entro 48h</p>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
