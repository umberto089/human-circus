"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Buio. Una lampada accesa ondeggia appena.
// Sotto la sua luce, il titolo emerge come un'insegna che affiora.
// Quando il visitatore scende, il titolo torna nel buio.
export default function Lamp() {
  const root = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".lamp-in", { opacity: 0 }, { opacity: 1, duration: 3, ease: "power2.inOut", delay: 0.6 });
      gsap.fromTo(".lamp-title",
        { opacity: 0, letterSpacing: "0.6em" },
        { opacity: 1, letterSpacing: "0.35em", duration: 3.6, ease: "power2.out", delay: 1.8 });
      gsap.fromTo(".lamp-sub", { opacity: 0 }, { opacity: 1, duration: 2.4, ease: "power2.out", delay: 3.4 });
      gsap.fromTo(".lamp-hint", { opacity: 0 }, { opacity: 1, duration: 2, delay: 4 });

      // Scendendo, il titolo torna nel buio
      gsap.to(".lamp-stage", {
        opacity: 0.12,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top top", end: "bottom 60%", scrub: 0.6 },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative h-[130vh]">
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        <div className="lamp-stage absolute inset-0">
          <div className="lamp-in absolute left-1/2 -translate-x-1/2 -top-2 flex flex-col items-center">
            <div className="swing">
              <Image
                src="/scene/lamp.webp"
                alt=""
                width={220}
                height={330}
                priority
                className="w-[110px] md:w-[150px] h-auto"
              />
            </div>
            <div className="lightcone w-[80vw] h-[65svh] -mt-4" />
          </div>

          {/* Il titolo, sotto la luce */}
          <div className="absolute left-1/2 -translate-x-1/2 top-[46%] text-center w-full px-4">
            <h1 className="lamp-title font-display font-light text-3xl md:text-6xl uppercase text-bone/85 whitespace-nowrap">
              Human Circus
            </h1>
            <p className="lamp-sub font-mono text-[9px] md:text-[10px] tracking-[0.5em] uppercase text-bone/30 mt-6">
              Fotografia · Video
            </p>
          </div>
        </div>

        <div className="lamp-hint absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
          <span className="drawline block w-px h-12 bg-bone/25" />
        </div>
      </div>
    </section>
  );
}
