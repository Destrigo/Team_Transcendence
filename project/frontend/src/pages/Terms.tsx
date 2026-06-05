export default function TermsPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="mb-6 text-4xl font-bold">Terms of Service</h1>

      <div className="space-y-6">
        <section>
          <h2 className="mb-2 text-2xl font-semibold">
            Acceptance of Terms
          </h2>
          <p>
            By accessing and using this application, you agree to comply with
            these Terms of Service.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-2xl font-semibold">User Accounts</h2>
          <p>
            Users are responsible for maintaining the security of their account
            credentials and for all activities performed under their account.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-2xl font-semibold">Acceptable Use</h2>
          <p>
            Users agree not to misuse the service, attempt unauthorized access,
            interfere with system operation, or engage in abusive behavior
            toward other users.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-2xl font-semibold">
            Intellectual Property
          </h2>
          <p>
            All content, code, and materials provided within the application
            remain the property of their respective owners unless otherwise
            stated.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-2xl font-semibold">
            Limitation of Liability
          </h2>
          <p>
            The service is provided on an "as is" basis without warranties of
            any kind. The project authors are not liable for damages resulting
            from the use of the service.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-2xl font-semibold">
            Changes to the Terms
          </h2>
          <p>
            These terms may be updated from time to time. Continued use of the
            service constitutes acceptance of any changes.
          </p>
        </section>
      </div>
    </main>
  );
}