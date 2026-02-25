// src/app/components/Footer.tsx

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#f8f8f8] text-gray-700 py-10 md:py-16 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Logo */}
        <div className="text-center mb-8">
          <h3 className="text-4xl md:text-5xl font-black tracking-[0.3em] text-black">
            STYLIGHT
          </h3>
        </div>

        {/* Follow Us + Social Icons (black filled circles) */}
        <div className="text-center mb-10">
          <p className="text-sm uppercase tracking-wider font-medium mb-5 text-gray-500">
            Follow Us
          </p>
          <div className="flex justify-center gap-6 md:gap-10">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-black text-white hover:bg-gray-800 transition-colors"
            >
              <span className="text-xl font-bold">f</span>
            </a>

            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-black text-white hover:bg-gray-800 transition-colors"
            >
              <span className="text-xl font-bold">t</span>
            </a>

            <a
              href="https://pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pinterest"
              className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-black text-white hover:bg-gray-800 transition-colors"
            >
              <span className="text-xl font-bold">p</span>
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-black text-white hover:bg-gray-800 transition-colors"
            >
              <span className="text-xl font-bold">ig</span>
            </a>
          </div>
        </div>

        {/* Main Links Row */}
        <div className="text-center mb-10">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm md:text-base">
            <Link href="/about" className="hover:text-black transition-colors">
              About Us
            </Link>
            <Link href="/blog" className="hover:text-black transition-colors">
              Blog
            </Link>
            <Link href="/insights" className="hover:text-black transition-colors">
              Insights
            </Link>
            <Link href="/jobs" className="hover:text-black transition-colors">
              Jobs
            </Link>
            <Link href="/partnerships" className="hover:text-black transition-colors">
              Partnerships
            </Link>
            <Link href="/terms" className="hover:text-black transition-colors">
              Terms of use
            </Link>
            <Link href="/privacy" className="hover:text-black transition-colors">
              Privacy policy
            </Link>
            <Link href="/contact" className="hover:text-black transition-colors">
              Contact
            </Link>
            <Link href="/privacy-settings" className="hover:text-black transition-colors">
              Privacy Settings
            </Link>
          </div>
        </div>

        {/* Bottom row: About Stylight + Language selector */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm border-t border-gray-200 pt-8 gap-6">
          <div className="flex flex-wrap justify-center gap-6 text-center md:text-left">
            <span className="font-medium">About Stylight</span>
          </div>

          <div className="flex items-center gap-2 cursor-pointer">
            <span className="text-xl">🇺🇸</span>
            <span className="font-medium">US</span>
            <span className="text-xs">▲</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs text-gray-500 mt-6">
          Copyright © {new Date().getFullYear()} Stylight.
        </div>
      </div>
    </footer>
  );
}