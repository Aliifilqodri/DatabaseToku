import type { Metadata } from "next"
import { Inter, Oswald } from "next/font/google" // Import font baru
import { Footer } from "@/components/footer"
import "./globals.css"

// Font untuk teks biasa (enak dibaca)
const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

// Font untuk Judul (Gaya Cinematic/Action)
const oswald = Oswald({ 
  subsets: ["latin"],
  variable: "--font-oswald", 
  display: "swap",
})

export const metadata: Metadata = {
  title: "Tokusatsu Universe",
  description: "Streaming your favorite heroes.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable}`}>
      <body className="font-sans antialiased bg-[#141414] text-white">
        {children}
      </body>
    </html>
  )
}