import { FormEvent, useState } from "react";
import { CheckCircle2, Loader2, Mail, MapPin, Phone, Send } from "lucide-react";
import PageMeta from "@/components/PageMeta";
import { Container, Eyebrow, PageHeader } from "@/components/SiteElements";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { company } from "@/lib/company";

type FormStatus = "idle" | "submitting" | "success" | "error";

const initialForm = {
  name: "",
  company: "",
  email: "",
  phone: "",
  projectType: "",
  timeline: "",
  message: "",
};

const Contact = () => {
  const [formData, setFormData] = useState(initialForm);
  const [status, setStatus] = useState<FormStatus>("idle");

  const updateField = (name: keyof typeof initialForm, value: string) => {
    setFormData((current) => ({ ...current, [name]: value }));
    if (status === "error") setStatus("idle");
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("https://formspree.io/f/mvgrrkdq", {
        method: "POST",
        body: new FormData(event.currentTarget),
        headers: { Accept: "application/json" },
      });

      if (!response.ok) throw new Error("Submission failed");
      setStatus("success");
      setFormData(initialForm);
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <PageMeta
        title="Discuss a project"
        description="Tell JuveniQ about the software problem, project or existing system your organisation needs help with."
        path="/contact"
      />
      <PageHeader eyebrow="Project enquiries" title="Tell us what you are trying to improve.">
        Share the business problem, the people affected and what a useful outcome would look like. You do not need a complete technical specification.
      </PageHeader>

      <section className="section-pad pt-0">
        <Container className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_21rem] lg:gap-20">
          <div>
            {status === "success" ? (
              <div className="border border-border bg-muted/55 p-8 sm:p-12" role="status">
                <CheckCircle2 className="h-8 w-8 text-emerald-700" aria-hidden="true" />
                <h2 className="mt-6 text-2xl font-semibold">Thank you. Your enquiry has been sent.</h2>
                <p className="mt-3 max-w-xl leading-7 text-muted-foreground">
                  We have received your project details and will respond using the contact information you provided.
                </p>
                <Button className="mt-7" variant="outline" onClick={() => setStatus("idle")}>
                  Send another enquiry
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-7">
                <input type="hidden" name="_subject" value="New JuveniQ project enquiry" />
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="form-field">
                    <Label htmlFor="name">Name *</Label>
                    <Input id="name" name="name" autoComplete="name" required value={formData.name} onChange={(e) => updateField("name", e.target.value)} />
                  </div>
                  <div className="form-field">
                    <Label htmlFor="company">Company / organisation</Label>
                    <Input id="company" name="company" autoComplete="organization" value={formData.company} onChange={(e) => updateField("company", e.target.value)} />
                  </div>
                  <div className="form-field">
                    <Label htmlFor="email">Work email *</Label>
                    <Input id="email" name="email" type="email" autoComplete="email" required value={formData.email} onChange={(e) => updateField("email", e.target.value)} />
                  </div>
                  <div className="form-field">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" name="phone" type="tel" autoComplete="tel" value={formData.phone} onChange={(e) => updateField("phone", e.target.value)} />
                  </div>
                  <div className="form-field">
                    <Label htmlFor="projectType">Project type *</Label>
                    <select id="projectType" name="projectType" required value={formData.projectType} onChange={(e) => updateField("projectType", e.target.value)}>
                      <option value="">Select a project type</option>
                      <option>Web Platform / Application</option>
                      <option>Mobile Application</option>
                      <option>Business System</option>
                      <option>Systems Integration / Automation</option>
                      <option>Software Modernisation / Support</option>
                      <option>Not Sure Yet</option>
                    </select>
                  </div>
                </div>
                <p className="border-l-2 border-primary/35 pl-4 text-sm leading-6 text-muted-foreground">
                  Projects are scoped individually. Once we understand the requirements and delivery expectations, we provide a clear scope, timeline and commercial proposal.
                </p>
                <div className="form-field">
                  <Label htmlFor="timeline">Desired timeline</Label>
                  <Input id="timeline" name="timeline" placeholder="For example: within 3 months" value={formData.timeline} onChange={(e) => updateField("timeline", e.target.value)} />
                </div>
                <div className="form-field">
                  <Label htmlFor="message">Project or problem description *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={7}
                    placeholder="What is happening today, who uses the process and what would you like to improve?"
                    value={formData.message}
                    onChange={(e) => updateField("message", e.target.value)}
                  />
                </div>
                {status === "error" && (
                  <p className="rounded-md border border-red-200 bg-red-50 p-4 text-sm text-red-800" role="alert">
                    We could not send your enquiry. Your information is still here—please try again or email {company.email}.
                  </p>
                )}
                <Button type="submit" size="lg" disabled={status === "submitting"}>
                  {status === "submitting" ? (
                    <><Loader2 className="animate-spin" aria-hidden="true" /> Sending enquiry</>
                  ) : (
                    <>Send enquiry <Send aria-hidden="true" /></>
                  )}
                </Button>
              </form>
            )}
          </div>

          <aside className="border-t border-border pt-8 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            <Eyebrow>Contact details</Eyebrow>
            <div className="mt-6 space-y-6">
              <a className="contact-line" href={`mailto:${company.email}`}>
                <Mail aria-hidden="true" /><span><small>Email</small>{company.email}</span>
              </a>
              <a className="contact-line" href={company.phones[0].href}>
                <Phone aria-hidden="true" /><span><small>Phone</small>{company.phones[0].label}</span>
              </a>
              <a className="contact-line" href={company.phones[1].href}>
                <Phone aria-hidden="true" /><span><small>Alternative phone</small>{company.phones[1].label}</span>
              </a>
              <div className="contact-line">
                <MapPin aria-hidden="true" /><span><small>Location</small>{company.location}</span>
              </div>
            </div>
            <div className="mt-10 border-t border-border pt-7 text-sm leading-6 text-muted-foreground">
              <p>{company.legalName}</p>
              <p>Registration No. {company.registrationNumber}</p>
            </div>
          </aside>
        </Container>
      </section>
    </>
  );
};

export default Contact;
