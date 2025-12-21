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
} from "lucide-react";
import Link from "next/link";

// --- TIPE DATA MOVIE ---
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
  cast: { name: string; role: string }[];
  trivia: string[];
};

// --- DATABASE MOVIE ---
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
      "The Space Empire Zangyack forms an alliance with the Black Cross King. The Gokaigers and Goseigers must overcome their differences and lead the previous 33 Super Sentai teams to save the Earth from this massive threat featuring 199 heroes.",
    director: "Noboru Takemoto",
    writer: "Naruhisa Arakawa",
    cast: [
      { name: "Ryota Ozawa", role: "Captain Marvelous" },
      { name: "Yudai Chiba", role: "Alata (Gosei Red)" },
      { name: "Yuki Yamada", role: "Joe Gibken" },
      { name: "Mao Ichimichi", role: "Luka Millfy" },
      { name: "Rika Satoh", role: "Eri (Gosei Pink)" },
    ],
    trivia: [
      "This movie features the debut of Gokai Silver.",
      "Features 199 transformed heroes on screen at once.",
      "The Black Cross King is a revived villain from Goranger.",
    ],
  },
  "5": {
    id: "5",
    title: "Kaizoku Sentai Gokaiger the Movie: The Flying Ghost Ship",
    jpTitle: "海賊戦隊ゴーカイジャー THE MOVIE 空飛ぶ幽霊船",
    type: "Theatrical Release",
    year: "2011",
    runtime: "30 min",
    rating: "4.8",
    poster: "/movie/OIP.jpeg",
    banner: "/movie/OIP.jpeg",
    synopsis:
      "The Gokaigers encounter a mysterious ghost ship rumored to carry the 'God Eye', a treasure that can grant any wish. However, they must face the ship's captain, Los Dark, and the spirits of past Sentai enemies.",
    director: "Katsuya Watanabe",
    writer: "Naruhisa Arakawa",
    cast: [
      { name: "Ryota Ozawa", role: "Captain Marvelous" },
      { name: "Yuki Yamada", role: "Joe Gibken" },
      { name: "Mao Ichimichi", role: "Luka Millfy" },
      { name: "Kazuki Shimizu", role: "Don Dogoier" },
      { name: "Yui Koike", role: "Ahim de Famille" },
    ],
    trivia: [
      "Features a combiner mecha debut: Fake GokaiOh.",
      "Los Dark is voiced by legendary voice actor Ichiro Nagai.",
      "Cameo of Gawan (Space Sheriff) implies the next crossover.",
    ],
  },
  "6": {
    id: "6",
    title: "Kaizoku Sentai Gokaiger vs. Space Sheriff Gavan",
    jpTitle: "海賊戦隊ゴーカイジャーVS宇宙刑事ギャバン THE MOVIE",
    type: "Crossover Movie",
    year: "2012",
    runtime: "64 min",
    rating: "4.9",
    poster: "/movie/8Qw53GWAfnIEdqAQ9HGFmlInsie.jpg",
    banner: "/movie/8Qw53GWAfnIEdqAQ9HGFmlInsie.jpg",
    synopsis:
      "Captain Marvelous is arrested by the legendary Space Sheriff Gavan. However, this is part of a larger conspiracy within the Zangyack police bureau involving Gavan Bootleg. The two heroes must team up to uncover the truth.",
    director: "Shojiro Nakazawa",
    writer: "Naruhisa Arakawa",
    cast: [
      { name: "Ryota Ozawa", role: "Captain Marvelous" },
      { name: "Kenji Ohba", role: "Retsu Ichijouji (Gavan)" },
      { name: "Yuki Yamada", role: "Joe Gibken" },
      { name: "Mao Ichimichi", role: "Luka Millfy" },
    ],
    trivia: [
      "Celebrates 30 years of Metal Heroes.",
      "Kenji Ohba reprises his role as Retsu Ichijouji (Gavan), along with Battle Kenya and DenziBlue.",
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
      "The Gokaigers return to Earth with a new black ship, seemingly having joined the Zangyack. The Go-Busters must fight them to retrieve the stolen Ranger Keys, which are being used to revive the greatest villains.",
    director: "Takayuki Shibasaki",
    writer: "Kento Shimoyama",
    cast: [
      { name: "Katsuhiro Suzuki", role: "Hiromu Sakurada" },
      { name: "Ryota Ozawa", role: "Captain Marvelous" },
      { name: "Arisa Komiya", role: "Yoko Usami" },
      { name: "Yuki Yamada", role: "Joe Gibken" },
    ],
    trivia: [
      "Features the mysterious Phantom Ranger Keys.",
      "Debut of Kyoryu Red from Zyuden Sentai Kyoryuger.",
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
      "Ten years after the Zangyack Empire was defeated, the Super Sentai Derby Colosseum has become a popular gambling sport on Earth. However, Captain Marvelous appears to challenge the system, leading to a conflict among the scattered Gokaiger crew.",
    director: "Shojiro Nakazawa",
    writer: "Naruhisa Arakawa",
    cast: [
      { name: "Ryota Ozawa", role: "Marvelous" },
      { name: "Yuki Yamada", role: "Joe Gibken" },
      { name: "Mao Ichimichi", role: "Luka Millfy" },
      { name: "Kazuki Shimizu", role: "Don Dogoier" },
      { name: "Yui Koike", role: "Ahim de Famille" },
      { name: "Junya Ikeda", role: "Gai Ikari" },
    ],
    trivia: [
      "Celebrates the 10th anniversary of Gokaiger.",
      "Features the new form: Gokai Red Galleon Armor Mode.",
      "Explore the mature lives of the crew after 10 years.",
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
    const movie = movieDatabase[id] || movieDatabase["8"];
    setData(movie);
  }, [id]);

  if (!data)
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-white">
        Loading Film Archives...
      </div>
    );

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans pb-20">
      <Navbar />

      {/* --- HERO BANNER (FIXED SPACING) --- */}
      {/* Tambahkan margin-top (pt-20) agar tidak tertutup navbar */}
      <div className="relative w-full h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={data.banner}
            alt={data.title}
            className="w-full h-full object-cover blur-sm opacity-40 scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent" />
        </div>
      </div>

      {/* --- MAIN CONTENT (LAYOUT DIPERBAIKI) --- */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 -mt-[450px] relative z-10 pt-24">
        <Link
          href="/movies"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors font-medium bg-black/50 px-4 py-2 rounded-full backdrop-blur-md border border-white/10 w-fit"
        >
          <ArrowLeft size={18} /> Back to Movie List
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* LEFT COLUMN: POSTER CARD (3 Columns) */}
          <div className="lg:col-span-4">
            <div className="sticky top-24">
              <div className="relative aspect-[2/3] rounded-xl overflow-hidden border-4 border-white/10 bg-zinc-900 shadow-2xl animate-in fade-in slide-in-from-bottom duration-700">
                <img
                  src={data.poster}
                  alt={data.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-yellow-500 text-black font-bold px-3 py-1 rounded shadow-lg flex items-center gap-1">
                  <Star size={16} fill="black" /> {data.rating}
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3">
                {/* TOMBOL NON-AKTIF (ABU-ABU) */}
                <Button
                  disabled
                  className="w-full h-14 bg-zinc-800 text-zinc-500 border border-white/5 font-bold uppercase tracking-wider cursor-not-allowed hover:bg-zinc-800"
                >
                  <PlayCircle className="mr-2" size={20} /> Watch Trailer
                  (Unavailable)
                </Button>
                <Button
                  variant="outline"
                  className="w-full h-12 border-white/20 text-gray-300 hover:text-white hover:bg-white/10 uppercase tracking-wider"
                >
                  <Share2 className="mr-2" size={20} /> Share Wiki Page
                </Button>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: INFO & CONTENT (9 Columns) */}
          <div className="lg:col-span-8 space-y-10 animate-in fade-in slide-in-from-bottom duration-700 delay-200 pt-4">
            {/* Header Info */}
            <div>
              <Badge className="bg-primary hover:bg-primary/80 text-white mb-4 uppercase tracking-wider px-3 py-1 text-sm font-bold shadow-lg shadow-primary/20">
                {data.type}
              </Badge>
              <h1 className="text-5xl md:text-7xl font-oswald font-bold uppercase leading-none mb-4 text-white drop-shadow-2xl">
                {data.title}
              </h1>
              <h2 className="text-2xl text-gray-300 font-medium italic border-l-4 border-primary pl-4">
                {data.jpTitle}
              </h2>
            </div>

            {/* Metadata Row */}
            <div className="flex flex-wrap gap-4 md:gap-8 text-sm font-mono text-gray-300 bg-white/5 p-4 rounded-lg border border-white/10 backdrop-blur-sm">
              <span className="flex items-center gap-2">
                <Calendar size={18} className="text-primary" /> {data.year}
              </span>
              <div className="w-px h-4 bg-white/20"></div>
              <span className="flex items-center gap-2">
                <Clock size={18} className="text-primary" /> {data.runtime}
              </span>
              <div className="w-px h-4 bg-white/20"></div>
              <span className="flex items-center gap-2">
                <Film size={18} className="text-primary" /> {data.director}
              </span>
            </div>

            {/* Synopsis */}
            <div className="space-y-4">
              <h3 className="text-2xl font-oswald font-bold uppercase text-white flex items-center gap-2">
                <FileText className="text-primary" size={24} /> Plot Synopsis
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                {data.synopsis}
              </p>
            </div>

            {/* Cast Grid */}
            <div>
              <h3 className="text-2xl font-oswald font-bold uppercase text-white mb-6 flex items-center gap-2">
                <Users className="text-primary" size={24} /> Main Cast
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {data.cast.map((actor, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 bg-zinc-900/50 border border-white/5 p-4 rounded-lg hover:border-white/20 transition-colors"
                  >
                    <div className="h-12 w-12 rounded-full bg-zinc-800 flex items-center justify-center text-gray-500 font-bold text-xs border border-white/10 uppercase">
                      {actor.name.substring(0, 2)}
                    </div>
                    <div>
                      <p className="font-bold text-white text-base">
                        {actor.name}
                      </p>
                      <p className="text-xs text-primary uppercase tracking-wider font-bold">
                        {actor.role}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Trivia Box */}
            <div className="bg-zinc-900/40 p-8 rounded-xl border border-white/10">
              <h3 className="text-xl font-oswald font-bold uppercase text-white mb-4">
                Production Notes
              </h3>
              <ul className="space-y-3">
                {data.trivia.map((fact, i) => (
                  <li key={i} className="flex gap-3 text-gray-400 items-start">
                    <Star
                      size={16}
                      className="text-yellow-500 flex-shrink-0 mt-1"
                    />
                    <span>{fact}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
