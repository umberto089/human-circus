"use client";

// Festone di bandierine triangolari rosse e blu, che ondeggia piano.
export default function Bunting({ className = "" }) {
  const N = 14;
  const flags = Array.from({ length: N }, (_, i) => {
    const t = (i + 0.5) / N;
    const x = t * 1400;
    const y = (1 - t) * (1 - t) * 14 + 2 * (1 - t) * t * 52 + t * t * 14;
    const color = i % 3 === 0 ? "#c1272d" : i % 3 === 1 ? "#20265c" : "#b8862e";
    return { x, y, color };
  });

  return (
    <div className={`pointer-events-none ${className}`} aria-hidden="true">
      <svg viewBox="0 0 1400 110" className="w-full h-auto sway" preserveAspectRatio="none">
        <path d="M0 14 Q 700 56 1400 14" stroke="#20265c" strokeWidth="3" fill="none" />
        {flags.map((f, i) => (
          <path
            key={i}
            d={`M${f.x - 22} ${f.y} L${f.x + 22} ${f.y} L${f.x} ${f.y + 40} Z`}
            fill={f.color}
            opacity="0.92"
          />
        ))}
      </svg>
    </div>
  );
}
