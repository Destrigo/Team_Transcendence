export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="mb-6 text-4xl font-bold">Privacy Policy</h1>

      <div className="space-y-6">
        <section>
          <h2 className="mb-2 text-2xl font-semibold">
            Information We Collect
          </h2>
          <p>
            We collect information required to provide and improve our
            services, including account details such as username, email
            address, profile information, and game statistics.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-2xl font-semibold">
            How We Use Information
          </h2>
          <p>
            Information is used to authenticate users, provide gameplay
            features, display profiles, manage friendships, and improve the
            overall user experience.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-2xl font-semibold">
            Data Storage and Security
          </h2>
          <p>
            We take reasonable measures to protect user information from
            unauthorized access, disclosure, alteration, or destruction.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-2xl font-semibold">Third-Party Services</h2>
          <p>
            The application may use third-party authentication providers and
            services. Their handling of data is governed by their respective
            privacy policies.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-2xl font-semibold">Contact</h2>
          <p>
            If you have questions regarding this Privacy Policy, please contact
            the project administrators.
          </p>
        </section>
      </div>
    </main>
  );
}