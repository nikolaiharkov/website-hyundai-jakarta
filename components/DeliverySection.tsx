"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { deliveryData } from "@/lib/deliveryData";

export default function DeliverySection() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Logika Slider Otomatis
  useEffect(() => {
    const totalItems = deliveryData.length;
    // Pada desktop tampil 3, maka maksimal index adalah total - 3
    const maxIndex = totalItems - 3; 
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1));
    }, 3000); // Bergeser setiap 3 detik

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-hyundai-light overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-hyundai-primary uppercase tracking-tight">
            Keluarga Baru Hyundai Jakarta
          </h2>
          <p className="text-gray-500 mt-2">Dokumentasi kebahagiaan serah terima unit pelanggan kami.</p>
        </div>

        {/* Jendela Slider */}
        <div className="relative overflow-hidden rounded-2xl">
          <div 
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / (typeof window !== 'undefined' && window.innerWidth < 768 ? 1 : 3))}%)` }}
          >
            {deliveryData.map((item) => (
              <div 
                key={item.id} 
                className="w-full md:w-1/3 flex-shrink-0 px-2 md:px-3"
              >
                <div
                  className="relative aspect-[4/5] bg-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group"
                  onClick={() => setSelectedImg(item.image)}
                >
                  <Image
                    src={item.image}
                    alt="Dokumentasi Pengiriman Hyundai Jakarta"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-white/90 p-3 rounded-full text-hyundai-primary shadow-lg">
                      <i className="fa-solid fa-magnifying-glass-plus text-xl"></i>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* MODAL FULLSCREEN */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 md:p-10 backdrop-blur-sm"
          onClick={() => setSelectedImg(null)}
        >
          <button className="absolute top-6 right-6 text-white text-4xl z-[110]">
            <i className="fa-solid fa-xmark"></i>
          </button>
          
          <div className="relative w-full max-w-4xl h-full max-h-[85vh] flex items-center justify-center">
            <Image
              src={selectedImg}
              alt="Hyundai Jakarta Delivery Full"
              width={1200}
              height={1500}
              className="object-contain w-full h-full"
              priority
            />
          </div>
        </div>
      )}
    </section>
  );
}