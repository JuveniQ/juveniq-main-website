import { Link } from "react-router-dom";
import LegalCallout from "@/components/legal/LegalCallout";
import LegalLayout from "@/components/legal/LegalLayout";
import LegalSection from "@/components/legal/LegalSection";
import { company } from "@/lib/company";
import type { LegalNavigationItem } from "@/lib/legal";

const navigation: LegalNavigationItem[] = [
  ["about", "About JuveniQ"], ["definitions", "Definitions"], ["application", "Application & acceptance"],
  ["services", "Services"], ["projects", "Project engagements"], ["customer-responsibilities", "Customer responsibilities"],
  ["quotes", "Quotes & proposals"], ["electronic-transactions", "Electronic transactions"], ["payments", "Payments"],
  ["subscriptions", "Subscriptions"], ["fixed-term", "Fixed-term agreements"], ["trials", "Trials"],
  ["accounts", "Accounts & security"], ["acceptable-use", "Acceptable use"], ["confidentiality", "Confidentiality"],
  ["intellectual-property", "Intellectual property"], ["third-party-services", "Third-party services"],
  ["availability", "Availability & maintenance"], ["privacy", "Data & privacy"], ["refunds", "Cancellations & refunds"],
  ["termination", "Suspension & termination"], ["warranties", "Warranties"], ["liability", "Liability"],
  ["consumer-rights", "Consumer rights"], ["complaints", "Complaints & disputes"], ["governing-law", "Governing law"],
  ["changes", "Changes"], ["contact", "Contact"],
].map(([id, label]) => ({ id, label }));

const Terms = () => (
  <LegalLayout
    title="Terms & Conditions"
    description="Terms governing the use of JuveniQ websites, software products, subscriptions and technology services."
    path="/terms"
    navigation={navigation}
  >
    <LegalSection id="about" title="1. About JuveniQ">
      <p>
        These Terms are issued by {company.legalName}, registration number {company.registrationNumber}, a South African
        software company based in {company.location}. The company website is <a href={company.website}>{company.websiteLabel}</a>.
      </p>
      <p>
        JuveniQ designs, develops, operates and supports software products and custom technology solutions. These Terms
        establish a general framework for using JuveniQ websites, Products and Services. They do not replace a project-specific
        agreement or Product-specific terms where those have been agreed or presented for a particular transaction.
      </p>
    </LegalSection>

    <LegalSection id="definitions" title="2. Definitions">
      <p>In these Terms, unless the context requires otherwise:</p>
      <ul>
        <li><strong>Customer</strong> means a person or organisation that purchases, subscribes to, commissions or otherwise contracts for a JuveniQ Product or Service.</li>
        <li><strong>User</strong> means an authorised person who accesses or uses a JuveniQ website or Product.</li>
        <li><strong>Product</strong> means software owned or operated by JuveniQ, including subscription, prepaid, licensed or trial software.</li>
        <li><strong>Project</strong> means custom software, integration, automation, support or other technology work undertaken for a specific Customer.</li>
        <li><strong>Service</strong> means any Product, Project or related software service supplied by JuveniQ.</li>
        <li><strong>Subscription</strong> means recurring paid access to a Product for an agreed billing period.</li>
        <li><strong>Third-party service</strong> means an external payment, cloud, authentication, communications, infrastructure, API or other service used in supplying JuveniQ functionality.</li>
      </ul>
    </LegalSection>

    <LegalSection id="application" title="3. Application and acceptance">
      <p>
        These Terms may apply when you use a JuveniQ public website, access a JuveniQ Product, purchase or subscribe to a Product,
        or enter into a Service engagement that incorporates these Terms.
      </p>
      <p>
        Merely viewing public information on a JuveniQ website does not by itself create a custom software development agreement.
        A commercial relationship may be formed through a signed agreement, accepted quotation or proposal, checkout, subscription
        selection, order, invoice acceptance or other recorded acceptance process.
      </p>
      <p>
        Product-specific terms, quotations, proposals, service agreements or other specifically agreed terms may supplement these
        Terms. If those specific terms address a matter differently, they govern that subject matter to the extent of the difference,
        subject to rights and obligations that cannot lawfully be excluded.
      </p>
    </LegalSection>

    <LegalSection id="services" title="4. Services">
      <p>
        JuveniQ provides custom software development, web and mobile applications, internal business systems, systems integration,
        automation, modernisation and software support. JuveniQ also develops and operates its own software Products.
      </p>
      <p>
        The features, deliverables, service levels, limitations and commercial terms of a particular Service are those communicated
        for that Service or recorded in the applicable agreement, Product interface or checkout.
      </p>
    </LegalSection>

    <LegalSection id="projects" title="5. Project engagements">
      <p>
        Custom Projects are delivered against an agreed scope, deliverables and estimated timeline. JuveniQ will use reasonable care
        and skill in performing agreed Services and will communicate material changes that affect scope, cost or delivery where practical.
      </p>
      <p>
        A material change to requirements, assumptions, integrations, data, third-party dependencies or acceptance criteria may require
        a change request and may affect price, effort and delivery time.
      </p>
      <p>
        Where a Project includes an acceptance or review process, the Customer should review deliverables within the period stated in
        the applicable agreement and identify material non-conformities with reasonable detail. Minor defects that do not materially
        prevent intended use will ordinarily be addressed through the agreed correction or support process and do not automatically
        cancel the Project.
      </p>
    </LegalSection>

    <LegalSection id="customer-responsibilities" title="6. Customer responsibilities">
      <p>A Customer must, where relevant to the engagement:</p>
      <ul>
        <li>provide accurate requirements, content, access, decisions and approvals within reasonable time;</li>
        <li>ensure that information, content, credentials, systems and instructions supplied to JuveniQ may lawfully be used for the intended purpose;</li>
        <li>maintain appropriate security over accounts, credentials and third-party systems under the Customer&apos;s control;</li>
        <li>participate in reasonable testing, review and acceptance activities required by the Project;</li>
        <li>maintain backups of Customer-controlled systems or data where the applicable agreement places that responsibility on the Customer; and</li>
        <li>not require JuveniQ to perform unlawful, fraudulent, infringing or materially unsafe work.</li>
      </ul>
      <p>
        Delays caused by missing information, unavailable third-party access or delayed approvals may reasonably affect delivery dates.
      </p>
    </LegalSection>

    <LegalSection id="quotes" title="7. Quotes and proposals">
      <p>
        Custom development is ordinarily priced through a project-specific quotation or proposal after the requirements are understood.
        A quotation may specify its validity period, assumptions, exclusions, payment schedule, third-party costs and acceptance process.
      </p>
      <p>
        Unless expressly stated otherwise, an estimate is not a guarantee that materially changed requirements will be delivered for the
        original estimated amount.
      </p>
    </LegalSection>

    <LegalSection id="electronic-transactions" title="8. Electronic transactions">
      <p>
        Where JuveniQ offers a Product or Service for purchase electronically, the relevant Product page, checkout or commercial
        documentation should identify the material characteristics of the Product or Service, applicable price and billing period,
        payment method, recurring nature where relevant, and material cancellation or refund terms before the transaction is completed.
      </p>
      <p>
        Customers should review transaction information before authorising payment and use any available opportunity to correct errors
        before submitting an order or subscription. Nothing in these Terms limits rights that may apply to an electronic transaction under
        South African law.
      </p>
      {/* LEGAL_REVIEW: Confirm and publish JuveniQ's physical/service address for final ECTA and PAIA disclosure completeness. */}
    </LegalSection>

    <LegalSection id="payments" title="9. Payments">
      <p>
        Invoices, deposits, payment milestones, prices, taxes where applicable and due dates are set out in the relevant quotation,
        agreement, invoice, Product page or checkout. JuveniQ may use third-party payment providers to collect authorised payments.
      </p>
      <p>
        Customers must ensure that payment information is accurate and that they are authorised to use the selected method. Failed,
        reversed or overdue payments may delay delivery or restrict access after reasonable steps to resolve the payment, subject to the
        applicable agreement and law.
      </p>
      <p>
        A payment reference, invoice reference or subscription reference may be used to reconcile a transaction and investigate billing disputes.
      </p>
    </LegalSection>

    <LegalSection id="subscriptions" title="10. Subscriptions">
      <p>
        Some JuveniQ Products are available through recurring subscriptions, prepaid access periods, promotional plans or one-time licence
        arrangements. Not every Product offers every billing interval. The applicable price, billing interval and access period will be
        shown in the Product or checkout before purchase.
      </p>
      <p>
        Where a Subscription renews automatically, the Customer authorises JuveniQ and its payment provider to collect the applicable
        recurring amount using the authorised payment method until the Subscription is cancelled or otherwise ends.
      </p>
      <p>
        Cancellation prevents a future renewal once successfully recorded. Unless the relevant Product states otherwise, access ordinarily
        continues until the end of the already-paid billing period. Failed or reversed payments may result in restricted access after
        reasonable attempts to resolve the payment.
      </p>
      <p>
        JuveniQ may change Product pricing or plan features prospectively. Where a change materially affects an existing recurring
        Subscription, JuveniQ will provide any notice required by applicable law or the applicable Product terms before the change takes effect.
      </p>
    </LegalSection>

    <LegalSection id="fixed-term" title="11. Fixed-term consumer agreements">
      <p>
        Where a JuveniQ agreement qualifies as a fixed-term consumer agreement to which section 14 of the Consumer Protection Act applies,
        the consumer retains the cancellation rights provided by that section, including any applicable right to cancel on the notice
        prescribed by law and subject only to a reasonable cancellation charge where legally permitted.
      </p>
      <p>
        Section 14 does not apply to every commercial relationship, and different rules may apply to agreements between juristic persons.
        This section must therefore be read with the nature of the Customer and the specific agreement.
      </p>
    </LegalSection>

    <LegalSection id="trials" title="12. Trials">
      <p>
        A Product may offer a trial for the duration shown in that Product. Trial access can expire or be limited. A free trial does not
        itself create a charge; paid access requires the Customer&apos;s action or authorisation unless the relevant offer clearly states otherwise.
      </p>
    </LegalSection>

    <LegalSection id="accounts" title="13. Accounts and security">
      <p>
        Customers and Users must provide accurate account information, protect credentials and authentication methods, and restrict access
        to authorised users. Suspected unauthorised access should be reported promptly to JuveniQ.
      </p>
      <p>
        Customers remain responsible for appropriately managing Users they authorise to access their business or Product environment.
        JuveniQ may take reasonable steps to protect an account where fraud, compromise or abuse is suspected.
      </p>
    </LegalSection>

    <LegalSection id="acceptable-use" title="14. Acceptable use">
      <p>
        You may not use JuveniQ Services to commit unlawful acts, fraud or abuse; harm others; introduce malicious code; disrupt systems;
        gain unauthorised access; infringe third-party rights; misuse payment functionality; or evade licences and access controls.
      </p>
      <p>
        Reverse engineering is prohibited only to the extent that the restriction is lawful and not overridden by applicable rights or an agreed licence.
      </p>
    </LegalSection>

    <LegalSection id="confidentiality" title="15. Confidentiality">
      <p>
        During a Project or business relationship, either party may receive non-public business, technical, commercial or security
        information from the other. Each party should use confidential information only for the relevant engagement and protect it with
        reasonable care.
      </p>
      <p>
        Confidentiality obligations do not ordinarily apply to information that is lawfully public through no breach, was already lawfully
        known, is independently developed without use of the confidential information, is received lawfully from a third party, or must be
        disclosed by law. A more specific confidentiality or non-disclosure agreement will govern where one has been agreed.
      </p>
    </LegalSection>

    <LegalSection id="intellectual-property" title="16. Intellectual property">
      <h3>JuveniQ-owned Products</h3>
      <p>
        JuveniQ retains the intellectual property rights it holds in its own Products, Product branding, documentation and related materials.
        Access to a Product does not transfer ownership unless expressly agreed.
      </p>
      <h3>Pre-existing JuveniQ materials</h3>
      <p>
        Reusable libraries, frameworks, tools, methods and components developed independently of a Customer Project remain JuveniQ property
        unless agreed otherwise.
      </p>
      <h3>Custom client work</h3>
      <p>
        Ownership and licensing of custom deliverables are defined in the applicable Project agreement. These general Terms do not claim that
        JuveniQ owns every custom Project indefinitely. Where an agreement provides for transfer of ownership, that transfer may be subject to
        payment of amounts due under that agreement.
      </p>
      <h3>Third-party and open-source materials</h3>
      <p>
        Third-party and open-source components remain subject to their respective licences and are not transferred merely because they form
        part of a JuveniQ-delivered solution.
      </p>
    </LegalSection>

    <LegalSection id="third-party-services" title="17. Third-party services">
      <p>
        Products and Projects may depend on hosting, cloud infrastructure, payment processing, authentication, communications, mapping,
        analytics or external APIs. Those providers may apply their own terms and privacy practices, and their availability can affect
        JuveniQ functionality.
      </p>
      <p>
        Where the Customer controls a third-party account or licence required for a Project, the Customer remains responsible for keeping
        that account appropriately funded, licensed and available unless the applicable agreement states otherwise.
      </p>
    </LegalSection>

    <LegalSection id="availability" title="18. Availability and maintenance">
      <p>
        JuveniQ uses reasonable efforts to operate and support its Services, but does not promise uninterrupted availability unless a
        specific service level has been agreed in writing. Maintenance, security work, third-party incidents, network conditions and technical
        faults may cause disruption.
      </p>
      <p>
        Offline-capable Products may continue to provide some functions while synchronisation or online services are unavailable, but features
        that depend on authentication, payment processing, cloud services or external APIs may require connectivity.
      </p>
    </LegalSection>

    <LegalSection id="privacy" title="19. Data and privacy">
      <p>
        How JuveniQ handles personal information is explained in the <Link to="/privacy">Privacy & POPIA Policy</Link>. Product-specific
        notices, client processing arrangements or data-processing terms may provide additional detail for a particular context.
      </p>
    </LegalSection>

    <LegalSection id="refunds" title="20. Cancellation and refunds">
      <p>
        Cancellation and refund principles are explained in the <Link to="/refund-cancellation-policy">Refund & Cancellation Policy</Link>.
        Project-specific commercial terms may also apply, subject to rights that cannot lawfully be excluded.
      </p>
    </LegalSection>

    <LegalSection id="termination" title="21. Suspension and termination">
      <p>
        JuveniQ may suspend or terminate access where reasonably necessary because of serious Terms violations, non-payment, fraud, unlawful
        or abusive use, security compromise, material risk to other users or infrastructure, or conduct that makes continued provision of the
        Service unlawful or unsafe.
      </p>
      <p>
        Where appropriate and practical, JuveniQ will provide notice and an opportunity to address the issue. Immediate action may be taken
        where delay would materially increase security, fraud, legal or operational risk.
      </p>
    </LegalSection>

    <LegalSection id="warranties" title="22. Disclaimers and warranties">
      <p>
        Services are provided with the care, skill, quality commitments and specifications stated in the applicable agreement and required by
        law. Software can contain defects or depend on factors outside JuveniQ&apos;s control. No wording in these Terms excludes a warranty,
        guarantee or remedy that cannot lawfully be excluded.
      </p>
    </LegalSection>

    <LegalSection id="liability" title="23. Limitation of liability">
      {/* LEGAL_REVIEW: Confirm final liability caps/exclusions in JuveniQ's commercial contract templates before formal legal sign-off. */}
      <p>
        To the extent permitted by applicable law, liability should be proportionate to the Service and circumstances giving rise to the claim.
        Any Project-specific liability caps, exclusions, indemnities or remedies will be set out in the relevant agreement.
      </p>
      <p>
        Nothing in these Terms limits liability or a remedy where doing so would be unlawful, including where applicable law does not permit
        a supplier to exclude the relevant responsibility.
      </p>
    </LegalSection>

    <LegalSection id="consumer-rights" title="24. South African consumer rights">
      <LegalCallout title="Rights preserved">
        <p>
          Nothing in these Terms is intended to exclude or restrict a consumer right, warranty, cancellation right or remedy that cannot
          lawfully be excluded under applicable South African law, including the Consumer Protection Act and Electronic Communications and
          Transactions Act where they apply.
        </p>
      </LegalCallout>
    </LegalSection>

    <LegalSection id="complaints" title="25. Complaints and disputes">
      <p>
        Customers are encouraged to first raise a complaint with JuveniQ at <a href={`mailto:${company.email}`}>{company.email}</a>, including
        enough information for the matter to be investigated. JuveniQ will make reasonable efforts to investigate and respond in good faith.
      </p>
      <p>
        Nothing in this complaint process prevents a person from approaching a court, regulator, consumer authority, payment provider or
        other dispute-resolution body where they have a legal right to do so.
      </p>
    </LegalSection>

    <LegalSection id="governing-law" title="26. Governing law">
      <p>
        These Terms are governed by the laws of South Africa. This section does not remove any right to approach a court, regulator or
        dispute-resolution body where the law permits it.
      </p>
    </LegalSection>

    <LegalSection id="changes" title="27. Changes to these Terms">
      <p>
        JuveniQ may update these Terms as Products, Services, commercial practices or legal requirements change. The current version and its
        effective date will be published on this page. Material changes affecting an existing Customer relationship may also be communicated
        through an appropriate Service channel where required.
      </p>
    </LegalSection>

    <LegalSection id="contact" title="28. Contact">
      <p>Questions about these Terms can be sent to <a href={`mailto:${company.email}`}>{company.email}</a>.</p>
      <p>
        {company.legalName}<br />
        Registration No. {company.registrationNumber}<br />
        {company.location}
      </p>
    </LegalSection>
  </LegalLayout>
);

export default Terms;
