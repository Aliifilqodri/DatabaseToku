"use client";

import { useState, use, useMemo } from "react";
import { Navbar } from "@/components/navbar";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  Eye,
  Star,
  Calendar,
  Filter,
  AlertTriangle,
  ChevronRight,
  Database,
  X,
} from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

const genreDatabase: Record<
  string,
  { title: string; desc: string; banner: string; color: string }
> = {
  "kamen-rider": {
    title: "Kamen Rider Universe",
    desc: "The cyborg heroes who fight against evil organizations to protect humanity's freedom. From the solitary battles of the Showa era to the multi-rider wars of Reiwa.",
    banner: "/kr/Kamen-Rider-0.jpg",
    color: "from-green-600/20",
  },
  "super-sentai": {
    title: "Super Sentai Series",
    desc: "Multicolored teams of heroes who use teamwork, heavy weaponry, and giant mecha to battle interdimensional threats.",
    banner: "/sentai/introduction-to-tokusatsu-super-sentai.jpg",
    color: "from-red-600/20",
  },
  ultraman: {
    title: "Ultraman Multiverse",
    desc: "Giants of Light from Nebula M78 and beyond who merge with humans to defend Earth from Kaiju and alien invaders.",
    banner: "/ultra/ultraman-netflix-1.jpg",
    color: "from-blue-600/20",
  },
  "metal-heroes": {
    title: "Metal Heroes",
    desc: "Space Sheriffs and cyborg police officers clad in metallic combat suits fighting criminal syndicates.",
    banner: "/mh/Gokai.webp",
    color: "from-zinc-600/20",
  },
  chouseishin: {
    title: "Chouseishin Series",
    desc: "The Star God Series produced by Toho. Warriors awakened by the zodiac constellations defend Earth from alien invaders.",
    banner: "/chou/Bdjyjq_3f.jpg",
    color: "from-purple-600/20",
  },
  godzilla: {
    title: "Godzilla & Kaiju",
    desc: "The King of the Monsters and the titans that ruled the earth before humanity.",
    banner: "/gz/godzilla-vs-kong-d35bic6awbsf6bt2.jpg",
    color: "from-orange-600/20",
  },
};

const allSeries = [
  {
    id: "geats",
    title: "Kamen Rider Geats",
    genre: "kamen-rider",
    year: "2022",
    era: "Reiwa",
    img: "/kr/kamen-rider-geats-updated-poster-with-all-riders-revealed-v0-y8sp6kg027g91.webp",
    rating: 4.9,
  },
  {
    id: "zero-one",
    title: "Kamen Rider Zero-One",
    genre: "kamen-rider",
    year: "2019",
    era: "Reiwa",
    img: "/kr/OIP.webp",
    rating: 4.8,
  },
  {
    id: "build",
    title: "Kamen Rider Build",
    genre: "kamen-rider",
    year: "2017",
    era: "Heisei",
    img: "/kr/456d61_ed354e3abfd74719a2b66f766f3ae3fe~mv2.jpg",
    rating: 4.9,
  },
  {
    id: "w",
    title: "Kamen Rider W",
    genre: "kamen-rider",
    year: "2009",
    era: "Heisei",
    img: "/kr/OIP (1).webp",
    rating: 5.0,
  },
  {
    id: "king-ohger",
    title: "Ohsama Sentai King-Ohger",
    genre: "super-sentai",
    year: "2023",
    era: "Reiwa",
    img: "/sntai/static-assets-upload299570442303396886.webp",
    rating: 4.9,
  },
  {
    id: "donbrothers",
    title: "Avataro Sentai Donbrothers",
    genre: "super-sentai",
    year: "2022",
    era: "Reiwa",
    img: "/sntai/urFjNoGZwSfkVWZZUIWMoGZNYAV.webp",
    rating: 4.7,
  },
  {
    id: "gokaiger",
    title: "Kaizoku Sentai Gokaiger",
    genre: "super-sentai",
    year: "2011",
    era: "Heisei",
    img: "/sntai/OIP.webp",
    rating: 5.0,
  },
  {
    id: "blazar",
    title: "Ultraman Blazar",
    genre: "ultraman",
    year: "2023",
    era: "Reiwa",
    img: "/ultra/OIP (2).webp",
    rating: 4.8,
  },
  {
    id: "decker",
    title: "Ultraman Decker",
    genre: "ultraman",
    year: "2022",
    era: "Reiwa",
    img: "/ultra/ultraman_decker_global_poster_by_dhiotito_df2y5he-fullview.jpg",
    rating: 4.6,
  },
  {
    id: "tiga",
    title: "Ultraman Tiga",
    genre: "ultraman",
    year: "1996",
    era: "Heisei",
    img: "/ultra/ioKlOmo7OEd46KU4SXNaMXv0Mlh.webp",
    rating: 5.0,
  },
  {
    id: "gransazer",
    title: "Chouseishin Gransazer",
    genre: "chouseishin",
    year: "2003",
    era: "Heisei",
    img: "/chou/actor-chouseishin-gransazer-958105_large.jpg",
    rating: 4.8,
  },
  {
    id: "justirisers",
    title: "Genseishin Justirisers",
    genre: "chouseishin",
    year: "2004",
    era: "Heisei",
    img: "/chou/abRBwf.jpg",
    rating: 4.7,
  },
  {
    id: "sazer-x",
    title: "Chousei Kantai Sazer-X",
    genre: "chouseishin",
    year: "2005",
    era: "Heisei",
    img: "/chou/OIP.webp",
    rating: 4.9,
  },
];

export default function GenrePage({
  params,
}: {
  params: Promise<{ genre: string }>;
}) {
  const { genre } = use(params);
  const [alertOpen, setAlertOpen] = useState(false);
  const [activeEra, setActiveEra] = useState("All");

  const genreInfo = genreDatabase[genre] || {
    title: genre.replace(/-/g, " ").toUpperCase(),
    desc: "Browse the complete archive of this legendary Tokusatsu category.",
    banner: "/placeholder.svg",
    color: "from-primary/20",
  };

  const filteredSeries = useMemo(() => {
    return allSeries.filter((s) => {
      const matchesGenre = s.genre === genre;
      const matchesEra = activeEra === "All" || s.era === activeEra;
      return matchesGenre && matchesEra;
    });
  }, [genre, activeEra]);

  const handleCardClick = (e: React.MouseEvent, seriesId: string) => {
    if (seriesId !== "gokaiger") {
      e.preventDefault();
      setAlertOpen(true);
    }
  };

  const eras = ["All", "Reiwa", "Heisei", "Showa"];

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-primary selection:text-white relative">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
      <Navbar />

      <div className="relative h-[60vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={genreInfo.banner}
            alt={genreInfo.title}
            className="h-full w-full object-cover scale-105 animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
          <div
            className={`absolute inset-0 bg-gradient-to-r ${genreInfo.color} to-transparent opacity-60`}
          />
        </div>

        <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-12 lg:p-24">
          <div className="max-w-5xl space-y-6">
            <div className="flex items-center gap-3 animate-in slide-in-from-left-10 duration-700">
              <div className="h-px w-12 bg-primary" />
              <span className="font-mono text-xs sm:text-sm tracking-[0.5em] uppercase text-primary font-bold">
                Archives_Locked
              </span>
            </div>
            <h1 className="font-oswald text-5xl sm:text-7xl md:text-9xl font-black uppercase italic tracking-tighter text-white drop-shadow-2xl leading-[0.85] animate-in slide-in-from-bottom-10 duration-1000">
              {genreInfo.title}
            </h1>
            <p className="text-sm sm:text-lg md:text-xl text-zinc-300 max-w-2xl font-sans leading-relaxed border-l-2 border-primary/50 pl-6 animate-in fade-in duration-1000 delay-300">
              {genreInfo.desc}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-12 py-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16 p-8 bg-white/[0.02] border border-white/5 rounded-2xl backdrop-blur-md">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-zinc-500 font-mono text-[10px] uppercase tracking-widest">
              <Filter size={12} /> Temporal_Filtering
            </div>
            <div className="flex flex-wrap items-center gap-3">
              {eras.map((era) => {
                const isActive = activeEra === era;
                return (
                  <button
                    key={era}
                    onClick={() => setActiveEra(era)}
                    className={`relative px-8 py-2 text-xs font-black uppercase tracking-[0.2em] transition-all duration-500 group/btn ${
                      isActive
                        ? "bg-primary text-white border-primary shadow-[0_0_25px_rgba(255,255,255,0.3)] scale-105 z-10"
                        : "bg-transparent border-white/10 text-zinc-500 hover:text-white hover:border-white/40"
                    } border`}
                  >
                    {isActive && (
                      <>
                        <div className="absolute -top-[1px] -left-[1px] w-2 h-2 border-t-2 border-l-2 border-white" />
                        <div className="absolute -bottom-[1px] -right-[1px] w-2 h-2 border-b-2 border-r-2 border-white" />
                      </>
                    )}
                    <span className="relative z-10">{era}</span>
                    <div
                      className={`absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-0 ${
                        isActive ? "opacity-20" : "group-hover/btn:opacity-10"
                      } transition-opacity`}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col items-end gap-2">
            <div className="flex items-center gap-4 text-zinc-500 font-mono text-xs uppercase">
              <span className="flex items-center gap-2">
                <Database size={14} /> Records: {filteredSeries.length}
              </span>
              <span className="w-1 h-1 bg-zinc-800 rounded-full" />
              <span>Status: Active</span>
            </div>
            <div className="h-1 w-32 bg-zinc-900 rounded-full overflow-hidden">
              <div className="h-full bg-primary w-2/3 animate-pulse" />
            </div>
          </div>
        </div>

        {filteredSeries.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {filteredSeries.map((series, index) => (
              <Link
                href={`/series/${series.id}`}
                key={series.id}
                onClick={(e) => handleCardClick(e, series.id)}
                className="group relative block transition-all duration-500"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="relative aspect-[2/3] overflow-hidden bg-zinc-950 border border-white/5 shadow-2xl transition-all duration-500 group-hover:border-primary/50 group-hover:shadow-primary/10">
                  <img
                    src={series.img}
                    alt={series.title}
                    className="h-full w-full object-cover transition-all duration-700 grayscale-[0.5] group-hover:grayscale-0 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                  <div className="absolute inset-0 flex items-center justify-center bg-primary/10 opacity-0 group-hover:opacity-100 backdrop-blur-[2px] transition-all">
                    <div className="p-4 bg-white text-black rounded-full scale-50 group-hover:scale-100 transition-transform duration-500">
                      <Eye size={24} strokeWidth={3} />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 flex flex-col items-end gap-2">
                    <div className="bg-black/80 backdrop-blur-xl border border-white/10 px-3 py-1 text-[10px] font-black text-yellow-500 flex items-center gap-1.5 shadow-xl">
                      <Star size={10} fill="currentColor" /> {series.rating}
                    </div>
                    <Badge className="bg-primary hover:bg-primary border-none rounded-none px-2 py-1 text-[8px] font-black text-white uppercase tracking-tighter shadow-lg">
                      {series.era}
                    </Badge>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="h-[2px] w-0 bg-primary mb-4 group-hover:w-full transition-all duration-700" />
                    <h3 className="font-oswald font-black text-xl uppercase italic leading-none text-white group-hover:text-primary transition-colors mb-2">
                      {series.title}
                    </h3>
                    <div className="flex items-center gap-2 text-[10px] text-zinc-400 font-mono tracking-widest">
                      <Calendar size={12} className="text-primary" />{" "}
                      {series.year}
                      <ChevronRight
                        size={12}
                        className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-32 text-center bg-white/[0.01] border border-dashed border-white/10 rounded-3xl">
            <div className="relative mb-6">
              <Filter className="text-zinc-800 h-20 w-20" />
              <AlertTriangle className="absolute -bottom-2 -right-2 text-primary h-8 w-8 animate-bounce" />
            </div>
            <h3 className="text-3xl font-oswald font-bold text-zinc-400 uppercase tracking-tighter">
              Out of Temporal Range
            </h3>
            <p className="text-zinc-600 font-mono text-sm uppercase mt-2 tracking-widest">
              No series detected in the {activeEra} era.
            </p>
          </div>
        )}
      </div>

      <AlertDialog open={alertOpen} onOpenChange={setAlertOpen}>
        <AlertDialogContent className="bg-zinc-950 border border-white/10 text-white p-0 rounded-none max-w-[95vw] sm:max-w-[500px] overflow-hidden">
          <button
            onClick={() => setAlertOpen(false)}
            className="absolute top-4 right-4 z-50 p-2 bg-white/5 hover:bg-primary hover:text-black transition-all text-zinc-400 rounded-none"
          >
            <X size={20} />
          </button>

          <div className="p-8">
            <AlertDialogHeader>
              <AlertDialogTitle className="font-oswald text-3xl uppercase italic flex items-center gap-4 text-primary">
                <AlertTriangle className="h-10 w-10 animate-pulse" />{" "}
                SYSTEM_OFFLINE
              </AlertDialogTitle>
              <AlertDialogDescription className="text-zinc-400 font-sans leading-relaxed text-lg pt-4 border-t border-white/5">
                Access to this data core is restricted. Our pirate crew is
                currently decrypting archives.
                <br />
                <br />
                <span className="text-white font-mono text-sm underline tracking-tighter">
                  Currently Available: [Kaizoku Sentai Gokaiger]
                </span>
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter className="mt-8 flex flex-col sm:flex-row gap-3">
              <AlertDialogCancel className="bg-transparent border border-white/10 hover:bg-white/5 text-white font-black uppercase tracking-widest rounded-none h-14 transition-all m-0 sm:flex-1">
                CLOSE
              </AlertDialogCancel>
              <AlertDialogAction className="bg-primary hover:bg-white text-black font-black uppercase tracking-widest rounded-none h-14 transition-all m-0 sm:flex-1">
                RETURN TO DECK
              </AlertDialogAction>
            </AlertDialogFooter>
          </div>
        </AlertDialogContent>
      </AlertDialog>

      <style jsx global>{`
        @keyframes slow-zoom {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.1);
          }
        }
        .animate-slow-zoom {
          animation: slow-zoom 20s infinite alternate ease-in-out;
        }
      `}</style>
    </div>
  );
}
