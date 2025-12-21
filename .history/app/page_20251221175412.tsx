import { Navbar } from "@/components/navbar"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { PlayCircle, Star, Calendar, ArrowRight, Flame, TrendingUp } from "lucide-react"

// Data Mockup yang lebih kaya
const heroSeries = {
  id: "kamen-rider-geats",
  title: "KAMEN RIDER GEATS",
  subtitle: "The Desire Grand Prix Begins",
  description: "Join the battle royale where participants transform into Kamen Riders to compete for the right to reshape the world.",
  tags: ["Action", "Sci-Fi", "Battle Royale"],
  rating: 4.9,
  image: "/kamen-rider-geats-superhero-mask.jpg", // Pastikan gambar ini ada atau ganti placeholder
}

const trendingSeries = [
  {
    id: "king-ohger",
    title: "Ohsama Sentai King-Ohger",
    episodes: "Ep 42 Released",
    image: "/super-sentai-king-ohger-team.jpg",
    rating: 4.8,
    rank: 1,
  },
  {
    id: "ultraman-blazar",
    title: "Ultraman Blazar",
    episodes: "Ep 18 Released",
    image: "/ultraman-decker-silver-hero.jpg", // Placeholder
    rating: 4.7,
    rank: 2,
  },
  {
    id: "kamen-rider-gotchard",
    title: "Kamen Rider Gotchard",
    episodes: "Ep 12 Released",
    image: "/kamen-rider-geats-superhero-mask.jpg", // Placeholder
    rating: 4.5,
    rank: 3,
  },
]

const categories = [
  { name: "Kamen Rider", color: "from-green-500 to-emerald-700", icon: "🏍️", count: 35 },
  { name: "Super Sentai", color: "from-red-500 to-rose-700", icon: "🤖", count: 47 },
  { name: "Ultraman", color: "from-blue-500 to-indigo-700", icon: "✨", count: 30 },
  { name: "Metal Heroes", color: "from-slate-400 to-slate-600", icon: "🛡️", count: 17 },
]

const latestUpdates = [
  { id: "gotchard", title: "Gotchard", episode: "Episode 14", time: "2 hours ago", image: "/placeholder.svg" },
  { id: "king-ohger", title: "King-Ohger", episode: "Episode 45", time: "1 day ago", image: "/placeholder.svg" },
  { id: "blazar", title: "Blazar", episode: "Episode 21", time: "2 days ago", image: "/placeholder.svg" },
  { id: "garo", title: "Garo: Gold Storm", episode: "Special", time: "3 days ago", image: "/placeholder.svg" },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <Navbar />

      {/* --- HERO SECTION (Cinematic Style) --- */}
      <section className="relative h-[85vh] w-full overflow-hidden">
        {/* Background Image with Parallax Vibe */}
        <div className="absolute inset-0">
          <img
            src={heroSeries.image}
            alt="Hero Background"
            className="h-full w-full object-cover object-center brightness-50 transition-transform duration-1000 hover:scale-105"
          />
          {/* Gradient Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/40 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex h-full flex-col justify-center px-6 sm:px-12 lg:px-20">
          <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-10 duration-1000">
            <Badge variant="outline" className="mb-4 border-primary text-primary px-4 py-1 text-sm uppercase tracking-widest bg-primary/10 backdrop-blur-md">
              Featured Series
            </Badge>
            <h1 className="text-6xl font-black uppercase tracking-tighter text-white sm:text-7xl md:text-8xl drop-shadow-2xl">
              {heroSeries.title}
            </h1>
            <p className="mt-4 text-xl font-medium text-gray-200 sm:text-2xl drop-shadow-md">
              {heroSeries.subtitle}
            </p>
            <p className="mt-4 line-clamp-2 max-w-xl text-lg text-gray-300">
              {heroSeries.description}
            </p>
            
            <div className="mt-6 flex items-center gap-4 text-sm text-gray-300">
              <div className="flex items-center gap-1 text-yellow-400">
                <Star className="fill-current" size={18} />
                <span className="font-bold">{heroSeries.rating}</span>
              </div>
              <span>•</span>
              <div className="flex gap-2">
                {heroSeries.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-white/10 px-3 py-0.5 backdrop-blur-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 flex gap-4">
              <Link href={`/series/${heroSeries.id}`}>
                <Button size="lg" className="h-14 gap-2 rounded-full px-8 text-lg font-bold shadow-lg shadow-primary/25 transition-all hover:scale-105">
                  <PlayCircle size={24} /> Watch Now
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="h-14 gap-2 rounded-full border-white/20 bg-white/5 px-8 text-lg text-white backdrop-blur-sm hover:bg-white/20 transition-all">
                More Info
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* --- CATEGORY PILLS (Floating) --- */}
      <section className="relative z-20 -mt-16 px-6 sm:px-12 lg:px-20">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {categories.map((cat) => (
            <Link key={cat.name} href={`/genre/${cat.name.toLowerCase().replace(" ", "-")}`} className="group">
              <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${cat.color} p-6 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl`}>
                <div className="absolute right-[-20px] top-[-20px] text-9xl opacity-20 transition-transform group-hover:rotate-12 group-hover:scale-110 grayscale mix-blend-overlay">
                  {cat.icon}
                </div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white">{cat.name}</h3>
                  <p className="mt-1 text-sm font-medium text-white/80 group-hover:text-white">
                    {cat.count} Series
                  </p>
                  <div className="mt-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-md transition-all group-hover:bg-white group-hover:text-black">
                    <ArrowRight size={20} />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* --- TRENDING SECTION --- */}
      <section className="py-20 px-6 sm:px-12 lg:px-20">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <div className="flex items-center gap-2 text-primary">
              <Flame className="fill-current" />
              <span className="font-bold uppercase tracking-wider">Hot Right Now</span>
            </div>
            <h2 className="mt-2 text-4xl font-bold tracking-tight text-foreground">Trending Series</h2>
          </div>
          <Link href="/trending" className="hidden text-sm font-semibold text-muted-foreground hover:text-primary md:block">
            View Top 10 →
          </Link>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {trendingSeries.map((show, index) => (
            <Link key={show.id} href={`/series/${show.id}`} className="group relative block">
              <div className="relative aspect-video overflow-hidden rounded-xl bg-muted shadow-lg transition-all duration-300 group-hover:ring-2 group-hover:ring-primary group-hover:ring-offset-2 group-hover:ring-offset-background">
                {/* Ranking Badge */}
                <div className="absolute left-4 top-0 z-10 flex h-12 w-10 items-center justify-center bg-primary text-xl font-black text-primary-foreground shadow-lg clip-path-ribbon rounded-b-lg">
                  {show.rank}
                </div>
                
                <img
                  src={show.image}
                  alt={show.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100">
                  <PlayCircle className="h-16 w-16 text-white drop-shadow-lg scale-75 transition-transform duration-300 group-hover:scale-100" />
                </div>
                
                <div className="absolute bottom-4 right-4 rounded-lg bg-black/70 px-3 py-1 text-xs font-bold text-white backdrop-blur-md">
                   {show.rating} ★
                </div>
              </div>
              <div className="mt-4">
                <h3 className="truncate text-xl font-bold group-hover:text-primary transition-colors">{show.title}</h3>
                <p className="text-sm font-medium text-muted-foreground">{show.episodes}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* --- LATEST UPDATES (Grid) --- */}
      <section className="bg-muted/30 py-20">
        <div className="px-6 sm:px-12 lg:px-20">
          <div className="mb-10 flex items-center gap-3">
             <TrendingUp className="h-8 w-8 text-accent" />
             <h2 className="text-3xl font-bold">Fresh from Japan</h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
             {latestUpdates.map((item) => (
               <Card key={item.id} className="group overflow-hidden border-none bg-card shadow-sm transition-all hover:shadow-md">
                  <div className="flex items-center gap-4 p-4">
                     <div className="relative h-16 w-24 shrink-0 overflow-hidden rounded-md bg-muted">
                        <img src={item.image} className="h-full w-full object-cover group-hover:scale-110 transition-transform" alt={item.title}/>
                     </div>
                     <div className="flex flex-col">
                        <span className="text-xs font-semibold text-primary">{item.episode}</span>
                        <h4 className="font-bold leading-tight group-hover:text-primary transition-colors">{item.title}</h4>
                        <div className="mt-1 flex items-center gap-1 text-[10px] text-muted-foreground uppercase tracking-wide">
                           <Calendar size={10} /> {item.time}
                        </div>
                     </div>
                  </div>
               </Card>
             ))}
          </div>
        </div>
      </section>

      {/* --- NEWSLETTER / CTA --- */}
      <section className="py-24 px-6 text-center">
         <div className="mx-auto max-w-2xl rounded-3xl bg-gradient-to-b from-secondary to-background border border-border p-12 shadow-2xl">
            <h2 className="text-3xl font-bold md:text-4xl">Never Miss a Henshin!</h2>
            <p className="mx-auto mt-4 max-w-md text-muted-foreground">
               Get notified about new episodes, movie releases, and exclusive merchandise reviews.
            </p>
            <div className="mx-auto mt-8 flex max-w-sm flex-col gap-3 sm:flex-row">
               <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex h-12 w-full rounded-full border border-input bg-background px-4 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
               />
               <Button size="lg" className="rounded-full h-12 px-8">Subscribe</Button>
            </div>
         </div>
      </section>
    </div>
  )
}