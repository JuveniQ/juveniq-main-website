import { Link } from "react-router-dom";
import LegalCallout from "@/components/legal/LegalCallout";
import LegalLayout from "@/components/legal/LegalLayout";
import LegalSection from "@/components/legal/LegalSection";
import { company } from "@/lib/company";
import type { LegalNavigationItem } from "@/lib/legal";

const navigation: LegalNavigationItem[] = [
  ["about", "About JuveniQ"], ["acceptance", "Acceptance"], ["services", "Services"], ["projects", "Project engagements"],
  ["quotes", "Quotes & proposals"], ["payments", "Payments"], ["subscriptions", "Subscriptions"], ["trials", "Trials"],
  ["accounts", "Accounts & security"], ["acceptable-use", "Acceptable use"], ["intellectual-property", "Intellectual property"],
  ["third-party-services", "Third-party services"], ["availability", "Availability"], ["privacy", "Data & privacy"],
  ["refunds", "Cancellations & refunds"], ["termination", "Suspension & termination"], ["warranties", "Warranties"],
  ["liability", "Liability"], ["consumer-rights", "Consumer rights"], ["governing-law", "Governing law"],
  ["changes", "Changes"], ["contact", "Contact"],
].map(([id, label]) => ({ id, label }));

const Terms = () => (
  <LegalLayout title="Terms & Conditions" description="Terms governing the use of JuveniQ websites, software products, subscriptions and technology services." path="/terms" navigation={navigation}>
    <LegalSection id="about" title="1. About JuveniQ">
      <p>These terms are issued by {company.legalName}, registration number {company.registrationNumber}, a South African software company based in {company.location}. The company website is <a href={company.website}>{company.websiteLabel}</a>.</p>
    </LegalSection>
    <LegalSection id="acceptance" title="2. Acceptance of terms">
      <p>By accessing or using a JuveniQ website, product or service, you agree to the terms that apply to that use. An engagement may also be governed by a quotation, proposal, service agreement, subscription agreement or other project-specific agreement.</p>
      <p>Where a separately agreed document addresses a matter differently, that specific agreement may govern the relevant engagement to the extent of the difference.</p>
    </LegalSection>
    <LegalSection id="services" title="3. Services">
      <p>JuveniQ provides custom software development, web and mobile applications, internal business systems, systems integration, automation, modernisation and software support. JuveniQ also develops and operates its own software products.</p>
      <p>The features and conditions of a particular service are those communicated for that service or recorded in the applicable agreement.</p>
    </LegalSection>
    <LegalSection id="projects" title="4. Project engagements">
      <p>Custom projects are delivered against an agreed scope, deliverables and estimated timeline. Customers must provide reasonably required information, content, access, decisions and approvals in time for delivery.</p>
      <p>A material change to requirements or assumptions may require a change request and may affect price, effort and delivery time. JuveniQ will communicate material effects before proceeding where practical.</p>
    </LegalSection>
    <LegalSection id="quotes" title="5. Quotes and proposals">
      <p>Custom development is ordinarily priced through a project-specific quotation or proposal after the requirements are understood. A quotation may specify its validity period, assumptions, exclusions, payment schedule and acceptance process.</p>
    </LegalSection>
    <LegalSection id="payments" title="6. Payments">
      <p>Invoices, deposits, payment milestones and due dates are set out in the relevant quotation, agreement, invoice or product checkout. JuveniQ may use third-party payment providers to collect authorised payments.</p>
      <p>Customers must ensure that payment information is accurate and that they are authorised to use the selected method. Failed or overdue payments may delay delivery or limit access, subject to the applicable agreement and law.</p>
    </LegalSection>
    <LegalSection id="subscriptions" title="7. Subscriptions">
      <p>Some JuveniQ products may offer recurring or prepaid access, including weekly, monthly, annual or lifetime arrangements. This does not mean every product offers every interval. The product or checkout will show the billing period, renewal basis and included access before purchase.</p>
    </LegalSection>
    <LegalSection id="trials" title="8. Trials">
      <p>A product may offer a trial for the duration shown in that product. Trial access can expire or be limited. A free trial does not itself create a charge; paid access requires the customer&apos;s action or authorisation unless the relevant offer clearly states otherwise.</p>
    </LegalSection>
    <LegalSection id="accounts" title="9. Accounts and security">
      <p>Customers must provide accurate account information, protect their credentials and restrict access to authorised users. Suspected unauthorised access should be reported promptly to JuveniQ. Customers remain responsible for activity performed through their accounts where permitted by law.</p>
    </LegalSection>
    <LegalSection id="acceptable-use" title="10. Acceptable use">
      <p>You may not use JuveniQ services to commit unlawful acts, fraud or abuse; harm others; introduce malicious code; disrupt systems; gain unauthorised access; infringe third-party rights; or evade licences and access controls.</p>
      <p>Reverse engineering is prohibited only to the extent that the restriction is lawful and not overridden by applicable rights or an agreed licence.</p>
    </LegalSection>
    <LegalSection id="intellectual-property" title="11. Intellectual property">
      <h3>JuveniQ-owned products</h3><p>JuveniQ retains the intellectual property rights it holds in its own products, product branding, documentation and related materials.</p>
      <h3>Pre-existing JuveniQ materials</h3><p>Reusable libraries, frameworks, tools, methods and components developed independently of a customer project remain JuveniQ property unless agreed otherwise.</p>
      <h3>Custom client work</h3><p>Ownership and licensing of custom deliverables are defined in the applicable project agreement. These general terms do not claim that JuveniQ owns every custom project indefinitely.</p>
    </LegalSection>
    <LegalSection id="third-party-services" title="12. Third-party services">
      <p>Products may depend on hosting, cloud infrastructure, payment processing, authentication, communications or external APIs. Those providers may apply their own terms and privacy practices, and their availability can affect product functionality.</p>
    </LegalSection>
    <LegalSection id="availability" title="13. Availability and maintenance">
      <p>JuveniQ uses reasonable efforts to operate and support its services, but does not promise uninterrupted availability. Maintenance, security work, third-party incidents and technical faults may cause disruption. Offline-capable products may continue to provide some functions while synchronisation or online services are unavailable.</p>
    </LegalSection>
    <LegalSection id="privacy" title="14. Data and privacy">
      <p>How JuveniQ handles personal information is explained in the <Link to="/privacy">Privacy & POPIA Policy</Link>. Product-specific or client processing arrangements may provide additional detail.</p>
    </LegalSection>
    <LegalSection id="refunds" title="15. Cancellation and refunds">
      <p>Cancellation and refund principles are explained in the <Link to="/refund-cancellation-policy">Refund & Cancellation Policy</Link>. Project-specific commercial terms may also apply.</p>
    </LegalSection>
    <LegalSection id="termination" title="16. Suspension and termination">
      <p>JuveniQ may suspend or terminate access where reasonably necessary because of serious terms violations, non-payment, fraud, unlawful or abusive use, or a material security threat. Where appropriate and practical, notice and an opportunity to address the issue may be provided.</p>
    </LegalSection>
    <LegalSection id="warranties" title="17. Disclaimers and warranties">
      <p>Services are provided with the care and commitments stated in the applicable agreement and required by law. Software can contain defects or depend on factors outside JuveniQ&apos;s control. No wording in these terms excludes a warranty or remedy that cannot lawfully be excluded.</p>
    </LegalSection>
    <LegalSection id="liability" title="18. Limitation of liability">
      {/* LEGAL_REVIEW: Confirm final limitation-of-liability wording before formal legal sign-off. */}
      <p>To the extent permitted by applicable law, each party&apos;s liability should be proportionate to the service and circumstances giving rise to the claim. Any project-specific limits, exclusions or remedies will be set out in the relevant agreement.</p>
      <p>Nothing here limits liability where doing so would be unlawful, including liability arising from conduct that applicable law does not allow a party to exclude.</p>
    </LegalSection>
    <LegalSection id="consumer-rights" title="19. South African consumer rights">
      <LegalCallout title="Rights preserved"><p>Nothing in these terms is intended to exclude or restrict a right or remedy that cannot lawfully be excluded under applicable South African law.</p></LegalCallout>
    </LegalSection>
    <LegalSection id="governing-law" title="20. Governing law">
      <p>These terms are governed by the laws of South Africa. This section does not remove any right to approach a court, regulator or dispute-resolution body where the law permits it.</p>
    </LegalSection>
    <LegalSection id="changes" title="21. Changes to these terms">
      <p>JuveniQ may update these terms as products, practices or legal requirements change. The current version and its effective date will be published on this page. Material changes may also be communicated through an appropriate service channel.</p>
    </LegalSection>
    <LegalSection id="contact" title="22. Contact">
      <p>Questions about these terms can be sent to <a href={`mailto:${company.email}`}>{company.email}</a>.</p>
      <p>{company.legalName}<br />Registration No. {company.registrationNumber}<br />{company.location}</p>
    </LegalSection>
  </LegalLayout>
);

export default Terms;
