import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import BentoTile from "@/components/motion/BentoTile";
import type { ContactFaq } from "./types";

type ContactFaqSectionProps = {
  faqs: ContactFaq[];
};

const ContactFaqSection = ({ faqs }: ContactFaqSectionProps) => {
  return (
    <section className="section-shell section-pad">
      <BentoTile className="space-y-3">
        <p className="eyebrow">FAQ</p>
        <h2 className="title-lg text-foreground">Quick answers before we start.</h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq) => (
            <AccordionItem key={faq.id} value={faq.id} className="border-b border-white/15">
              <AccordionTrigger className="text-left font-semibold text-foreground hover:text-cyan-300">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="copy-default text-muted-foreground">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </BentoTile>
    </section>
  );
};

export default ContactFaqSection;
