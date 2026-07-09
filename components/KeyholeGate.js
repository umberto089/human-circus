"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Il passaggio segreto: scrollando, il pavimento a scacchi ti porta
// dentro la serratura. La sezione resta ferma mentre ci entri.
export default function KeyholeGate() {
  const root = useRef(null);
  const img = useRef(null);
  const label = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "+=130%",
          pin: true,
          scrub: 0.7,
        },
      });
      tl.fromTo(img.current, { scale: 0.85 }, { scale: 7.5, transformOrigin: "50% 38%", ease: "power2.in" })
        .to(label.current, { opacity: 0, duration: 0.15 }, 0.05)
        .to(root.current, { opacity: 0, duration: 0.2 }, ">-0.18");
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative h-[100svh] overflow-hidden bg-paper flex items-center justify-center">
      <p ref={label} className="absolute top-24 left-1/2 -translate-x-1/2 font-mono text-[10px] tracking-widest2 uppercase text-smoke whitespace-nowrap">
        ★ C'è un passaggio — continua a scendere ★
      </p>
      <div ref={img} className="will-change-transform">
        <Image
          src="/scene/keyhole.webp"
          alt=""
          width={560}
          height={980}
          className="h-[78svh] w-auto"
        />
      </div>
    </section>
  );
}
