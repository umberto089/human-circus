import Link from "next/link";
import Image from "next/image";
import Lamp from "@/components/Lamp";
import CurtainScene from "@/components/CurtainScene";
import SkyScene from "@/components/SkyScene";
import TentScene from "@/components/TentScene";
import Exhibit from "@/components/Exhibit";
import Audience from "@/components/Audience";
import { galleryImages } from "@/lib/images";

const pick = (n) => galleryImages[n - 1];

export default function Home() {
  return (
    <>
      {/* Atto 0 — buio, una lampada */}
      <Lamp />

      {/* Atto I — il sipario, la luce arriva scrollando */}
      <CurtainScene />

      {/* Atto II — il cielo: luna, mongolfiera */}
      <SkyScene />

      {/* Prime apparizioni */}
      <Exhibit src={pick(9).src} index={1} variant="dark" layout="center" alt={pick(9).alt} />
      <Exhibit src={pick(13).src} index={2} variant="spot" layout="left" alt={pick(13).alt} />
      <Exhibit src={pick(4).src} index={3} variant="sweep" layout="right" alt={pick(4).alt} />

      {/* Atto III — dentro il tendone. Il pubblico ti guarda. */}
      <TentScene />

      {/* La mostra continua */}
      <Exhibit src={pick(18).src} index={4} variant="spot" layout="center" alt={pick(18).alt} />
      <Exhibit src={pick(22).src} index={5} variant="dark" layout="right" alt={pick(22).alt} />
      <Exhibit src={pick(1).src} index={6} variant="sweep" layout="left" alt={pick(1).alt} />

      {/* Verso l'archivio: solo un gesto, nessuna spiegazione */}
      <section className="relative py-[24vh] text-center">
        <Link
          href="/portfolio"
          className="font-mono text-[10px] tracking-[0.45em] uppercase text-bone/40 hover:text-bone transition-colors duration-700"
        >
          Continua →
        </Link>
      </section>

      {/* Congedo — il pubblico resta. La lampada anche. */}
      <section className="relative pt-[10vh] overflow-hidden">
        <Audience className="mb-0" />
        <div className="border-t border-bone/10 pt-[14vh] pb-[10vh] text-center">
          <div className="swing inline-block">
            <Image src="/scene/lamp.webp" alt="" width={110} height={165} className="w-[64px] h-auto mx-auto" />
          </div>
          <p className="font-display italic text-2xl md:text-3xl text-bone/60 mt-10">Human Circus</p>
          <Link
            href="/contatti"
            className="inline-block mt-8 font-mono text-[10px] tracking-[0.4em] uppercase text-bone/35 hover:text-bone transition-colors duration-700"
          >
            Scrivimi
          </Link>
        </div>
      </section>
    </>
  );
}
