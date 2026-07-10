"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/portfolio", label: "Archivio" },
  { href: "/about", label: "About" },
  { href: "/servizi", label: "Servizi" },
  { href: "/contatti", label: "Contatti" },
];

export default function Nav() {
  const pathname = usePathname();
  return (
    <header className="fixed top-0 left-0 right-0 z-50 mix-blend-difference">
      <div className="flex items-center justify-between px-5 md:px-10 py-6">
        <Link href="/" className="font-mono text-[10px] tracking-[0.45em] uppercase text-bone/80 hover:text-bone transition-colors duration-500">
          Human Circus
        </Link>
        <nav className="flex gap-5 md:gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`font-mono text-[9px] md:text-[10px] tracking-[0.3em] uppercase transition-opacity duration-500 hover:opacity-100 ${
                pathname === l.href ? "opacity-90 text-bone" : "opacity-40 text-bone"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
