import BentoGrid from "@/components/motion/BentoGrid";
import BentoTile from "@/components/motion/BentoTile";

const ContactPrepChecklist = () => {
  return (
    <section className="section-shell pb-8">
      <BentoGrid className="grid gap-4 md:grid-cols-2">
        <BentoTile className="space-y-3">
          <p className="eyebrow">Before the call</p>
          <h3 className="text-2xl text-foreground">What helps us prepare quickly.</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="border-b border-border pb-2">Current workflow, pain points, and target users.</li>
            <li className="border-b border-border pb-2">Any timeline constraints or budget boundaries.</li>
            <li>Systems you already use and need to integrate with.</li>
          </ul>
        </BentoTile>
        <BentoTile className="space-y-3">
          <p className="eyebrow">After the call</p>
          <h3 className="text-2xl text-foreground">What happens next.</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="border-b border-border pb-2">A practical summary of recommended architecture options.</li>
            <li className="border-b border-border pb-2">Suggested delivery phases and milestone sequence.</li>
            <li>Clear next-step plan for implementation kickoff.</li>
          </ul>
        </BentoTile>
      </BentoGrid>
    </section>
  );
};

export default ContactPrepChecklist;
