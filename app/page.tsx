"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Layers, Sword, Zap, Activity, Target } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  const { t, lang } = useLanguage();
  const [current, setCurrent] = useState(0);

  const heroEntries = [
    {
      id: "gokai-red",
      title: "GOKAI RED",
      subtitle: t("CAPTAIN MARVELOUS", "KAPTEN MARVELOUS"),
      desc: t(
        "A fearless pirate captain who leads his crew with wild instincts. He travels across the galaxy in search of the Greatest Treasure in the Universe.",
        "Seorang kapten bajak laut pemberani yang memimpin krunya dengan insting liar. Dia menjelajahi galaksi untuk mencari Harta Karun Terbesar di Alam Semesta."
      ),
      image: "/sentai/marvelous/Captain_Marvelous.webp",
      logo: "MARVELOUS",
      bounty: t("UNLIMITED", "TAK TERBATAS"),
      color: "text-red-600",
      bgGradient: "from-red-900/50 to-transparent",
      stats: {
        punch: "5.0 t",
        kick: "10.0 t",
        height: "185 cm",
        weight: "75 kg",
      },
      year: "2011",
      motif: t("Captain", "Kapten"),
    },
    {
      id: "joe-gibken",
      title: "GOKAI BLUE",
      subtitle: "JOE GIBKEN",
      desc: t(
        "The calm and collected first mate and master swordsman. A former Zangyack elite who swore loyalty to Marvelous after being rescued by him.",
        "Wakil kapten yang tenang dan ahli pedang tingkat tinggi. Mantan elit Zangyack yang bersumpah setia kepada Marvelous setelah diselamatkan olehnya."
      ),
      image: "/sentai/joe/Joe_Gibken.webp",
      logo: "JOE",
      bounty: "Z=8,000,000",
      color: "text-blue-500",
      bgGradient: "from-blue-900/50 to-transparent",
      stats: {
        punch: "4.5 t",
        kick: "9.0 t",
        height: "180 cm",
        weight: "70 kg",
      },
      year: "2011",
      motif: t("Swordsman", "Pendekar Pedang"),
    },
    {
      id: "luka-millfy",
      title: "GOKAI YELLOW",
      subtitle: "LUKA MILLFY",
      desc: t(
        "The crew's lookout with a sharp eye for treasure. Despite her tough exterior and love for money, she fights to protect children from poverty.",
        "Pengintai kru dengan mata tajam untuk harta karun. Meskipun terlihat tangguh dan menyukai uang, dia bertarung untuk melindungi anak-anak dari kemiskinan."
      ),
      image: "/sentai/luka/Luka_Millfy.webp",
      logo: "LUKA",
      bounty: "Z=3,000,000",
      color: "text-yellow-400",
      bgGradient: "from-yellow-900/50 to-transparent",
      stats: {
        punch: "4.0 t",
        kick: "8.5 t",
        height: "165 cm",
        weight: "55 kg",
      },
      year: "2011",
      motif: t("Lookout", "Pengintai"),
    },
    {
      id: "gokai-silver",
      title: "GOKAI SILVER",
      subtitle: "GAI IKARI",
      desc: t(
        "The only Earthling on the team. A Super Sentai superfan who gained his powers through the burning spirit of past legendary heroes.",
        "Satu-satunya penduduk Bumi di tim. Seorang penggemar berat Super Sentai yang mendapatkan kekuatannya melalui semangat membara dari para pahlawan legendaris masa lalu."
      ),
      image: "/sentai/gai/Gai_Ikari.webp",
      logo: "GAI",
      bounty: "Z=300,000",
      color: "text-gray-300",
      bgGradient: "from-gray-800/50 to-transparent",
      stats: {
        punch: "5.5 t",
        kick: "10.5 t",
        height: "178 cm",
        weight: "72 kg",
      },
      year: "2011",
      motif: t("Fanboy", "Penggemar Berat"),
    },
  ];

  const crewMembers = [
    {
      id: "gokai-red",
      name: "Marvelous",
      role: t("Captain", "Kapten"),
      image: "/sentai/marvelous/Gokai_Red_Rollcall_2.webp",
      color: "text-red-500 border-red-500",
    },
    {
      id: "gokai-blue",
      name: "Joe Gibken",
      role: t("First Mate", "Wakil Kapten"),
      image: "/sentai/joe/Gokai_Blue_Rollcall_2.webp",
      color: "text-blue-500 border-blue-500",
    },
    {
      id: "luka-millfy",
      name: "Luka Millfy",
      role: t("Lookout", "Pengintai"),
      image: "/sentai/luka/luka-ranger.webp",
      color: "text-yellow-400 border-yellow-400",
    },
    {
      id: "gokai-green",
      name: "Don Dogoier",
      role: t("Doctor/Cook", "Dokter/Koki"),
      image: "/sentai/don/Gokai_Green_Rollcall_2.webp",
      color: "text-green-500 border-green-500",
    },
    {
      id: "gokai-pink",
      name: "Ahim de Famille",
      role: t("Princess", "Putri Kerajaan"),
      image: "/sentai/ahim/pink.jpg",
      color: "text-pink-400 border-pink-400",
    },
    {
      id: "gokai-silver",
      name: "Gai Ikari",
      role: t("6th Hero", "Pahlawan ke-6"),
      image: "/sentai/gai/Gokai_Silver_Rollcall_2.webp",
      color: "text-gray-300 border-gray-300",
    },
  ];

  const mechaUnits = [
    {
      id: "galleon",
      name: "Gokai Galleon",
      pilot: t("Red", "Merah"),
      image: "/sentai/marvelous/KSG-GokaiGalleon.webp",
    },
    {
      id: "jet",
      name: "Gokai Jet",
      pilot: t("Blue", "Biru"),
      image: "/sentai/joe/KSG-Gokai_Jet.webp",
    },
    {
      id: "trailer",
      name: "Gokai Trailer",
      pilot: t("Yellow", "Kuning"),
      image: "/sentai/luka/KSG-Gokai_Trailer.webp",
    },
    {
      id: "racer",
      name: "Gokai Racer",
      pilot: t("Green", "Hijau"),
      image: "/sentai/don/KSG-Gokai_Racer.webp",
    },
    {
      id: "marine",
      name: "Gokai Marine",
      pilot: t("Pink", "Merah Muda"),
      image: "/sentai/ahim/KSG-Gokai_Marine.webp",
    },
    {
      id: "drill",
      name: "GoZyu Drill",
      pilot: t("Silver", "Perak"),
      image: "/sentai/gai/KSG-GozyuDrill.webp",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === heroEntries.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, [heroEntries.length]);

  const activeHero = heroEntries[current];

  return (
    <div className="min-h-screen bg-[#050505] font-sans selection:bg-primary selection:text-white overflow-x-hidden">
      <Navbar />

      <div className="relative h-screen w-full overflow-hidden">
        {heroEntries.map((entry, idx) => (
          <div
            key={entry.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <img
              src={entry.image}
              alt={entry.title}
              className="h-full w-full object-cover object-top brightness-[0.6]"
            />
            <div
              className={`absolute inset-0 bg-gradient-to-r ${entry.bgGradient} via-[#050505]/60 to-[#050505]/90 md:to-transparent`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
          </div>
        ))}

        <div className="relative z-20 h-full flex items-center px-6 sm:px-12 lg:px-20 pt-20 md:pt-16">
          <div className="grid w-full grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-4 md:space-y-6">
              <div className="inline-flex items-center gap-3 border border-white/20 bg-black/40 backdrop-blur-md px-3 py-1 md:px-4 md:py-1.5 rounded-full text-[10px] md:text-xs font-mono tracking-widest uppercase text-white">
                <span
                  className={`w-2 h-2 rounded-full ${activeHero.color.replace(
                    "text-",
                    "bg-"
                  )} animate-pulse`}
                />
                {t("WANTED", "BURONAN")}: {activeHero.bounty}
              </div>

              <div>
                <h2
                  className={`font-oswald text-xl md:text-3xl font-bold uppercase tracking-[0.2em] mb-1 md:mb-2 ${activeHero.color}`}
                >
                  {activeHero.subtitle}
                </h2>
                <h1 className="font-oswald text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black italic tracking-tighter text-white leading-[0.9] drop-shadow-2xl">
                  {activeHero.logo}
                </h1>
              </div>

              <div className="flex gap-2 md:gap-3">
                <Badge className="bg-white text-black font-bold text-xs md:text-sm px-2 md:px-3 rounded-sm">
                  {activeHero.year}
                </Badge>
                <Badge
                  variant="outline"
                  className="text-gray-300 border-gray-500 text-xs md:text-sm px-2 md:px-3 rounded-sm uppercase"
                >
                  {t("Role", "Peran")}: {activeHero.motif}
                </Badge>
              </div>

              <p className="text-sm md:text-lg text-gray-200 border-l-4 border-white/50 pl-4 md:pl-6 py-1 leading-relaxed shadow-black drop-shadow-md line-clamp-3 md:line-clamp-none">
                {activeHero.desc}
              </p>

              <div className="flex flex-wrap gap-3 md:gap-4 pt-2 md:pt-4">
                <Link href={`/character/${activeHero.id}`}>
                  <Button
                    className={`h-12 md:h-14 px-6 md:px-8 font-bold text-sm md:text-lg uppercase tracking-wider rounded-none clip-angle border-none text-white ${activeHero.color.replace(
                      "text-",
                      "bg-"
                    )} hover:brightness-110`}
                  >
                    <BookOpen className="mr-2" size={18} />{" "}
                    {t("View Dossier", "Lihat Dosir")}
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  className="h-12 md:h-14 px-6 md:px-8 border-white/30 bg-white/10 hover:bg-white/20 text-white font-bold text-sm md:text-lg uppercase tracking-wider rounded-none clip-angle backdrop-blur-sm"
                >
                  <Layers className="mr-2" size={18} /> {t("Modes", "Mode")}
                </Button>
              </div>
            </div>

            <div className="hidden lg:flex justify-end">
              <div className="glass-panel w-80 p-6 rounded-xl border border-white/10 relative overflow-hidden">
                <Activity
                  className={`absolute top-6 right-6 ${activeHero.color} animate-pulse`}
                />
                <h3 className="font-oswald text-xl text-white uppercase tracking-widest border-b border-white/10 pb-4 mb-6">
                  {t("Combat Specs", "Spek Tempur")}
                </h3>
                <div className="space-y-6 font-mono text-sm text-gray-300">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="flex items-center gap-2">
                        <Sword size={14} /> {t("Power", "Kekuatan")}
                      </span>
                      <span className={activeHero.color}>
                        {activeHero.stats.punch}
                      </span>
                    </div>
                    <div className="h-1 w-full bg-gray-800 rounded-full">
                      <div
                        className={`h-full ${activeHero.color.replace(
                          "text-",
                          "bg-"
                        )} w-[70%]`}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="flex items-center gap-2">
                        <Zap size={14} /> {t("Speed", "Kecepatan")}
                      </span>
                      <span className={activeHero.color}>
                        {activeHero.stats.kick}
                      </span>
                    </div>
                    <div className="h-1 w-full bg-gray-800 rounded-full">
                      <div
                        className={`h-full ${activeHero.color.replace(
                          "text-",
                          "bg-"
                        )} w-[85%]`}
                      />
                    </div>
                  </div>
                  <div className="pt-4 border-t border-white/10 flex justify-between text-[10px] uppercase">
                    <span>
                      {t("H", "T")}: {activeHero.stats.height}
                    </span>
                    <span>
                      {t("W", "B")}: {activeHero.stats.weight}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-2 md:gap-3 z-30">
          {heroEntries.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-1 md:h-1.5 rounded-full transition-all duration-300 ${
                current === idx
                  ? "w-8 md:w-12 bg-white"
                  : "w-3 md:w-4 bg-white/30 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 bg-[#0a0a0a] pb-20 pt-10">
        <div className="px-6 sm:px-12 lg:px-20 mb-8 md:mb-12">
          <div className="flex items-center gap-4 mb-2">
            <Target className="text-red-600 animate-pulse" />
            <span className="text-red-600 font-mono uppercase tracking-widest text-xs md:text-sm">
              {t("Target Locked", "Target Terkunci")}
            </span>
          </div>
          <h2 className="font-oswald text-3xl md:text-5xl font-bold text-white uppercase">
            {t("The", "Kru")}{" "}
            <span className="text-stroke text-transparent stroke-white">
              Gokaiger
            </span>{" "}
            {t("Crew", "")}
          </h2>
        </div>

        <div className="px-6 sm:px-12 lg:px-20">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {crewMembers.map((crew) => (
              <Link
                href={`/character/${crew.id}`}
                key={crew.id}
                className="group"
              >
                <div
                  className={`relative aspect-[2/3] bg-zinc-900 border border-white/5 rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-${crew.color
                    .split(" ")[0]
                    .replace("text-", "")}/20`}
                >
                  <img
                    src={crew.image}
                    alt={crew.name}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
                  <div className="absolute bottom-0 left-0 w-full p-3 md:p-4 text-center">
                    <p
                      className={`text-[9px] md:text-[10px] uppercase font-bold tracking-widest mb-1 ${
                        crew.color.split(" ")[0]
                      }`}
                    >
                      {crew.role}
                    </p>
                    <h3 className="font-oswald text-lg md:text-xl text-white uppercase leading-none italic group-hover:scale-110 transition-transform">
                      {crew.name}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[#050505] pb-32 border-t border-white/5">
        <div className="px-6 sm:px-12 lg:px-20 py-16">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="font-oswald text-2xl md:text-3xl font-bold text-white uppercase">
                {t("Pirate Machines", "Mesin Bajak Laut")}
              </h2>
              <p className="text-gray-500 text-xs md:text-sm mt-1">
                {t("Primary Assault Vehicles", "Kendaraan Tempur Utama")}
              </p>
            </div>
            <Button
              variant="link"
              className="text-white decoration-transparent uppercase tracking-wider text-xs hidden md:block"
            >
              {t("View Formation", "Lihat Formasi")}
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mechaUnits.map((mech) => (
              <div
                key={mech.id}
                className="group relative bg-zinc-900/50 border border-white/10 rounded-xl overflow-hidden hover:border-white/30 transition-all cursor-pointer"
              >
                <div className="aspect-video bg-black/50 p-4">
                  <img
                    src={mech.image}
                    alt={mech.name}
                    className="w-full h-full object-contain drop-shadow-xl group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 bg-zinc-900 flex justify-between items-center border-t border-white/5">
                  <span className="font-oswald text-lg text-white uppercase tracking-wider">
                    {mech.name}
                  </span>
                  <Badge
                    variant="outline"
                    className="text-xs text-gray-400 border-white/10"
                  >
                    {t("Pilot", "Pilot")}: {mech.pilot}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="px-6 sm:px-12 lg:px-20 py-10 border-t border-white/5 text-[10px] font-mono text-zinc-600 uppercase tracking-[0.2em]">
        {t("SYSTEM_CORE", "INTI_SISTEM")}:{" "}
        {lang === "EN" ? "ENGLISH_DECODED" : "INDONESIA_TERDETEKSI"}
      </div>
    </div>
  );
}
