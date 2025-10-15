import { Inter } from "next/font/google";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "UnMega | KI-gestützte Geschäftslösungen",
  description: "Spezialisiertes Entwicklungsteam für KI-gestützte Geschäftslösungen. Wir entwickeln SmartDocs AI, Business Intelligence Dashboards und Automation Studios für den Mittelstand.",
  keywords: "UnMega, KI, Künstliche Intelligenz, Business Intelligence, Automation, RAG Chatbot, Deutschland, Mittelstand",
  authors: [{ name: "UnMega Team" }],
  creator: "UnMega",
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://unmega.com",
    title: "UnMega | KI-gestützte Geschäftslösungen",
    description: "Spezialisiertes Entwicklungsteam für KI-gestützte Geschäftslösungen. Wir entwickeln SmartDocs AI, Business Intelligence Dashboards und Automation Studios für den Mittelstand.",
    siteName: "UnMega",
  },
  twitter: {
    card: "summary_large_image",
    title: "UnMega | KI-gestützte Geschäftslösungen",
    description: "Spezialisiertes Entwicklungsteam für KI-gestützte Geschäftslösungen. Wir entwickeln SmartDocs AI, Business Intelligence Dashboards und Automation Studios für den Mittelstand.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans bg-slate-900 text-slate-100 antialiased min-h-screen selection:bg-teal-400/20 selection:text-teal-300`}
      >
        <Navigation />
        <main className="relative">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}