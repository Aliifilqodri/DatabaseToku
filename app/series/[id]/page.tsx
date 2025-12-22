"use client";

import { useState, useEffect, use } from "react";
import { Navbar } from "@/components/navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Calendar,
  Star,
  Users,
  Shield,
  Zap,
  Info,
  Share2,
  Music,
  Check,
  PlayCircle,
  ChevronDown,
  Film,
  AlertTriangle,
  Wrench,
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
  ];

  return Array.from({ length: 51 }, (_, i) => ({
    id: i + 1,
    title: titles[i] || `Episode ${i + 1}: The Pirate's Journey`,
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
    desc: "Set sail into a cosmic odyssey where rebellion meets legacy! Five outlaws from across the stars arrive on Earth seeking the 'Greatest Treasure in the Universe,' only to find a world protected by the spirits of 34 legendary Super Sentai teams. Wielding the power of Ranger Keys, these pirates don't fight for justice—they fight for their own destiny, turning every battle into a spectacular showdown against the tyrannical Space Empire Zangyack.",
    epicHistory:
      "Against the crushing weight of an interstellar armada, the Gokaigers waged a war of sheer willpower and defiant flair. From the burning ruins of fallen empires to the final stand on Earth's soil, their journey was a baptism of fire where self-serving pirates evolved into the planet's ultimate shield. Through the 'Grand Powers' of those who came before them, they proved that true courage isn't granted by blood or title, but forged in the heat of battle and the unbreakable bonds of comradeship.",
    year: "2011 - 2012",
    episodes: 51,
    studio: "Toei Company",
    writer: "Naruhisa Arakawa",
    director: "Shojiro Nakazawa",
    rating: 5.0,
    image: "/sentai/Gokaiger_29.webp",
    color: "from-red-600 to-yellow-500",
    soundtrack: {
      op: "https://open.spotify.com/embed/track/12",
      ed: "https://open.spotify.com/embed/track/13",
    },
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
  const [showAllEpisodes, setShowAllEpisodes] = useState(false);

  useEffect(() => {
    const found =
      seriesDatabase[id] || seriesDatabase["kaizoku-sentai-gokaiger"];
    if (found) {
      setData(found);
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
      <div className="min-h-screen bg-black flex items-center justify-center text-white font-oswald tracking-widest">
        INITIALIZING ARCHIVES...
      </div>
    );

  if (!data)
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl font-oswald mb-4 tracking-tighter">
          404 - DATA NOT FOUND
        </h1>
        <Link href="/">
          <Button className="rounded-none font-oswald">Return to Base</Button>
        </Link>
      </div>
    );

  const displayedEpisodes = showAllEpisodes
    ? data.episodeList
    : data.episodeList.slice(0, 5);

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-primary selection:text-white pb-20">
      <Navbar />

      <div className="relative h-[85vh] w-full overflow-hidden">
        <div className="absolute inset-0 animate-in fade-in zoom-in duration-1000">
          <img
            src={data.image}
            alt={data.title}
            className="h-full w-full object-cover brightness-[0.4]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
          <div
            className={`absolute inset-0 bg-gradient-to-r ${data.color} opacity-20 mix-blend-overlay`}
          />
        </div>

        <div className="absolute inset-0 flex items-center px-6 sm:px-12 lg:px-20">
          <div className="w-full max-w-4xl space-y-6 pt-20">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm font-medium mb-4 uppercase tracking-widest"
            >
              <ArrowLeft size={16} /> Back to Database
            </Link>

            <div className="flex flex-wrap gap-3 animate-in slide-in-from-left duration-700">
              <Badge className="bg-white text-black font-bold text-sm px-3 rounded-none">
                {data.year}
              </Badge>
              <Badge
                variant="outline"
                className="text-gray-300 border-white/20 uppercase tracking-widest rounded-none"
              >
                {data.episodes} Episodes
              </Badge>
              <Badge className="bg-yellow-500 text-black font-bold flex gap-1 rounded-none">
                <Star size={12} fill="black" /> {data.rating}
              </Badge>
            </div>

            <div className="animate-in slide-in-from-bottom duration-700 delay-100">
              <h2 className="font-oswald text-3xl text-gray-400 font-bold uppercase tracking-[0.3em] mb-2">
                {data.jpTitle}
              </h2>
              <h1 className="font-oswald text-6xl md:text-8xl font-black italic uppercase tracking-tighter leading-[0.9] mb-6 text-white text-shadow-lg">
                {data.title}
              </h1>
              <p className="text-xl font-medium text-primary italic">
                "{data.tagline}"
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-6 animate-in fade-in duration-1000 delay-300">
              <Button
                size="lg"
                className="h-16 px-10 bg-zinc-800/50 hover:bg-zinc-700/50 text-gray-400 border-2 border-dashed border-zinc-600 font-oswald text-xl uppercase tracking-[0.2em] rounded-none transition-all cursor-not-allowed group relative overflow-hidden"
                onClick={() => setIsMaintenanceOpen(true)}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full duration-1000 transition-transform" />
                <AlertTriangle
                  className="mr-3 text-yellow-600 animate-pulse"
                  size={24}
                />
                System Error
              </Button>
              <Button
                variant="outline"
                className="h-16 px-8 border-white/20 bg-white/5 hover:bg-white/10 text-white font-oswald text-xl uppercase tracking-widest rounded-none clip-angle"
                onClick={handleShare}
              >
                {isCopied ? (
                  <>
                    <Check className="mr-2" size={20} /> Data Copied
                  </>
                ) : (
                  <>
                    <Share2 className="mr-2" size={20} /> Share Files
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 -mt-20 relative z-10">
        <div className="flex overflow-x-auto scrollbar-hide border-b border-white/10 bg-[#050505]/90 backdrop-blur-md sticky top-[70px] z-40">
          {["overview", "cast", "mecha & forms", "episodes"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-5 font-oswald text-lg font-bold uppercase tracking-widest transition-all border-b-4 whitespace-nowrap ${
                activeTab === tab
                  ? "border-primary text-white bg-white/5"
                  : "border-transparent text-gray-500 hover:text-gray-300 hover:bg-white/5"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="py-12 min-h-[500px] animate-in fade-in slide-in-from-bottom-5 duration-500">
          {activeTab === "overview" && (
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-12">
                <section>
                  <h3 className="font-oswald text-3xl text-white uppercase mb-6 flex items-center gap-3">
                    <Info size={28} className="text-primary" /> Chronicle Brief
                  </h3>
                  <p className="text-gray-300 text-xl leading-relaxed font-light mb-8">
                    {data.desc}
                  </p>
                  <div className="p-8 bg-white/5 border-l-4 border-yellow-500 italic">
                    <p className="text-gray-200 text-lg leading-relaxed font-medium">
                      {data.epicHistory}
                    </p>
                  </div>
                </section>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="bg-zinc-900/40 p-8 border border-white/5 rounded-none border-l-4 border-primary">
                    <h4 className="text-xs text-gray-500 uppercase tracking-[0.3em] mb-2 font-bold">
                      Primary Architect
                    </h4>
                    <p className="text-2xl font-bold font-oswald text-white uppercase">
                      {data.writer}
                    </p>
                  </div>
                  <div className="bg-zinc-900/40 p-8 border border-white/5 rounded-none border-l-4 border-primary">
                    <h4 className="text-xs text-gray-500 uppercase tracking-[0.3em] mb-2 font-bold">
                      Tactical Director
                    </h4>
                    <p className="text-2xl font-bold font-oswald text-white uppercase">
                      {data.director}
                    </p>
                  </div>
                </div>
              </div>
              <aside className="space-y-6">
                <div className="bg-zinc-900/80 border border-white/10 p-8">
                  <h3 className="font-oswald text-xl uppercase tracking-[0.2em] text-white mb-8 border-b border-white/10 pb-4">
                    Technical Logs
                  </h3>
                  <div className="space-y-6 font-mono text-sm">
                    {data.wikiStats &&
                      Object.entries(data.wikiStats).map(
                        ([key, value]: any) => (
                          <div
                            key={key}
                            className="flex flex-col gap-1 border-b border-white/5 pb-3"
                          >
                            <span className="text-primary/60 uppercase text-[10px] tracking-widest">
                              {key}
                            </span>
                            <span className="text-white font-bold text-base">
                              {value}
                            </span>
                          </div>
                        )
                      )}
                    <div className="flex flex-col gap-1">
                      <span className="text-primary/60 uppercase text-[10px] tracking-widest">
                        Production Studio
                      </span>
                      <span className="text-white font-bold text-base">
                        {data.studio}
                      </span>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          )}

          {activeTab === "cast" && (
            <div>
              <h3 className="font-oswald text-2xl text-white uppercase mb-8 flex items-center gap-2">
                <Users size={24} className="text-primary" /> Hero Roster
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {data.cast?.map((actor: any, idx: number) => (
                  <div
                    key={idx}
                    className="group relative aspect-[3/4] bg-zinc-900 overflow-hidden border border-white/10 transition-all hover:border-primary"
                  >
                    <img
                      src={actor.img}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-110 group-hover:scale-100"
                      alt={actor.name}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 w-full p-4">
                      <p className="text-white font-oswald font-bold text-lg uppercase leading-none mb-1">
                        {actor.role}
                      </p>
                      <p className="text-primary text-[10px] font-bold tracking-widest uppercase">
                        {actor.actor}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "mecha & forms" && (
            <div>
              <h3 className="font-oswald text-2xl text-white uppercase mb-8 flex items-center gap-2">
                <Zap size={24} className="text-primary" /> Evolution Modules
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {data.forms?.map((form: string, idx: number) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-6 bg-zinc-900/50 border border-white/5 hover:bg-primary/5 transition-all group cursor-crosshair"
                  >
                    <div className="flex items-center gap-6">
                      <Shield
                        size={24}
                        className="text-zinc-700 group-hover:text-primary transition-colors"
                      />
                      <span className="font-oswald text-xl uppercase tracking-widest text-zinc-400 group-hover:text-white">
                        {form}
                      </span>
                    </div>
                    <div className="h-px w-12 bg-zinc-800 group-hover:w-20 transition-all" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "episodes" && (
            <div className="max-w-4xl mx-auto">
              <div className="flex justify-between items-center mb-12">
                <h3 className="font-oswald text-3xl text-white uppercase tracking-wider flex items-center gap-3">
                  <Calendar size={28} className="text-primary" /> Episode
                  Manifest
                </h3>
              </div>
              <div className="space-y-4">
                {displayedEpisodes.map((ep: any) => (
                  <div
                    key={ep.id}
                    className="group flex items-center gap-6 p-6 bg-zinc-900/20 border border-white/5 hover:border-primary/40 transition-all"
                  >
                    <span className="font-oswald font-black text-4xl text-zinc-800 group-hover:text-primary transition-colors italic">
                      #{ep.id}
                    </span>
                    <div className="flex-1">
                      <h4 className="font-oswald font-bold text-xl text-gray-200 group-hover:text-white uppercase tracking-wide">
                        {ep.title}
                      </h4>
                      <p className="text-[10px] font-mono text-zinc-600 uppercase mt-1">
                        Runtime: {ep.duration} | Format: {ep.type}
                      </p>
                    </div>
                    <PlayCircle
                      size={32}
                      className="text-zinc-800 group-hover:text-primary transition-all group-hover:scale-110"
                    />
                  </div>
                ))}
                {!showAllEpisodes && (
                  <Button
                    onClick={() => setShowAllEpisodes(true)}
                    className="w-full h-16 bg-white text-black font-oswald text-xl uppercase rounded-none hover:bg-primary hover:text-white transition-all"
                  >
                    Decrypt Full Log
                  </Button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      <Dialog open={isMaintenanceOpen} onOpenChange={setIsMaintenanceOpen}>
        <DialogContent className="bg-black border-2 border-yellow-600/50 text-white sm:max-w-[450px] rounded-none">
          <div className="p-6 flex flex-col items-center text-center space-y-6">
            <div className="w-20 h-20 bg-yellow-600/20 flex items-center justify-center rounded-full border border-yellow-600 animate-pulse">
              <Wrench size={40} className="text-yellow-500" />
            </div>
            <DialogHeader>
              <DialogTitle className="font-oswald text-3xl uppercase tracking-tighter text-yellow-500">
                System Under Maintenance
              </DialogTitle>
            </DialogHeader>
            <p className="text-zinc-400 font-mono text-sm leading-relaxed">
              The soundtrack archive server is currently offline due to a
              massive Zangyack intrusion. Our technicians (Don Dogoier) are
              working on a fix. Please check back later.
            </p>
            <Button
              onClick={() => setIsMaintenanceOpen(false)}
              className="w-full bg-yellow-600 hover:bg-yellow-700 text-black font-oswald uppercase rounded-none h-12"
            >
              Close Transmission
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
