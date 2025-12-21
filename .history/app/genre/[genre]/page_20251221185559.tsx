"use client";

import { useState, use } from "react";
import { Navbar } from "@/components/navbar";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  Eye,
  Star,
  Calendar,
  Filter,
  AlertTriangle,
} from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
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
    color: "text-green-500",
  },
  "super-sentai": {
    title: "Super Sentai Series",
    desc: "Multicolored teams of heroes who use teamwork, heavy weaponry, and giant mecha to battle interdimensional threats.",
    banner: "/sentai/introduction-to-tokusatsu-super-sentai.jpg",
    color: "text-red-500",
  },
  ultraman: {
    title: "Ultraman Multiverse",
    desc: "Giants of Light from Nebula M78 and beyond who merge with humans to defend Earth from Kaiju and alien invaders.",
    banner: "/ultra/ultraman-netflix-1.jpg",
    color: "text-blue-500",
  },
  "metal-heroes": {
    title: "Metal Heroes",
    desc: "Space Sheriffs and cyborg police officers clad in metallic combat suits fighting criminal syndicates.",
    banner: "/placeholder.svg",
    color: "text-gray-400",
  },
  godzilla: {
    title: "Godzilla & Kaiju",
    desc: "The King of the Monsters and the titans that ruled the earth before humanity.",
    banner: "/placeholder.svg",
    color: "text-orange-500",
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
];

export default function GenrePage({
  params,
}: {
  params: Promise<{ genre: string }>;
}) {
  const { genre } = use(params);
  const [alertOpen, setAlertOpen] = useState(false);

  const genreInfo = genreDatabase[genre] || {
    title: genre.replace(/-/g, " ").toUpperCase(),
    desc: "Browse the complete archive of this legendary Tokusatsu category.",
    banner: "/placeholder.svg",
    color: "text-white",
  };

  const filteredSeries = allSeries.filter((s) => s.genre === genre);

  const handleCardClick = (e: React.MouseEvent, seriesId: string) => {
    if (seriesId !== "gokaiger") {
      e.preventDefault();
      setAlertOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-primary selection:text-white">
      <Navbar />

      <div className="relative h-[50vh] w-full overflow-hidden">
        <div className="absolute inset-0 animate-in fade-in zoom-in duration-1000">
          <img
            src={genreInfo.banner}
            alt={genreInfo.title}
            className="h-full w-full object-cover brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent" />
        </div>

        <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-12 lg:p-20">
          <div className="animate-in slide-in-from-bottom-10 fade-in duration-700 delay-100 max-w-4xl">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-4 transition-colors text-sm font-medium"
            >
              <ArrowLeft size={16} /> Back to Dashboard
            </Link>
            <h1 className="font-oswald text-6xl md:text-8xl font-black uppercase italic tracking-tighter text-white drop-shadow-lg leading-none mb-4">
              {genreInfo.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl font-sans leading-relaxed border-l-4 border-primary pl-6">
              {genreInfo.desc}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 py-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 animate-in fade-in slide-in-from-bottom-5 duration-700 delay-300">
          <div className="flex items-center gap-2">
            <Badge
              variant="outline"
              className="text-white border-white/20 bg-white/5 px-4 py-2 text-sm uppercase cursor-pointer hover:bg-primary hover:border-primary transition-colors"
            >
              All Eras
            </Badge>
            <Badge
              variant="outline"
              className="text-gray-400 border-white/10 px-4 py-2 text-sm uppercase cursor-pointer hover:text-white hover:border-white/30 transition-colors"
            >
              Reiwa
            </Badge>
            <Badge
              variant="outline"
              className="text-gray-400 border-white/10 px-4 py-2 text-sm uppercase cursor-pointer hover:text-white hover:border-white/30 transition-colors"
            >
              Heisei
            </Badge>
            <Badge
              variant="outline"
              className="text-gray-400 border-white/10 px-4 py-2 text-sm uppercase cursor-pointer hover:text-white hover:border-white/30 transition-colors"
            >
              Showa
            </Badge>
          </div>

          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Showing {filteredSeries.length} Series</span>
            <Filter size={16} />
          </div>
        </div>

        {filteredSeries.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {filteredSeries.map((series, index) => (
              <Link
                key={series.id}
                href={`/series/${series.id}`}
                onClick={(e) => handleCardClick(e, series.id)}
                className="group relative block animate-in fade-in zoom-in duration-500 fill-mode-backwards"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-[2/3] overflow-hidden rounded-lg bg-zinc-900 border border-white/5 shadow-lg transition-all duration-300 group-hover:shadow-primary/20 group-hover:border-primary/50 group-hover:-translate-y-2">
                  <img
                    src={series.img}
                    alt={series.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100">
                    <Eye className="h-12 w-12 text-white drop-shadow-lg scale-50 transition-transform duration-300 group-hover:scale-100" />
                  </div>
                  <div className="absolute top-2 right-2 bg-black/80 backdrop-blur-md px-2 py-1 rounded text-xs font-bold text-yellow-400 flex items-center gap-1">
                    <Star size={10} fill="currentColor" /> {series.rating}
                  </div>
                  <div className="absolute top-2 left-2 bg-primary/90 px-2 py-1 rounded text-[10px] font-bold text-white uppercase tracking-wider shadow-lg">
                    {series.era}
                  </div>
                </div>
                <div className="mt-3 space-y-1">
                  <h3 className="font-oswald font-bold text-lg leading-tight text-white group-hover:text-primary transition-colors truncate">
                    {series.title}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-gray-400 font-mono">
                    <Calendar size={12} /> {series.year}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center animate-in fade-in slide-in-from-bottom-5">
            <div className="h-24 w-24 rounded-full bg-zinc-900 flex items-center justify-center mb-4">
              <Filter className="text-gray-600 h-10 w-10" />
            </div>
            <h3 className="text-2xl font-oswald font-bold text-gray-300 mb-2">
              No Series Found
            </h3>
            <p className="text-gray-500">
              We couldn't find any series for this category yet.
            </p>
          </div>
        )}
      </div>

      <AlertDialog open={alertOpen} onOpenChange={setAlertOpen}>
        <AlertDialogContent className="bg-zinc-950 border border-white/10 text-white">
          <AlertDialogHeader>
            <AlertDialogTitle className="font-oswald text-2xl uppercase flex items-center gap-2 text-yellow-500">
              <AlertTriangle /> Under Construction
            </AlertDialogTitle>
            <AlertDialogDescription className="text-gray-400">
              This Wiki page is currently being updated. Only{" "}
              <strong>Kaizoku Sentai Gokaiger</strong> is available for preview
              right now. Please check back later!
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction className="bg-primary hover:bg-primary/80 text-white font-bold uppercase tracking-wider rounded-none clip-angle">
              Understood
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
