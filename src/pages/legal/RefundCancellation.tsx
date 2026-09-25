import { Link } from "react-router-dom";
import LegalCallout from "@/components/legal/LegalCallout";
import LegalLayout from "@/components/legal/LegalLayout";
import LegalSection from "@/components/legal/LegalSection";
import { company } from "@/lib/company";
import type { LegalNavigationItem } from "@/lib/legal";

const navigation: LegalNavigationItem[] = [
  ["summary", "Summary"], ["introduction", "Introduction"], ["custom-projects", "Custom projects"], ["deposits", "Deposits"],
  ["completed-work", "Completed work"], ["client-cancellation", "Client cancellation"], ["juveniq-cancellation", "JuveniQ cancellation"],
  ["fixed-term", "Fixed-term agreements"], ["electronic-cooling-off", "Electronic transactions"], ["subscriptions", "Subscriptions"],
  ["trials", "Trials"], ["subscription-refunds", "Subscription refunds"], ["payment-errors", "Payment errors"],
  ["digital-products", "Digital products"], ["lifetime-access", "Lifetime & promotional access"], ["third-party-costs", "Third-party costs"],
  ["request", "Request a refund"], ["assessment", "Assessment process"], ["refund-method", "Refund method"],
  ["payment-disputes", "Payment disputes"], ["consumer-rights", "Consumer rights"],
].map(([id, label]) => ({ id, label }));

const RefundCancellation = () => (
  <LegalLayout
    title="Refund & Cancellation Policy"
    description="JuveniQ's policy for project cancellations, subscription cancellations, digital products, payment errors and refund requests."
    path="/refund-cancellation-policy"
    navigation={navigation}
  >
    <LegalSection id="summary" title="1. Summary">
      <LegalCallout title="At a glance">
        <ul>
          <li>Recurring subscriptions can be cancelled to stop future renewal.</li>
          <li>Custom-project refunds depend on work already performed, agreed milestones and costs reasonably committed.</li>
          <li>Duplicate, incorrect or post-cancellation charges will be investigated and corrected where verified.</li>
          <li>Statutory cancellation, cooling-off and consumer rights remain available where South African law says they apply.</li>
        </ul>
      </LegalCallout>
    </LegalSection>

    <LegalSection id="introduction" title="2. Introduction">
      <p>
        This policy explains how JuveniQ handles cancellations and refund requests for custom software Services, JuveniQ digital Products,
        recurring Subscriptions, licences and prepaid access where applicable.
      </p>
      <p>
        It should be read with the <Link to="/terms">Terms & Conditions</Link> and any agreement, quotation, Product terms or checkout
        information specific to the relevant transaction. More specific agreed terms may govern a particular Project or Product, subject to
        rights that cannot lawfully be excluded.
      </p>
    </LegalSection>

    <LegalSection id="custom-projects" title="3. Custom software projects">
      <p>
        A custom Project may be governed by a quotation, proposal or service agreement recording scope, payment milestones, deliverables,
        third-party costs and cancellation terms. Where that agreement addresses cancellation or refunds, it applies to the relevant Project
        subject to applicable law.
      </p>
      <p>
        Cancellation does not automatically erase charges for work properly performed before the effective cancellation date.
      </p>
    </LegalSection>

    <LegalSection id="deposits" title="4. Deposits">
      <p>
        If a Customer cancels before meaningful work begins, a full or partial deposit refund may be available after considering costs already
        incurred or resources reasonably committed to the engagement.
      </p>
      <p>
        Once discovery, design, engineering, configuration or other substantive work has started, a refund may be reduced by completed work,
        time spent, reserved capacity, resources committed and non-refundable third-party costs. A deposit is not automatically treated as
        non-refundable in every circumstance.
      </p>
      <p>
        Where applicable consumer law gives a Customer a right to cancel an advance booking, order or Service, JuveniQ will not impose an
        unreasonable cancellation charge and will consider the circumstances required by law.
      </p>
    </LegalSection>

    <LegalSection id="completed-work" title="5. Work already completed">
      <p>
        Work that has been completed, delivered or reached an agreed milestone and is properly chargeable is ordinarily not refundable,
        subject to the Project agreement and rights available under applicable law. JuveniQ will account for completed work when assessing a
        cancellation rather than treating the entire Project price as automatically earned.
      </p>
    </LegalSection>

    <LegalSection id="client-cancellation" title="6. Cancellation by the client">
      <p>
        A client should send a written cancellation request to <a href={`mailto:${company.email}`}>{company.email}</a> or use another
        cancellation channel specified in the applicable agreement. The request should identify the Project and the requested cancellation date.
      </p>
      <p>
        JuveniQ will assess completed work, approved milestones, paid deliverables, reserved development capacity, committed third-party fees,
        notice provided and any outstanding balance. Where reasonably possible, JuveniQ will provide completed and paid-for deliverables that
        are due to the client under the applicable agreement.
      </p>
    </LegalSection>

    <LegalSection id="juveniq-cancellation" title="7. Cancellation by JuveniQ">
      <p>
        JuveniQ may end or pause work because of material non-payment, an unlawful Project, fraudulent or abusive conduct, a serious security
        concern, repeated material breach, or a prolonged inability to obtain information, access or approvals necessary to continue delivery.
      </p>
      <p>
        Where reasonable, JuveniQ will provide notice and an opportunity to address the issue. Amounts due or refundable will be assessed
        fairly against work performed, costs reasonably committed and the applicable agreement. Immediate action may be necessary where delay
        would materially increase legal, fraud or security risk.
      </p>
    </LegalSection>

    <LegalSection id="fixed-term" title="8. Fixed-term consumer agreements">
      <p>
        If a JuveniQ Subscription or Service arrangement qualifies as a fixed-term consumer agreement to which section 14 of the Consumer
        Protection Act applies, the consumer retains the cancellation rights provided by that section, including any applicable right to cancel
        on the notice prescribed by law and subject only to a reasonable cancellation charge where legally permitted.
      </p>
      <p>
        Section 14 does not apply to every agreement and does not apply in the same way to transactions between juristic persons. The specific
        customer type and agreement therefore matter.
      </p>
    </LegalSection>

    <LegalSection id="electronic-cooling-off" title="9. Electronic transactions and cooling-off rights">
      <p>
        Certain electronic consumer transactions may carry statutory cooling-off or cancellation rights under the Electronic Communications
        and Transactions Act. Those rights apply only where the Act says they apply and are subject to statutory exclusions, including exclusions
        that may be relevant to customised goods or Services and Services begun with the consumer&apos;s consent during an applicable cooling-off period.
      </p>
      <p>
        Nothing in this policy overrides a cooling-off, cancellation or refund right granted by applicable law.
      </p>
    </LegalSection>

    <LegalSection id="subscriptions" title="10. Subscription cancellation">
      <p>
        A Customer may cancel a recurring Subscription through available Product controls or by contacting JuveniQ. A cancellation becomes
        effective for renewal purposes once it has been successfully recorded by JuveniQ or the applicable payment system.
      </p>
      <p>
        Cancellation stops future renewal. Unless the applicable Product terms or law require a different outcome, access ordinarily continues
        until the end of the already-paid billing period. Cancellation does not automatically create a refund for a paid period that has already started.
      </p>
      <p>
        Customers should retain any cancellation confirmation, email or reference provided in case a later billing discrepancy needs to be investigated.
      </p>
    </LegalSection>

    <LegalSection id="trials" title="11. Trial periods">
      <p>
        A free trial does not itself create a charge. Trial duration and limitations are shown by the relevant Product. The User must separately
        choose or authorise paid access unless a particular offer clearly states another arrangement.
      </p>
      <p>
        If a Product is configured to convert a trial into paid access automatically, that renewal basis must be communicated before the Customer
        authorises the arrangement and remains subject to applicable law.
      </p>
    </LegalSection>

    <LegalSection id="subscription-refunds" title="12. Refunds for subscription payments">
      <p>A Subscription refund may be appropriate where JuveniQ verifies:</p>
      <ul>
        <li>a duplicate charge;</li>
        <li>an incorrect charge or amount;</li>
        <li>a material administrative or technical billing error;</li>
        <li>a payment taken after an effective cancellation because of a JuveniQ or payment-system error; or</li>
        <li>a material inability attributable to JuveniQ to provide the paid Service for the relevant period.</li>
      </ul>
      <p>
        Requests are assessed using the payment record, Product availability, account activity where relevant, the applicable Product terms and
        consumer law. A refund is not ordinarily due merely because a Customer chooses to stop using a Product during an already-paid period,
        unless law or the applicable Product terms provide otherwise.
      </p>
    </LegalSection>

    <LegalSection id="payment-errors" title="13. Duplicate, incorrect and unauthorised charges">
      <p>
        If a Customer believes a payment was duplicated, processed for the wrong amount, collected after an effective cancellation or otherwise
        processed in error, the Customer should provide the transaction or payment reference so JuveniQ can reconcile the payment with its records
        and payment provider.
      </p>
      <p>
        Verified JuveniQ or payment-system errors will be corrected through an appropriate refund, reversal or billing adjustment. A suspected
        unauthorised transaction may also require the Customer to contact their bank or payment provider promptly.
      </p>
    </LegalSection>

    <LegalSection id="digital-products" title="14. Digital products and licences">
      <p>
        Activated digital access, downloadable items or software licences may have different refund characteristics because access can be supplied
        immediately and may be used before a refund request is made. JuveniQ will consider whether access was activated or used, the nature of the
        issue, the offer terms and applicable statutory rights.
      </p>
    </LegalSection>

    <LegalSection id="lifetime-access" title="15. Lifetime and promotional access">
      <p>
        A lifetime or promotional offer is a one-time access arrangement subject to the scope, eligibility, capacity and other limitations displayed
        at purchase. Unless expressly stated otherwise, “lifetime” describes the duration of access to the relevant Product offering while that
        offering is lawfully operated and does not guarantee that every feature, integration or third-party dependency will remain unchanged indefinitely.
      </p>
      <p>
        Refund requests for lifetime or promotional access are assessed under this policy, the specific offer terms and applicable law.
      </p>
    </LegalSection>

    <LegalSection id="third-party-costs" title="16. Third-party costs">
      <p>
        Domains, hosting, cloud infrastructure, licences, external APIs, messaging, specialist services and payment processing may involve costs
        paid or committed to third parties. Non-refundable amounts reasonably committed specifically for a Customer may be deducted from an otherwise
        refundable Project amount where the agreement and law permit.
      </p>
      <p>
        JuveniQ will not label an internal overhead as a “third-party cost” merely to avoid a refund.
      </p>
    </LegalSection>

    <LegalSection id="request" title="17. How to request a refund">
      {/* LEGAL_REVIEW: Confirm the operational owner and published response targets before committing to a refund SLA. */}
      <p>Email <a href={`mailto:${company.email}`}>{company.email}</a> with:</p>
      <ul>
        <li>your name and business name, if applicable;</li>
        <li>the relevant Product or Project;</li>
        <li>the invoice, order, subscription or payment reference;</li>
        <li>the payment date and amount where known;</li>
        <li>the reason for the request; and</li>
        <li>any supporting information that helps JuveniQ verify the issue.</li>
      </ul>
      <p>
        JuveniQ may ask for further information needed to verify the transaction, confirm authority and assess the request securely.
      </p>
    </LegalSection>

    <LegalSection id="assessment" title="18. How requests are assessed">
      <p>
        JuveniQ assesses refund requests individually against the applicable agreement or Product terms, the payment record, work performed,
        Service availability, Product use where relevant, committed costs and applicable law.
      </p>
      <p>
        JuveniQ will communicate whether a request is approved, declined, partially approved or requires additional information. Where only part
        of a payment is refundable, JuveniQ should explain the basis of the calculation with reasonable clarity.
      </p>
      <p>
        JuveniQ intends to maintain practical internal response targets for refund requests. A specific public turnaround time will only be stated
        once the company has confirmed an operational service level it can consistently meet.
      </p>
    </LegalSection>

    <LegalSection id="refund-method" title="19. Refund method and processing time">
      <p>
        Where possible, an approved refund is returned through the original payment method. Once JuveniQ submits an approved refund to the payment
        provider, the time for funds to reflect depends on the provider, bank and payment method involved.
      </p>
      <p>
        JuveniQ will communicate material issues affecting an approved refund and may request alternative lawful payment details where the original
        payment method cannot technically receive the refund.
      </p>
    </LegalSection>

    <LegalSection id="payment-disputes" title="20. Payment disputes and chargebacks">
      <p>
        Customers are encouraged to contact JuveniQ before initiating a payment dispute where the issue can reasonably be resolved directly. This
        gives JuveniQ an opportunity to investigate transaction records and correct genuine errors quickly.
      </p>
      <p>
        This does not remove a Customer&apos;s right to approach their bank, payment provider, consumer authority, regulator or other lawful dispute channel.
      </p>
    </LegalSection>

    <LegalSection id="consumer-rights" title="21. Consumer rights">
      <LegalCallout title="Statutory rights remain">
        <p>
          Nothing in this policy limits a statutory cancellation, cooling-off, refund, warranty or other consumer right or remedy that cannot legally
          be excluded under South African law, including rights under the Consumer Protection Act and Electronic Communications and Transactions Act
          where those laws apply.
        </p>
      </LegalCallout>
    </LegalSection>
  </LegalLayout>
);

export default RefundCancellation;
