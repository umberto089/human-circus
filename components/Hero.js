"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Particles from "./Particles";
import { heroImage } from "@/lib/images";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const root = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Sipario: le lettere del titolo entrano una a una
      gsap.fromTo(
        ".hero-letter",
        { yPercent: 120, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 1.8, stagger: 0.09, ease: "power4.out", delay: 0.6 }
      );
      gsap.fromTo(
        ".hero-sub",
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 1.6, delay: 2.2, ease: "power3.out" }
      );
      gsap.fromTo(".hero-img", { scale: 1.15 }, { scale: 1, duration: 3.4, ease: "power2.out" });

      // Parallasse cinematografica allo scroll
      gsap.to(".hero-img", {
        yPercent: 18,
        scale: 1.08,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
      });
      gsap.to(".hero-title", {
        yPercent: -40,
        opacity: 0.15,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  const title = "HUMAN CIRCUS";

  return (
    <section ref={root} className="relative h-[100svh] overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt="Human Circus — fotografia di strada"
          fill
          priority
          sizes="100vw"
          className="hero-img object-cover opacity-45"
        />
        <div className="absolute inset-0 vignette" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/60" />
      </div>

      <Particles />

      <div className="hero-title relative z-10 text-center px-4">
        <p className="hero-sub font-mono text-[10px] md:text-xs tracking-widest2 uppercase text-gold mb-6">
          Fotografia · Video · Napoli, Italia
        </p>
        <h1
          className="font-display font-medium text-[13vw] md:text-[10vw] leading-[0.9] text-bone"
          aria-label="Human Circus"
        >
          {title.split(" ").map((word, wi) => (
            <span key={wi} className="inline-block whitespace-nowrap mr-[0.2em] last:mr-0">
              {word.split("").map((ch, i) => (
                <span key={i} className="inline-block overflow-hidden align-bottom">
                  <span className="hero-letter inline-block">{ch}</span>
                </span>
              ))}
            </span>
          ))}
        </h1>
        <p className="hero-sub font-display italic text-xl md:text-3xl text-bone/80 mt-8 max-w-xl mx-auto">
          Il vero circo sono le persone.
        </p>
      </div>

      <div className="hero-sub absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-[10px] tracking-[0.3em] uppercase text-smoke">
        Scorri — la mostra è aperta
      </div>
    </section>
  );
}
