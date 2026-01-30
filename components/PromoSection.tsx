"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { promos } from "../lib/promos";

const PromoSection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Fungsi untuk menggeser slide
  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;

      if (direction === "right") {
        // Jika sudah di ujung kanan, kembali ke awal (Looping)
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scrollRef.current.scrollTo({
            left: scrollLeft + clientWidth,
            behavior: "smooth"
          });
        }
      } else {
        // Jika sudah di ujung kiri, lompat ke paling akhir
        if (scrollLeft <= 0) {
          scrollRef.current.scrollTo({ left: scrollWidth, behavior: "smooth" });
        } else {
          scrollRef.current.scrollTo({
            left: scrollLeft - clientWidth,
            behavior: "smooth"
          });
        }
      }
    }
  };

  // Efek Autoplay
  useEffect(() => {
    if (isPaused || selectedImage) return; // Berhenti jika di-hover atau lightbox terbuka

    const interval = setInterval(() => {
      scroll("right");
    }, 3000); // Geser setiap 3 detik

    return () => clearInterval(interval);
  }, [isPaused, selectedImage]);

  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-bold text-hyundai-primary tracking-tight">Promo Terbaru</h2>
            <p className="text-gray-500 mt-2 italic">Penawaran eksklusif Hyundai bulan ini.</p>
          </div>
          <div className="hidden md:flex gap-3">
            <button
              onClick={() => scroll("left")}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-hyundai-primary hover:text-white transition-all shadow-sm"
              aria-label="Previous Promo"
            >
              <i className="fa-solid fa-chevron-left"></i>
            </button>
            <button
              onClick={() => scroll("right")}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-hyundai-primary hover:text-white transition-all shadow-sm"
              aria-label="Next Promo"
            >
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </div>

        {/* Slider Container */}
        <div
          ref={scrollRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-6 pb-6 no-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {promos.map((promo) => (
            <div
              key={promo.id}
              className="min-w-full md:min-w-[calc(33.333%-1rem)] snap-center group relative cursor-pointer"
              onClick={() => setSelectedImage(promo.image)}
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-white shadow-lg border border-gray-100 transform transition-all duration-300 hover:shadow-2xl">
                <Image
                  src={promo.image}
                  alt={promo.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-hyundai-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="bg-white/95 w-14 h-14 rounded-full flex items-center justify-center text-hyundai-primary shadow-xl scale-75 group-hover:scale-100 transition-transform duration-300">
                    <i className="fa-solid fa-expand text-xl"></i>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="md:hidden text-center text-gray-400 text-xs mt-2 font-medium tracking-widest uppercase">
          <i className="fa-solid fa-hand-pointer mr-2 animate-pulse"></i> Geser Untuk Promo Lainnya
        </p>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] bg-hyundai-dark/95 flex items-center justify-center p-4 backdrop-blur-md transition-all duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-8 right-8 text-white hover:text-gray-300 transition-colors z-[110]"
            onClick={() => setSelectedImage(null)}
          >
            <i className="fa-solid fa-xmark text-4xl"></i>
          </button>
          <div className="relative w-full max-w-5xl h-[85vh] animate-in zoom-in duration-300">
            <Image
              src={selectedImage}
              alt="Promo Detail Zoom"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default PromoSection;
