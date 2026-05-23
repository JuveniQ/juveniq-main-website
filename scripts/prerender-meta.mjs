import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const DIST_DIR = path.resolve(process.cwd(), "dist");
const INDEX_PATH = path.join(DIST_DIR, "index.html");
const BASE_URL = "https://juveniq.co.za";

const baseRoutes = [
  {
    path: "/",
    title: "JuveniQ | AI & Software Engineering for Growth Teams",
    description:
      "JuveniQ builds practical AI and software systems for local businesses and enterprise operations across Africa.",
    image: "/images/hero/africa-tech-hero.webp",
    imageAlt: "African technology team collaborating on software delivery",
    ogType: "website",
  },
  {
    path: "/solutions",
    title: "Solutions | JuveniQ",
    description:
      "Explore JuveniQ solution tracks: local business platforms, enterprise operations systems, and AI-enabled workflow automation.",
    image: "/images/pages/solutions-digital-ops.webp",
    imageAlt: "Digital operations planning board and architecture workflow",
    ogType: "website",
  },
  {
    path: "/articles",
    title: "Articles | JuveniQ Engineering Insights",
    description:
      "Implementation-focused articles on architecture, AI workflows, enterprise delivery, and trustworthy marketplace systems.",
    image: "/images/articles/local-first-architecture.webp",
    imageAlt: "Engineering article cover on local-first software architecture",
    ogType: "website",
  },
];

const articleRoutes = [
  {
    slug: "local-first-software-architecture-africa",
    title: "Local-First Software Architecture for African Markets",
    description:
      "How to design products that respect network realities, device diversity, and local business workflows.",
    image: "/images/articles/local-first-architecture.webp",
  },
  {
    slug: "practical-ai-workflows-service-businesses",
    title: "Practical AI Workflows for Service Businesses",
    description:
      "A practical approach to integrating AI where it saves time without disrupting existing operations.",
    image: "/images/articles/practical-ai-workflows.webp",
  },
  {
    slug: "enterprise-engineering-readiness",
    title: "Enterprise Engineering Readiness: From MVP to Stable Platform",
    description:
      "The engineering shifts required when a product graduates from pilot usage to multi-team dependency.",
    image: "/images/articles/enterprise-readiness.webp",
  },
  {
    slug: "web-mobile-hybrid-product-path",
    title: "Choosing Web, Mobile, or Hybrid for Operational Teams",
    description:
      "A framework for deciding the right product channel based on usage context, adoption needs, and delivery speed.",
    image: "/images/articles/web-mobile-hybrid.webp",
  },
  {
    slug: "designing-trust-marketplace-systems",
    title: "Designing Trust in Marketplace Systems",
    description:
      "Lessons from building local service matching products where trust is the key conversion driver.",
    image: "/images/articles/trust-marketplace.webp",
  },
  {
    slug: "technical-delivery-playbook-growing-teams",
    title: "Technical Delivery Playbook for Growing Product Teams",
    description:
      "A practical framework for shipping consistently while balancing speed, quality, and evolving scope.",
    image: "/images/articles/delivery-playbook.webp",
  },
].map((item) => ({
  path: `/articles/${item.slug}`,
  title: `${item.title} | JuveniQ Articles`,
  description: item.description,
  image: item.image,
  imageAlt: item.title,
  ogType: "article",
}));

const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const escapeAttr = (value) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");

const toCanonicalUrl = (routePath) =>
  routePath === "/" ? `${BASE_URL}/` : `${BASE_URL}${routePath}`;

const toAbsoluteImage = (imagePath) =>
  /^https?:\/\//i.test(imagePath) ? imagePath : `${BASE_URL}${imagePath.startsWith("/") ? "" : "/"}${imagePath}`;

const upsertTag = (html, regex, replacement) => {
  if (regex.test(html)) return html.replace(regex, replacement);
  return html.replace("</head>", `  ${replacement}\n</head>`);
};

const upsertMeta = (html, attr, key, content) => {
  const regex = new RegExp(`<meta[^>]*${attr}=["']${escapeRegExp(key)}["'][^>]*>`, "i");
  return upsertTag(html, regex, `<meta ${attr}="${key}" content="${escapeAttr(content)}" />`);
};

const upsertCanonical = (html, canonical) => {
  const regex = /<link[^>]*rel=["']canonical["'][^>]*>/i;
  return upsertTag(html, regex, `<link rel="canonical" href="${escapeAttr(canonical)}" />`);
};

const upsertTitle = (html, title) => {
  const regex = /<title>[\s\S]*?<\/title>/i;
  return upsertTag(html, regex, `<title>${escapeAttr(title)}</title>`);
};

const applyMeta = (html, route) => {
  const canonical = toCanonicalUrl(route.path);
  const imageUrl = toAbsoluteImage(route.image);

  let updated = html;
  updated = upsertTitle(updated, route.title);
  updated = upsertCanonical(updated, canonical);
  updated = upsertMeta(updated, "name", "description", route.description);
  updated = upsertMeta(updated, "name", "robots", "index,follow,max-image-preview:large");
  updated = upsertMeta(updated, "property", "og:type", route.ogType);
  updated = upsertMeta(updated, "property", "og:site_name", "JuveniQ");
  updated = upsertMeta(updated, "property", "og:title", route.title);
  updated = upsertMeta(updated, "property", "og:description", route.description);
  updated = upsertMeta(updated, "property", "og:url", canonical);
  updated = upsertMeta(updated, "property", "og:image", imageUrl);
  updated = upsertMeta(updated, "property", "og:image:alt", route.imageAlt);
  updated = upsertMeta(updated, "name", "twitter:card", "summary_large_image");
  updated = upsertMeta(updated, "name", "twitter:title", route.title);
  updated = upsertMeta(updated, "name", "twitter:description", route.description);
  updated = upsertMeta(updated, "name", "twitter:image", imageUrl);
  return updated;
};

const writeRouteHtml = async (templateHtml, route) => {
  const rendered = applyMeta(templateHtml, route);
  const outputPath =
    route.path === "/"
      ? INDEX_PATH
      : path.join(DIST_DIR, route.path.replace(/^\//, ""), "index.html");

  await mkdir(path.dirname(outputPath), { recursive: true });
  await writeFile(outputPath, rendered, "utf8");
};

const run = async () => {
  let template;
  try {
    template = await readFile(INDEX_PATH, "utf8");
  } catch {
    console.warn("[prerender-meta] dist/index.html not found. Skipping prerender step.");
    return;
  }

  const routes = [...baseRoutes, ...articleRoutes];
  await Promise.all(routes.map((route) => writeRouteHtml(template, route)));
  console.log(`[prerender-meta] Generated ${routes.length} prerendered route files.`);
};

run().catch((error) => {
  console.error("[prerender-meta] Failed:", error);
  process.exitCode = 1;
});
