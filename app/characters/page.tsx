"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, Zap, Anchor, ShieldAlert, Layers } from "lucide-react";
import Link from "next/link";

const allCharacters = [
  {
    id: "gokai-red",
    name: "Gokai Red",
    category: "Super Sentai",
    series: "Gokaiger",
    img: "/sentai/marvelous/Gokai_Red_Rollcall_2.webp",
    accent:
      "group-hover:shadow-[0_0_30px_rgba(220,38,38,0.4)] group-hover:border-red-600/50",
  },
  {
    id: "gokai-blue",
    name: "Gokai Blue",
    category: "Super Sentai",
    series: "Gokaiger",
    img: "/sentai/joe/Gokai_Blue_Rollcall_2.webp",
    accent:
      "group-hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] group-hover:border-blue-500/50",
  },
  {
    id: "luka-millfy",
    name: "Gokai Yellow",
    category: "Super Sentai",
    series: "Gokaiger",
    img: "/sentai/luka/luka-ranger.webp",
    accent:
      "group-hover:shadow-[0_0_30px_rgba(250,204,21,0.4)] group-hover:border-yellow-400/50",
  },
  {
    id: "gokai-green",
    name: "Gokai Green",
    category: "Super Sentai",
    series: "Gokaiger",
    img: "/sentai/don/Gokai_Green_Rollcall_2.webp",
    accent:
      "group-hover:shadow-[0_0_30px_rgba(34,197,94,0.4)] group-hover:border-green-500/50",
  },
  {
    id: "gokai-pink",
    name: "Gokai Pink",
    category: "Super Sentai",
    series: "Gokaiger",
    img: "/sentai/ahim/pink.jpg",
    accent:
      "group-hover:shadow-[0_0_30px_rgba(244,114,182,0.4)] group-hover:border-pink-400/50",
  },
  {
    id: "gokai-silver",
    name: "Gokai Silver",
    category: "Super Sentai",
    series: "Gokaiger",
    img: "/sentai/gai/Gokai_Silver_Rollcall_2.webp",
    accent:
      "group-hover:shadow-[0_0_30px_rgba(209,213,219,0.4)] group-hover:border-zinc-400/50",
  },
];

const categoryFilters = [
  "All",
  "Super Sentai",
  "Kamen Rider",
  "Ultraman",
  "Chouseishin",
];

export default function CharactersPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredChars = allCharacters.filter((char) => {
    const matchesCategory =
      activeCategory === "All" || char.category === activeCategory;
    const matchesSearch = char.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const groupedCharacters = filteredChars.reduce((acc, char) => {
    if (!acc[char.series]) {
      acc[char.series] = [];
    }
    acc[char.series].push(char);
    return acc;
  }, {} as Record<string, typeof allCharacters>);

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />

      <Navbar />

      <section className="relative pt-32 pb-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-[1px] w-12 bg-primary/30" />
            <Layers className="text-primary animate-pulse" size={20} />
            <div className="h-[1px] w-12 bg-primary/30" />
          </div>

          <h1 className="font-oswald text-6xl md:text-8xl font-black uppercase tracking-tighter text-white mb-8">
            HERO <span className="text-primary italic">DATABASE</span>
          </h1>

          <div className="relative max-w-2xl mx-auto mb-12">
            <Search
              className="absolute left-6 top-1/2 -translate-y-1/2 text-primary/50"
              size={18}
            />
            <Input
              placeholder="SEARCH_BY_NAME..."
              className="pl-14 bg-zinc-900/50 border-white/5 text-white focus:border-primary/50 h-14 rounded-none font-mono tracking-widest uppercase italic"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {categoryFilters.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-none border font-mono text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-primary text-black border-primary shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                    : "bg-transparent border-white/10 text-gray-500 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 pb-32">
        {Object.keys(groupedCharacters).length > 0 ? (
          Object.entries(groupedCharacters).map(([seriesName, characters]) => (
            <div
              key={seriesName}
              className="mb-20 animate-in fade-in slide-in-from-bottom-4 duration-700"
            >
              <div className="flex items-center gap-6 mb-10">
                <div className="flex flex-col">
                  <span className="text-primary font-mono text-[10px] tracking-[0.5em] uppercase leading-none mb-2">
                    Series_Link
                  </span>
                  <h2 className="font-oswald text-4xl md:text-5xl font-black uppercase italic tracking-tighter text-white">
                    {seriesName}
                  </h2>
                </div>
                <div className="flex-grow h-px bg-gradient-to-r from-white/20 via-white/5 to-transparent" />
                <Anchor className="text-zinc-800" size={24} />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {characters.map((char) => (
                  <Link
                    href={`/character/${char.id}`}
                    key={char.id}
                    className={`group relative aspect-[2/3] bg-zinc-950 border border-white/5 transition-all duration-500 ${char.accent}`}
                  >
                    <img
                      src={char.img}
                      alt={char.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 opacity-40 group-hover:opacity-100 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

                    <div className="absolute bottom-4 left-4 right-4 translate-y-2 group-hover:translate-y-0 transition-transform">
                      <p className="text-[9px] font-mono text-primary uppercase tracking-widest mb-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        Unit_File
                      </p>
                      <h3 className="font-oswald text-xl font-bold uppercase italic text-white group-hover:text-primary transition-colors">
                        {char.name}
                      </h3>
                    </div>

                    <div className="absolute top-0 right-0 p-2">
                      <div className="w-1 h-0 bg-primary group-hover:h-8 transition-all duration-500" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-40 border border-white/5 bg-white/[0.01]">
            <ShieldAlert className="w-16 h-16 mx-auto mb-6 text-zinc-800" />
            <h3 className="text-xl font-mono text-zinc-500 uppercase tracking-[0.3em]">
              No_Data_In_Segment
            </h3>
          </div>
        )}
      </main>

      <div className="fixed bottom-8 right-8 pointer-events-none opacity-20">
        <p className="font-mono text-[10px] uppercase tracking-[1em] vertical-text">
          Pirate_Network_v2.0
        </p>
      </div>
    </div>
  );
}
