"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, Search, ChevronDown, MessageCircle, X } from "lucide-react"; // Tambah icon X
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const genres = [
  { name: "Super Sentai", href: "/genre/super-sentai" },
  { name: "Kamen Rider", href: "/genre/kamen-rider" },
  { name: "Ultraman", href: "/genre/ultraman" },
  { name: "Metal Heroes", href: "/genre/metal-heroes" },
  { name: "Chouseishin", href: "/genre/chouseishin" },
  { name: "Godzilla", href: "/genre/godzilla" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State untuk menu HP

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled || isMobileMenuOpen
          ? "bg-[#050505]/95 backdrop-blur-xl border-b border-white/5 py-3 shadow-2xl shadow-black/50"
          : "bg-gradient-to-b from-black/90 via-black/50 to-transparent py-4 md:py-6"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-1 group relative z-50" onClick={() => setIsMobileMenuOpen(false)}>
          <span className="font-oswald text-2xl md:text-3xl font-bold italic tracking-tighter text-white group-hover:text-primary transition-colors duration-300 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
            TOKU<span className="text-primary group-hover:text-white transition-colors duration-300">SATSU</span>
          </span>
        </Link>

        {/* DESKTOP NAV (Hidden di HP) */}
        <div className="hidden md:flex items-center gap-10">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1.5 font-oswald text-sm font-bold uppercase tracking-widest text-gray-300 hover:text-white transition-all duration-300 outline-none group">
              Genres 
              <ChevronDown size={14} className="group-data-[state=open]:rotate-180 transition-transform duration-300 text-primary" />
            </DropdownMenuTrigger>
            
            <DropdownMenuContent className="bg-[#0a0a0a]/95 border border-white/10 text-gray-300 backdrop-blur-2xl mt-4 p-2 rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.8)] w-56 animate-in fade-in zoom-in-95 duration-200">
              {genres.map((genre) => (
                <DropdownMenuItem
                  key={genre.name}
                  asChild
                  className="focus:bg-white/10 focus:text-white cursor-pointer hover:bg-white/5 rounded-lg px-4 py-2.5 transition-colors group"
                >
                  <Link href={genre.href} className="flex items-center justify-between w-full font-oswald uppercase tracking-wider text-sm">
                    {genre.name}
                    <span className="w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="/characters" className="font-oswald text-sm font-bold uppercase tracking-widest text-gray-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all duration-300">
            Characters
          </Link>
          <Link href="/movies" className="font-oswald text-sm font-bold uppercase tracking-widest text-gray-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all duration-300">
            Movies
          </Link>
        </div>

        {/* ACTION BUTTONS & MOBILE TOGGLE */}
        <div className="flex items-center gap-3 md:gap-5">
          <button className="text-gray-400 hover:text-primary transition-colors p-2 hover:bg-white/5 rounded-full duration-300">
            <Search size={20} />
          </button>

          <Link href="https://discord.gg/v5XU8bdYbN" target="_blank" rel="noopener noreferrer">
            <Button className="hidden md:flex bg-[#5865F2] hover:bg-[#4752C4] hover:shadow-[0_0_20px_rgba(88,101,242,0.6)] text-white rounded-sm px-6 h-10 font-bold uppercase tracking-wider clip-angle border-none transition-all duration-300 hover:scale-105 active:scale-95">
              <MessageCircle className="mr-2" size={18} /> Join Discord
            </Button>
          </Link>

          {/* TOMBOL BURGER UNTUK HP */}
          <button 
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-md transition-colors z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* --- MOBILE MENU OVERLAY --- */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#050505] border-b border-white/10 shadow-2xl animate-in slide-in-from-top-5 fade-in duration-200">
          <div className="flex flex-col p-6 gap-6 h-screen overflow-y-auto pb-32">
            
            {/* Mobile Genre List */}
            <div className="space-y-4">
              <h3 className="text-primary font-oswald text-xs uppercase tracking-widest mb-2">Select Genre</h3>
              <div className="grid grid-cols-2 gap-2">
                {genres.map((genre) => (
                  <Link 
                    key={genre.name} 
                    href={genre.href} 
                    className="p-3 bg-white/5 rounded-lg text-sm text-gray-300 hover:bg-white/10 hover:text-white transition-colors border border-white/5"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {genre.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="h-[1px] bg-white/10 w-full" />

            {/* Mobile Main Links */}
            <div className="flex flex-col gap-4">
               <Link href="/characters" className="text-xl font-oswald uppercase text-white hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>
                 Characters Database
               </Link>
               <Link href="/movies" className="text-xl font-oswald uppercase text-white hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>
                 Movie Archives
               </Link>
            </div>

            <div className="h-[1px] bg-white/10 w-full" />

            <Link href="https://discord.gg/v5XU8bdYbN" target="_blank" className="w-full">
              <Button className="w-full bg-[#5865F2] h-12 text-white font-bold uppercase tracking-wider">
                <MessageCircle className="mr-2" size={18} /> Join Community
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}