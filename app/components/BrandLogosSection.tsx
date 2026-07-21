'use client';

import React, { useState } from 'react';

export default function BrandLogosSection() {
  const [activePageIndex, setActivePageIndex] = useState(2);

  const brands = [
    { name: 'zomato', font: 'font-serif font-black italic tracking-tight' },
    { name: 'boAt', font: 'font-sans font-black tracking-normal' },
    { name: 'SAMSUNG', font: 'font-sans font-bold tracking-widest' },
    { name: 'MPL', font: 'font-sans font-extrabold italic' },
    { name: 'mamaearth', font: 'font-sans font-medium lowercase tracking-wide' },
    { name: 'PHILIPS', font: 'font-sans font-bold tracking-wider' },
    { name: 'NYKAA', font: 'font-sans font-black tracking-widest' },
    { name: 'Coca-Cola', font: 'font-serif italic font-normal tracking-tight' },
    { name: 'AJIO', font: 'font-sans font-bold tracking-wider' },
    { name: 'amazon', font: 'font-sans font-bold tracking-tight lowercase' },
  ];

  return (
    <section className="py-10 lg:py-14 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      
      {/* Title Header */}
      <h3 className="text-sm sm:text-base font-semibold text-gray-500 mb-8 tracking-wide">
        Trusted by 1000+ Amazing Brands
      </h3>

      {/* Brand Logos Container */}
      <div className="glass-panel py-6 px-4 rounded-2xl border border-gray-200/85 bg-white/70 shadow-sm">
        
        {/* Desktop & Mobile Brand Logo Grid */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 md:gap-12 opacity-80 hover:opacity-100 transition-opacity">
          {brands.map((brand, idx) => (
            <div
              key={idx}
              className="text-gray-500 hover:text-gray-900 transition-colors duration-200 cursor-pointer select-none"
            >
              <span className={`text-lg sm:text-xl md:text-2xl ${brand.font}`}>
                {brand.name}
              </span>
            </div>
          ))}
        </div>

        {/* Mobile Carousel Page Indicators (Matching Image 2) */}
        <div className="flex items-center justify-center gap-1.5 mt-6 sm:hidden">
          {[0, 1, 2, 3, 4].map((index) => (
            <button
              key={index}
              onClick={() => setActivePageIndex(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activePageIndex === index
                  ? 'w-6 bg-purple-600 shadow-[0_0_8px_rgba(109,40,217,0.4)]'
                  : 'w-1.5 bg-gray-200'
              }`}
              aria-label={`Go to brand page ${index + 1}`}
            />
          ))}
        </div>

      </div>

    </section>
  );
}
