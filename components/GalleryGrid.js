"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal";

export default function GalleryGrid({ images }) {
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
      <div className="columns-2 md:columns-3 gap-3 md:gap-4 [column-fill:_balance]">
        {images.map((img, i) => (
          <Reveal key={img.id} className="mb-3 md:mb-4 break-inside-avoid" y={40} delay={(i % 3) * 0.08}>
            <button
              onClick={() => setSelected(img)}
              className="group relative block w-full overflow-hidden bg-ink cursor-zoom-in"
              aria-label={`Apri ${img.alt}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={800}
                height={800}
                sizes="(max-width: 768px) 50vw, 33vw"
                className="w-full h-auto transition-all duration-700 ease-out group-hover:scale-[1.04] saturate-[0.85] group-hover:saturate-100"
              />
              <span className="absolute inset-0 bg-ink/30 opacity-100 group-hover:opacity-0 transition-opacity duration-500" />
              <span className="absolute bottom-3 left-3 font-mono text-[10px] tracking-[0.25em] uppercase text-bone opacity-0 group-hover:opacity-80 transition-opacity duration-500">
                Maschera {String(img.id).padStart(2, "0")}
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
            className="fixed inset-0 z-[70] bg-ink/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-12"
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
              <div className="flex items-center justify-between mt-4 font-mono text-[11px] tracking-[0.25em] uppercase text-smoke">
                <button onClick={() => step(-1)} className="hover:text-gold transition-colors">← Prec</button>
                <span>Maschera {String(selected.id).padStart(2, "0")} / {images.length}</span>
                <button onClick={() => step(1)} className="hover:text-gold transition-colors">Succ →</button>
              </div>
              <button
                onClick={close}
                className="absolute -top-10 right-0 font-mono text-[11px] tracking-[0.25em] uppercase text-bone hover:text-gold transition-colors"
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
