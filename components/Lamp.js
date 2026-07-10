"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

// Buio. Una lampada accesa ondeggia appena.
// Nessuna spiegazione: solo la luce, e l'invito a scendere.
export default function Lamp() {
  const root = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".lamp-in", { opacity: 0 }, { opacity: 1, duration: 3, ease: "power2.inOut", delay: 0.6 });
      gsap.fromTo(".lamp-hint", { opacity: 0 }, { opacity: 1, duration: 2, delay: 3.2 });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative h-[130vh]">
      <div className="sticky top-0 h-[100svh] overflow-hidden">
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

        <div className="lamp-hint absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
          <span className="drawline block w-px h-12 bg-bone/25" />
        </div>
      </div>
    </section>
  );
}
