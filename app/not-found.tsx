"use client";

import React from "react"; // Pastikan React diimport
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { useLanguage } from "@/context/LanguageContext";
import { Wrench, AlertTriangle, ArrowLeft, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";

// Gunakan 'export default' secara eksplisit di awal fungsi
export default function NotFound() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-primary selection:text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <Navbar />

      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <div className="space-y-8">
          <div className="relative inline-block">
            <div className="w-24 h-24 md:w-32 md:h-32 bg-zinc-900 border-2 border-primary/50 rounded-full flex items-center justify-center mx-auto shadow-[0_0_50px_rgba(250,204,21,0.1)]">
              <Wrench
                size={48}
                className="text-primary animate-bounce md:w-16 md:h-16"
              />
            </div>
            <div className="absolute -top-2 -right-2 bg-red-600 p-2 rounded-lg animate-pulse">
              <AlertTriangle size={20} className="text-white" />
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-center gap-3 text-zinc-500 font-mono text-[10px] md:text-xs tracking-[0.5em] uppercase">
              <Terminal size={14} /> System_Status // Offline
            </div>
            <h1 className="font-oswald text-5xl md:text-7xl lg:text-8xl font-black uppercase italic tracking-tighter text-white leading-none">
              {t("Feature Under", "Fitur Dalam")} <br />
              <span className="text-primary">
                {t("Maintenance", "Perbaikan")}
              </span>
            </h1>
            <p className="text-zinc-400 font-mono text-xs md:text-sm uppercase tracking-widest max-w-lg mx-auto leading-relaxed border-y border-white/5 py-6">
              {t(
                "The search protocols and navigation matrix are currently being recalibrated. Please return to the main deck.",
                "Protokol pencarian dan matriks navigasi sedang dalam proses kalibrasi ulang. Silakan kembali ke dek utama."
              )}
            </p>
          </div>

          <div className="pt-8">
            <Link href="/">
              <Button className="h-16 px-10 bg-primary text-black font-oswald text-xl font-black uppercase tracking-widest rounded-none clip-angle hover:bg-white transition-all shadow-xl shadow-primary/20">
                <ArrowLeft className="mr-3" />{" "}
                {t("Return to Base", "Kembali ke Basis")}
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
