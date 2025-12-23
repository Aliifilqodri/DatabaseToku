"use client";

import { useState, useEffect, useMemo } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  BookOpen,
  Sword,
  Zap,
  Activity,
  Shield,
  ChevronRight,
  Database,
  Cpu,
  Radio,
  Terminal,
  Share2,
  TrendingUp,
  Gamepad2,
  Check,
} from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  const { t } = useLanguage();
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [shared, setShared] = useState(false);

  const heroEntries = useMemo(
    () => [
      {
        id: "gokai-red",
        franchise: "SPACE_PIRATES",
        title: "GOKAI RED",
        subtitle: "CAPTAIN MARVELOUS",
        desc: t(
          "The fearless pirate captain seeking the Greatest Treasure in the Universe. A legendary anniversary hero who holds the keys to all past Sentai.",
          "Kapten bajak laut pemberani pencari Harta Karun Terbesar di Alam Semesta. Pahlawan legendaris yang memegang kunci seluruh Sentai masa lalu."
        ),
        image: "/sentai/marvelous/Captain_Marvelous.webp",
        logo: "MARVELOUS",
        color: "text-red-600",
        accent: "bg-red-600",
        border: "border-red-600/50",
        bgGradient: "from-red-900/40",
        stats: {
          punch: "5.0 t",
          kick: "10.0 t",
          height: "185 cm",
          weight: "75 kg",
        },
        year: "2011",
        code: "SENTAI_35",
      },
      {
        id: "geats",
        franchise: "DESIRE_SYSTEM",
        title: "KAMEN RIDER GEATS",
        subtitle: "UKIYO ACE",
        desc: t(
          "A genius fighter in the Desire Grand Prix. He fights to reshape the world into his ideal reality with unmatched style and precision.",
          "Petarung jenius dalam Desire Grand Prix. Dia bertarung untuk membentuk kembali dunia menjadi realitas ideal dengan gaya dan presisi tinggi."
        ),
        image: "/kr/Kamen-Rider-Geats-Riders.jpg",
        logo: "GEATS",
        color: "text-orange-500",
        accent: "bg-orange-500",
        border: "border-orange-500/50",
        bgGradient: "from-orange-900/40",
        stats: {
          punch: "6.2 t",
          kick: "11.5 t",
          height: "191 cm",
          weight: "78 kg",
        },
        year: "2022",
        code: "RIDER_33",
      },
      {
        id: "blazar",
        franchise: "ULTRA_CORE",
        title: "ULTRAMAN BLAZAR",
        subtitle: "GIANT OF LIGHT",
        desc: t(
          "A mysterious giant from M421. Communicating through primal instincts, he defends Earth against massive Kaiju threats.",
          "Raksasa misterius dari galaksi M421. Berkomunikasi melalui insting purba, ia melindungi Bumi dari ancaman Kaiju raksasa."
        ),
        image: "/ultra/ultraman-blazar-promo-pics-v0-buh0nekzimwa1.webp",
        logo: "BLAZAR",
        color: "text-blue-500",
        accent: "bg-blue-500",
        border: "border-blue-500/50",
        bgGradient: "from-blue-900/40",
        stats: {
          punch: "10k t",
          kick: "20k t",
          height: "47 m",
          weight: "42k t",
        },
        year: "2023",
        code: "ULTRA_101",
      },
    ],
    [t]
  );

  const franchises = [
    {
      id: "super-sentai",
      name: "Super Sentai",
      icon: <Shield size={24} />,
      color: "text-red-500",
      count: "52",
      img: "/sentai/introduction-to-tokusatsu-super-sentai.jpg",
    },
    {
      id: "kamen-rider",
      name: "Kamen Rider",
      icon: <Zap size={24} />,
      color: "text-orange-500",
      count: "37",
      img: "/kr/Kamen-Rider-0.jpg",
    },
    {
      id: "ultraman",
      name: "Ultraman",
      icon: <Activity size={24} />,
      color: "text-blue-500",
      count: "45",
      img: "/ultra/ultraman-netflix-1.jpg",
    },
  ];

  useEffect(() => {
    if (!isHovered) {
      const timer = setInterval(() => {
        setCurrent((prev) => (prev === heroEntries.length - 1 ? 0 : prev + 1));
      }, 7000);
      return () => clearInterval(timer);
    }
  }, [heroEntries.length, isHovered]);

  const activeHero = heroEntries[current];

  const handleShare = async () => {
    const shareData = {
      title: "Tokusatsu Universe Archive",
      text: `Check out ${activeHero.title} in the Ultimate Tokusatsu Archive!`,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.log("Error sharing", err);
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        setShared(true);
        setTimeout(() => setShared(false), 2000);
      } catch (err) {
        console.error("Failed to copy!", err);
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#020202] text-white selection:bg-primary selection:text-white overflow-x-hidden">
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none z-0" />

      <Navbar />

      <section
        className="relative min-h-screen w-full flex items-center pt-24 md:pt-0 overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {heroEntries.map((entry, idx) => (
          <div
            key={entry.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              idx === current
                ? "opacity-100 scale-100 md:scale-105"
                : "opacity-0 scale-110"
            }`}
          >
            <img
              src={entry.image}
              alt={entry.title}
              className="h-full w-full object-cover object-center md:object-top brightness-[0.5] md:brightness-[0.4] contrast-110"
            />
            <div
              className={`absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r ${entry.bgGradient} via-[#020202]/60 md:via-[#020202]/90 to-[#020202] md:to-transparent`}
            />
          </div>
        ))}

        <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 md:gap-12 items-center">
            <div className="lg:col-span-8 space-y-6 md:space-y-8 animate-in fade-in slide-in-from-left duration-1000">
              <div className="flex items-center gap-3">
                <span className="p-1.5 bg-primary/10 border border-primary/20 rounded-md">
                  <Terminal size={14} className="text-primary animate-pulse" />
                </span>
                <span className="font-mono text-[10px] md:text-xs tracking-[0.2em] md:tracking-[0.4em] text-primary font-black uppercase">
                  CORE_SYNC: {activeHero.code}
                </span>
              </div>

              <div className="space-y-1">
                <h2
                  className={`font-oswald text-lg md:text-3xl font-bold uppercase tracking-[0.3em] ${activeHero.color} drop-shadow-[0_0_15px_rgba(0,0,0,0.5)]`}
                >
                  {activeHero.franchise}
                </h2>
                <h1 className="font-oswald text-5xl sm:text-7xl md:text-[9rem] font-black italic tracking-tighter text-white leading-[0.85] break-words">
                  {activeHero.logo}
                </h1>
              </div>

              <div className="flex flex-wrap items-center gap-4 md:gap-6">
                <div className="flex gap-2">
                  <Badge className="bg-white text-black font-black px-3 py-1 rounded-none text-xs">
                    {activeHero.year}
                  </Badge>
                  <Badge
                    variant="outline"
                    className={`border ${activeHero.border} text-white font-mono rounded-none text-[10px] backdrop-blur-sm`}
                  >
                    ARCHIVE_STABLE
                  </Badge>
                </div>
                <div className="flex items-center gap-3 bg-white/5 px-3 py-1 border border-white/10 rounded-sm">
                  <TrendingUp size={12} className="text-primary" />
                  <span className="text-[9px] font-mono text-zinc-400">
                    RATING: 9.8/10
                  </span>
                </div>
              </div>

              <p className="text-sm md:text-xl text-zinc-300 border-l-2 md:border-l-4 border-primary pl-4 md:pl-8 max-w-2xl leading-relaxed font-light italic bg-black/20 md:bg-transparent backdrop-blur-[2px] md:backdrop-blur-none p-2 md:p-0">
                "{activeHero.desc}"
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href={`/genre/${
                    activeHero.id.includes("gokai")
                      ? "super-sentai"
                      : activeHero.id.includes("geats")
                      ? "kamen-rider"
                      : "ultraman"
                  }`}
                  className="w-full sm:w-auto"
                >
                  <Button
                    className={`${activeHero.accent} w-full h-14 md:h-16 px-8 rounded-none clip-angle text-black font-black uppercase tracking-widest group shadow-[0_0_20px_rgba(255,255,255,0.1)]`}
                  >
                    <Database className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                    Initialize Core
                  </Button>
                </Link>
                <div className="flex gap-2 w-full sm:w-auto">
                  <Button
                    variant="outline"
                    className="flex-1 sm:w-auto h-14 md:h-16 px-6 border-white/10 bg-white/5 text-white rounded-none clip-angle uppercase font-bold tracking-widest backdrop-blur-md"
                  >
                    Historical_Log
                  </Button>
                  <Button
                    variant="outline"
                    onClick={handleShare}
                    className="h-14 md:h-16 px-4 border-white/10 bg-white/5 text-white rounded-none clip-angle transition-all active:scale-95 hover:bg-primary hover:text-black"
                  >
                    {shared ? (
                      <Check size={18} className="text-green-400" />
                    ) : (
                      <Share2 size={18} />
                    )}
                  </Button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-center items-center lg:items-end animate-in fade-in zoom-in duration-1000 delay-300">
              <div className="w-full max-w-sm lg:max-w-[320px] bg-black/60 backdrop-blur-2xl border border-white/10 p-6 md:p-8 clip-angle relative overflow-hidden group shadow-2xl">
                <div className="flex justify-between items-start mb-8 relative z-10">
                  <div className="space-y-1">
                    <p className="text-[9px] font-mono text-zinc-500 uppercase tracking-tighter">
                      Status_Report
                    </p>
                    <p className="text-xs font-black text-white uppercase tracking-widest">
                      Access_Verified
                    </p>
                  </div>
                  <Cpu
                    className={`${activeHero.color} animate-spin-slow`}
                    size={20}
                  />
                </div>

                <div className="space-y-8 md:space-y-10 relative z-10">
                  {[
                    {
                      label: "TACTICAL_POWER",
                      val: activeHero.stats.punch,
                      p: "85%",
                      icon: <Sword size={12} />,
                    },
                    {
                      label: "VELOCITY_INDEX",
                      val: activeHero.stats.kick,
                      p: "94%",
                      icon: <Zap size={12} />,
                    },
                  ].map((stat, i) => (
                    <div key={i} className="relative">
                      <div className="flex justify-between text-[9px] font-mono text-zinc-400 mb-2 uppercase tracking-widest">
                        <span className="flex items-center gap-2">
                          {stat.icon} {stat.label}
                        </span>
                        <span className={activeHero.color}>{stat.val}</span>
                      </div>
                      <div className="h-[2px] w-full bg-white/5 overflow-hidden">
                        <div
                          className={`h-full ${activeHero.accent} transition-all duration-1000 shadow-[0_0_10px_rgba(255,255,255,0.2)]`}
                          style={{ width: stat.p }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-white/5 grid grid-cols-2 gap-4 relative z-10 font-mono">
                  <div>
                    <p className="text-[7px] text-zinc-500 uppercase">
                      Dimension_H
                    </p>
                    <p className="text-[11px] text-white font-black">
                      {activeHero.stats.height}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-[7px] text-zinc-500 uppercase">
                      Mass_Unit
                    </p>
                    <p className="text-[11px] text-white font-black">
                      {activeHero.stats.weight}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-6 z-20">
          <div className="flex gap-2 bg-black/40 backdrop-blur-md p-2 rounded-full border border-white/5">
            {heroEntries.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  current === idx ? "w-8 bg-primary" : "w-2 bg-zinc-700"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-[#050505] py-24 md:py-40">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
            <div className="relative space-y-4">
              <div className="flex items-center gap-2 text-primary font-mono text-[10px] uppercase tracking-widest">
                <Gamepad2 size={16} /> Selection_Module
              </div>
              <h2 className="font-oswald text-5xl md:text-8xl font-black text-white uppercase italic leading-none tracking-tighter">
                ARCHIVE <br className="hidden md:block" />{" "}
                <span className="text-primary">CORES</span>
              </h2>
            </div>
            <div className="max-w-md text-zinc-500 font-mono text-[10px] md:text-xs uppercase tracking-widest leading-loose border-l border-white/10 pl-6">
              Access high-level encrypted dossiers across the multiverse.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {franchises.map((f, i) => (
              <Link
                href={`/genre/${f.id}`}
                key={f.id}
                className="group relative aspect-[16/10] md:aspect-[4/5] overflow-hidden border border-white/5 rounded-2xl md:rounded-3xl transition-all duration-700 hover:border-primary/60"
              >
                <img
                  src={f.img}
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 grayscale-0 opacity-60 group-hover:opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-[#020202]/40 to-transparent" />
                <div className="absolute inset-0 p-6 md:p-12 flex flex-col justify-end">
                  <div className="space-y-4 md:space-y-6">
                    <div
                      className={`w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center bg-black/90 border border-white/10 ${f.color} group-hover:bg-primary group-hover:text-black transition-all duration-500 shadow-2xl`}
                    >
                      {f.icon}
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-oswald text-3xl md:text-5xl font-bold text-white uppercase tracking-tighter italic leading-none">
                        {f.name}
                      </h3>
                      <p className="font-mono text-[8px] md:text-[11px] text-zinc-500 tracking-[0.2em] uppercase">
                        {f.count}_CLASSIFIED_FILES
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <footer className="relative bg-[#020202] py-16 md:py-24 border-t border-white/5">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div className="flex items-center gap-4">
              <Radio size={16} className="text-primary animate-pulse" />
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-bold">
                Secure_Encryption
              </span>
            </div>
          </div>
          <div className="text-center md:text-right font-mono text-[10px] text-primary font-black uppercase tracking-[0.4em]">
            TokuUniverse
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
        .clip-angle {
          clip-path: polygon(
            0 0,
            100% 0,
            100% calc(100% - 15px),
            calc(100% - 15px) 100%,
            0 100%
          );
        }
        @media (max-width: 768px) {
          .clip-angle {
            clip-path: polygon(
              0 0,
              100% 0,
              100% calc(100% - 10px),
              calc(100% - 10px) 100%,
              0 100%
            );
          }
        }
      `}</style>
    </div>
  );
}
