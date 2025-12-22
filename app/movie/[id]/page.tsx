"use client";

import { useState, useEffect, use } from "react";
import { Navbar } from "@/components/navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Calendar,
  Star,
  Clock,
  PlayCircle,
  Users,
  Film,
  FileText,
  Share2,
  ShieldCheck,
  Zap,
  Info,
  Heart,
} from "lucide-react";
import Link from "next/link";

type Hero = {
  name: string;
  role: string;
};

type MovieData = {
  id: string;
  title: string;
  jpTitle: string;
  type: string;
  year: string;
  runtime: string;
  rating: string;
  poster: string;
  banner: string;
  synopsis: string;
  director: string;
  writer: string;
  studio: string;
  mainCast: Hero[];
  supportHeroes: Hero[];
  trivia: string[];
};

const movieDatabase: Record<string, MovieData> = {
  "4": {
    id: "4",
    title: "Gokaiger Goseiger Super Sentai 199 Hero Great Battle",
    jpTitle: "ゴーカイジャー ゴセイジャー スーパー戦隊199ヒーロー大決戦",
    type: "Anniversary Movie",
    year: "2011",
    runtime: "81 min",
    rating: "5.0",
    poster: "/movie/R.jpeg",
    banner: "/movie/R.jpeg",
    synopsis:
      "The Space Empire Zangyack forms a deadly alliance with the Black Cross King, seeking to plunge Earth into eternal darkness. To stop this ultimate threat, the rebel Gokaigers and the angelic Goseigers must join forces. They are not alone—the spirits and powers of all 33 previous Super Sentai teams rise again, leading to an epic clash featuring 199 legendary heroes.",
    director: "Noboru Takemoto",
    writer: "Naruhisa Arakawa",
    studio: "Toei Company",
    mainCast: [
      { name: "Ryota Ozawa", role: "Captain Marvelous (Gokai Red)" },
      { name: "Yudai Chiba", role: "Alata (Gosei Red)" },
      { name: "Yuki Yamada", role: "Joe Gibken (Gokai Blue)" },
      { name: "Mao Ichimichi", role: "Luka Millfy (Gokai Yellow)" },
      { name: "Kazuki Shimizu", role: "Don Dogoier (Gokai Green)" },
      { name: "Yui Koike", role: "Ahim de Famille (Gokai Pink)" },
    ],
    supportHeroes: [
      { name: "Rika Satoh", role: "Eri (Gosei Pink)" },
      { name: "Kyousuke Hamao", role: "Agri (Gosei Black)" },
      { name: "Mikiho Niwa", role: "Mone (Gosei Yellow)" },
      { name: "Kento Ono", role: "Hyde (Gosei Blue)" },
      { name: "Satoru Akashi", role: "Bouken Red" },
      { name: "Chiaki Tani", role: "Shinken Green" },
      { name: "Umeko", role: "Deka Pink" },
      { name: "Ryo", role: "Ryuu Ranger" },
    ],
    trivia: [
      "Features every single Sentai hero from Goranger to Gokaiger.",
      "The Black Cross King returns from the very first Sentai series.",
      "Delayed due to the 2011 Tōhoku earthquake.",
    ],
  },
  "5": {
    id: "5",
    title: "Kaizoku Sentai Gokaiger: The Flying Ghost Ship",
    jpTitle: "海賊戦隊ゴーカイジャー THE MOVIE 空飛ぶ幽霊船",
    type: "Theatrical Release",
    year: "2011",
    runtime: "30 min",
    rating: "4.8",
    poster: "/movie/OIP.jpeg",
    banner: "/movie/OIP.jpeg",
    synopsis:
      "The Gokaigers board a massive, spectral vessel to find the legendary 'God Eye'—a treasure capable of granting any wish. They must battle the undead spirits of past Sentai villains and the ship's sinister captain, Los Dark.",
    director: "Katsuya Watanabe",
    writer: "Naruhisa Arakawa",
    studio: "Toei Company",
    mainCast: [
      { name: "Ryota Ozawa", role: "Captain Marvelous" },
      { name: "Yuki Yamada", role: "Joe Gibken" },
      { name: "Mao Ichimichi", role: "Luka Millfy" },
      { name: "Kazuki Shimizu", role: "Don Dogoier" },
      { name: "Yui Koike", role: "Ahim de Famille" },
      { name: "Junya Ikeda", role: "Gai Ikari" },
    ],
    supportHeroes: [
      { name: "Ichiro Nagai", role: "Los Dark (Voice)" },
      { name: "Isao Sasaki", role: "Ghost Ship Guardian" },
    ],
    trivia: [
      "First appearance of Fake GokaiOh.",
      "Features cameos from various grunt soldiers of past series.",
    ],
  },
  "6": {
    id: "6",
    title: "Gokaiger vs. Space Sheriff Gavan: The Movie",
    jpTitle: "海賊戦隊ゴーカイジャーVS宇宙刑事ギャバン THE MOVIE",
    type: "Crossover Movie",
    year: "2012",
    runtime: "64 min",
    rating: "4.9",
    poster: "/movie/8Qw53GWAfnIEdqAQ9HGFmlInsie.jpg",
    banner: "/movie/8Qw53GWAfnIEdqAQ9HGFmlInsie.jpg",
    synopsis:
      "Legendary Space Sheriff Gavan arrests the Gokaigers, but it's revealed to be a plot by the Zangyack Empire. Marvelous must enter the Makuu Space to rescue his childhood savior, Gavan, from the clutches of Gavan Bootleg.",
    director: "Shojiro Nakazawa",
    writer: "Naruhisa Arakawa",
    studio: "Toei Company",
    mainCast: [
      { name: "Ryota Ozawa", role: "Gokai Red" },
      { name: "Kenji Ohba", role: "Retsu Ichijouji (Gavan)" },
      { name: "Yuki Yamada", role: "Gokai Blue" },
      { name: "Mao Ichimichi", role: "Gokai Yellow" },
    ],
    supportHeroes: [
      { name: "Kenji Ohba", role: "Battle Kenya" },
      { name: "Kenji Ohba", role: "Denzi Blue" },
      { name: "Kazuki Shimizu", role: "Gokai Green" },
      { name: "Yui Koike", role: "Gokai Pink" },
      { name: "Junya Ikeda", role: "Gokai Silver" },
      { name: "Toshiaki Karasawa", role: "Gavan Bootleg (Voice)" },
    ],
    trivia: [
      "Kenji Ohba plays three of his iconic roles in one film.",
      "Marks the revival of the Metal Hero franchise.",
    ],
  },
  "7": {
    id: "7",
    title: "Tokumei Sentai Go-Busters vs. Kaizoku Sentai Gokaiger",
    jpTitle: "特命戦隊ゴーバスターズVS海賊戦隊ゴーカイジャー THE MOVIE",
    type: "VS Movie",
    year: "2013",
    runtime: "60 min",
    rating: "4.7",
    poster: "/movie/91z-idQ1JbL._SL1378_.jpg",
    banner: "/movie/91z-idQ1JbL._SL1378_.jpg",
    synopsis:
      "The Gokaigers return to Earth in a black version of the Gokai Galleon, attacking the Go-Busters. This unexpected betrayal is tied to the 'Phantom Ranger Keys' and a plan to save the universe from a new Zangyack threat.",
    director: "Takayuki Shibasaki",
    writer: "Kento Shimoyama",
    studio: "Toei Company",
    mainCast: [
      { name: "Katsuhiro Suzuki", role: "Hiromu Sakurada (Red Buster)" },
      { name: "Ryota Ozawa", role: "Captain Marvelous (Gokai Red)" },
      { name: "Ryoma Baba", role: "Ryuji Iwasaki (Blue Buster)" },
      { name: "Arisa Komiya", role: "Yoko Usami (Yellow Buster)" },
    ],
    supportHeroes: [
      { name: "Keisuke Matsumoto", role: "Beet Buster" },
      { name: "Syo Jinnai", role: "Stag Buster" },
      { name: "Yuki Yamada", role: "Joe Gibken" },
      { name: "Mao Ichimichi", role: "Luka Millfy" },
      { name: "Kazuki Shimizu", role: "Don Dogoier" },
      { name: "Yui Koike", role: "Ahim de Famille" },
      { name: "Junya Ikeda", role: "Gai Ikari" },
      { name: "Ryo Ryusei", role: "Kyoryu Red (Cameo)" },
    ],
    trivia: [
      "First time Gokaigers appear as antagonists initially.",
      "Features the debut of Zyuden Sentai Kyoryuger.",
    ],
  },
  "8": {
    id: "8",
    title: "Kaizoku Sentai: Ten Gokaiger",
    jpTitle: "テン・ゴーカイジャー",
    type: "V-Cinext (10th Anniversary)",
    year: "2021",
    runtime: "61 min",
    rating: "5.0",
    poster: "/movie/ten_gokaiger_1.webp",
    banner: "/movie/Ten-Gokaiger.jpg",
    synopsis:
      "A decade later, the Gokaigers have gone their separate ways. Earth now hosts the 'Super Sentai Derby Colosseum', a gambling ring using Ranger Keys. Marvelous returns to stop the corruption, but he must face his own former crewmates.",
    director: "Shojiro Nakazawa",
    writer: "Naruhisa Arakawa",
    studio: "Toei Company",
    mainCast: [
      { name: "Ryota Ozawa", role: "Captain Marvelous" },
      { name: "Yuki Yamada", role: "Joe Gibken" },
      { name: "Mao Ichimichi", role: "Luka Millfy" },
      { name: "Kazuki Shimizu", role: "Don Dogoier" },
      { name: "Yui Koike", role: "Ahim de Famille" },
      { name: "Junya Ikeda", role: "Gai Ikari" },
    ],
    supportHeroes: [
      { name: "Kohei Shoji", role: "Zocks Goldtsuiker" },
      { name: "Kousuke Asai", role: "Gokai Red (Suit)" },
      { name: "Basco", role: "Spirit Cameo" },
    ],
    trivia: [
      "Full original cast returns after 10 years.",
      "Introduces Gokai Red Galleon Armor Mode.",
      "Filmed during the 45th anniversary of Super Sentai.",
    ],
  },
};

export default function MovieDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const [data, setData] = useState<MovieData | null>(null);

  useEffect(() => {
    const movie = movieDatabase[id];
    setData(movie || null);
  }, [id]);

  if (!data)
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white font-oswald italic">
        <p className="tracking-[0.5em] mb-4 text-zinc-500 uppercase">
          Archive Not Found
        </p>
        <Link
          href="/movies"
          className="text-primary text-xs border border-primary/30 px-6 py-2 hover:bg-primary hover:text-white transition-all uppercase tracking-widest"
        >
          Return to Command Center
        </Link>
      </div>
    );

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-primary pb-20 overflow-x-hidden">
      <Navbar />

      <div className="relative w-full h-[60vh] lg:h-[75vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={data.banner}
            alt=""
            className="w-full h-full object-cover opacity-30 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
        </div>

        <div className="absolute bottom-20 left-0 w-full px-6 sm:px-12 lg:px-20 z-20">
          <div className="animate-in slide-in-from-left duration-1000">
            <Badge className="bg-primary text-white mb-6 uppercase tracking-[0.2em] px-4 py-1.5 text-xs font-black rounded-none">
              {data.type}
            </Badge>
            <h1 className="text-4xl md:text-8xl font-oswald font-black uppercase leading-[0.85] mb-6 max-w-5xl italic drop-shadow-2xl">
              {data.title}
            </h1>
            <h2 className="text-xl md:text-2xl text-zinc-500 font-oswald uppercase tracking-widest italic">
              {data.jpTitle}
            </h2>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 -mt-16 relative z-30">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 space-y-8">
            <div className="relative aspect-[2/3] rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] group">
              <img
                src={data.poster}
                alt={data.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 right-4 bg-yellow-500 text-black font-black px-3 py-1.5 rounded-lg flex items-center gap-2 shadow-2xl">
                <Star size={16} fill="black" /> {data.rating}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <Link
                href="/movies"
                className="inline-flex items-center justify-center gap-2 text-zinc-400 hover:text-primary transition-colors font-oswald uppercase tracking-widest text-sm mb-4"
              >
                <ArrowLeft size={16} /> Back to Archives
              </Link>
              <Button
                disabled
                className="h-14 bg-zinc-900 border border-white/10 text-zinc-600 font-oswald uppercase tracking-widest cursor-not-allowed"
              >
                <PlayCircle className="mr-2" /> Encrypted Trailer
              </Button>
              <Button
                variant="outline"
                className="h-12 border-white/10 bg-white/5 hover:bg-white/10 text-white font-oswald uppercase tracking-widest"
              >
                <Share2 className="mr-2" size={18} /> Distribute Data
              </Button>
            </div>

            <div className="bg-zinc-900/50 backdrop-blur-md p-8 border border-white/5 rounded-3xl space-y-6">
              <h4 className="font-oswald text-primary uppercase tracking-widest text-xs font-bold border-l-2 border-primary pl-3">
                Technical Specifications
              </h4>
              <div className="space-y-4 text-sm font-mono">
                <div className="flex flex-col border-b border-white/5 pb-2">
                  <span className="text-zinc-600 text-[10px] mb-1 uppercase">
                    Director
                  </span>
                  <span className="font-bold text-zinc-200">
                    {data.director}
                  </span>
                </div>
                <div className="flex flex-col border-b border-white/5 pb-2">
                  <span className="text-zinc-600 text-[10px] mb-1 uppercase">
                    Writer
                  </span>
                  <span className="font-bold text-zinc-200">{data.writer}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-zinc-600 text-[10px] mb-1 uppercase">
                    Production Studio
                  </span>
                  <span className="font-bold text-zinc-200">{data.studio}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-16">
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-3 bg-white/5 px-6 py-3 rounded-full border border-white/10 text-xs font-oswald tracking-widest">
                <Calendar size={14} className="text-primary" /> {data.year}{" "}
                MISSION
              </div>
              <div className="flex items-center gap-3 bg-white/5 px-6 py-3 rounded-full border border-white/10 text-xs font-oswald tracking-widest">
                <Clock size={14} className="text-primary" /> {data.runtime}
              </div>
              <div className="flex items-center gap-3 bg-white/5 px-6 py-3 rounded-full border border-white/10 text-xs font-oswald tracking-widest">
                <ShieldCheck size={14} className="text-primary" /> CANON
                VERIFIED
              </div>
            </div>

            <section className="space-y-6">
              <h3 className="text-3xl font-oswald font-black uppercase flex items-center gap-4">
                <span className="w-12 h-1 bg-primary"></span> Operation Summary
              </h3>
              <p className="text-zinc-400 leading-relaxed text-xl font-light italic border-l-4 border-zinc-800 pl-8">
                {data.synopsis}
              </p>
            </section>

            <section className="space-y-8">
              <h3 className="text-3xl font-oswald font-black uppercase flex items-center gap-4">
                <span className="w-12 h-1 bg-primary"></span> Primary Strike
                Team
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {data.mainCast.map((actor, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-5 bg-white/[0.02] border border-white/5 p-5 rounded-2xl hover:bg-white/[0.05] hover:border-primary/30 transition-all group"
                  >
                    <div className="w-14 h-14 rounded-full bg-zinc-900 flex items-center justify-center text-primary border border-zinc-800 group-hover:scale-110 transition-transform">
                      <Users size={24} />
                    </div>
                    <div>
                      <p className="font-oswald text-xl text-white uppercase leading-tight tracking-wide">
                        {actor.name}
                      </p>
                      <p className="text-xs text-primary font-black uppercase tracking-[0.2em] mt-1">
                        {actor.role}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-8">
              <h3 className="text-3xl font-oswald font-black uppercase flex items-center gap-4 text-primary">
                <Zap size={32} /> Tactical Support Assets
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {data.supportHeroes?.map((hero, i) => (
                  <div
                    key={i}
                    className="bg-zinc-900/30 border border-white/5 p-5 rounded-2xl flex flex-col items-center text-center group hover:bg-primary/10 hover:border-primary/20 transition-all"
                  >
                    <Heart
                      size={20}
                      className="text-zinc-800 group-hover:text-primary mb-3 transition-all group-hover:scale-125"
                    />
                    <p className="font-oswald text-sm text-white uppercase tracking-tighter leading-tight">
                      {hero.role}
                    </p>
                    <p className="text-[10px] text-zinc-600 uppercase mt-2 font-bold tracking-widest">
                      {hero.name}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-zinc-900/20 border border-zinc-800 p-10 rounded-[40px] relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Info size={120} />
              </div>
              <h3 className="text-2xl font-oswald font-black uppercase text-white mb-8 flex items-center gap-4">
                <Info className="text-primary" /> Intelligence Briefing
              </h3>
              <ul className="space-y-6">
                {data.trivia.map((fact, i) => (
                  <li
                    key={i}
                    className="flex gap-6 text-zinc-400 text-base leading-relaxed group"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0 group-hover:scale-150 transition-transform" />
                    <span>{fact}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
