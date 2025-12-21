import { MetadataRoute } from 'next'

// Ganti dengan domain aslimu nanti kalau udah deploy (misal: toku-universe.vercel.app)
const BASE_URL = 'https://tokusatsu-universe.vercel.app' 

export default function sitemap(): MetadataRoute.Sitemap {
  
  // 1. Daftarkan Halaman Statis
  const staticRoutes = [
    '',
    '/characters',
    '/movies',
    '/genre/super-sentai',
    '/genre/kamen-rider',
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 1,
  }))

  // 2. Daftarkan Halaman Dinamis (Ambil dari ID database kamu)
  // Idealnya ini fetch dari API/Database beneran, tapi manual dulu gpp buat contoh
  const characterIds = ['gokai-red', 'gokai-blue', 'luka-millfy', 'gokai-green', 'gokai-pink', 'gokai-silver']
  
  const dynamicRoutes = characterIds.map((id) => ({
    url: `${BASE_URL}/character/${id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  return [...staticRoutes, ...dynamicRoutes]
}