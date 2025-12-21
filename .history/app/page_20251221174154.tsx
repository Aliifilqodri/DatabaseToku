"use client"

import { useState, useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Layers, ChevronRight, Sword, Shield, Zap, Activity, Search } from "lucide-react"
import Link from "next/link"

// --- DATA HERO SLIDER (GOKAIGER VERSION) ---
const heroEntries = [
  {
    id: "gokai-red", // Link ke /character/gokai-red
    title: "GOKAI RED",
    subtitle: "CAPTAIN MARVELOUS",
    desc: "The fearless captain of the Gokaigers. He leads his crew with wild instincts and seeks the Greatest Treasure in the Universe to fulfill a promise.",
    image: "/sentai/gokaiger/marvelous.webp", // Pastikan gambar ada
    logo: "MARVELOUS",
    stats: { punch: "5.0 t", kick: "10.0 t", height: "185 cm", weight: "75 kg" },
    year: "2011",
    motif: "Pirate"
  },
  {
    id: "joe-gibken", // Link ke /character/joe-gibken
    title: "GOKAI BLUE",
    subtitle: "JOE GIBKEN",
    desc: "The cool-headed swordsman and second-in-command. A former Zangyack elite who swore loyalty to Marvelous after being saved by him.",
    image: "/sentai/gokaiger/joe.webp", 
    logo: "JOE",
    stats: { punch: "4.5 t", kick: "9.0 t", height: "180 cm", weight: "70 kg" },
    year: "2011",
    motif: "Pirate"
  },
  {
    id: "luka-millfy", // Link ke /character/luka-millfy
    title: "GOKAI YELLOW",
    subtitle: "LUKA MILLFY",
    desc: "The team's lookout who loves money and treasures. Despite her greed, she cares deeply for her friends and fights to protect those in poverty.",
    image: "/sentai/luka/Luka_Millfy.webp", 
    logo: "LUKA",
    stats: { punch: "4.0 t", kick: "8.5 t", height: "165 cm", weight: "55 kg" },
    year: "2011",
    motif: "Pirate"
  }
]

// --- KATEGORI WIKI DI BAWAH ---
const wikiCategories = [
  { 
    title: "The Space Pirates", 
    desc: "The 35th Super Sentai team traveling the universe.",
    items: [
        {id: "gokai-red", title: "Gokai Red", year: "Marvelous"}, 
        {id: "joe-gibken", title: "Gokai Blue", year: "Joe"}, 
        {id: "luka-millfy", title: "Gokai Yellow", year: "Luka"},
        {id: "gokai-green", title: "Gokai Green", year: "Doc"},
        {id: "gokai-pink", title: "Gokai Pink", year: "Ahim"},
        {id: "gokai-silver", title: "Gokai Silver", year: "Gai"}
    ] 
  },
  { 
    title: "Pirate Machines", 
    desc: "Giant machines that combine to form GokaiOh.",
    items: [
        {id: "galleon", title: "Gokai Galleon", year: "Red"}, 
        {id: "jet", title: "Gokai Jet", year: "Blue"}, 
        {id: "trailer", title: "Gokai Trailer", year: "Yellow"},
        {id: "racer", title: "Gokai Racer", year: "Green"},
        {id: "marine", title: "Gokai Marine", year: "Pink"}
    ] 
  }
]

export default function HomePage() {
  const [current, setCurrent] = useState(0)

  // Auto Slide setiap 8 detik
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === heroEntries.length - 1 ? 0 : prev + 1))
    }, 8000)
    return () => clearInterval(timer)
  }, [])

  const activeHero = heroEntries[current]

  return (
    <div className="min-h-screen bg-[#050505] font-sans selection:bg-primary selection:text-white overflow-x-hidden">
      <Navbar />
      
      {/* HERO SECTION */}
      <div className="relative h-screen w-full overflow-hidden">
        {/* Background Image with Transitions */}
        {heroEntries.map((entry, idx) => (
          <div key={entry.id} className={`absolute inset-0 transition-opacity duration-1000 ${idx === current ? "opacity-100" : "opacity-0"}`}>
            <img src={entry.image} alt={entry.title} className="h-full w-full object-cover brightness-50" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/70 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
          </div>
        ))}

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center px-6 sm:px-12 lg:px-20 pt-16">
          <div className="grid w-full grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left: Text Info */}
            <div className="space-y-6 animate-in slide-in-from-left duration-700">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/50 bg-primary/10 px-3 py-1 text-xs font-mono text-primary tracking-widest uppercase">
                 <div className="h-2 w-2 rounded-full bg-primary animate-pulse"/> Bounty Log #{current + 1}
              </div>
              
              <div>
                <h2 className="font-oswald text-2xl font-bold text-gray-400 uppercase tracking-[0.2em]">{activeHero.subtitle}</h2>
                <h1 className="font-oswald text-8xl md:text-9xl font-black italic tracking-tighter text-white leading-[0.9]">
                  {activeHero.logo}
                </h1>
              </div>

              <div className="flex gap-3">
                 <Badge className="bg-white text-black font-bold text-sm px-3 rounded-sm">{activeHero.year}</Badge>
                 <Badge variant="outline" className="text-gray-300 border-gray-600 text-sm px-3 rounded-sm uppercase">Role: {activeHero.motif}</Badge>
              </div>

              <p className="max-w-xl text-lg text-gray-300 border-l-4 border-primary pl-6 py-1 leading-relaxed">
                {activeHero.desc}
              </p>

              <div className="flex gap-4 pt-4">
                <Link href={`/character/${activeHero.id}`}>
                    <Button className="h-14 px-8 bg-primary hover:bg-primary/80 text-white font-bold text-lg uppercase tracking-wider rounded-none clip-angle border-none">
                    <BookOpen className="mr-2" size={20} /> Read Full Profile
                    </Button>
                </Link>
                <Button variant="outline" className="h-14 px-8 border-white/20 bg-white/5 hover:bg-white/10 text-white font-bold text-lg uppercase tracking-wider rounded-none clip-angle">
                  <Layers className="mr-2" size={20} /> Gokai Change
                </Button>
              </div>
            </div>

            {/* Right: HUD Stats (Glass Panel) */}
            <div className="hidden lg:flex justify-end animate-in fade-in zoom-in duration-1000 delay-200">
               <div className="glass-panel w-96 p-8 rounded-xl relative overflow-hidden">
                  <Activity className="absolute top-6 right-6 text-primary animate-pulse" />
                  <h3 className="font-oswald text-xl text-white uppercase tracking-widest border-b border-white/10 pb-4 mb-6">Battle Specs</h3>
                  
                  <div className="space-y-5 font-mono text-sm text-gray-300">
                     <div className="flex justify-between items-center">
                        <span className="flex items-center gap-2"><Sword size={14}/> Punching Power</span>
                        <span className="text-primary font-bold text-lg">{activeHero.stats.punch}</span>
                     </div>
                     <div className="h-1 w-full bg-gray-800 rounded-full overflow-hidden"><div className="h-full bg-primary w-[60%]"/></div>

                     <div className="flex justify-between items-center mt-2">
                        <span className="flex items-center gap-2"><Zap size={14}/> Kicking Power</span>
                        <span className="text-primary font-bold text-lg">{activeHero.stats.kick}</span>
                     </div>
                     <div className="h-1 w-full bg-gray-800 rounded-full overflow-hidden"><div className="h-full bg-primary w-[80%]"/></div>

                     <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-white/10">
                        <div>
                            <span className="flex items-center gap-2 text-xs uppercase mb-1"><Shield size={12}/> Height</span>
                            <span className="text-white font-bold text-xl">{activeHero.stats.height}</span>
                        </div>
                        <div>
                            <span className="flex items-center gap-2 text-xs uppercase mb-1">Weight</span>
                            <span className="text-white font-bold text-xl">{activeHero.stats.weight}</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

          </div>
        </div>

        {/* Slider Dots */}
        <div className="absolute bottom-10 left-1/2 flex -translate-x-1/2 gap-3 z-20">
            {heroEntries.map((_, idx) => (
                <button 
                    key={idx} 
                    onClick={() => setCurrent(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${current === idx ? "w-12 bg-primary" : "w-4 bg-gray-600 hover:bg-gray-400"}`}
                />
            ))}
        </div>
      </div>

      {/* WIKI ROWS */}
      <div className="relative z-10 bg-[#0a0a0a] pb-20">
        <div className="bg-zinc-900/50 border-y border-white/5 py-8 px-6 sm:px-16 text-center backdrop-blur-sm">
           <h3 className="font-oswald text-xl text-white mb-4 uppercase tracking-widest">Search the Wanted Logs</h3>
           <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
              <input 
                 type="text" 
                 placeholder="Search name, mecha, or episode..." 
                 className="w-full bg-black border border-zinc-700 rounded-full py-2 pl-10 pr-4 text-white focus:outline-none focus:border-primary transition-colors"
              />
           </div>
        </div>

        <div className="px-6 sm:px-12 lg:px-20 mt-12 space-y-12">
            {wikiCategories.map((cat, i) => (
                <div key={i}>
                    <div className="flex items-end justify-between mb-6 border-b border-white/10 pb-2">
                        <h3 className="font-oswald text-2xl font-bold text-white uppercase tracking-wide">{cat.title}</h3>
                        <Button variant="link" className="text-primary decoration-transparent">View All <ChevronRight size={16}/></Button>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {cat.items.map((item, j) => (
                            <Link href={`/character/${item.id}`} key={j}>
                                <div className="aspect-[3/4] bg-zinc-900 border border-white/5 rounded-lg overflow-hidden group cursor-pointer relative hover:border-primary transition-colors">
                                    {/* Placeholder logic - nanti diganti gambar asli jika ada */}
                                    <div className="absolute inset-0 bg-zinc-800 flex items-center justify-center">
                                        <span className="font-oswald text-4xl text-white/10">{item.title.substring(0,2)}</span>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"/>
                                    <div className="absolute bottom-3 left-3">
                                        <span className="text-[10px] text-primary font-mono uppercase">{item.year}</span>
                                        <p className="font-oswald text-white uppercase tracking-wider group-hover:text-primary transition-colors text-sm">{item.title}</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}