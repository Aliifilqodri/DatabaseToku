import Link from "next/link"
import { Github, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Logo & Tagline */}
        <div className="text-center md:text-left">
          <h2 className="font-oswald text-2xl font-bold text-white italic">
            TOKU<span className="text-red-600">SATSU</span> DB
          </h2>
          <p className="text-gray-500 text-sm mt-2">
            The ultimate archive for Tokusatsu fans.
          </p>
        </div>

        {/* Disclaimer Penting */}
        <div className="max-w-md text-center md:text-right text-xs text-gray-600 space-y-2">
          <p>
            <strong>Disclaimer:</strong> This is a non-profit fan project created for educational and informational purposes only.
          </p>
          <p>
            Super Sentai, Kamen Rider, and related characters are registered trademarks of 
            <span className="text-gray-400"> Toei Company, Ltd.</span>, 
            <span className="text-gray-400"> Ishimori Productions</span>, and 
            <span className="text-gray-400"> Bandai</span>.
          </p>
          <p>
            No copyright infringement is intended. All images and media belong to their respective owners.
          </p>
        </div>

        {/* Social / Creator Link */}
        <div className="flex gap-4">
          <Link href="#" className="text-gray-500 hover:text-white transition-colors">
            <Github size={20} />
          </Link>
          <Link href="#" className="text-gray-500 hover:text-white transition-colors">
            <Twitter size={20} />
          </Link>
        </div>
      </div>
      
      <div className="mt-8 text-center text-[10px] text-gray-700 border-t border-white/5 pt-4">
        &copy; {new Date().getFullYear()} Tokusatsu Database Fan Project. Built with Next.js.
      </div>
    </footer>
  )
}