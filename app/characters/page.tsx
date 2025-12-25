"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Input } from "@/components/ui/input";
import { Search, Radio, Layers, Cpu, ShieldAlert } from "lucide-react";
import { Badge } from "@/components/ui/badge";
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
  {
    id: "daigo-madoka",
    name: "Daigo Madoka",
    category: "Ultraman",
    series: "Ultraman Tiga",
    img: "/ultra/tiga/Daigo_Madoka_tiga.webp",
    accent:
      "group-hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] group-hover:border-blue-600/50",
  },
  {
    id: "megumi-iruma",
    name: "Captain Iruma",
    category: "Ultraman",
    series: "Ultraman Tiga",
    img: "/ultra/tiga/Megumi_Iruma_1.webp",
    accent:
      "group-hover:shadow-[0_0_30px_rgba(234,179,8,0.4)] group-hover:border-yellow-500/50",
  },
  {
    id: "munakata-seiichi",
    name: "Munakata",
    category: "Ultraman",
    series: "Ultraman Tiga",
    img: "/ultra/tiga/Seiichi_Munakata_Tiga_7.webp",
    accent:
      "group-hover:shadow-[0_0_30px_rgba(30,64,175,0.4)] group-hover:border-blue-700/50",
  },
  {
    id: "rena-yanase",
    name: "Rena Yanase",
    category: "Ultraman",
    series: "Ultraman Tiga",
    img: "/ultra/tiga/Rena_Yanase_tiga.webp",
    accent:
      "group-hover:shadow-[0_0_30px_rgba(249,115,22,0.4)] group-hover:border-orange-500/50",
  },
  {
    id: "shinjoh-tetsuo",
    name: "Tetsuo Shinjoh",
    category: "Ultraman",
    series: "Ultraman Tiga",
    img: "/ultra/tiga/Tetsuo_Shinjoh_tiga_1.webp",
    accent:
      "group-hover:shadow-[0_0_30px_rgba(220,38,38,0.4)] group-hover:border-red-600/50",
  },
  {
    id: "horii-masami",
    name: "Masami Horii",
    category: "Ultraman",
    series: "Ultraman Tiga",
    img: "/ultra/tiga/Masami_Horii_1.webp",
    accent:
      "group-hover:shadow-[0_0_30px_rgba(34,197,94,0.4)] group-hover:border-green-500/50",
  },
  {
    id: "jun-yazumi",
    name: "Jun Yazumi",
    category: "Ultraman",
    series: "Ultraman Tiga",
    img: "/ultra/tiga/Jun_Yazumi_tiga.webp",
    accent:
      "group-hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] group-hover:border-cyan-500/50",
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
    if (!acc[char.series]) acc[char.series] = [];
    acc[char.series].push(char);
    return acc;
  }, {} as Record<string, typeof allCharacters>);

  return (
    <div className="min-h-screen bg-[#020202] text-white font-sans relative overflow-hidden">
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <Navbar />

      <section className="relative pt-32 pb-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Radio className="text-primary animate-pulse" size={16} />
            <span className="font-mono text-[10px] tracking-[0.4em] text-zinc-500 uppercase">
              System_Link_Established
            </span>
          </div>
          <h1 className="font-oswald text-6xl md:text-[7rem] font-black uppercase tracking-tighter text-white leading-none mb-12">
            HERO <span className="text-primary italic">DATABASE</span>
          </h1>

          <div className="relative max-w-3xl mx-auto mb-16 group">
            <Search
              className="absolute left-6 top-1/2 -translate-y-1/2 text-primary group-focus-within:scale-110 transition-transform"
              size={20}
            />
            <Input
              placeholder="DECRYPT_WARRIOR_NAME..."
              className="pl-16 bg-white/[0.03] border-white/10 text-white focus:border-primary/50 focus:bg-white/[0.05] h-16 rounded-2xl font-mono tracking-[0.2em] uppercase italic transition-all backdrop-blur-xl shadow-2xl"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6 p-4 bg-white/[0.02] border border-white/5 backdrop-blur-2xl rounded-[2rem] max-w-fit mx-auto shadow-2xl">
            {categoryFilters.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`relative px-8 py-3 rounded-xl font-oswald text-sm md:text-base font-bold uppercase tracking-[0.1em] transition-all duration-500 group overflow-hidden ${
                    isActive
                      ? "text-white scale-110"
                      : "text-zinc-500 hover:text-zinc-300"
                  }`}
                >
                  {isActive && (
                    <div className="absolute inset-0 bg-primary opacity-20 blur-md animate-pulse" />
                  )}
                  <div
                    className={`absolute inset-0 border rounded-xl transition-colors duration-500 ${
                      isActive
                        ? "border-primary shadow-[0_0_20px_rgba(255,0,0,0.3)]"
                        : "border-transparent"
                    }`}
                  />
                  <span className="relative z-10 flex items-center gap-2">
                    {isActive && (
                      <div className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
                    )}
                    {cat}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 pb-32">
        {Object.keys(groupedCharacters).length > 0 ? (
          Object.entries(groupedCharacters).map(([seriesName, characters]) => {
            const isUltra = characters[0].category === "Ultraman";
            return (
              <div
                key={seriesName}
                className="mb-24 animate-in fade-in slide-in-from-bottom-8 duration-1000"
              >
                <div className="flex flex-col md:flex-row md:items-end gap-6 mb-12">
                  <div className="space-y-2">
                    <div
                      className={`flex items-center gap-2 font-mono text-[10px] tracking-[0.5em] uppercase italic ${
                        isUltra ? "text-blue-500" : "text-primary"
                      }`}
                    >
                      <Layers size={14} />{" "}
                      {isUltra ? "TPC_GLOBAL_FILE" : "Classification_Module"}
                    </div>
                    <h2 className="font-oswald text-5xl md:text-6xl font-black uppercase italic tracking-tighter text-white">
                      {seriesName}
                    </h2>
                  </div>
                  <div
                    className={`flex-grow h-px mb-4 ${
                      isUltra
                        ? "bg-gradient-to-r from-blue-600/30 via-white/5 to-transparent"
                        : "bg-gradient-to-r from-primary/30 via-white/5 to-transparent"
                    }`}
                  />
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
                  {characters.map((char) => (
                    <Link
                      href={`/character/${char.id}`}
                      key={char.id}
                      className={`group relative aspect-[2/3] bg-zinc-950 rounded-2xl overflow-hidden border border-white/5 transition-all duration-500 hover:scale-105 ${char.accent}`}
                    >
                      <img
                        src={char.img}
                        alt={char.name}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 opacity-40 group-hover:opacity-100 transition-all duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
                      <div className="absolute inset-0 flex flex-col justify-end p-5 translate-y-4 group-hover:translate-y-0 transition-transform">
                        <p
                          className={`text-[9px] font-mono uppercase tracking-[0.3em] mb-2 opacity-0 group-hover:opacity-100 transition-opacity ${
                            isUltra ? "text-blue-400" : "text-primary"
                          }`}
                        >
                          {isUltra ? "TPC_OFFICER" : "Hero_Identity"}
                        </p>
                        <h3
                          className={`font-oswald text-2xl font-bold uppercase italic text-white group-hover:${
                            isUltra ? "text-blue-400" : "text-primary"
                          } transition-colors leading-none`}
                        >
                          {char.name}
                        </h3>
                      </div>
                      {isUltra && (
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-blue-600/80 text-[8px] uppercase font-mono">
                            GUTS
                          </Badge>
                        </div>
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            );
          })
        ) : (
          <div className="text-center py-40 rounded-[3rem] border border-dashed border-white/10 bg-white/[0.01]">
            <ShieldAlert className="w-20 h-20 mx-auto mb-6 text-zinc-800 animate-bounce" />
            <h3 className="text-2xl font-oswald text-zinc-500 uppercase tracking-[0.5em]">
              No_Dossier_Found
            </h3>
          </div>
        )}
      </main>

      <footer className="py-20 border-t border-white/5 text-center relative z-10">
        <p className="font-mono text-[10px] text-zinc-700 uppercase tracking-[1em]">
          TokuArchive_Security_Protocol_Active
        </p>
      </footer>
    </div>
  );
}
