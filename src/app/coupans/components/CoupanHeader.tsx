'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Search, User } from 'lucide-react';

export default function Header() {
  const [offerIndex, setOfferIndex] = useState(0);

  const offers = [
    "Personalized Offers Just For You",
    "Exclusive Deals Waiting For You",
    "Your Special Cash Back Offers",
  ];

  const nextOffer = () => setOfferIndex((prev) => (prev + 1) % offers.length);
  const prevOffer = () => setOfferIndex((prev) => (prev - 1 + offers.length) % offers.length);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Yellow Promo Bar */}
      <div className="bg-yellow-400 text-black py-2 px-4 text-center text-sm md:text-base font-medium flex items-center justify-center gap-2">
        <span className="text-lg">✈️</span>
        <span>
          Pre-Boarding for Spring Savecation — Starts 3/5{' '}
          <span className="underline font-bold">Save Up to 70%</span> →
        </span>
      </div>

      {/* Main Purple Nav Bar */}
      <div className="bg-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 md:h-16">
            {/* Logo */}
            <div className="flex items-center gap-2 md:gap-4">
              <span className="text-xl md:text-2xl font-bold tracking-tight">
                RetailMeNot <span className="text-yellow-300">20 YEARS</span>
              </span>
            </div>

            {/* Nav Items – Desktop */}
            <nav className="hidden md:flex items-center space-x-6 lg:space-x-10 text-sm lg:text-base font-medium">
              <span className="relative group cursor-pointer">
                Coming soon: Spring Savecation
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform" />
              </span>

              <div className="relative group">
                <button className="flex items-center gap-1 hover:underline">
                  Stores <span className="text-xs">▼</span>
                </button>
                <div className="absolute hidden group-hover:block w-48 bg-white text-black shadow-lg rounded-md mt-2 py-2">
                  {/* Dropdown items */}
                  <Link href="#" className="block px-4 py-2 hover:bg-gray-100">All Stores</Link>
                  <Link href="#" className="block px-4 py-2 hover:bg-gray-100">Popular Stores</Link>
                </div>
              </div>

              <Link href="#" className="hover:underline">Cash Back</Link>
              <Link href="#" className="hover:underline">Blog</Link>

              <div className="relative">
                <button className="flex items-center gap-2 bg-purple-800 px-4 py-2 rounded-full hover:bg-purple-900 transition">
                  <Search size={18} />
                  <span>Q Search</span>
                </button>
              </div>

              <Link href="#" className="hover:underline flex items-center gap-1">
                Sign In
              </Link>
            </nav>

            {/* Right side – Cash Back Badge + Sign In (mobile friendly) */}
            <div className="flex items-center gap-4 md:gap-6">
              <div className="bg-green-400 text-black px-3 py-1 rounded-full text-xs md:text-sm font-bold flex items-center gap-1">
                <span className="text-green-700">⚡</span>
                $5.00
              </div>

              <button className="md:hidden text-white">
                <Search size={20} />
              </button>

              <button className="md:hidden text-white">
                <User size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Personalized Offers Slider */}
      <div className="bg-gray-100 border-b border-gray-200 py-3 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-sm md:text-base font-medium text-gray-700">
          <button onClick={prevOffer} className="p-2 hover:text-black">
            <ChevronLeft size={20} />
          </button>

          <span className="text-center flex-1">
            {offers[offerIndex]}
          </span>

          <button onClick={nextOffer} className="p-2 hover:text-black">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Mobile Bottom Menu (if needed – simple version) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-purple-700 text-white border-t border-purple-600 z-50">
        <div className="flex justify-around items-center h-14">
          <Link href="#" className="flex flex-col items-center text-xs">
            <span>Stores</span>
          </Link>
          <Link href="#" className="flex flex-col items-center text-xs">
            <span>Cash Back</span>
          </Link>
          <Link href="#" className="flex flex-col items-center text-xs">
            <span>Blog</span>
          </Link>
          <Link href="#" className="flex flex-col items-center text-xs">
            <Search size={20} />
          </Link>
          <Link href="#" className="flex flex-col items-center text-xs">
            <User size={20} />
          </Link>
        </div>
      </div>
    </header>
  );
}