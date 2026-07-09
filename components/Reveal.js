"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Reveal({ children, className = "", y = 60, delay = 0 }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    const anim = gsap.fromTo(
      el,
      { opacity: 0, y },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        delay,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 85%", once: true },
      }
    );
    return () => { anim.scrollTrigger?.kill(); anim.kill(); };
  }, [y, delay]);

  return <div ref={ref} className={className}>{children}</div>;
}
