import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { TRPCReactProvider } from "@/trpc/react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { Nav } from "./_components/nav";

export const metadata: Metadata = {
  title: "BytePuppy",
  description: "BytePuppy is a project by Ava",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: "#000000",

  openGraph: {
    title: "BytePuppy",
    description: "BytePuppy is a project by Ava",
    url: "https://bytepuppy.dev",
    siteName: "BytePuppy",
    images: [{ url: "/og-image.png" }],
  },

  twitter: {
    card: "summary_large_image",
    title: "BytePuppy",
    description: "BytePuppy is a project by Ava",
    images: [{ url: "/og-image.png" }],
  },

  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": 0,
      "max-image-preview": "large",
      "max-snippet": 0,
    },
  },
  category: "social",
  creator: "Ava Nastar",
  icons: [
    { rel: "icon", url: "/favicon.ico" },
    { rel: "apple-touch-icon", url: "/apple-touch-icon.png" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="bytepuppy-theme"
        >
          <TRPCReactProvider>
            <Nav />
            <main className="mt-16 min-h-screen">{children}</main>
          </TRPCReactProvider>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
        <Toaster />
      </body>
    </html>
  );
}
