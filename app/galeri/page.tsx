"use client";

import { useState } from "react";

export default function GaleriPage() {
  const [active, setActive] = useState("all");

  const items = [
    { id: 1, type: "delivery", img: "https://placehold.co/600x800/002c5f/FFF?text=Serah+Terima+1" },
    { id: 2, type: "event", img: "https://placehold.co/600x800/00aad2/FFF?text=Pameran+Showroom" },
    { id: 3, type: "delivery", img: "https://placehold.co/600x800/002c5f/FFF?text=Serah+Terima+2" },
    { id: 4, type: "delivery", img: "https://placehold.co/600x800/002c5f/FFF?text=Serah+Terima+3" },
  ];

  return (
    <div className="bg-hyundai-sand min-h-screen pb-20 overflow-hidden">
      <section className="relative h-80 flex items-center justify-center overflow-hidden">
        <img src="/assets/backgroud/hyundai-simprug.jpeg" className="absolute inset-0 w-full h-full object-cover" alt="Showroom" />
        <div className="absolute inset-0 bg-hyundai-navy/90"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">GALERI MOMEN</h1>
          <p className="text-hyundai-blue font-bold tracking-[0.4em] text-[10px] mt-4 uppercase">Kebahagiaan Konsumen Hyundai</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex justify-center gap-8 mb-16">
          {["all", "delivery", "event"].map(cat => (
            <button key={cat} onClick={() => setActive(cat)} className={`text-[10px] font-black uppercase tracking-[0.3em] pb-2 border-b-2 transition-all ${active === cat ? "border-hyundai-blue text-hyundai-navy" : "border-transparent text-gray-400 hover:text-hyundai-navy"}`}>
              {cat === "all" ? "LIHAT SEMUA" : cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {items.filter(i => active === "all" || i.type === active).map(item => (
            <div key={item.id} className="aspect-[3/4] bg-white overflow-hidden relative group cursor-pointer border border-gray-100 shadow-sm">
              <img src={item.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Galeri" />
              <div className="absolute inset-0 bg-hyundai-navy/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-6 text-center">
                <p className="text-white text-[10px] font-black uppercase tracking-widest border border-white/30 px-4 py-2">Lihat Foto</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
