import { Link } from "react-router-dom";
import LegalCallout from "@/components/legal/LegalCallout";
import LegalLayout from "@/components/legal/LegalLayout";
import LegalSection from "@/components/legal/LegalSection";
import { company } from "@/lib/company";
import type { LegalNavigationItem } from "@/lib/legal";

const navigation: LegalNavigationItem[] = [
  ["introduction", "Introduction"], ["scope", "Scope"], ["responsible-party", "Responsible Party & Operator"],
  ["information-collected", "Information collected"], ["product-information", "Product information"], ["purposes", "Processing purposes"],
  ["lawful-processing", "Lawful processing"], ["sharing", "Service providers"], ["payments", "Payment processing"],
  ["international-transfers", "International transfers"], ["retention", "Retention"], ["security", "Security"], ["rights", "Your rights"],
  ["cookies", "Cookies"], ["marketing", "Marketing"], ["incidents", "Security incidents"], ["children", "Children"],
  ["third-parties", "Third-party links"], ["changes", "Policy changes"], ["contact", "Privacy requests"], ["regulator", "Information Regulator"],
].map(([id, label]) => ({ id, label }));

const Privacy = () => (
  <LegalLayout title="Privacy & POPIA Policy" description="How JuveniQ collects, uses, protects and manages personal information in accordance with its South African privacy obligations." path="/privacy" navigation={navigation}>
    <LegalSection id="introduction" title="1. Introduction">
      <p>{company.legalName} is a South African software company. This policy explains, in plain language, how JuveniQ may handle personal information when people visit its website, enquire about services, use a JuveniQ product or work with the company.</p>
    </LegalSection>
    <LegalSection id="scope" title="2. Scope">
      <p>This policy may apply to {company.websiteLabel}, JuveniQ software products, customer enquiries, project engagements, account registrations, billing and subscriptions, and support interactions. A specific product or client agreement may provide additional information for that context.</p>
    </LegalSection>
    <LegalSection id="responsible-party" title="3. Responsible Party and Operator context">
      <p>JuveniQ may act as a <strong>Responsible Party</strong> when it determines why and how personal information is processed—for example, when handling a direct enquiry or operating its own product.</p>
      <p>JuveniQ may act as an <strong>Operator</strong> when it processes information on a client&apos;s instructions as part of a software service. In that situation, the client ordinarily remains responsible for the relevant processing decisions.</p>
    </LegalSection>
    <LegalSection id="information-collected" title="4. Information JuveniQ may collect">
      <p>The information depends on the interaction and may include:</p>
      <ul>
        <li><strong>Identity and contact information:</strong> name, email address and telephone or WhatsApp number.</li>
        <li><strong>Business information:</strong> organisation name, role and project requirements.</li>
        <li><strong>Account information:</strong> authentication identifiers and account status.</li>
        <li><strong>Technical information:</strong> device or browser information, IP address where applicable, application logs and security events.</li>
        <li><strong>Transaction information:</strong> invoice or payment references and subscription information.</li>
      </ul>
      <p>Where a third-party payment processor handles card information, JuveniQ generally does not need to store full card details.</p>
    </LegalSection>
    <LegalSection id="product-information" title="5. Information from JuveniQ products">
      <p>Individual products may process operational information needed to provide their functions. The specific categories depend on the product and how the customer uses it. Product interfaces, agreements or additional notices may provide more detail.</p>
    </LegalSection>
    <LegalSection id="purposes" title="6. Why information is processed">
      <p>JuveniQ may process information to provide requested services; create and manage accounts; secure systems; process payments and subscriptions; communicate with customers; provide support; deliver software projects; improve products; meet legal obligations; and detect or prevent fraud and misuse.</p>
    </LegalSection>
    <LegalSection id="lawful-processing" title="7. Lawful processing">
      <p>Personal information is processed where an appropriate justification exists under applicable law. Depending on the circumstances, this may include performing an agreement, meeting a legal obligation, pursuing a legitimate operational purpose, protecting a lawful interest or acting with consent.</p>
    </LegalSection>
    <LegalSection id="sharing" title="8. Sharing with service providers">
      <p>JuveniQ may share limited information with service providers that support cloud infrastructure, payments, authentication, email or messaging, technical operations, or professional advice. Information is shared only where reasonably necessary for the relevant service or obligation.</p>
      <p>JuveniQ does not sell personal information.</p>
    </LegalSection>
    <LegalSection id="payments" title="9. Payment processing">
      <p>Third-party payment processors may process transaction and payment information under their own terms and privacy policies. JuveniQ may receive payment confirmations, references, status and limited customer details needed for reconciliation and support.</p>
    </LegalSection>
    <LegalSection id="international-transfers" title="10. Cross-border processing">
      <p>Some infrastructure or service providers may process or store information outside South Africa. Where personal information is transferred internationally, JuveniQ takes reasonable steps to ensure the transfer is handled in accordance with applicable legal requirements.</p>
    </LegalSection>
    <LegalSection id="retention" title="11. Retention">
      <p>Information is retained only as long as reasonably necessary for service delivery, contractual purposes, security, record keeping and legal obligations. Retention periods vary according to the type of information and the reason it is held.</p>
    </LegalSection>
    <LegalSection id="security" title="12. Security">
      <p>JuveniQ aims to use reasonable technical and organisational safeguards appropriate to the information and service. These may include access controls, authentication, least-privilege access, encryption where appropriate, monitoring, backups and secure development practices.</p>
      <p>No internet-connected system can be guaranteed completely secure. Customers should also protect their credentials and report suspected compromise promptly.</p>
    </LegalSection>
    <LegalSection id="rights" title="13. Your rights">
      <p>Subject to POPIA and other applicable law, a person may have rights to request access or correction, seek deletion where applicable, object to certain processing, request restriction in appropriate circumstances, withdraw consent where processing depends on consent, and lodge a complaint.</p>
      <p>A request may be limited where another law requires retention or where a lawful exception applies. Access to records may also be handled under the <Link to="/paia">PAIA Manual</Link>.</p>
    </LegalSection>
    <LegalSection id="cookies" title="14. Cookies and website technologies">
      <p>The current JuveniQ company website does not use advertising or analytics trackers. Essential browser and hosting functionality may still be used to deliver the site securely. Individual JuveniQ products may use essential storage or similar technologies for sign-in, preferences or core operation and should explain material product-specific use where required.</p>
    </LegalSection>
    <LegalSection id="marketing" title="15. Marketing communications">
      <p>If JuveniQ sends optional marketing communications, recipients may opt out using the method provided in the message or by contacting JuveniQ. Service, security and transactional messages may still be sent where necessary.</p>
    </LegalSection>
    <LegalSection id="incidents" title="16. Security incidents">
      <p>JuveniQ will assess suspected compromises, take reasonable containment and remediation steps, and make notifications to affected parties or authorities where applicable law requires them.</p>
    </LegalSection>
    <LegalSection id="children" title="17. Children&apos;s information">
      <p>JuveniQ&apos;s general services are not intentionally designed to collect children&apos;s personal information. If a specific service appropriately involves a child, the information must be handled with the authority and safeguards required by law and the service context.</p>
    </LegalSection>
    <LegalSection id="third-parties" title="18. Third-party links">
      <p>JuveniQ websites and products may link to third-party sites. Their privacy practices are controlled by those third parties, and visitors should review the relevant notices before providing information.</p>
    </LegalSection>
    <LegalSection id="changes" title="19. Policy changes">
      <p>This policy may be updated as JuveniQ&apos;s products, practices or legal obligations change. The current effective date appears at the top of the page.</p>
    </LegalSection>
    <LegalSection id="contact" title="20. Contact and privacy requests">
      {/* LEGAL_REVIEW: Confirm Information Officer details and a dedicated privacy contact before final legal sign-off. */}
      <p>Privacy questions and requests can be sent to <a href={`mailto:${company.email}`}>{company.email}</a>. Please describe the request and provide enough information for JuveniQ to identify the relevant interaction securely.</p>
    </LegalSection>
    <LegalSection id="regulator" title="21. Information Regulator">
      <LegalCallout title="Independent complaints channel">
        <p>A person may lodge a complaint with South Africa&apos;s Information Regulator if they believe their personal information has been handled unlawfully. Official guidance and complaint services are available from the <a href="https://inforegulator.org.za/" target="_blank" rel="noopener noreferrer">Information Regulator website</a>.</p>
      </LegalCallout>
    </LegalSection>
  </LegalLayout>
);

export default Privacy;
