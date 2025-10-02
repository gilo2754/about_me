import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Inter } from "next/font/google";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import "../globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const locales = ['en', 'de'];

export const metadata: Metadata = {
  title: "Carlo Menjivar | Software Engineer",
  description: "Software Engineer at Capgemini with expertise in Angular, Spring Boot, and modern web technologies. From embedded electronics to web development.",
  keywords: "Carlo Menjivar, Software Engineer, Angular, Spring Boot, React, Capgemini, Germany, Cologne",
  authors: [{ name: "Carlo Menjivar" }],
  creator: "Carlo Menjivar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://unmega.com",
    title: "Carlo Menjivar | Software Engineer",
    description: "Software Engineer at Capgemini with expertise in Angular, Spring Boot, and modern web technologies. From embedded electronics to web development.",
    siteName: "Carlo Menjivar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Carlo Menjivar | Software Engineer",
    description: "Software Engineer at Capgemini with expertise in Angular, Spring Boot, and modern web technologies. From embedded electronics to web development.",
  },
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans bg-slate-900 text-slate-100 antialiased min-h-screen selection:bg-teal-400/20 selection:text-teal-300`}
      >
        <NextIntlClientProvider messages={messages}>
          <Navigation />
          <main className="relative">
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}