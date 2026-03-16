import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { CalendarDays, Clock3 } from "lucide-react";
import BentoGrid from "@/components/motion/BentoGrid";
import BentoTile from "@/components/motion/BentoTile";
import ScanlineHeading from "@/components/motion/ScanlineHeading";
import SmartImage from "@/components/SmartImage";
import SectionPhotoBand from "@/components/SectionPhotoBand";
import RouteSeo from "@/components/RouteSeo";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";
import { articleCategories, articles } from "@/lib/data";

const Articles = () => {
  const [activeCategory, setActiveCategory] = useState<(typeof articleCategories)[number]>("All");

  useScrollToTop();

  const filtered = useMemo(
    () =>
      activeCategory === "All"
        ? articles
        : articles.filter((article) => article.category === activeCategory),
    [activeCategory],
  );

  return (
    <div className="site-shell section-pad">
      <RouteSeo
        title="Articles | JuveniQ Engineering Insights"
        description="Implementation-focused articles on architecture, AI workflows, enterprise delivery, and trustworthy marketplace systems."
        path="/articles"
        image="/images/articles/local-first-architecture.webp"
        imageAlt="Engineering article cover on local-first software architecture"
      />

      <SectionPhotoBand image="/images/pages/home-product-strategy.webp" overlayVariant="dark">
        <div className="max-w-2xl space-y-3">
          <p className="eyebrow border-white/35 bg-white/10 text-white/85">Articles</p>
          <ScanlineHeading as="h1" className="hero-title max-w-[18ch] text-white">
            Insights on Africa software solutions, enterprise systems, and technical delivery.
          </ScanlineHeading>
          <p className="copy-default text-white/80">
            Practical notes from implementation work across local business systems, enterprise workflows, and AI-enabled operations.
          </p>
        </div>
      </SectionPhotoBand>

      <section className="section-shell section-pad border-t border-border/60">
        <BentoGrid className="grid gap-4 lg:grid-cols-12">
          <BentoTile itemClassName="lg:col-span-8" className="space-y-3 p-0" role="article" ariaLabel={articles[0].title}>
            <Link to={`/articles/${articles[0].slug}`} aria-label={`Read article: ${articles[0].title}`} className="block">
              <SmartImage
                src={articles[0].coverImage}
                alt={articles[0].title}
                className="h-56 w-full object-cover"
                loading="lazy"
              />
            </Link>
            <div className="space-y-2">
              <p className="meta-chip">Featured</p>
              <Link to={`/articles/${articles[0].slug}`} aria-label={`Read article: ${articles[0].title}`}>
                <h2 className="title-lg text-foreground transition-colors hover:text-cyan-300">{articles[0].title}</h2>
              </Link>
              <p className="copy-default text-muted-foreground">{articles[0].excerpt}</p>
            </div>
          </BentoTile>
          <BentoTile itemClassName="lg:col-span-4" className="space-y-3">
            <p className="eyebrow">Editorial Focus</p>
            <h3 className="text-2xl text-foreground">Practical engineering notes for growth teams.</h3>
            <p className="copy-default text-muted-foreground">
              We publish implementation-focused content around architecture, delivery strategy, and
              operational software design.
            </p>
            <p className="copy-default text-muted-foreground">
              Every article is written for teams making real product decisions, not abstract trends.
            </p>
          </BentoTile>
        </BentoGrid>
      </section>

      <section className="section-shell section-pad border-t border-border/60">
        <div className="flex flex-wrap gap-3 text-sm">
          {articleCategories.map((category) => (
            <button
              key={category}
              type="button"
              aria-label={`Filter articles by ${category}`}
              aria-pressed={activeCategory === category}
              onClick={() => setActiveCategory(category)}
              className={`ring-cyan border-b-2 px-1 pb-1 font-mono text-[11px] uppercase tracking-[0.12em] transition-colors duration-200 ${
                activeCategory === category
                  ? "border-cyan-300 text-cyan-300"
                  : "border-transparent text-muted-foreground hover:border-cyan-300/45 hover:text-cyan-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      <section className="section-shell section-pad border-t border-border/60">
        <BentoGrid className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((article) => (
            <BentoTile key={article.slug} className="group h-full space-y-3 p-0" role="article" ariaLabel={article.title}>
              <Link to={`/articles/${article.slug}`} className="block" aria-label={`Read article: ${article.title}`}>
                <SmartImage
                  src={article.coverImage}
                  alt={article.title}
                  className="h-44 w-full object-cover"
                  loading="lazy"
                />
              </Link>

              <div className="space-y-3">
                <div className="meta-chip">{article.category}</div>
                <Link to={`/articles/${article.slug}`} aria-label={`Read article: ${article.title}`}>
                  <h2 className="text-xl leading-snug text-foreground transition-colors group-hover:text-cyan-300">
                    {article.title}
                  </h2>
                </Link>
                <p className="copy-default text-muted-foreground">{article.excerpt}</p>

                <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.1em] text-muted-foreground">
                  <span className="inline-flex items-center gap-1">
                    <Clock3 className="h-3.5 w-3.5 text-cyan-300" />
                    {article.readTime}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <CalendarDays className="h-3.5 w-3.5 text-cyan-300" />
                    {article.publishedAt}
                  </span>
                </div>
              </div>
            </BentoTile>
          ))}
        </BentoGrid>
      </section>
    </div>
  );
};

export default Articles;

