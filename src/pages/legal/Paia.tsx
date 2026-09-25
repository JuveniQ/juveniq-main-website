import LegalCallout from "@/components/legal/LegalCallout";
import LegalLayout from "@/components/legal/LegalLayout";
import LegalSection from "@/components/legal/LegalSection";
import { company } from "@/lib/company";
import type { LegalNavigationItem } from "@/lib/legal";

const navigation: LegalNavigationItem[] = [
  ["introduction", "Introduction"], ["purpose", "Purpose of this manual"], ["company-details", "Company details"],
  ["information-officer", "Information Officer & access contact"], ["paia-guide", "PAIA guide"], ["public-records", "Automatically available records"],
  ["legislation", "Records under other legislation"], ["record-categories", "Categories of records"], ["popia-processing", "POPIA processing"],
  ["data-subjects", "Data subjects & information"], ["recipients", "Recipients"], ["transfers", "Cross-border processing"],
  ["security", "Security safeguards"], ["request-procedure", "Request procedure"], ["fees", "Fees"], ["complaints", "Complaints"],
  ["availability", "Availability & updates"],
].map(([id, label]) => ({ id, label }));

const Paia = () => (
  <LegalLayout
    title="PAIA Manual"
    description="Prepared for JuveniQ as a private body under section 51 of the Promotion of Access to Information Act 2 of 2000, as amended."
    path="/paia"
    navigation={navigation}
  >
    <LegalSection id="introduction" title="1. Introduction">
      <p>
        The Promotion of Access to Information Act 2 of 2000 (PAIA) gives effect to the constitutional right of access to information, subject
        to the grounds, procedures and limitations established by law. PAIA requires private bodies to maintain a manual describing, among other
        matters, how records may be requested and the categories of records the body may hold.
      </p>
      <p>
        This manual applies to {company.legalName}. A request does not mean that every record must be disclosed. Access remains subject to PAIA,
        POPIA, confidentiality duties, privilege, third-party rights and any lawful ground for refusal.
      </p>
    </LegalSection>

    <LegalSection id="purpose" title="2. Purpose of this manual">
      <p>This manual is intended to help a requester:</p>
      <ul>
        <li>identify records JuveniQ makes available without a formal PAIA request;</li>
        <li>understand the broad categories of records JuveniQ may hold;</li>
        <li>identify the contact channel for access requests;</li>
        <li>understand the procedure and possible fees for requesting access;</li>
        <li>understand high-level categories of personal information processed by JuveniQ;</li>
        <li>understand categories of recipients and possible cross-border processing; and</li>
        <li>understand the general security safeguards used to protect personal information.</li>
      </ul>
    </LegalSection>

    <LegalSection id="company-details" title="3. Company details">
      <dl className="legal-definition-list">
        <div><dt>Private body</dt><dd>{company.legalName}</dd></div>
        <div><dt>Registration number</dt><dd>{company.registrationNumber}</dd></div>
        <div><dt>Location</dt><dd>{company.location}</dd></div>
        <div><dt>Website</dt><dd><a href={company.website}>{company.websiteLabel}</a></dd></div>
        <div><dt>General contact</dt><dd><a href={`mailto:${company.email}`}>{company.email}</a></dd></div>
      </dl>
      {/* LEGAL_REVIEW: Add JuveniQ's confirmed postal and physical/service address before treating this as the final signed section 51 manual. */}
    </LegalSection>

    <LegalSection id="information-officer" title="4. Information Officer and access contact">
      {/* LEGAL_REVIEW: Confirm the registered Information Officer/Head, registration status, postal/physical address and direct contact details. */}
      <p>
        PAIA, POPIA and formal information-access enquiries should currently be directed to JuveniQ at <a href={`mailto:${company.email}`}>{company.email}</a>.
        JuveniQ will route the request to the responsible company representative and may provide any additional statutory contact details or forms required
        to process the request.
      </p>
      <p>
        Before this manual is treated as JuveniQ&apos;s final signed statutory manual, the company should confirm and publish the particulars of its
        formally registered Information Officer or other access officer required for the private body.
      </p>
    </LegalSection>

    <LegalSection id="paia-guide" title="5. Guide on how to use PAIA">
      <p>
        The Information Regulator publishes a PAIA Guide, prescribed forms and supporting material for people who want to exercise rights under PAIA.
        Current resources are available on the <a href="https://inforegulator.org.za/paia/" target="_blank" rel="noopener noreferrer">Information Regulator&apos;s official PAIA page</a>.
      </p>
      <p>
        Requesters should consult the official Guide where they need assistance understanding which body to approach, the prescribed form, available
        remedies or the circumstances in which access may be refused.
      </p>
    </LegalSection>

    <LegalSection id="public-records" title="6. Records available without a formal request">
      <p>Information already published by JuveniQ can generally be accessed without submitting a formal PAIA request. Examples include:</p>
      <ul>
        <li>public company and contact information;</li>
        <li>published service descriptions;</li>
        <li>public Product and Project information;</li>
        <li>public Product status and links;</li>
        <li>Terms & Conditions;</li>
        <li>Privacy & POPIA Policy;</li>
        <li>Refund & Cancellation Policy; and</li>
        <li>this PAIA Manual.</li>
      </ul>
      <p>
        Public availability does not require JuveniQ to create a new record or compile information that does not already exist in the requested form.
      </p>
    </LegalSection>

    <LegalSection id="legislation" title="7. Records maintained under other legislation">
      <p>
        Depending on JuveniQ&apos;s activities and the applicability of a particular law, the company may maintain records required under South African
        legislation including company, tax, employment, consumer, electronic-transactions, privacy and access-to-information laws.
      </p>
      <p>Relevant legislation may include, where applicable:</p>
      <ul>
        <li>Companies Act 71 of 2008;</li>
        <li>Income Tax Act 58 of 1962;</li>
        <li>Tax Administration Act 28 of 2011;</li>
        <li>Value-Added Tax Act 89 of 1991, if applicable;</li>
        <li>Basic Conditions of Employment Act 75 of 1997, where applicable;</li>
        <li>Labour Relations Act 66 of 1995, where applicable;</li>
        <li>Unemployment Insurance legislation, where applicable;</li>
        <li>Compensation for Occupational Injuries and Diseases Act 130 of 1993, where applicable;</li>
        <li>Consumer Protection Act 68 of 2008;</li>
        <li>Electronic Communications and Transactions Act 25 of 2002;</li>
        <li>Protection of Personal Information Act 4 of 2013; and</li>
        <li>Promotion of Access to Information Act 2 of 2000.</li>
      </ul>
      <p>
        Inclusion in this list does not mean that every listed statute applies to every JuveniQ activity or that every statutory record is available
        for public disclosure.
      </p>
    </LegalSection>

    <LegalSection id="record-categories" title="8. Categories of records held by JuveniQ">
      <p>Subject to what JuveniQ actually holds at the time of a request, record categories may include:</p>
      <h3>Corporate and governance records</h3>
      <ul>
        <li>incorporation and company registration records;</li>
        <li>governance, resolutions and internal company administration;</li>
        <li>policies, procedures and statutory records.</li>
      </ul>
      <h3>Financial, accounting and tax records</h3>
      <ul>
        <li>invoices, quotations and payment records;</li>
        <li>accounting and banking administration records;</li>
        <li>tax and statutory financial records.</li>
      </ul>
      <h3>Customer and commercial records</h3>
      <ul>
        <li>enquiries, proposals, quotations and contracts;</li>
        <li>Project specifications, approvals and correspondence;</li>
        <li>Product subscriptions, licences and billing records;</li>
        <li>support and service communications.</li>
      </ul>
      <h3>Supplier and service-provider records</h3>
      <ul>
        <li>supplier agreements, invoices and correspondence;</li>
        <li>cloud, software, communications and infrastructure service records.</li>
      </ul>
      <h3>Technology, Product and operational records</h3>
      <ul>
        <li>technical documentation and software records;</li>
        <li>Product configuration and operational records;</li>
        <li>security, access-control, audit and incident records;</li>
        <li>intellectual-property and development records.</li>
      </ul>
      <h3>Personnel records</h3>
      <ul>
        <li>employment, contractor or applicant records where applicable and lawfully held.</li>
      </ul>
      <h3>Legal and compliance records</h3>
      <ul>
        <li>privacy and security records;</li>
        <li>PAIA requests and correspondence;</li>
        <li>complaints, disputes and legal correspondence.</li>
      </ul>
      <p>
        Listing a category does not confirm that a particular record exists or that it must be disclosed. Access is assessed under PAIA and other
        applicable law, including privacy, confidentiality, privilege and third-party rights.
      </p>
    </LegalSection>

    <LegalSection id="popia-processing" title="9. Purposes of processing personal information">
      <p>JuveniQ may process personal information for purposes including:</p>
      <ul>
        <li>responding to enquiries and managing customer relationships;</li>
        <li>providing, securing and supporting software Products;</li>
        <li>delivering custom software Projects and related Services;</li>
        <li>account creation, authentication and access control;</li>
        <li>billing, subscription administration and payment reconciliation;</li>
        <li>supplier, contractor and business administration;</li>
        <li>security monitoring, fraud prevention and incident response;</li>
        <li>accounting, tax, legal and regulatory compliance; and</li>
        <li>establishing, exercising or defending legal rights.</li>
      </ul>
      <p>Further detail appears in JuveniQ&apos;s <a href="/privacy">Privacy & POPIA Policy</a>.</p>
    </LegalSection>

    <LegalSection id="data-subjects" title="10. Categories of data subjects and personal information">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="px-3 py-3">Data-subject category</th>
              <th className="px-3 py-3">Examples of personal information</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border"><td className="px-3 py-3">Customers and prospects</td><td className="px-3 py-3">Names, contact details, business details, requirements, correspondence, quotations, contracts and billing references.</td></tr>
            <tr className="border-b border-border"><td className="px-3 py-3">Product users</td><td className="px-3 py-3">Identity and authentication information, business membership, technical information, account activity and Product-related operational information where applicable.</td></tr>
            <tr className="border-b border-border"><td className="px-3 py-3">Suppliers and service providers</td><td className="px-3 py-3">Contact details, company details, contractual information, invoices and payment administration.</td></tr>
            <tr className="border-b border-border"><td className="px-3 py-3">Website visitors</td><td className="px-3 py-3">Technical request information, IP address where applicable, security logs and information voluntarily submitted through contact channels.</td></tr>
            <tr><td className="px-3 py-3">Personnel, contractors and applicants</td><td className="px-3 py-3">Identity, contact, employment, contractual and application information where applicable and lawfully held.</td></tr>
          </tbody>
        </table>
      </div>
    </LegalSection>

    <LegalSection id="recipients" title="11. Categories of recipients">
      <p>Where necessary and lawful, personal information may be disclosed to categories of recipients such as:</p>
      <ul>
        <li>cloud, hosting and infrastructure providers;</li>
        <li>payment processors and financial institutions;</li>
        <li>authentication, email and messaging providers;</li>
        <li>technical suppliers and contractors supporting a Service;</li>
        <li>accountants, auditors, insurers and professional advisers;</li>
        <li>clients for whom JuveniQ acts as an Operator, where relevant; and</li>
        <li>regulators, courts, law-enforcement bodies or public authorities where disclosure is required or permitted by law.</li>
      </ul>
    </LegalSection>

    <LegalSection id="transfers" title="12. Planned cross-border processing">
      <p>
        Some cloud, infrastructure, authentication, communications or other service providers used by JuveniQ may process or store personal
        information outside South Africa. Where a cross-border transfer occurs, JuveniQ will use a basis permitted by POPIA, which may include
        appropriate contractual or legal protections, a recipient subject to substantially similar protection, consent where appropriate, or a
        transfer necessary for a relevant contract as permitted by law.
      </p>
    </LegalSection>

    <LegalSection id="security" title="13. General description of security safeguards">
      <p>
        Depending on the system and information involved, JuveniQ&apos;s reasonable technical and organisational measures may include authentication,
        role-based or least-privilege access, secure secret management, encryption where appropriate, backups, logging and monitoring, software updates,
        secure development practices, environment separation and security obligations imposed on relevant Operators or service providers.
      </p>
      <p>
        This description is intentionally high-level and does not disclose security information that could increase risk to JuveniQ, its clients or Users.
      </p>
    </LegalSection>

    <LegalSection id="request-procedure" title="14. Request procedure">
      <p>
        A requester seeking a record that is not automatically available may be required to submit the prescribed <strong>Form 2: Request for Access to Record</strong>
        or any successor form prescribed under PAIA.
      </p>
      <p>The request should:</p>
      <ul>
        <li>identify the requested record with sufficient detail;</li>
        <li>state the preferred form of access where relevant;</li>
        <li>provide contact details for the requester;</li>
        <li>identify the right the requester seeks to exercise or protect where PAIA requires this;</li>
        <li>explain why the requested record is necessary to exercise or protect that right where required; and</li>
        <li>include reasonable proof of identity or authority where the requester acts for another person or entity.</li>
      </ul>
      <p>
        Requests can initially be sent to <a href={`mailto:${company.email}`}>{company.email}</a>. Official forms and guidance are available from the
        <a href="https://inforegulator.org.za/paia/" target="_blank" rel="noopener noreferrer"> Information Regulator</a>.
      </p>
      <p>
        JuveniQ may ask the requester to clarify an overly broad or ambiguous request before it can reasonably identify the records concerned.
      </p>
    </LegalSection>

    <LegalSection id="fees" title="15. Fees">
      <p>
        Fees, where applicable, will be charged only in accordance with PAIA and the regulations made under it. JuveniQ will notify the requester of
        any prescribed request, access, reproduction, search or preparation fee that must be paid before further processing where applicable.
      </p>
      <p>
        JuveniQ will not create arbitrary access fees outside the statutory framework.
      </p>
    </LegalSection>

    <LegalSection id="complaints" title="16. Complaints and remedies">
      <p>
        A requester who is dissatisfied with the handling of a PAIA request may have rights to pursue the remedies provided by PAIA, including lodging
        a complaint with the Information Regulator or approaching a court where applicable.
      </p>
      <p>
        Information Regulator guidance and complaint services are available from <a href="https://inforegulator.org.za/" target="_blank" rel="noopener noreferrer">inforegulator.org.za</a>.
      </p>
    </LegalSection>

    <LegalSection id="availability" title="17. Availability and updates">
      <LegalCallout title="Public information resource">
        <p>
          The current version of this manual is available without login at <a href={`${company.website}/paia`}>{company.websiteLabel}/paia</a>.
          JuveniQ may update the manual when company details, record categories, processing practices or regulatory requirements change.
        </p>
      </LegalCallout>
      <p>
        A copy may also be requested through <a href={`mailto:${company.email}`}>{company.email}</a>. Any mandatory physical-office availability
        requirement should be fulfilled once JuveniQ&apos;s confirmed physical/service address and Information Officer particulars have been finalised.
      </p>
    </LegalSection>
  </LegalLayout>
);

export default Paia;
