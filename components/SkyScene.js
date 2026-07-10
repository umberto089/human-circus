"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Il cielo del circo. La luna si muove di millimetri.
// La mongolfiera sale, lenta come un pensiero.
export default function SkyScene() {
  const root = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".sky-moon", { y: -20 }, { y: 46, ease: "none",
        scrollTrigger: { trigger: root.current, start: "top bottom", end: "bottom top", scrub: 1.2 } });
      gsap.fromTo(".sky-balloon", { y: 90 }, { y: -150, ease: "none",
        scrollTrigger: { trigger: root.current, start: "top bottom", end: "bottom top", scrub: 0.9 } });
      gsap.fromTo(".sky-moon-w", { opacity: 0 }, { opacity: 1, duration: 2.5, ease: "power2.inOut",
        scrollTrigger: { trigger: root.current, start: "top 70%", once: true } });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative h-[165vh] overflow-hidden">
      <span className="star-dim absolute top-[14%] left-[22%] w-[3px] h-[3px] rounded-full bg-bone/60" />
      <span className="star-dim absolute top-[30%] left-[64%] w-[2px] h-[2px] rounded-full bg-bone/50" style={{ animationDelay: "1.6s" }} />
      <span className="star-dim absolute top-[58%] left-[38%] w-[2px] h-[2px] rounded-full bg-bone/40" style={{ animationDelay: "3s" }} />
      <span className="star-dim absolute top-[72%] left-[78%] w-[3px] h-[3px] rounded-full bg-bone/50" style={{ animationDelay: "2.2s" }} />

      <div className="sky-moon-w absolute top-[10%] right-[8%] md:right-[14%]">
        <div className="sky-moon rounded-full overflow-hidden w-[46vw] max-w-[400px] aspect-square opacity-90"
          style={{ boxShadow: "0 0 90px 18px rgba(214,207,192,0.07), inset 0 0 60px 24px #070606" }}>
          <Image src="/scene/moon.webp" alt="" width={800} height={1000} className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="sky-balloon absolute left-[6%] md:left-[14%] top-[46%]">
        <div className="swing-slow">
          <Image src="/scene/balloon.webp" alt="" width={340} height={480}
            className="w-[30vw] max-w-[240px] h-auto opacity-85 drop-shadow-[0_18px_40px_rgba(0,0,0,0.7)]" />
        </div>
      </div>
    </section>
  );
}
