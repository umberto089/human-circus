"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Nessuna griglia. Ogni fotografia è un'apparizione.
// "dark": emerge dal buio. "spot": la luce la trova. "sweep": viene scoperta.
const layouts = {
  center: "mx-auto w-[86vw] md:w-[min(58vw,680px)]",
  left: "mr-auto ml-[4vw] md:ml-[10vw] w-[70vw] md:w-[min(42vw,520px)]",
  right: "ml-auto mr-[4vw] md:mr-[10vw] w-[70vw] md:w-[min(42vw,520px)]",
};

export default function Exhibit({ src, index, variant = "dark", layout = "center", alt = "" }) {
  const root = useRef(null);
  const frame = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const st = { trigger: root.current, start: "top 78%", end: "top 22%", scrub: 0.7 };
      if (variant === "spot") {
        gsap.fromTo(frame.current,
          { clipPath: "circle(6% at 50% 42%)", filter: "brightness(0.25)" },
          { clipPath: "circle(75% at 50% 50%)", filter: "brightness(1)", ease: "none", scrollTrigger: st });
      } else if (variant === "sweep") {
        gsap.fromTo(frame.current,
          { clipPath: "inset(0 100% 0 0)", filter: "brightness(0.5)" },
          { clipPath: "inset(0 0% 0 0)", filter: "brightness(1)", ease: "none", scrollTrigger: st });
      } else {
        gsap.fromTo(frame.current,
          { filter: "brightness(0)", y: 50 },
          { filter: "brightness(1)", y: 0, ease: "none", scrollTrigger: st });
      }
      gsap.fromTo(".ex-num", { opacity: 0 }, { opacity: 1, duration: 1.5,
        scrollTrigger: { trigger: root.current, start: "top 45%", once: true } });
    }, root);
    return () => ctx.revert();
  }, [variant]);

  return (
    <section ref={root} className="relative py-[14vh]">
      <div className={layouts[layout]}>
        <div ref={frame} className="relative will-change-transform">
          <Image
            src={src}
            alt={alt}
            width={1200}
            height={1200}
            sizes="(max-width: 768px) 86vw, 60vw"
            className="w-full h-auto"
          />
          <div className="absolute inset-0" style={{ boxShadow: "inset 0 0 90px 30px rgba(7,6,6,0.55)" }} />
        </div>
        <p className="ex-num font-mono text-[9px] tracking-[0.4em] text-bone/25 mt-4">
          {String(index).padStart(2, "0")}
        </p>
      </div>
    </section>
  );
}
