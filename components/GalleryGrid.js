"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal";

// Ogni fotografia sta dentro un arco da circo, come un numero in scena.
export default function GalleryGrid({ images, onDark = false }) {
  const [selected, setSelected] = useState(null);

  const close = useCallback(() => setSelected(null), []);
  const step = useCallback(
    (dir) => {
      setSelected((cur) => {
        if (cur === null) return cur;
        const idx = images.findIndex((im) => im.id === cur.id);
        const next = (idx + dir + images.length) % images.length;
        return images[next];
      });
    },
    [images]
  );

  useEffect(() => {
    if (!selected) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selected, close, step]);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
        {images.map((img, i) => (
          <Reveal key={img.id} y={40} delay={(i % 3) * 0.08}>
            <button
              onClick={() => setSelected(img)}
              className="group block w-full cursor-zoom-in"
              aria-label={`Apri ${img.alt}`}
            >
              <span className="block border-[3px] border-navy rounded-t-full p-1.5 md:p-2 bg-white shadow-[0_14px_36px_-18px_rgba(32,38,92,0.4)] transition-transform duration-500 group-hover:-translate-y-1.5">
                <span className="block rounded-t-full overflow-hidden aspect-[3/4] relative">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </span>
              </span>
              <span className={`mt-3 flex items-center justify-center gap-2 font-circus text-sm ${onDark ? "text-paper" : "text-navy"}`}>
                <span className="text-blood">★</span> N. {String(img.id).padStart(2, "0")} <span className="text-blood">★</span>
              </span>
            </button>
          </Reveal>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[85] bg-navy/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-12"
            onClick={close}
          >
            <motion.div
              key={selected.id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selected.src}
                alt={selected.alt}
                width={1600}
                height={1600}
                sizes="90vw"
                className="w-full h-auto max-h-[82svh] object-contain"
              />
              <div className="flex items-center justify-between mt-4 font-mono text-[11px] tracking-[0.25em] uppercase text-paper/70">
                <button onClick={() => step(-1)} className="hover:text-gold transition-colors">← Prec</button>
                <span>N. {String(selected.id).padStart(2, "0")} / {images.length}</span>
                <button onClick={() => step(1)} className="hover:text-gold transition-colors">Succ →</button>
              </div>
              <button
                onClick={close}
                className="absolute -top-10 right-0 font-mono text-[11px] tracking-[0.25em] uppercase text-paper hover:text-gold transition-colors"
              >
                Chiudi ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
