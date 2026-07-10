import Exhibit from "@/components/Exhibit";
import { galleryImages } from "@/lib/images";

export const metadata = {
  title: "Archivio",
  description: "L'archivio di Human Circus. Fotografie che emergono dal buio, una alla volta.",
};

const variants = ["dark", "spot", "sweep"];
const layouts = ["center", "left", "right", "center", "right", "left"];

export default function Portfolio() {
  return (
    <div className="pt-[16vh]">
      <p className="text-center font-mono text-[10px] tracking-[0.45em] uppercase text-bone/30">Archivio</p>
      {galleryImages.map((img, i) => (
        <Exhibit
          key={img.id}
          src={img.src}
          alt={img.alt}
          index={img.id}
          variant={variants[i % 3]}
          layout={layouts[i % 6]}
        />
      ))}
    </div>
  );
}
