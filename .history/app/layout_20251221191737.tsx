import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import { Footer } from "@/components/footer"; // Pastikan file footer sudah dibuat
import "./globals.css";

// Font untuk teks biasa (enak dibaca)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Font untuk Judul (Gaya Cinematic/Action)
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
        {/* Navbar tidak ditaruh sini karena sudah ada di setiap page (agar bisa sticky/fixed per halaman) */}
        {children}
        <Footer /> {/* Footer akan muncul di semua halaman */}
      </body>
    </html>
  );
}
