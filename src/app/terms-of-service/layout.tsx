import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for BytePuppy",
  openGraph: {
    title: "Terms of Service",
    description: "Terms of Service for BytePuppy",
    url: "https://bytepuppy.dev/terms-of-service",
    siteName: "BytePuppy",
    images: [{ url: "/og-image.png" }],
  },
};

export default function TermsOfServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="mx-auto max-w-5xl p-4 md:p-6 lg:p-8">{children}</div>;
}
