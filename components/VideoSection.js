"use client";
import Image from "next/image";
import Reveal from "./Reveal";

// Sostituisci gli id con i tuoi video Vimeo o YouTube quando pronti.
// Per Cloudinary: <video src="https://res.cloudinary.com/TUO_CLOUD/video/upload/..." controls />
const videos = [
  { title: "Showreel — In arrivo", note: "Il primo numero video è in prova.", bg: "/images/hc-15.webp" },
  { title: "Dietro le quinte", note: "Ciò che accade quando la maschera si toglie.", bg: "/images/hc-20.webp" },
];

export default function VideoSection() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {videos.map((v, i) => (
        <Reveal key={v.title} delay={i * 0.12}>
          <div className="group border-[3px] border-navy bg-white p-2 shadow-[0_14px_36px_-18px_rgba(32,38,92,0.4)]">
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={v.bg}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-navy/30 group-hover:bg-navy/15 transition-colors duration-500" />
              <span className="absolute inset-0 m-auto w-14 h-14 rounded-full bg-blood border-2 border-paper flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <span className="ml-1 border-y-[8px] border-y-transparent border-l-[13px] border-l-paper" />
              </span>
            </div>
            <div className="bg-navy text-center py-3 mt-2">
              <p className="font-circus text-lg text-paper">{v.title}</p>
              <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-paper/60 mt-1">{v.note}</p>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
