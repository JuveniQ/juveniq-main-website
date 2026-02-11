import BentoGrid from "@/components/motion/BentoGrid";
import BentoTile from "@/components/motion/BentoTile";

const ContactPrepChecklist = () => {
  return (
    <section className="section-shell pb-8">
      <BentoGrid className="grid gap-4 md:grid-cols-2">
        <BentoTile className="space-y-3">
          <p className="eyebrow">Before the call</p>
          <h3 className="text-2xl text-slate-100">What helps us prepare quickly.</h3>
          <ul className="space-y-2 text-sm text-slate-200">
            <li className="rounded-xl border border-white/20 bg-slate-800/75 p-3">Current workflow, pain points, and target users.</li>
            <li className="rounded-xl border border-white/20 bg-slate-800/75 p-3">Any timeline constraints or budget boundaries.</li>
            <li className="rounded-xl border border-white/20 bg-slate-800/75 p-3">Systems you already use and need to integrate with.</li>
          </ul>
        </BentoTile>
        <BentoTile className="space-y-3">
          <p className="eyebrow">After the call</p>
          <h3 className="text-2xl text-slate-100">What happens next.</h3>
          <ul className="space-y-2 text-sm text-slate-200">
            <li className="rounded-xl border border-white/20 bg-slate-800/75 p-3">A practical summary of recommended architecture options.</li>
            <li className="rounded-xl border border-white/20 bg-slate-800/75 p-3">Suggested delivery phases and milestone sequence.</li>
            <li className="rounded-xl border border-white/20 bg-slate-800/75 p-3">Clear next-step plan for implementation kickoff.</li>
          </ul>
        </BentoTile>
      </BentoGrid>
    </section>
  );
};

export default ContactPrepChecklist;

