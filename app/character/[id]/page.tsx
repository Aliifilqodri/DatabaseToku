"use client";

import { useState, useEffect, use } from "react";
import { Navbar } from "@/components/navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  User,
  Shield,
  Zap,
  Quote,
  Star,
  MapPin,
  Target,
  Layers,
  ImageIcon,
} from "lucide-react";
import Link from "next/link";

type CharacterData = {
  id: string;
  name: string;
  rangerName: string;
  series: string;
  color: string;
  themeColor: string;
  image: string;
  actor: string;
  bounty: string;
  quote: string;
  homeworld: string;
  firstAppearance: string;
  lastAppearance: string;
  bio: string;
  history: string;
  forms: string[];
  arsenal: string[];
  mecha: { name: string; image: string }[];
  trivia: string[];
  gallery: { image: string; description: string }[];
};

const characterDatabase: Record<string, CharacterData> = {
  "gokai-red": {
    id: "gokai-red",
    name: "Captain Marvelous",
    rangerName: "Gokai Red",
    series: "Kaizoku Sentai Gokaiger",
    color: "Red",
    themeColor:
      "text-red-600 border-red-600 selection:bg-red-600 selection:text-white",
    image: "/sentai/marvelous/Captain_Marvelous.webp",
    actor: "Ryota Ozawa",
    bounty: "Unlimited (∞)",
    quote: "Let's make it showy!",
    homeworld: "Unknown Planet",
    firstAppearance: "Gokaiger Ep. 1",
    lastAppearance: "Ten Gokaiger",
    bio: "Kapten muda dari Bajak Laut Gokaiger. Mantan anggota Bajak Laut Merah yang mewarisi Ranger Key dari AkaRed. Dia terlihat arogan dan sembrono, tetapi sangat peduli pada krunya dan memiliki keinginan kuat untuk menemukan Harta Karun Terbesar di Alam Semesta.",
    history: `<p><strong>Masa Lalu:</strong> Marvelous diselamatkan oleh AkaRed saat planet asalnya dihancurkan Zangyack. Dia belajar arti menjadi bajak laut sejati dari AkaRed.</p><br/><p><strong>Perjalanan:</strong> Setelah AkaRed mengorbankan diri, Marvelous mengumpulkan kru baru (Joe, Luka, Doc, Ahim) dan berkeliling alam semesta mencari Harta Karun Terbesar.</p>`,
    forms: ["Normal", "Gold Mode (Armor)", "Cross Armor Mode"],
    arsenal: ["Mobilate", "Gokai Saber", "Gokai Gun", "Ranger Keys"],
    mecha: [
      {
        name: "Gokai Galleon",
        image: "/sentai/marvelous/KSG-GokaiGalleon.webp",
      },
    ],
    trivia: [
      "Suka sekali makan kari.",
      "Benci melakukan hal yang membosankan.",
      "Bountynya tidak terbatas.",
    ],
    gallery: [
      {
        image: "/sentai/marvelous/Captain_Marvelous_29.webp",
        description: "Marvelous di Movie SSSB",
      },
      {
        image: "/sentai/marvelous/Marvelous_in_KingOhger_In_Space.webp",
        description: "Marvelous in KingOhger In Space",
      },
    ],
  },
  "gokai-blue": {
    id: "gokai-blue",
    name: "Joe Gibken",
    rangerName: "Gokai Blue",
    series: "Kaizoku Sentai Gokaiger",
    color: "Blue",
    themeColor:
      "text-blue-500 border-blue-500 selection:bg-blue-500 selection:text-white",
    image: "/sentai/joe/Joe_Gibken.webp",
    actor: "Yuki Yamada",
    bounty: "Z=8,000,000",
    quote: "Aku akan menebas apapun yang menghalangi jalanku.",
    homeworld: "Unknown",
    firstAppearance: "Gokaiger Ep. 1",
    lastAppearance: "Ten Gokaiger",
    bio: "Wakil kapten yang tenang dan ahli pedang. Joe adalah mantan prajurit elit Zangyack yang membelot karena menolak membunuh warga sipil. Dia sangat setia kepada Marvelous yang menyelamatkannya.",
    history: `<p><strong>Masa Lalu:</strong> Mantan anggota pasukan khusus Zangyack. Dia diajari ilmu pedang oleh seniornya, Sid Bamick.</p><br/><p><strong>Tragedi:</strong> Setelah Sid diubah menjadi cyborg Barizorg, Joe bersumpah untuk menyelamatkan jiwanya atau menghentikannya dengan tangannya sendiri.</p>`,
    forms: ["Normal", "Cross Armor Mode", "5-Sword Style"],
    arsenal: [
      "Mobilate",
      "Gokai Saber (Dual/Multi Wield)",
      "Gokai Gun",
      "Ranger Keys",
    ],
    mecha: [{ name: "Gokai Jet", image: "/sentai/joe/KSG-Gokai_Jet.webp" }],
    trivia: [
      "Bisa menggunakan 5 pedang sekaligus.",
      "Sangat buruk dalam hal memasak kue.",
      "Selalu berlatih push-up di kapal.",
    ],
    gallery: [
      {
        image: "/sentai/joe/Zangyack_Agent_Gibken.webp",
        description: "Joe saat bergabung dnegan pasukan Zangyack.",
      },
    ],
  },
  "luka-millfy": {
    id: "luka-millfy",
    name: "Luka Millfy",
    rangerName: "Gokai Yellow",
    series: "Kaizoku Sentai Gokaiger",
    color: "Yellow",
    themeColor:
      "text-yellow-400 border-yellow-400 selection:bg-yellow-400 selection:text-black",
    image: "/sentai/luka/Luka_Millfy.webp",
    actor: "Mao Ichimichi",
    bounty: "Z=3,000,000",
    quote: "Ay-yi-yi, tempat ini berantakan sekali!",
    homeworld: "Unknown Planet",
    firstAppearance: "Goseiger vs. Shinkenger",
    lastAppearance: "Ten Gokaiger",
    bio: "Luka Millfy adalah pengintai kru yang tomboy dan mencintai uang. Tumbuh dalam kemiskinan ekstrim, dia bertekad untuk membeli 'dunia' agar tidak ada anak-anak yang menderita lagi.",
    history: `<p><strong>Masa Kecil:</strong> Kehilangan adiknya Lia karena penyakit dan kemiskinan. Dia bertahan hidup sebagai pencuri.</p><br/><p><strong>Pertemuan:</strong> Bertemu Marvelous dan Joe saat mencoba mencuri dari gudang Zangyack yang sama.</p>`,
    forms: ["Normal", "Cross Armor Mode", "Gokai Christmas"],
    arsenal: [
      "Mobilate",
      "Gokai Saber",
      "Gokai Gun",
      "Ranger Keys",
      "Wire Hook",
    ],
    mecha: [
      { name: "Gokai Trailer", image: "/sentai/luka/KSG-Gokai_Trailer.webp" },
    ],
    trivia: [
      "Benci Brokoli.",
      "Sering meminjamkan uang dengan bunga tinggi ke Doc.",
      "Ahli menyamar.",
    ],
    gallery: [
      {
        image: "/sentai/luka/Luka_Millfy.webp",
        description: "Potret resmi Luka Millfy.",
      },
      {
        image: "/sentai/luka/Luka_Millfy_29.webp",
        description: "Senyum kemenangan Luka.",
      },
      {
        image: "/sentai/luka/Gaisoulg_29_Profile.webp",
        description: "Luka didalam tubuh Gaisoulg.",
      },
      {
        image: "/sentai/luka/Luka_and_Raptor.webp",
        description: "Cameo Luka di Movie Kyuranger vs Space Squad.",
      },
    ],
  },
  "gokai-green": {
    id: "gokai-green",
    name: "Don Dogoier (Doc)",
    rangerName: "Gokai Green",
    series: "Kaizoku Sentai Gokaiger",
    color: "Green",
    themeColor:
      "text-green-500 border-green-500 selection:bg-green-500 selection:text-white",
    image: "/sentai/don/Don_Dogoier.webp",
    actor: "Kazuki Shimizu",
    bounty: "Z=300,000",
    quote: "A-aku akan melakukan yang terbaik!",
    homeworld: "Unknown",
    firstAppearance: "Gokaiger Ep. 1",
    lastAppearance: "Ten Gokaiger",
    bio: "Juru masak dan teknisi kapal yang cerdas namun penakut. Dia dijuluki 'Doc' oleh Marvelous. Meskipun sering panik, dia ahli dalam strategi dan perbaikan peralatan.",
    history: `<p><strong>Bergabung:</strong> Marvelous merekrutnya karena dia butuh seseorang untuk bersih-bersih dan memasak, bukan karena kemampuan bertarungnya.</p><br/><p><strong>Gaya Bertarung:</strong> Doc bertarung dengan gaya akrobatik yang konyol dan sering kali tidak sengaja mengalahkan musuh karena keberuntungan atau kepanikan.</p>`,
    forms: ["Normal", "Cross Armor Mode", "Gokai Christmas"],
    arsenal: [
      "Mobilate",
      "Gokai Gun (Dual Wield)",
      "Gokai Saber",
      "Ranger Keys",
      "Laptop",
    ],
    mecha: [{ name: "Gokai Racer", image: "/sentai/don/KSG-Gokai_Racer.webp" }],
    trivia: [
      "Bounty terendah di tim.",
      "Sering jadi bahan lelucon.",
      "Koki yang sangat handal.",
    ],
    gallery: [
      {
        image: "/sentai/don/Don_Dogoier_29.webp",
        description: "Ekspresi panik Doc.",
      },
    ],
  },
  "gokai-pink": {
    id: "gokai-pink",
    name: "Ahim de Famille",
    rangerName: "Gokai Pink",
    series: "Kaizoku Sentai Gokaiger",
    color: "Pink",
    themeColor:
      "text-pink-400 border-pink-400 selection:bg-pink-400 selection:text-white",
    image: "/sentai/ahim/ahim.png",
    actor: "Yui Koike",
    bounty: "Z=4,000,000",
    quote: "Saya akan bertarung dengan anggun.",
    homeworld: "Famille",
    firstAppearance: "Gokaiger Ep. 1",
    lastAppearance: "Ten Gokaiger",
    bio: "Putri dari Planet Famille yang dihancurkan Zangyack. Dia bergabung dengan Gokaiger untuk menjadi simbol harapan bagi rakyatnya yang selamat. Sopan, anggun, namun mematikan.",
    history: `<p><strong>Latar Belakang:</strong> Dia meminta Marvelous untuk membiarkannya bergabung agar wajahnya terpampang di poster buronan, sehingga rakyatnya tahu dia masih hidup dan berjuang.</p><br/><p><strong>Keahlian:</strong> Ahim sering menggunakan dua pistol (Gokai Gun) dalam pertempuran jarak jauh dengan gaya yang elegan.</p>`,
    forms: ["Normal", "Cross Armor Mode"],
    arsenal: ["Mobilate", "Gokai Gun (Dual Wield)", "Ranger Keys"],
    mecha: [
      { name: "Gokai Marine", image: "/sentai/ahim/KSG-Gokai_Marine.webp" },
    ],
    trivia: [
      "Sangat suka teh.",
      "Sering mendamaikan pertengkaran kru.",
      "Putri asli.",
    ],
    gallery: [
      {
        image: "/sentai/ahim/pinkahim.jpg",
        description: "Ahim Menjadi Abare Pink.",
      },
    ],
  },
  "gokai-silver": {
    id: "gokai-silver",
    name: "Gai Ikari",
    rangerName: "Gokai Silver",
    series: "Kaizoku Sentai Gokaiger",
    color: "Silver",
    themeColor:
      "text-gray-300 border-gray-300 selection:bg-gray-300 selection:text-black",
    image: "/sentai/gai/Gai_Ikari.webp",
    actor: "Junya Ikeda",
    bounty: "Z=300,000",
    quote: "Gokaaaaai Silver!",
    homeworld: "Earth",
    firstAppearance: "Gokaiger Ep. 17",
    lastAppearance: "Ten Gokaiger",
    bio: "Satu-satunya manusia Bumi di tim. Gai adalah superfan Super Sentai yang mendapatkan kekuatannya dari semangat para ranger terdahulu setelah menyelamatkan seorang gadis dari kecelakaan.",
    history: `<p><strong>Asal Usul:</strong> Dalam koma setelah kecelakaan, dia ditemui oleh tiga hantu ranger ke-6 yang memberinya Gokai Cellular dan Ranger Key.</p><br/><p><strong>Peran:</strong> Ensiklopedia berjalan bagi tim. Dia yang menjelaskan sejarah Super Sentai kepada kru bajak laut yang tidak tahu apa-apa.</p>`,
    forms: ["Normal", "Gold Mode", "Cross Armor Mode"],
    arsenal: ["Gokai Cellular", "Gokai Spear", "Ranger Keys"],
    mecha: [{ name: "GoZyuDrill", image: "/sentai/gai/KSG-GozyuDrill.webp" }],
    trivia: [
      "Bisa menggabungkan Ranger Key menjadi Anchor Key.",
      "Pencipta Gold Mode.",
      "Sangat hiperaktif.",
    ],
    gallery: [
      {
        image: "/sentai/gai/Gai_and_Misao.webp",
        description: "Gai saat bertemu Misao.",
      },
    ],
  },
};

export default function CharacterProfilePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const [data, setData] = useState<CharacterData | null>(null);
  const [activeTab, setActiveTab] = useState("profile");

  useEffect(() => {
    if (id && characterDatabase[id]) {
      setData(characterDatabase[id]);
    } else {
      setData(characterDatabase["luka-millfy"]);
    }
  }, [id]);

  if (!data)
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-white font-mono">
        ACCESSING ARCHIVES...
      </div>
    );

  const glowColor =
    {
      Yellow: "rgba(250, 204, 21, 0.5)",
      Red: "rgba(220, 38, 38, 0.5)",
      Blue: "rgba(59, 130, 246, 0.5)",
      Green: "rgba(34, 197, 94, 0.5)",
      Pink: "rgba(244, 114, 182, 0.5)",
      Silver: "rgba(209, 213, 219, 0.5)",
    }[data.color] || "rgba(255, 255, 255, 0.5)";

  return (
    <div
      className={`min-h-screen bg-[#050505] text-white font-sans ${
        data.themeColor.split(" ")[2]
      }`}
    >
      <Navbar />

      <div className="relative w-full pt-20 pb-8 px-4 sm:px-6 md:px-12 lg:px-20 overflow-hidden border-b border-white/10">
        <div
          className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-current opacity-10 pointer-events-none"
          style={{ color: glowColor.replace("0.5", "1") }}
        />
        <div
          className="absolute -left-20 top-20 w-96 h-96 blur-[120px] rounded-full pointer-events-none"
          style={{ backgroundColor: glowColor }}
        />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8 md:gap-12 items-end">
          <div className="relative aspect-[3/4] lg:aspect-square rounded-xl md:rounded-2xl overflow-hidden border border-white/10 bg-zinc-900 shadow-2xl animate-in fade-in slide-in-from-left duration-700">
            <img
              src={data.image}
              alt={data.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6">
              <Badge className="mb-2 md:mb-3 bg-white/90 text-black hover:bg-white font-bold uppercase tracking-wider text-xs md:text-sm">
                {data.series}
              </Badge>
              <h1 className="font-oswald text-4xl sm:text-5xl lg:text-6xl font-black uppercase italic tracking-tighter leading-none mb-1 text-white drop-shadow-lg">
                {data.rangerName}
              </h1>
              <p className="text-lg md:text-xl font-medium text-gray-300 font-mono">
                {data.name}
              </p>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6 md:space-y-8 animate-in fade-in slide-in-from-bottom duration-700 delay-200">
            <div
              className="glass-panel p-6 md:p-8 rounded-xl border-l-4 border-current relative overflow-hidden"
              style={{ borderColor: glowColor.replace("0.5", "1") }}
            >
              <Quote
                size={32}
                className={`absolute top-4 right-4 opacity-20 md:w-10 md:h-10 ${
                  data.themeColor.split(" ")[0]
                }`}
              />
              <p className="text-xl md:text-3xl font-oswald font-medium italic text-gray-100 leading-tight pr-8">
                "{data.quote}"
              </p>
              <div className="flex flex-wrap gap-3 md:gap-4 mt-4 md:mt-6">
                <Badge
                  variant="outline"
                  className="text-gray-400 border-white/20 py-1 px-2 md:px-3 uppercase text-[10px] md:text-xs tracking-widest"
                >
                  First: {data.firstAppearance.split(":")[0]}
                </Badge>
                <Badge
                  variant="outline"
                  className="text-gray-400 border-white/20 py-1 px-2 md:px-3 uppercase text-[10px] md:text-xs tracking-widest"
                >
                  Status: Active
                </Badge>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4">
              <StatBox
                label="Bounty/Rank"
                value={data.bounty}
                icon={<Target size={12} className="md:w-3.5 md:h-3.5" />}
              />
              <StatBox
                label="Homeworld"
                value={data.homeworld}
                icon={<MapPin size={12} className="md:w-3.5 md:h-3.5" />}
              />
              <StatBox
                label="Portrayer"
                value={data.actor}
                icon={<User size={12} className="md:w-3.5 md:h-3.5" />}
              />
              <StatBox
                label="Color ID"
                value={data.color}
                icon={<Layers size={12} className="md:w-3.5 md:h-3.5" />}
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2">
              <Link href="/characters" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  className="h-10 md:h-12 w-full border-white/20 bg-white/5 hover:bg-white/10 text-gray-200 uppercase tracking-wider font-bold text-sm md:text-base"
                >
                  <ArrowLeft className="mr-2 h-4 w-4 md:h-[18px] md:w-[18px]" />{" "}
                  Database
                </Button>
              </Link>
              <Button className="h-10 md:h-12 w-full sm:w-auto text-black font-bold uppercase tracking-wider bg-white hover:bg-gray-200 text-sm md:text-base">
                Download Dossier
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-8 md:py-12">
        <div className="flex gap-4 md:gap-8 border-b border-white/10 mb-8 md:mb-10 overflow-x-auto scrollbar-hide pb-2 md:pb-0">
          {["profile", "history", "arsenal", "gallery", "trivia"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 md:pb-4 text-sm md:text-lg font-oswald font-bold uppercase tracking-widest transition-all whitespace-nowrap px-2 ${
                activeTab === tab
                  ? `border-b-4 ${
                      data.themeColor.split(" ")[1]
                    } text-white scale-105`
                  : "text-gray-500 hover:text-gray-300 border-transparent"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="min-h-[300px] md:min-h-[400px] animate-in fade-in duration-500">
          {activeTab === "profile" && (
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              <div className="md:col-span-2">
                <h3 className="text-xl md:text-2xl font-oswald uppercase text-white mb-4 md:mb-6 flex items-center gap-2">
                  <User className="text-gray-400 h-5 w-5 md:h-6 md:w-6" />{" "}
                  Personal Data
                </h3>
                <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6 md:mb-8 font-light">
                  {data.bio}
                </p>
              </div>
              <div className="space-y-6">
                <div className="bg-zinc-900/40 p-5 md:p-6 rounded-xl border border-white/5">
                  <h4 className="text-xs md:text-sm text-gray-500 uppercase font-bold mb-3 md:mb-4">
                    Forms & Modes
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {data.forms.map((form, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="bg-white/10 text-white hover:bg-white/20 py-1 md:py-1.5 text-xs"
                      >
                        {form}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="bg-zinc-900/40 p-5 md:p-6 rounded-xl border border-white/5">
                  <h4 className="text-xs md:text-sm text-gray-500 uppercase font-bold mb-3 md:mb-4">
                    Abilities
                  </h4>
                  <div className="space-y-3 md:space-y-4 font-mono text-[10px] md:text-xs">
                    <SkillBar
                      label="Agility"
                      percent={90}
                      color={data.themeColor
                        .split(" ")[0]
                        .replace("text-", "bg-")}
                    />
                    <SkillBar label="Combat" percent={85} color="bg-blue-500" />
                    <SkillBar
                      label="Spirit"
                      percent={100}
                      color="bg-orange-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "history" && (
            <div className="max-w-4xl">
              <div className="bg-zinc-900/30 p-6 md:p-8 rounded-xl border-l-2 border-white/10">
                <div
                  className="text-gray-300 leading-relaxed text-base md:text-lg space-y-4 md:space-y-6 font-light"
                  dangerouslySetInnerHTML={{ __html: data.history }}
                />
              </div>
            </div>
          )}

          {activeTab === "arsenal" && (
            <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
              <div className="bg-zinc-900/30 p-6 md:p-8 rounded-xl border border-white/5">
                <h3 className="text-lg md:text-xl font-oswald uppercase text-white mb-4 md:mb-6 flex items-center gap-2">
                  <Zap className="text-yellow-400 h-4 w-4 md:h-5 md:w-5" />{" "}
                  Arsenal
                </h3>
                <ul className="space-y-3 md:space-y-4">
                  {data.arsenal.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 md:gap-4 text-gray-300 text-sm md:text-base"
                    >
                      <div
                        className={`h-1.5 w-1.5 rounded-full ${data.themeColor
                          .split(" ")[0]
                          .replace("text-", "bg-")}`}
                      />
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-zinc-900/30 p-6 md:p-8 rounded-xl border border-white/5">
                <h3 className="text-lg md:text-xl font-oswald uppercase text-white mb-4 md:mb-6 flex items-center gap-2">
                  <Shield className="text-blue-400 h-4 w-4 md:h-5 md:w-5" />{" "}
                  Mecha Units
                </h3>
                {data.mecha.map((mech, i) => (
                  <div
                    key={i}
                    className="mb-4 md:mb-6 last:mb-0 group cursor-pointer"
                  >
                    <div className="aspect-video bg-black rounded-lg overflow-hidden relative mb-2 border border-white/5 group-hover:border-white/20 transition-all">
                      <img
                        src={mech.image}
                        alt={mech.name}
                        className="w-full h-full object-contain p-2 opacity-90 group-hover:opacity-100 transition-opacity"
                      />
                      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-black/50 to-transparent p-2 md:p-3">
                        <span className="text-lg md:text-xl font-oswald uppercase tracking-widest text-white">
                          {mech.name}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "gallery" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {data.gallery.length > 0 ? (
                data.gallery.map((item, idx) => (
                  <div
                    key={idx}
                    className="group relative bg-zinc-900 border border-white/10 rounded-xl overflow-hidden hover:border-white transition-all duration-300"
                  >
                    <div className="aspect-[4/3] bg-black overflow-hidden">
                      <img
                        src={item.image}
                        alt={`Gallery ${idx}`}
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                      />
                    </div>
                    <div className="p-3 md:p-4 bg-zinc-900/90 absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 border-t border-white/10">
                      <p className="text-xs md:text-sm text-gray-300 font-medium leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                    <div className="absolute top-3 right-3 bg-black/50 p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                      <ImageIcon
                        size={14}
                        className="text-white md:w-4 md:h-4"
                      />
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full text-center py-16 md:py-20 text-gray-500">
                  <ImageIcon className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-3 opacity-20" />
                  <p>No images available in database.</p>
                </div>
              )}
            </div>
          )}

          {activeTab === "trivia" && (
            <div className="grid sm:grid-cols-2 gap-3 md:gap-4">
              {data.trivia.map((fact, i) => (
                <div
                  key={i}
                  className="flex gap-3 md:gap-4 p-4 md:p-5 bg-zinc-900/50 rounded-xl border border-white/5 hover:border-white/20 transition-all"
                >
                  <div className="flex-shrink-0 mt-1">
                    <Star
                      size={16}
                      className="text-yellow-400 md:w-[18px] md:h-[18px]"
                    />
                  </div>
                  <p className="text-gray-300 text-sm md:text-lg">{fact}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function StatBox({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon: any;
}) {
  return (
    <div className="p-3 md:p-4 bg-zinc-900/80 border border-white/5 rounded-lg hover:border-white/20 transition-colors backdrop-blur-sm">
      <div className="flex items-center gap-2 text-gray-500 mb-1 md:mb-2 text-[8px] md:text-[10px] uppercase font-bold tracking-widest">
        {icon} {label}
      </div>
      <div
        className="font-oswald text-sm md:text-lg text-white truncate font-medium"
        title={value}
      >
        {value}
      </div>
    </div>
  );
}

function SkillBar({
  label,
  percent,
  color,
}: {
  label: string;
  percent: number;
  color: string;
}) {
  return (
    <div>
      <div className="flex justify-between mb-1 text-[10px] md:text-xs font-bold tracking-wider">
        <span className="text-gray-500 uppercase">{label}</span>
        <span className="text-white">{percent}%</span>
      </div>
      <div className="h-1 md:h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
        <div
          className={`h-full ${color} rounded-full`}
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
