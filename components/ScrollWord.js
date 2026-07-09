"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Una parola enorme, in contorno, che attraversa lo schermo mentre scendi.
// Le parole segnano le tappe del viaggio: MASCHERA → APPLAUSO → CREPA.
export default function ScrollWord({ word, dir = 1 }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    const anim = gsap.fromTo(
      el,
      { xPercent: 14 * dir },
      {
        xPercent: -14 * dir,
        ease: "none",
        scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true },
      }
    );
    return () => { anim.scrollTrigger?.kill(); anim.kill(); };
  }, [dir]);

  return (
    <div className="overflow-hidden py-4 md:py-8" aria-hidden="true">
      <div ref={ref} className="font-circus text-[17vw] leading-[1] text-outline whitespace-nowrap text-center opacity-60">
        {word}
      </div>
    </div>
  );
}
