"use client";

import { useState, use, useMemo } from "react";
import { Navbar } from "@/components/navbar";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  Star,
  Calendar,
  Filter,
  AlertTriangle,
  Database,
  X,
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
  chouseishin: {
    title: "Chouseishin Series",
    desc: "Ancient warriors awakened to protect the Earth from cosmic invaders.",
    banner: "/chou/Bdjyjq_3f.jpg",
    color: "from-purple-600/20",
  },
  "metal-heroes": {
    title: "Metal Hero Series",
    desc: "Space sheriffs and armored heroes protected by advanced metallic combat suits.",
    banner: "/mh/Gokai.webp",
    color: "from-zinc-600/20",
  },
  godzilla: {
    title: "Godzilla & Kaiju",
    desc: "The King of the Monsters and the colossal titans that rule the Earth.",
    banner: "/gz/godzilla-vs-kong-d35bic6awbsf6bt2.jpg",
    color: "from-emerald-900/20",
  },
};

const allSeries = [
  /* --- SUPER SENTAI (FULL ARCHIVE) --- */
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

  /* --- KAMEN RIDER --- */
  /* --- KAMEN RIDER REIWA --- */
  {
    id: "gavv",
    title: "Kamen Rider Gavv",
    genre: "kamen-rider",
    year: "2024",
    era: "Reiwa",
    img: "/kr/Kamen-Ridaer-0.jpg",
    rating: 4.5,
  },
  {
    id: "gotchard",
    title: "Kamen Rider Gotchard",
    genre: "kamen-rider",
    year: "2023",
    era: "Reiwa",
    img: "/kr/kamen_rider_gotchard__new_chapter__by_gekichop_dgm6f9l-pre.jpg",
    rating: 4.2,
  },
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
    id: "revice",
    title: "Kamen Rider Revice",
    genre: "kamen-rider",
    year: "2021",
    era: "Reiwa",
    img: "/kr/OIP (2).webp",
    rating: 4.4,
  },
  {
    id: "saber",
    title: "Kamen Rider Saber",
    genre: "kamen-rider",
    year: "2020",
    era: "Reiwa",
    img: "/kr/OIP (3).webp",
    rating: 4.0,
  },
  {
    id: "zero-one",
    title: "Kamen Rider Zero-One",
    genre: "kamen-rider",
    year: "2019",
    era: "Reiwa",
    img: "/kr/OIP.webp",
    rating: 4.7,
  },

  /* --- KAMEN RIDER HEISEI (PHASE 2) --- */
  {
    id: "zi-o",
    title: "Kamen Rider Zi-O",
    genre: "kamen-rider",
    year: "2018",
    era: "Heisei",
    img: "/kr/Zi-O_Poster.webp",
    rating: 4.3,
  },
  {
    id: "build",
    title: "Kamen Rider Build",
    genre: "kamen-rider",
    year: "2017",
    era: "Heisei",
    img: "/kr/456d61_ed354e3abfd74719a2b66f766f3ae3fe~mv2.jpg",
    rating: 5.0,
  },
  {
    id: "ex-aid",
    title: "Kamen Rider Ex-Aid",
    genre: "kamen-rider",
    year: "2016",
    era: "Heisei",
    img: "/kr/OIP (4).webp",
    rating: 4.8,
  },
  {
    id: "ghost",
    title: "Kamen Rider Ghost",
    genre: "kamen-rider",
    year: "2015",
    era: "Heisei",
    img: "/kr/hpja7vjQyX1AYI8yx1pEOYeTH34.webp",
    rating: 3.9,
  },
  {
    id: "drive",
    title: "Kamen Rider Drive",
    genre: "kamen-rider",
    year: "2014",
    era: "Heisei",
    img: "/kr/OIP (5).webp",
    rating: 4.7,
  },
  {
    id: "gaim",
    title: "Kamen Rider Gaim",
    genre: "kamen-rider",
    year: "2013",
    era: "Heisei",
    img: "/kr/OIP (6).webp",
    rating: 4.9,
  },
  {
    id: "wizard",
    title: "Kamen Rider Wizard",
    genre: "kamen-rider",
    year: "2012",
    era: "Heisei",
    img: "/kr/1Vk07_4f.jpg",
    rating: 4.1,
  },
  {
    id: "fourze",
    title: "Kamen Rider Fourze",
    genre: "kamen-rider",
    year: "2011",
    era: "Heisei",
    img: "/kr/740full-kamen-rider-fourze-poster.jpg",
    rating: 4.5,
  },
  {
    id: "ooo",
    title: "Kamen Rider OOO",
    genre: "kamen-rider",
    year: "2010",
    era: "Heisei",
    img: "/kr/MV5BY2RlOWVjNjUtN2NlMS00MjM3LWFmYmItYmVlNDNlNDJjOTk3XkEyXkFqcGdeQX_PYhgE9D.webp",
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

  /* --- KAMEN RIDER HEISEI (PHASE 1) --- */
  {
    id: "decade",
    title: "Kamen Rider Decade",
    genre: "kamen-rider",
    year: "2009",
    era: "Heisei",
    img: "/kr/OIP (7).webp",
    rating: 4.5,
  },
  {
    id: "kiva",
    title: "Kamen Rider Kiva",
    genre: "kamen-rider",
    year: "2008",
    era: "Heisei",
    img: "/kr/OIP (8).webp",
    rating: 4.2,
  },
  {
    id: "den-o",
    title: "Kamen Rider Den-O",
    genre: "kamen-rider",
    year: "2007",
    era: "Heisei",
    img: "/kr/kvrQeqnVmfR4cij2CYJNu8M2sv3.webp",
    rating: 4.8,
  },
  {
    id: "kabuto",
    title: "Kamen Rider Kabuto",
    genre: "kamen-rider",
    year: "2006",
    era: "Heisei",
    img: "/kr/OIP (9).webp",
    rating: 4.7,
  },
  {
    id: "hibiki",
    title: "Kamen Rider Hibiki",
    genre: "kamen-rider",
    year: "2005",
    era: "Heisei",
    img: "/kr/ywDWzzra3ayHKVmT3HrocA85yl8.webp",
    rating: 4.0,
  },
  {
    id: "blade",
    title: "Kamen Rider Blade",
    genre: "kamen-rider",
    year: "2004",
    era: "Heisei",
    img: "/kr/379full-kamen-rider-blade-poster.jpg",
    rating: 4.6,
  },
  {
    id: "faiz",
    title: "Kamen Rider 555 (Faiz)",
    genre: "kamen-rider",
    year: "2003",
    era: "Heisei",
    img: "/kr/rwh7fkf3szxa1.jpg",
    rating: 4.8,
  },
  {
    id: "ryuki",
    title: "Kamen Rider Ryuki",
    genre: "kamen-rider",
    year: "2002",
    era: "Heisei",
    img: "/kr/2ytCTwMTJg0TvSIoPVwENF81uu5.webp",
    rating: 4.9,
  },
  {
    id: "agito",
    title: "Kamen Rider Agito",
    genre: "kamen-rider",
    year: "2001",
    era: "Heisei",
    img: "/kr/7341825.jpg",
    rating: 4.7,
  },
  {
    id: "kuuga",
    title: "Kamen Rider Kuuga",
    genre: "kamen-rider",
    year: "2000",
    era: "Heisei",
    img: "/kr/WXrx3_4f.jpg",
    rating: 5.0,
  },

  /* --- KAMEN RIDER SHOWA --- */
  {
    id: "black-rx",
    title: "Kamen Rider Black RX",
    genre: "kamen-rider",
    year: "1988",
    era: "Showa",
    img: "/kr/OIP (10).webp",
    rating: 4.9,
  },
  {
    id: "black",
    title: "Kamen Rider Black",
    genre: "kamen-rider",
    year: "1987",
    era: "Showa",
    img: "/kr/ktJktpJhiiV4uyK7YtH35oiM1OO.webp",
    rating: 5.0,
  },
  {
    id: "zx",
    title: "Kamen Rider ZX",
    genre: "kamen-rider",
    year: "1984",
    era: "Showa",
    img: "/kr/MV5BM2ZlNDFjNGEtNGVjYi00Y2U4LTk3YTctOGE0N2FjYWU4ZDI3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    rating: 4.3,
  },
  {
    id: "super-1",
    title: "Kamen Rider Super-1",
    genre: "kamen-rider",
    year: "1980",
    era: "Showa",
    img: "/kr/OIP (11).webp",
    rating: 4.4,
  },
  {
    id: "sky-rider",
    title: "Skyrider",
    genre: "kamen-rider",
    year: "1979",
    era: "Showa",
    img: "/kr/kamen_rider_skyrider_00.webp",
    rating: 4.2,
  },
  {
    id: "stronger",
    title: "Kamen Rider Stronger",
    genre: "kamen-rider",
    year: "1975",
    era: "Showa",
    img: "/kr/4m5d7NUASqLQ9iE39CRtNumfr6m.webp",
    rating: 4.5,
  },
  {
    id: "amazon",
    title: "Kamen Rider Amazon",
    genre: "kamen-rider",
    year: "1974",
    era: "Showa",
    img: "/kr/740full-kamen-rider-amazon-poster.jpg",
    rating: 4.6,
  },
  {
    id: "x",
    title: "Kamen Rider X",
    genre: "kamen-rider",
    year: "1974",
    era: "Showa",
    img: "/kr/krx.webp",
    rating: 4.3,
  },
  {
    id: "v3",
    title: "Kamen Rider V3",
    genre: "kamen-rider",
    year: "1973",
    era: "Showa",
    img: "/kr/lCY3u4i4MqBvBym4SMnX9WWCcYU.webp",
    rating: 4.9,
  },
  {
    id: "ichigo",
    title: "Kamen Rider (Ichigo)",
    genre: "kamen-rider",
    year: "1971",
    era: "Showa",
    img: "/kr/OIP (12).webp",
    rating: 5.0,
  },
  /* --- ULTRAMAN --- */
  {
    id: "omega",
    title: "Ultraman Omega",
    genre: "ultraman",
    year: "2025",
    era: "Reiwa",
    img: "/ultra/OIP.jpeg",
    rating: 5.0,
  },
  {
    id: "arc",
    title: "Ultraman Arc",
    genre: "ultraman",
    year: "2024",
    era: "Reiwa",
    img: "/ultra/Ultraman-Arc-Poster-Visual-EN_v.jpg",
    rating: 4.6,
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
    rating: 4.5,
  },
  {
    id: "trigger",
    title: "Ultraman Trigger",
    genre: "ultraman",
    year: "2021",
    era: "Reiwa",
    img: "/ultra/OIP.webp",
    rating: 4.4,
  },
  {
    id: "ultraman-z",
    title: "Ultraman Z",
    genre: "ultraman",
    year: "2020",
    era: "Reiwa",
    img: "/ultra/9xE0tlBJjWZNjY7BbY0fRaNCe9p.jpg",
    rating: 4.9,
  },
  {
    id: "taiga",
    title: "Ultraman Taiga",
    genre: "ultraman",
    year: "2019",
    era: "Reiwa",
    img: "/ultra/64461502_10156741544814862_4456469370683523072_n.jpg",
    rating: 4.3,
  },
  {
    id: "rb",
    title: "Ultraman R/B",
    genre: "ultraman",
    year: "2018",
    era: "Heisei",
    img: "/ultra/OIP (1).webp",
    rating: 4.1,
  },
  {
    id: "geed",
    title: "Ultraman Geed",
    genre: "ultraman",
    year: "2017",
    era: "Heisei",
    img: "/ultra/geed-poster.webp",
    rating: 4.7,
  },
  {
    id: "orb",
    title: "Ultraman Orb",
    genre: "ultraman",
    year: "2016",
    era: "Heisei",
    img: "/ultra/rsz_40f83e47cfbbf2fc2ce9ff08208d9a361468015307_full.webp",
    rating: 4.8,
  },
  {
    id: "ultraman-x",
    title: "Ultraman X",
    genre: "ultraman",
    year: "2015",
    era: "Heisei",
    img: "/ultra/UltramanXvisual.webp",
    rating: 4.5,
  },
  {
    id: "ginga-s",
    title: "Ultraman Ginga S",
    genre: "ultraman",
    year: "2014",
    era: "Heisei",
    img: "/ultra/62c0hsfqi3EB9px96GLb7A8u6iz.webp",
    rating: 4.4,
  },
  {
    id: "ginga",
    title: "Ultraman Ginga",
    genre: "ultraman",
    year: "2013",
    era: "Heisei",
    img: "/ultra/rsz_gingaman.webp",
    rating: 4.2,
  },
  {
    id: "mebius",
    title: "Ultraman Mebius",
    genre: "ultraman",
    year: "2006",
    era: "Heisei",
    img: "/ultra/v19lPIh9qGwEc6OHVJdpwlaxOyI.webp",
    rating: 4.9,
  },
  {
    id: "max",
    title: "Ultraman Max",
    genre: "ultraman",
    year: "2005",
    era: "Heisei",
    img: "/ultra/18bp74xrGnx71aLEWHlZXBO9jlP.webp",
    rating: 4.5,
  },
  {
    id: "nexus",
    title: "Ultraman Nexus",
    genre: "ultraman",
    year: "2004",
    era: "Heisei",
    img: "/ultra/72mNqktWE333mGMlOwwZFZcrQHq.webp",
    rating: 4.8,
  },
  {
    id: "cosmos",
    title: "Ultraman Cosmos",
    genre: "ultraman",
    year: "2001",
    era: "Heisei",
    img: "/ultra/5bHjgB6jV8wCGleYN0T9ha5Q3Ag.webp",
    rating: 4.6,
  },
  {
    id: "neos",
    title: "Ultraman Neos",
    genre: "ultraman",
    year: "2000",
    era: "Heisei",
    img: "/ultra/OIP (3).webp",
    rating: 4.3,
  },
  {
    id: "nice",
    title: "Ultraman Nice",
    genre: "ultraman",
    year: "1999",
    era: "Heisei",
    img: "/ultra/896738-ultraman-nice-0-230-0-345-crop.jpg",
    rating: 4.0,
  },
  {
    id: "gaia",
    title: "Ultraman Gaia",
    genre: "ultraman",
    year: "1998",
    era: "Heisei",
    img: "/ultra/OIP (4).webp",
    rating: 4.8,
  },
  {
    id: "dyna",
    title: "Ultraman Dyna",
    genre: "ultraman",
    year: "1997",
    era: "Heisei",
    img: "/ultra/OIP (5).webp",
    rating: 4.7,
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
    id: "zearth",
    title: "Ultraman Zearth",
    genre: "ultraman",
    year: "1996",
    era: "Heisei",
    img: "/ultra/a7df6ffaa894d12ee3525a738a8d7d3995058d91761c142f96160f67d1a699a9.__wVdJ77g.webp",
    rating: 4.5,
  },
  {
    id: "powered",
    title: "Ultraman Powered",
    genre: "ultraman",
    year: "1993",
    era: "Heisei",
    img: "/ultra/OIP (6).webp",
    rating: 4.1,
  },
  {
    id: "great",
    title: "Ultraman Great",
    genre: "ultraman",
    year: "1990",
    era: "Heisei",
    img: "/ultra/5c8eb00993f85.jpg",
    rating: 4.2,
  },
  {
    id: "usa",
    title: "Ultraman USA",
    genre: "ultraman",
    year: "1987",
    era: "Showa",
    img: "/ultra/OIP (7).webp",
    rating: 4.0,
  },
  {
    id: "80",
    title: "Ultraman 80",
    genre: "ultraman",
    year: "1980",
    era: "Showa",
    img: "/ultra/lcF17uIzWI3EAUWNy1qqB0uicD9.webp",
    rating: 4.4,
  },
  {
    id: "the-ultraman",
    title: "The Ultraman",
    genre: "ultraman",
    year: "1979",
    era: "Showa",
    img: "/ultra/OIP (1).jpeg",
    rating: 4.1,
  },
  {
    id: "leo",
    title: "Ultraman Leo",
    genre: "ultraman",
    year: "1974",
    era: "Showa",
    img: "/ultra/mbkWC3HulFfJmkRiggnB1HX0zym.webp",
    rating: 4.5,
  },
  {
    id: "taro",
    title: "Ultraman Taro",
    genre: "ultraman",
    year: "1973",
    era: "Showa",
    img: "/ultra/bLnb77enw2zkHV66EuLdJKIjDrU.webp",
    rating: 4.7,
  },
  {
    id: "ace",
    title: "Ultraman Ace",
    genre: "ultraman",
    year: "1972",
    era: "Showa",
    img: "/ultra/swCbCdQr0B8zXPbkbDvw98jFVMl.webp",
    rating: 4.6,
  },
  {
    id: "jack",
    title: "Ultraman Jack",
    genre: "ultraman",
    year: "1971",
    era: "Showa",
    img: "/ultra/OIP (8).webp",
    rating: 4.5,
  },
  {
    id: "seven",
    title: "Ultraseven",
    genre: "ultraman",
    year: "1967",
    era: "Showa",
    img: "/ultra/OIP (9).webp",
    rating: 4.9,
  },
  {
    id: "ultraman-orig",
    title: "Ultraman",
    genre: "ultraman",
    year: "1966",
    era: "Showa",
    img: "/ultra/FHsHLxPagAElGw-.jpg_large",
    rating: 5.0,
  },
  {
    id: "ultra-q",
    title: "Ultra Q",
    genre: "ultraman",
    year: "1966",
    era: "Showa",
    img: "/ultra/kz1ONAmDf1PpS2YYXb9r0yyKztF.webp",
    rating: 4.8,
  },

  /* --- POWER RANGERS --- */
  {
    id: "jungle-fury",
    title: "PR Jungle Fury",
    genre: "power-rangers",
    year: "2008",
    era: "Disney",
    img: "/pr/236250.jpg",
    rating: 4.8,
  },
  {
    id: "mystic-force",
    title: "PR Mystic Force",
    genre: "power-rangers",
    year: "2006",
    era: "Disney",
    img: "/pr/91+UfueBQeL._SL1500_.jpg",
    rating: 4.7,
  },
  {
    id: "mmpr",
    title: "Mighty Morphin",
    genre: "power-rangers",
    year: "1993",
    era: "Saban",
    img: "/pr/OIP.webp",
    rating: 5.0,
  },

  /* --- CHOUSEISHIN --- */
  {
    id: "gransazer",
    title: "Gransazer",
    genre: "chouseishin",
    year: "2003",
    era: "Heisei",
    img: "/chou/actor-chouseishin-gransazer-958105_large.jpg",
    rating: 4.8,
  },
  {
    id: "justirisers",
    title: "Justirisers",
    genre: "chouseishin",
    year: "2004",
    era: "Heisei",
    img: "/chou/abRBwf.jpg",
    rating: 4.6,
  },
  {
    id: "sazer-x",
    title: "Sazer-X",
    genre: "chouseishin",
    year: "2005",
    era: "Heisei",
    img: "/chou/OIP.webp",
    rating: 4.5,
  },
  /* --- METAL HEROES --- */
  {
    id: "gavan",
    title: "Uchuu Keiji Gavan",
    genre: "metal-heroes",
    year: "1982",
    era: "Showa",
    img: "/mh/1536667246938_orig.png",
    rating: 4.9,
  },
  {
    id: "sharivan",
    title: "Uchuu Keiji Sharivan",
    genre: "metal-heroes",
    year: "1983",
    era: "Showa",
    img: "/mh/MV5BZDdiYTdkMGQtNjc0ZC00ODJjLThlYjgtNDdkYTE1NTA2MDBjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    rating: 4.7,
  },
  {
    id: "jiband",
    title: "Kidou Keiji Jiban",
    genre: "metal-heroes",
    year: "1989",
    era: "Showa",
    img: "/mh/dfd2nr8-8a18d218-2a86-409a-b2cd-31ae5b654bed.jpg",
    rating: 4.8,
  },
  {
    id: "b-fighter",
    title: "Juukou B-Fighter",
    genre: "metal-heroes",
    year: "1995",
    era: "Heisei",
    img: "/mh/MV5BMmYwM2M4YTItNTViOC00MWQ3LWFlYjgtMWYxNGQyYTJjNDY1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    rating: 4.6,
  },

  /* --- GODZILLA --- */
  {
    id: "godzilla-minus-one",
    title: "Godzilla Minus One",
    genre: "godzilla",
    year: "2023",
    era: "Reiwa",
    img: "/gz/wp12691878.webp",
    rating: 5.0,
  },
  {
    id: "shin-godzilla",
    title: "Shin Godzilla",
    genre: "godzilla",
    year: "2016",
    era: "Heisei",
    img: "/gz/MV5BODQ4ZmIzNWMtY2NiYi00MmM1LWFjMGQtMDE0Nzc1NzhjNjEyXkEyXkFqcGdeQXVyNDUwNzM4MzQ@._V1_.jpg",
    rating: 4.8,
  },
  {
    id: "godzilla-final-wars",
    title: "Godzilla: Final Wars",
    genre: "godzilla",
    year: "2004",
    era: "Heisei",
    img: "/gz/2617182f25cd036cef420fa14f0c458a73d80dd6ef097319a030919eeb0c7470.jpg",
    rating: 4.5,
  },
  {
    id: "godzilla-1954",
    title: "Godzilla (Original)",
    genre: "godzilla",
    year: "1954",
    era: "Showa",
    img: "/gz/fg635r7DxfmbQpnIh7vLCOsGoOG.webp",
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
    if (seriesId !== "gokaiger" && seriesId !== "tiga") {
      e.preventDefault();
      setAlertOpen(true);
    }
  };

  const eras = useMemo(() => {
    if (genre === "power-rangers") return ["All", "Hasbro", "Disney", "Saban"];
    if (genre === "super-sentai")
      return ["All", "Reiwa", "Heisei", "Showa", "Unofficial"];
    return ["All", "Reiwa", "Heisei", "Showa"];
  }, [genre]);

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-primary selection:text-white relative">
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
            <h1 className="font-oswald text-5xl sm:text-7xl md:text-9xl font-black uppercase italic tracking-tighter text-white drop-shadow-2xl leading-[0.85] animate-in slide-in-from-bottom-10 duration-1000">
              {genreInfo.title}
            </h1>
            <p className="text-sm sm:text-lg md:text-xl text-zinc-300 max-w-2xl font-sans leading-relaxed border-l-2 border-primary/50 pl-6">
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
              {eras.map((era) => (
                <button
                  key={era}
                  onClick={() => setActiveEra(era)}
                  className={`px-8 py-2 text-xs font-black uppercase tracking-[0.2em] transition-all duration-500 ${
                    activeEra === era
                      ? "bg-primary text-white border-primary"
                      : "bg-transparent border-white/10 text-zinc-500 hover:text-white"
                  } border`}
                >
                  {era}
                </button>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-end gap-2 text-zinc-500 font-mono text-xs uppercase">
            <span>
              <Database size={14} /> Records: {filteredSeries.length}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {filteredSeries.map((series) => (
            <Link
              href={`/series/${series.id}`}
              key={series.id}
              onClick={(e) => handleCardClick(e, series.id)}
              className="group relative block transition-all"
            >
              <div className="relative aspect-[2/3] overflow-hidden bg-zinc-950 border border-white/5 shadow-2xl transition-all group-hover:border-primary/50">
                <img
                  src={series.img}
                  alt={series.title}
                  className="h-full w-full object-cover grayscale-[0.5] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                <div className="absolute top-4 right-4 flex flex-col items-end gap-2">
                  <div className="bg-black/80 backdrop-blur-xl border border-white/10 px-3 py-1 text-[10px] font-black text-yellow-500 flex items-center gap-1.5">
                    <Star size={10} fill="currentColor" /> {series.rating}
                  </div>
                  <Badge className="bg-primary border-none rounded-none px-2 py-1 text-[8px] font-black">
                    {series.era}
                  </Badge>
                </div>
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <h3 className="font-oswald font-black text-xl uppercase italic text-white group-hover:text-primary transition-colors">
                    {series.title}
                  </h3>
                  <div className="flex items-center gap-2 text-[10px] text-zinc-400 font-mono">
                    <Calendar size={12} className="text-primary" />{" "}
                    {series.year}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <AlertDialog open={alertOpen} onOpenChange={setAlertOpen}>
        <AlertDialogContent className="bg-zinc-950 border border-white/10 text-white rounded-none p-0 overflow-hidden max-w-[95vw] sm:max-w-[500px]">
          <button
            onClick={() => setAlertOpen(false)}
            className="absolute top-4 right-4 z-50 p-2 text-zinc-400 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>

          <div className="p-8">
            <AlertDialogHeader>
              <AlertDialogTitle className="font-oswald text-3xl uppercase italic flex items-center gap-4 text-primary">
                <AlertTriangle className="h-10 w-10 animate-pulse" />{" "}
                SYSTEM_OFFLINE
              </AlertDialogTitle>
              <AlertDialogDescription className="text-zinc-400 text-lg pt-4 border-t border-white/5 font-sans">
                Access to this data core is restricted. Our pirate crew is
                currently decrypting archives.
                <br />
                <br />
                <span className="text-white font-mono text-sm underline tracking-tight">
                  Currently Available: [Kaizoku Sentai Gokaiger] [Ultraman Tiga]
                </span>
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter className="mt-8">
              <AlertDialogAction className="bg-primary text-black font-black w-full h-14 rounded-none uppercase tracking-widest hover:bg-white transition-colors">
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
