import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-bone/10 px-5 md:px-10 py-10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-[9px] tracking-[0.3em] uppercase text-smoke">
        <p>Human Circus</p>
        <a href={`mailto:${site.email}`} className="hover:text-bone transition-colors duration-500">{site.email}</a>
        <p>© {new Date().getFullYear()} {site.author}</p>
      </div>
    </footer>
  );
}
