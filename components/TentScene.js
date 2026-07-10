"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Audience from "./Audience";

gsap.registerPlugin(ScrollTrigger);

// Il tendone emerge dal buio. Scrollando ci si entra dentro:
// il dipinto si avvicina fino a inghiottire lo schermo,
// e dentro c'è la pista. In platea, il pubblico. Rivolto verso di te.
export default function TentScene() {
  const root = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "+=280%",
          pin: true,
          scrub: 0.9,
        },
      });
      tl.fromTo(".ts-tent", { filter: "brightness(0.06)", scale: 1.06 },
        { filter: "brightness(0.85)", scale: 1, ease: "none", duration: 3 })
        .to(".ts-tent", { scale: 3.4, opacity: 0, ease: "power1.in", duration: 3 }, 3.4)
        .fromTo(".ts-ring", { scale: 1.28, filter: "brightness(0.12)" },
          { scale: 1.02, filter: "brightness(0.8)", ease: "none", duration: 3.4 }, 3.8)
        .fromTo(".ts-aud", { opacity: 0, y: 40 }, { opacity: 1, y: 0, ease: "power2.out", duration: 1.6 }, 6.2);
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative h-[100svh] overflow-hidden">
      {/* La pista, dietro */}
      <div className="ts-ring absolute inset-0 will-change-transform">
        <Image src="/scene/ringdark.webp" alt="" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0" style={{ boxShadow: "inset 0 0 160px 80px #070606" }} />
      </div>

      {/* Il tendone, davanti */}
      <div className="ts-tent absolute inset-0 flex items-center justify-center will-change-transform">
        <div className="relative">
          <Image src="/scene/tent.webp" alt="" width={1300} height={1300} className="h-[82svh] w-auto object-contain" />
          <div className="absolute inset-0" style={{ boxShadow: "inset 0 0 120px 60px #070606" }} />
        </div>
      </div>

      {/* Il pubblico, in fondo. Ti guarda. */}
      <div className="ts-aud absolute bottom-0 left-0 right-0">
        <Audience />
      </div>
    </section>
  );
}
