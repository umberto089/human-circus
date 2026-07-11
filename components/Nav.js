"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/", label: "Il Circo" },
  { href: "/portfolio", label: "Galleria" },
  { href: "/servizi", label: "Servizi" },
  { href: "/about", label: "About" },
  { href: "/contatti", label: "Contatti" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 mix-blend-difference">
      <div className="flex items-center justify-between px-5 md:px-10 py-5">
        <Link href="/" className="font-mono text-xs tracking-widest2 uppercase text-bone">
          Human Circus
        </Link>

        <nav className="hidden md:flex gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`font-mono text-[11px] tracking-[0.25em] uppercase transition-opacity hover:opacity-100 ${
                pathname === l.href ? "opacity-100 text-gold" : "opacity-60 text-bone"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden font-mono text-[11px] tracking-[0.25em] uppercase text-bone"
          aria-label="Menu"
        >
          {open ? "Chiudi" : "Menu"}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="md:hidden flex flex-col gap-6 px-5 pb-8 pt-2 bg-ink/95 backdrop-blur"
          >
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`font-display text-3xl italic ${pathname === l.href ? "text-gold" : "text-bone"}`}
              >
                {l.label}
              </Link>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
