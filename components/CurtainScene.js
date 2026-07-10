"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Il sipario è già aperto su un cielo dipinto. Ma è al buio.
// È lo scroll del visitatore a portare la luce, piano.
// In fondo, un'insegna si accende a scatti: FUN. Nessun commento.
export default function CurtainScene() {
  const root = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "+=160%",
          pin: true,
          scrub: 0.8,
        },
      });
      tl.fromTo(".cs-paint",
        { filter: "brightness(0.05)", scale: 1.12 },
        { filter: "brightness(0.95)", scale: 1, ease: "none", duration: 6 })
        // l'insegna prende corrente: si accende a scatti
        .to(".cs-fun", { opacity: 0.25, duration: 0.2 }, 4.2)
        .to(".cs-fun", { opacity: 0.05, duration: 0.15 })
        .to(".cs-fun", { opacity: 0.6, duration: 0.2 })
        .to(".cs-fun", { opacity: 0.15, duration: 0.12 })
        .to(".cs-fun", { opacity: 1, duration: 0.4 });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative h-[100svh] overflow-hidden flex items-center justify-center">
      <div className="cs-paint relative will-change-transform">
        <Image
          src="/scene/curtain-sky.webp"
          alt=""
          width={1300}
          height={2310}
          className="h-[92svh] w-auto object-contain"
        />
        {/* vignettatura che tiene il dipinto dentro il buio */}
        <div className="absolute inset-0" style={{ boxShadow: "inset 0 0 120px 60px #070606" }} />
      </div>

      <div className="cs-fun absolute bottom-[10%] right-[8%] md:right-[14%] opacity-0 rotate-[14deg]">
        <Image src="/scene/fun.webp" alt="" width={280} height={140} className="w-32 md:w-48 h-auto" />
      </div>
    </section>
  );
}
