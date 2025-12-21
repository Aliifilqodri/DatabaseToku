"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, Star, BookOpen, Film, AlertTriangle, PlayCircle } from "lucide-react";
import Link from "next/link";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

// --- MOVIE DATABASE ---
const allMovies = [
  // 1. SHINKENGER
  {
    id: 1,
    title: "Shinkenger The Movie: The Fateful War",
    year: "2009",
    group: "Super Sentai",
    series: "Samurai Sentai Shinkenger",
    type: "Theatrical",
    img: "/movie/Sss-fateful-war.webp",
    rating: "4.7",
  },
  {
    id: 2,
    title: "Shinkenger vs. Go-Onger: GinmakuBang!!",
    year: "2010",
    group: "Super Sentai",
    series: "Samurai Sentai Shinkenger",
    type: "VS Movie",
    img: "/movie/OIP.webp",
    rating: "4.6",
  },
  {
    id: 3,
    title: "The Return of Samurai Sentai Shinkenger",
    year: "2010",
    group: "Super Sentai",
    series: "Samurai Sentai Shinkenger",
    type: "V-Cinema",
    img: "/movie/OIP (1).webp",
    rating: "4.8",
  },

  // 2. GOKAIGER
  {
    id: 4,
    title: "Gokaiger Goseiger Super Sentai 199 Hero",
    year: "2011",
    group: "Super Sentai",
    series: "Kaizoku Sentai Gokaiger",
    type: "Anniversary",
    img: "/movie/R.jpeg",
    rating: "5.0",
  },
  {
    id: 5,
    title: "Kaizoku Sentai Gokaiger: The Flying Ghost Ship",
    year: "2011",
    group: "Super Sentai",
    series: "Kaizoku Sentai Gokaiger",
    type: "Theatrical",
    img: "/movie/OIP.jpeg",
    rating: "4.8",
  },
  {
    id: 6,
    title: "Gokaiger vs. Gavan: The Movie",
    year: "2012",
    group: "Super Sentai",
    series: "Kaizoku Sentai Gokaiger",
    type: "Crossover",
    img: "/movie/8Qw53GWAfnIEdqAQ9HGFmlInsie.jpg",
    rating: "4.9",
  },
  {
    id: 7,
    title: "Go-Busters vs. Gokaiger",
    year: "2013",
    group: "Super Sentai",
    series: "Kaizoku Sentai Gokaiger",
    type: "VS Movie",
    img: "/movie/91z-idQ1JbL._SL1378_.jpg",
    rating: "4.7",
  },
  {
    id: 8,
    title: "Kaizoku Sentai: Ten Gokaiger",
    year: "2021",
    group: "Super Sentai",
    series: "Kaizoku Sentai Gokaiger",
    type: "V-Cinext",
    img: "/movie/ten_gokaiger_1.webp",
    rating: "5.0",
  },
];

const filters = ["All", "Super Sentai"];

export default function MoviesPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [alertOpen, setAlertOpen] = useState(false);

  const filteredMovies = allMovies.filter(
    (m) => activeFilter === "All" || m.group === activeFilter
  );

  const handleCardClick = (e: React.MouseEvent, seriesName: string) => {
    // Logic: Hanya Gokaiger yang bisa dibuka
    if (seriesName !== "Kaizoku Sentai Gokaiger") {
      e.preventDefault();
      setAlertOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-primary selection:text-white">
      <Navbar />

      {/* --- FEATURED BANNER --- */}
      <div className="relative h-[60vh] w-full overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <img
            src="/movie/Ten-Gokaiger.jpg"
            alt="Featured"
            className="w-full h-full object-cover object-top brightness-[0.4] scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-transparent" />
        </div>

        <div className="absolute inset-0 flex items-center px-6 sm:px-12 lg:px-20 pt-20">
          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-primary/20 border border-primary/50 text-primary text-xs font-bold uppercase tracking-widest animate-in fade-in slide-in-from-left duration-700">
              <Star size={12} fill="currentColor" /> Featured Premiere
            </div>
            
            <h1 className="font-oswald text-6xl md:text-8xl font-black italic tracking-tighter text-white leading-[0.9] drop-shadow-2xl animate-in slide-in-from-bottom duration-700 delay-100">
              TEN <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-600">GOKAIGER</span>
            </h1>
            
            <p className="max-w-2xl text-lg text-gray-300 border-l-4 border-primary pl-6 py-1 leading-relaxed animate-in fade-in duration-1000 delay-200">
              The Space Pirates return after 10 years! A battle for the "Super Sentai Derby Colosseum" begins. Will they bet on their pirate pride?
            </p>

            <div className="pt-4 animate-in fade-in duration-1000 delay-300">
              <Link href="/movie/8">
                <Button className="h-14 px-8 bg-white text-black hover:bg-gray-200 font-bold text-lg uppercase tracking-wider rounded-none clip-angle transition-all hover:scale-105">
                  <BookOpen className="mr-2" size={20} /> Read Synopsis
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* --- MOVIE LIST CONTENT --- */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 py-16">
        
        {/* Filter Tabs */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex items-center gap-2 p-1.5 bg-zinc-900/80 border border-white/10 rounded-full backdrop-blur-md">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300
                  ${
                    activeFilter === filter
                      ? "bg-primary text-white shadow-lg shadow-primary/25"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Movies Grid Grouped by Series */}
        <div className="space-y-20">
          {Array.from(new Set(filteredMovies.map((m) => m.series))).map(
            (seriesName) => (
              <div key={seriesName} className="animate-in fade-in slide-in-from-bottom duration-700">
                
                {/* Series Title Separator */}
                <div className="flex items-end gap-4 mb-8 border-b border-white/10 pb-4">
                  <h2 className="text-3xl font-oswald font-bold uppercase text-white tracking-wide leading-none">
                    {seriesName}
                  </h2>
                  <span className="text-sm font-mono text-gray-500 mb-1 uppercase tracking-widest">
                    Collection
                  </span>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-10">
                  {filteredMovies
                    .filter((m) => m.series === seriesName)
                    .map((movie, idx) => (
                      <Link
                        href={`/movie/${movie.id}`}
                        key={movie.id}
                        onClick={(e) => handleCardClick(e, movie.series)}
                        className="group relative block"
                      >
                        {/* Card Image Wrapper */}
                        <div className="relative aspect-[2/3] w-full overflow-hidden rounded-lg bg-zinc-900 border border-white/5 shadow-2xl transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-primary/20 group-hover:-translate-y-2">
                          <img
                            src={movie.img}
                            alt={movie.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                          />
                          
                          {/* Top Badges */}
                          <div className="absolute top-2 left-2 flex flex-col gap-1">
                             <Badge className="bg-black/80 backdrop-blur-md text-white border-white/10 text-[9px] uppercase font-bold tracking-wider w-fit">
                                {movie.type}
                             </Badge>
                          </div>

                          {/* Rating */}
                          <div className="absolute top-2 right-2">
                            <Badge className="bg-yellow-500 text-black border-none text-[10px] font-bold flex items-center gap-1 shadow-md">
                              <Star size={8} fill="black" /> {movie.rating}
                            </Badge>
                          </div>

                          {/* Hover Overlay */}
                          <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100">
                            <div className="bg-white/10 p-3 rounded-full border border-white/20 backdrop-blur-md text-white transform scale-75 transition-transform duration-300 group-hover:scale-100">
                               <Eye size={24} />
                            </div>
                          </div>
                        </div>

                        {/* Card Info */}
                        <div className="mt-4 space-y-1">
                          <h3 className="font-oswald text-base font-bold text-gray-200 uppercase leading-tight line-clamp-2 group-hover:text-primary transition-colors">
                            {movie.title}
                          </h3>
                          <div className="flex items-center gap-2 text-xs text-gray-500 font-mono">
                            <span>{movie.year}</span>
                            <span className="w-1 h-1 rounded-full bg-gray-600"></span>
                            <span>Movie</span>
                          </div>
                        </div>
                      </Link>
                    ))}
                </div>
              </div>
            )
          )}
        </div>

        {/* Empty State */}
        {filteredMovies.length === 0 && (
          <div className="flex flex-col items-center justify-center py-32 opacity-50">
            <Film className="w-16 h-16 mb-4 text-gray-700" />
            <h3 className="text-2xl font-oswald text-gray-500 uppercase tracking-widest">
              No Archives Found
            </h3>
            <p className="text-gray-600 text-sm mt-2">