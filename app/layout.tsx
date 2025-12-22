import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import { Footer } from "@/components/footer";
import { LanguageProvider } from "../context/LanguageContext";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Tokusatsu Universe | The Ultimate Global Archive",
    template: "%s | Tokusatsu Universe",
  },
  description:
    "Explore the ultimate high-definition archive for Super Sentai, Kamen Rider, and Ultraman. Access dossiers, history, and mecha tactical data.",
  keywords: [
    "Tokusatsu",
    "Super Sentai",
    "Kamen Rider",
    "Ultraman",
    "Gokaiger",
    "Power Rangers",
    "Wiki",
    "Archive",
  ],
  icons: {
    icon: "/ultra/unnamed.jpg", // Logo di tab browser
    apple: "/ultra/unnamed.jpg",
  },
  openGraph: {
    title: "Tokusatsu Universe Archive",
    description: "Deep dive into the multiverse of Japanese heroes.",
    url: "https://wikitoku.vercel.app",
    siteName: "Tokusatsu Universe",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary", // Menggunakan format kecil tanpa banner besar
    title: "Tokusatsu Universe | Global Database",
    description: "The most advanced database for Tokusatsu fans worldwide.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable}`}>
      <body className="font-sans antialiased bg-[#050505] text-white selection:bg-red-600 selection:text-white overflow-x-hidden">
        <LanguageProvider>
          <div className="flex flex-col min-h-screen">
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
