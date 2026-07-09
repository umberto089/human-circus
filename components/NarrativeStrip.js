"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Tre tappe del percorso: carta, banda rossa, banda blu.
// Ogni tappa: una foto nell'arco e una domanda sospesa.
const fragments = [
  {
    src: "/images/hc-12.webp",
    line: "Quale maschera indossi quando nessuno ti guarda?",
    band: "paper",
  },
  {
    src: "/images/hc-18.webp",
    line: "Ogni ruolo è una gabbia. Ogni gabbia, un rifugio.",
    band: "red",
  },
  {
    src: "/images/hc-22.webp",
    line: "L'applauso è per il personaggio. Le crepe sono tue.",
    band: "navy",
  },
];

const bandBg = { paper: "bg-paper", red: "bg-blood", navy: "bg-navy" };
const bandText = { paper: "text-navy", red: "text-paper", navy: "text-paper" };
const bandArch = { paper: "border-navy", red: "border-paper", navy: "border-paper" };
const bandStar = { paper: "text-blood", red: "text-paper", navy: "text-gold" };

export default function NarrativeStrip() {
  const root = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".frag").forEach((el) => {
        gsap.fromTo(
          el.querySelector(".frag-img"),
          { yPercent: -8 },
          { yPercent: 8, ease: "none",
            scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true } }
        );
        gsap.fromTo(
          el.querySelector(".frag-line"),
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 1.6, ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top 65%", once: true } }
        );
        gsap.fromTo(
          el.querySelector(".frag-wire"),
          { scaleX: 0 },
          { scaleX: 1, ease: "none",
            scrollTrigger: { trigger: el, start: "top 80%", end: "center 45%", scrub: true } }
        );
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={root}>
      {fragments.map((f, i) => (
        <section key={f.src} className={`frag relative overflow-hidden py-20 md:py-28 ${bandBg[f.band]}`}>
          <div className="max-w-5xl mx-auto px-5 md:px-10 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className={i % 2 === 1 ? "md:order-2" : ""}>
              <div className={`border-[4px] ${bandArch[f.band]} rounded-t-full p-2 bg-white/10 max-w-xs mx-auto`}>
                <div className="rounded-t-full overflow-hidden aspect-[3/4] relative">
                  <Image src={f.src} alt="" fill sizes="(max-width: 768px) 80vw, 320px" className="frag-img object-cover scale-110" />
                </div>
              </div>
            </div>
            <div className={`text-center md:text-left ${i % 2 === 1 ? "md:order-1" : ""}`}>
              <p className={`font-mono text-[10px] tracking-widest2 uppercase mb-5 ${bandStar[f.band]}`}>
                ★ Tappa {String(i + 1).padStart(2, "0")} ★
              </p>
              <p className={`frag-line font-circus text-2xl md:text-4xl leading-snug ${bandText[f.band]}`}>
                {f.line}
              </p>
              <div className={`frag-wire h-[3px] mt-8 origin-left ${f.band === "paper" ? "bg-blood" : "bg-gold"}`} />
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
