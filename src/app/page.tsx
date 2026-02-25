'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Brands data
const brands = [
  { name: 'BERGDORF GOODMAN', logo: '/brands/bergdorf-goodman.png' },
  { name: 'REVOLVE', logo: '/brands/revolve.png' },
  { name: 'WAYFAIR', logo: '/brands/wayfair.png' },
  { name: 'SEPHORA', logo: '/brands/sephora.png' },
  { name: 'THE BAR', logo: '/brands/the-bar.png' },
  { name: 'Abercrombie & Fitch', logo: '/brands/abercrombie-fitch.png' },
  { name: 'TARGET', logo: '/brands/target.png' },
  { name: 'GUCCI', logo: '/brands/gucci.png' },
  { name: 'dibs.', logo: '/brands/dibs.png' },
  { name: 'TECOVAS', logo: '/brands/tecovas.png' },
  { name: 'ARITZIA', logo: '/brands/aritzia.png' },
  { name: 'ANTHROPOLOGIE', logo: '/brands/anthropologie.png' },
];

const duplicatedBrands = [...brands, ...brands, ...brands];

// Home Living Categories (tumhare items)
const homeLivingCategories = [
  { name: "Bedroom", icon: "🛏️" }, // Real mein: bed with pillows line icon (e.g. from search: bedroom bed line art)
  { name: "Kitchen", icon: "🍳" }, // whisk, spatula, etc. utensils line
  { name: "Lamp", icon: "💡" }, // table lamp line icon
  { name: "Home Accessories", icon: "🖼️" }, // vase/pillow/plant decor line
  { name: "Chest", icon: "🗄️" }, // chest of drawers line icon
  { name: "Closet", icon: "👗" }, // wardrobe/hanger line icon
  { name: "Sofa", icon: "🛋️" }, // sofa/couch line icon
  { name: "More", icon: "⋯" },
];

const slides = [
  {
    id: 1,
    image: '/hero/women-fashion-hero.jpg',
    title: "New Women's Collection",
    subtitle: "Discover trends that turn heads",
    button: "Shop Women",
    link: "/womens-fashion",
  },
  {
    id: 2,
    image: '/hero/men-style-hero.jpg',
    title: "Men's Premium Edit",
    subtitle: "Elevate everyday looks",
    button: "Shop Men",
    link: "/mens-fashion",
  },
  {
    id: 3,
    image: '/hero/home-living-hero.jpg',
    title: "Home & Living Inspo",
    subtitle: "Style your space effortlessly",
    button: "Shop Home",
    link: "/home",
  },
];

export default function HeroSlider() {
  return (
    <>
      {/* 1. Hero Slider */}
      <div className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            bulletClass: 'swiper-bullet',
            bulletActiveClass: 'swiper-bullet-active',
          }}
          navigation={true}
          className="h-full"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="relative w-full h-full">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  priority
                  className="object-cover brightness-90"
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 sm:px-8">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 md:mb-6 drop-shadow-lg">
                    {slide.title}
                  </h1>
                  <p className="text-lg sm:text-xl md:text-2xl mb-8 md:mb-10 drop-shadow-md max-w-2xl">
                    {slide.subtitle}
                  </p>
                  <Link
                    href={slide.link}
                    className="inline-block bg-white text-black font-semibold uppercase tracking-wider px-8 sm:px-12 py-4 rounded-full hover:bg-gray-200 transition-colors text-base md:text-lg shadow-xl"
                  >
                    {slide.button}
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <style jsx global>{`
          .swiper-bullet { width: 12px !important; height: 12px !important; background: white !important; opacity: 0.7 !important; border-radius: 50% !important; }
          .swiper-bullet-active { opacity: 1 !important; background: white !important; transform: scale(1.3) !important; }
          .swiper-button-next, .swiper-button-prev { color: white !important; background: rgba(0,0,0,0.3) !important; padding: 20px !important; border-radius: 50% !important; opacity: 0.8 !important; }
          .swiper-button-next:hover, .swiper-button-prev:hover { opacity: 1 !important; }
        `}</style>
      </div>

      {/* 2. Brands Logos Section */}
      <section className="py-12 md:py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-10">
            Search products from iconic and emerging brands
          </h2>
          <div className="relative">
            <div className="flex animate-marquee whitespace-nowrap">
              {duplicatedBrands.map((brand, index) => (
                <div key={`${brand.name}-${index}`} className="flex-shrink-0 mx-6 md:mx-10">
                  <div className="w-20 h-20 md:w-28 md:h-28 rounded-full overflow-hidden bg-gray-50 border border-gray-200 shadow-sm flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-md">
                    <Image src={brand.logo} alt={`${brand.name} logo`} width={80} height={80} className="object-contain p-3" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. New Home Living Categories Section – LIFSTYLE jaisa */}
      <section className="py-10 md:py-16 bg-gradient-to-b from-purple-950 to-purple-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 tracking-wide uppercase">
            HOME LIVING
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8">
            {homeLivingCategories.map((cat) => (
              <div
                key={cat.name}
                className="flex flex-col items-center justify-center bg-purple-800/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 aspect-square hover:bg-purple-700/80 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl group"
              >
                <div className="text-5xl md:text-7xl mb-4 group-hover:scale-110 transition-transform">
                  {cat.icon}
                </div>
                <span className="text-sm md:text-base font-medium text-center">
                  {cat.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}