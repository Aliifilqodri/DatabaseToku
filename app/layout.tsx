import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import { Footer } from "@/components/footer";
// Menggunakan ../ agar langsung mencari ke folder context di luar app
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
  title: "Tokusatsu Universe",
  description: "The ultimate archive for Tokusatsu fans.",
  icons: {
    icon: "/ultra/unnamed.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable}`}>
      <body className="font-sans antialiased bg-[#050505] text-white selection:bg-red-600 selection:text-white">
        <LanguageProvider>
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}