"use client";

import { useState } from "react";

interface GalleryItem {
  id: number;
  title: string;
  category: "delivery" | "event";
  image: string;
}

export default function GaleriPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedImg, setSelectedImg] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    { id: 1, title: "Handover Stargazer Prime", category: "delivery", image: "https://placehold.co/600x800/002c5f/FFF?text=Delivery+1" },
    { id: 2, title: "Hyundai Exhibition Mall", category: "event", image: "https://placehold.co/600x800/00aad2/FFF?text=Event+1" },
    { id: 3, title: "Unit Creta IVT Delivery", category: "delivery", image: "https://placehold.co/600x800/002c5f/FFF?text=Delivery+2" },
    { id: 4, title: "Ioniq 5 Signature Delivery", category: "delivery", image: "https://placehold.co/600x800/002c5f/FFF?text=Delivery+3" },
    { id: 5, title: "Community Test Drive", category: "event", image: "https://placehold.co/600x800/00aad2/FFF?text=Event+2" },
    { id: 6, title: "Palisade Signature Handover", category: "delivery", image: "https://placehold.co/600x800/002c5f/FFF?text=Delivery+4" },
  ];

  const filteredItems = activeFilter === "all"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <div className="bg-hyundai-sand min-h-screen">
      {/* Header with Background Pattern */}
      <section className="bg-hyundai-navy text-white pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="dotPattern" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="white" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#dotPattern)" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter uppercase">Gallery</h1>
          <p className="text-gray-400 mt-4 max-w-xl font-light">Kumpulan momen berharga bersama konsumen setia Hyundai Jakarta.</p>
        </div>
      </section>

      {/* Filter Navigation */}
      <section className="py-10 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 flex justify-start gap-8">
          {["all", "delivery", "event"].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`text-[10px] font-black uppercase tracking-[0.3em] pb-2 border-b-2 transition-all ${
                activeFilter === cat ? "border-hyundai-blue text-hyundai-navy" : "border-transparent text-gray-400 hover:text-hyundai-navy"
              }`}
            >
              {cat === "all" ? "Show All" : cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grid Layout */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImg(item)}
              className="group relative aspect-[3/4] overflow-hidden bg-gray-200 cursor-pointer"
            >
              <img src={item.image} alt={item.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-hyundai-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <p className="text-[10px] font-bold text-hyundai-blue uppercase tracking-widest mb-1">{item.category}</p>
                <p className="text-white text-sm font-bold uppercase tracking-tight">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImg && (
        <div className="fixed inset-0 z-[100] bg-hyundai-navy/95 flex items-center justify-center p-6" onClick={() => setSelectedImg(null)}>
          <div className="relative max-w-4xl w-full">
            <img src={selectedImg.image} className="w-full h-auto max-h-[80vh] object-contain shadow-2xl" />
            <div className="mt-6 text-center text-white">
              <p className="text-xs font-bold uppercase tracking-[0.4em] text-hyundai-blue mb-2">{selectedImg.category}</p>
              <h3 className="text-xl font-bold uppercase tracking-tight">{selectedImg.title}</h3>
            </div>
            <button className="absolute -top-12 right-0 text-white hover:text-hyundai-blue">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
