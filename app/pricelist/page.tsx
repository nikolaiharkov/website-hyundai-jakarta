"use client";

import { useState, useMemo } from "react";
import { PRODUCTS } from "../../lib/products";
import { SITE_CONFIG } from "../../lib/config";

export default function PricelistPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  const categories = [
    { id: "all", name: "Semua", icon: "fa-solid fa-border-all" },
    { id: "MPV", name: "MPV", icon: "fa-solid fa-people-group" },
    { id: "SUV", name: "SUV", icon: "fa-solid fa-car-side" },
    { id: "Electric", name: "EV", icon: "fa-solid fa-bolt" },
  ];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeFilter === "all" || product.category.includes(activeFilter);
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeFilter]);

  return (
    <div className="bg-hyundai-light min-h-screen">
      {/* HEADER DENGAN BLUE OVERLAY */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/assets/backgroud/hyundai-simprug.jpeg" alt="Background" className="w-full h-full object-cover" />
          {/* Overlay Biru (Sesuai Referensi Home) */}
          <div className="absolute inset-0 bg-gradient-to-r from-hyundai-primary/95 via-hyundai-primary/80 to-transparent"></div>
        </div>
        <div className="max-w-[1400px] mx-auto px-6 relative z-10 text-white">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">
            Pricelist <span className="text-blue-300">{new Date().getFullYear()}</span>
          </h1>
          <p className="mt-4 font-light text-gray-200 max-w-xl">Daftar harga OTR Jakarta terbaru dan terlengkap untuk unit Hyundai impian Anda.</p>
        </div>
      </section>

      {/* FILTER BAR DENGAN HOVER BIRU */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-20 z-40 shadow-sm">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-3 overflow-x-auto pb-2 w-full md:w-auto no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-6 py-3 text-[10px] font-black uppercase tracking-widest border transition-all flex items-center gap-2 rounded-lg ${
                  activeFilter === cat.id
                    ? "bg-hyundai-primary text-white border-hyundai-primary shadow-md"
                    : "bg-white text-hyundai-primary border-gray-200 hover:bg-hyundai-primary hover:text-white hover:border-hyundai-primary"
                }`}
              >
                <i className={cat.icon}></i> {cat.name}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="CARI MODEL..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-hyundai-light border-none px-6 py-3 pl-10 text-[11px] font-bold uppercase outline-none focus:ring-1 focus:ring-hyundai-primary text-hyundai-dark rounded-lg"
            />
            <i className="fa-solid fa-magnifying-glass absolute left-4 top-3.5 text-gray-400"></i>
          </div>
        </div>
      </section>

      {/* PRODUCTS LIST */}
      <section className="py-16 max-w-[1400px] mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white group rounded-2xl shadow-lg overflow-hidden border border-gray-100 flex flex-col hover:shadow-2xl transition-all duration-500">
              <div className="p-10 aspect-[16/10] bg-gray-50 relative flex items-center justify-center overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full object-contain group-hover:scale-110 transition-transform duration-700 relative z-10" />
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <p className="text-[9px] font-black text-hyundai-accent uppercase tracking-[0.2em] mb-1">{product.category}</p>
                <h3 className="text-2xl font-black text-hyundai-primary uppercase mb-6">Hyundai {product.name}</h3>

                <div className="pt-6 border-t border-gray-100 mt-auto flex justify-between items-center">
                  <div>
                    <p className="text-[9px] text-gray-400 uppercase font-bold mb-1">Harga Mulai</p>
                    <p className="text-lg font-black text-hyundai-primary">{product.price}</p>
                  </div>
                  <a href={SITE_CONFIG.WHATSAPP_LINK} className="w-10 h-10 bg-hyundai-primary text-white rounded-full flex items-center justify-center hover:bg-hyundai-secondary transition-colors">
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
