"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

// Quando scrolli, dal cielo cadono popcorn.
export default function PopcornRain() {
  const layer = useRef(null);

  useEffect(() => {
    const el = layer.current;
    let lastY = window.scrollY;
    let lastSpawn = 0;
    let active = 0;

    const spawn = () => {
      if (active > 26) return;
      active++;
      const k = document.createElement("div");
      const size = 12 + Math.random() * 14;
      k.style.cssText = `position:absolute;top:-40px;left:${Math.random() * 100}%;width:${size}px;height:${size}px;will-change:transform;`;
      k.innerHTML = `<svg viewBox="0 0 20 20" width="100%" height="100%">
        <circle cx="7" cy="9" r="5.5" fill="#fdf3d9"/>
        <circle cx="13" cy="8" r="5" fill="#f7e7bd"/>
        <circle cx="10" cy="13" r="5" fill="#fbeecb"/>
        <circle cx="10" cy="8" r="3.4" fill="#fffaf0"/>
      </svg>`;
      el.appendChild(k);
      gsap.to(k, {
        y: window.innerHeight + 80,
        x: `+=${(Math.random() - 0.5) * 160}`,
        rotation: (Math.random() - 0.5) * 540,
        duration: 2.4 + Math.random() * 1.8,
        ease: "power1.in",
        onComplete: () => { k.remove(); active--; },
      });
    };

    const onScroll = () => {
      const now = performance.now();
      const dy = Math.abs(window.scrollY - lastY);
      lastY = window.scrollY;
      if (dy > 6 && now - lastSpawn > 130) {
        lastSpawn = now;
        spawn();
        if (Math.random() < 0.4) spawn();
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return <div ref={layer} className="fixed inset-0 z-[55] pointer-events-none overflow-hidden" aria-hidden="true" />;
}
