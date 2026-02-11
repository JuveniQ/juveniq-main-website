import { type ChangeEvent, type FormEvent, useState } from "react";
import BentoGrid from "@/components/motion/BentoGrid";
import ContactFaqSection from "@/components/contact/ContactFaqSection";
import ContactInfoPanel from "@/components/contact/ContactInfoPanel";
import ContactInquiryForm from "@/components/contact/ContactInquiryForm";
import ContactPrepChecklist from "@/components/contact/ContactPrepChecklist";
import type { ContactFaq } from "@/components/contact/types";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";
import {
  INITIAL_CONTACT_FORM_VALUES,
  SUBMISSION_MIN_DELAY_MS,
  validateContactForm,
} from "@/lib/contact-form";

const contactFaqs: ContactFaq[] = [
  {
    id: "timeline",
    question: "How long does a typical project take?",
    answer:
      "Timeline depends on complexity. Focused websites are usually 2 to 8 weeks, while larger product systems require longer phased delivery.",
  },
  {
    id: "support",
    question: "Do you provide support after launch?",
    answer:
      "Yes. We include post-launch support and can continue with iteration and maintenance based on your system needs.",
  },
  {
    id: "scope",
    question: "Can you work with existing tools and systems?",
    answer:
      "Yes. We often integrate with existing services, databases, and internal workflows to avoid unnecessary rebuilds.",
  },
  {
    id: "budget",
    question: "Do you work with different budget sizes?",
    answer:
      "Yes. We scope projects in phases, so teams can start with the highest-impact release and expand responsibly.",
  },
  {
    id: "discovery-call",
    question: "How long is the discovery call and what should we expect?",
    answer:
      "Most discovery calls take 30 to 45 minutes. We review goals, constraints, current workflows, and the right first milestone.",
  },
  {
    id: "ownership",
    question: "Who owns the code and design after delivery?",
    answer:
      "Your business retains ownership of approved deliverables at project completion, including source code and design assets.",
  },
  {
    id: "security",
    question: "How do you handle security and data privacy?",
    answer:
      "We apply secure-by-default practices, role-based access where needed, and documented handling rules for sensitive data.",
  },
  {
    id: "sla",
    question: "Do you offer ongoing support with response expectations?",
    answer:
      "Yes. Support can be structured with agreed response windows and iteration cycles based on your operational priorities.",
  },
];

const Contact = () => {
  useScrollToTop();

  const [formValues, setFormValues] = useState(INITIAL_CONTACT_FORM_VALUES);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [mountedAt] = useState(() => Date.now());

  const handleFieldChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setSubmitError(null);
    setFormValues((previousValues) => ({ ...previousValues, [name]: value }));
  };

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    if (formValues.company_website.trim().length > 0) {
      event.preventDefault();
      setSubmitError("Unable to submit this request. Please refresh and try again.");
      return;
    }

    if (Date.now() - mountedAt < SUBMISSION_MIN_DELAY_MS) {
      event.preventDefault();
      setSubmitError("Please wait a moment before submitting the form.");
      return;
    }

    const validationError = validateContactForm(formValues);
    if (validationError) {
      event.preventDefault();
      setSubmitError(validationError);
      return;
    }

    setSubmitError(null);
  };

  return (
    <div className="site-shell section-pad">
      <section className="section-shell">
        <BentoGrid className="grid gap-4 lg:grid-cols-12">
          <ContactInfoPanel />
          <ContactInquiryForm
            formValues={formValues}
            mountedAt={mountedAt}
            submitError={submitError}
            onFieldChange={handleFieldChange}
            onSubmitForm={handleFormSubmit}
          />
        </BentoGrid>
      </section>

      <ContactFaqSection faqs={contactFaqs} />
      <ContactPrepChecklist />
    </div>
  );
};

export default Contact;

