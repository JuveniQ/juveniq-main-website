import { Link } from "react-router-dom";
import LegalCallout from "@/components/legal/LegalCallout";
import LegalLayout from "@/components/legal/LegalLayout";
import LegalSection from "@/components/legal/LegalSection";
import { company } from "@/lib/company";
import type { LegalNavigationItem } from "@/lib/legal";

const navigation: LegalNavigationItem[] = [
  ["introduction", "Introduction"], ["custom-projects", "Custom projects"], ["deposits", "Deposits"], ["completed-work", "Completed work"],
  ["client-cancellation", "Client cancellation"], ["juveniq-cancellation", "JuveniQ cancellation"], ["subscriptions", "Subscriptions"],
  ["trials", "Trials"], ["subscription-refunds", "Subscription refunds"], ["digital-products", "Digital products"],
  ["lifetime-access", "Lifetime & promotional access"], ["third-party-costs", "Third-party costs"], ["request", "Request a refund"],
  ["refund-method", "Refund method"], ["consumer-rights", "Consumer rights"],
].map(([id, label]) => ({ id, label }));

const RefundCancellation = () => (
  <LegalLayout title="Refund & Cancellation Policy" description="JuveniQ's policy for project cancellations, subscription cancellations, digital products and refund requests." path="/refund-cancellation-policy" navigation={navigation}>
    <LegalSection id="introduction" title="1. Introduction">
      <p>This policy explains how cancellations and refund requests are handled for custom software services, JuveniQ digital products, recurring subscriptions, licences and prepaid access where applicable.</p>
      <p>It should be read with the <Link to="/terms">Terms & Conditions</Link> and any agreement specific to the project or product.</p>
    </LegalSection>
    <LegalSection id="custom-projects" title="2. Custom software projects">
      <p>A custom project may be governed by a quotation, proposal or service agreement that records its scope, payment milestones and cancellation terms. Where that agreement addresses cancellation or refunds, it applies to the relevant project subject to applicable law.</p>
    </LegalSection>
    <LegalSection id="deposits" title="3. Deposits">
      <p>If a customer cancels before meaningful work begins, a full or partial deposit refund may be available after considering costs already incurred.</p>
      <p>Once discovery, design or development has started, a refund may be reduced by completed work, time spent, resources committed and non-refundable third-party costs. A deposit is not automatically treated as non-refundable in every circumstance.</p>
    </LegalSection>
    <LegalSection id="completed-work" title="4. Work already completed">
      <p>Work that has been completed or delivered and is properly chargeable is ordinarily not refundable, subject to the project agreement and rights available under applicable law. JuveniQ will account for completed work when assessing a cancellation.</p>
    </LegalSection>
    <LegalSection id="client-cancellation" title="5. Cancellation by the client">
      <p>A client should send a written cancellation request to <a href={`mailto:${company.email}`}>{company.email}</a>. JuveniQ will confirm the effective date and assess completed work, paid deliverables, committed third-party fees and any outstanding balance.</p>
    </LegalSection>
    <LegalSection id="juveniq-cancellation" title="6. Cancellation by JuveniQ">
      <p>JuveniQ may end or pause work because of non-payment, an unlawful project, fraudulent or abusive conduct, a material security concern, or a prolonged inability to obtain information or approvals needed from the client.</p>
      <p>Where reasonable, JuveniQ will provide notice and an opportunity to address the issue. Amounts due or refundable will be assessed fairly against work performed, costs committed and the applicable agreement.</p>
    </LegalSection>
    <LegalSection id="subscriptions" title="7. Subscription cancellation">
      <p>A customer may cancel a recurring subscription through the available product controls or by contacting JuveniQ. Cancellation stops future renewal. Access will ordinarily continue until the end of the paid billing period unless the product terms or law require a different outcome.</p>
      <p>Cancellation does not automatically refund a paid period that has already started.</p>
    </LegalSection>
    <LegalSection id="trials" title="8. Trial periods">
      <p>A free trial does not itself create a charge. Trial duration and limitations are shown by the relevant product. The user must separately choose or authorise paid access unless a particular offer clearly states another arrangement.</p>
    </LegalSection>
    <LegalSection id="subscription-refunds" title="9. Refunds for subscription payments">
      <p>A subscription refund may be appropriate for a duplicate or incorrect charge, an administrative or technical error, a payment taken after a valid cancellation because of a JuveniQ or payment-system error, or a material inability to provide the paid service.</p>
      <p>Requests are assessed using the payment record, service availability, account use, product terms and applicable consumer law.</p>
    </LegalSection>
    <LegalSection id="digital-products" title="10. Digital products and licences">
      <p>Activated digital access, downloadable items or software licences may have different refund characteristics because access can be supplied immediately. JuveniQ will consider whether access was activated or used, the nature of the issue, the offer terms and applicable statutory rights.</p>
    </LegalSection>
    <LegalSection id="lifetime-access" title="11. Lifetime and promotional access">
      <p>A lifetime or promotional offer is a one-time access arrangement subject to the limitations displayed at purchase. It does not guarantee that a product will remain unchanged or operate indefinitely. Refund requests are assessed under this policy, the offer terms and applicable law.</p>
    </LegalSection>
    <LegalSection id="third-party-costs" title="12. Third-party costs">
      <p>Domains, hosting, cloud infrastructure, licences, external APIs, messaging and payment processing may involve costs paid or committed to third parties. Non-refundable amounts already committed for a customer may be deducted where the agreement and law permit.</p>
    </LegalSection>
    <LegalSection id="request" title="13. How to request a refund">
      {/* LEGAL_REVIEW: Confirm the final operational refund-assessment workflow and internal response ownership. */}
      <p>Email <a href={`mailto:${company.email}`}>{company.email}</a> with:</p>
      <ul><li>your name and business name, if applicable;</li><li>the product or project;</li><li>the invoice or payment reference;</li><li>the payment date; and</li><li>the reason for the request.</li></ul>
      <p>JuveniQ may ask for further information needed to verify the payment and assess the request securely.</p>
    </LegalSection>
    <LegalSection id="refund-method" title="14. Refund method">
      <p>Where possible, an approved refund is returned through the original payment method. Processing time depends on the bank, payment provider and method involved. JuveniQ will communicate material issues affecting an approved refund.</p>
    </LegalSection>
    <LegalSection id="consumer-rights" title="15. Consumer rights">
      <LegalCallout title="Statutory rights remain"><p>Nothing in this policy limits a statutory consumer right or remedy that cannot legally be excluded under South African law.</p></LegalCallout>
    </LegalSection>
  </LegalLayout>
);

export default RefundCancellation;
