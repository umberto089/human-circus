import Link from "next/link";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-bone/10 px-5 md:px-10 py-14 mt-24">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
        <div>
          <p className="font-display text-4xl md:text-5xl italic text-bone">Human Circus</p>
          <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-smoke mt-3">
            Lo spettacolo non finisce mai
          </p>
        </div>
        <div className="flex flex-col gap-2 font-mono text-[11px] tracking-[0.2em] uppercase text-smoke">
          <a href={`mailto:${site.email}`} className="hover:text-gold transition-colors">{site.email}</a>
          <Link href="/contatti" className="hover:text-gold transition-colors">Prenota uno shooting</Link>
          <p className="mt-4 opacity-60">© {new Date().getFullYear()} {site.author}</p>
        </div>
      </div>
    </footer>
  );
}
