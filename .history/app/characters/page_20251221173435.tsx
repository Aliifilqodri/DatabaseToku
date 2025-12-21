"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, Zap } from "lucide-react";
import Link from "next/link";

// --- DATABASE GOKAIGER ONLY ---
const allCharacters = [
  {
    id: "gokai-red",
    name: "Gokai Red",
    group: "Super Sentai",
    img: "/sentai/marvelous/Gokai_Red_Rollcall_2.webp",
  },
  {
    id: "gokai-blue",
    name: "Gokai Blue",
    group: "Super Sentai",
    img: "/sentai/joe/Gokai_Blue_Rollcall_2.webp",
  },
  {
    id: "luka-millfy",
    name: "Gokai Yellow",
    group: "Super Sentai",
    img: "/sentai/luka/luka-ranger.webp",
  },
  {
    id: "gokai-green",
    name: "Gokai Green",
    group: "Super Sentai",
    img: "/sentai/don/Gokai_Green_Rollcall_2.webp",
  },
  {
    id: "gokai-pink",
    name: "Gokai Pink",
    group: "Super Sentai",
    img: "/sentai/ahim/pink.jpg",
  },
  {
    id: "gokai-silver",
    name: "Gokai Silver",
    group: "Super Sentai",
    img: "/sentai/gokaiger/gokai-silver.webp",
  },
];

const filters = ["All", "Super Sentai"];

export default function CharactersPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredChars = allCharacters.filter((char) => {
    const matchesFilter = activeFilter === "All" || char.group === activeFilter;
    const matchesSearch = char.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans">
      <Navbar />

      {/* HEADER */}
      <div className="relative pt-24 pb-12 px-6 sm:px-12 border-b border-white/5 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-oswald text-5xl md:text-7xl font-black uppercase tracking-tighter text-white mb-6">
            Character <span className="text-primary">Database</span>
          </h1>
          <div className="relative max-w-lg mx-auto mb-8">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
              size={20}
            />
            <Input
              placeholder="Find your hero..."
              className="pl-12 bg-zinc-900/50 border-white/10 text-white focus:border-primary h-12 rounded-full text-lg"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full border text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-primary border-primary text-white scale-105"
                    : "bg-transparent border-white/10 text-gray-400 hover:text-white"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* GRID KARAKTER */}
      <div className="max-w-[1600px] mx-auto px-6 sm:px-12 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {filteredChars.map((char, idx) => (
            <Link
              href={`/character/${char.id}`}
              key={char.id}
              className="group relative cursor-pointer aspect-[2/3] overflow-hidden rounded-xl bg-zinc-900 border border-white/5 animate-in fade-in zoom-in duration-500 fill-mode-backwards"
              style={{ animationDelay: `${idx * 50}ms` }}
            >
              <img
                src={char.img}
                alt={char.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-0 w-full text-center px-2 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-oswald text-xl md:text-2xl font-black italic text-white uppercase tracking-tighter drop-shadow-md">
                  {char.name}
                </h3>
                <div className="w-0 h-1 bg-primary mx-auto mt-1 transition-all duration-300 group-hover:w-1/2 rounded-full" />
              </div>
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Badge className="bg-primary/80 backdrop-blur-sm text-[10px] uppercase font-bold">
                  {char.group}
                </Badge>
              </div>
            </Link>
          ))}
        </div>

        {filteredChars.length === 0 && (
          <div className="text-center py-32 opacity-50">
            <Zap className="w-16 h-16 mx-auto mb-4 text-gray-600" />
            <h3 className="text-2xl font-oswald text-gray-400 uppercase">
              Data Not Found
            </h3>
          </div>
        )}
      </div>
    </div>
  );
}
