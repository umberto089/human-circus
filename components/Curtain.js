"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Il sipario apre lo spettacolo. Non sparisce mai del tutto:
// in cima alla pagina i bordi restano socchiusi, e scendendo si spalancano.
// Se risali fino in cima, la tenda torna a chiudersi sui bordi.
export default function Curtain() {
  const root = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          gsap.fromTo(
            ".curtain-left",
            { xPercent: -86 },
            { xPercent: -104, ease: "none", immediateRender: false,
              scrollTrigger: { start: 0, end: 500, scrub: 0.6 } }
          );
          gsap.fromTo(
            ".curtain-right",
            { xPercent: 86 },
            { xPercent: 104, ease: "none", immediateRender: false,
              scrollTrigger: { start: 0, end: 500, scrub: 0.6 } }
          );
        },
      });
      tl.fromTo(".curtain-label", { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.9, ease: "power2.out" })
        .to(".curtain-label", { opacity: 0, duration: 0.5, delay: 0.8 })
        .to(".curtain-left", { xPercent: -86, duration: 1.8, ease: "power3.inOut" }, "-=0.1")
        .to(".curtain-right", { xPercent: 86, duration: 1.8, ease: "power3.inOut" }, "<")
        .to(".curtain-seam", { opacity: 0, duration: 0.4 }, "<+0.9");
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={root} className="fixed inset-0 z-[80] pointer-events-none">
      <div className="curtain-left curtain-panel absolute top-0 bottom-0 left-0 w-[51%]" />
      <div className="curtain-right curtain-panel absolute top-0 bottom-0 right-0 w-[51%]" />
      <div className="curtain-seam absolute top-0 bottom-0 left-1/2 w-px bg-paper/60" />
      <div className="curtain-label absolute inset-0 flex items-center justify-center">
        <div className="bg-paper border-[3px] border-navy px-8 py-6 text-center shadow-xl">
          <p className="font-mono text-[10px] tracking-widest2 uppercase text-blood mb-2">The greatest show</p>
          <p className="font-circus text-2xl md:text-3xl text-navy">Human Circus</p>
        </div>
      </div>
    </div>
  );
}
