"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  Search,
  ChevronDown,
  MessageCircle,
  X,
  Shield,
  Film,
  Users,
  Zap,
  Compass,
  Heart,
  Command,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const genres = [
  {
    name: "Super Sentai",
    href: "/genre/super-sentai",
    icon: <Shield size={18} />,
  },
  { name: "Kamen Rider", href: "/genre/kamen-rider", icon: <Zap size={18} /> },
  { name: "Ultraman", href: "/genre/ultraman", icon: <Zap size={18} /> },
  {
    name: "Metal Heroes",
    href: "/genre/metal-heroes",
    icon: <Shield size={18} />,
  },
  {
    name: "Chouseishin",
    href: "/genre/chouseishin",
    icon: <Compass size={18} />,
  },
  { name: "Godzilla", href: "/genre/godzilla", icon: <Film size={18} /> },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const pathname = usePathname();

  // Handle Scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsSearchOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  // Handle Search Execution
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Logic search anda (contoh: push ke router)
      console.log("Searching for:", searchQuery);
      setIsSearchOpen(false);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          isScrolled
            ? "bg-[#050505]/90 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl"
            : "bg-transparent py-5 md:py-8"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
          {/* LOGO */}
          <Link href="/" className="relative z-[110] flex items-center group">
            <span className="font-oswald text-2xl md:text-3xl font-black italic tracking-tighter text-white">
              TOKU
              <span className="text-primary group-hover:text-white transition-colors duration-300">
                SATSU
              </span>
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center gap-8">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1.5 font-oswald text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 hover:text-white transition-all outline-none group">
                Database
                <ChevronDown
                  size={14}
                  className="group-data-[state=open]:rotate-180 transition-transform duration-300 text-primary"
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-[#0a0a0a]/95 border border-white/10 text-zinc-300 backdrop-blur-2xl mt-4 p-2 rounded-xl w-64 animate-in fade-in zoom-in-95">
                {genres.map((genre) => (
                  <DropdownMenuItem
                    key={genre.name}
                    asChild
                    className="focus:bg-primary focus:text-white cursor-pointer rounded-lg px-4 py-3 transition-all mb-1"
                  >
                    <Link
                      href={genre.href}
                      className="flex items-center gap-3 w-full font-oswald uppercase tracking-wider text-sm"
                    >
                      <span className="text-primary group-focus:text-white transition-colors">
                        {genre.icon}
                      </span>
                      {genre.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              href="/characters"
              className={`font-oswald text-xs font-bold uppercase tracking-[0.2em] transition-all ${
                pathname === "/characters"
                  ? "text-primary"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Characters
            </Link>
            <Link
              href="/movies"
              className={`font-oswald text-xs font-bold uppercase tracking-[0.2em] transition-all ${
                pathname === "/movies"
                  ? "text-primary"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Archives
            </Link>
          </div>

          {/* ACTIONS */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* Search Toggle */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="text-white/70 hover:text-primary transition-all p-2.5 bg-white/5 hover:bg-white/10 rounded-full border border-white/10 group active:scale-95"
            >
              <Search
                size={20}
                className="group-hover:scale-110 transition-transform"
              />
            </button>

            <Link
              href="https://discord.gg/v5XU8bdYbN"
              target="_blank"
              className="hidden sm:block"
            >
              <Button className="bg-[#5865F2] hover:bg-[#4752C4] text-white rounded-none px-6 h-11 font-oswald font-bold uppercase tracking-widest clip-angle shadow-lg shadow-[#5865F2]/20 group">
                <MessageCircle
                  size={18}
                  className="mr-2 group-hover:rotate-12 transition-transform"
                />
                Community
              </Button>
            </Link>

            <button
              className="lg:hidden relative z-[110] flex items-center justify-center w-11 h-11 bg-primary text-black rounded-full shadow-lg shadow-primary/20 active:scale-90 transition-transform"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </nav>

      {/* --- SEARCH OVERLAY --- */}
      <div
        className={`fixed inset-0 z-[1000] bg-[#050505]/95 backdrop-blur-2xl transition-all duration-500 flex items-start justify-center pt-[10vh] px-6 ${
          isSearchOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <button
          onClick={() => setIsSearchOpen(false)}
          className="absolute top-8 right-8 text-zinc-500 hover:text-white transition-colors"
        >
          <X size={32} />
        </button>

        <div className="w-full max-w-3xl animate-in fade-in slide-in-from-top-10 duration-500">
          <form onSubmit={handleSearch} className="relative">
            <Search
              className="absolute left-6 top-1/2 -translate-y-1/2 text-primary"
              size={24}
            />
            <input
              type="text"
              placeholder="SEARCH THE MULTIVERSE..."
              className="w-full h-20 bg-white/5 border-b-2 border-primary/50 text-white px-16 text-2xl font-oswald uppercase tracking-widest focus:outline-none focus:border-primary transition-all"
              autoFocus={isSearchOpen}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="mt-4 flex items-center gap-2 text-zinc-500 font-mono text-xs">
              <Command size={14} /> PRESS ENTER TO DEPLOY SEARCH
            </div>
          </form>
        </div>
      </div>

      {/* --- MOBILE FULLSCREEN OVERLAY --- */}
      <div
        className={`fixed inset-0 z-[999] bg-[#050505] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden ${
          isMobileMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="absolute top-[-10%] right-[-10%] w-[400px] h-[400px] bg-primary/20 blur-[120px] rounded-full animate-pulse" />

        <div className="flex items-center justify-between px-8 py-6 border-b border-white/5 relative z-10">
          <span className="font-oswald text-2xl font-black italic tracking-tighter text-white">
            TOKU<span className="text-primary">MENU</span>
          </span>
          <button
            className="w-12 h-12 flex items-center justify-center bg-white/5 rounded-full text-white border border-white/10 active:rotate-90 transition-transform duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex flex-col h-full overflow-y-auto px-8 pt-10 pb-40 relative z-10">
          <div className="space-y-12">
            <div className="flex flex-col gap-6">
              <p className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-500">
                Navigation
              </p>
              <div className="grid gap-4">
                <Link
                  href="/characters"
                  className="group flex items-center gap-6"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-all group-active:scale-90">
                    <Users size={24} />
                  </div>
                  <span className="text-4xl font-oswald font-black uppercase italic text-white group-hover:text-primary transition-colors">
                    Characters
                  </span>
                </Link>
                <Link
                  href="/movies"
                  className="group flex items-center gap-6"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-all group-active:scale-90">
                    <Film size={24} />
                  </div>
                  <span className="text-4xl font-oswald font-black uppercase italic text-white group-hover:text-primary transition-colors">
                    Archives
                  </span>
                </Link>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-500">
                Categories
              </p>
              <div className="grid grid-cols-2 gap-3">
                {genres.map((genre, idx) => (
                  <Link
                    key={genre.name}
                    href={genre.href}
                    className={`flex flex-col gap-3 p-6 bg-white/[0.03] border border-white/5 rounded-2xl active:bg-primary active:text-black transition-all ${
                      isMobileMenuOpen
                        ? "translate-y-0 opacity-100"
                        : "translate-y-4 opacity-0"
                    }`}
                    style={{ transitionDelay: `${idx * 50 + 200}ms` }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className="text-primary group-active:text-black">
                      {genre.icon}
                    </span>
                    <span className="font-oswald text-xs font-bold uppercase tracking-widest">
                      {genre.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-auto pt-10">
            <Link href="https://discord.gg/v5XU8bdYbN" target="_blank">
              <Button className="w-full bg-[#5865F2] h-16 rounded-2xl text-white font-oswald font-bold uppercase tracking-[0.2em] text-lg shadow-2xl shadow-[#5865F2]/20">
                <MessageCircle className="mr-3" /> Join Community
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
