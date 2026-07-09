import GalleryGrid from "@/components/GalleryGrid";
import SectionHead from "@/components/SectionHead";
import { galleryImages } from "@/lib/images";

export const metadata = {
  title: "Galleria",
  description: "La galleria completa di Human Circus: street photography e ritratti dal circo quotidiano.",
};

export default function Portfolio() {
  return (
    <section className="px-5 md:px-10 pt-36 md:pt-44 pb-20 max-w-7xl mx-auto">
      <SectionHead kicker="Galleria completa" title="Tutti gli atti" />
      <GalleryGrid images={galleryImages} />
    </section>
  );
}
