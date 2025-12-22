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
    desc: "The cyborg heroes who fight against evil organizations to protect humanity's freedom.",
    banner: "/kr/Kamen-Rider-0.jpg",
    color: "from-green-600/20",
  },
  "super-sentai": {
    title: "Super Sentai Series",
    desc: "Multicolored teams of heroes who use teamwork and giant mecha to battle threats.",
    banner: "/sentai/introduction-to-tokusatsu-super-sentai.jpg",
    color: "from-red-600/20",
  },
  ultraman: {
    title: "Ultraman Multiverse",
    desc: "Giants of Light who defend Earth from Kaiju and alien invaders.",
    banner: "/ultra/ultraman-netflix-1.jpg",
    color: "from-blue-600/20",
  },
  "power-rangers": {
    title: "Power Rangers",
    desc: "Teenagers with attitude, adapted for a global audience with explosive action.",
    banner: "/pr/2140584.webp",
    color: "from-yellow-600/20",
  },
};

const allSeries = [
  {
    id: "goozuger",
    title: "No.1 Sentai Goozuger",
    genre: "super-sentai",
    year: "2025",
    era: "Reiwa",
    img: "/sntai/OIP (9).webp",
    rating: 5.0,
  },
  {
    id: "boonboomger",
    title: "Boonboomger",
    genre: "super-sentai",
    year: "2024",
    era: "Reiwa",
    img: "/sntai/1jachzvwj3fc1.jpeg",
    rating: 4.7,
  },
  {
    id: "king-ohger",
    title: "King-Ohger",
    genre: "super-sentai",
    year: "2023",
    era: "Reiwa",
    img: "/sntai/static-assets-upload299570442303396886.webp",
    rating: 4.9,
  },
  {
    id: "donbrothers",
    title: "Donbrothers",
    genre: "super-sentai",
    year: "2022",
    era: "Reiwa",
    img: "/sntai/urFjNoGZwSfkVWZZUIWMoGZNYAV.webp",
    rating: 4.7,
  },
  {
    id: "zenkaiger",
    title: "Zenkaiger",
    genre: "super-sentai",
    year: "2021",
    era: "Reiwa",
    img: "/sntai/awGb7VoRro0Z6N4S5hdpKbQbRFp.webp",
    rating: 4.5,
  },
  {
    id: "kiramager",
    title: "Kiramager",
    genre: "super-sentai",
    year: "2020",
    era: "Reiwa",
    img: "/sntai/kiramager_1185px.webp",
    rating: 4.6,
  },
  {
    id: "ryusoulger",
    title: "Ryusoulger",
    genre: "super-sentai",
    year: "2019",
    era: "Heisei",
    img: "/sntai/Ryusoulger-Movie-Poster.jpg",
    rating: 4.4,
  },
  {
    id: "lu-pat",
    title: "Lupin v Pat",
    genre: "super-sentai",
    year: "2018",
    era: "Heisei",
    img: "/sntai/0V6WN_4c.jpg",
    rating: 4.8,
  },
  {
    id: "kyuranger",
    title: "Kyuranger",
    genre: "super-sentai",
    year: "2017",
    era: "Heisei",
    img: "/sntai/C3BdCV2UsAAAHAh.jpg",
    rating: 4.7,
  },
  {
    id: "zyuohger",
    title: "Zyuohger",
    genre: "super-sentai",
    year: "2016",
    era: "Heisei",
    img: "/sntai/OIP (1).webp",
    rating: 4.4,
  },
  {
    id: "ninninger",
    title: "Ninninger",
    genre: "super-sentai",
    year: "2015",
    era: "Heisei",
    img: "/sntai/740full-shuriken-sentai-ninninger-poster.jpg",
    rating: 4.2,
  },
  {
    id: "toqger",
    title: "ToQger",
    genre: "super-sentai",
    year: "2014",
    era: "Heisei",
    img: "/sntai/OIP (2).webp",
    rating: 4.7,
  },
  {
    id: "kyoryuger",
    title: "Kyoryuger",
    genre: "super-sentai",
    year: "2013",
    era: "Heisei",
    img: "/sntai/mhTMn3TEUX20BxMQRBVVLLrpfPg.webp",
    rating: 4.8,
  },
  {
    id: "go-busters",
    title: "Go-Busters",
    genre: "super-sentai",
    year: "2012",
    era: "Heisei",
    img: "/sntai/iNMSkX1OATr2SCW30gjDBCtrikJ.webp",
    rating: 4.6,
  },
  {
    id: "gokaiger",
    title: "Gokaiger",
    genre: "super-sentai",
    year: "2011",
    era: "Heisei",
    img: "/sntai/OIP.webp",
    rating: 5.0,
  },
  {
    id: "goseiger",
    title: "Goseiger",
    genre: "super-sentai",
    year: "2010",
    era: "Heisei",
    img: "/sntai/OIP (3).webp",
    rating: 4.3,
  },
  {
    id: "shinkenger",
    title: "Shinkenger",
    genre: "super-sentai",
    year: "2009",
    era: "Heisei",
    img: "/sntai/BQWQq_4f.jpg",
    rating: 5.0,
  },
  {
    id: "go-onger",
    title: "Go-Onger",
    genre: "super-sentai",
    year: "2008",
    era: "Heisei",
    img: "/sntai/qJHz1FrP1gEf0Qf64fC1c0uP89Q.webp",
    rating: 4.5,
  },
  {
    id: "gekiranger",
    title: "Gekiranger",
    genre: "super-sentai",
    year: "2007",
    era: "Heisei",
    img: "/sntai/juken_sentai_gekiranger.webp",
    rating: 4.7,
  },
  {
    id: "boukenger",
    title: "Boukenger",
    genre: "super-sentai",
    year: "2006",
    era: "Heisei",
    img: "/sntai/MV5BZDc0MWU1YjUtOTgyMS00ZjllLTg1N2QtM2IwNjRlYWJmNGJhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    rating: 4.6,
  },
  {
    id: "magiranger",
    title: "Magiranger",
    genre: "super-sentai",
    year: "2005",
    era: "Heisei",
    img: "/sntai/m7v4jdKVf1DRvaAqj9R8HmTT8pp.webp",
    rating: 4.8,
  },
  {
    id: "dekaranger",
    title: "Dekaranger",
    genre: "super-sentai",
    year: "2004",
    era: "Heisei",
    img: "/sntai/e9lX8WyJJW2gkfhEAGnpb2QD2Nj.webp",
    rating: 4.9,
  },
  {
    id: "aba-ranger",
    title: "Abaranger",
    genre: "super-sentai",
    year: "2003",
    era: "Heisei",
    img: "/sntai/abaranger_flt.webp",
    rating: 4.7,
  },
  {
    id: "hurricaneger",
    title: "Hurricaneger",
    genre: "super-sentai",
    year: "2002",
    era: "Heisei",
    img: "/sntai/hurricanefinallivetourposter_8.webp",
    rating: 4.6,
  },
  {
    id: "gaoranger",
    title: "Gaoranger",
    genre: "super-sentai",
    year: "2001",
    era: "Heisei",
    img: "/sntai/wp11741805.webp",
    rating: 4.8,
  },
  {
    id: "timeranger",
    title: "Timeranger",
    genre: "super-sentai",
    year: "2000",
    era: "Heisei",
    img: "/sntai/OIP2.webp",
    rating: 4.9,
  },
  {
    id: "gogofive",
    title: "GoGoFive",
    genre: "super-sentai",
    year: "1999",
    era: "Heisei",
    img: "/sntai/OIP (6).webp",
    rating: 4.7,
  },
  {
    id: "gingaman",
    title: "Gingaman",
    genre: "super-sentai",
    year: "1998",
    era: "Heisei",
    img: "/sntai/2f9c2fdb-d765-4165-925f-a6f057e3679f.webp",
    rating: 4.6,
  },
  {
    id: "megaranger",
    title: "Megaranger",
    genre: "super-sentai",
    year: "1997",
    era: "Heisei",
    img: "/sntai/8Befa05m4THW4PfUktm8BIQPOQj.webp",
    rating: 4.8,
  },
  {
    id: "carranger",
    title: "Carranger",
    genre: "super-sentai",
    year: "1996",
    era: "Heisei",
    img: "/sntai/6ptpR09s6N1dV6gPcn36HqOs4D2.webp",
    rating: 4.5,
  },
  {
    id: "ohranger",
    title: "Ohranger",
    genre: "super-sentai",
    year: "1995",
    era: "Heisei",
    img: "/sntai/ohren_v1.webp",
    rating: 4.2,
  },
  {
    id: "kakuranger",
    title: "Kakuranger",
    genre: "super-sentai",
    year: "1994",
    era: "Heisei",
    img: "/sntai/65fc5eb8e1542.jpg",
    rating: 4.9,
  },
  {
    id: "dairanger",
    title: "Dairanger",
    genre: "super-sentai",
    year: "1993",
    era: "Heisei",
    img: "/sntai/cqaxNNvVA01eCWc9rH2IOrvu2Oc.webp",
    rating: 5.0,
  },
  {
    id: "zyuranger",
    title: "Zyuranger",
    genre: "super-sentai",
    year: "1992",
    era: "Showa",
    img: "/sntai/OIP (4).webp",
    rating: 4.7,
  },
  {
    id: "jetman",
    title: "Jetman",
    genre: "super-sentai",
    year: "1991",
    era: "Showa",
    img: "/sntai/OIP (7).webp",
    rating: 5.0,
  },
  {
    id: "fiveman",
    title: "Fiveman",
    genre: "super-sentai",
    year: "1990",
    era: "Showa",
    img: "/sntai/71kdKpQO4zL._AC_SL1500_.jpg",
    rating: 4.1,
  },
  {
    id: "turboranger",
    title: "Turboranger",
    genre: "super-sentai",
    year: "1989",
    era: "Showa",
    img: "/sntai/MV5BYTgxYmE4OGUtOTAyZC00MDg2LWI2ZTItYjYzOTljNzk0ZWUzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    rating: 4.3,
  },
  {
    id: "liveman",
    title: "Liveman",
    genre: "super-sentai",
    year: "1988",
    era: "Showa",
    img: "/sntai/hbMV06yJ6nHWj0LweEQCDXWhXcq.webp",
    rating: 4.8,
  },
  {
    id: "maskman",
    title: "Maskman",
    genre: "super-sentai",
    year: "1987",
    era: "Showa",
    img: "/sntai/dupV2Bm1W20yypWsMoEAx6AohSR.webp",
    rating: 4.7,
  },
  {
    id: "flashman",
    title: "Flashman",
    genre: "super-sentai",
    year: "1986",
    era: "Showa",
    img: "/sntai/OIP (8).webp",
    rating: 4.8,
  },
  {
    id: "changeman",
    title: "Changeman",
    genre: "super-sentai",
    year: "1985",
    era: "Showa",
    img: "/sntai/54Q2MOsu5M3jvN84TwoIG9D324o.webp",
    rating: 4.9,
  },
  {
    id: "bioman",
    title: "Bioman",
    genre: "super-sentai",
    year: "1984",
    era: "Showa",
    img: "/sntai/OIP (5).webp",
    rating: 4.7,
  },
  {
    id: "dynaman",
    title: "Dynaman",
    genre: "super-sentai",
    year: "1983",
    era: "Showa",
    img: "/sntai/mu8pXQGVoA7HUSXODD0w1kE8Xqv.webp",
    rating: 4.4,
  },
  {
    id: "goggle-v",
    title: "Goggle V",
    genre: "super-sentai",
    year: "1982",
    era: "Showa",
    img: "/sntai/goggle5_v1.webp",
    rating: 4.3,
  },
  {
    id: "sunvulcan",
    title: "Sun Vulcan",
    genre: "super-sentai",
    year: "1981",
    era: "Showa",
    img: "/sntai/MV5BNDNiZWQ3YTgtYjcxYy00OTYxLTkxYjYtMjMwODhjZmI0N2QyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    rating: 4.5,
  },
  {
    id: "denjiman",
    title: "Denjiman",
    genre: "super-sentai",
    year: "1980",
    era: "Showa",
    img: "/sntai/q54nIUlmuXNE7bVoJf4Fxv4Pf2h.webp",
    rating: 4.4,
  },
  {
    id: "battlefever",
    title: "Battle Fever J",
    genre: "super-sentai",
    year: "1979",
    era: "Showa",
    img: "/sntai/MV5BZjM1MjMyNGEtNjQzYy00MjMwLWEwYTMtMTlmYWQ3YzUxODU0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    rating: 4.2,
  },
  {
    id: "jakq",
    title: "JAKQ",
    genre: "super-sentai",
    year: "1977",
    era: "Showa",
    img: "/sntai/jakq_dengekitai___the_complete_series_dvd_cover_by_powerman68_deznild-pre.jpg",
    rating: 4.0,
  },
  {
    id: "goranger",
    title: "Goranger",
    genre: "super-sentai",
    year: "1975",
    era: "Showa",
    img: "/sntai/9RVSbWwobL9hpC987rHMsQ48XYK.webp",
    rating: 4.9,
  },
  {
    id: "akibaranger",
    title: "Akibaranger",
    genre: "super-sentai",
    year: "2012",
    era: "Unofficial",
    img: "/sntai/oZt75GWV0LhqYrCwMZUKBa7punf.jpg",
    rating: 4.9,
  },
  {
    id: "akibaranger-s2",
    title: "Akibaranger S2",
    genre: "super-sentai",
    year: "2013",
    era: "Unofficial",
    img: "/sntai/eYYqZd_4f.jpg",
    rating: 4.8,
  },
  {
    id: "high-school-heroes",
    title: "High School Heroes",
    genre: "super-sentai",
    year: "2021",
    era: "Unofficial",
    img: "/sntai/the_high_school_heroes_poster.webp",
    rating: 4.6,
  },
  {
    id: "after-v",
    title: "After V",
    genre: "super-sentai",
    year: "2014",
    era: "Unofficial",
    img: "/sntai/OIP (10).webp",
    rating: 4.2,
  },
  {
    id: "pr-jungle-fury",
    title: "PR Jungle Fury",
    genre: "power-rangers",
    year: "2008",
    era: "Disney",
    img: "/pr/236250.jpg",
    rating: 4.8,
  },
  {
    id: "pr-mystic-force",
    title: "PR Mystic Force",
    genre: "power-rangers",
    year: "2006",
    era: "Disney",
    img: "/pr/91+UfueBQeL._SL1500_.jpg",
    rating: 4.7,
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

  const eras = useMemo(() => {
    if (genre === "power-rangers") return ["All", "Disney", "Saban", "Hasbro"];
    if (genre === "super-sentai")
      return ["All", "Reiwa", "Heisei", "Showa", "Unofficial"];
    return ["All", "Reiwa", "Heisei", "Showa"];
  }, [genre]);

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
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-32 text-center bg-white/[0.01] border border-dashed border-white/10 rounded-3xl">
            <Filter className="text-zinc-800 h-20 w-20 mb-6" />
            <h3 className="text-3xl font-oswald font-bold text-zinc-400 uppercase tracking-tighter">
              Out of Temporal Range
            </h3>
          </div>
        )}
      </div>

      <AlertDialog open={alertOpen} onOpenChange={setAlertOpen}>
        <AlertDialogContent className="bg-zinc-950 border border-white/10 text-white p-0 rounded-none max-w-[95vw] sm:max-w-[500px] overflow-hidden">
          <button
            onClick={() => setAlertOpen(false)}
            className="absolute top-4 right-4 z-50 p-2 text-zinc-400 hover:text-white"
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
            <AlertDialogFooter className="mt-8">
              <AlertDialogAction className="bg-primary hover:bg-white text-black font-black uppercase tracking-widest rounded-none h-14 w-full">
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
