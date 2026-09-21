import { useEffect } from "react";

interface PageMetaProps {
  title: string;
  description: string;
  path: string;
}

const upsertMeta = (selector: string, attribute: "name" | "property", value: string, content: string) => {
  let element = document.head.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, value);
    document.head.appendChild(element);
  }

  element.content = content;
};

const PageMeta = ({ title, description, path }: PageMetaProps) => {
  useEffect(() => {
    const fullTitle = `${title} | JuveniQ`;
    const canonicalUrl = `https://juveniq.co.za${path}`;
    document.title = fullTitle;

    upsertMeta('meta[name="description"]', "name", "description", description);
    upsertMeta('meta[property="og:title"]', "property", "og:title", fullTitle);
    upsertMeta('meta[property="og:description"]', "property", "og:description", description);
    upsertMeta('meta[property="og:url"]', "property", "og:url", canonicalUrl);
    upsertMeta('meta[name="twitter:title"]', "name", "twitter:title", fullTitle);
    upsertMeta('meta[name="twitter:description"]', "name", "twitter:description", description);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;
  }, [description, path, title]);

  return null;
};

export default PageMeta;
