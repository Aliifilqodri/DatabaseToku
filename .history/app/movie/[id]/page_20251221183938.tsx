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
  cast: string[];
  trivia: string[];
};

// --- DATABASE MOVIE (SESUAI ID DI HALAMAN LIST) ---
const movieDatabase: Record<string, MovieData> = {
  // ID 4: 199 Hero Great Battle
  "4": {
    id: "4",
    title: "Gokaiger Goseiger Super Sentai 199 Hero Great Battle",
    jpTitle: "ゴーカイジャー ゴセイジャー スーパー戦隊199ヒーロー大決戦",
    type: "Anniversary Movie",
    year: "2011",
    runtime: "81 min",
    rating: "5.0",
    poster: "/movie/R.jpeg",
    banner: "/movie/R.jpeg", // Bisa pakai gambar yang sama atau beda
    synopsis:
      "The Space Empire Zangyack forms an alliance with the Black Cross King. The Gokaigers and Goseigers must overcome their differences and lead the previous 33 Super Sentai teams to save the Earth from this massive threat.",
    director: "Noboru Takemoto",
    writer: "Naruhisa Arakawa",
    cast: [
      "Ryota Ozawa",
      "Yudai Chiba",
      "Yuki Yamada",
      "Rika Satoh",
      "Mao Ichimichi",
    ],
    trivia: [
      "Features 199 transformed heroes on screen at once.",
      "The debut of Gokai Silver.",
      "The Black Cross King is a revived villain from Goranger.",
    ],
  },
  // ID 5: Flying Ghost Ship
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
      "The Gokaigers encounter a mysterious ghost ship rumored to carry the God Eye, a treasure that can grant any wish. However, they must face the ship's captain, Los Dark, and the spirits of past Sentai enemies.",
    director: "Katsuya Watanabe",
    writer: "Naruhisa Arakawa",
    cast: [
      "Ryota Ozawa",
      "Yuki Yamada",
      "Mao Ichimichi",
      "Kazuki Shimizu",
      "Yui Koike",
    ],
    trivia: [
      "Features a combiner mecha debut: Fake GokaiOh.",
      "Los Dark is voiced by legendary voice actor Ichiro Nagai.",
      "Cameo of Gawan (Space Sheriff).",
    ],
  },
  // ID 6: Gokaiger vs Gavan
  "6": {
    id: "6",
    title: "Kaizoku Sentai Gokaiger vs. Space Sheriff Gavan",
    jpTitle: "海賊戦隊ゴーカイジャーVS宇宙刑事ギャバン THE MOVIE",
    type: "Crossover",
    year: "2012",
    runtime: "64 min",
    rating: "4.9",
    poster: "/movie/8Qw53GWAfnIEdqAQ9HGFmlInsie.jpg",
    banner: "/movie/8Qw53GWAfnIEdqAQ9HGFmlInsie.jpg",
    synopsis:
      "Captain Marvelous is arrested by the legendary Space Sheriff Gavan. However, this is part of a larger conspiracy within the Zangyack police bureau involving Gavan Bootleg. The two heroes must team up to uncover the truth.",
    director: "Shojiro Nakazawa",
    writer: "Naruhisa Arakawa",
    cast: ["Ryota Ozawa", "Kenji Ohba", "Yuki Yamada", "Mao Ichimichi"],
    trivia: [
      "Celebrates 30 years of Metal Heroes.",
      "Kenji Ohba reprises his role as Retsu Ichijouji (Gavan), along with Battle Kenya and DenziBlue.",
    ],
  },
  // ID 7: Go-Busters vs Gokaiger
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
    cast: ["Katsuhiro Suzuki", "Ryota Ozawa", "Arisa Komiya", "Yuki Yamada"],
    trivia: [
      "Features the Phantom Ranger Keys.",
      "Debut of Kyoryu Red from Zyuden Sentai Kyoryuger.",
    ],
  },
  // ID 8: Ten Gokaiger
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
      "Ryota Ozawa",
      "Yuki Yamada",
      "Mao Ichimichi",
      "Kazuki Shimizu",
      "Yui Koike",
      "Junya Ikeda",
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
    // Ambil data sesuai ID. Kalau ID tidak ada di database, default ke Ten Gokaiger (ID 8)
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
    <div className="min-h-screen bg-[#050505] text-white font-sans">
      <Navbar />

      {/* HEADER BANNER */}
      <div className="relative h-[70vh] w-full overflow-hidden">
        <img
          src={data.banner}
          alt={data.title}
          className="w-full h-full object-cover opacity-40 blur-sm scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent" />

        <div className="absolute inset-0 flex items-center justify-center p-6 pt-20">
          <div className="max-w-6xl w-full grid md:grid-cols-3 gap-12 items-end">
            {/* POSTER (Floating Card) */}
            <div className="hidden md:block relative aspect-[2/3] rounded-lg overflow-hidden border-2 border-white/10 shadow-2xl animate-in fade-in slide-in-from-bottom duration-700">
              <img
                src={data.poster}
                alt="Poster"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-yellow-500 text-black font-bold px-3 py-1 rounded shadow-lg flex items-center gap-1">
                <Star size={14} fill="black" /> {data.rating}
              </div>
            </div>

            {/* INFO */}
            <div className="md:col-span-2 space-y-6 animate-in fade-in slide-in-from-right duration-700 delay-200">
              <div>
                <Badge className="bg-primary hover:bg-primary/80 text-white mb-3 uppercase tracking-wider">
                  {data.type}
                </Badge>
                <h1 className="text-4xl md:text-6xl font-oswald font-bold uppercase leading-none mb-2">
                  {data.title}
                </h1>
                <h2 className="text-xl text-gray-400 font-medium">
                  {data.jpTitle}
                </h2>
              </div>

              <div className="flex flex-wrap gap-6 text-sm text-gray-300 font-mono border-y border-white/10 py-4">
                <span className="flex items-center gap-2">
                  <Calendar size={16} className="text-primary" /> {data.year}
                </span>
                <span className="flex items-center gap-2">
                  <Clock size={16} className="text-primary" /> {data.runtime}
                </span>
                <span className="flex items-center gap-2">
                  <Film size={16} className="text-primary" /> {data.director}
                </span>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold uppercase text-white border-l-4 border-primary pl-3">
                  Synopsis
                </h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  {data.synopsis}
                </p>
              </div>

              <div className="flex gap-4 pt-4">
                <Link href="/movies">
                  <Button
                    variant="outline"
                    className="h-12 px-6 border-white/20 hover:bg-white/10 text-white"
                  >
                    <ArrowLeft className="mr-2" size={18} /> Back to List
                  </Button>
                </Link>
                {/* Fake Watch Button (Just scroll or modal) */}
                <Button className="h-12 px-8 bg-white text-black hover:bg-gray-200 font-bold uppercase">
                  <PlayCircle className="mr-2" size={20} /> Watch Trailer
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* DETAILS SECTION */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12">
        {/* CAST LIST */}
        <div className="md:col-span-2 space-y-8">
          <h3 className="text-2xl font-oswald font-bold uppercase text-white flex items-center gap-2">
            <Users className="text-primary" /> Cast & Staff
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {data.cast.map((actor, i) => (
              <div
                key={i}
                className="bg-zinc-900 border border-white/5 p-4 rounded-lg flex items-center gap-3"
              >
                <div className="h-10 w-10 bg-zinc-800 rounded-full flex items-center justify-center text-gray-500 text-xs">
                  IMG
                </div>
                <span className="font-medium text-gray-200">{actor}</span>
              </div>
            ))}
            <div className="bg-zinc-900 border border-white/5 p-4 rounded-lg">
              <span className="text-xs text-gray-500 uppercase block">
                Writer
              </span>
              <span className="font-medium text-white">{data.writer}</span>
            </div>
          </div>
        </div>

        {/* TRIVIA / INFO */}
        <div className="space-y-6">
          <div className="bg-zinc-900/50 p-6 rounded-xl border border-white/10">
            <h3 className="text-lg font-bold uppercase text-white mb-4">
              Production Notes
            </h3>
            <ul className="space-y-3">
              {data.trivia.map((fact, i) => (
                <li key={i} className="flex gap-3 text-sm text-gray-400">
                  <Star
                    size={14}
                    className="text-yellow-500 flex-shrink-0 mt-1"
                  />
                  {fact}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
