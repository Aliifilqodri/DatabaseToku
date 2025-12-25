"use client";

import { useState, useEffect, use } from "react";
import { Navbar } from "@/components/navbar";
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
  Terminal,
  Activity,
  ChevronRight,
  Download,
  X,
  Users,
} from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

type CharacterData = {
  id: string;
  name: string;
  rangerName: string;
  series: string;
  category: string;
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
    category: "Super Sentai",
    color: "Red",
    themeColor: "text-red-600 border-red-600 selection:bg-red-600",
    image: "/sentai/marvelous/Captain_Marvelous.webp",
    actor: "Ryota Ozawa",
    bounty: "Unlimited",
    quote: "Let's make it showy!",
    homeworld: "Unknown",
    firstAppearance: "Gokaiger Ep. 1",
    lastAppearance: "Ten Gokaiger",
    bio: "The charismatic leader of the Gokaiger pirates. A former member of the Red Pirates who inherited the Ranger Keys from AkaRed.",
    history: `<p><strong>The Genesis:</strong> Marvelous was rescued by AkaRed during the annihilation of his home planet.</p>`,
    forms: ["Standard Gokai Red", "Gokai Red Gold Mode", "Galleon Armor Mode"],
    arsenal: ["Mobilate", "Gokai Saber", "Gokai Gun", "Ranger Keys"],
    mecha: [
      {
        name: "Gokai Galleon",
        image: "/sentai/marvelous/KSG-GokaiGalleon.webp",
      },
    ],
    trivia: ["Loves Earth's curry."],
    gallery: [
      {
        image: "/sentai/marvelous/Captain_Marvelous_29.webp",
        description: "Marvelous during the SSSB deployment.",
      },
    ],
  },
  "gokai-blue": {
    id: "gokai-blue",
    name: "Joe Gibken",
    rangerName: "Gokai Blue",
    series: "Kaizoku Sentai Gokaiger",
    category: "Super Sentai",
    color: "Blue",
    themeColor: "text-blue-500 border-blue-500 selection:bg-blue-500",
    image: "/sentai/joe/Joe_Gibken.webp",
    actor: "Yuki Yamada",
    bounty: "Z=8,000,000",
    quote: "I will cut down anything that stands in my path.",
    homeworld: "Unknown",
    firstAppearance: "Gokaiger Ep. 1",
    lastAppearance: "Ten Gokaiger",
    bio: "The crew's stoic master swordsman. A former elite Zangyack operative who defected to find his soul.",
    history: `<p><strong>Defection:</strong> Originally a high-ranking special forces soldier for Zangyack Empire.</p>`,
    forms: ["Standard Gokai Blue", "Cross Armor Mode", "5-Sword Style"],
    arsenal: ["Mobilate", "Gokai Saber", "Gokai Gun", "Ranger Keys"],
    mecha: [{ name: "Gokai Jet", image: "/sentai/joe/KSG-Gokai_Jet.webp" }],
    trivia: ["Can wield five swords simultaneously."],
    gallery: [
      {
        image: "/sentai/joe/Zangyack_Agent_Gibken.webp",
        description: "Tactical profile during Zangyack enlistment.",
      },
    ],
  },
  "luka-millfy": {
    id: "luka-millfy",
    name: "Luka Millfy",
    rangerName: "Gokai Yellow",
    series: "Kaizoku Sentai Gokaiger",
    category: "Super Sentai",
    color: "Yellow",
    themeColor: "text-yellow-400 border-yellow-400 selection:bg-yellow-400",
    image: "/sentai/luka/Luka_Millfy.webp",
    actor: "Mao Ichimichi",
    bounty: "Z=3,000,000",
    quote: "Ay-yi-yi, this place is a total mess!",
    homeworld: "Unknown",
    firstAppearance: "Goseiger vs Shinkenger",
    lastAppearance: "Ten Gokaiger",
    bio: "The team's sharp-tongued scout and resident treasure hunter. Born into extreme poverty.",
    history: `<p><strong>Survivor:</strong> Witnessed the death of her sister due to Zangyack's greed.</p>`,
    forms: ["Standard Gokai Yellow", "Cross Armor Mode"],
    arsenal: ["Mobilate", "Gokai Saber", "Gokai Gun", "Ranger Keys"],
    mecha: [
      { name: "Gokai Trailer", image: "/sentai/luka/KSG-Gokai_Trailer.webp" },
    ],
    trivia: ["Has an aversion to broccoli."],
    gallery: [
      {
        image: "/sentai/luka/Luka_and_Raptor.webp",
        description: "Meet Raptor as Cameo in Space Squad Movie.",
      },
    ],
  },
  "gokai-green": {
    id: "gokai-green",
    name: "Don Dogoier",
    rangerName: "Gokai Green",
    series: "Kaizoku Sentai Gokaiger",
    category: "Super Sentai",
    color: "Green",
    themeColor: "text-green-500 border-green-500 selection:bg-green-500",
    image: "/sentai/don/Don_Dogoier.webp",
    actor: "Kazuki Shimizu",
    bounty: "Z=300,000",
    quote: "I-I'll do my very best!",
    homeworld: "Unknown",
    firstAppearance: "Gokaiger Ep. 1",
    lastAppearance: "Ten Gokaiger",
    bio: "The Galleon's engineer and chef. Despite being timid, his technical intellect is unmatched.",
    history: `<p><strong>Recruitment:</strong> Marvelous scouted him after seeing his mechanical repairs.</p>`,
    forms: ["Standard Gokai Green", "Gokai Christmas"],
    arsenal: ["Mobilate", "Gokai Gun", "Tactical Laptop"],
    mecha: [{ name: "Gokai Racer", image: "/sentai/don/KSG-Gokai_Racer.webp" }],
    trivia: ["Uses an acrobatic 'accidental' fighting style."],
    gallery: [
      {
        image: "/sentai/don/Don_Dogoier_29.webp",
        description: "Stress analysis.",
      },
    ],
  },
  "gokai-pink": {
    id: "gokai-pink",
    name: "Ahim de Famille",
    rangerName: "Gokai Pink",
    series: "Kaizoku Sentai Gokaiger",
    category: "Super Sentai",
    color: "Pink",
    themeColor: "text-pink-400 border-pink-400 selection:bg-pink-400",
    image: "/sentai/ahim/ahim.png",
    actor: "Yui Koike",
    bounty: "Z=4,000,000",
    quote: "I shall fight with grace and elegance.",
    homeworld: "Famille",
    firstAppearance: "Gokaiger Ep. 1",
    lastAppearance: "Ten Gokaiger",
    bio: "The last princess of the fallen Planet Famille. She serves as a beacon of hope for her people.",
    history: `<p><strong>The Princess:</strong> Joined the Gokaigers after her kingdom was destroyed by Zatsurig.</p>`,
    forms: ["Standard Gokai Pink", "Cross Armor Mode"],
    arsenal: ["Mobilate", "Gokai Gun", "Ranger Keys"],
    mecha: [
      { name: "Gokai Marine", image: "/sentai/ahim/KSG-Gokai_Marine.webp" },
    ],
    trivia: ["Expert in high-society tea ceremonies."],
    gallery: [
      {
        image: "/sentai/ahim/pinkahim.jpg",
        description: "Unauthorized 'Abare Pink' field test.",
      },
    ],
  },
  "gokai-silver": {
    id: "gokai-silver",
    name: "Gai Ikari",
    rangerName: "Gokai Silver",
    series: "Kaizoku Sentai Gokaiger",
    category: "Super Sentai",
    color: "Silver",
    themeColor: "text-gray-300 border-gray-300 selection:bg-gray-300",
    image: "/sentai/gai/Gai_Ikari.webp",
    actor: "Junya Ikeda",
    bounty: "Z=300,000",
    quote: "Gokaaaaai Silver!",
    homeworld: "Earth",
    firstAppearance: "Gokaiger Ep. 17",
    lastAppearance: "Ten Gokaiger",
    bio: "The premier Earthling historian of Super Sentai who earned his powers through self-sacrifice.",
    history: `<p><strong>Ascension:</strong> Granted the Gokai Cellular by the spirits of past Rangers.</p>`,
    forms: ["Standard Gokai Silver", "Gold Mode", "Cross Armor Mode"],
    arsenal: ["Gokai Cellular", "Gokai Spear", "Anchor Key"],
    mecha: [{ name: "GoZyuDrill", image: "/sentai/gai/KSG-GozyuDrill.webp" }],
    trivia: ["Designed the Gold Mode fusion armor."],
    gallery: [
      {
        image: "/sentai/gai/Gai_and_Misao.webp",
        description: "Historical summit with Zyuoh The World.",
      },
    ],
  },
  "daigo-madoka": {
    id: "daigo-madoka",
    name: "Daigo Madoka",
    rangerName: "GUTS Pilot",
    series: "Ultraman Tiga",
    category: "Ultraman",
    color: "Purple",
    themeColor: "text-purple-500 border-purple-500 selection:bg-purple-500",
    image: "/ultra/tiga/Daigo_Madoka_tiga.webp",
    actor: "Hiroshi Nagano",
    bounty: "Pilot",
    quote: "Humanity can become light themselves!",
    homeworld: "Earth",
    firstAppearance: "Ultraman Tiga Ep. 1",
    lastAppearance: "The Final Odyssey",
    bio: "A GUTS pilot inheriting ancient DNA. He serves as the human host for Ultraman Tiga.",
    history: `<p><strong>Awakening:</strong> Daigo merged with Tiga's statue during the Golza invasion.</p>`,
    forms: ["GUTS Uniform", "Tiga Multi", "Tiga Power", "Tiga Sky"],
    arsenal: ["Spark Lens", "GUTS Hyper Gun", "PDI"],
    mecha: [{ name: "GUTS Wing 1", image: "/ultra/tiga/GUTS_Wing.webp" }],
    trivia: ["He is part of the Neo-Frontier legacy."],
    gallery: [
      {
        image: "/ultra/tiga/Daigo_transforms_to_Tiga_in_The_Final_Odyssey.webp",
        description: "Transform.",
      },
    ],
  },
  "megumi-iruma": {
    id: "megumi-iruma",
    name: "Megumi Iruma",
    rangerName: "GUTS Captain",
    series: "Ultraman Tiga",
    category: "Ultraman",
    color: "Yellow",
    themeColor: "text-yellow-500 border-yellow-500 selection:bg-yellow-500",
    image: "/ultra/tiga/Megumi_Iruma_1.webp",
    actor: "Mio Takaki",
    bounty: "Commander",
    quote: "Believe in the light.",
    homeworld: "Earth",
    firstAppearance: "Ultraman Tiga Ep. 1",
    lastAppearance: "Ultraman Dyna",
    bio: "The brilliant Captain of GUTS. She leads the team with cold calculation and deep empathy.",
    history: `<p><strong>Command:</strong> Guided TPC through the most dangerous Kaiju appearances in history.</p>`,
    forms: ["GUTS Command Suit"],
    arsenal: ["GUTS Hyper Gun", "Tactical Tablet"],
    mecha: [
      {
        name: "Artdessei",
        image:
          "/ultra/tiga/artdessei_plane_fighter_ultraman_tiga_by_pengjuju0420_dfbs5hg-pre.jpg",
      },
    ],
    trivia: ["She was the first to suspect Daigo's identity."],
    gallery: [
      { image: "/ultra/tiga/Iruma_31.webp", description: "On-site command." },
    ],
  },
  "munakata-seiichi": {
    id: "munakata-seiichi",
    name: "Seiichi Munakata",
    rangerName: "GUTS Deputy",
    series: "Ultraman Tiga",
    category: "Ultraman",
    color: "Blue",
    themeColor: "text-blue-600 border-blue-600 selection:bg-blue-600",
    image: "/ultra/tiga/Seiichi_Munakata_Tiga_7.webp",
    actor: "Ametani Kagemaru",
    bounty: "Deputy",
    quote: "Ready for engagement!",
    homeworld: "Earth",
    firstAppearance: "Ultraman Tiga Ep. 1",
    lastAppearance: "Ultraman Dyna",
    bio: "The stern field commander of GUTS. He is a master tactician who leads from the front lines.",
    history: `<p><strong>Tactics:</strong> Known for his strict discipline and frontline engagement strategy.</p>`,
    forms: ["GUTS Combat Uniform"],
    arsenal: ["Hyper Gun", "Bazooka"],
    mecha: [{ name: "GUTS Wing 2", image: "/ultra/tiga/GUTS_Wing_2.webp" }],
    trivia: ["Always wears his signature GUTS cap."],
    gallery: [
      {
        image: "/ultra/tiga/Jun_Yazumi_Movie2.webp",
        description: "Deployment.",
      },
    ],
  },
  "rena-yanase": {
    id: "rena-yanase",
    name: "Rena Yanase",
    rangerName: "GUTS Ace",
    series: "Ultraman Tiga",
    category: "Ultraman",
    color: "Orange",
    themeColor: "text-orange-500 border-orange-500 selection:bg-orange-500",
    image: "/ultra/tiga/Rena_Yanase_tiga.webp",
    actor: "Takami Yoshimoto",
    bounty: "Ace",
    quote: "Why must Ultraman fight alone?",
    homeworld: "Earth",
    firstAppearance: "Ultraman Tiga Ep. 1",
    lastAppearance: "The Final Odyssey",
    bio: "The ace pilot of GUTS. She is considered the most skilled flyer in the TPC air force.",
    history: `<p><strong>Sky Mastery:</strong> Supported Tiga consistently from the cockpit of Wing 1.</p>`,
    forms: ["GUTS Flight Suit"],
    arsenal: ["GUTS Hyper Gun"],
    mecha: [{ name: "GUTS Wing 1", image: "/ultra/tiga/GUTS_Wing.webp" }],
    trivia: ["Daughter of a high-ranking TPC general."],
    gallery: [
      {
        image: "/ultra/tiga/Rena_The_Final_Odyssey_4.webp",
        description: "Ace flight.",
      },
    ],
  },
  "shinjoh-tetsuo": {
    id: "shinjoh-tetsuo",
    name: "Tetsuo Shinjoh",
    rangerName: "GUTS Sniper",
    series: "Ultraman Tiga",
    category: "Ultraman",
    color: "Red",
    themeColor: "text-red-600 border-red-600 selection:bg-red-600",
    image: "/ultra/tiga/Tetsuo_Shinjoh_tiga_1.webp",
    actor: "Shigeki Kagemaru",
    bounty: "Sniper",
    quote: "Bullseye!",
    homeworld: "Earth",
    firstAppearance: "Ultraman Tiga Ep. 1",
    lastAppearance: "Ultraman Dyna",
    bio: "The GUTS sharpshooter. Known for his impulsiveness and unmatched bravery in aerial combat.",
    history: `<p><strong>Combat:</strong> Specialist in heavy artillery and long-range engagement.</p>`,
    forms: ["GUTS Combat Suit"],
    arsenal: ["Sniper Rifle", "Hyper Gun"],
    mecha: [{ name: "GUTS Wing 2", image: "/ultra/tiga/GUTS_Wing_2.webp" }],
    trivia: ["Has a famous rivalry with Horii."],
    gallery: [
      {
        image: "/ultra/tiga/Tetsuo_Shinjoh_tiga_11.webp",
        description: "Sniper mode.",
      },
    ],
  },
  "horii-masami": {
    id: "horii-masami",
    name: "Masami Horii",
    rangerName: "GUTS Scientist",
    series: "Ultraman Tiga",
    category: "Ultraman",
    color: "Green",
    themeColor: "text-green-500 border-green-500 selection:bg-green-500",
    image: "/ultra/tiga/Masami_Horii_1.webp",
    actor: "Takehiro Murata",
    bounty: "Scientist",
    quote: "Science solves everything.",
    homeworld: "Earth",
    firstAppearance: "Ultraman Tiga Ep. 1",
    lastAppearance: "Ultraman Dyna",
    bio: "The genius scientist of GUTS. Responsible for creating most of the squad's advanced weaponry.",
    history: `<p><strong>Invention:</strong> Developed the Monster Translator and Neo-Max weaponry.</p>`,
    forms: ["GUTS Science Suit"],
    arsenal: ["Monster Translator", "Scanner"],
    mecha: [{ name: "Peeper", image: "/ultra/tiga/PeeparSide.webp" }],
    trivia: ["The squad's most valued intellectual asset."],
    gallery: [
      {
        image: "/ultra/tiga/Masami_Horii_Dyna_2.webp",
        description: "Lab analysis.",
      },
    ],
  },
  "jun-yazumi": {
    id: "jun-yazumi",
    name: "Jun Yazumi",
    rangerName: "GUTS Hacker",
    series: "Ultraman Tiga",
    category: "Ultraman",
    color: "Cyan",
    themeColor: "text-cyan-400 border-cyan-400 selection:bg-cyan-400",
    image: "/ultra/tiga/Jun_Yazumi_tiga.webp",
    actor: "Furuya Yoichi",
    bounty: "Expert",
    quote: "Processing data now!",
    homeworld: "Earth",
    firstAppearance: "Ultraman Tiga Ep. 1",
    lastAppearance: "Ultraman Dyna",
    bio: "The youngest member of GUTS. A computer prodigy who manages the team's information systems.",
    history: `<p><strong>Prodigy:</strong> Handpicked by TPC for his extraordinary digital engineering skills.</p>`,
    forms: ["GUTS Tech Suit"],
    arsenal: ["Tactical Computer"],
    mecha: [
      {
        name: "Base Control",
        image:
          "/ultra/tiga/artdessei_plane_fighter_ultraman_tiga_by_pengjuju0420_dfbs5hg-pre.jpg",
      },
    ],
    trivia: ["Manages the Artdessei's main computer."],
    gallery: [
      { image: "/ultra/tiga/Jun_Yazumi_7.webp", description: "Data analysis." },
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
  const [showHackModal, setShowHackModal] = useState(false);
  const [hackProgress, setHackProgress] = useState(0);

  useEffect(() => {
    if (id && characterDatabase[id]) {
      setData(characterDatabase[id]);
    } else {
      setData(characterDatabase["gokai-red"]);
    }
    setActiveTab("profile");
    window.scrollTo(0, 0);
  }, [id]);

  if (!data)
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-red-500 font-mono">
        <Terminal className="mr-2 animate-pulse" /> INITIALIZING ARCHIVE...
      </div>
    );

  const themeHex =
    {
      Yellow: "#facc15",
      Red: "#dc2626",
      Blue: "#3b82f6",
      Green: "#22c55e",
      Pink: "#f472b6",
      Silver: "#d1d5db",
      Purple: "#9333ea",
      Orange: "#f97316",
      Cyan: "#22d3ee",
    }[data.color] || "#ffffff";

  const isUltraman = data.category === "Ultraman";

  const handleDownload = () => {
    setShowHackModal(true);
    setHackProgress(0);
    const interval = setInterval(() => {
      setHackProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setShowHackModal(false), 1000);
          return 100;
        }
        return prev + Math.floor(Math.random() * 20) + 5;
      });
    }, 150);
  };

  return (
    <div
      className={`min-h-screen ${
        isUltraman ? "bg-[#000814]" : "bg-[#050505]"
      } text-zinc-100 font-sans selection:bg-white selection:text-black relative overflow-x-hidden`}
    >
      <Navbar />

      {showHackModal && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/90 backdrop-blur-2xl p-4">
          <div
            className={`w-full max-w-md border ${
              isUltraman
                ? "border-blue-500/30 bg-[#001219]"
                : "border-white/20 bg-zinc-950"
            } p-8 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.8)] relative overflow-hidden`}
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-white/5">
              <div
                className={`h-full ${
                  isUltraman ? "bg-blue-500" : "bg-white"
                } transition-all duration-300 shadow-[0_0_15px_rgba(59,130,246,1)]`}
                style={{ width: `${hackProgress}%` }}
              />
            </div>
            <div className="flex justify-between items-start mb-6">
              <div className="space-y-1">
                <h3 className="text-white font-mono text-sm font-bold tracking-[0.2em] uppercase flex items-center gap-2">
                  <Terminal
                    size={16}
                    className={`${
                      isUltraman ? "text-blue-400" : "text-white"
                    } animate-pulse`}
                  />
                  {isUltraman ? "TPC_ENCRYPTION_LINK" : "DECRYPTING_DOSSIER"}
                </h3>
                <p className="text-[10px] text-zinc-500 font-mono tracking-widest uppercase">
                  Target: {data.id}.sys
                </p>
              </div>
              <button
                onClick={() => setShowHackModal(false)}
                className="text-zinc-500 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            <div className="space-y-4 font-mono text-[10px]">
              <div
                className={`p-4 border rounded-lg ${
                  isUltraman
                    ? "bg-blue-900/20 border-blue-500/20"
                    : "bg-black/50 border-white/5"
                }`}
              >
                <div className="text-green-500 mb-2">{`> BYPASSING_${
                  isUltraman ? "TPC" : "SECURITY"
                }_FIREWALL...`}</div>
                <div className="text-blue-400 mb-2">{`> EXTRACTING_BIOMETRIC_DATA...`}</div>
                <div className="text-white/40 italic">
                  {hackProgress < 100
                    ? `Packet_Loss: 0.00${Math.floor(Math.random() * 9)}%`
                    : "Dossier_Verified. Access Granted."}
                </div>
              </div>
              <div className="flex justify-between items-center tracking-widest uppercase font-bold">
                <span className="text-zinc-500">Progress:</span>
                <span className="text-white">{hackProgress}%</span>
              </div>
            </div>
          </div>
        </div>
      )}

      <section className="relative pt-32 pb-12 md:pt-48 md:pb-24 px-6 md:px-10 lg:px-24 border-b border-white/5 overflow-hidden">
        <div
          className={`absolute inset-0 ${
            isUltraman
              ? "bg-[radial-gradient(#1e3a8a_0.5px,transparent_0.5px)] bg-[size:32px_32px] opacity-10"
              : "bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"
          } pointer-events-none`}
        />
        <div
          className="absolute top-0 right-0 w-full md:w-1/2 h-full opacity-10 pointer-events-none blur-[120px] animate-pulse"
          style={{ backgroundColor: themeHex }}
        />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 md:gap-20 items-center">
          <div className="lg:col-span-5 xl:col-span-4 self-center relative group perspective-1000">
            <div
              className={`absolute -inset-1 bg-gradient-to-r ${
                isUltraman ? "from-blue-500/40" : "from-red-600/40"
              } to-transparent rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition duration-1000`}
            ></div>
            <div
              className={`relative aspect-[3/4] rounded-3xl overflow-hidden border ${
                isUltraman
                  ? "border-blue-500/20 bg-[#001d3d]"
                  : "border-white/10 bg-zinc-950"
              } shadow-[0_30px_60px_rgba(0,0,0,0.8)] transition-all duration-700 group-hover:rotate-y-6`}
            >
              <img
                src={data.image}
                alt={data.name}
                className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <Badge
                  className={`mb-3 backdrop-blur-xl border-white/20 text-[10px] uppercase tracking-[0.2em] px-4 py-1.5 ${
                    isUltraman
                      ? "bg-blue-600/40 text-blue-100"
                      : "bg-white/10 text-white"
                  }`}
                >
                  {data.series}
                </Badge>
                <p className="text-white/40 font-mono text-[9px] uppercase tracking-[0.4em]">
                  Designation: {data.rangerName}
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 xl:col-span-8 space-y-10">
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-zinc-500 font-mono text-[10px] md:text-xs tracking-[0.5em] uppercase">
                <Terminal size={14} className="text-primary animate-pulse" />{" "}
                {isUltraman ? "TPC.ARCHIVE_MANIFEST" : "SYSTEM.DOSSIER_ACCESS"}{" "}
                // {data.id}
              </div>
              <h1
                className={`text-6xl md:text-8xl lg:text-9xl font-black uppercase italic tracking-tighter leading-[0.8] drop-shadow-[0_10px_30px_rgba(0,0,0,1)] ${
                  isUltraman ? "text-blue-50" : "text-white"
                }`}
              >
                {data.rangerName}
              </h1>
              <div className="flex items-center gap-6">
                <div
                  className={`h-px w-24 ${
                    isUltraman ? "bg-blue-500/40" : "bg-white/20"
                  }`}
                />
                <p
                  className={`text-xl md:text-3xl font-light font-mono tracking-widest uppercase italic ${
                    isUltraman ? "text-blue-400" : "text-zinc-500"
                  }`}
                >
                  {data.name}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <StatBox
                label={isUltraman ? "Role" : "Bounty"}
                value={data.bounty}
                icon={<Target size={14} />}
              />
              <StatBox
                label="Origin"
                value={data.homeworld}
                icon={<MapPin size={14} />}
              />
              <StatBox
                label="Biometric"
                value={data.actor}
                icon={<User size={14} />}
              />
              <StatBox
                label="Chroma"
                value={data.color}
                icon={<Layers size={14} />}
              />
            </div>

            <div className="flex flex-wrap gap-5 pt-6">
              <Link href="/characters">
                <Button
                  variant="outline"
                  className="h-16 px-10 border-white/10 bg-white/5 hover:bg-white hover:text-black transition-all font-mono text-[11px] tracking-[0.3em] uppercase rounded-none shadow-2xl"
                >
                  <ArrowLeft className="mr-3 w-4 h-4" /> SYSTEM_EXIT
                </Button>
              </Link>
              <Button
                onClick={handleDownload}
                className={`h-16 px-10 ${
                  isUltraman
                    ? "bg-blue-600 hover:bg-blue-500"
                    : "bg-white hover:bg-zinc-200"
                } text-black rounded-none font-mono text-[11px] tracking-[0.3em] uppercase font-black min-w-[240px] shadow-2xl`}
              >
                <Download className="mr-3" size={16} />{" "}
                {isUltraman ? "TPC_ACCESS_DATA" : "DEPLOY_DOSSIER"}
              </Button>
            </div>
          </div>
        </div>
      </section>

      <nav
        className={`sticky top-0 z-[110] backdrop-blur-2xl border-b border-white/5 px-6 lg:px-24 transition-all duration-500 ${
          isUltraman ? "bg-[#000814]/90" : "bg-[#050505]/90"
        }`}
      >
        <div className="max-w-7xl mx-auto flex gap-10 md:gap-16 overflow-x-auto scrollbar-hide py-6">
          {["profile", "history", "arsenal", "gallery", "trivia"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`whitespace-nowrap text-[11px] font-mono font-black uppercase tracking-[0.5em] transition-all relative ${
                activeTab === tab
                  ? "text-white"
                  : "text-zinc-600 hover:text-zinc-400"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <div
                  className={`absolute -bottom-6 left-0 w-full h-[3px] shadow-[0_0_20px_rgba(255,255,255,0.8)] ${
                    isUltraman ? "bg-blue-400" : "bg-red-600"
                  }`}
                />
              )}
            </button>
          ))}
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 lg:px-24 py-20 md:py-32 min-h-[60vh]">
        {activeTab === "profile" && (
          <div className="grid lg:grid-cols-12 gap-16 items-start animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="lg:col-span-7 space-y-16">
              <div
                className={`relative p-12 md:p-20 border rounded-[3rem] backdrop-blur-3xl group ${
                  isUltraman
                    ? "bg-blue-900/10 border-blue-500/20 shadow-[0_0_100px_rgba(0,10,40,0.5)]"
                    : "bg-white/[0.02] border-white/5 shadow-2xl"
                }`}
              >
                <Quote
                  size={100}
                  className="absolute -top-12 -left-12 text-white/[0.03] group-hover:text-white/[0.08] transition-all duration-700"
                />
                <p className="relative z-10 text-4xl md:text-6xl font-medium italic text-zinc-100 leading-[1.1] mb-12 tracking-tighter">
                  "{data.quote}"
                </p>
                <div
                  className={`w-20 h-1 mb-10 ${
                    isUltraman ? "bg-blue-500" : "bg-red-600"
                  }`}
                />
                <p className="text-zinc-400 text-xl md:text-2xl leading-relaxed font-light">
                  {data.bio}
                </p>
              </div>
            </div>
            <div className="lg:col-span-5 space-y-10">
              <div
                className={`p-10 border rounded-[2.5rem] ${
                  isUltraman
                    ? "bg-blue-900/20 border-blue-500/20"
                    : "bg-zinc-900/40 border-white/5"
                }`}
              >
                <h4 className="text-[11px] text-zinc-500 uppercase font-black tracking-[0.4em] mb-8 flex items-center gap-3">
                  <Activity size={16} className="text-primary" />{" "}
                  {isUltraman ? "TPC_LOG_ENTRY" : "TRANSFORMATION_LOG"}
                </h4>
                <div className="grid gap-4">
                  {data.forms.map((form, i) => (
                    <div
                      key={i}
                      className={`flex items-center gap-4 p-5 rounded-2xl border text-[12px] text-zinc-300 font-mono transition-all group ${
                        isUltraman
                          ? "bg-blue-950/40 border-blue-500/10 hover:border-blue-500/40"
                          : "bg-black/40 border-white/5 hover:border-white/20"
                      }`}
                    >
                      <ChevronRight
                        size={14}
                        className={`${
                          isUltraman ? "text-blue-500" : "text-red-600"
                        } group-hover:translate-x-1 transition-transform`}
                      />{" "}
                      {form}
                    </div>
                  ))}
                </div>
              </div>
              <div
                className={`p-10 border rounded-[2.5rem] ${
                  isUltraman
                    ? "bg-blue-900/20 border-blue-500/20"
                    : "bg-zinc-900/40 border-white/5"
                }`}
              >
                <h4 className="text-[11px] text-zinc-500 uppercase font-black tracking-[0.4em] mb-10 flex items-center gap-3">
                  <Zap size={16} className="text-yellow-500" />{" "}
                  {isUltraman ? "OFFICER_METRICS" : "POWER_EFFICIENCY"}
                </h4>
                <div className="space-y-10">
                  <SkillBar
                    label={isUltraman ? "TACTICAL_DRIVE" : "AGILITY_INDEX"}
                    percent={92}
                    color={themeHex}
                  />
                  <SkillBar
                    label={isUltraman ? "BATTLE_IQ" : "COMBAT_MASTERY"}
                    percent={88}
                    color={isUltraman ? "#3b82f6" : "#ffffff"}
                  />
                  <SkillBar label="WILLPOWER" percent={100} color="#ffffff" />
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "history" && (
          <div className="max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div
              className={`p-12 md:p-24 rounded-[4rem] border relative overflow-hidden ${
                isUltraman
                  ? "bg-blue-900/10 border-blue-500/20"
                  : "bg-white/[0.02] border-white/5"
              }`}
            >
              <Activity
                className={`absolute -top-20 -right-20 opacity-5 ${
                  isUltraman ? "text-blue-500" : "text-white"
                }`}
                size={500}
              />
              <div
                className="relative z-10 prose prose-invert prose-2xl max-w-none prose-p:text-zinc-400 prose-strong:text-white prose-p:leading-[1.8] prose-p:tracking-wide font-light"
                dangerouslySetInnerHTML={{ __html: data.history }}
              />
            </div>
          </div>
        )}

        {activeTab === "arsenal" && (
          <div className="grid lg:grid-cols-2 gap-12 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div
              className={`p-12 rounded-[3rem] border ${
                isUltraman
                  ? "bg-blue-900/10 border-blue-500/20"
                  : "bg-white/[0.02] border-white/5"
              }`}
            >
              <h3 className="text-2xl font-black uppercase text-white mb-12 tracking-[0.4em] flex items-center gap-4">
                <Zap className="text-yellow-500" size={24} />{" "}
                {isUltraman ? "TPC_GEAR" : "GEAR_LOADOUT"}
              </h3>
              <div className="grid gap-5">
                {data.arsenal.map((item, i) => (
                  <div
                    key={i}
                    className={`flex items-center justify-between p-6 rounded-3xl border group transition-all duration-500 ${
                      isUltraman
                        ? "bg-blue-950/40 border-blue-500/10 hover:border-blue-500/30"
                        : "bg-black/40 border-white/5 hover:border-white/20"
                    }`}
                  >
                    <span className="text-zinc-100 font-mono text-sm uppercase tracking-[0.2em]">
                      {item}
                    </span>
                    <Activity
                      size={16}
                      className="text-zinc-800 group-hover:text-primary transition-colors"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div
              className={`p-12 rounded-[3rem] border overflow-hidden ${
                isUltraman
                  ? "bg-blue-900/10 border-blue-500/20"
                  : "bg-white/[0.02] border-white/5"
              }`}
            >
              <h3 className="text-2xl font-black uppercase text-white mb-12 tracking-[0.4em] flex items-center gap-4">
                <Shield className="text-blue-500" size={24} />{" "}
                {isUltraman ? "TPC_ASSETS" : "HEAVY_MECHANICS"}
              </h3>
              {data.mecha.map((mech, i) => (
                <div
                  key={i}
                  className="group relative rounded-[2rem] overflow-hidden border border-white/5 aspect-video bg-black/60 shadow-2xl"
                >
                  <img
                    src={mech.image}
                    alt={mech.name}
                    className="w-full h-full object-contain p-10 group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-10 left-10">
                    <p className="text-3xl font-black uppercase text-white tracking-[0.2em] italic drop-shadow-2xl">
                      {mech.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "gallery" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            {data.gallery.map((item, idx) => (
              <div
                key={idx}
                className={`group relative aspect-[4/5] rounded-[2.5rem] overflow-hidden border shadow-2xl transition-all duration-700 hover:-translate-y-4 ${
                  isUltraman
                    ? "bg-[#001d3d] border-blue-500/20"
                    : "bg-zinc-950 border-white/5"
                }`}
              >
                <img
                  src={item.image}
                  alt={item.description}
                  className="w-full h-full object-cover opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
                <div className="absolute bottom-0 left-0 right-0 p-10 translate-y-6 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <p
                    className={`text-xs font-mono uppercase tracking-[0.2em] leading-relaxed border-l-2 pl-6 ${
                      isUltraman
                        ? "text-blue-100 border-blue-500"
                        : "text-zinc-100 border-red-600"
                    }`}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "trivia" && (
          <div className="grid md:grid-cols-2 gap-10 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            {data.trivia.map((fact, i) => (
              <div
                key={i}
                className={`flex gap-10 p-12 rounded-[3rem] border transition-all duration-700 group hover:scale-[1.02] ${
                  isUltraman
                    ? "bg-blue-900/10 border-blue-500/20"
                    : "bg-white/[0.02] border-white/5 hover:bg-white/[0.04]"
                }`}
              >
                <div className="flex-shrink-0">
                  <div
                    className={`w-16 h-16 rounded-[1.5rem] flex items-center justify-center border transition-all duration-500 ${
                      isUltraman
                        ? "bg-[#000814] border-blue-500/20 group-hover:border-blue-400 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]"
                        : "bg-black border-white/5 group-hover:border-red-600/50 group-hover:shadow-[0_0_30px_rgba(220,38,38,0.3)]"
                    }`}
                  >
                    <Star
                      size={24}
                      className={`transition-colors ${
                        isUltraman
                          ? "text-blue-500 group-hover:text-blue-200"
                          : "text-zinc-600 group-hover:text-red-600"
                      }`}
                    />
                  </div>
                </div>
                <p className="text-zinc-300 text-2xl font-light leading-relaxed tracking-tight">
                  {fact}
                </p>
              </div>
            ))}
          </div>
        )}
      </main>

      <SquadNavigation currentId={data.id} series={data.series} />
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
    <div className="p-7 bg-white/[0.02] border border-white/5 rounded-3xl backdrop-blur-3xl group hover:border-white/20 transition-all duration-500 hover:-translate-y-2">
      <div className="flex items-center gap-3 text-zinc-600 mb-3 text-[10px] uppercase font-black tracking-[0.4em]">
        {icon} {label}
      </div>
      <div className="font-black text-2xl text-zinc-100 truncate group-hover:text-white transition-colors uppercase italic font-mono tracking-tighter">
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
    <div className="space-y-5">
      <div className="flex justify-between items-end">
        <span className="text-zinc-500 font-mono text-[10px] font-black uppercase tracking-[0.4em]">
          {label}
        </span>
        <span className="text-zinc-100 font-mono text-sm font-black">
          {percent}%
        </span>
      </div>
      <div className="h-[3px] w-full bg-white/5 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-[2s] ease-out shadow-[0_0_20px_rgba(255,255,255,0.5)]"
          style={{ width: `${percent}%`, backgroundColor: color }}
        />
      </div>
    </div>
  );
}

function SquadNavigation({
  currentId,
  series,
}: {
  currentId: string;
  series: string;
}) {
  const squad = Object.values(characterDatabase).filter(
    (c) => c.series === series && c.id !== currentId
  );
  const isUltraman = series === "Ultraman Tiga";

  return (
    <div
      className={`border-t border-white/5 py-24 ${
        isUltraman ? "bg-blue-950/10" : "bg-black/20"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-24">
        <h3 className="text-2xl font-black uppercase text-white mb-12 tracking-[0.5em] flex items-center gap-4">
          <Users
            className={isUltraman ? "text-blue-500" : "text-red-600"}
            size={24}
          />{" "}
          {isUltraman ? "TPC_GUTS_OPERATIVES" : "KAIZOKU_SQUAD_MANIFEST"}
        </h3>
        <div className="flex gap-8 overflow-x-auto pb-10 scrollbar-hide snap-x">
          {squad.map((member) => (
            <Link
              href={`/character/${member.id}`}
              key={member.id}
              className={`snap-center shrink-0 w-[240px] group relative aspect-[3/4] rounded-[2.5rem] overflow-hidden border transition-all duration-700 hover:scale-105 ${
                isUltraman
                  ? "border-blue-500/20 bg-[#001d3d] hover:border-blue-500/50"
                  : "border-white/5 bg-zinc-950 hover:border-red-600/30"
              }`}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6">
                <p
                  className={`text-[10px] font-mono uppercase tracking-[0.3em] mb-2 ${
                    isUltraman ? "text-blue-400" : "text-zinc-500"
                  }`}
                >
                  {member.rangerName}
                </p>
                <p className="text-white font-black uppercase italic text-2xl leading-none tracking-tighter">
                  {member.name.split(" ")[0]}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
