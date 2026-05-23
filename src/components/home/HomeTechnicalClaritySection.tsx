const HomeTechnicalClaritySection = () => {
  return (
    <section className="section-shell section-pad border-t border-border/60">
      <div className="max-w-2xl space-y-3">
        <p className="eyebrow">Technical Clarity</p>
        <h2 className="title-lg text-foreground">Builds that stay readable, maintainable, and scalable.</h2>
        <p className="copy-default text-muted-foreground">
          We focus on clear module boundaries, practical integration strategy, and release visibility
          so teams can keep momentum after launch.
        </p>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li className="border-b border-border pb-2">Structured release checkpoints and QA workflows.</li>
          <li>Architecture choices mapped to real constraints.</li>
        </ul>
      </div>
    </section>
  );
};

export default HomeTechnicalClaritySection;
