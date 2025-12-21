"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, Search, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const genres = [
  { name: "Super Sentai", href: "/genre/super-sentai" },
  { name: "Kamen Rider", href: "/genre/kamen-rider" },
  { name: "Ultraman", href: "/genre/ultraman" },
  { name: "Metal Heroes", href: "/genre/metal-heroes" },
  { name: "Godzilla", href: "/genre/godzilla" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-md border-b border-white/10 py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-1 group">
          <span className="font-oswald text-3xl font-bold italic tracking-tighter text-white group-hover:text-primary transition-colors">
            TOKU<span className="text-primary">SATSU</span>
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-8">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 font-oswald text-sm uppercase tracking-widest text-gray-300 hover:text-white transition-colors outline-none">
              Genres <ChevronDown size={14} />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-black/90 border-white/10 text-gray-300 backdrop-blur-xl mt-2">
              {genres.map((genre) => (
                <DropdownMenuItem key={genre.name} asChild className="focus:bg-primary/20 focus:text-primary cursor-pointer hover:bg-white/5">
                  <Link href={genre.href}>{genre.name}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="/characters" className="font-oswald text-sm uppercase tracking-widest text-gray-300 hover:text-white transition-colors">
            Characters
          </Link>
          <Link href="/movies" className="font-oswald text-sm uppercase tracking-widest text-gray-300 hover:text-white transition-colors">
            Movies
          </Link>
        </div>

        {/* ACTION BUTTONS */}
        <div className="flex items-center gap-4">
          <button className="text-gray-300 hover:text-primary transition-colors">
            <Search size={20} />
          </button>
          <Button className="hidden md:flex bg-primary hover:bg-primary/80 text-white rounded-none px-6 font-bold uppercase tracking-wider clip-angle border-none">
            Subscribe
          </Button>
          <button className="md:hidden text-white">
            <Menu />
          </button>
        </div>
      </div>
    </nav>
  )
}