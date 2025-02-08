import { type Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for BytePuppy",
};

const TermsOfService: React.FC = () => {
  return (
    <div className="mx-auto max-w-5xl p-4 md:p-6 lg:p-8">
      <h1 className="mb-4 text-3xl font-bold">Terms of Service</h1>
      <p className="mb-2">Effective Date: 2025-02-08</p>
      <p className="mb-4">
        Welcome to BytePuppy! By accessing or using our services, you agree to
        the following terms. Please read them carefully.
      </p>

      <h2 className="mb-2 text-2xl font-bold">1. Acceptance of Terms</h2>
      <p className="mb-4">
        By using BytePuppy, you acknowledge and agree to these Terms of Service.
        If you do not agree, please refrain from using our services.
      </p>

      <h2 className="mb-2 text-2xl font-bold">2. Use of Services</h2>
      <ul className="mb-4 list-disc">
        <li>
          <p>You must be at least 13 years old to use BytePuppy.</p>
        </li>
        <li>
          <p>You agree to use our services only for lawful purposes.</p>
        </li>
        <li>
          <p>
            We reserve the right to suspend or terminate accounts that violate
            these terms.
          </p>
        </li>
      </ul>

      <h2 className="mb-2 text-2xl font-bold">3. User Accounts</h2>
      <ul className="mb-4 list-disc">
        <li>
          <p>
            If you sign in using Google OAuth, you are responsible for
            maintaining the confidentiality of your credentials.
          </p>
        </li>
        <li>
          <p>
            We store necessary user data on Supabase to provide a seamless
            experience.
          </p>
        </li>
      </ul>

      <h2 className="mb-2 text-2xl font-bold">4. Privacy and Data Usage</h2>
      <p className="mb-4">
        Our Privacy Policy governs how we collect, store, and use your data. By
        using BytePuppy, you consent to our data practices.
      </p>

      <h2 className="mb-2 text-2xl font-bold">5. Limitation of Liability</h2>
      <p className="mb-4">
        BytePuppy is provided &quot;as is&quot; without warranties of any kind.
        We are not liable for any losses or damages resulting from the use of
        our services.
      </p>

      <h2 className="mb-2 text-2xl font-bold">6. Changes to Terms</h2>
      <p className="mb-4">
        We may update these Terms of Service at any time. Continued use of
        BytePuppy constitutes acceptance of the updated terms.
      </p>

      <h2 className="mb-2 text-2xl font-bold">7. Contact Us</h2>
      <p className="mb-4">
        If you have any questions, please contact us at{" "}
        <a
          href="mailto:hi@bytepuppy.com?subject=Terms%20of%20Service%20Inquiry"
          className="text-blue-600 hover:text-blue-800"
        >
          hi@bytepuppy.com
        </a>
        .
      </p>

      <p className="mb-4">
        By using BytePuppy, you agree to these Terms of Service.
      </p>
    </div>
  );
};

export default TermsOfService;
