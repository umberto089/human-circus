"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Marquee({ text }) {
  const ref = useRef(null);

  useEffect(() => {
    const tween = gsap.to(ref.current, { xPercent: -50, ease: "none", duration: 42, repeat: -1 });
    return () => tween.kill();
  }, []);

  const row = Array(6).fill(text).join("  ★  ");

  return (
    <div className="overflow-hidden py-6 bg-blood border-y-4 border-navy select-none" aria-hidden="true">
      <div ref={ref} className="whitespace-nowrap font-circus uppercase text-2xl md:text-4xl text-paper">
        {row}  ★  {row}
      </div>
    </div>
  );
}
