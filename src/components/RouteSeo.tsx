import { useEffect } from "react";
import { companyProfile } from "@/lib/company";

type RouteSeoProps = {
  title: string;
  description: string;
  path: string;
  image: string;
  imageAlt: string;
  ogType?: "website" | "article";
  robots?: string;
};

const BASE_URL = companyProfile.canonicalDomain.replace(/\/$/, "");

const toAbsoluteUrl = (value: string) => {
  if (/^https?:\/\//i.test(value)) return value;
  const normalized = value.startsWith("/") ? value : `/${value}`;
  return `${BASE_URL}${normalized}`;
};

const toCanonicalUrl = (path: string) => {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return normalized === "/" ? `${BASE_URL}/` : `${BASE_URL}${normalized}`;
};

const upsertMeta = (selector: string, attrs: Record<string, string>) => {
  let element = document.head.querySelector(selector) as HTMLMetaElement | null;
  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }
  Object.entries(attrs).forEach(([key, value]) => {
    element?.setAttribute(key, value);
  });
};

const upsertCanonical = (href: string) => {
  let link = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  link.setAttribute("href", href);
};

const RouteSeo = ({
  title,
  description,
  path,
  image,
  imageAlt,
  ogType = "website",
  robots = "index,follow,max-image-preview:large",
}: RouteSeoProps) => {
  useEffect(() => {
    const canonical = toCanonicalUrl(path);
    const imageUrl = toAbsoluteUrl(image);

    document.title = title;
    upsertCanonical(canonical);
    upsertMeta('meta[name="description"]', { name: "description", content: description });
    upsertMeta('meta[name="robots"]', { name: "robots", content: robots });
    upsertMeta('meta[property="og:type"]', { property: "og:type", content: ogType });
    upsertMeta('meta[property="og:site_name"]', { property: "og:site_name", content: "JuveniQ" });
    upsertMeta('meta[property="og:title"]', { property: "og:title", content: title });
    upsertMeta('meta[property="og:description"]', { property: "og:description", content: description });
    upsertMeta('meta[property="og:url"]', { property: "og:url", content: canonical });
    upsertMeta('meta[property="og:image"]', { property: "og:image", content: imageUrl });
    upsertMeta('meta[property="og:image:alt"]', { property: "og:image:alt", content: imageAlt });
    upsertMeta('meta[name="twitter:card"]', { name: "twitter:card", content: "summary_large_image" });
    upsertMeta('meta[name="twitter:title"]', { name: "twitter:title", content: title });
    upsertMeta('meta[name="twitter:description"]', { name: "twitter:description", content: description });
    upsertMeta('meta[name="twitter:image"]', { name: "twitter:image", content: imageUrl });
  }, [title, description, path, image, imageAlt, ogType, robots]);

  return null;
};

export default RouteSeo;
