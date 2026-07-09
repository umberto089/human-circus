"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// L'elefante del Cirque Magnifique attraversa lo schermo
// in equilibrio sulla palla, spinto dallo scroll.
export default function ElephantCross({ dir = 1 }) {
  const root = useRef(null);
  const walker = useRef(null);
  const rocker = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        walker.current,
        { x: dir > 0 ? "-30vw" : "110vw" },
        { x: dir > 0 ? "110vw" : "-30vw", ease: "none",
          scrollTrigger: { trigger: root.current, start: "top bottom", end: "bottom top", scrub: 0.8 } }
      );
      // dondolio da equilibrista
      gsap.to(rocker.current, {
        rotation: 4, yoyo: true, repeat: -1, duration: 1.1,
        ease: "sine.inOut", transformOrigin: "50% 92%",
      });
      gsap.set(rocker.current, { rotation: -4, transformOrigin: "50% 92%" });
    }, root);
    return () => ctx.revert();
  }, [dir]);

  return (
    <div ref={root} className="relative h-[24vh] md:h-[30vh] overflow-hidden" aria-hidden="true">
      {/* la pista su cui rotola */}
      <div className="absolute bottom-3 left-0 right-0 h-[3px] bg-navy/20" />
      <div ref={walker} className="absolute bottom-3 will-change-transform">
        <div ref={rocker}>
          <Image
            src="/scene/elephant.webp"
            alt=""
            width={300}
            height={410}
            className="h-[20vh] md:h-[26vh] w-auto drop-shadow-[0_10px_20px_rgba(32,38,92,0.25)]"
          />
        </div>
      </div>
    </div>
  );
}
