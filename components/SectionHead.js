import Reveal from "./Reveal";

export default function SectionHead({ kicker, title, light = false, className = "" }) {
  return (
    <Reveal className={`relative mb-12 md:mb-16 ${className}`}>
      {/* La pista: anello tratteggiato che ruota lentissimo */}
      <svg
        className="ring-slow absolute -top-10 -left-6 w-36 h-36 md:w-44 md:h-44 opacity-30 pointer-events-none"
        viewBox="0 0 100 100"
        aria-hidden="true"
      >
        <circle cx="50" cy="50" r="46" fill="none" stroke={light ? "#f3ecdd" : "#c1272d"} strokeWidth="0.6" strokeDasharray="3 5" />
        <circle cx="50" cy="50" r="34" fill="none" stroke={light ? "#f3ecdd" : "#c1272d"} strokeWidth="0.35" strokeDasharray="1 6" />
      </svg>
      <p className={`relative font-mono text-[10px] md:text-xs tracking-widest2 uppercase mb-4 ${light ? "text-gold" : "text-gold"}`}>{kicker}</p>
      <h2 className={`relative font-circus text-4xl md:text-6xl leading-[1.05] ${light ? "text-paper" : "text-bone"}`}>{title}</h2>
    </Reveal>
  );
}
