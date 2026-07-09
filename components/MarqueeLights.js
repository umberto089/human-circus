"use client";

// Cornice di lampadine da insegna circense attorno al contenuto.
// Le luci lampeggiano in sequenza, come un chapiteau.
export default function MarqueeLights({ children }) {
  const top = [4, 16, 28, 40, 52, 64, 76, 88, 96];
  const bottom = [8, 20, 32, 44, 56, 68, 80, 92];
  const sides = [30, 70];

  let n = 0;
  const bulb = (style) => (
    <span key={n} className="bulb" style={{ ...style, animationDelay: `${(n++ % 6) * 0.3}s` }} />
  );

  return (
    <div className="relative inline-block px-8 md:px-14 py-8 md:py-10">
      {top.map((x) => bulb({ left: `${x}%`, top: 0, transform: "translate(-50%, -50%)" }))}
      {bottom.map((x) => bulb({ left: `${x}%`, bottom: 0, transform: "translate(-50%, 50%)" }))}
      {sides.map((y) => bulb({ left: 0, top: `${y}%`, transform: "translate(-50%, -50%)" }))}
      {sides.map((y) => bulb({ right: 0, top: `${y}%`, transform: "translate(50%, -50%)" }))}
      {children}
    </div>
  );
}
