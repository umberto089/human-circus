"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// L'ingresso del circo: il sipario è chiuso, davanti c'è la faccia
// del clown d'epoca. Dalla sua bocca spalancata si vede il sipario.
// Premi ENTRA QUI: entri letteralmente nella bocca, e il sipario si apre.
export default function Entrance() {
  const root = useRef(null);
  const [entered, setEntered] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    document.body.style.overflow = entered ? "" : "hidden";
    return () => { document.body.style.overflow = ""; };
  }, [entered]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".ent-face", { opacity: 0, y: 40, scale: 0.94 },
        { opacity: 1, y: 0, scale: 1, duration: 1.4, ease: "power3.out", delay: 0.3 });
      gsap.fromTo(".ent-btn", { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out", delay: 1.2 });
    }, root);
    return () => ctx.revert();
  }, []);

  const enter = () => {
    if (entered) return;
    setEntered(true);
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          setGone(true);
          // Dopo l'apertura, il sipario respira con lo scroll:
          // in cima resta socchiuso, scendendo si spalanca.
          gsap.fromTo(".curtain-left", { xPercent: -86 },
            { xPercent: -104, ease: "none", immediateRender: false,
              scrollTrigger: { start: 0, end: 500, scrub: 0.6 } });
          gsap.fromTo(".curtain-right", { xPercent: 86 },
            { xPercent: 104, ease: "none", immediateRender: false,
              scrollTrigger: { start: 0, end: 500, scrub: 0.6 } });
        },
      });
      tl.to(".ent-btn", { opacity: 0, y: 10, duration: 0.35, ease: "power2.in" })
        // Si entra nella bocca: zoom dentro il buco
        .to(".ent-face", {
          scale: 7,
          opacity: 0,
          transformOrigin: "50% 62%",
          duration: 1.5,
          ease: "power3.inOut",
        }, "<")
        // E il sipario si apre
        .to(".curtain-left", { xPercent: -86, duration: 1.8, ease: "power3.inOut" }, "-=0.35")
        .to(".curtain-right", { xPercent: 86, duration: 1.8, ease: "power3.inOut" }, "<")
        .to(".curtain-seam", { opacity: 0, duration: 0.4 }, "<+0.9");
    }, root);
  };

  return (
    <div ref={root} className={`fixed inset-0 z-[90] ${entered ? "pointer-events-none" : ""}`}>
      {/* Sipario chiuso, visibile attraverso la bocca */}
      <div className="curtain-left curtain-panel absolute top-0 bottom-0 left-0 w-[51%]" />
      <div className="curtain-right curtain-panel absolute top-0 bottom-0 right-0 w-[51%]" />
      <div className="curtain-seam absolute top-0 bottom-0 left-1/2 w-px bg-paper/60" />

      {/* La faccia del clown davanti al sipario */}
      {!gone && (
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
          <div className="ent-face relative w-[min(78vw,340px)] md:w-[min(38vw,420px)]">
            <Image
              src="/scene/face.webp"
              alt="Entra nel circo"
              width={900}
              height={1243}
              priority
              className="w-full h-auto drop-shadow-[0_24px_50px_rgba(0,0,0,0.45)]"
            />
          </div>

          {/* ENTRA QUI: insegna gialla con lampadine */}
          <button
            onClick={enter}
            className="ent-btn relative mt-6 md:mt-8 bg-[#f2c230] border-[3px] border-navy px-10 py-4 font-circus text-lg md:text-xl text-navy uppercase tracking-wide shadow-[0_10px_30px_rgba(0,0,0,0.35)] hover:scale-105 transition-transform cursor-pointer"
          >
            <span className="bulb" style={{ left: 0, top: 0, transform: "translate(-50%,-50%)" }} />
            <span className="bulb" style={{ right: 0, top: 0, transform: "translate(50%,-50%)", animationDelay: "0.4s" }} />
            <span className="bulb" style={{ left: 0, bottom: 0, transform: "translate(-50%,50%)", animationDelay: "0.8s" }} />
            <span className="bulb" style={{ right: 0, bottom: 0, transform: "translate(50%,50%)", animationDelay: "1.2s" }} />
            <span className="bulb" style={{ left: "50%", top: 0, transform: "translate(-50%,-50%)", animationDelay: "0.6s" }} />
            <span className="bulb" style={{ left: "50%", bottom: 0, transform: "translate(-50%,50%)", animationDelay: "1s" }} />
            ★ Entra qui ★
          </button>
        </div>
      )}
    </div>
  );
}
