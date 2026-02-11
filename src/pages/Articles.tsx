import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { CalendarDays, Clock3 } from "lucide-react";
import BentoGrid from "@/components/motion/BentoGrid";
import BentoTile from "@/components/motion/BentoTile";
import ScanlineHeading from "@/components/motion/ScanlineHeading";
import SmartImage from "@/components/SmartImage";
import RouteSeo from "@/components/RouteSeo";
import { articleCategories, articles } from "@/lib/data";

const Articles = () => {
  const [active, setActive] = useState<(typeof articleCategories)[number]>("All");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const filtered = useMemo(
    () => (active === "All" ? articles : articles.filter((item) => item.category === active)),
    [active],
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

      <section className="section-shell">
        <BentoGrid className="grid gap-4">
          <BentoTile className="space-y-3">
            <p className="eyebrow">Articles</p>
            <ScanlineHeading as="h1" className="hero-title max-w-[18ch] text-slate-100">
              Insights on Africa software solutions, enterprise systems, and technical delivery.
            </ScanlineHeading>
            <p className="copy-default text-slate-300">
              Practical notes from implementation work across local business systems, enterprise workflows, and AI-enabled operations.
            </p>
          </BentoTile>
        </BentoGrid>
      </section>

      <section className="section-shell pt-6 md:pt-8">
        <BentoGrid className="grid gap-4 lg:grid-cols-12">
          <BentoTile itemClassName="lg:col-span-8" className="space-y-3 p-0" role="article" ariaLabel={articles[0].title}>
            <Link to={`/articles/${articles[0].slug}`} aria-label={`Read article: ${articles[0].title}`} className="block">
              <div className="duotone-wrap">
                <SmartImage
                  src={articles[0].coverImage}
                  alt={articles[0].title}
                  className="h-56 w-full object-cover"
                  loading="lazy"
                />
              </div>
            </Link>
            <div className="space-y-2 px-5 pb-5">
              <p className="meta-chip">Featured</p>
              <Link to={`/articles/${articles[0].slug}`} aria-label={`Read article: ${articles[0].title}`}>
                <h2 className="title-lg text-slate-100 transition-colors hover:text-cyan-200">{articles[0].title}</h2>
              </Link>
              <p className="copy-default text-slate-300">{articles[0].excerpt}</p>
            </div>
          </BentoTile>
          <BentoTile itemClassName="lg:col-span-4" className="space-y-3">
            <p className="eyebrow">Editorial Focus</p>
            <h3 className="text-2xl text-slate-100">Practical engineering notes for growth teams.</h3>
            <p className="copy-default text-slate-300">
              We publish implementation-focused content around architecture, delivery strategy, and
              operational software design.
            </p>
            <p className="copy-default text-slate-300">
              Every article is written for teams making real product decisions, not abstract trends.
            </p>
          </BentoTile>
        </BentoGrid>
      </section>

      <section className="section-shell pt-6 md:pt-8">
        <div className="flex flex-wrap gap-2">
          {articleCategories.map((category) => (
            <button
              key={category}
              type="button"
              aria-label={`Filter articles by ${category}`}
              aria-pressed={active === category}
              onClick={() => setActive(category)}
              className={`ring-cyan rounded-full border px-3 py-1 font-mono text-[11px] uppercase tracking-[0.12em] transition-colors duration-200 ${
                active === category
                  ? "border-cyan-300/45 bg-cyan-300/14 text-cyan-200"
                  : "border-white/20 bg-slate-800/75 text-slate-300 hover:border-cyan-300/35 hover:bg-slate-700/75"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      <section className="section-shell section-pad">
        <BentoGrid className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((article) => (
            <BentoTile key={article.slug} className="group h-full space-y-3 p-0" role="article" ariaLabel={article.title}>
              <Link to={`/articles/${article.slug}`} className="block" aria-label={`Read article: ${article.title}`}>
                <div className="duotone-wrap">
                  <SmartImage
                    src={article.coverImage}
                    alt={article.title}
                    className="h-44 w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </Link>

              <div className="space-y-3 px-4 pb-4">
                <div className="meta-chip">{article.category}</div>
                <Link to={`/articles/${article.slug}`} aria-label={`Read article: ${article.title}`}>
                  <h2 className="text-xl leading-snug text-slate-100 transition-colors group-hover:text-cyan-200">
                    {article.title}
                  </h2>
                </Link>
                <p className="copy-default text-slate-300">{article.excerpt}</p>

                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1 rounded-lg border border-white/20 bg-slate-800/75 px-2 py-1 font-mono text-[11px] uppercase tracking-[0.1em] text-slate-300 transition-colors duration-200 hover:bg-slate-700/70">
                    <Clock3 className="h-3.5 w-3.5 text-cyan-300" />
                    {article.readTime}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-lg border border-white/20 bg-slate-800/75 px-2 py-1 font-mono text-[11px] uppercase tracking-[0.1em] text-slate-300 transition-colors duration-200 hover:bg-slate-700/70">
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

