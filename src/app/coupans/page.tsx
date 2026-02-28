'use client';

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const slides = [
  {
    id: 1,
    title: "7% Cash Back for Purchases Sitewide",
    subtitle: "at Zoro",
    leftImage: "/images/slide1-left.jpg",
    rightImage: "/images/slide1-right.jpg",
  },
  {
    id: 2,
    title: "10% Cash Back on Tools",
    subtitle: "Limited Time Offer",
    leftImage: "/images/slide2-left.jpg",
    rightImage: "/images/slide2-right.jpg",
  },
];

export default function PromoSlider() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full max-w-6xl mx-auto mt-10">
      
      <div className="relative flex items-center bg-gray-100 rounded-[30px] overflow-hidden min-h-[320px]">
        
        {/* Left Image */}
        <div className="relative w-1/3 h-[320px] hidden md:block">
          <Image
            src={slides[current].leftImage}
            alt="Left"
            fill
            className="object-cover"
          />
        </div>

        {/* Center Content */}
        <div className="w-full md:w-1/3 px-6 md:px-10 py-8">
          <h2 className="text-xl md:text-2xl font-semibold mb-2">
            {slides[current].title}
          </h2>
          <p className="text-gray-600 mb-4">
            {slides[current].subtitle}
          </p>
          <button className="bg-black text-white px-5 py-2 text-sm tracking-wide">
            SHOP NOW
          </button>
        </div>

        {/* Right Image */}
        <div className="relative w-1/3 h-[320px] hidden md:block">
          <Image
            src={slides[current].rightImage}
            alt="Right"
            fill
            className="object-cover"
          />
        </div>

        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2 h-2 rounded-full cursor-pointer transition ${
              index === current ? "bg-black" : "bg-gray-300"
            }`}
          />
        ))}
      </div>

    </div>
  );
}