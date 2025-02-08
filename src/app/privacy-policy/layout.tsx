import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for BytePuppy",
  openGraph: {
    title: "Privacy Policy",
    description: "Privacy Policy for BytePuppy",
    url: "https://bytepuppy.dev/privacy-policy",
    siteName: "BytePuppy",
    images: [{ url: "/og-image.png" }],
  },
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="mx-auto max-w-5xl p-4 md:p-6 lg:p-8">{children}</div>;
}
