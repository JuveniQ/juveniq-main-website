import { Link } from "react-router-dom";
import LegalCallout from "@/components/legal/LegalCallout";
import LegalLayout from "@/components/legal/LegalLayout";
import LegalSection from "@/components/legal/LegalSection";
import { company } from "@/lib/company";
import type { LegalNavigationItem } from "@/lib/legal";

const navigation: LegalNavigationItem[] = [
  ["introduction", "Introduction"], ["scope", "Scope"], ["responsible-party", "Responsible Party & Operator"],
  ["collection", "How information is collected"], ["information-collected", "Information collected"],
  ["mandatory-optional", "Mandatory & optional information"], ["product-information", "Product information"],
  ["purposes", "Processing purposes"], ["lawful-processing", "Lawful processing"], ["operators", "Operator processing"],
  ["sharing", "Service providers & recipients"], ["payments", "Payment processing"], ["international-transfers", "International transfers"],
  ["retention", "Retention & deletion"], ["security", "Security"], ["special-information", "Special personal information"],
  ["rights", "Your rights"], ["cookies", "Cookies"], ["marketing", "Direct marketing"], ["incidents", "Security incidents"],
  ["children", "Children"], ["third-parties", "Third-party links"], ["changes", "Policy changes"], ["contact", "Privacy requests"],
  ["regulator", "Information Regulator"],
].map(([id, label]) => ({ id, label }));

const Privacy = () => (
  <LegalLayout
    title="Privacy & POPIA Policy"
    description="How JuveniQ collects, uses, protects, shares and manages personal information in accordance with its South African privacy obligations."
    path="/privacy"
    navigation={navigation}
  >
    <LegalSection id="introduction" title="1. Introduction">
      <p>
        {company.legalName} is a South African software company. This policy explains how JuveniQ may collect, use, retain,
        share, protect and otherwise process personal information when people visit its website, enquire about Services,
        use a JuveniQ Product, enter into a Project engagement or communicate with the company.
      </p>
      <p>
        JuveniQ aims to process personal information in a manner consistent with the Protection of Personal Information Act 4 of 2013
        (POPIA) and other applicable South African law. Product-specific notices, agreements or client instructions may supplement this policy.
      </p>
    </LegalSection>

    <LegalSection id="scope" title="2. Scope">
      <p>This policy may apply to:</p>
      <ul>
        <li>{company.websiteLabel} and related public JuveniQ websites;</li>
        <li>JuveniQ-owned software Products and account registrations;</li>
        <li>customer enquiries, proposals, Projects and support interactions;</li>
        <li>billing, subscriptions, payment reconciliation and customer administration;</li>
        <li>security, fraud-prevention and technical operations; and</li>
        <li>personal information JuveniQ processes for a client when acting as an Operator.</li>
      </ul>
      <p>
        Where a specific Product, Project agreement or data-processing arrangement gives more detailed privacy information, that information
        should be read together with this policy.
      </p>
    </LegalSection>

    <LegalSection id="responsible-party" title="3. Responsible Party and Operator context">
      <p>
        JuveniQ may act as a <strong>Responsible Party</strong> when it determines why and how personal information is processed, for example
        when handling a direct enquiry, administering a customer relationship, operating its own Product or managing its own billing records.
      </p>
      <p>
        JuveniQ may act as an <strong>Operator</strong> when it processes personal information on a client&apos;s documented or authorised
        instructions as part of a software Service. In that context, the client ordinarily remains the Responsible Party for the relevant
        processing decisions unless the circumstances indicate otherwise.
      </p>
    </LegalSection>

    <LegalSection id="collection" title="4. How JuveniQ may collect information">
      <p>JuveniQ may collect personal information:</p>
      <ul>
        <li><strong>directly from you</strong> when you register, contact JuveniQ, purchase a Product, submit a form, enter into a Project engagement or request support;</li>
        <li><strong>automatically from devices, applications or infrastructure</strong> where necessary for authentication, security, diagnostics or Service operation;</li>
        <li><strong>from a business or organisation</strong> that has authorised you to use a JuveniQ Product or supplied your information for a legitimate business purpose;</li>
        <li><strong>from service providers</strong> such as payment, authentication, messaging or infrastructure providers when they return verification, transaction or service-status information; and</li>
        <li><strong>from public or lawful third-party sources</strong> where relevant to a legitimate and lawful business purpose.</li>
      </ul>
      <p>
        Where personal information is not collected directly from the data subject, JuveniQ will handle that collection in accordance with
        applicable legal requirements and the context in which the information was obtained.
      </p>
    </LegalSection>

    <LegalSection id="information-collected" title="5. Information JuveniQ may collect">
      <p>The information depends on the interaction and may include:</p>
      <ul>
        <li><strong>Identity and contact information:</strong> name, email address, telephone or WhatsApp number, and business contact details.</li>
        <li><strong>Business information:</strong> organisation name, role, branch/shop information, project requirements and authorised representatives.</li>
        <li><strong>Account information:</strong> authentication identifiers, account status, user role, business membership and security events.</li>
        <li><strong>Technical information:</strong> device or browser information, IP address where applicable, application version, logs, diagnostics and security events.</li>
        <li><strong>Transaction and subscription information:</strong> invoice or payment references, transaction amount/status, plan, subscription state and billing history.</li>
        <li><strong>Support and correspondence:</strong> enquiries, requests, issue reports, feedback and communications with JuveniQ.</li>
      </ul>
      <p>
        JuveniQ does not seek to collect more personal information than is reasonably needed for the relevant purpose.
      </p>
    </LegalSection>

    <LegalSection id="mandatory-optional" title="6. Mandatory and optional information">
      <p>
        Some information is required to provide a requested Product or Service. For example, an email address or WhatsApp number may be
        required to verify an account, business information may be needed to configure a Product, and transaction details may be required
        to process or reconcile a payment.
      </p>
      <p>
        Where information is optional, JuveniQ will not treat it as mandatory merely for convenience. If required information is not
        provided, JuveniQ may be unable to create the relevant account, supply the requested Service, process a transaction, respond to a
        request or meet a contractual or legal obligation.
      </p>
    </LegalSection>

    <LegalSection id="product-information" title="7. Information processed through JuveniQ Products">
      <p>
        Individual Products may process operational information needed to provide their functions. Depending on the Product, this may include
        business configuration, transaction records, inventory or workflow information, account activity, audit information and technical
        diagnostics.
      </p>
      <p>
        The exact categories depend on the Product and how the Customer uses it. Product interfaces, agreements or additional notices may
        provide more specific detail. JuveniQ does not automatically treat all information processed through a client&apos;s use of a Product
        as JuveniQ&apos;s own data for unrelated purposes.
      </p>
    </LegalSection>

    <LegalSection id="purposes" title="8. Why information is processed">
      <p>JuveniQ may process personal information to:</p>
      <ul>
        <li>provide, configure and support requested Products and Services;</li>
        <li>create, authenticate and administer accounts and authorised users;</li>
        <li>communicate about Projects, support requests, security and transactions;</li>
        <li>process, reconcile and administer payments and subscriptions;</li>
        <li>deliver custom software Projects and manage client relationships;</li>
        <li>secure systems, investigate suspicious activity and prevent fraud or misuse;</li>
        <li>maintain, troubleshoot and improve Products and infrastructure;</li>
        <li>meet accounting, tax, legal, regulatory and record-keeping obligations; and</li>
        <li>establish, exercise or defend legal rights where necessary.</li>
      </ul>
    </LegalSection>

    <LegalSection id="lawful-processing" title="9. Lawful processing">
      <p>Depending on the circumstances, JuveniQ may process personal information because:</p>
      <ul>
        <li>the processing is necessary to perform or enter into an agreement;</li>
        <li>the processing complies with an obligation imposed by law;</li>
        <li>the processing protects a legitimate interest of the data subject;</li>
        <li>the processing is necessary for JuveniQ&apos;s legitimate interests or those of a third party where POPIA permits it; or</li>
        <li>the data subject has consented where consent is the appropriate basis.</li>
      </ul>
      <p>
        Consent is not treated as the only possible basis for lawful processing and will not be requested merely to disguise a different
        legal or contractual basis.
      </p>
    </LegalSection>

    <LegalSection id="operators" title="10. Processing when JuveniQ acts as an Operator">
      <p>
        Where JuveniQ acts as an Operator for a client, JuveniQ processes relevant personal information on the client&apos;s authorised
        instructions and subject to the contractual arrangements governing that Service. JuveniQ is required to maintain appropriate
        confidentiality and security safeguards in relation to that processing.
      </p>
      <p>
        The client, as Responsible Party, ordinarily remains responsible for determining the lawful purpose and basis of the processing,
        responding to data-subject requests and giving required notices, unless the applicable arrangement allocates a task differently in
        a manner permitted by law.
      </p>
    </LegalSection>

    <LegalSection id="sharing" title="11. Sharing with service providers and other recipients">
      <p>
        JuveniQ may share limited personal information with organisations that support the operation of its business or Services, including
        cloud and hosting providers, payment processors, authentication providers, email or messaging providers, technical suppliers,
        accountants, auditors, professional advisers and regulators or public bodies where disclosure is legally required.
      </p>
      <p>
        Information is shared only where reasonably necessary for the relevant purpose, Service or obligation. JuveniQ does not sell personal
        information as a commodity.
      </p>
      <p>
        A particular Product or client engagement may use additional suppliers. Where that use is material to the relevant processing,
        Product-specific documentation or the applicable client arrangement may provide more detail.
      </p>
    </LegalSection>

    <LegalSection id="payments" title="12. Payment processing">
      <p>
        JuveniQ may use third-party payment providers to process payments. Those providers may directly collect information required to
        authorise and process a transaction under their own terms and privacy practices.
      </p>
      <p>
        JuveniQ may receive information such as payer identity, transaction amount, payment status, payment reference, subscription reference,
        limited payment-method metadata and related reconciliation information required for billing administration and support.
      </p>
      <p>
        JuveniQ does not intentionally store full card numbers, CVV values or equivalent sensitive card credentials when those credentials are
        processed directly by the payment provider.
      </p>
    </LegalSection>

    <LegalSection id="international-transfers" title="13. Cross-border processing">
      <p>
        Some JuveniQ infrastructure or service providers may process or store personal information outside South Africa. JuveniQ will only
        make or permit such transfers where a basis permitted by POPIA applies.
      </p>
      <p>
        Depending on the circumstances, this may include appropriate contractual or legal protections, a recipient subject to substantially
        similar data-protection requirements, the data subject&apos;s consent where appropriate, or a transfer necessary for the performance
        or conclusion of a relevant contract as permitted by law.
      </p>
    </LegalSection>

    <LegalSection id="retention" title="14. Retention, deletion and de-identification">
      <p>
        JuveniQ retains personal information only for as long as reasonably necessary for the purpose for which it was collected, Service
        delivery, contractual administration, security, record keeping, dispute resolution and legal obligations.
      </p>
      <p>
        Retention periods vary according to the type of information and the reason it is held. Once JuveniQ is no longer authorised or required
        to retain identifiable personal information, it will take reasonable steps to delete, destroy or de-identify it in an appropriate
        manner so that it cannot reasonably be reconstructed where destruction is required.
      </p>
    </LegalSection>

    <LegalSection id="security" title="15. Security safeguards">
      <p>
        JuveniQ aims to maintain reasonable technical and organisational safeguards appropriate to the nature of the information and Service.
        Depending on the system, these may include authentication, access controls, least-privilege permissions, encryption where appropriate,
        secure secret management, backups, logging, monitoring, software updates and secure development practices.
      </p>
      <p>
        JuveniQ also expects Operators and service providers handling personal information on its behalf to maintain appropriate safeguards
        for the services they perform.
      </p>
      <p>
        No internet-connected system can be guaranteed completely secure. Customers and Users should protect their credentials and report
        suspected compromise promptly.
      </p>
    </LegalSection>

    <LegalSection id="special-information" title="16. Special personal information">
      <p>
        JuveniQ does not seek special personal information unless it is necessary for a specific lawful Product, Project or obligation.
        Where such information is processed, JuveniQ will apply the additional requirements that may apply under POPIA and the relevant context.
      </p>
    </LegalSection>

    <LegalSection id="rights" title="17. Your rights">
      <p>Subject to POPIA and other applicable law, a data subject may have the right to:</p>
      <ul>
        <li>ask whether JuveniQ holds personal information about them and request access where applicable;</li>
        <li>request correction or updating of inaccurate, irrelevant, excessive, out-of-date, incomplete, misleading or unlawfully obtained information;</li>
        <li>request deletion or destruction where JuveniQ is no longer authorised to retain the information;</li>
        <li>object to certain processing in circumstances provided by law;</li>
        <li>withdraw consent where processing is based on consent, without affecting earlier lawful processing;</li>
        <li>object to direct marketing and stop optional marketing communications; and</li>
        <li>lodge a complaint with the Information Regulator.</li>
      </ul>
      <p>
        A request may be limited where another law requires retention, another person&apos;s rights must be protected, or a lawful exception
        applies. Access to records may also be handled under the <Link to="/paia">PAIA Manual</Link>.
      </p>
    </LegalSection>

    <LegalSection id="cookies" title="18. Cookies and website technologies">
      <p>
        The current JuveniQ company website does not use advertising or analytics trackers. Essential browser, hosting, security and routing
        functionality may still be used to deliver the site securely.
      </p>
      <p>
        Individual JuveniQ Products may use essential local storage, authentication storage, cookies or similar technologies for sign-in,
        preferences, offline operation or core functionality. Material Product-specific use should be explained where required.
      </p>
    </LegalSection>

    <LegalSection id="marketing" title="19. Direct marketing">
      <p>
        JuveniQ will not use electronic direct marketing merely because it possesses somebody&apos;s contact details. Where direct marketing
        is undertaken, JuveniQ will comply with applicable requirements concerning consent, lawful existing-customer relationships and the
        right to object or opt out.
      </p>
      <p>
        Optional electronic marketing communications should provide a reasonable way to stop further marketing. Service, security, billing
        and transactional messages may still be sent where necessary for an existing relationship.
      </p>
    </LegalSection>

    <LegalSection id="incidents" title="20. Security incidents">
      <p>
        If JuveniQ has reasonable grounds to believe that personal information under its responsibility has been accessed or acquired by an
        unauthorised person, JuveniQ will investigate, contain and remediate the incident and make notifications to the Information Regulator
        and affected data subjects where POPIA requires them.
      </p>
      <p>
        Notifications will be made as soon as reasonably possible, subject to lawful delays required for investigation, system restoration
        or law-enforcement needs. Where JuveniQ acts as an Operator, JuveniQ will notify the relevant Responsible Party in accordance with
        POPIA and the applicable agreement.
      </p>
    </LegalSection>

    <LegalSection id="children" title="21. Children&apos;s information">
      <p>
        JuveniQ&apos;s general company website and ordinary business Services are not directed at children. Where a specific Product or client
        engagement legitimately involves children&apos;s personal information, JuveniQ will process that information only where an appropriate
        basis under POPIA exists, including any required authorisation by a competent person or other lawful ground.
      </p>
    </LegalSection>

    <LegalSection id="third-parties" title="22. Third-party links and services">
      <p>
        JuveniQ websites and Products may link to or integrate with third-party sites and services. Their privacy practices are controlled by
        those third parties, and visitors or Users should review the relevant notices before providing information directly to them.
      </p>
    </LegalSection>

    <LegalSection id="changes" title="23. Policy changes">
      <p>
        This policy may be updated as JuveniQ&apos;s Products, suppliers, processing activities or legal obligations change. The current
        effective date appears at the top of the page. Material changes may also be communicated through an appropriate Service channel where required.
      </p>
    </LegalSection>

    <LegalSection id="contact" title="24. Contact and privacy requests">
      {/* LEGAL_REVIEW: Confirm and publish JuveniQ's formally registered Information Officer details and physical/service address before final legal sign-off. */}
      <p>
        Privacy questions, objections, correction requests and related enquiries can be sent to <a href={`mailto:${company.email}`}>{company.email}</a>.
        Please describe the request and provide enough information for JuveniQ to identify the relevant interaction securely. JuveniQ may ask
        for reasonable proof of identity or authority before releasing or changing personal information.
      </p>
      <p>
        Formal requests for access to company records may also be subject to PAIA and are explained in the <Link to="/paia">PAIA Manual</Link>.
      </p>
    </LegalSection>

    <LegalSection id="regulator" title="25. Information Regulator">
      <LegalCallout title="Independent complaints channel">
        <p>
          A person may lodge a complaint with South Africa&apos;s Information Regulator if they believe their personal information has been
          handled unlawfully.
        </p>
        <p>
          Information Regulator (South Africa)<br />
          Woodmead North Office Park, 54 Maxwell Drive, Woodmead, Johannesburg<br />
          Telephone: 010 023 5200<br />
          Email: <a href="mailto:enquiries@inforegulator.org.za">enquiries@inforegulator.org.za</a><br />
          Website: <a href="https://inforegulator.org.za/" target="_blank" rel="noopener noreferrer">inforegulator.org.za</a>
        </p>
      </LegalCallout>
    </LegalSection>
  </LegalLayout>
);

export default Privacy;
