"use client"

import { useState, useEffect } from "react"
import { Navbar } from "@/components/navbar"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, Info, ChevronLeft, ChevronRight, Plus } from "lucide-react"

// --- DATA MOCKUP ---

const heroSlides = [
  {
    id: "kamen-rider-geats",
    title: "KAMEN RIDER GEATS",
    desc: "The Desire Grand Prix is a survival game where players must protect the city from the Jyamato to win the right to bring their ideal world to life.",
    image: "/kamen-rider-geats-superhero-mask.jpg", // Ganti dengan gambar asli
    logo: "GEATS",
    tags: ["Action", "Battle Royale", "Sci-Fi"],
    year: "2023"
  },
  {
    id: "king-ohger",
    title: "OHSAMA SENTAI KING-OHGER",
    desc: "Five kings from different nations must unite their insect-themed powers to protect the earth from the Bugnarak Empire.",
    image: "/super-sentai-king-ohger-team.jpg", // Ganti dengan gambar asli
    logo: "KING-OHGER",
    tags: ["Fantasy", "Mecha", "Epic"],
    year: "2024"
  },
  {
    id: "ultraman-blazar",
    title: "ULTRAMAN BLAZAR",
    desc: "Captain Gento Hiruma transforms into the giant of light, Ultraman Blazar, to fight kaiju threats alongside the SKaRD team.",
    image: "/ultraman-decker-silver-hero.jpg", // Ganti dengan gambar asli
    logo: "BLAZAR",
    tags: ["Kaiju", "Military", "Hero"],
    year: "2023"
  }
]

const categories = [
  {
    title: "Trending Now",
    items: [
      { id: 1, title: "Kamen Rider Gotchard", img: "/placeholder.svg" },
      { id: 2, title: "Ultraman Arc", img: "/placeholder.svg" },
      { id: 3, title: "Boonboomger", img: "/placeholder.svg" },
      { id: 4, title: "Garo: Heir to Steel", img: "/placeholder.svg" },
      { id: 5, title: "Gridman Universe", img: "/placeholder.svg" },
    ]
  },
  {
    title: "Legendary Kamen Riders",
    items: [
      { id: 6, title: "Kamen Rider Kuuga", img: "/placeholder.svg" },
      { id: 7, title: "Kamen Rider W", img: "/placeholder.svg" },
      { id: 8, title: "Kamen Rider OOO", img: "/placeholder.svg" },
      { id: 9, title: "Kamen Rider Build", img: "/placeholder.svg" },
      { id: 10, title: "Kamen Rider 555", img: "/placeholder.svg" },
    ]
  },
  {
    title: "Super Sentai Classics",
    items: [
      { id: 11, title: "Shinkenger", img: "/placeholder.svg" },
      { id: 12, title: "Gokaiger", img: "/placeholder.svg" },
      { id: 13, title: "Dekaranger", img: "/placeholder.svg" },
      { id: 14, title: "Jetman", img: "/placeholder.svg" },
      { id: 15, title: "Magiranger", img: "/placeholder.svg" },
    ]
  }
]

// --- COMPONENTS ---

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0)

  // Auto slide setiap 6 detik
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1))
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const slideTo = (index: number) => setCurrent(index)

  return (
    <div className="relative h-[85vh] w-full overflow-hidden bg-black">
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
             <img 
               src={slide.image} 
               alt={slide.title} 
               className="h-full w-full object-cover opacity-60"
             />
             {/* Gradients: Kiri gelap (untuk teks), Bawah gelap (untuk transisi ke konten) */}
             <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
             <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent" />
          </div>

          {/* Text Content */}
          <div className="absolute inset-0 flex items-center px-8 sm:px-16">
            <div className="max-w-2xl space-y-6 pt-20">
              {/* Logo / Title */}
              <h1 className="font-oswald text-6xl font-black uppercase italic tracking-tighter text-white sm:text-7xl md:text-8xl drop-shadow-2xl">
                {slide.logo}
              </h1>

              {/* Meta Data */}
              <div className="flex items-center gap-3 text-sm font-medium text-gray-300">
                <span className="text-green-400 font-bold">98% Match</span>
                <span>{slide.year}</span>
                <Badge variant="outline" className="border-gray-500 text-gray-300">2 Seasons</Badge>
                <Badge className="bg-red-600 hover:bg-red-700 text-white border-none">HD</Badge>
              </div>

              <p className="line-clamp-3 text-lg text-gray-200 drop-shadow-md font-sans">
                {slide.desc}
              </p>

              {/* Action Buttons */}
              <div className="flex items-center gap-4 pt-2">
                <Button className="h-12 gap-2 rounded bg-white px-8 text-lg font-bold text-black hover:bg-gray-200">
                  <Play className="fill-black" size={24} /> Play
                </Button>
                <Button className="h-12 gap-2 rounded bg-gray-500/40 px-8 text-lg font-bold text-white backdrop-blur-sm hover:bg-gray-500/60">
                  <Info size={24} /> More Info
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Indicators (Dots) sebelah kanan */}
      <div className="absolute right-8 top-1/2 z-20 flex -translate-y-1/2 flex-col gap-4">
        {heroSlides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => slideTo(idx)}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              idx === current ? "bg-white scale-125" : "bg-white/30 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  )
}

const MovieRow = ({ title, items }: { title: string, items: any[] }) => {
  return (
    <div className="space-y-2 py-6 px-8 sm:px-16">
      <h2 className="group flex items-center gap-2 text-xl font-bold text-white transition-colors hover:text-red-500 cursor-pointer font-oswald tracking-wide">
        {title}
        <ChevronRight className="opacity-0 transition-opacity group-hover:opacity-100 text-red-500" size={20} />
      </h2>
      
      {/* Horizontal Scroll Container */}
      <div className="group relative">
        <div className="flex gap-4 overflow-x-auto pb-4 pt-2 scrollbar-hide snap-x">
          {items.map((item) => (
            <div 
              key={item.id} 
              className="relative h-[160px] w-[280px] flex-none snap-start cursor-pointer transition-all duration-300 hover:scale-105 hover:z-10"
            >
              <div className="h-full w-full overflow-hidden rounded-md bg-zinc-800">
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-full w-full object-cover opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
              {/* Overlay on Hover */}
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black via-transparent to-transparent p-4 opacity-0 transition-opacity hover:opacity-100">
                <h3 className="font-oswald text-lg font-bold uppercase">{item.title}</h3>
                <div className="flex items-center gap-2 mt-1">
                   <div className="rounded-full bg-white p-1 text-black">
                     <Play size={10} fill="currentColor" />
                   </div>
                   <div className="rounded-full border border-gray-400 p-1">
                     <Plus size={10} />
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#141414] font-sans pb-20">
      <Navbar /> {/* Pastikan Navbar Anda support background transparan atau dark */}
      
      <HeroCarousel />
      
      <div className="-mt-32 relative z-10 space-y-4">
        {categories.map((cat, index) => (
          <MovieRow key={index} title={cat.title} items={cat.items} />
        ))}
      </div>
    </div>
  )
}