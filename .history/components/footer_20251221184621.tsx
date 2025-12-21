import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#020202] border-t border-white/10 pt-16 pb-8 mt-auto">
      <div className="max-w-7xl mx-auto px-6">
        {/* TOP SECTION: Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-block mb-4 group">
              <span className="font-oswald text-3xl font-bold italic tracking-tighter text-white group-hover:text-primary transition-colors">
                TOKU<span className="text-primary">SATSU</span> UNIVERSE
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              The ultimate digital archive for Tokusatsu fans. Documenting the
              history of Japanese heroes from the Showa era to the Reiwa
              generation.
            </p>
          </div>

          {/* Database Links */}
          <div>
            <h3 className="font-oswald text-sm font-bold text-white uppercase tracking-widest mb-6">
              Database
            </h3>
            <ul className="space-y-3 text-sm text-gray-500">
              <li>
                <Link
                  href="/genre/kamen-rider"
                  className="hover:text-primary transition-colors"
                >
                  Kamen Rider Series
                </Link>
              </li>
              <li>
                <Link
                  href="/introduction-to-tokusatsu-super-sentai.jpg"
                  className="hover:text-primary transition-colors"
                >
                  Super Sentai Series
                </Link>
              </li>
              <li>
                <Link
                  href="/genre/ultraman"
                  className="hover:text-primary transition-colors"
                >
                  Ultraman Multiverse
                </Link>
              </li>
              <li>
                <Link
                  href="/genre/metal-heroes"
                  className="hover:text-primary transition-colors"
                >
                  Metal Heroes
                </Link>
              </li>
            </ul>
          </div>

          {/* Community & Legal */}
          <div>
            <h3 className="font-oswald text-sm font-bold text-white uppercase tracking-widest mb-6">
              Community
            </h3>
            <ul className="space-y-3 text-sm text-gray-500">
              <li>
                <Link
                  href="https://discord.gg/v5XU8bdYbN"
                  target="_blank"
                  className="hover:text-[#5865F2] transition-colors"
                >
                  Join Discord Server
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  About Project
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM SECTION: Copyright & Disclaimer */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="text-[10px] text-gray-600 space-y-2 max-w-2xl">
            <p className="uppercase font-bold tracking-wider text-gray-500">
              Legal Disclaimer
            </p>
            <p>
              This is a non-profit fan website created for educational and
              informational purposes only. Super Sentai, Kamen Rider, and
              related characters are registered trademarks of
              <span className="text-gray-500"> Toei Company, Ltd.</span>,
              <span className="text-gray-500"> Ishimori Productions</span>, and
              <span className="text-gray-500"> Bandai</span>.
            </p>
            <p>
              No copyright infringement is intended. All images and media belong
              to their respective owners.
            </p>
          </div>

          <div className="text-[10px] text-gray-700 font-mono text-right">
            &copy; {new Date().getFullYear()} Tokusatsu Universe.
            <br />
            Made with Next.js for Fans.
          </div>
        </div>
      </div>
    </footer>
  );
}
