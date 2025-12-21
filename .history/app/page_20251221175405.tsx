import { Navbar } from "@/components/navbar"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const featuredSeries = [
  {
    id: "kamen-rider-geats",
    title: "Kamen Rider Geats",
    genre: "Kamen Rider",
    year: "2022-2023",
    episodes: 49,
    description:
      "In the near future, participants compete in the Desire Grand Prix for the chance to realize their ideal world.",
    image: "/kamen-rider-geats-superhero-mask.jpg",
  },
  {
    id: "ultraman-decker",
    title: "Ultraman Decker",
    genre: "Ultraman",
    year: "2022-2023",
    episodes: 25,
    description: "Kanata Asumi transforms into Ultraman Decker to protect Earth from kaiju threats.",
    image: "/ultraman-decker-silver-hero.jpg",
  },
  {
    id: "king-ohger",
    title: "Ohsama Sentai King-Ohger",
    genre: "Super Sentai",
    year: "2023-2024",
    episodes: 50,
    description: "Five kingdoms unite as insect-themed heroes to protect their world from the Underground Empire.",
    image: "/super-sentai-king-ohger-team.jpg",
  },
  {
    id: "power-rangers-cosmic-fury",
    title: "Power Rangers Cosmic Fury",
    genre: "Power Rangers",
    year: "2023",
    episodes: 10,
    description: "The Rangers venture into space to save Ollie and battle Lord Zedd across the cosmos.",
    image: "/power-rangers-cosmic-space-heroes.jpg",
  },
]

const genres = [
  { name: "Super Sentai", count: 47, color: "bg-primary" },
  { name: "Kamen Rider", count: 35, color: "bg-accent" },
  { name: "Ultraman", count: 30, color: "bg-secondary" },
  { name: "Power Rangers", count: 29, color: "bg-primary" },
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-secondary py-20 md:py-32">
        <div className="absolute inset-0 bg-[url('/tokusatsu-heroes-montage.jpg')] bg-cover bg-center opacity-20" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-balance text-5xl font-bold tracking-tight text-secondary-foreground md:text-7xl">
              {"Enter the World of"}
              <span className="block text-primary">{"TOKUSATSU"}</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-secondary-foreground/90 md:text-xl">
              {
                "Explore legendary heroes, epic transformations, and unforgettable adventures from Japan's greatest action series"
              }
            </p>
          </div>
        </div>
      </section>

      {/* Genre Quick Links */}
      <section className="border-b border-border bg-muted/50 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {genres.map((genre) => (
              <Link key={genre.name} href={`/genre/${genre.name.toLowerCase().replace(" ", "-")}`} className="group">
                <Card className="transition-all hover:border-primary hover:shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className={`mx-auto mb-3 h-2 w-20 rounded-full ${genre.color}`} />
                    <h3 className="font-bold text-lg group-hover:text-primary transition-colors">{genre.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{`${genre.count} Series`}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Series */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-balance text-4xl font-bold tracking-tight md:text-5xl">{"Featured Series"}</h2>
            <p className="mt-4 text-pretty text-lg text-muted-foreground">
              {"The latest and greatest in Tokusatsu entertainment"}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {featuredSeries.map((series) => (
              <Link key={series.id} href={`/series/${series.id}`} className="group">
                <Card className="overflow-hidden transition-all hover:border-primary hover:shadow-xl">
                  <div className="aspect-[4/3] overflow-hidden bg-muted">
                    <img
                      src={series.image || "/placeholder.svg"}
                      alt={series.title}
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <div className="mb-2 flex items-center gap-2">
                      <Badge variant="secondary">{series.genre}</Badge>
                      <span className="text-xs text-muted-foreground">{series.year}</span>
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors">{series.title}</CardTitle>
                    <CardDescription className="line-clamp-2">{series.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm font-semibold text-muted-foreground">{`${series.episodes} Episodes`}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
