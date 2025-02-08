import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="mx-auto max-w-5xl p-4 md:p-6 lg:p-8">
      <h1 className="mb-4 text-3xl font-bold">Privacy Policy</h1>
      <p className="mb-2">Effective Date: 2025-02-07</p>
      <p className="mb-4">
        Welcome to BytePuppy! Your privacy is important to us. This Privacy
        Policy explains how we collect, use, and protect your personal
        information when you use Google OAuth to access our website and how we
        store data on Supabase.
      </p>

      <h2 className="mb-2 text-2xl font-bold">1. Information We Collect</h2>
      <p className="mb-2">
        When you sign in using Google OAuth, we may collect the following types
        of information:
      </p>
      <ul className="mb-4 list-disc">
        <li>
          <p>
            Google Profile Information: Your name, email address, profile
            picture, and Google ID.
          </p>
        </li>
        <li>
          <p>
            Usage Data: Information about your visit, such as IP address,
            browser type, and pages viewed, to improve the website experience.
          </p>
        </li>
        <li>
          <p>
            Cookies: BytePuppy may use cookies to enhance functionality and
            analyze site traffic. You can manage cookie preferences in your
            browser settings.
          </p>
        </li>
        <li>
          <p>
            Stored Data: We store certain user-related data on Supabase, such as
            authentication details, preferences, and any other user-generated
            content relevant to your experience on BytePuppy.
          </p>
        </li>
      </ul>

      <h2 className="mb-2 text-2xl font-bold">
        2. How We Use Your Information
      </h2>
      <p className="mb-2">We use collected information to:</p>
      <ul className="mb-4 list-disc">
        <li>
          <p>Authenticate and personalize your experience on BytePuppy.</p>
        </li>
        <li>
          <p>
            Improve website functionality and provide a seamless user
            experience.
          </p>
        </li>
        <li>
          <p>Store and manage user data securely on Supabase.</p>
        </li>
        <li>
          <p>Respond to inquiries and provide support.</p>
        </li>
        <li>
          <p>Analyze site traffic and usage trends.</p>
        </li>
      </ul>

      <h2 className="mb-2 text-2xl font-bold">
        3. How We Protect Your Information
      </h2>
      <p className="mb-4">
        We implement security measures to protect your data. However, no method
        of transmission over the internet is 100% secure. We encourage users to
        take precautions when sharing personal information online. Data stored
        on Supabase is managed with industry-standard security measures to
        ensure its safety.
      </p>

      <h2 className="mb-2 text-2xl font-bold">4. Third-Party Services</h2>
      <p className="mb-4">
        BytePuppy uses Google OAuth for authentication and Supabase for data
        storage. Google and Supabase may collect and process your data according
        to their respective privacy policies. We do not sell or share your
        personal information with advertisers or marketers.
      </p>

      <h2 className="mb-2 text-2xl font-bold">5. Your Choices & Rights</h2>
      <p className="mb-2">You can:</p>
      <ul className="mb-4 list-disc">
        <li>
          <p>
            Revoke BytePuppy’s access to your Google account at any time via
            your Google Account settings.
          </p>
        </li>
        <li>
          <p>Delete or update stored data on Supabase by contacting us.</p>
        </li>
      </ul>

      <h2 className="mb-2 text-2xl font-bold">6. Changes to This Policy</h2>
      <p className="mb-4">
        We may update this Privacy Policy from time to time. Any changes will be
        posted on this page with an updated effective date.
      </p>

      <h2 className="mb-2 text-2xl font-bold">7. Contact Us</h2>
      <p className="mb-4">
        If you have any questions about this Privacy Policy, you can reach us at{" "}
        <a
          href="mailto:hi@bytepuppy.com?subject=Privacy%20Polict%20Inquiry"
          className="text-blue-600 hover:text-blue-800"
        >
          hi@bytepuppy.com
        </a>
        .
      </p>

      <p className="mb-4">
        By using Google OAuth to access BytePuppy and allowing us to store data
        on Supabase, you agree to the terms outlined in this Privacy Policy.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
