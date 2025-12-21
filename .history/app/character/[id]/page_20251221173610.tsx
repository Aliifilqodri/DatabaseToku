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

// --- DEFINISI TIPE DATA ---
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

// --- DATABASE KARAKTER LENGKAP (GOKAIGER TEAM) ---
const characterDatabase: Record<string, CharacterData> = {
  // 1. GOKAI RED (Captain Marvelous)
  "gokai-red": {
    id: "gokai-red",
    name: "Captain Marvelous",
    rangerName: "Gokai Red",
    series: "Kaizoku Sentai Gokaiger",
    color: "Red",
    themeColor:
      "text-red-600 border-red-600 selection:bg-red-600 selection:text-white",
    image: "/sentai/marvelous/Captain_Marvelous.webp", // Simpan di: public/sentai/gokaiger/marvelous.webp
    actor: "Ryota Ozawa",
    bounty: "Unlimited (∞)",
    quote: "Let's make it showy!",
    homeworld: "Unknown Planet",
    firstAppearance: "Gokaiger Ep. 1",
    lastAppearance: "Ten Gokaiger",
    bio: "Kapten muda dari Bajak Laut Gokaiger. Mantan anggota Bajak Laut Merah yang mewarisi Ranger Key dari AkaRed. Dia terlihat arogan dan sembrono, tetapi sangat peduli pada krunya dan memiliki keinginan kuat untuk menemukan Harta Karun Terbesar di Alam Semesta.",
    history: `
      <p><strong>Masa Lalu:</strong> Marvelous diselamatkan oleh AkaRed saat planet asalnya dihancurkan Zangyack. Dia belajar arti menjadi bajak laut sejati dari AkaRed.</p>
      <br/>
      <p><strong>Perjalanan:</strong> Setelah AkaRed mengorbankan diri, Marvelous mengumpulkan kru baru (Joe, Luka, Doc, Ahim) dan berkeliling alam semesta mencari Harta Karun Terbesar.</p>
    `,
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

  // 2. GOKAI BLUE (Joe Gibken)
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
    history: `
      <p><strong>Masa Lalu:</strong> Mantan anggota pasukan khusus Zangyack. Dia diajari ilmu pedang oleh seniornya, Sid Bamick.</p>
      <br/>
      <p><strong>Tragedi:</strong> Setelah Sid diubah menjadi cyborg Barizorg, Joe bersumpah untuk menyelamatkan jiwanya atau menghentikannya dengan tangannya sendiri.</p>
    `,
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

  // 3. GOKAI YELLOW (Luka Millfy) - Updated Path
  "luka-millfy": {
    id: "luka-millfy",
    name: "Luka Millfy",
    rangerName: "Gokai Yellow",
    series: "Kaizoku Sentai Gokaiger",
    color: "Yellow",
    themeColor:
      "text-yellow-400 border-yellow-400 selection:bg-yellow-400 selection:text-black",
    image: "/sentai/luka/Luka_Millfy.webp", // Path baru sesuai request
    actor: "Mao Ichimichi",
    bounty: "Z=3,000,000",
    quote: "Ay-yi-yi, tempat ini berantakan sekali!",
    homeworld: "Unknown Planet",
    firstAppearance: "Goseiger vs. Shinkenger",
    lastAppearance: "Ten Gokaiger",
    bio: "Luka Millfy adalah pengintai kru yang tomboy dan mencintai uang. Tumbuh dalam kemiskinan ekstrim, dia bertekad untuk membeli 'dunia' agar tidak ada anak-anak yang menderita lagi.",
    history: `
      <p><strong>Masa Kecil:</strong> Kehilangan adiknya Lia karena penyakit dan kemiskinan. Dia bertahan hidup sebagai pencuri.</p>
      <br/>
      <p><strong>Pertemuan:</strong> Bertemu Marvelous dan Joe saat mencoba mencuri dari gudang Zangyack yang sama.</p>
    `,
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

  // 4. GOKAI GREEN (Don Dogoier / Doc)
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
    history: `
      <p><strong>Bergabung:</strong> Marvelous merekrutnya karena dia butuh seseorang untuk bersih-bersih dan memasak, bukan karena kemampuan bertarungnya.</p>
      <br/>
      <p><strong>Gaya Bertarung:</strong> Doc bertarung dengan gaya akrobatik yang konyol dan sering kali tidak sengaja mengalahkan musuh karena keberuntungan atau kepanikan.</p>
    `,
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
        description: "Ekspresi panik Doc saat bertarung.",
      },
    ],
  },

  // 5. GOKAI PINK (Ahim de Famille)
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
    history: `
      <p><strong>Latar Belakang:</strong> Dia meminta Marvelous untuk membiarkannya bergabung agar wajahnya terpampang di poster buronan, sehingga rakyatnya tahu dia masih hidup dan berjuang.</p>
      <br/>
      <p><strong>Keahlian:</strong> Ahim sering menggunakan dua pistol (Gokai Gun) dalam pertempuran jarak jauh dengan gaya yang elegan.</p>
    `,
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

  // 6. GOKAI SILVER (Gai Ikari)
  "gokai-silver": {
    id: "gokai-silver",
    name: "Gai Ikari",
    rangerName: "Gokai Silver",
    series: "Kaizoku Sentai Gokaiger",
    color: "Silver",
    themeColor:
      "text-gray-300 border-gray-300 selection:bg-gray-300 selection:text-black",
    image: "/sentai/gokaiger/gai.webp",
    actor: "Junya Ikeda",
    bounty: "Z=300,000",
    quote: "Gokaaaaai Silver!",
    homeworld: "Earth",
    firstAppearance: "Gokaiger Ep. 17",
    lastAppearance: "Ten Gokaiger",
    bio: "Satu-satunya manusia Bumi di tim. Gai adalah superfan Super Sentai yang mendapatkan kekuatannya dari semangat para ranger terdahulu (DragonRanger, TimeFire, AbareKiller) setelah menyelamatkan seorang gadis dari kecelakaan.",
    history: `
      <p><strong>Asal Usul:</strong> Dalam koma setelah kecelakaan, dia ditemui oleh tiga hantu ranger ke-6 yang memberinya Gokai Cellular dan Ranger Key.</p>
      <br/>
      <p><strong>Peran:</strong> Ensiklopedia berjalan bagi tim. Dia yang menjelaskan sejarah Super Sentai kepada kru bajak laut yang tidak tahu apa-apa.</p>
    `,
    forms: ["Normal", "Gold Mode", "Cross Armor Mode"],
    arsenal: ["Gokai Cellular", "Gokai Spear", "Ranger Keys"],
    mecha: [{ name: "GoZyuDrill", image: "/sentai/gokaiger/mecha_gozyu.webp" }],
    trivia: [
      "Bisa menggabungkan Ranger Key menjadi Anchor Key.",
      "Pencipta Gold Mode.",
      "Sangat hiperaktif.",
    ],
    gallery: [
      {
        image: "/sentai/gokaiger/gai_transform.jpg",
        description: "Gai saat berubah menjadi Gold Mode.",
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
    // Default ke Luka jika ID tidak ditemukan (sebagai fallback demo)
    const char = characterDatabase[id] || characterDatabase["luka-millfy"];
    setData(char);
  }, [id]);

  if (!data)
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-white">
        Accessing Archives...
      </div>
    );

  // Mengatur warna glow background (Update untuk warna baru)
  const glowColor =
    data.color === "Yellow"
      ? "rgba(250, 204, 21, 0.5)"
      : data.color === "Red"
      ? "rgba(220, 38, 38, 0.5)"
      : data.color === "Blue"
      ? "rgba(59, 130, 246, 0.5)"
      : data.color === "Green"
      ? "rgba(34, 197, 94, 0.5)"
      : data.color === "Pink"
      ? "rgba(244, 114, 182, 0.5)"
      : data.color === "Silver"
      ? "rgba(209, 213, 219, 0.5)"
      : "rgba(255, 255, 255, 0.5)";

  return (
    <div
      className={`min-h-screen bg-[#050505] text-white font-sans ${
        data.themeColor.split(" ")[2]
      }`}
    >
      <Navbar />

      {/* --- HERO SECTION --- */}
      <div className="relative w-full pt-28 pb-12 px-6 sm:px-12 lg:px-20 overflow-hidden border-b border-white/10">
        {/* Background Effects */}
        <div
          className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-current opacity-10 pointer-events-none"
          style={{ color: glowColor.replace("0.5", "1") }}
        />
        <div
          className="absolute -left-20 top-20 w-96 h-96 blur-[120px] rounded-full pointer-events-none"
          style={{ backgroundColor: glowColor }}
        />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12 items-end">
          {/* Avatar Card */}
          <div className="relative aspect-[3/4] lg:aspect-square rounded-2xl overflow-hidden border border-white/10 bg-zinc-900 shadow-2xl animate-in fade-in slide-in-from-left duration-700">
            <img
              src={data.image}
              alt={data.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <Badge className="mb-3 bg-white/90 text-black hover:bg-white font-bold uppercase tracking-wider">
                {data.series}
              </Badge>
              <h1 className="font-oswald text-5xl lg:text-6xl font-black uppercase italic tracking-tighter leading-none mb-1 text-white drop-shadow-lg">
                {data.rangerName}
              </h1>
              <p className="text-xl font-medium text-gray-300 font-mono">
                {data.name}
              </p>
            </div>
          </div>

          {/* Right Stats */}
          <div className="lg:col-span-2 space-y-8 animate-in fade-in slide-in-from-bottom duration-700 delay-200">
            <div
              className="glass-panel p-8 rounded-xl border-l-4 border-current relative overflow-hidden"
              style={{ borderColor: glowColor.replace("0.5", "1") }}
            >
              <Quote
                size={40}
                className={`absolute top-4 right-4 opacity-20 ${
                  data.themeColor.split(" ")[0]
                }`}
              />
              <p className="text-2xl md:text-3xl font-oswald font-medium italic text-gray-100 leading-tight">
                "{data.quote}"
              </p>

              <div className="flex flex-wrap gap-4 mt-6">
                <Badge
                  variant="outline"
                  className="text-gray-400 border-white/20 py-1 px-3 uppercase text-xs tracking-widest"
                >
                  First: {data.firstAppearance.split(":")[0]}
                </Badge>
                <Badge
                  variant="outline"
                  className="text-gray-400 border-white/20 py-1 px-3 uppercase text-xs tracking-widest"
                >
                  Status: Active
                </Badge>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <StatBox
                label="Bounty/Rank"
                value={data.bounty}
                icon={<Target size={14} />}
              />
              <StatBox
                label="Homeworld"
                value={data.homeworld}
                icon={<MapPin size={14} />}
              />
              <StatBox
                label="Portrayer"
                value={data.actor}
                icon={<User size={14} />}
              />
              <StatBox
                label="Color ID"
                value={data.color}
                icon={<Layers size={14} />}
              />
            </div>

            <div className="flex gap-4 pt-2">
              <Link href="/characters">
                <Button
                  variant="outline"
                  className="h-12 border-white/20 bg-white/5 hover:bg-white/10 text-gray-200 uppercase tracking-wider font-bold"
                >
                  <ArrowLeft className="mr-2" size={18} /> Database
                </Button>
              </Link>
              <Button
                className={`h-12 text-black font-bold uppercase tracking-wider bg-white hover:bg-gray-200`}
              >
                Download Dossier
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* --- CONTENT TABS --- */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 py-12">
        <div className="flex gap-8 border-b border-white/10 mb-10 overflow-x-auto scrollbar-hide">
          {["profile", "history", "arsenal", "gallery", "trivia"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 text-lg font-oswald font-bold uppercase tracking-widest transition-all whitespace-nowrap px-2
                     ${
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

        <div className="min-h-[400px] animate-in fade-in duration-500">
          {/* TAB: PROFILE */}
          {activeTab === "profile" && (
            <div className="grid md:grid-cols-3 gap-12">
              <div className="md:col-span-2">
                <h3 className="text-2xl font-oswald uppercase text-white mb-6 flex items-center gap-2">
                  <User className="text-gray-400" size={24} /> Personal Data
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light">
                  {data.bio}
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-zinc-900/40 p-6 rounded-xl border border-white/5">
                  <h4 className="text-sm text-gray-500 uppercase font-bold mb-4">
                    Forms & Modes
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {data.forms.map((form, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="bg-white/10 text-white hover:bg-white/20 py-1.5"
                      >
                        {form}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="bg-zinc-900/40 p-6 rounded-xl border border-white/5">
                  <h4 className="text-sm text-gray-500 uppercase font-bold mb-4">
                    Abilities
                  </h4>
                  <div className="space-y-4 font-mono text-xs">
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

          {/* TAB: HISTORY */}
          {activeTab === "history" && (
            <div className="max-w-4xl">
              <div className="bg-zinc-900/30 p-8 rounded-xl border-l-2 border-white/10">
                <div
                  className="text-gray-300 leading-relaxed text-lg space-y-6 font-light"
                  dangerouslySetInnerHTML={{ __html: data.history }}
                />
              </div>
            </div>
          )}

          {/* TAB: ARSENAL */}
          {activeTab === "arsenal" && (
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="bg-zinc-900/30 p-8 rounded-xl border border-white/5">
                <h3 className="text-xl font-oswald uppercase text-white mb-6 flex items-center gap-2">
                  <Zap className="text-yellow-400" size={20} /> Arsenal
                </h3>
                <ul className="space-y-4">
                  {data.arsenal.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-4 text-gray-300"
                    >
                      <div
                        className={`h-1.5 w-1.5 rounded-full ${data.themeColor
                          .split(" ")[0]
                          .replace("text-", "bg-")}`}
                      />
                      <span className="font-medium text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-zinc-900/30 p-8 rounded-xl border border-white/5">
                <h3 className="text-xl font-oswald uppercase text-white mb-6 flex items-center gap-2">
                  <Shield className="text-blue-400" size={20} /> Mecha Units
                </h3>
                {data.mecha.map((mech, i) => (
                  <div key={i} className="mb-6 last:mb-0 group cursor-pointer">
                    <div className="aspect-video bg-black rounded-lg overflow-hidden relative mb-2 border border-white/5 group-hover:border-white/20 transition-all">
                      <img
                        src={mech.image}
                        alt={mech.name}
                        className="w-full h-full object-contain p-2 opacity-90 group-hover:opacity-100 transition-opacity"
                      />
                      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-black/50 to-transparent p-3">
                        <span className="text-xl font-oswald uppercase tracking-widest text-white">
                          {mech.name}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB: GALLERY */}
          {activeTab === "gallery" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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
                    <div className="p-4 bg-zinc-900/90 absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 border-t border-white/10">
                      <p className="text-sm text-gray-300 font-medium leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                    <div className="absolute top-3 right-3 bg-black/50 p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                      <ImageIcon size={16} className="text-white" />
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full text-center py-20 text-gray-500">
                  <ImageIcon className="w-12 h-12 mx-auto mb-3 opacity-20" />
                  <p>No images available in database.</p>
                </div>
              )}
            </div>
          )}

          {/* TAB: TRIVIA */}
          {activeTab === "trivia" && (
            <div className="grid sm:grid-cols-2 gap-4">
              {data.trivia.map((fact, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-5 bg-zinc-900/50 rounded-xl border border-white/5 hover:border-white/20 transition-all"
                >
                  <div className="flex-shrink-0 mt-1">
                    <Star size={18} className="text-yellow-400" />
                  </div>
                  <p className="text-gray-300 text-lg">{fact}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// --- HELPER COMPONENTS ---
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
    <div className="p-4 bg-zinc-900/80 border border-white/5 rounded-lg hover:border-white/20 transition-colors backdrop-blur-sm">
      <div className="flex items-center gap-2 text-gray-500 mb-2 text-[10px] uppercase font-bold tracking-widest">
        {icon} {label}
      </div>
      <div
        className="font-oswald text-lg text-white truncate font-medium"
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
      <div className="flex justify-between mb-1 text-xs font-bold tracking-wider">
        <span className="text-gray-500 uppercase">{label}</span>
        <span className="text-white">{percent}%</span>
      </div>
      <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
        <div
          className={`h-full ${color} rounded-full`}
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
