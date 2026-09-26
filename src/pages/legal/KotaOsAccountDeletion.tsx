import { Link } from "react-router-dom";
import PageMeta from "@/components/PageMeta";
import { Container, PageHeader } from "@/components/SiteElements";
import { company } from "@/lib/company";

const KotaOsAccountDeletion = () => (
  <>
    <PageMeta
      title="Delete your Kota-OS account"
      description="How to delete a Kota-OS account and its associated data in the app or request deletion from JuveniQ."
      path="/kota-os/account-deletion"
    />
    <PageHeader eyebrow="Kota-OS account and data" title="Delete your Kota-OS account">
      You can delete your account in the app or request help by email if you can no longer sign in.
    </PageHeader>
    <section className="section-pad pt-0">
      <Container>
        <div className="mx-auto max-w-3xl space-y-8 text-sm leading-7 text-muted-foreground">
          <section>
            <h2 className="text-xl font-semibold text-foreground">Delete in the app</h2>
            <ol className="mt-3 list-decimal space-y-2 pl-6">
              <li>Open Kota-OS and sign in with your email or WhatsApp code.</li>
              <li>Open Settings → Legal &amp; Privacy → Delete account. If your licence has expired, choose Delete account on the expiry screen.</li>
              <li>Export any local records you want to keep. Type DELETE and confirm while connected to the internet.</li>
            </ol>
            <p className="mt-3">
              The account and associated cloud registration and subscription data are deleted. An active Paystack renewal is stopped first.
              The app also clears its local records on that device. Other devices and any backups you exported must be cleared separately.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-foreground">Request deletion without the app</h2>
            <p className="mt-3">
              Email <a className="text-link" href={`mailto:${company.email}?subject=Kota-OS%20account%20deletion%20request`}>{company.email}</a> with
              the subject “Kota-OS account deletion request”. Include the email address or phone number used for your account and
              say whether you also want associated data deleted. We will verify account ownership before processing the request.
              Never send an OTP code or password.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-foreground">Data that may remain</h2>
            <p className="mt-3">
              Shared business records remain available to other active members. Records that must be retained for accounting,
              tax, legal obligations or disputes may be kept for the required period. Backups and copies you hold are under your control.
              See our <Link className="text-link" to="/privacy">Privacy &amp; POPIA Policy</Link> for details.
            </p>
          </section>
          <p><Link className="text-link" to="/legal">All JuveniQ policies</Link></p>
        </div>
      </Container>
    </section>
  </>
);

export default KotaOsAccountDeletion;
