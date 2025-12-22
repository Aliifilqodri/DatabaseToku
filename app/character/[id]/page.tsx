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
    bio: "The charismatic leader of the Gokaiger pirates. A former member of the Red Pirates who inherited the Ranger Keys from AkaRed. While he often projects an aura of arrogance and recklessness, he possesses a fiercely protective soul for his crew and an unyielding drive to discover the 'Greatest Treasure in the Universe.'",
    history: `<p><strong>The Genesis:</strong> Marvelous was rescued by AkaRed during the annihilation of his home planet by the Zangyack Empire. Under AkaRed's mentorship, he learned the true weight of the pirate creed.</p><br/><p><strong>The Quest:</strong> Following AkaRed's ultimate sacrifice, Marvelous forged a new crew—Joe, Luka, Doc, and Ahim—navigating the treacherous reaches of the cosmos to unlock the secrets of the 34 past Super Sentai teams.</p>`,
    forms: ["Standard Gokai Red", "Gokai Red Gold Mode", "Galleon Armor Mode"],
    arsenal: ["Mobilate", "Gokai Saber", "Gokai Gun", "Ranger Keys"],
    mecha: [
      {
        name: "Gokai Galleon",
        image: "/sentai/marvelous/KSG-GokaiGalleon.webp",
      },
    ],
    trivia: [
      "Possesses an insatiable craving for Earth's curry.",
      "Despises mundane tasks and bureaucratic boredom.",
      "The first individual in history to have an 'Unlimited' bounty tag.",
    ],
    gallery: [
      {
        image: "/sentai/marvelous/Captain_Marvelous_29.webp",
        description: "Marvelous during the SSSB deployment.",
      },
      {
        image: "/sentai/marvelous/Marvelous_in_KingOhger_In_Space.webp",
        description: "Interspecies tactical alliance in KingOhger space.",
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
    quote: "I will cut down anything that stands in my path.",
    homeworld: "Unknown",
    firstAppearance: "Gokaiger Ep. 1",
    lastAppearance: "Ten Gokaiger",
    bio: "The crew's stoic first mate and master swordsman. A former elite Zangyack operative who defected after refusing a direct order to execute civilians. His cold exterior masks a deep sense of honor and absolute loyalty to Marvelous.",
    history: `<p><strong>Defection:</strong> Originally a high-ranking special forces soldier for Zangyack. He was trained in the arts of lethal swordsmanship by his mentor, Sid Bamick.</p><br/><p><strong>The Vow:</strong> After Sid was forcibly converted into the cyborg Barizorg, Joe swore an oath to either restore his soul or put his master to rest with his own blades.</p>`,
    forms: ["Standard Gokai Blue", "Cross Armor Mode", "5-Sword Style Mastery"],
    arsenal: [
      "Mobilate",
      "Gokai Saber (Dual/Multi Wield)",
      "Gokai Gun",
      "Ranger Keys",
    ],
    mecha: [{ name: "Gokai Jet", image: "/sentai/joe/KSG-Gokai_Jet.webp" }],
    trivia: [
      "Capable of wielding five swords simultaneously with surgical precision.",
      "Notoriously unskilled at culinary arts, specifically baking.",
      "Maintains a strict physical conditioning regimen of 1000+ reps daily.",
    ],
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
    color: "Yellow",
    themeColor:
      "text-yellow-400 border-yellow-400 selection:bg-yellow-400 selection:text-black",
    image: "/sentai/luka/Luka_Millfy.webp",
    actor: "Mao Ichimichi",
    bounty: "Z=3,000,000",
    quote: "Ay-yi-yi, this place is a total mess!",
    homeworld: "Unknown Planet",
    firstAppearance: "Goseiger vs. Shinkenger",
    lastAppearance: "Ten Gokaiger",
    bio: "The team's sharp-tongued scout and resident treasure hunter. Born into extreme poverty on a Zangyack-occupied world, she developed an obsession with wealth—not for greed, but to buy 'The World' to ensure no child ever suffers like she did.",
    history: `<p><strong>Survivor:</strong> Witnessed the death of her sister, Lia, due to lack of medical resources. She survived as a high-stakes thief in the galactic underworld.</p><br/><p><strong>Alliance:</strong> Encountered Marvelous and Joe while attempting to hijack the same Zangyack supply freighter.</p>`,
    forms: [
      "Standard Gokai Yellow",
      "Cross Armor Mode",
      "Gokai Christmas Hybrid",
    ],
    arsenal: [
      "Mobilate",
      "Gokai Saber (Whip-Sword Mode)",
      "Gokai Gun",
      "Wire Hook",
    ],
    mecha: [
      { name: "Gokai Trailer", image: "/sentai/luka/KSG-Gokai_Trailer.webp" },
    ],
    trivia: [
      "Has a biological aversion to broccoli.",
      "Operates as the crew's unofficial loan shark with high interest rates.",
      "Expert in high-tier infiltration and espionage.",
    ],
    gallery: [
      {
        image: "/sentai/luka/Gaisoulg_29_Profile.webp",
        description: "Neural link with the Gaisoulg armor.",
      },
      {
        image: "/sentai/luka/Luka_and_Raptor.webp",
        description: "Joint operation with Space Squad assets.",
      },
    ],
  },
  "gokai-green": {
    id: "gokai-green",
    name: "Don Dogoier",
    rangerName: "Gokai Green",
    series: "Kaizoku Sentai Gokaiger",
    color: "Green",
    themeColor:
      "text-green-500 border-green-500 selection:bg-green-500 selection:text-white",
    image: "/sentai/don/Don_Dogoier.webp",
    actor: "Kazuki Shimizu",
    bounty: "Z=300,000",
    quote: "I-I'll do my very best!",
    homeworld: "Unknown",
    firstAppearance: "Gokaiger Ep. 1",
    lastAppearance: "Ten Gokaiger",
    bio: "Affectionately known as 'Doc,' he serves as the Galleon's engineer, chef, and tactical analyst. Despite his timid nature and tendency to panic, his genius-level intellect and unconventional fighting style are vital to the team's survival.",
    history: `<p><strong>Recruitment:</strong> Marvelous initially scouted him for his technical and domestic skills. Doc turned the Galleon into a home rather than just a warship.</p><br/><p><strong>Combat Style:</strong> He utilizes a chaotic, acrobatic 'accidental' fighting style that confuses enemies, turning his fear into unpredictable maneuvers.</p>`,
    forms: ["Standard Gokai Green", "Gokai Christmas"],
    arsenal: [
      "Mobilate",
      "Gokai Gun (Dual Wield Master)",
      "Tactical Laptop",
      "Ranger Keys",
    ],
    mecha: [{ name: "Gokai Racer", image: "/sentai/don/KSG-Gokai_Racer.webp" }],
    trivia: [
      "Holds the record for the most frequent 'comic relief' bounty updates.",
      "Culinary skills are rated at Galactic 5-Star levels.",
      "Possesses near-instantaneous mechanical repair capabilities.",
    ],
    gallery: [
      {
        image: "/sentai/don/Don_Dogoier_29.webp",
        description: "Standard tactical stress analysis.",
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
    quote: "I shall fight with grace and elegance.",
    homeworld: "Famille",
    firstAppearance: "Gokaiger Ep. 1",
    lastAppearance: "Ten Gokaiger",
    bio: "The last princess of the fallen Planet Famille. She chose the life of a pirate to serve as a beacon of hope for her scattered people, proving that royalty does not hide but fights for its subjects. She is the epitome of grace under fire.",
    history: `<p><strong>The Princess:</strong> After witnessing the destruction of her kingdom by the Zangyack commander Zatsurig, she joined the Gokaigers to ensure her face appeared on wanted posters as a signal to survivors.</p><br/><p><strong>The Duelist:</strong> Specializes in long-range suppression using dual Gokai Guns with a distinct, ballet-like precision.</p>`,
    forms: ["Standard Gokai Pink", "Cross Armor Mode"],
    arsenal: ["Mobilate", "Gokai Gun (Akimbo Proficiency)", "Ranger Keys"],
    mecha: [
      { name: "Gokai Marine", image: "/sentai/ahim/KSG-Gokai_Marine.webp" },
    ],
    trivia: [
      "An expert in high-society tea ceremonies and diplomacy.",
      "Functions as the crew's primary moral compass and mediator.",
      "Only member of the team with confirmed royal lineage.",
    ],
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
    bio: "The only Earthling on the team and the world's premier Super Sentai historian. He gained his powers through a heroic act of self-sacrifice, earning the respect of the spirits of past Sixth Rangers.",
    history: `<p><strong>Ascension:</strong> While in a near-death state after saving a child, he was visited by the spirits of DragonRanger, TimeFire, and AbareKiller, who entrusted him with the Gokai Cellular.</p><br/><p><strong>The Fanatic:</strong> Acts as the crew's living encyclopedia, often providing crucial tactical data regarding the powers of the past Sentai generations.</p>`,
    forms: [
      "Standard Gokai Silver",
      "Gold Mode (15-Ranger Fusion)",
      "Cross Armor Mode",
    ],
    arsenal: ["Gokai Cellular", "Gokai Spear (Trident/Gun Mode)", "Anchor Key"],
    mecha: [{ name: "GoZyuDrill", image: "/sentai/gai/KSG-GozyuDrill.webp" }],
    trivia: [
      "Architect of the 'Gold Mode' fusion armor.",
      "Exhibits extreme hyper-excitement when meeting past Sentai warriors.",
      "Developed a custom Anchor Key for multi-fusion transformations.",
    ],
    gallery: [
      {
        image: "/sentai/gai/Gai_and_Misao.webp",
        description: "Historical summit with Zyuoh The World.",
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
  const [showHackModal, setShowHackModal] = useState(false);
  const [hackProgress, setHackProgress] = useState(0);

  useEffect(() => {
    if (id && characterDatabase[id]) {
      setData(characterDatabase[id]);
    } else {
      setData(characterDatabase["gokai-red"]);
    }
    // Reset tab ketika pindah karakter
    setActiveTab("profile");
    // Scroll ke atas ketika pindah karakter
    window.scrollTo(0, 0);
  }, [id]);

  if (!data)
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-red-500 font-mono">
        <Terminal className="mr-2 animate-pulse" /> INITIALIZING ARCHIVE LINK...
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
    }[data.color] || "#ffffff";

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
      className={`min-h-screen bg-[#050505] text-zinc-100 font-sans selection:bg-white selection:text-black relative`}
    >
      <Navbar />

      {showHackModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-xl p-4">
          <div className="w-full max-w-md border border-white/20 bg-zinc-950 p-8 rounded-2xl shadow-[0_0_50px_rgba(255,255,255,0.1)] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-white/5">
              <div
                className="h-full bg-white transition-all duration-300 shadow-[0_0_15px_#fff]"
                style={{ width: `${hackProgress}%` }}
              />
            </div>
            <div className="flex justify-between items-start mb-6">
              <div className="space-y-1">
                <h3 className="text-white font-mono text-sm font-bold tracking-[0.2em] uppercase flex items-center gap-2">
                  <Terminal size={16} className="text-white animate-pulse" />{" "}
                  Decrypting_Dossier
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
            <div className="space-y-4 font-mono">
              <div className="bg-black/50 p-4 border border-white/5 rounded-lg">
                <div className="text-[10px] text-green-500 mb-2">
                  {" "}
                  {`> BYPASSING_ZANGYACK_FIREWALL...`}
                </div>
                <div className="text-[10px] text-blue-400 mb-2">
                  {" "}
                  {`> EXTRACTING_BIOMETRIC_DATA...`}
                </div>
                <div className="text-[10px] text-white/40 italic">
                  {hackProgress < 100
                    ? `Packet_Loss: 0.00${Math.floor(Math.random() * 9)}%`
                    : "Dossier_Verified. Access Granted."}
                </div>
              </div>
              <div className="flex justify-between items-center text-[10px] tracking-widest uppercase font-bold">
                <span className="text-zinc-500">Progress:</span>
                <span className="text-white">{hackProgress}%</span>
              </div>
            </div>
          </div>
        </div>
      )}

      <section className="relative pt-24 pb-12 md:pt-40 md:pb-20 px-4 md:px-10 lg:px-24 border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
        <div
          className="absolute top-0 right-0 w-full md:w-1/2 h-full opacity-10 pointer-events-none blur-[120px]"
          style={{ backgroundColor: themeHex }}
        />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-8 md:gap-16 items-center">
          <div className="lg:col-span-5 xl:col-span-4 self-center relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-white/20 to-transparent rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden border border-white/10 bg-zinc-950 shadow-2xl">
              <img
                src={data.image}
                alt={data.name}
                className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <Badge className="mb-2 bg-white/10 backdrop-blur-md border-white/20 text-[10px] uppercase tracking-widest">
                  {data.series}
                </Badge>
                <p className="text-white/50 font-mono text-[10px] uppercase tracking-[0.3em]">
                  Designation: {data.rangerName}
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 xl:col-span-8 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-zinc-500 font-mono text-[10px] md:text-xs tracking-[0.4em] uppercase">
                <Terminal size={14} /> System.Archives // {data.id}
              </div>
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black uppercase italic tracking-tighter leading-none text-white drop-shadow-2xl">
                {data.rangerName}
              </h1>
              <div className="flex items-center gap-4">
                <div className="h-px w-16 bg-white/20" />
                <p className="text-xl md:text-2xl font-light text-zinc-400 font-mono tracking-widest uppercase italic">
                  {data.name}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4">
              <StatBox
                label="Bounty"
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

            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/character">
                <Button
                  variant="outline"
                  className="h-14 px-8 border-white/10 bg-white/5 hover:bg-white hover:text-black transition-all font-mono text-[10px] tracking-widest uppercase rounded-none"
                >
                  <ArrowLeft className="mr-3 w-4 h-4" /> System.Exit
                </Button>
              </Link>
              <Button
                onClick={handleDownload}
                className="h-14 px-8 bg-zinc-100 text-black hover:bg-white rounded-none font-mono text-[10px] tracking-widest uppercase font-bold min-w-[200px]"
              >
                <Download className="mr-3" /> DOWNLOAD_DOSSIER
              </Button>
            </div>
          </div>
        </div>
      </section>

      <nav className="sticky top-16 z-40 bg-[#050505]/80 backdrop-blur-md border-b border-white/5 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto flex gap-8 md:gap-12 overflow-x-auto scrollbar-hide py-5">
          {["profile", "history", "arsenal", "gallery", "trivia"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`whitespace-nowrap text-[10px] md:text-xs font-mono font-bold uppercase tracking-[0.4em] transition-all relative ${
                activeTab === tab
                  ? "text-white"
                  : "text-zinc-600 hover:text-zinc-400"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <div className="absolute -bottom-5 left-0 w-full h-[2px] bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)]" />
              )}
            </button>
          ))}
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 lg:px-24 py-12 md:py-24 min-h-[50vh]">
        {activeTab === "profile" && (
          <div className="grid lg:grid-cols-12 gap-16 items-start animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="lg:col-span-7 space-y-12">
              <div className="relative p-10 md:p-14 bg-white/[0.02] border border-white/5 rounded-[2rem] backdrop-blur-sm group">
                <Quote
                  size={80}
                  className="absolute -top-10 -left-10 text-white/[0.03] group-hover:text-white/[0.07] transition-colors"
                />
                <p className="relative z-10 text-3xl md:text-5xl font-medium italic text-zinc-100 leading-tight mb-10 tracking-tight">
                  "{data.quote}"
                </p>
                <p className="text-zinc-400 text-lg md:text-xl leading-relaxed font-light border-l-2 border-white/10 pl-8">
                  {data.bio}
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-8">
              <div className="p-8 bg-zinc-900/40 border border-white/5 rounded-3xl">
                <h4 className="text-[10px] text-zinc-500 uppercase font-black tracking-[0.3em] mb-6 flex items-center gap-2">
                  <Activity size={14} /> Combat_Forms.log
                </h4>
                <div className="grid gap-3">
                  {data.forms.map((form, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-4 bg-black/40 rounded-xl border border-white/5 text-[11px] text-zinc-300 font-mono hover:border-white/20 transition-all"
                    >
                      <ChevronRight size={12} className="text-zinc-700" />{" "}
                      {form}
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-8 bg-zinc-900/40 border border-white/5 rounded-3xl">
                <h4 className="text-[10px] text-zinc-500 uppercase font-black tracking-[0.3em] mb-8 flex items-center gap-2">
                  <Zap size={14} /> Efficiency_Matrix.sys
                </h4>
                <div className="space-y-8">
                  <SkillBar
                    label="Agility_Drive"
                    percent={92}
                    color={themeHex}
                  />
                  <SkillBar
                    label="Tactical_Combat"
                    percent={88}
                    color="#ffffff"
                  />
                  <SkillBar label="Will_Power" percent={100} color="#ffffff" />
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "history" && (
          <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="bg-white/[0.02] p-10 md:p-16 rounded-[3rem] border border-white/5 relative overflow-hidden">
              <Activity
                className="absolute -top-10 -right-10 text-white/[0.02]"
                size={300}
              />
              <div
                className="relative z-10 prose prose-invert prose-lg max-w-none prose-p:text-zinc-400 prose-strong:text-white prose-p:leading-relaxed"
                dangerouslySetInnerHTML={{ __html: data.history }}
              />
            </div>
          </div>
        )}

        {activeTab === "arsenal" && (
          <div className="grid lg:grid-cols-2 gap-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="p-10 bg-white/[0.02] rounded-[2.5rem] border border-white/5">
              <h3 className="text-xl font-bold uppercase text-white mb-10 tracking-[0.2em] flex items-center gap-3">
                <Zap className="text-yellow-500" size={20} /> Tactical_Loadout
              </h3>
              <div className="grid gap-4">
                {data.arsenal.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-5 bg-black/40 rounded-2xl border border-white/5 group hover:border-white/20 transition-all"
                  >
                    <span className="text-zinc-300 font-mono text-sm uppercase tracking-widest">
                      {item}
                    </span>
                    <Activity
                      size={14}
                      className="text-zinc-800 group-hover:text-zinc-500 transition-colors"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="p-10 bg-white/[0.02] rounded-[2.5rem] border border-white/5 overflow-hidden">
              <h3 className="text-xl font-bold uppercase text-white mb-10 tracking-[0.2em] flex items-center gap-3">
                <Shield className="text-blue-500" size={20} /> Heavy_Assets
              </h3>
              {data.mecha.map((mech, i) => (
                <div
                  key={i}
                  className="group relative rounded-3xl overflow-hidden border border-white/5 aspect-video bg-black/40"
                >
                  <img
                    src={mech.image}
                    alt={mech.name}
                    className="w-full h-full object-contain p-8 group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-8 left-8">
                    <p className="text-2xl font-black uppercase text-white tracking-widest italic">
                      {mech.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "gallery" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {data.gallery.map((item, idx) => (
              <div
                key={idx}
                className="group relative aspect-[4/5] bg-zinc-950 rounded-3xl overflow-hidden border border-white/5 shadow-2xl"
              >
                <img
                  src={item.image}
                  alt={item.description}
                  className="w-full h-full object-cover opacity-50 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-xs font-mono text-zinc-100 uppercase tracking-tighter leading-relaxed border-l-2 border-white pl-4">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "trivia" && (
          <div className="grid md:grid-cols-2 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {data.trivia.map((fact, i) => (
              <div
                key={i}
                className="flex gap-8 p-10 bg-white/[0.02] rounded-3xl border border-white/5 hover:bg-white/[0.04] transition-all group"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-2xl bg-black flex items-center justify-center border border-white/5 group-hover:border-yellow-500/50 transition-colors">
                    <Star
                      size={18}
                      className="text-zinc-600 group-hover:text-yellow-500"
                    />
                  </div>
                </div>
                <p className="text-zinc-400 text-lg font-light leading-relaxed">
                  {fact}
                </p>
              </div>
            ))}
          </div>
        )}
      </main>

      <SquadNavigation currentId={data.id} />
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
    <div className="p-5 bg-white/[0.03] border border-white/5 rounded-2xl backdrop-blur-md group hover:border-white/20 transition-all hover:-translate-y-1 duration-300">
      <div className="flex items-center gap-2 text-zinc-600 mb-2 text-[9px] uppercase font-bold tracking-[0.3em]">
        {icon} {label}
      </div>
      <div className="font-bold text-lg text-zinc-100 truncate group-hover:text-white transition-colors uppercase italic font-mono tracking-tight">
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
    <div className="space-y-4">
      <div className="flex justify-between items-end">
        <span className="text-zinc-500 font-mono text-[10px] uppercase tracking-[0.2em]">
          {label}
        </span>
        <span className="text-zinc-100 font-mono text-xs font-bold">
          {percent}%
        </span>
      </div>
      <div className="h-[2px] w-full bg-white/5 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out shadow-[0_0_10px_rgba(255,255,255,0.3)]"
          style={{ width: `${percent}%`, backgroundColor: color }}
        />
      </div>
    </div>
  );
}

function SquadNavigation({ currentId }: { currentId: string }) {
  const squad = Object.values(characterDatabase).filter(
    (c) => c.id !== currentId
  );
  return (
    <div className="border-t border-white/5 bg-black/20 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-24">
        <h3 className="text-xl font-bold uppercase text-white mb-8 tracking-[0.2em] flex items-center gap-3">
          <Users className="text-red-600" size={20} /> Squad_Manifest
        </h3>
        <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x">
          {squad.map((member) => (
            <Link
              // UPDATE: Sesuai request folder mas '/character' (tunggal)
              href={`/character/${member.id}`}
              key={member.id}
              className="snap-center shrink-0 w-[200px] group relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/5 bg-zinc-950"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <p className="text-[9px] text-zinc-400 font-mono uppercase tracking-widest mb-1">
                  {member.rangerName}
                </p>
                <p className="text-white font-bold uppercase italic text-lg leading-none">
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
