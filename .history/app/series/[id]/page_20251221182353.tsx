"use client"

import { useState, useEffect, use } from "react"
import { Navbar } from "@/components/navbar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  ArrowLeft, PlayCircle, Calendar, Star, Users, 
  Shield, Zap, Info, ChevronDown, Share2, Youtube, Timer 
} from "lucide-react"
import Link from "next/link"

const seriesDatabase: any = {
  "kaizoku-sentai-gokaiger": {
    title: "Kaizoku Sentai Gokaiger",
    jpTitle: "海賊戦隊ゴーカイジャー",
    tagline: "Let's make it showy!",
    desc: "The 35th entry in the Super Sentai series. A group of space pirates come to Earth in search of the 'Greatest Treasure in the Universe', but they must first conquer the Space Empire Zangyack and collect the 'Grand Powers' of the previous 34 Super Sentai teams.",
    year: "2011 - 2012",
    episodes: 51,
    studio: "Toei Company",
    writer: "Naruhisa Arakawa",
    director: "Shojiro Nakazawa",
    rating: 5.0,
    image: "/sentai/Gokaiger_29.webp",
    color: "from-red-600 to-yellow-500",
    trailerId: "P8t4_s0Z7zM",
    cast: [
      {
        name: "Captain Marvelous",
        actor: "Ryota Ozawa",
        role: "Gokai Red",
        img: "/sentai/marvelous/Ryota-ozawa.webp",
      },
      {
        name: "Joe Gibken",
        actor: "Yuki Yamada",
        role: "Gokai Blue",
        img: "/sentai/joe/Yuki_Yamada.webp",
      },
      {
        name: "Luka Millfy",
        actor: "Mao Ichimichi",
        role: "Gokai Yellow",
        img: "/sentai/luka/Mao_Ichimichi.webp",
      },
      {
        name: "Don Dogoier",
        actor: "Kazuki Shimizu",
        role: "Gokai Green",
        img: "/sentai/don/Kazuki_Shimizu.webp",
      },
      {
        name: "Ahim de Famille",
        actor: "Yui Koike",
        role: "Gokai Pink",
        img: "/sentai/ahim/Yui_Koike.webp",
      },
      {
        name: "Gai Ikari",
        actor: "Junya Ikeda",
        role: "Gokai Silver",
        img: "/sentai/gai/Junya_Ikeda_Headshot.webp",
      },
    ],
    forms: [
      "Gokai Change",
      "Gold Mode",
      "Cross Armor Mode",
      "Gokai Red Gold Mode",
      "Tajadol Charge",
    ],
    wikiStats: {
      "Suit Actor": "Hirofumi Fukuzawa",
      Network: "TV Asahi",
      "Theme Song": "Kaizoku Sentai Gokaiger",
      "Next Series": "Tokumei Sentai Go-Busters",
    },
  },
}

export default function SeriesWikiPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = use(params)

  const [activeTab, setActiveTab] = useState("overview")
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (id === "kaizoku-sentai-gokaiger") {
        setData(seriesDatabase["kaizoku-sentai-gokaiger"])
    } else {
        setData(null)
    }
    setLoading(false)
  }, [id])

  if (loading)
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-white">
        Loading Archives...
      </div>
    )

  if (!data || id !== "kaizoku-sentai-gokaiger")
    return (
      <div className="min-h-screen bg-[#050505] text-white font-sans flex flex-col">
        <Navbar />
        <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
            <Timer className="w-24 h-24 text-primary mb-6 animate-pulse" />
            <h1 className="text-5xl font-oswald font-bold uppercase mb-4 tracking-wider">Coming Soon</h1>
            <p className="text-gray-400 max-w-md text-lg mb-8">
                We are currently retrieving archived data for this series. Please check back later.
            </p>
            <Link href="/">
                <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold uppercase tracking-wider">
                    Return to Dashboard
                </Button>
            </Link>
        </div>
      </div>
    )

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-primary selection:text-white pb-20">
      <Navbar />

      <div className="relative h-[85vh] w-full overflow-hidden">
        <div className="absolute inset-0 animate-in fade-in zoom-in duration-1000">
          <img
            src={data.image}
            alt={data.title}
            className="h-full w-full object-cover brightness-[0.4]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
          <div
            className={`absolute inset-0 bg-gradient-to-r ${data.color} opacity-20 mix-blend-overlay`}
          />
        </div>

        <div className="absolute inset-0 flex items-center px-6 sm:px-12 lg:px-20">
          <div className="w-full max-w-4xl space-y-6 pt-20">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm font-medium mb-4"
            >
              <ArrowLeft size={16} /> Back to Database
            </Link>

            <div className="flex flex-wrap gap-3 animate-in slide-in-from-left duration-700">
              <Badge className="bg-white text-black font-bold text-sm px-3">
                {data.year}
              </Badge>
              <Badge
                variant="outline"
                className="text-gray-300 border-white/20 uppercase tracking-widest"
              >
                {data.episodes} Episodes
              </Badge>
              <Badge className="bg-yellow-500 text-black font-bold flex gap-1">
                <Star size={12} fill="black" /> {data.rating}
              </Badge>
            </div>

            <div className="animate-in slide-in-from-bottom duration-700 delay-100">
              <h2 className="font-oswald text-3xl text-gray-400 font-bold uppercase tracking-[0.3em] mb-2">
                {data.jpTitle}
              </h2>
              <h1 className="font-oswald text-6xl md:text-8xl font-black italic uppercase tracking-tighter leading-[0.9] mb-6 text-white text-shadow-lg">
                {data.title}
              </h1>
              <p className="text-xl font-medium text-primary italic">
                "{data.tagline}"
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-6 animate-in fade-in duration-1000 delay-300">
              <Button
                size="lg"
                className="h-14 px-8 bg-white text-black hover:bg-gray-200 font-bold text-lg uppercase tracking-wider rounded-none clip-angle"
                onClick={() => {
                  window.open(
                    `https://www.youtube.com/results?search_query=${data.title}+trailer`,
                    "_blank"
                  );
                }}
              >
                <Youtube className="mr-2 text-red-600" size={24} /> Watch
                Trailer
              </Button>
              <Button
                variant="outline"
                className="h-14 px-8 border-white/20 bg-white/5 hover:bg-white/10 text-white font-bold text-lg uppercase tracking-wider rounded-none clip-angle"
              >
                <Share2 className="mr-2" size={20} /> Share Wiki
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 -mt-20 relative z-10">
        <div className="flex overflow-x-auto scrollbar-hide border-b border-white/10 bg-[#050505]/90 backdrop-blur-md sticky top-[70px] z-40">
          {["overview", "cast", "mecha & forms", "episodes"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-5 font-oswald text-lg font-bold uppercase tracking-wider transition-all border-b-4 whitespace-nowrap
                        ${
                          activeTab === tab
                            ? "border-primary text-white bg-white/5"
                            : "border-transparent text-gray-500 hover:text-gray-300 hover:bg-white/5"
                        }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="py-12 min-h-[500px] animate-in fade-in slide-in-from-bottom-5 duration-500">
          {activeTab === "overview" && (
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h3 className="font-oswald text-2xl text-white uppercase mb-4 flex items-center gap-2">
                    <Info size={24} className="text-primary" /> Plot Synopsis
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {data.desc}
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="glass-panel p-6 rounded-lg border-l-4 border-primary">
                    <h4 className="text-sm text-gray-400 uppercase tracking-widest mb-1">
                      Writer
                    </h4>
                    <p className="text-xl font-bold font-oswald">
                      {data.writer}
                    </p>
                  </div>
                  <div className="glass-panel p-6 rounded-lg border-l-4 border-primary">
                    <h4 className="text-sm text-gray-400 uppercase tracking-widest mb-1">
                      Director
                    </h4>
                    <p className="text-xl font-bold font-oswald">
                      {data.director}
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-zinc-900/50 border border-white/10 p-6 rounded-lg">
                  <h3 className="font-oswald text-xl uppercase tracking-widest text-white mb-6 border-b border-white/10 pb-2">
                    Series Data
                  </h3>
                  <div className="space-y-4 font-mono text-sm">
                    {Object.entries(data.wikiStats).map(([key, value]: any) => (
                      <div key={key} className="flex justify-between">
                        <span className="text-gray-500 uppercase">{key}</span>
                        <span className="text-white font-bold text-right">
                          {value}
                        </span>
                      </div>
                    ))}
                    <div className="flex justify-between">
                      <span className="text-gray-500 uppercase">Studio</span>
                      <span className="text-white font-bold text-right">
                        {data.studio}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "cast" && (
            <div>
              <h3 className="font-oswald text-2xl text-white uppercase mb-8 flex items-center gap-2">
                <Users size={24} className="text-primary" /> Main Cast
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {data.cast.map((actor: any, idx: number) => (
                  <div
                    key={idx}
                    className="group relative overflow-hidden rounded-lg bg-zinc-900 border border-white/10 hover:border-primary transition-colors"
                  >
                    <div className="aspect-[3/4] bg-zinc-800">
                      <img
                        src={actor.img}
                        className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity"
                        alt={actor.name}
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
                    <div className="absolute bottom-0 left-0 w-full p-4">
                      <p className="text-white font-oswald font-bold text-lg uppercase leading-none mb-1">
                        {actor.role}
                      </p>
                      <p className="text-primary text-sm font-medium">
                        {actor.actor}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "mecha & forms" && (
            <div>
              <h3 className="font-oswald text-2xl text-white uppercase mb-8 flex items-center gap-2">
                <Zap size={24} className="text-primary" /> Forms & Arsenal
              </h3>
              <div className="grid gap-4">
                {data.forms.map((form: string, idx: number) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-4 bg-zinc-900/50 border border-white/5 rounded hover:bg-zinc-800 transition-colors cursor-pointer group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded bg-zinc-800 flex items-center justify-center text-gray-500 group-hover:text-white group-hover:bg-primary transition-colors">
                        <Shield size={20} />
                      </div>
                      <span className="font-oswald text-lg uppercase text-gray-300 group-hover:text-white">
                        {form}
                      </span>
                    </div>
                    <ChevronDown className="-rotate-90 text-gray-600 group-hover:text-white" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "episodes" && (
            <div>
              <div className="flex justify-between items-center mb-8">
                <h3 className="font-oswald text-2xl text-white uppercase flex items-center gap-2">
                  <Calendar size={24} className="text-primary" /> Episode Guide
                </h3>
                <Badge variant="outline">Season 1 Completed</Badge>
              </div>

              <div className="space-y-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div
                    key={i}
                    className="group flex flex-col sm:flex-row gap-4 p-4 bg-zinc-900/30 border border-white/5 rounded hover:border-white/20 transition-all"
                  >
                    <div className="flex-shrink-0 w-32 h-20 bg-zinc-800 rounded overflow-hidden relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <PlayCircle className="text-white/20 group-hover:text-primary transition-colors" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <h4 className="font-oswald font-bold text-lg text-white group-hover:text-primary transition-colors">
                          Episode {i + 1}: The Space Pirates Appear
                        </h4>
                        <span className="text-xs text-gray-500 font-mono">
                          24 min
                        </span>
                      </div>
                      <p className="text-sm text-gray-400 mt-2 line-clamp-2">
                        The Space Empire Zangyack attacks Earth again. The
                        Gokaigers arrive and fight them off, not for justice,
                        but to find the Greatest Treasure.
                      </p>
                    </div>
                  </div>
                ))}
                <div className="text-center py-4">
                  <Button
                    variant="ghost"
                    className="text-gray-400 hover:text-white"
                  >
                    Load More Episodes
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}