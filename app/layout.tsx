import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/config/language";
import { businessConfig } from "@/config/business";

export const metadata: Metadata = {
  title: businessConfig.seo.title.en,
  description: businessConfig.seo.description.en,
  icons: {
    icon: "/logo.webp",
  },
  openGraph: {
    title: businessConfig.seo.title.en,
    description: businessConfig.seo.description.en,
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-neutral-950 text-white antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
