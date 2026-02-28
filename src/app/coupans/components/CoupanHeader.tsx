'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { ChevronLeft, ChevronRight, Search, User, ChevronDown } from 'lucide-react';

export default function Header() {
  const pathname = usePathname();
  const [offerIndex, setOfferIndex] = useState(0);
  const [showStoresDropdown, setShowStoresDropdown] = useState(false);

  const offers = [
    "Personalized Offers Just For You",
    "Exclusive Deals Waiting For You",
    "Your Special Cash Back Offers",
  ];

  const nextOffer = () => setOfferIndex((prev) => (prev + 1) % offers.length);
  const prevOffer = () => setOfferIndex((prev) => (prev - 1 + offers.length) % offers.length);

  // Default popular (homepage/general)
  let popularStores = [
    "Amazon", "Best Buy", "Chewy.com", "Kohls",
    "Macy's", "Shutterfly", "Target", "Temu",
    "Walmart", "Wayfair"
  ];

  // Clothing-specific popular (matches your 2nd screenshot)
  const clothingPopular = [
    "American Eagle", "Alo Yoga", "Carter's", "Cupshe",
    "FARFETCH", "H&M", "Neiman Marcus", "PrettyLittleThing",
    "SHEIN", "SPANX"
  ];

  // You can add more contexts later, e.g.:
  // if (pathname.includes('/electronics')) popularStores = ["Best Buy", "Dell", "Lenovo", ...];

  // Detect if we're in Clothing section
  const isClothingPage = pathname.includes('/clothing') || pathname.includes('/clothing-shoes-accessories');

  if (isClothingPage) {
    popularStores = clothingPopular;
  }

  // Fixed categories list (as seen in screenshots)
  const categories = [
    "Clothing",
    "Baby & Toddler",
    "Electronics",
    "Food & Beverage",
    "Home & Garden",
    "Health & Beauty",
    "Sporting Goods",
    "Tax Services",
    "Toys & Games",
    "Office Supplies",
  ];

  // Helper to check active category
  const getCategorySlug = (title: string) =>
    title.toLowerCase().replace(/ & /g, '-').replace(/\s+/g, '-');

  const activeCategory = pathname.split('/').pop(); // e.g. "clothing-shoes-accessories" or "clothing"

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

      {/* Main Purple Nav */}
      <div className="bg-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 md:h-16">
            {/* Logo */}
            <div className="flex items-center gap-2 md:gap-4">
              <span className="text-xl md:text-2xl font-bold tracking-tight">
                RetailMeNot <span className="text-yellow-300">20 YEARS</span>
              </span>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-6 lg:space-x-10 text-sm lg:text-base font-medium">
              <span className="relative group cursor-pointer">
                Coming soon: Spring Savecation
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform" />
              </span>

              {/* Stores Dropdown – now context-aware */}
              <div
                className="relative group"
                onMouseEnter={() => setShowStoresDropdown(true)}
                onMouseLeave={() => setShowStoresDropdown(false)}
              >
                <button className="flex items-center gap-1 hover:underline">
                  Stores <ChevronDown size={16} className="ml-1" />
                </button>

                {showStoresDropdown && (
                  <div className="absolute left-0 top-full mt-1 w-[520px] bg-white text-black shadow-xl rounded-lg overflow-hidden z-50 grid grid-cols-2">
                    {/* Left: Popular (changes by context) */}
                    <div className="p-4 border-r border-gray-100">
                      <h3 className="font-bold text-purple-700 mb-3 text-base">Popular</h3>
                      <div className="space-y-2">
                        {popularStores.map((store) => (
                          <Link
                            key={store}
                            href={`/stores/${store.toLowerCase().replace(/\s+/g, '-')}`}
                            className="block py-1.5 hover:text-purple-700 hover:underline text-gray-800"
                          >
                            {store}
                          </Link>
                        ))}
                      </div>
                      <Link
                        href="/all-stores"
                        className="block mt-4 text-purple-700 font-medium hover:underline"
                      >
                        All Stores →
                      </Link>
                    </div>

                    {/* Right: Categories (fixed, with active highlight) */}
                    <div className="p-4">
                      <h3 className="font-bold text-purple-700 mb-3 text-base">Categories</h3>
                      <div className="grid grid-cols-1 gap-2">
                        {categories.map((cat) => {
                          const slug = getCategorySlug(cat);
                          const isActive =
                            activeCategory?.includes(slug) ||
                            (cat === "Clothing" && activeCategory?.includes("clothing"));

                          return (
                            <Link
                              key={cat}
                              href={`/coupons/${slug}`}
                              className={`block py-1.5 hover:text-purple-700 hover:underline ${
                                isActive
                                  ? "text-purple-700 font-bold"
                                  : "text-gray-800"
                              }`}
                            >
                              {cat}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link href="/cashback" className="hover:underline">Cash Back</Link>
              <Link href="/blog" className="hover:underline">Blog</Link>

              <button className="flex items-center gap-2 bg-purple-800 px-4 py-2 rounded-full hover:bg-purple-900 transition">
                <Search size={18} />
                <span>Q Search</span>
              </button>

              <Link href="#" className="hover:underline flex items-center gap-1">
                Sign In
              </Link>
            </nav>

            {/* Right side icons */}
            <div className="flex items-center gap-4 md:gap-6">
              <div className="bg-green-400 text-black px-3 py-1 rounded-full text-xs md:text-sm font-bold flex items-center gap-1">
                <span className="text-green-700">⚡</span>
                $5.00
              </div>

              <button className="md:hidden text-white"><Search size={20} /></button>
              <button className="md:hidden text-white"><User size={20} /></button>
            </div>
          </div>
        </div>
      </div>

      {/* Offers Slider */}
      <div className="bg-gray-100 border-b border-gray-200 py-3 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-sm md:text-base font-medium text-gray-700">
          <button onClick={prevOffer} className="p-2 hover:text-black">
            <ChevronLeft size={20} />
          </button>
          <span className="text-center flex-1">{offers[offerIndex]}</span>
          <button onClick={nextOffer} className="p-2 hover:text-black">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Mobile Bottom Nav */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-purple-700 text-white border-t border-purple-600 z-50">
        <div className="flex justify-around items-center h-14">
          <Link href="#" className="flex flex-col items-center text-xs">Stores</Link>
          <Link href="#" className="flex flex-col items-center text-xs">Cash Back</Link>
          <Link href="#" className="flex flex-col items-center text-xs">Blog</Link>
          <Link href="#" className="flex flex-col items-center text-xs"><Search size={20} /></Link>
          <Link href="#" className="flex flex-col items-center text-xs"><User size={20} /></Link>
        </div>
      </div>
    </header>
  );
}