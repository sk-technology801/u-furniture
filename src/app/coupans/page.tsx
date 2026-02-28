// app/page.tsx

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

// Slider Data (unchanged)
interface Slide {
  id: number;
  title: string;
  description: string;
  buttonText: string;
  bgImage: string;
  overlay?: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: "RMN EXCLUSIVE!",
    description: "Up to 30% Off + Extra 10% off Applied In Cart",
    buttonText: "REVEAL CODE",
    bgImage: "https://images.unsplash.com/photo-1585771723398-56d38c6112d1?w=1200&auto=format&fit=crop",
    overlay: "bg-black/35",
  },
  {
    id: 2,
    title: "Styling Redefined",
    description: "Discover our latest hair tools collection",
    buttonText: "SHOP NOW",
    bgImage: "https://images.unsplash.com/photo-1591370871779-8b446a82e7db?w=1200&auto=format&fit=crop",
    overlay: "bg-black/45",
  },
  {
    id: 3,
    title: "Clean Air, Happy Home",
    description: "Advanced purification for you & your family",
    buttonText: "EXPLORE",
    bgImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&auto=format&fit=crop",
    overlay: "bg-black/35",
  },
];

// CHA-CHING Stores (unchanged)
const cashbackStores = [
  {
    name: "Macy's",
    cashback: "Up to 12%",
    color: "bg-red-600",
    logoSrc: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Macy%27s_Logo_2019.png",
  },
  {
    name: "Carter's",
    cashback: "10%",
    color: "bg-cyan-500",
    logoSrc: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Carters_logo.svg",
  },
  {
    name: "KAREN MILLEN",
    cashback: "10%",
    color: "bg-white border border-gray-300",
    logoSrc: "https://seeklogo.com/images/K/karen-millen-logo-1E8F8E8F8E-seeklogo.com.png",
  },
  {
    name: "Macy's",
    cashback: "Up to 15%",
    color: "bg-red-600",
    logoSrc: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Macy%27s_Logo_2019.png",
  },
  {
    name: "Target",
    cashback: "1%",
    color: "bg-red-600",
    logoSrc: "https://upload.wikimedia.org/wikipedia/commons/9/96/Target_Corporation_logo.svg",
  },
  {
    name: "Amazon",
    cashback: "10%",
    color: "bg-black",
    logoSrc: "https://assets.aboutamazon.com/2e/d7/ac71f1f344c39f8949f48fc89e71/amazon-logo-squid-ink-smile-orange.png",
  },
  {
    name: "Lowe's",
    cashback: "5%",
    color: "bg-blue-700",
    logoSrc: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Lowe%27s.svg",
  },
  {
    name: "Carter's",
    cashback: "10%",
    color: "bg-cyan-500",
    logoSrc: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Carters_logo.svg",
  },
];

// FAQ data (added properly here so it is defined before use)
const faqItems = [
  {
    question: "How can RetailMeNot save me money when shopping online?",
    answer:
      "RetailMeNot offers several ways for shoppers to save while shopping. We feature up-to-date coupon codes, free shipping offers, sales and promo codes for thousands of stores and restaurants. Plus, our cash back offers pay you to shop! Activate a cash back offer, shop, check out, and we'll pay you back a percentage of what you spent.",
  },
  {
    question: "How many online stores does RetailMeNot have coupons & promo codes for?",
    answer:
      "RetailMeNot has coupons and promo codes for nearly 20,000 stores, brands and restaurants. Our team is constantly verifying the offers on our site to ensure you save money on every purchase.",
  },
  {
    question: "Does RetailMeNot provide cash back for online purchases?",
    answer:
      "Yes. RetailMeNot has cash back offers for nearly 3,800 stores. You can access these cash back offers on our site, via our app or through our free browser extension. Simply sign up for a RetailMeNot account, activate the cash back offers you want to use, shop and check out as normal – we'll give you a percentage of what you spent back in your RetailMeNot wallet.",
  },
  {
    question: "Does RetailMeNot have a browser extension?",
    answer:
      "Yes. Install our free RetailMeNot browser extension on your preferred browser (including top browsers like Chrome, Firefox, Safari and Microsoft Edge), to make sure you never miss out on the best promo code for your purchase. RetailMeNot's Browser Extension sources and automatically applies coupons and promo codes in real time while you shop online.",
  },
  {
    question: "Does RetailMeNot have an app I can use on my smartphone?",
    answer:
      "Yes. The RetailMeNot app helps you find and use promo codes when you're shopping on your phone. It also sends you notifications about great sales and offers, so that you never miss out on a chance to save. You can also find and activate cash back offers via the app.",
  },
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isStoresOpen, setIsStoresOpen] = useState(false);

  // State for FAQ accordion
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const goToSlide = (index: number) => setCurrentIndex(index);

  return (
    <main className="min-h-screen bg-gray-50">
      {/* 1. AUTO SLIDER */}
      <section className="w-full bg-white py-10">
        <div
          className="relative w-full max-w-7xl mx-auto h-[380px] md:h-[420px] overflow-hidden rounded-2xl shadow-2xl"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className="flex h-full transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {slides.map((slide) => (
              <div key={slide.id} className="min-w-full h-full relative flex items-center justify-center">
                <Image
                  src={slide.bgImage}
                  alt={slide.title}
                  fill
                  className="object-cover brightness-[0.85]"
                  priority={slide.id === 1}
                />
                <div className={`absolute inset-0 ${slide.overlay || "bg-black/40"}`} />
                <div className="relative z-10 text-center text-white px-6 max-w-2xl">
                  <h2 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">{slide.title}</h2>
                  <p className="text-lg md:text-2xl mb-8 drop-shadow-md">{slide.description}</p>
                  <button className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">
                    {slide.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? "bg-white scale-125 shadow-lg" : "bg-white/50 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 2. BEST COUPONS */}
      <section className="bg-[#f5f5f5] py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-10">
            The Best Coupons, Promo Codes & Cash Back Offers
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* eBay */}
            <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 flex justify-between items-center">
              <div>
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/4/4b/EBay_logo.svg"
                  alt="eBay"
                  width={90}
                  height={40}
                  className="mb-4"
                />
                <p className="text-gray-700 mb-4 text-sm">2% Cash Back for Purchases Sitewide</p>
                <button className="font-semibold text-black underline hover:text-red-600">SHOP NOW</button>
              </div>
              <div className="flex gap-3">
                <div className="w-20 h-28 relative rounded-lg overflow-hidden bg-gray-100">
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500 text-xs">Image 1</div>
                </div>
                <div className="w-20 h-28 relative rounded-lg overflow-hidden bg-gray-100">
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500 text-xs">Image 2</div>
                </div>
              </div>
            </div>

            {/* BarkBox */}
            <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 flex justify-between items-center">
              <div>
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/BarkBox_logo.svg/512px-BarkBox_logo.svg.png"
                  alt="BarkBox"
                  width={100}
                  height={40}
                  className="mb-4"
                />
                <p className="text-gray-700 mb-4 text-sm">6% Cash Back for Purchases Sitewide</p>
                <button className="font-semibold text-black underline hover:text-red-600">SHOP NOW</button>
              </div>
              <div className="w-32 h-32 relative rounded-xl overflow-hidden bg-gray-100">
                <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500 text-xs">BarkBox Image</div>
              </div>
            </div>

            {/* RetailMeNot */}
            <div className="bg-gradient-to-r from-purple-400 to-purple-500 rounded-2xl shadow-md hover:shadow-xl transition p-6 flex justify-between items-center text-white">
              <div>
                <div className="text-3xl font-bold mb-4">R</div>
                <p className="mb-4 text-sm">Guaranteed Cash Back from 4,000+ Brands</p>
                <button className="font-semibold underline hover:opacity-90">SHOP RETAILMENOT</button>
              </div>
              <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center text-center text-sm font-bold">
                4,000+ <br /> BRANDS
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CHA-CHING */}
      <section className="bg-white py-12 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">CHA-CHING</h2>
              <p className="text-xl font-medium text-gray-700 mt-1">Cash Back At Stores We Love</p>
            </div>
            <a href="#" className="text-blue-600 font-semibold hover:underline mt-4 md:mt-0">
              ALL CASH BACK →
            </a>
          </div>

          <div className="overflow-x-auto pb-4 scrollbar-hide">
            <div className="flex gap-6 md:gap-8 min-w-max">
              {cashbackStores.map((store, idx) => (
                <div key={idx} className="flex flex-col items-center text-center min-w-[120px] md:min-w-[140px]">
                  <div className={`w-24 h-24 md:w-32 md:h-32 rounded-full ${store.color} flex items-center justify-center shadow-md hover:shadow-lg transition-shadow`}>
                    <Image src={store.logoSrc} alt={`${store.name} logo`} width={100} height={60} className="object-contain px-2" />
                  </div>
                  <p className="text-sm md:text-base font-bold mt-3 text-gray-800">{store.cashback}</p>
                  <p className="text-xs md:text-sm text-gray-600 mt-1">Cash Back</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. CVS INFLUENCER SECTION */}
      <section className="w-full bg-white py-10">
        <div className="mx-auto flex max-w-7xl overflow-hidden rounded-xl border border-gray-200">
          {/* LEFT SIDE */}
          <div className="relative flex w-full md:w-2/3 bg-purple-500">
            {/* Influencer Image */}
            <div className="relative w-1/2">
              <Image
                src="/influencer.png" // Place your image in /public/influencer.png
                alt="Influencer"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Purple Content */}
            <div className="flex w-1/2 flex-col justify-center px-8 text-white">
              <h3 className="text-lg font-semibold tracking-wide">
                3 Influencer Approved
              </h3>
              <div className="mt-2 flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-purple-600">
                  ▶
                </span>
                <h1 className="text-5xl font-extrabold leading-none">
                  CVS
                </h1>
              </div>
              <h2 className="mt-2 text-4xl font-extrabold">
                Deals
              </h2>
              <p className="mt-2 text-xl font-semibold">
                All Under $11
              </p>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex w-full flex-col justify-center px-10 py-8 md:w-1/3 bg-white">
            <h2 className="text-xl font-bold text-gray-900">
              3-Influencer Approved CVS Deals — All Under $11
            </h2>
            <p className="mt-3 text-gray-600">
              Unlock exclusive savings by signing up for ExtraCare
            </p>
            <button className="mt-4 w-fit border-b-2 border-black font-semibold text-black hover:opacity-70 transition">
              CLICK TO WATCH VIDEO
            </button>
          </div>
        </div>
      </section>

      {/* 5. SPRING SAVECATION BANNER */}
      <section className="w-full py-4 md:py-6 bg-[#FBBF24] text-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative flex items-center justify-between h-16 md:h-20 rounded-lg overflow-hidden shadow-md border border-black/20">
            <div className="absolute inset-0 bg-[#FBBF24]" />

            {/* Left */}
            <div className="relative z-10 flex items-center gap-3 pl-4 md:pl-6">
              <div className="bg-black text-white px-4 py-1.5 rounded text-sm md:text-base font-bold uppercase tracking-wide">
                TAKING OFF 3/5
              </div>
              <div className="bg-black text-white px-4 py-1.5 rounded text-sm md:text-base font-bold uppercase">
                UP TO 70% OFF
              </div>
            </div>

            {/* Center */}
            <div className="relative z-10 flex-1 text-center font-black text-2xl md:text-4xl tracking-[0.15em] uppercase drop-shadow-md">
              <span className="inline-block mx-1">S</span>
              <span className="inline-block mx-1">P</span>
              <span className="inline-block mx-1">R</span>
              <span className="inline-block mx-1">I</span>
              <span className="inline-block mx-1">N</span>
              <span className="inline-block mx-1">G</span>
              <span className="inline-block mx-2">■</span>
              <span className="inline-block mx-1">S</span>
              <span className="inline-block mx-1">A</span>
              <span className="inline-block mx-1">V</span>
              <span className="inline-block mx-1">E</span>
              <span className="inline-block mx-1">C</span>
              <span className="inline-block mx-1">A</span>
              <span className="inline-block mx-1">T</span>
              <span className="inline-block mx-1">I</span>
              <span className="inline-block mx-1">O</span>
              <span className="inline-block mx-1">N</span>
            </div>

            {/* Right */}
            <div className="relative z-10 flex items-center gap-4 pr-4 md:pr-6">
              {/* USA */}
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/90 flex items-center justify-center text-xs font-bold border-2 border-black/50">
                USA
              </div>

              {/* Santiago */}
              <div className="flex flex-col items-center text-xs md:text-sm font-bold">
                <div className="text-center">SANTIAGO</div>
                <div className="text-[10px] opacity-80">3/5 – 3/26</div>
              </div>

              {/* Explore More */}
              <button className="bg-black text-white px-5 py-2 rounded-full text-sm md:text-base font-bold hover:bg-gray-900 transition">
                Explore More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SPRING BREAK PREP DEALS */}
      <section className="py-10 md:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 md:mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Spring Break Prep Deals
            </h2>
            <a href="#" className="text-blue-600 font-semibold hover:underline mt-2 md:mt-0">
              ALL SPRING BREAK PREP DEALS →
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
            {/* Zales */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition border border-gray-200 overflow-hidden text-center">
              <div className="bg-gradient-to-br from-orange-400 to-red-500 p-5 md:p-6">
                <span className="text-white text-4xl md:text-5xl font-extrabold">🔥50%</span>
                <span className="text-white text-xl md:text-2xl font-bold ml-1">Off</span>
              </div>
              <div className="p-4 md:p-5">
                <p className="text-xl md:text-2xl font-bold text-gray-900">ZALES</p>
                <p className="text-sm text-gray-600 mt-2 leading-tight">
                  Save Up To 50% Off Select Clearance
                </p>
                <p className="text-xs text-gray-500 mt-2">ZALES</p>
              </div>
            </div>

            {/* Talbots */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition border border-gray-200 overflow-hidden text-center">
              <div className="bg-black p-5 md:p-6">
                <span className="text-white text-4xl md:text-5xl font-extrabold">🔥30%</span>
                <span className="text-white text-xl md:text-2xl font-bold ml-1">Off</span>
              </div>
              <div className="p-4 md:p-5">
                <p className="text-xl md:text-2xl font-bold text-gray-900">TALBOTS</p>
                <p className="text-sm text-gray-600 mt-2 leading-tight">
                  30% Off Regular Price T By Talbots +5% Back
                </p>
                <p className="text-xs text-gray-500 mt-2">Sponsored</p>
              </div>
            </div>

            {/* Karen Millen */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition border border-gray-200 overflow-hidden text-center">
              <div className="bg-gradient-to-br from-yellow-400 to-orange-500 p-5 md:p-6">
                <span className="text-white text-4xl md:text-5xl font-extrabold">🔥20%</span>
                <span className="text-white text-xl md:text-2xl font-bold ml-1">Off</span>
              </div>
              <div className="p-4 md:p-5">
                <p className="text-xl md:text-2xl font-bold text-gray-900">KAREN MILLEN</p>
                <p className="text-sm text-gray-600 mt-2 leading-tight">
                  48 Hours! 48% Off Sitewide + Extra 20% Off
                </p>
                <p className="text-xs text-gray-500 mt-2">Coupon code</p>
              </div>
            </div>

            {/* Old Navy */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition border border-gray-200 overflow-hidden text-center">
              <div className="bg-blue-700 p-5 md:p-6">
                <span className="text-white text-4xl md:text-5xl font-extrabold">🔥20%</span>
                <span className="text-white text-xl md:text-2xl font-bold ml-1">Off</span>
              </div>
              <div className="p-4 md:p-5">
                <p className="text-xl md:text-2xl font-bold text-gray-900">OLD NAVY</p>
                <p className="text-sm text-gray-600 mt-2 leading-tight">
                  20% Off Purchase
                </p>
                <p className="text-xs text-gray-500 mt-2">Coupon code</p>
              </div>
            </div>

            {/* Macy's */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition border border-gray-200 overflow-hidden text-center">
              <div className="bg-red-600 p-5 md:p-6">
                <span className="text-white text-4xl md:text-5xl font-extrabold">🔥25%</span>
                <span className="text-white text-xl md:text-2xl font-bold ml-1">Off</span>
              </div>
              <div className="p-4 md:p-5">
                <p className="text-xl md:text-2xl font-bold text-gray-900">MACY'S</p>
                <p className="text-sm text-gray-600 mt-2 leading-tight">
                  25% Off With Macy's Text Sign Up
                </p>
                <p className="text-xs text-gray-500 mt-2">Coupon code</p>
              </div>
            </div>

            {/* Sponsored Walmart */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition border border-gray-200 overflow-hidden text-center">
              <div className="bg-yellow-400 p-5 md:p-6">
                <span className="text-black text-4xl md:text-5xl font-extrabold">🔥$20</span>
                <span className="text-black text-xl md:text-2xl font-bold ml-1">Off</span>
              </div>
              <div className="p-4 md:p-5">
                <p className="text-xl md:text-2xl font-bold text-gray-900">WALMART</p>
                <p className="text-sm text-gray-600 mt-2 leading-tight">
                  $20 Off Sitewide
                </p>
                <p className="text-xs text-gray-500 mt-2">Sponsored</p>
              </div>
            </div>

            {/* Sponsored Target */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition border border-gray-200 overflow-hidden text-center">
              <div className="bg-red-600 p-5 md:p-6">
                <span className="text-white text-4xl md:text-5xl font-extrabold">🔥+2%</span>
                <span className="text-white text-xl md:text-2xl font-bold ml-1">Back</span>
              </div>
              <div className="p-4 md:p-5">
                <p className="text-xl md:text-2xl font-bold text-gray-900">TARGET</p>
                <p className="text-sm text-gray-600 mt-2 leading-tight">
                  2% Cash Back For Purchases Sitewide
                </p>
                <p className="text-xs text-gray-500 mt-2">Sponsored</p>
              </div>
            </div>

            {/* On Cloud */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition border border-gray-200 overflow-hidden text-center">
              <div className="bg-black p-5 md:p-6">
                <span className="text-white text-4xl md:text-5xl font-extrabold">🔥20%</span>
                <span className="text-white text-xl md:text-2xl font-bold ml-1">Off</span>
              </div>
              <div className="p-4 md:p-5">
                <p className="text-xl md:text-2xl font-bold text-gray-900">ON CLOUD</p>
                <p className="text-sm text-gray-600 mt-2 leading-tight">
                  20% Off Sitewide
                </p>
                <p className="text-xs text-gray-500 mt-2">Coupon code</p>
              </div>
            </div>

            {/* FIGS */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition border border-gray-200 overflow-hidden text-center">
              <div className="bg-gray-800 p-5 md:p-6">
                <span className="text-white text-4xl md:text-5xl font-extrabold">🔥20%</span>
                <span className="text-white text-xl md:text-2xl font-bold ml-1">Off</span>
              </div>
              <div className="p-4 md:p-5">
                <p className="text-xl md:text-2xl font-bold text-gray-900">FIGS</p>
                <p className="text-sm text-gray-600 mt-2 leading-tight">
                  20% Off 1st Order
                </p>
                <p className="text-xs text-gray-500 mt-2">Coupon code</p>
              </div>
            </div>

            {/* Kohl's */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition border border-gray-200 overflow-hidden text-center">
              <div className="bg-red-700 p-5 md:p-6">
                <span className="text-white text-4xl md:text-5xl font-extrabold">🔥15%</span>
                <span className="text-white text-xl md:text-2xl font-bold ml-1">Off</span>
              </div>
              <div className="p-4 md:p-5">
                <p className="text-xl md:text-2xl font-bold text-gray-900">KOHL'S</p>
                <p className="text-sm text-gray-600 mt-2 leading-tight">
                  Extra 15% Off Next Purchase With Kohl's Text Sign Up
                </p>
                <p className="text-xs text-gray-500 mt-2">Coupon code</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. THE REAL DEAL by RetailMeNot */}
      <section className="py-12 md:py-16 bg-[#F0FDFD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title */}
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-5xl font-extrabold text-purple-700 tracking-wide relative inline-block">
              THE REAL DEAL
              <span className="absolute -bottom-3 right-0 text-xl md:text-2xl text-purple-500 font-bold">
                by RetailMeNot
              </span>
              <span className="absolute -top-4 left-0 text-purple-400 text-2xl md:text-4xl">✦</span>
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center lg:items-start">
            {/* Left - Main Blue Card */}
            <div className="relative w-full lg:w-3/5 bg-blue-600 rounded-3xl overflow-hidden shadow-2xl p-8 md:p-12 text-white min-h-[400px] md:min-h-[480px]">
              {/* Floating money bills */}
              <div className="absolute inset-0 pointer-events-none opacity-30">
                <div className="absolute top-16 left-16 transform -rotate-12">
                  <div className="w-28 h-14 bg-green-700 rounded-md shadow-lg" />
                </div>
                <div className="absolute bottom-24 right-24 transform rotate-12">
                  <div className="w-32 h-16 bg-green-600 rounded-md shadow-lg" />
                </div>
                <div className="absolute top-40 right-20 transform rotate-6">
                  <div className="w-24 h-12 bg-green-800 rounded-md shadow-lg" />
                </div>
              </div>

              {/* Badges */}
              <div className="relative z-10 flex flex-wrap gap-6 mb-8">
                <div className="relative w-36 h-36 md:w-44 md:h-44 bg-purple-400/80 rounded-full flex items-center justify-center text-center p-6 shadow-xl">
                  <span className="text-xl md:text-2xl font-bold">4,000+<br />BRANDS</span>
                  <div className="absolute -top-3 -right-3 w-10 h-10 bg-purple-300 rounded-full flex items-center justify-center text-sm">✦</div>
                </div>

                <div className="relative w-36 h-36 md:w-44 md:h-44 bg-pink-400/80 rounded-full flex items-center justify-center text-center p-6 shadow-xl">
                  <span className="text-xl md:text-2xl font-bold">20 Years<br />of Savings</span>
                  <div className="absolute -bottom-3 -left-3 w-10 h-10 bg-pink-300 rounded-full flex items-center justify-center text-sm">✦</div>
                </div>

                <div className="relative w-36 h-36 md:w-44 md:h-44 bg-purple-500/80 rounded-full flex items-center justify-center text-center p-6 shadow-xl">
                  <div className="text-xl md:text-2xl font-bold">RetailMeNot</div>
                </div>
              </div>

              {/* Main text */}
              <div className="relative z-10">
                <h3 className="text-4xl md:text-6xl font-black leading-tight mb-6 drop-shadow-2xl">
                  AVOID CHECKOUT LETDOWN
                </h3>
                <p className="text-3xl md:text-5xl font-extrabold leading-tight">
                  with Our Cash Back
                  <br />
                  Guarantee
                </p>
              </div>
            </div>

            {/* Right - 3 small cards */}
            <div className="w-full lg:w-2/5 space-y-6">
              {/* Card 1 */}
              <div className="bg-white rounded-2xl shadow-md p-5 flex gap-5 items-start">
                <div className="w-24 h-24 md:w-28 md:h-28 bg-green-50 rounded-xl overflow-hidden shrink-0">
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center text-xs text-gray-600 text-center p-2">
                    adidas / dress
                  </div>
                </div>
                <div>
                  <h4 className="text-base md:text-lg font-bold text-gray-900">
                    BEAT THE WINTER SLUMP
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    10 adidas Upgrades for Effortless Style
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-2xl shadow-md p-5 flex gap-5 items-start">
                <div className="w-24 h-24 md:w-28 md:h-28 bg-blue-50 rounded-xl overflow-hidden shrink-0">
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center text-xs text-gray-600 text-center p-2">
                    Pool / travel
                  </div>
                </div>
                <div>
                  <h4 className="text-base md:text-lg font-bold text-gray-900">
                    SPRING BREAK SPOTS
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Hotels.com Travel Deals
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-2xl shadow-md p-5 flex gap-5 items-start">
                <div className="w-24 h-24 md:w-28 md:h-28 bg-cyan-50 rounded-xl overflow-hidden shrink-0">
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center text-xs text-gray-600 text-center p-2">
                    Beach / vacation
                  </div>
                </div>
                <div>
                  <h4 className="text-base md:text-lg font-bold text-gray-900">
                    YOUR NEXT GETAWAY
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Expedia Deals
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. TODAY'S TOP DEALS PRESENTED BY AMAZON */}
      <section className="py-10 md:py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 md:mb-8">
            <div className="flex items-center gap-3">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
                alt="Amazon"
                width={40}
                height={40}
                className="shrink-0"
              />
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Today's Top Deals
              </h2>
              <span className="text-sm md:text-base text-gray-600 font-medium">
                PRESENTED BY AMAZON
              </span>
            </div>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mt-4 md:mt-0">
              <a href="#" className="text-blue-600 font-semibold hover:underline text-sm md:text-base">
                10% CASH BACK ON AMAZON DEVICES →
              </a>
              <button className="bg-gray-100 text-gray-800 px-5 py-2 rounded-full text-sm md:text-base font-medium hover:bg-gray-200 transition">
                View more deals
              </button>
            </div>
          </div>

          <div className="overflow-x-auto pb-6 scrollbar-hide">
            <div className="flex gap-4 md:gap-6 min-w-max">
              {/* Card 1 - Stanley */}
              <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition border border-gray-200 min-w-[220px] md:min-w-[260px] overflow-hidden">
                <div className="h-48 md:h-56 bg-gray-100 flex items-center justify-center">
                  <div className="text-gray-400 text-center p-4">Stanley Quencher</div>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl md:text-2xl font-bold">🔥34%</span>
                    <span className="text-lg md:text-xl font-bold text-gray-900">OFF</span>
                  </div>
                  <p className="text-sm md:text-base font-medium text-gray-800 line-clamp-2">
                    Stanley Quencher H2.0 FlowState Tumbler 30oz Insulated Stainless...
                  </p>
                  <button className="mt-3 text-blue-600 font-medium hover:underline text-sm md:text-base">
                    Check price
                  </button>
                </div>
              </div>

              {/* Card 2 - Fire TV */}
              <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition border border-gray-200 min-w-[220px] md:min-w-[260px] overflow-hidden">
                <div className="h-48 md:h-56 bg-gray-100 flex items-center justify-center">
                  <div className="text-gray-400 text-center p-4">Fire TV Stick</div>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl md:text-2xl font-bold">🔥50%</span>
                    <span className="text-lg md:text-xl font-bold text-gray-900">OFF</span>
                  </div>
                  <p className="text-sm md:text-base font-medium text-gray-800 line-clamp-2">
                    Amazon Fire TV Stick 4K Select
                  </p>
                  <button className="mt-3 text-blue-600 font-medium hover:underline text-sm md:text-base">
                    Check price
                  </button>
                </div>
              </div>

              {/* Card 3 - AirTag */}
              <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition border border-gray-200 min-w-[220px] md:min-w-[260px] overflow-hidden">
                <div className="h-48 md:h-56 bg-gray-100 flex items-center justify-center">
                  <div className="text-gray-400 text-center p-4">AirTag 4-Pack</div>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl md:text-2xl font-bold">🔥35%</span>
                    <span className="text-lg md:text-xl font-bold text-gray-900">OFF</span>
                  </div>
                  <p className="text-sm md:text-base font-medium text-gray-800 line-clamp-2">
                    Apple AirTag Tracker (4-Pack)
                  </p>
                  <button className="mt-3 text-blue-600 font-medium hover:underline text-sm md:text-base">
                    Check price
                  </button>
                </div>
              </div>

              {/* Card 4 - Samsung */}
              <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition border border-gray-200 min-w-[220px] md:min-w-[260px] overflow-hidden">
                <div className="h-48 md:h-56 bg-gray-100 flex items-center justify-center">
                  <div className="text-gray-400 text-center p-4">Samsung Galaxy</div>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl md:text-2xl font-bold">🔥24%</span>
                    <span className="text-lg md:text-xl font-bold text-gray-900">OFF</span>
                  </div>
                  <p className="text-sm md:text-base font-medium text-gray-800 line-clamp-2">
                    Samsung Galaxy S26 Ultra 6.9" 512GB Privacy Display...
                  </p>
                  <button className="mt-3 text-blue-600 font-medium hover:underline text-sm md:text-base">
                    Check price
                  </button>
                </div>
              </div>

              {/* Card 5 - ISTON */}
              <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition border border-gray-200 min-w-[220px] md:min-w-[260px] overflow-hidden">
                <div className="h-48 md:h-56 bg-gray-100 flex items-center justify-center">
                  <div className="text-gray-400 text-center p-4">ISTON Sunscreen</div>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl md:text-2xl font-bold">🔥</span>
                    <span className="text-lg md:text-xl font-bold text-gray-900">OFF</span>
                  </div>
                  <p className="text-sm md:text-base font-medium text-gray-800 line-clamp-2">
                    ISTON Sunscreen Tube
                  </p>
                  <button className="mt-3 text-blue-600 font-medium hover:underline text-sm md:text-base">
                    Check price
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. POPULAR CATEGORIES DROPDOWN */}
      <section className="py-8 md:py-12 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
            className="w-full flex justify-between items-center py-4 px-6 bg-gray-100 hover:bg-gray-200 rounded-xl transition text-left border border-gray-300"
          >
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">
              POPULAR CATEGORIES
            </h2>
            <span className="text-2xl md:text-3xl font-bold text-gray-600">
              {isCategoriesOpen ? "−" : "+"}
            </span>
          </button>

          {isCategoriesOpen && (
            <div className="mt-6 px-4 md:px-6 pb-6">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
                {[
                  "Baby", "Beauty", "Books", "Car Rentals", "Cell Phones",
                  "Clothing", "Cosmetics", "Electronics", "Fast Food", "Flights",
                  "Flowers", "Food Delivery", "Furniture", "Home Improvement", "Hotels",
                  "Jewelry", "Movie Theaters", "Pets", "Photo", "Photo Prints",
                  "Pizza", "Restaurants", "Shoes", "Toys", "Toys",
                  "Travel", "TV & Home Theater", "Video Games"
                ].map((category) => (
                  <a
                    key={category}
                    href="#"
                    className="text-gray-700 hover:text-blue-600 text-base md:text-lg font-medium transition py-2 px-3 rounded-lg hover:bg-gray-50"
                  >
                    {category}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 10. POPULAR STORES DROPDOWN */}
      <section className="py-8 md:py-12 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => setIsStoresOpen(!isStoresOpen)}
            className="w-full flex justify-between items-center py-4 px-6 bg-gray-100 hover:bg-gray-200 rounded-xl transition text-left border border-gray-300"
          >
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">
              POPULAR STORES
            </h2>
            <span className="text-2xl md:text-3xl font-bold text-gray-600">
              {isStoresOpen ? "−" : "+"}
            </span>
          </button>

          {isStoresOpen && (
            <div className="mt-6 px-4 md:px-6 pb-6">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
                {[
                  "Kohls", "Macys", "Target", "Bed Bath & Beyond", "Papa Johns",
                  "Amazon", "Shein", "Bath & Body Works", "Ulta", "Edible Arrangements",
                  "American Eagle", "Vistaprint", "Happiest Baby", "The Home Depot", "ASOS",
                  "Sephora", "Shutterfly", "Express", "Priceline", "Staples",
                  "Turbo Tax", "Office Depot", "Lowes", "Carters", "Bloomingdales",
                  "Booking.com", "Saks Fifth Avenue", "Expedia", "Pretty Little Thing", "Saks Off Fifth",
                  "Coach Outlet", "J. Crew", "Journeys", "Build.com", "Orbitz",
                  "NY & Company", "Hoka One One", "StubHub", "Aeropostale", "Travelocity",
                  "Dell", "Zales", "Ancestry.com", "Mens Wearhouse", "Zoro",
                  "Lenovo", "AT&T Wireless", "Net-A-Porter", "Carhartt", "Wayfair"
                ].map((store) => (
                  <a
                    key={store}
                    href="#"
                    className="text-gray-700 hover:text-blue-600 text-base md:text-lg font-medium transition py-2 px-3 rounded-lg hover:bg-gray-50"
                  >
                    {store}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 3 Ways To Save With RetailMeNot */}
      <section className="w-full bg-white py-10 md:py-12 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-left text-gray-900 mb-8 md:mb-10">
            3 Ways To Save With RetailMeNot
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 flex flex-col items-center text-center border border-gray-200">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center mb-5 shadow-sm">
                <span className="text-4xl">⚡</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">CHA-CHING</h3>
              <p className="text-base text-gray-600 mb-5 leading-relaxed">
                Cash back users earn up to 10% cash back per order
              </p>
              <a
                href="#"
                className="text-blue-600 font-semibold text-base hover:text-blue-800 hover:underline transition"
              >
                BROWSE CASH BACK
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 flex flex-col items-center text-center border border-gray-200">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center mb-5 shadow-sm">
                <span className="text-4xl">📱</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">SAVE ON THE GO</h3>
              <p className="text-base text-gray-600 mb-5 leading-relaxed">
                Get app-only offers and the best of RetailMeNot
              </p>
              <div className="flex items-center gap-6 text-base font-semibold">
                <a href="#" className="text-blue-600 hover:underline">iOS</a>
                <span className="text-gray-400 font-normal">|</span>
                <a href="#" className="text-blue-600 hover:underline">ANDROID</a>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 flex flex-col items-center text-center border border-gray-200">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center mb-5 shadow-sm">
                <span className="text-4xl">🔍</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">SAVE LIKE MAGIC</h3>
              <p className="text-base text-gray-600 mb-5 leading-relaxed">
                Automatically apply codes + cash back when you shop online
              </p>
              <a
                href="#"
                className="text-blue-600 font-semibold text-base hover:text-blue-800 hover:underline transition"
              >
                RETAILMENOT EXTENSION
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="w-full bg-white py-12 md:py-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 md:mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center text-left py-4 px-2 hover:bg-gray-50 transition rounded-lg"
                >
                  <span className="text-lg md:text-xl font-medium text-gray-900">
                    {item.question}
                  </span>
                  <span className="text-2xl font-bold text-gray-500">
                    {openFaqIndex === index ? "−" : "+"}
                  </span>
                </button>

                {openFaqIndex === index && (
                  <div className="mt-2 px-2 pb-4 text-gray-700 text-base leading-relaxed">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          <p className="mt-10 text-gray-600 text-base md:text-lg leading-relaxed text-center md:text-left">
            RetailMeNot helps you save money while shopping online and in-store at your favorite retailers. Whether you're looking for a promo code, a coupon, a free shipping offer or the latest sales, we're constantly verifying and updating our best offers and deals.
          </p>
        </div>
      </section>
    </main>
  );
}