import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";
import { Header } from "~/components/Header";
import { Footer } from "~/components/Footer";
import { SkipToContent } from "~/components/SkipToContent";
import { DemoBanner } from "~/components/DemoBanner";
import { WelcomeDialog } from "~/components/WelcomeDialog";
import { siteConfig } from "~/lib/metadata";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  openGraph: {
    type: "website",
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={geist.variable}>
      <body className="flex min-h-screen flex-col bg-surface text-text antialiased">
        <WelcomeDialog />
        <SkipToContent />
        <DemoBanner />
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
