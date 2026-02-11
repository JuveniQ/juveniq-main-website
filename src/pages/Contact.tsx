import { type FormEvent, useEffect, useState } from "react";
import { Mail, MapPin, Phone, Send, Timer } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import BentoGrid from "@/components/motion/BentoGrid";
import BentoTile from "@/components/motion/BentoTile";
import ScanlineHeading from "@/components/motion/ScanlineHeading";
import { companyProfile } from "@/lib/company";

const faqs = [
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

const NAME_PATTERN = /^[A-Za-z]+(?:[A-Za-z .,'-]*[A-Za-z])?$/;
const SUBJECT_MIN = 6;
const SUBJECT_MAX = 120;
const MESSAGE_MIN = 20;
const MESSAGE_MAX = 2000;

const Contact = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    company_website: "",
  });
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [mountedAt] = useState(() => Date.now());

  const onChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setSubmitError(null);
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!NAME_PATTERN.test(form.name.trim())) {
      return "Please enter a valid full name.";
    }
    const subjectLength = form.subject.trim().length;
    if (subjectLength < SUBJECT_MIN || subjectLength > SUBJECT_MAX) {
      return `Project type should be ${SUBJECT_MIN}-${SUBJECT_MAX} characters.`;
    }
    const messageLength = form.message.trim().length;
    if (messageLength < MESSAGE_MIN || messageLength > MESSAGE_MAX) {
      return `Project brief should be ${MESSAGE_MIN}-${MESSAGE_MAX} characters.`;
    }
    return null;
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    if (form.company_website.trim().length > 0) {
      event.preventDefault();
      setSubmitError("Unable to submit this request. Please refresh and try again.");
      return;
    }

    if (Date.now() - mountedAt < 2500) {
      event.preventDefault();
      setSubmitError("Please wait a moment before submitting the form.");
      return;
    }

    const validationError = validateForm();
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
          <BentoTile itemClassName="lg:col-span-5" className="space-y-4">
            <p className="eyebrow">Contact</p>
            <ScanlineHeading as="h1" className="title-lg max-w-[18ch] text-slate-100">
              Book a strategy call and define the right technical path.
            </ScanlineHeading>
            <p className="copy-default text-slate-300">
              Share your goals, constraints, and timeline. We will respond with a practical plan.
            </p>

            <div className="grid gap-2 text-sm text-slate-200">
              <a
                href={`mailto:${companyProfile.supportEmail}`}
                className="ring-cyan flex items-center gap-2 rounded-xl border border-white/20 bg-slate-800/75 p-3 hover:text-cyan-300"
              >
                <Mail className="h-4 w-4 text-cyan-300" /> {companyProfile.supportEmail}
              </a>
              {companyProfile.phoneNumbers.map((item) => (
                <a
                  key={item.tel}
                  href={`tel:${item.tel}`}
                  className="ring-cyan flex items-center gap-2 rounded-xl border border-white/20 bg-slate-800/75 p-3 hover:text-cyan-300"
                >
                  <Phone className="h-4 w-4 text-cyan-300" /> {item.label}
                </a>
              ))}
              <p className="flex items-center gap-2 rounded-xl border border-white/20 bg-slate-800/75 p-3">
                <MapPin className="h-4 w-4 text-cyan-300" /> {companyProfile.registeredAddress}
              </p>
              <p className="flex items-center gap-2 rounded-xl border border-white/20 bg-slate-800/75 p-3">
                <Timer className="h-4 w-4 text-cyan-300" /> Monday to Friday, 08:00 to 18:00
              </p>
            </div>
          </BentoTile>

          <BentoTile itemClassName="lg:col-span-7" className="space-y-4">
            <h2 className="text-2xl text-slate-100">Project Inquiry</h2>
            <p className="copy-default text-slate-300">
              Tell us what you are building and what outcomes you need.
            </p>
            <form
              action="https://formspree.io/f/mvgrrkdq"
              method="POST"
              className="grid gap-4"
              onSubmit={onSubmit}
            >
              <input type="hidden" name="_subject" value="New JuveniQ Inquiry" />
              <input type="hidden" name="form_loaded_at" value={String(mountedAt)} />
              <div className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
                <Label htmlFor="company_website">Leave this field blank</Label>
                <Input
                  id="company_website"
                  name="company_website"
                  value={form.company_website}
                  onChange={onChange}
                  autoComplete="off"
                  tabIndex={-1}
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Label htmlFor="name" className="meta-chip">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    required
                    value={form.name}
                    onChange={onChange}
                    pattern="^[A-Za-z]+(?:[A-Za-z .,'-]*[A-Za-z])?$"
                    minLength={2}
                    maxLength={80}
                    className="mt-1 ring-cyan ring-led border-white/20 bg-slate-800/75 text-slate-100"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="meta-chip">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={onChange}
                    className="mt-1 ring-cyan ring-led border-white/20 bg-slate-800/75 text-slate-100"
                    placeholder="you@company.com"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="subject" className="meta-chip">
                  Project Type
                </Label>
                <Input
                  id="subject"
                  name="subject"
                  required
                  value={form.subject}
                  onChange={onChange}
                  minLength={SUBJECT_MIN}
                  maxLength={SUBJECT_MAX}
                  className="mt-1 ring-cyan ring-led border-white/20 bg-slate-800/75 text-slate-100"
                  placeholder="Web app, mobile app, enterprise workflow, AI automation"
                />
              </div>
              <div>
                <Label htmlFor="message" className="meta-chip">
                  Project Brief
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={form.message}
                  onChange={onChange}
                  minLength={MESSAGE_MIN}
                  maxLength={MESSAGE_MAX}
                  className="mt-1 min-h-[130px] ring-cyan ring-led border-white/20 bg-slate-800/75 text-slate-100"
                  placeholder="Share goals, timeline, constraints, and priorities."
                />
              </div>
              {submitError ? (
                <p role="alert" className="rounded-xl border border-red-400/40 bg-red-500/10 px-3 py-2 text-sm text-red-200">
                  {submitError}
                </p>
              ) : null}
              <Button type="submit" className="btn-cyan ring-cyan ring-led w-full">
                Send Inquiry
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </BentoTile>
        </BentoGrid>
      </section>

      <section className="section-shell section-pad">
        <BentoTile className="space-y-3">
          <p className="eyebrow">FAQ</p>
          <h2 className="title-lg text-slate-100">Quick answers before we start.</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id} className="border-b border-white/15">
                <AccordionTrigger className="text-left font-semibold text-slate-100 hover:text-cyan-300">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="copy-default text-slate-300">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </BentoTile>
      </section>

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
    </div>
  );
};

export default Contact;

