"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { PlayCircle, Star, Ticket, Film } from "lucide-react"

// --- GOKAIGER MOVIE DATABASE ---
const allMovies = [
  // THEATRICAL (Bioskop)
  { 
    id: 1, 
    title: "Gokaiger Goseiger Super Sentai 199 Hero Great Battle", 
    year: "2011", 
    group: "Super Sentai", 
    type: "Theatrical", 
    img: "/sentai/gokaiger/movie_199.jpg", // Pastikan gambar ada di folder public
    rating: "5.0" 
  },
  { 
    id: 2, 
    title: "Kaizoku Sentai Gokaiger the Movie: The Flying Ghost Ship", 
    year: "2011", 
    group: "Super Sentai", 
    type: "Theatrical", 
    img: "/sentai/gokaiger/movie_ghost_ship.jpg", 
    rating: "4.8" 
  },

  // VS / CROSSOVER
  { 
    id: 3, 
    title: "Kaizoku Sentai Gokaiger vs. Space Sheriff Gavan: The Movie", 
    year: "2012", 
    group: "Super Sentai", 
    type: "Crossover", 
    img: "/sentai/gokaiger/movie_vs_gavan.jpg", 
    rating: "4.9" 
  },
  { 
    id: 4, 
    title: "Tokumei Sentai Go-Busters vs. Kaizoku Sentai Gokaiger: The Movie", 
    year: "2013", 
    group: "Super Sentai", 
    type: "VS Movie", 
    img: "/sentai/gokaiger/movie_vs_gobusters.jpg", 
    rating: "4.7" 
  },
  { 
    id: 5, 
    title: "Kamen Rider × Super Sentai: Super Hero Taisen", 
    year: "2012", 
    group: "Super Sentai", 
    type: "Crossover", 
    img: "/sentai/gokaiger/movie_super_hero_taisen.jpg", 
    rating: "4.5" 
  },

  // V-CINEXT (Special)
  { 
    id: 6, 
    title: "Kaizoku Sentai: Ten Gokaiger", 
    year: "2021", 
    group: "Super Sentai", 
    type: "V-Cinext", 
    img: "/sentai/gokaiger/movie_ten_gokaiger.jpg", 
    rating: "5.0" 
  },
  {
    id: 7,
    title: "Zyuohger vs. Ninninger: Message from the Future from Super Sentai", 
    year: "2017",
    group: "Super Sentai",
    type: "Cameo",
    img: "/placeholder.svg",
    rating: "4.6"
  }
]

// Filter disesuaikan dengan tipe film Gokaiger
const filters = ["All", "Theatrical", "VS Movie", "Crossover", "V-Cinext"]

export default function MoviesPage() {
  const [activeFilter, setActiveFilter] = useState("All")

  // Filter Logic
  const filteredMovies = allMovies.filter(m => 
    activeFilter === "All" || m.type === activeFilter
  )

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans">
      <Navbar />

      {/* --- FEATURED BANNER (Ten Gokaiger) --- */}
      <div className="relative h-[55vh] w-full overflow-hidden">
        {/* Background Image - Ten Gokaiger */}
        <img 
          src="/sentai/gokaiger/ten_gokaiger_banner.jpg" // Ganti dengan banner keren Ten Gokaiger
          alt="Featured" 
          className="absolute inset-0 w-full h-full object-cover brightness-[0.4]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
        
        <div className="absolute bottom-0 left-0 p-8 sm:p-16 max-w-5xl">
          <Badge className="bg-red-600 text-white mb-4 px-3 py-1 font-bold animate-in fade-in slide-in-from-left duration-700">
            10TH ANNIVERSARY
          </Badge>
          <h1 className="font-oswald text-5xl md:text-7xl font-black uppercase italic tracking-tighter mb-4 leading-none text-white animate-in slide-in-from-bottom duration-700 delay-100 drop-shadow-2xl">
            Kaizoku Sentai <br/> <span className="text-red-600 text-stroke">Ten Gokaiger</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-xl mb-8 font-medium leading-relaxed animate-in fade-in duration-1000 delay-300">
            The Space Pirates return after 10 years! With the Super Sentai battles now a gambling sport, Marvelous and the crew must unite once more to uncover the truth behind the "Super Sentai Derby".
          </p>
          <Button className="h-12 px-8 bg-white text-black hover:bg-gray-200 font-bold uppercase rounded-sm animate-in fade-in duration-1000 delay-500">
             <Ticket className="mr-2" size={20}/> Watch Movie
          </Button>
        </div>
      </div>

      {/* --- MOVIE LIST --- */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 py-12">
        
        <div className="flex items-center justify-between mb-8">
           <h2 className="font-oswald text-3xl font-bold uppercase text-white border-l-4 border-red-600 pl-4">
             Gokaiger Movie Archives
           </h2>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-4 mb-8 overflow-x-auto pb-4 scrollbar-hide">
          {filters.map(filter => (
             <button
             key={filter}
             onClick={() => setActiveFilter(filter)}
             className={`px-6 py-2 rounded-full border text-sm font-bold uppercase tracking-wider transition-all duration-300 whitespace-nowrap
               ${activeFilter === filter 
                 ? "bg-red-600 border-red-600 text-white shadow-[0_0_15px_rgba(220,38,38,0.5)]" 
                 : "bg-transparent border-white/10 text-gray-400 hover:border-white/40 hover:text-white"
               }`}
           >
             {filter}
           </button>
          ))}
        </div>

        {/* Posters Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {filteredMovies.map((movie, idx) => (
            <div 
              key={movie.id} 
              className="group relative cursor-pointer bg-zinc-900 rounded-lg overflow-hidden shadow-lg hover:shadow-red-600/20 transition-all duration-300 hover:-translate-y-2 animate-in fade-in zoom-in fill-mode-backwards"
              style={{ animationDelay: `${idx * 50}ms` }}
            >
              
              {/* Poster Image */}
              <div className="aspect-[2/3] w-full bg-zinc-800 relative overflow-hidden">
                <img 
                  src={movie.img} 
                  alt={movie.title} 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Group Badge (Top Left) */}
                <div className="absolute top-2 left-2">
                    <Badge className="bg-black/60 backdrop-blur-md text-white border-white/10 text-[10px] uppercase font-bold tracking-wider">
                        {movie.group}
                    </Badge>
                </div>

                {/* Rating (Top Right) */}
                <div className="absolute top-2 right-2">
                    <Badge className="bg-yellow-500 text-black border-none text-[10px] font-bold flex items-center gap-1">
                        <Star size={8} fill="black"/> {movie.rating}
                    </Badge>
                </div>

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                    <PlayCircle size={40} className="text-white drop-shadow-lg scale-75 group-hover:scale-100 transition-transform"/>
                </div>
              </div>

              {/* Minimal Info */}
              <div className="p-3 bg-zinc-950 border-t border-white/5">
                <h3 className="font-oswald text-base font-bold text-white uppercase leading-tight truncate group-hover:text-red-500 transition-colors">
                  {movie.title}
                </h3>
                <div className="flex justify-between items-center mt-2">
                    <span className="text-[10px] text-gray-500 font-mono">{movie.year}</span>
                    <Badge variant="outline" className="text-[9px] border-white/10 text-gray-400 px-1 py-0 h-4">{movie.type}</Badge>
                </div>
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