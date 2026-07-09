"use client";
import Reveal from "./Reveal";

// Sostituisci gli id con i tuoi video Vimeo o YouTube quando pronti.
// Per Cloudinary: <video src="https://res.cloudinary.com/TUO_CLOUD/video/upload/..." controls />
const videos = [
  { title: "Showreel — In arrivo", note: "Il primo atto video è in lavorazione." },
  { title: "Dietro le quinte", note: "Il circo visto dal retro del tendone." },
];

export default function VideoSection() {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      {videos.map((v, i) => (
        <Reveal key={v.title} delay={i * 0.12}>
          <div className="relative aspect-video bg-[#12100e] border border-bone/10 flex flex-col items-center justify-center gap-3 group hover:border-gold/40 transition-colors duration-500">
            <span className="w-14 h-14 rounded-full border border-bone/25 flex items-center justify-center group-hover:border-gold group-hover:scale-110 transition-all duration-500">
              <span className="ml-1 border-y-[7px] border-y-transparent border-l-[12px] border-l-bone/70 group-hover:border-l-gold transition-colors" />
            </span>
            <p className="font-display italic text-2xl text-bone">{v.title}</p>
            <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-smoke">{v.note}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
