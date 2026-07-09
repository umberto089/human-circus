"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Particles from "./Particles";
import MarqueeLights from "./MarqueeLights";
import Bunting from "./Bunting";
import { heroImage } from "@/lib/images";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const root = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-letter",
        { yPercent: 120, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 1.8, stagger: 0.09, ease: "power4.out", delay: 0.6 }
      );
      gsap.fromTo(
        ".hero-sub",
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 1.6, delay: 2.2, ease: "power3.out" }
      );
      gsap.fromTo(
        ".hero-arch",
        { opacity: 0, y: 60, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, duration: 1.8, delay: 2.6, ease: "power3.out" }
      );
      // Parallasse: la foto respira dentro l'arco
      gsap.fromTo(
        ".hero-arch-img",
        { yPercent: -6 },
        { yPercent: 6, ease: "none",
          scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true } }
      );
    }, root);
    return () => ctx.revert();
  }, []);

  const title = "HUMAN CIRCUS";

  return (
    <section ref={root} className="relative min-h-[100svh] overflow-hidden flex flex-col items-center justify-center px-4 pt-28 pb-16">
      <Particles />
      <Bunting className="absolute top-14 left-0 right-0" />

      {/* Stelle sparse */}
      <span className="star-tw absolute top-[26%] left-[10%] text-blood text-2xl" aria-hidden="true">★</span>
      <span className="star-tw absolute top-[20%] right-[12%] text-navy text-xl" style={{ animationDelay: "1.2s" }} aria-hidden="true">★</span>
      <span className="star-tw absolute bottom-[24%] left-[16%] text-gold text-xl" style={{ animationDelay: "0.6s" }} aria-hidden="true">★</span>
      <span className="star-tw absolute bottom-[30%] right-[9%] text-blood text-2xl" style={{ animationDelay: "1.8s" }} aria-hidden="true">★</span>

      <div className="relative z-10 text-center">
        <p className="hero-sub font-mono text-[10px] md:text-xs tracking-widest2 uppercase text-blood mb-4">
          ★ Fotografia · Video · Napoli, Italia ★
        </p>

        <MarqueeLights>
          <h1 className="font-circus text-[11vw] md:text-[8vw] leading-[1] text-navy" aria-label="Human Circus">
            {title.split(" ").map((word, wi) => (
              <span key={wi} className="inline-block whitespace-nowrap mr-[0.2em] last:mr-0">
                {word.split("").map((ch, i) => (
                  <span key={i} className="inline-block overflow-hidden align-bottom">
                    <span className="hero-letter inline-block">{ch}</span>
                  </span>
                ))}
              </span>
            ))}
          </h1>
        </MarqueeLights>

        <p className="hero-sub font-display italic text-xl md:text-3xl text-navy/80 mt-6 max-w-xl mx-auto">
          Il vero circo sono le persone.
        </p>

        {/* La foto entra in scena dentro l'arco del circo */}
        <div className="hero-arch mx-auto mt-10 w-[74vw] max-w-sm">
          <div className="border-[4px] border-navy rounded-t-full p-2 bg-white shadow-[0_18px_50px_-20px_rgba(32,38,92,0.45)]">
            <div className="rounded-t-full overflow-hidden aspect-[3/4] relative">
              <Image
                src={heroImage}
                alt="Human Circus — fotografia di strada"
                fill
                priority
                sizes="(max-width: 768px) 74vw, 400px"
                className="hero-arch-img object-cover scale-110"
              />
            </div>
          </div>
          <p className="font-circus text-sm text-blood mt-3">★ The Greatest Show on Earth ★</p>
        </div>
      </div>

      <div className="hero-sub absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-[10px] tracking-[0.3em] uppercase text-smoke">
        Scorri — lo spettacolo inizia
      </div>
    </section>
  );
}
