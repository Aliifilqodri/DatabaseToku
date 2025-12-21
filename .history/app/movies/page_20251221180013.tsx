"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { PlayCircle, Star, Ticket, Film } from "lucide-react"

// --- MOVIE DATABASE (Gokaiger Focus) ---
const allMovies = [
  // 1. SHINKENGER (Predecessor)
  { 
    id: 1, 
    title: "Shinkenger The Movie: The Fateful War", 
    year: "2009", 
    group: "Super Sentai", 
    series: "Samurai Sentai Shinkenger", // Penanda Seri
    type: "Theatrical", 
    img: "/placeholder.svg", 
    rating: "4.7" 
  },
  { 
    id: 2, 
    title: "Shinkenger vs. Go-Onger: GinmakuBang!!", 
    year: "2010", 
    group: "Super Sentai", 
    series: "Samurai Sentai Shinkenger", 
    type: "VS Movie", 
    img: "/placeholder.svg", 
    rating: "4.6" 
  },
  { 
    id: 3, 
    title: "The Return of Samurai Sentai Shinkenger", 
    year: "2010", 
    group: "Super Sentai", 
    series: "Samurai Sentai Shinkenger", 
    type: "V-Cinema", 
    img: "/placeholder.svg", 
    rating: "4.8" 
  },

  // 2. GOKAIGER (Main Focus)
  { 
    id: 4, 
    title: "Gokaiger Goseiger Super Sentai 199 Hero", 
    year: "2011", 
    group: "Super Sentai", 
    series: "Kaizoku Sentai Gokaiger", // Penanda Seri
    type: "Anniversary", 
    img: "/placeholder.svg", // Ganti dengan poster 199 Hero
    rating: "5.0" 
  },
  { 
    id: 5, 
    title: "Kaizoku Sentai Gokaiger: The Flying Ghost Ship", 
    year: "2011", 
    group: "Super Sentai", 
    series: "Kaizoku Sentai Gokaiger", 
    type: "Theatrical", 
    img: "/placeholder.svg", // Ganti dengan poster Ghost Ship
    rating: "4.8" 
  },
  { 
    id: 6, 
    title: "Gokaiger vs. Gavan: The Movie", 
    year: "2012", 
    group: "Super Sentai", 
    series: "Kaizoku Sentai Gokaiger", 
    type: "Crossover", 
    img: "/placeholder.svg", 
    rating: "4.9" 
  },
  { 
    id: 7, 
    title: "Go-Busters vs. Gokaiger", 
    year: "2013", 
    group: "Super Sentai", 
    series: "Kaizoku Sentai Gokaiger", 
    type: "VS Movie", 
    img: "/placeholder.svg", 
    rating: "4.7" 
  },
  { 
    id: 8, 
    title: "Kaizoku Sentai: Ten Gokaiger", 
    year: "2021", 
    group: "Super Sentai", 
    series: "Kaizoku Sentai Gokaiger", 
    type: "V-Cinext", 
    img: "/placeholder.svg", // Ganti dengan poster Ten Gokaiger
    rating: "5.0" 
  },
]

const filters = ["All", "Super Sentai"]

export default function MoviesPage() {
  const [activeFilter, setActiveFilter] = useState("All")

  // Filter Data
  const filteredMovies = allMovies.filter(m => 
    activeFilter === "All" || m.group === activeFilter
  )

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans">
      <Navbar />

      {/* --- FEATURED BANNER --- */}
      <div className="relative h-[55vh] w-full overflow-hidden">
        <img 
          src="/sentai/gokaiger/Ten-Gokaiger.jpg" // Pastikan gambar ada
          alt="Featured" 
          className="absolute inset-0 w-full h-full object-cover brightness-[0.35]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
        
        <div className="absolute bottom-0 left-0 p-8 sm:p-16 max-w-5xl">
          <Badge className="bg-primary text-white mb-4 px-3 py-1 font-bold animate-in fade-in slide-in-from-left duration-700">10TH ANNIVERSARY</Badge>
          <h1 className="font-oswald text-5xl md:text-7xl font-black uppercase italic tracking-tighter mb-4 leading-none text-white animate-in slide-in-from-bottom duration-700 delay-100">
            Ten <span className="text-primary text-stroke">Gokaiger</span>
          </h1>
          <Button className="h-12 px-8 bg-white text-black hover:bg-gray-200 font-bold uppercase rounded-sm animate-in fade-in duration-1000 delay-300">
             <Ticket className="mr-2" size={20}/> Watch Now
          </Button>
        </div>
      </div>

      {/* --- MOVIE LIST --- */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 py-12">
        
        {/* Filter Tabs */}
        <div className="flex items-center gap-4 mb-8 overflow-x-auto pb-4 scrollbar-hide">
          {filters.map(filter => (
             <button
             key={filter}
             onClick={() => setActiveFilter(filter)}
             className={`px-6 py-2 rounded-full border text-sm font-bold uppercase tracking-wider transition-all duration-300 whitespace-nowrap
               ${activeFilter === filter 
                 ? "bg-primary border-primary text-white shadow-[0_0_15px_rgba(229,9,20,0.5)]" 
                 : "bg-transparent border-white/10 text-gray-400 hover:border-white/40 hover:text-white"
               }`}
           >
             {filter}
           </button>
          ))}
        </div>

        {/* Movies Grid with Section Separators */}
        <div className="space-y-12">
            {/* Logic Grouping per Series */}
            {Array.from(new Set(filteredMovies.map(m => m.series))).map((seriesName) => (
                <div key={seriesName}>
                    {/* Pembatas / Separator Judul Series */}
                    <div className="flex items-center gap-4 mb-6 animate-in fade-in slide-in-from-left duration-500">
                        <div className="h-8 w-1 bg-primary rounded-full"></div>
                        <h2 className="text-2xl md:text-3xl font-oswald font-bold uppercase text-white tracking-wide">
                            {seriesName} Movies
                        </h2>
                        <div className="h-[1px] flex-1 bg-white/10"></div>
                    </div>

                    {/* Grid Film untuk Series Tersebut */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                        {filteredMovies.filter(m => m.series === seriesName).map((movie, idx) => (
                            <div 
                                key={movie.id} 
                                className="group relative cursor-pointer bg-zinc-900 rounded-lg overflow-hidden shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-2 animate-in fade-in zoom-in fill-mode-backwards"
                                style={{ animationDelay: `${idx * 100}ms` }}
                            >
                                <div className="aspect-[2/3] w-full bg-zinc-800 relative overflow-hidden">
                                    <img 
                                    src={movie.img} 
                                    alt={movie.title} 
                                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute top-2 left-2">
                                        <Badge className="bg-black/60 backdrop-blur-md text-white border-white/10 text-[10px] uppercase font-bold tracking-wider">
                                            {movie.type}
                                        </Badge>
                                    </div>
                                    <div className="absolute top-2 right-2">
                                        <Badge className="bg-yellow-500 text-black border-none text-[10px] font-bold flex items-center gap-1">
                                            <Star size={8} fill="black"/> {movie.rating}
                                        </Badge>
                                    </div>
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                                        <PlayCircle size={40} className="text-white drop-shadow-lg scale-75 group-hover:scale-100 transition-transform"/>
                                    </div>
                                </div>

                                <div className="p-3 bg-zinc-950 border-t border-white/5">
                                    <h3 className="font-oswald text-base font-bold text-white uppercase leading-tight truncate group-hover:text-primary transition-colors">
                                    {movie.title}
                                    </h3>
                                    <div className="flex justify-between items-center mt-2">
                                        <span className="text-[10px] text-gray-500 font-mono">{movie.year}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
        
        {/* Empty State */}
        {filteredMovies.length === 0 && (
           <div className="text-center py-20 opacity-50">
              <Film className="w-16 h-16 mx-auto mb-4 text-gray-600"/>
              <h3 className="text-xl font-oswald text-gray-400 uppercase">No Movies Found</h3>
              <p className="text-gray-500 text-sm">We are currently updating our archives for {activeFilter}.</p>
           </div>
        )}
      </div>
    </div>
  )
}