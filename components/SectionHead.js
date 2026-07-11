import Reveal from "./Reveal";

export default function SectionHead({ kicker, title, className = "" }) {
  return (
    <Reveal className={`mb-12 md:mb-16 ${className}`}>
      <p className="font-mono text-[10px] md:text-xs tracking-widest2 uppercase text-gold mb-4">{kicker}</p>
      <h2 className="font-display text-5xl md:text-7xl leading-[0.95] text-bone">{title}</h2>
    </Reveal>
  );
}
