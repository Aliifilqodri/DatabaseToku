import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*', // Semua bot boleh masuk
      allow: '/',     // Boleh akses semua halaman
      disallow: '/private/', // (Opsional) Kalau ada halaman admin, blokir disini
    },
    sitemap: 'https://wikitoku.vercel.app/', // Ganti domainmu nanti
  }
}