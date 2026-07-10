"use client";

// Il pubblico. Giacca nera, camicia bianca, volto mai illuminato.
// Sono rivolti verso lo schermo. Respirano appena. Non guardano il palco.
const Figure = ({ delay, scale = 1 }) => (
  <div className="breath shrink-0" style={{ animationDelay: `${delay}s`, transform: `scale(${scale})` }}>
    <svg viewBox="0 0 60 46" width={60 * scale} height={46 * scale} aria-hidden="true">
      <circle cx="30" cy="14" r="9.5" fill="#020202" />
      <path d="M4 46 Q30 22 56 46 Z" fill="#020202" />
      <path d="M26.5 27 L30 32.5 L33.5 27 Z" fill="#cfc8b8" opacity="0.8" />
    </svg>
  </div>
);

export default function Audience({ className = "" }) {
  const rows = [
    { n: 12, scale: 0.55, blur: "blur-[1.5px]", opacity: "opacity-70" },
    { n: 10, scale: 0.75, blur: "blur-[0.5px]", opacity: "opacity-85" },
    { n: 8, scale: 1, blur: "", opacity: "opacity-100" },
  ];
  return (
    <div className={`pointer-events-none ${className}`} aria-hidden="true">
      {rows.map((r, ri) => (
        <div key={ri} className={`flex justify-center -mb-3 ${r.blur} ${r.opacity}`}>
          {Array.from({ length: r.n }, (_, i) => (
            <Figure key={i} delay={((i * 7 + ri * 3) % 9) * 0.55} scale={r.scale} />
          ))}
        </div>
      ))}
      <div className="h-6 bg-gradient-to-b from-transparent to-ink" />
    </div>
  );
}
