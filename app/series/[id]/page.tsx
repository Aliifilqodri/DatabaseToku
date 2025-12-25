"use client";

import { useState, useEffect, use } from "react";
import { Navbar } from "@/components/navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Star,
  Zap,
  Info,
  Share2,
  Check,
  PlayCircle,
  AlertTriangle,
  Wrench,
  Layers,
  Skull,
  Users,
  ChevronDown,
  ChevronUp,
  Image as ImageIcon,
  Film,
} from "lucide-react";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

// --- GENERATOR EPISODE GOKAIGER ---
const generateGokaigerEpisodes = () => {
  const titles = [
    "The Space Pirates Appear",
    "The Worth of This Planet",
    "Changing Courage into Magic",
    "What are Friends For?",
    "Judgement Pirates",
    "The Most Important Thing",
    "Niki-Niki! Kenpo Lesson",
    "Little Spy Tactics",
    "Lion, Run",
    "Card Game",
    "The Serious Rebellion",
    "The Guaranteed Showy Samurai",
    "Tell Me the Way",
    "Traffic Safety",
    "A Privateer Appears",
    "Clash! Sentai vs. Sentai",
    "The Amazing Silver Man",
    "Rampage with the Dinosaur Robot Drill",
    "Armor of the 15 Warriors",
    "The Lost Forest",
    "The Heart of a Warrior",
    "Promise from the Star",
    "The People's Lives are Earth's Treasures",
    "Foolish Earthlings",
    "Pirates and Ninjas",
    "ZhuZhu! Ninja Lesson",
    "The Greatest Treasure",
    "Wings are Eternal",
    "The Abare Quick-Change",
    "Friendship is My Treasure",
    "The Brave of the Dinosaurs",
    "One Power",
    "A Hero's Path",
    "The Great Gavan",
    "Dimension of the Soul",
    "Partners in Justice",
    "The Greatest Gokaiger",
    "The Final Stand",
    "The Legend Continues",
    "Let's Make it Showy!",
    "New Beginnings",
    "The Pirate's Creed",
    "Echoes of Heroism",
    "Zangyack's Fall",
    "Eternal Bonds",
    "Cosmic Voyage",
    "The Final Treasure",
    "Beyond the Stars",
    "Legacy of Justice",
    "The Final Voyage",
    "Farewell Space Pirates",
  ];

  return Array.from({ length: 51 }, (_, i) => ({
    id: i + 1,
    title: titles[i] || `Episode ${i + 1}`,
    duration: "24 min",
    type: "TV",
  }));
};

// --- GENERATOR EPISODE TIGA ---
const generateTigaEpisodes = () => {
  const specialTitles: Record<number, string> = {
    1: "Inheritance of Light",
    2: "Stone of Legends",
    3: "The Devil's Prophecy",
    25: "The Devil's Judgment",
    44: "The Shadow Inherited",
    50: "Take Me Higher!",
    51: "Master of Darkness",
    52: "To The Shining Ones",
  };

  return Array.from({ length: 52 }, (_, i) => ({
    id: i + 1,
    title: specialTitles[i + 1] || `Episode ${i + 1}: Defense of the Ancient`,
    duration: "24 min",
    type: "TV",
  }));
};

// --- DATA MOVIES ---
const gokaigerMoviesList = [
  {
    id: "m1",
    title: "Gokaiger Goseiger Super Sentai 199 Hero Great Battle",
    duration: "1h 21m",
    type: "Movie",
    img: "/sentai/movies/199_heroes.webp",
  },
  {
    id: "m2",
    title: "Kaizoku Sentai Gokaiger the Movie: The Flying Ghost Ship",
    duration: "30m",
    type: "Movie",
    img: "/sentai/movies/ghost_ship.webp",
  },
  {
    id: "m3",
    title: "Kaizoku Sentai Gokaiger vs. Space Sheriff Gavan",
    duration: "1h 04m",
    type: "Movie",
    img: "/sentai/movies/vs_gavan.webp",
  },
  {
    id: "m4",
    title: "Kamen Rider x Super Sentai: Super Hero Taisen",
    duration: "1h 29m",
    type: "Crossover",
    img: "/sentai/movies/hero_taisen.webp",
  },
  {
    id: "m5",
    title: "Tokumei Sentai Go-Busters vs. Kaizoku Sentai Gokaiger",
    duration: "1h 00m",
    type: "Movie",
    img: "/sentai/movies/vs_gobusters.webp",
  },
  {
    id: "m6",
    title: "Kaizoku Sentai: Ten Gokaiger",
    duration: "1h 01m",
    type: "V-Cinext",
    img: "/sentai/movies/ten_gokaiger.webp",
  },
];

const tigaMoviesList = [
  {
    id: "m1",
    title: "Ultraman Tiga: The Final Odyssey",
    duration: "1h 25m",
    type: "Movie",
    img: "/ultra/maxresdefault.jpg",
  },
  {
    id: "m2",
    title: "Ultraman Tiga & Dyna & Gaia: Battle in Hyperspace",
    duration: "1h 23m",
    type: "Crossover",
    img: "/ultra/Ultraman_Tiga_Dyna_&_Gaia_Supreme.jpg",
  },
  {
    id: "m3",
    title: "Ultraman Tiga Gaiden: Revival of the Ancient Giant",
    duration: "45m",
    type: "Gaiden",
    img: "/ultra/ultraman-tiga-gaiden-revival-of-the-ancient-giant-04.png",
  },
  {
    id: "m4",
    title: "Superior Ultraman 8 Brothers",
    duration: "1h 38m",
    type: "Movie",
    img: "/ultra/Superior-8-Ultra-Brothers-Tiga-Dyna-Gaia-863x520.jpg",
  },
];

// --- DATABASE UTAMA ---
const seriesDatabase: any = {
  // FIX: Ubah key dari "kaizoku-sentai-gokaiger" menjadi "gokaiger" agar sesuai dengan ID URL
  gokaiger: {
    title: "Kaizoku Sentai Gokaiger",
    jpTitle: "海賊戦隊ゴーカイジャー",
    tagline: "Let's make it showy!",
    desc: "Set sail into a cosmic odyssey where rebellion meets legacy! Five outlaws from across the stars arrive on Earth seeking the 'Greatest Treasure in the Universe,' only to find a world protected by the spirits of 34 legendary Super Sentai teams.",
    epicHistory:
      "Against the crushing weight of an interstellar armada, the Gokaigers waged a war of sheer willpower. From the burning ruins of fallen empires to the final stand on Earth's soil, they proved that true courage isn't granted by blood, but forged in the heat of battle.",
    year: "2011 - 2012",
    episodes: 51,
    studio: "Toei Company",
    writer: "Naruhisa Arakawa",
    director: "Shojiro Nakazawa",
    rating: 5.0,
    image: "/sentai/Gokaiger_29.webp",
    color: "from-red-600 to-yellow-500",
    cast: [
      {
        name: "Captain Marvelous",
        actor: "Ryota Ozawa",
        role: "Gokai Red",
        img: "/sentai/marvelous/Ryota-ozawa.webp",
      },
      {
        name: "Joe Gibken",
        actor: "Yuki Yamada",
        role: "Gokai Blue",
        img: "/sentai/joe/Yuki_Yamada.webp",
      },
      {
        name: "Luka Millfy",
        actor: "Mao Ichimichi",
        role: "Gokai Yellow",
        img: "/sentai/luka/Mao_Ichimichi.webp",
      },
      {
        name: "Don Dogoier",
        actor: "Kazuki Shimizu",
        role: "Gokai Green",
        img: "/sentai/don/Kazuki_Shimizu.webp",
      },
      {
        name: "Ahim de Famille",
        actor: "Yui Koike",
        role: "Gokai Pink",
        img: "/sentai/ahim/Yui_Koike.webp",
      },
      {
        name: "Gai Ikari",
        actor: "Junya Ikeda",
        role: "Gokai Silver",
        img: "/sentai/gai/Junya_Ikeda_Headshot.webp",
      },
    ],
    villains: [
      {
        name: "Basco ta Jolokia",
        actor: "Kei Hosogai",
        role: "Basco ta Jolokia",
        img: "/sentai/support/Kei_Hosogai_Headshot.webp",
      },
    ],
    arsenal: [
      {
        name: "Mobilates",
        type: "Changer",
        img: "/sentai/FLiWiwJUcAEKOx7.jpeg",
        desc: "The primary transformation device used by the Gokaigers.",
      },
      {
        name: "Gokai Sabre",
        type: "Weapon",
        img: "/sentai/shot0114.png",
        desc: "A versatile cutlass used for close-quarters combat.",
      },
      {
        name: "Gokai Gun",
        type: "Weapon",
        img: "/sentai/2eel2yO2uuPnxU-P.jpg_large",
        desc: "High-powered flintlock-style energy pistols.",
      },
      {
        name: "Ranger Keys",
        type: "Artifact",
        img: "/sentai/Legendary-Red-Ranger-Keys.png",
        desc: "Keys containing the powers of previous Super Sentai.",
      },
      {
        name: "Gokai Galleon Buster",
        type: "Finisher",
        img: "/sentai/shot0022.jpg",
        desc: "A powerful cannon created from the core spirit of the crew.",
      },
    ],
    gallery: [
      "/sentai/gallery/gokai1.webp",
      "/sentai/gallery/gokai2.webp",
      "/sentai/gallery/gokai3.webp",
      "/sentai/gallery/gokai4.webp",
      "/sentai/gallery/gokai5.webp",
      "/sentai/gallery/gokai6.webp",
    ],
    wikiStats: {
      "Suit Actor": "Hirofumi Fukuzawa",
      Network: "TV Asahi",
      "Theme Song": "Kaizoku Sentai Gokaiger",
      "Next Series": "Tokumei Sentai Go-Busters",
    },
    episodeList: generateGokaigerEpisodes(),
    movieList: gokaigerMoviesList,
  },
  // --- DATA ULTRAMAN TIGA ---
  tiga: {
    title: "Ultraman Tiga",
    jpTitle: "ウルトラマンティガ",
    tagline: "Light is a bond... one that is inherited.",
    desc: "In the year 2007, giant monsters appear to destroy humanity as predicted by an ancient time capsule. Daigo Madoka, a GUTS pilot, merges with the statue of a giant from a lost civilization to become Ultraman Tiga. Unlike previous heroes, Tiga can change forms (Type Change) to adapt to any battle situation.",
    epicHistory:
      "30 million years ago, Tiga was a giant of darkness who destroyed the ancient civilization. Touched by the leader of the Earth Defense Force, Yuzare, he chose the light and sealed his dark brethren. Now, reawakened in the Neo Frontier Era, Tiga fights to protect humanity from the darkness once again.",
    year: "1996 - 1997",
    episodes: 52,
    studio: "Tsuburaya Prod.",
    writer: "Chiaki J. Konaka",
    director: "Hirochika Muraishi",
    rating: 5.0,
    image:
      "/ultra/4b3448a3e289473103273773b1eee9759195af0b56323718f758be65b5c99bba._SX1080_FMjpg_.jpg",
    color: "from-purple-600 to-indigo-500",
    cast: [
      {
        name: "Daigo Madoka",
        actor: "Hiroshi NAGANO",
        role: "Daigo Madoka",
        img: "/ultra/tiga/hiroshi-nagano-4778df24-3519-4faa-a75e-6d7a33d0e5c-resize-750.jpeg",
      },
      {
        name: "Megumi Iruma",
        actor: "Mio TAKAKI",
        role: "Megumi Iruma",
        img: "/ultra/tiga/OIP.webp",
      },
      {
        name: "Rena Yanase",
        actor: "Takami YOSHIMOTO",
        role: "Rena Yanase",
        img: "/ultra/tiga/Takami_Yoshimoto_2021_2.webp",
      },
      {
        name: "Seiichi Munakata",
        actor: "Akitoshi OHTAKI",
        role: "Seiichi Munakata",
        img: "/ultra/tiga/OIP (1).webp",
      },
      {
        name: "Masami Horii",
        actor: "Yukio MASUDA",
        role: "Masami Horii",
        img: "/ultra/tiga/Yukio_Masuda.webp",
      },
      {
        name: "Tetsuo Shinjo",
        actor: "Shigeki KAGEMARU",
        role: "Tetsuo Shinjo",
        img: "/ultra/tiga/OIP (2).webp",
      },
    ],
    villains: [
      {
        name: "Gatanothor",
        actor: "CGI/SUIT",
        role: "Gatanothor",
        img: "/ultra/tiga/微信图片_20220506154120.jpg",
      },
      {
        name: "Camearra",
        actor: "Miyoko YOSHIMOTO",
        role: "Camearra",
        img: "/ultra/tiga/Miyoko_Yoshimoto_2.webp",
      },
    ],
    arsenal: [
      // --- TRANSFORMATION ---
      {
        name: "Spark Lens",
        type: "Transformation",
        img: "/ultra/tiga/Ultrmn_Tg_Dgo_Mdk.webp",
        desc: "An ancient artifact used by Daigo to transform into light and merge with Tiga's statue.",
      },

      // --- AERIAL MECHA ---
      {
        name: "GUTS Wing 1",
        type: "Mecha",
        img: "/ultra/tiga/GUTS_Wing.webp",
        desc: "High-speed interceptor jet capable of changing flight modes. Armed with laser cannons and HEAT Missiles.",
      },
      {
        name: "GUTS Wing 2",
        type: "Mecha",
        img: "/ultra/tiga/GUTS_Wing_2.webp",
        desc: "Larger support craft equipped with the powerful Texas Beam cannon and Hyper Railgun.",
      },
      {
        name: "GUTS Wing EX-J",
        type: "Mecha",
        img: "/ultra/tiga/GUTSWing_EX-J.webp",
        desc: "Heavily modified Wing 2 that separates into Alpha and Beta units for tactical superiority.",
      },
      {
        name: "Snow White",
        type: "Mecha",
        img: "/ultra/tiga/Snow_White.webp",
        desc: "A custom white GUTS Wing 1 designed for Maxima Overdrive hypersonic flight tests.",
      },
      {
        name: "Artdessei",
        type: "Mothership",
        img: "/ultra/tiga/artdessei_plane_fighter_ultraman_tiga_by_pengjuju0420_dfbs5hg-pre.jpg",
        desc: "Massive underground battleship designed for space combat. Features the hidden Maximum Naqis cannon.",
      },

      // --- GROUND & SEA VEHICLES ---
      {
        name: "Sherlock",
        type: "Vehicle",
        img: "/ultra/tiga/Sherlock.webp",
        desc: "Modified Chevrolet Camaro patrol car equipped with a top-mounted Scroll Laser Cannon.",
      },
      {
        name: "De La Mu",
        type: "Vehicle",
        img: "/ultra/tiga/De_La_Mu.webp",
        desc: "Modified Chevrolet Blazer equipped with a Degner heavy laser cannon for rough terrain.",
      },
      {
        name: "Peepar",
        type: "Drill Tank",
        img: "/ultra/tiga/PeeparSide.webp",
        desc: "Subterranean tank with a super-hard drill. Fires 'Cold Beam' freezing rays or 'Fuser Z' heat rays.",
      },
      {
        name: "Dolphar 202",
        type: "Submarine",
        img: "/ultra/tiga/Dolpher-202.webp",
        desc: "Small submersible used for deep-sea exploration and infiltration. Armed with torpedoes.",
      },
      {
        name: "Stug",
        type: "Vehicle",
        img: "/ultra/tiga/Stug_No.1_and_2.webp",
        desc: "High-performance motorcycles created by Horii. Available in On-road (No.1) and Off-road (No.2) variants.",
      },

      // --- WEAPONS & EQUIPMENT ---
      {
        name: "GUTS Hyper",
        type: "Weapon",
        img: "/ultra/tiga/GUTS_Hyper.webp",
        desc: "Standard sidearm with exchangeable cartridges: Laser, Tear Gas, or Signal Flares.",
      },
      {
        name: "GUTS Rifle",
        type: "Weapon",
        img: "/ultra/tiga/GUTS_Rifle_I.webp",
        desc: "Long-range energy rifle firing ultraviolet rays. First used specifically against Obiko.",
      },
      {
        name: "DUNK Shot",
        type: "Weapon",
        img: "/ultra/tiga/GUTS_Rifle_II.webp",
        desc: "Heavy double-barreled laser rifle used for suppressing large targets.",
      },
      {
        name: "PDI (GUTS Com)",
        type: "Tech",
        img: "/ultra/tiga/GUTS_COM.webp",
        desc: "Personal Digital Instrument for communication, biological scanning, and radiation detection.",
      },
      {
        name: "GUTS Suit & Met",
        type: "Uniform",
        img: "/ultra/tiga/GUTS_equipment.webp",
        desc: "Special alloy helmet and suit resistant to fire, cold, and high impact.",
      },
    ],
    gallery: [
      "/ultra/gallery/tiga_multi.jpg",
      "/ultra/gallery/tiga_sky.jpg",
      "/ultra/gallery/tiga_power.jpg",
      "/ultra/gallery/guts_base.jpg",
      "/ultra/gallery/tiga_glitter.jpg",
      "/ultra/gallery/final_battle.jpg",
    ],
    wikiStats: {
      "Suit Actor": "Koji Nakamura",
      Network: "MBS / TBS",
      "Theme Song": "Take Me Higher (V6)",
      Organization: "TPC / GUTS",
      "Key Mechanic": "Type Change",
    },
    episodeList: generateTigaEpisodes(),
    movieList: tigaMoviesList,
  },
};

export default function SeriesWikiPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const [activeTab, setActiveTab] = useState("overview");
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [isCopied, setIsCopied] = useState(false);
  const [isMaintenanceOpen, setIsMaintenanceOpen] = useState(false);
  const [openArsenal, setOpenArsenal] = useState<string | null>(null);

  useEffect(() => {
    // FIX: Langsung ambil dari database menggunakan ID yang masuk
    // Karena sekarang key di database sudah "gokaiger", maka id "gokaiger" dari URL akan cocok.
    const found = seriesDatabase[id];

    if (found) {
      setData(found);
    } else {
      // Data not found logic
      console.log(`Database miss for ID: ${id}`);
    }
    setLoading(false);
  }, [id]);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  if (loading)
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-white font-oswald animate-pulse tracking-widest text-xl">
        INITIALIZING ARCHIVE...
      </div>
    );
  if (!data)
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl font-oswald mb-4">404 - DATA CORRUPTED</h1>
        <p className="text-zinc-500">
          The requested archive [{id}] does not exist in our database.
        </p>
        <Link href="/" className="mt-8 text-primary hover:underline">
          Return to Deck
        </Link>
      </div>
    );

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-primary selection:text-white pb-20">
      <Navbar />

      <div className="relative h-[70vh] md:h-[85vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={data.image}
            alt={data.title}
            className="h-full w-full object-cover brightness-[0.3]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
          {/* Dynamic Color Overlay based on Series */}
          <div
            className={`absolute inset-0 bg-gradient-to-r ${data.color} mix-blend-overlay opacity-30`}
          />
        </div>

        <div className="absolute inset-0 flex items-end md:items-center px-6 sm:px-12 lg:px-20 pb-12 md:pb-0">
          <div className="w-full max-w-4xl space-y-4 md:space-y-6 pt-20">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors text-[10px] md:text-sm font-bold uppercase tracking-[0.3em]"
            >
              <ArrowLeft size={14} /> Back to Database
            </Link>
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-white text-black font-bold text-[10px] md:text-sm px-2 rounded-none">
                {data.year}
              </Badge>
              <Badge
                variant="outline"
                className="text-gray-300 border-white/20 text-[10px] md:text-sm rounded-none uppercase"
              >
                {data.episodes} EP
              </Badge>
              <Badge className="bg-yellow-500 text-black font-bold flex gap-1 text-[10px] md:text-sm rounded-none">
                <Star size={10} fill="black" /> {data.rating}
              </Badge>
            </div>
            <div className="space-y-1">
              <h2 className="font-oswald text-xl md:text-3xl text-gray-500 font-bold uppercase tracking-[0.2em]">
                {data.jpTitle}
              </h2>
              <h1 className="font-oswald text-4xl sm:text-6xl md:text-8xl font-black italic uppercase tracking-tighter leading-[0.95] text-white">
                {data.title}
              </h1>
            </div>
            <div className="flex flex-wrap gap-3 pt-4">
              <Button
                onClick={() => setIsMaintenanceOpen(true)}
                className="h-12 md:h-16 px-6 md:px-10 bg-zinc-800/50 hover:bg-zinc-700 text-gray-400 border border-dashed border-zinc-600 font-oswald text-sm md:text-xl uppercase tracking-widest rounded-none"
              >
                <AlertTriangle className="mr-2 text-yellow-600" size={18} />{" "}
                System Status
              </Button>
              <Button
                onClick={handleShare}
                variant="outline"
                className="h-12 md:h-16 px-6 md:px-8 border-white/20 bg-white/5 font-oswald text-sm md:text-xl uppercase tracking-widest rounded-none"
              >
                {isCopied ? <Check size={18} /> : <Share2 size={18} />}{" "}
                {isCopied ? "Copied" : "Share"}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-12 -mt-10 relative z-10">
        <div className="flex overflow-x-auto scrollbar-hide border-b border-white/10 bg-[#050505]/90 backdrop-blur-md sticky top-[70px] z-40">
          {["overview", "cast", "arsenal", "movies", "episodes", "gallery"].map(
            (tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 md:px-8 py-4 md:py-5 font-oswald text-sm md:text-lg font-bold uppercase tracking-widest transition-all border-b-4 whitespace-nowrap ${
                  activeTab === tab
                    ? "border-primary text-white bg-white/5"
                    : "border-transparent text-gray-600 hover:text-gray-300"
                }`}
              >
                {tab}
              </button>
            )
          )}
        </div>

        <div className="py-8 md:py-12 min-h-[500px] animate-in fade-in slide-in-from-bottom-5 duration-500">
          {activeTab === "overview" && (
            <div className="grid lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 space-y-8 md:space-y-12">
                <section>
                  <h3 className="font-oswald text-2xl md:text-3xl text-white uppercase mb-4 md:mb-6 flex items-center gap-3">
                    <Info size={24} className="text-primary" /> Chronicle Brief
                  </h3>
                  <p className="text-zinc-400 text-base md:text-xl leading-relaxed font-light mb-6">
                    {data.desc}
                  </p>
                  <div className="p-6 md:p-8 bg-white/5 border-l-4 border-primary italic text-sm md:text-lg text-zinc-300">
                    {data.epicHistory}
                  </div>
                </section>
                <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                  <div className="bg-zinc-900/40 p-6 md:p-8 border border-white/5 border-l-4 border-primary">
                    <h4 className="text-[10px] text-zinc-600 uppercase tracking-widest mb-1 font-bold">
                      Architect
                    </h4>
                    <p className="text-lg md:text-2xl font-bold font-oswald text-white uppercase">
                      {data.writer}
                    </p>
                  </div>
                  <div className="bg-zinc-900/40 p-6 md:p-8 border border-white/5 border-l-4 border-primary">
                    <h4 className="text-[10px] text-zinc-600 uppercase tracking-widest mb-1 font-bold">
                      Director
                    </h4>
                    <p className="text-lg md:text-2xl font-bold font-oswald text-white uppercase">
                      {data.director}
                    </p>
                  </div>
                </div>
              </div>
              <aside className="bg-zinc-900/50 p-6 md:p-8 border border-white/5 h-fit space-y-6">
                <h3 className="font-oswald text-xl uppercase tracking-widest text-white border-b border-white/10 pb-4">
                  Data Logs
                </h3>
                <div className="space-y-4 md:space-y-6 font-mono text-[10px] md:text-sm">
                  {Object.entries(data.wikiStats).map(([key, value]: any) => (
                    <div
                      key={key}
                      className="flex flex-col gap-1 border-b border-white/5 pb-3"
                    >
                      <span className="text-primary/60 uppercase">{key}</span>
                      <span className="text-white font-bold">{value}</span>
                    </div>
                  ))}
                </div>
              </aside>
            </div>
          )}

          {activeTab === "cast" && (
            <div className="space-y-16">
              <div>
                <h3 className="font-oswald text-2xl text-white uppercase mb-6 flex items-center gap-3 border-l-4 border-primary pl-4">
                  <Users size={24} className="text-primary" /> Core Crew
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 md:gap-6">
                  {data.cast?.map((actor: any, idx: number) => (
                    <div
                      key={idx}
                      className="group relative aspect-[3/4] bg-zinc-900 border border-white/5 overflow-hidden transition-all hover:border-primary"
                    >
                      <img
                        src={actor.img}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                        alt={actor.name}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                      <div className="absolute bottom-0 left-0 w-full p-3">
                        <p className="text-white font-oswald font-bold text-sm md:text-lg uppercase leading-none">
                          {actor.role}
                        </p>
                        <p className="text-primary text-[8px] md:text-[10px] font-bold uppercase mt-1">
                          {actor.actor}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-oswald text-2xl text-white uppercase mb-6 flex items-center gap-3 border-l-4 border-red-800 pl-4">
                  <Skull size={24} className="text-red-600" /> Villains & Allies
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 md:gap-6">
                  {data.villains?.map((actor: any, idx: number) => (
                    <div
                      key={idx}
                      className="group relative aspect-[3/4] bg-zinc-900 border border-white/5 overflow-hidden transition-all hover:border-red-600"
                    >
                      <img
                        src={actor.img}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                        alt={actor.name}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                      <div className="absolute bottom-0 left-0 w-full p-3">
                        <p className="text-white font-oswald font-bold text-sm md:text-lg uppercase leading-none">
                          {actor.role}
                        </p>
                        <p className="text-zinc-400 text-[8px] md:text-[10px] font-bold uppercase mt-1">
                          {actor.actor}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "arsenal" && (
            <div className="space-y-6">
              <h3 className="font-oswald text-2xl md:text-3xl text-white uppercase mb-8 flex items-center gap-3 border-l-4 border-primary pl-4">
                <Zap size={24} className="text-primary" /> Arsenal & Gear
              </h3>
              <div className="grid gap-4">
                {data.arsenal.map((item: any, idx: number) => (
                  <div
                    key={idx}
                    className="border border-white/10 bg-zinc-900/20 overflow-hidden"
                  >
                    <button
                      onClick={() =>
                        setOpenArsenal(
                          openArsenal === item.name ? null : item.name
                        )
                      }
                      className="w-full flex items-center justify-between p-6 hover:bg-white/5 transition-all text-left"
                    >
                      <div className="flex items-center gap-6">
                        <span className="text-zinc-700 font-oswald text-2xl font-black">
                          0{idx + 1}
                        </span>
                        <div>
                          <Badge
                            variant="outline"
                            className="text-[8px] uppercase border-primary/30 text-primary mb-1"
                          >
                            {item.type}
                          </Badge>
                          <h4 className="font-oswald text-xl md:text-2xl text-white uppercase">
                            {item.name}
                          </h4>
                        </div>
                      </div>
                      {openArsenal === item.name ? (
                        <ChevronUp className="text-primary" />
                      ) : (
                        <ChevronDown className="text-zinc-600" />
                      )}
                    </button>
                    {openArsenal === item.name && (
                      <div className="p-6 grid md:grid-cols-2 gap-8 bg-black/40 border-t border-white/5 animate-in slide-in-from-top-2 duration-300">
                        <div className="aspect-video relative bg-zinc-900 border border-white/10">
                          <img
                            src={item.img}
                            alt={item.name}
                            className="w-full h-full object-contain p-4"
                          />
                        </div>
                        <div className="flex flex-col justify-center space-y-4">
                          <p className="text-zinc-400 text-lg leading-relaxed italic">
                            "{item.desc}"
                          </p>
                          <div className="flex gap-4">
                            <div className="h-1 w-12 bg-primary" />
                            <div className="h-1 w-4 bg-zinc-800" />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "movies" && (
            <div className="space-y-8">
              <h3 className="font-oswald text-2xl md:text-3xl text-white uppercase mb-8 flex items-center gap-3 border-l-4 border-primary pl-4">
                <Film size={24} className="text-primary" /> Cinematic Records
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.movieList.map((movie: any) => (
                  <div
                    key={movie.id}
                    className="group relative bg-zinc-900/40 border border-white/5 overflow-hidden transition-all hover:border-primary/50"
                  >
                    <div className="aspect-[16/9] overflow-hidden">
                      <img
                        src={movie.img}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-75 group-hover:brightness-100"
                        alt={movie.title}
                      />
                    </div>
                    <div className="p-6 space-y-4">
                      <div className="flex justify-between items-center">
                        <Badge className="bg-primary text-black rounded-none text-[10px]">
                          {movie.type}
                        </Badge>
                        <span className="text-[10px] font-mono text-zinc-600">
                          {movie.duration}
                        </span>
                      </div>
                      <h4 className="font-oswald text-lg md:text-xl font-bold text-white uppercase group-hover:text-primary transition-colors min-h-[3rem]">
                        {movie.title}
                      </h4>
                      <Button
                        variant="outline"
                        className="w-full border-white/10 text-zinc-400 group-hover:text-white group-hover:border-primary transition-all rounded-none h-10 text-[10px] uppercase tracking-widest"
                      >
                        Access Archive
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "episodes" && (
            <div className="max-w-4xl mx-auto space-y-4">
              <h3 className="font-oswald text-2xl md:text-4xl text-white uppercase tracking-wider mb-8 flex items-center gap-3">
                <Layers className="text-primary" /> Episode Manifest
              </h3>
              <div className="grid gap-3 md:gap-4">
                {data.episodeList.map((ep: any) => (
                  <div
                    key={ep.id}
                    className="group flex items-center gap-4 md:gap-8 p-4 md:p-6 bg-zinc-900/20 border border-white/5 hover:border-primary/40 transition-all"
                  >
                    <span className="font-oswald font-black text-2xl md:text-5xl text-zinc-800 group-hover:text-primary/20 transition-colors italic w-12 md:w-20">
                      {ep.id < 10 ? `0${ep.id}` : ep.id}
                    </span>
                    <div className="flex-1">
                      <h4 className="font-oswald font-bold text-base md:text-2xl text-zinc-300 group-hover:text-white uppercase transition-colors">
                        {ep.title}
                      </h4>
                      <p className="text-[8px] md:text-[10px] font-mono text-zinc-600 uppercase mt-1">
                        Runtime: {ep.duration} // {ep.type}
                      </p>
                    </div>
                    <PlayCircle
                      size={28}
                      className="text-zinc-800 group-hover:text-primary transition-all group-hover:scale-110 cursor-pointer"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "gallery" && (
            <div className="space-y-8">
              <h3 className="font-oswald text-2xl md:text-3xl text-white uppercase mb-8 flex items-center gap-3 border-l-4 border-primary pl-4">
                <ImageIcon size={24} className="text-primary" /> Visual Archives
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {data.gallery.map((img: string, idx: number) => (
                  <div
                    key={idx}
                    className="group relative aspect-video bg-zinc-900 overflow-hidden border border-white/5 hover:border-primary transition-all"
                  >
                    <img
                      src={img}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      alt={`Gallery ${idx}`}
                    />
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="p-3 bg-black/80 rounded-full border border-primary/50">
                        <ImageIcon className="text-primary" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <Dialog open={isMaintenanceOpen} onOpenChange={setIsMaintenanceOpen}>
        <DialogContent className="bg-black border-2 border-yellow-600 text-white sm:max-w-[450px] rounded-none">
          <div className="p-4 flex flex-col items-center text-center space-y-4">
            <Wrench size={40} className="text-yellow-500 animate-pulse" />
            <DialogHeader>
              <DialogTitle className="font-oswald text-2xl uppercase text-yellow-500">
                System Maintenance
              </DialogTitle>
            </DialogHeader>
            <p className="text-zinc-400 font-mono text-xs leading-relaxed uppercase">
              Archive server offline. Currently performing data synchronization
              with TPC Main Computer.
            </p>
            <Button
              onClick={() => setIsMaintenanceOpen(false)}
              className="w-full bg-yellow-600 text-black font-oswald uppercase rounded-none h-12"
            >
              Close Link
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
