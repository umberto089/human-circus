import { site } from "@/lib/site";

export default function sitemap() {
  const pages = ["", "/portfolio", "/servizi", "/about", "/contatti"];
  return pages.map((p) => ({
    url: `${site.url}${p}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: p === "" ? 1 : 0.8,
  }));
}
