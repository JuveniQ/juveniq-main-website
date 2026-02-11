import type { ChangeEvent, FormEvent } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import BentoTile from "@/components/motion/BentoTile";
import type { ContactFormValues } from "@/lib/contact-form";
import {
  MESSAGE_MAX,
  MESSAGE_MIN,
  SUBJECT_MAX,
  SUBJECT_MIN,
} from "@/lib/contact-form";

type ContactInquiryFormProps = {
  formValues: ContactFormValues;
  mountedAt: number;
  submitError: string | null;
  onFieldChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onSubmitForm: (event: FormEvent<HTMLFormElement>) => void;
};

const ContactInquiryForm = ({
  formValues,
  mountedAt,
  submitError,
  onFieldChange,
  onSubmitForm,
}: ContactInquiryFormProps) => {
  return (
    <BentoTile itemClassName="lg:col-span-7" className="space-y-4">
      <h2 className="text-2xl text-slate-100">Project Inquiry</h2>
      <p className="copy-default text-slate-300">
        Tell us what you are building and what outcomes you need.
      </p>
      <form
        action="https://formspree.io/f/mvgrrkdq"
        method="POST"
        className="grid gap-4"
        onSubmit={onSubmitForm}
      >
        <input type="hidden" name="_subject" value="New JuveniQ Inquiry" />
        <input type="hidden" name="form_loaded_at" value={String(mountedAt)} />
        <div className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
          <Label htmlFor="company_website">Leave this field blank</Label>
          <Input
            id="company_website"
            name="company_website"
            value={formValues.company_website}
            onChange={onFieldChange}
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
              value={formValues.name}
              onChange={onFieldChange}
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
              value={formValues.email}
              onChange={onFieldChange}
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
            value={formValues.subject}
            onChange={onFieldChange}
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
            value={formValues.message}
            onChange={onFieldChange}
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
  );
};

export default ContactInquiryForm;
