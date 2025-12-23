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
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

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
    const shareData = { title: "Toku Universe", url: window.location.href };
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.log(err);
      }
    } else {
      await navigator.clipboard.writeText(window.location.href);
      setShared(true);
      setTimeout(() => setShared(false), 2000);
    }
  };

  if (!isMounted) return null;

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
            className={`absolute inset-0 transition-all duration-[1.5s] ease-in-out ${
              idx === current
                ? "opacity-100 scale-100 md:scale-105"
                : "opacity-0 scale-125 blur-xl"
            }`}
          >
            <img
              src={entry.image}
              alt={entry.title}
              className="h-full w-full object-cover object-center md:object-top brightness-[0.5] contrast-125"
            />
            <div
              className={`absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r ${entry.bgGradient} via-[#020202]/90 to-[#020202] md:to-transparent`}
            />
          </div>
        ))}

        <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 md:gap-12 items-center">
            <div className="lg:col-span-8 space-y-6 md:space-y-8 animate-reveal-text">
              <div className="flex items-center gap-3 animate-slide-right opacity-0 [animation-delay:200ms] [animation-fill-mode:forwards]">
                <span className="p-1.5 bg-primary/10 border border-primary/20 rounded-md">
                  <Terminal size={14} className="text-primary animate-pulse" />
                </span>
                <span className="font-mono text-[10px] md:text-xs tracking-[0.2em] md:tracking-[0.4em] text-primary font-black uppercase">
                  CORE_SYNC: {activeHero.code}
                </span>
              </div>

              <div className="space-y-1">
                <h2
                  className={`font-oswald text-lg md:text-3xl font-bold uppercase tracking-[0.3em] ${activeHero.color} animate-slide-up opacity-0 [animation-delay:400ms] [animation-fill-mode:forwards]`}
                >
                  {activeHero.franchise}
                </h2>
                <h1 className="font-oswald text-5xl sm:text-7xl md:text-[9rem] font-black italic tracking-tighter text-white leading-[0.85] animate-glitch-in opacity-0 [animation-delay:600ms] [animation-fill-mode:forwards]">
                  {activeHero.logo}
                </h1>
              </div>

              <div className="flex flex-wrap items-center gap-4 md:gap-6 animate-fade-in opacity-0 [animation-delay:800ms] [animation-fill-mode:forwards]">
                <div className="flex gap-2">
                  <Badge className="bg-white text-black font-black px-3 py-1 rounded-none text-xs">
                    {activeHero.year}
                  </Badge>
                  <Badge
                    variant="outline"
                    className={`border ${activeHero.border} text-white font-mono rounded-none text-[10px]`}
                  >
                    ARCHIVE_STABLE
                  </Badge>
                </div>
              </div>

              <p className="text-sm md:text-xl text-zinc-300 border-l-2 border-primary pl-4 md:pl-8 max-w-2xl font-light italic animate-slide-right opacity-0 [animation-delay:1000ms] [animation-fill-mode:forwards]">
                "{activeHero.desc}"
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in opacity-0 [animation-delay:1200ms] [animation-fill-mode:forwards]">
                <Link
                  href={`/genre/${
                    activeHero.id.includes("gokai")
                      ? "super-sentai"
                      : "kamen-rider"
                  }`}
                  className="w-full sm:w-auto"
                >
                  <Button
                    className={`${activeHero.accent} w-full h-14 md:h-16 px-8 rounded-none clip-angle text-black font-black uppercase tracking-widest group transition-all duration-300 hover:scale-110 hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] active:scale-95`}
                  >
                    <Database className="mr-2 h-4 w-4 group-hover:rotate-12" />
                    Initialize Core
                  </Button>
                </Link>
                <div className="flex gap-2 w-full sm:w-auto">
                  <Button
                    variant="outline"
                    className="flex-1 sm:w-auto h-14 md:h-16 px-6 border-white/10 bg-white/5 text-white rounded-none clip-angle transition-all hover:bg-white/10 active:scale-95"
                  >
                    Historical_Log
                  </Button>
                  <Button
                    variant="outline"
                    onClick={handleShare}
                    className="h-14 md:h-16 px-4 border-white/10 bg-white/5 text-white rounded-none clip-angle transition-all active:scale-95 hover:bg-primary hover:text-black"
                  >
                    {shared ? <Check size={18} /> : <Share2 size={18} />}
                  </Button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-center items-center lg:items-end animate-slide-left opacity-0 [animation-delay:1400ms] [animation-fill-mode:forwards]">
              <div className="w-full max-w-sm lg:max-w-[320px] bg-black/60 backdrop-blur-2xl border border-white/10 p-6 md:p-8 clip-angle relative overflow-hidden group shadow-2xl transition-all duration-500 hover:border-primary/50">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-primary/50 animate-scan-line" />
                <div className="flex justify-between items-start mb-8">
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

                <div className="space-y-8">
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
                      <div className="flex justify-between text-[9px] font-mono text-zinc-400 mb-2 uppercase">
                        <span className="flex items-center gap-2">
                          {stat.icon} {stat.label}
                        </span>
                        <span className={activeHero.color}>{stat.val}</span>
                      </div>
                      <div className="h-[2px] w-full bg-white/5">
                        <div
                          className={`h-full ${activeHero.accent} animate-grow-bar shadow-[0_0_10px_rgba(255,255,255,0.5)]`}
                          style={{ width: stat.p }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-[#050505] py-24 md:py-40">
        <div className="container mx-auto px-6">
          <h2 className="font-oswald text-5xl md:text-8xl font-black text-white uppercase italic mb-20 animate-slide-up">
            ARCHIVE <span className="text-primary">CORES</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {franchises.map((f, i) => (
              <Link
                href={`/genre/${f.id}`}
                key={f.id}
                className="group relative aspect-[4/5] overflow-hidden border border-white/5 rounded-3xl transition-all duration-700 hover:border-primary hover:scale-[1.02] active:scale-95"
              >
                <img
                  src={f.img}
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 opacity-40 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-transparent to-transparent" />
                <div className="absolute inset-0 p-10 flex flex-col justify-end">
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-black/90 border border-white/10 ${f.color} group-hover:bg-primary group-hover:text-black transition-all duration-500 group-hover:rotate-[360deg]`}
                  >
                    {f.icon}
                  </div>
                  <h3 className="font-oswald text-4xl font-bold text-white uppercase italic mt-4">
                    {f.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <footer className="relative bg-[#020202] py-16 border-t border-white/5 text-center font-mono text-[10px] text-primary tracking-[0.4em] uppercase">
        TokuUniverse_Active_System
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
        @keyframes slide-right {
          from {
            transform: translateX(-50px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes slide-up {
          from {
            transform: translateY(50px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        @keyframes slide-left {
          from {
            transform: translateX(50px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes grow-bar {
          from {
            width: 0%;
          }
        }
        @keyframes scan-line {
          0% {
            top: 0%;
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            top: 100%;
            opacity: 0;
          }
        }
        @keyframes glitch {
          0% {
            transform: translate(0);
          }
          20% {
            transform: translate(-2px, 2px);
          }
          40% {
            transform: translate(-2px, -2px);
          }
          60% {
            transform: translate(2px, 2px);
          }
          80% {
            transform: translate(2px, -2px);
          }
          100% {
            transform: translate(0);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
        .animate-slide-right {
          animation: slide-right 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-slide-up {
          animation: slide-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-slide-left {
          animation: slide-left 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-fade-in {
          animation: fade-in 1.2s ease-out forwards;
        }
        .animate-grow-bar {
          animation: grow-bar 2s cubic-bezier(0.65, 0, 0.35, 1) forwards;
        }
        .animate-scan-line {
          animation: scan-line 3s linear infinite;
        }
        .animate-glitch-in {
          animation: slide-up 0.8s ease-out forwards, glitch 0.3s 0.8s infinite;
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
