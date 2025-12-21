"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, Search, ChevronDown, MessageCircle } from "lucide-react";
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
  { name: "Chouseishin", href: "/genre/chouseishin" }, // Tambahkan ini
  { name: "Godzilla", href: "/genre/godzilla" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/90 backdrop-blur-md border-b border-white/10 py-3 shadow-md"
          : "bg-gradient-to-b from-black/80 to-transparent py-6"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-1 group relative z-50">
          <span className="font-oswald text-3xl font-bold italic tracking-tighter text-white group-hover:text-primary transition-colors drop-shadow-md">
            TOKU<span className="text-primary">SATSU</span>
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-8">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 font-oswald text-sm uppercase tracking-widest text-gray-300 hover:text-white transition-colors outline-none focus:text-white">
              Genres <ChevronDown size={14} />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-zinc-950/95 border-white/10 text-gray-300 backdrop-blur-xl mt-2 p-2 rounded-lg shadow-2xl w-48">
              {genres.map((genre) => (
                <DropdownMenuItem
                  key={genre.name}
                  asChild
                  className="focus:bg-primary/20 focus:text-white cursor-pointer hover:bg-white/5 rounded-md px-3 py-2 transition-colors"
                >
                  <Link href={genre.href} className="font-oswald uppercase tracking-wider text-sm">
                    {genre.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Link
            href="/characters"
            className="font-oswald text-sm uppercase tracking-widest text-gray-300 hover:text-white transition-colors drop-shadow-sm"
          >
            Characters
          </Link>
          <Link
            href="/movies"
            className="font-oswald text-sm uppercase tracking-widest text-gray-300 hover:text-white transition-colors drop-shadow-sm"
          >
            Movies
          </Link>
        </div>

        {/* ACTION BUTTONS */}
        <div className="flex items-center gap-4">
          <button className="text-gray-300 hover:text-primary transition-colors p-2 hover:bg-white/5 rounded-full">
            <Search size={20} />
          </button>

          <Link
            href="https://discord.gg/v5XU8bdYbN"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="hidden md:flex bg-[#5865F2] hover:bg-[#4752C4] text-white rounded-none px-6 font-bold uppercase tracking-wider clip-angle border-none transition-all hover:scale-105 shadow-md shadow-[#5865F2]/20">
              <MessageCircle className="mr-2" size={18} /> Join Discord
            </Button>
          </Link>

          <button className="md:hidden text-white p-2">
            <Menu />
          </button>
        </div>
      </div>
    </nav>
  );
}