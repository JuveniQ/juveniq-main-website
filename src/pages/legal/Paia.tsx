import LegalCallout from "@/components/legal/LegalCallout";
import LegalLayout from "@/components/legal/LegalLayout";
import LegalSection from "@/components/legal/LegalSection";
import { company } from "@/lib/company";
import type { LegalNavigationItem } from "@/lib/legal";

const navigation: LegalNavigationItem[] = [
  ["introduction", "Introduction"], ["company-details", "Company details"], ["information-officer", "Information Officer"],
  ["paia-guide", "PAIA guide"], ["public-records", "Public records"], ["record-categories", "Record categories"],
  ["request-procedure", "Request procedure"], ["fees", "Fees"], ["availability", "Availability"],
].map(([id, label]) => ({ id, label }));

const Paia = () => (
  <LegalLayout title="PAIA Manual" description="Information about records held by JuveniQ and the process for requesting access under South Africa's Promotion of Access to Information Act." path="/paia" navigation={navigation}>
    <LegalSection id="introduction" title="1. Introduction">
      <p>The Promotion of Access to Information Act, 2 of 2000 (PAIA), gives effect to the constitutional right of access to information, subject to the grounds and procedures established by law.</p>
      <p>This page describes the kinds of records that may be held by JuveniQ and gives a practical starting point for requesting access. A request does not mean that every record must be disclosed; PAIA&apos;s requirements and permitted grounds for refusal still apply.</p>
    </LegalSection>
    <LegalSection id="company-details" title="2. Company details">
      <dl className="legal-definition-list">
        <div><dt>Private body</dt><dd>{company.legalName}</dd></div>
        <div><dt>Registration</dt><dd>{company.registrationNumber}</dd></div>
        <div><dt>Location</dt><dd>{company.location}</dd></div>
        <div><dt>Website</dt><dd><a href={company.website}>{company.websiteLabel}</a></dd></div>
        <div><dt>General contact</dt><dd><a href={`mailto:${company.email}`}>{company.email}</a></dd></div>
      </dl>
    </LegalSection>
    <LegalSection id="information-officer" title="3. Head and Information Officer">
      {/* LEGAL_REVIEW: Confirm the appointed Information Officer, registration status and required contact particulars before formal legal sign-off. */}
      <p>Formal access enquiries can currently be directed to JuveniQ through <a href={`mailto:${company.email}`}>{company.email}</a>. The responsible company representative will route the request and confirm any further statutory information required.</p>
      <p>JuveniQ does not publish a named Information Officer here until those appointment and contact details have been formally confirmed.</p>
    </LegalSection>
    <LegalSection id="paia-guide" title="4. Guide on how to use PAIA">
      <p>The Information Regulator publishes guidance, forms and supporting material for people who want to exercise rights under PAIA. The current resources can be accessed on the <a href="https://inforegulator.org.za/paia/" target="_blank" rel="noopener noreferrer">Information Regulator&apos;s official PAIA page</a>.</p>
    </LegalSection>
    <LegalSection id="public-records" title="5. Records available without a formal request">
      <p>Information already published on JuveniQ&apos;s website can be accessed without a formal PAIA request. This includes:</p>
      <ul><li>public company and contact information;</li><li>published service and product information;</li><li>public product status information; and</li><li>these legal and policy documents.</li></ul>
    </LegalSection>
    <LegalSection id="record-categories" title="6. Categories of records">
      <p>Subject to what JuveniQ actually holds, record categories may include company administration; customer and contract records; supplier records; personnel records where applicable; financial records; technology and operational records; and legal or compliance records.</p>
      <p>Listing a category does not confirm that a particular record exists or that it will be disclosed. Access is assessed under PAIA and other applicable law, including privacy and confidentiality obligations.</p>
    </LegalSection>
    <LegalSection id="request-procedure" title="7. Request procedure">
      <p>A requester should identify the record clearly, explain the form of access required, provide contact details, and explain the right they seek to exercise or protect where PAIA requires this.</p>
      <p>Send the initial request to <a href={`mailto:${company.email}`}>{company.email}</a>. JuveniQ may ask the requester to complete the prescribed form, verify identity or authority, clarify the records sought, or provide information required to process the request.</p>
      <p>Official request forms and guidance are available from the <a href="https://inforegulator.org.za/paia/" target="_blank" rel="noopener noreferrer">Information Regulator</a>.</p>
    </LegalSection>
    <LegalSection id="fees" title="8. Fees">
      <p>Any request or access fee will be determined according to PAIA and its regulations. JuveniQ will not invent or impose a fee outside that framework and will communicate an applicable fee before processing where required.</p>
    </LegalSection>
    <LegalSection id="availability" title="9. Availability and updates">
      <LegalCallout title="Public information resource"><p>This page is maintained as JuveniQ&apos;s PAIA information resource and may be updated as regulatory or company information changes.</p></LegalCallout>
      <p>The current version is available without login at <a href={`${company.website}/paia`}>{company.websiteLabel}/paia</a>.</p>
    </LegalSection>
  </LegalLayout>
);

export default Paia;
