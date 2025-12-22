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
} from "lucide-react";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const generateEpisodes = () => {
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
    title: titles[i] || `Episode ${i + 1}: Cosmic Odyssey`,
    duration: "24 min",
    type: "TV",
  }));
};

const gokaigerMoviesList = [
  {
    id: "m1",
    title: "Gokaiger Goseiger Super Sentai 199 Hero Great Battle",
    duration: "1h 21m",
    type: "Movie",
  },
  {
    id: "m2",
    title: "Kaizoku Sentai Gokaiger the Movie: The Flying Ghost Ship",
    duration: "30m",
    type: "Movie",
  },
  {
    id: "m3",
    title: "Kaizoku Sentai Gokaiger vs. Space Sheriff Gavan",
    duration: "1h 04m",
    type: "Movie",
  },
  {
    id: "m4",
    title: "Kamen Rider x Super Sentai: Super Hero Taisen",
    duration: "1h 29m",
    type: "Crossover",
  },
  {
    id: "m5",
    title: "Tokumei Sentai Go-Busters vs. Kaizoku Sentai Gokaiger",
    duration: "1h 00m",
    type: "Movie",
  },
  {
    id: "m6",
    title: "Kaizoku Sentai: Ten Gokaiger",
    duration: "1h 01m",
    type: "V-Cinext",
  },
];

const seriesDatabase: any = {
  "kaizoku-sentai-gokaiger": {
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
        role: "Rival / Villain",
        img: "/sentai/support/Kei_Hosogai_Headshot.webp",
      },
    ],
    forms: [
      "Gokai Change",
      "Gold Mode",
      "Cross Armor Mode",
      "Gokai Red Gold Mode",
      "Tajadol Charge",
    ],
    wikiStats: {
      "Suit Actor": "Hirofumi Fukuzawa",
      Network: "TV Asahi",
      "Theme Song": "Kaizoku Sentai Gokaiger",
      "Next Series": "Tokumei Sentai Go-Busters",
    },
    episodeList: generateEpisodes(),
    movieList: gokaigerMoviesList,
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

  useEffect(() => {
    const found =
      seriesDatabase[id] || seriesDatabase["kaizoku-sentai-gokaiger"];
    if (found) setData(found);
    setLoading(false);
  }, [id]);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  if (loading)
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-white font-oswald animate-pulse">
        INITIALIZING ARCHIVE...
      </div>
    );
  if (!data)
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white">
        <h1>404 - DATA CORRUPTED</h1>
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
                System Error
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
          {["overview", "cast", "arsenal & movies", "episodes"].map((tab) => (
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
          ))}
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

          {activeTab === "arsenal & movies" && (
            <div className="space-y-12">
              <section>
                <h3 className="font-oswald text-2xl text-white uppercase mb-6 flex items-center gap-2">
                  <Zap size={20} className="text-primary" /> Movie Manifest
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {data.movieList.map((movie: any) => (
                    <div
                      key={movie.id}
                      className="bg-zinc-900/40 border border-white/5 p-5 md:p-6 group hover:border-primary/50 transition-all"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <Badge className="bg-primary text-black rounded-none text-[10px]">
                          {movie.type}
                        </Badge>
                        <span className="text-[10px] font-mono text-zinc-600">
                          {movie.duration}
                        </span>
                      </div>
                      <h4 className="font-oswald text-lg md:text-xl font-bold text-white uppercase group-hover:text-primary transition-colors">
                        {movie.title}
                      </h4>
                    </div>
                  ))}
                </div>
              </section>
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
                      className="text-zinc-800 group-hover:text-primary transition-all group-hover:scale-110"
                    />
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
              Archive server offline due to Zangyack intrusion. Recalibrating
              decryption layers.
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
