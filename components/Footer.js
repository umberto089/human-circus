import Link from "next/link";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-navy px-5 md:px-10 py-14 mt-0 border-t-4 border-blood">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
        <div>
          <p className="font-circus text-3xl md:text-4xl text-paper">★ Human Circus</p>
          <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-paper/50 mt-3">
            The greatest show on earth — lo spettacolo non chiude mai
          </p>
        </div>
        <div className="flex flex-col gap-2 font-mono text-[11px] tracking-[0.2em] uppercase text-paper/60">
          <a href={`mailto:${site.email}`} className="hover:text-gold transition-colors">{site.email}</a>
          <Link href="/contatti" className="hover:text-gold transition-colors">Prenota uno shooting</Link>
          <p className="mt-4 opacity-60">© {new Date().getFullYear()} {site.author}</p>
        </div>
      </div>
    </footer>
  );
}
