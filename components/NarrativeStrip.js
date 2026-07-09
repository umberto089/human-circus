"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Frammenti: immagini a schermo intero con domande sospese.
// Il visitatore attraversa le sale come in un museo mentale.
const fragments = [
  { src: "/images/hc-12.webp", line: "Quale maschera indossi quando nessuno ti guarda?" },
  { src: "/images/hc-18.webp", line: "Ogni ruolo è una gabbia. Ogni gabbia, un rifugio." },
  { src: "/images/hc-22.webp", line: "L'applauso è per il personaggio. Le crepe sono tue." },
];

export default function NarrativeStrip() {
  const root = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".frag").forEach((el) => {
        gsap.fromTo(
          el.querySelector(".frag-img"),
          { yPercent: -12, scale: 1.12 },
          {
            yPercent: 12,
            scale: 1.12,
            ease: "none",
            scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true },
          }
        );
        gsap.fromTo(
          el.querySelector(".frag-line"),
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1.8,
            ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top 60%", once: true },
          }
        );
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={root}>
      {fragments.map((f, i) => (
        <section key={f.src} className="frag relative h-[85svh] overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src={f.src}
              alt=""
              fill
              sizes="100vw"
              className="frag-img object-cover opacity-35 saturate-[0.7]"
            />
            <div className="absolute inset-0 vignette" />
            <div className="absolute inset-0 bg-gradient-to-b from-ink via-transparent to-ink" />
          </div>
          <div className="relative z-10 px-6 max-w-3xl text-center">
            <p className="font-mono text-[10px] tracking-widest2 uppercase text-gold/70 mb-6">
              Frammento {String(i + 1).padStart(2, "0")}
            </p>
            <p className="frag-line font-display italic text-3xl md:text-5xl leading-tight text-bone">
              {f.line}
            </p>
          </div>
        </section>
      ))}
    </div>
  );
}
