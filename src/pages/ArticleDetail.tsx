import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, CalendarDays, Clock3 } from "lucide-react";
import ReadingProgressGlow from "@/components/motion/ReadingProgressGlow";
import BentoGrid from "@/components/motion/BentoGrid";
import BentoTile from "@/components/motion/BentoTile";
import ScanlineHeading from "@/components/motion/ScanlineHeading";
import RouteSeo from "@/components/RouteSeo";
import { scrollViewportToTop, useScrollToTop } from "@/hooks/use-scroll-to-top";
import { articles, getArticleBySlug } from "@/lib/data";

const ArticleDetail = () => {
  const { slug = "" } = useParams();
  const article = getArticleBySlug(slug);

  useScrollToTop();

  useEffect(() => {
    scrollViewportToTop();
  }, [slug]);

  if (!article) {
    return (
      <div className="site-shell section-pad">
        <RouteSeo
          title="Article Not Found | JuveniQ"
          description="The requested article could not be found."
          path={`/articles/${slug}`}
          image="/images/articles/local-first-architecture.webp"
          imageAlt="JuveniQ articles"
          robots="noindex,follow"
        />
        <section className="section-shell">
          <BentoTile className="space-y-3">
            <h1 className="title-lg text-foreground">Article not found</h1>
            <p className="copy-default text-muted-foreground">
              This article may have been moved or the link is invalid.
            </p>
            <Link to="/articles" className="btn-cyan ring-cyan w-fit">
              Back to Articles
            </Link>
          </BentoTile>
        </section>
      </div>
    );
  }

  const related = articles
    .filter((item) => item.slug !== article.slug && item.category === article.category)
    .slice(0, 3);

  return (
    <div className="site-shell section-pad">
      <RouteSeo
        title={`${article.title} | JuveniQ Articles`}
        description={article.excerpt}
        path={`/articles/${article.slug}`}
        image={article.coverImage}
        imageAlt={article.title}
        ogType="article"
      />

      <ReadingProgressGlow />

      <section className="section-shell">
        <BentoGrid className="grid gap-4">
          <BentoTile className="space-y-4">
            <Link to="/articles" aria-label="Back to articles hub" className="ring-cyan inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-cyan-300">
              <ArrowLeft className="h-4 w-4" />
              Back to Articles
            </Link>

            <p className="meta-chip">{article.category}</p>
            <ScanlineHeading as="h1" className="hero-title max-w-[18ch] text-foreground">
              {article.title}
            </ScanlineHeading>
            <p className="copy-default text-muted-foreground">{article.excerpt}</p>

            <div className="flex flex-wrap items-center gap-3 font-mono text-[11px] uppercase tracking-[0.1em] text-muted-foreground">
              <span className="inline-flex items-center gap-1">
                <Clock3 className="h-3.5 w-3.5 text-cyan-300" />
                {article.readTime}
              </span>
              <span className="inline-flex items-center gap-1">
                <CalendarDays className="h-3.5 w-3.5 text-cyan-300" />
                {article.publishedAt}
              </span>
              {article.tags.map((tag) => (
                <span key={tag} className="inline-flex items-center gap-1">
                  • {tag}
                </span>
              ))}
            </div>
          </BentoTile>
        </BentoGrid>
      </section>

      <section className="section-shell section-pad">
        <BentoGrid className="grid gap-4 lg:grid-cols-12">
          <BentoTile itemClassName="lg:col-span-4" className="space-y-3 lg:sticky lg:top-24 lg:self-start">
            <p className="eyebrow">Sections</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {article.sections.map((section) => (
                <li key={section.heading} className="border-b border-border pb-2">
                  {section.heading}
                </li>
              ))}
            </ul>
          </BentoTile>
          <BentoTile itemClassName="lg:col-span-8" className="space-y-5">
            {article.sections.map((section) => (
              <article key={section.heading} className="space-y-2">
                <h2 className="text-2xl text-foreground">{section.heading}</h2>
                <p className="copy-default text-muted-foreground">{section.body}</p>
              </article>
            ))}
          </BentoTile>
        </BentoGrid>
      </section>

      {related.length > 0 && (
        <section className="section-shell pb-8">
          <BentoGrid className="grid gap-4 md:grid-cols-3">
            {related.map((item) => (
              <BentoTile key={item.slug} className="space-y-3">
                <p className="meta-chip">{item.category}</p>
                <h3 className="text-xl text-foreground">{item.title}</h3>
                <p className="copy-default text-muted-foreground">{item.excerpt}</p>
                <Link to={`/articles/${item.slug}`} aria-label={`Read related article: ${item.title}`} className="ring-cyan text-sm font-semibold text-cyan-300 hover:text-cyan-200">
                  Read Article
                </Link>
              </BentoTile>
            ))}
          </BentoGrid>
        </section>
      )}
    </div>
  );
};

export default ArticleDetail;

