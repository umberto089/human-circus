"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Marquee({ text }) {
  const ref = useRef(null);

  useEffect(() => {
    const tween = gsap.to(ref.current, { xPercent: -50, ease: "none", duration: 28, repeat: -1 });
    return () => tween.kill();
  }, []);

  const row = Array(6).fill(text).join("  ·  ");

  return (
    <div className="overflow-hidden py-10 border-y border-bone/10 select-none" aria-hidden="true">
      <div ref={ref} className="whitespace-nowrap font-display italic text-4xl md:text-6xl text-outline">
        {row}  ·  {row}
      </div>
    </div>
  );
}
