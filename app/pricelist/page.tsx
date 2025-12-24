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
    <div className="bg-hyundai-sand min-h-screen">
      {/* HEADER */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/assets/backgroud/hyundai-simprug.jpeg" alt="Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-hyundai-navy/90 backdrop-blur-sm"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-white">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">
            Pricelist <span className="text-hyundai-blue">{new Date().getFullYear()}</span>
          </h1>
          <p className="mt-4 font-light text-gray-300">Daftar harga OTR Jakarta terbaru dan terlengkap.</p>
        </div>
      </section>

      {/* FILTER BAR */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-20 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-3 overflow-x-auto pb-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-6 py-3 text-[10px] font-black uppercase tracking-widest border transition-all flex items-center gap-2 rounded-sm ${
                  activeFilter === cat.id
                    ? "bg-hyundai-navy text-white border-hyundai-navy"
                    : "bg-white text-hyundai-navy border-gray-200 hover:border-hyundai-navy"
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
              className="w-full bg-hyundai-sand border-none px-6 py-3 pl-10 text-[11px] font-bold uppercase outline-none focus:ring-1 focus:ring-hyundai-blue text-hyundai-dark"
            />
            <i className="fa-solid fa-magnifying-glass absolute left-4 top-3.5 text-gray-400"></i>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white group border border-gray-100 hover:shadow-2xl transition-all duration-500 flex flex-col rounded-sm">
              <div className="p-10 aspect-[16/10] bg-gray-50 relative flex items-center justify-center">
                <img src={product.image} alt={product.name} className="w-full object-contain group-hover:scale-110 transition-transform duration-700 relative z-10" />
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <p className="text-[9px] font-black text-hyundai-blue uppercase tracking-[0.2em] mb-1">{product.category}</p>
                <h3 className="text-2xl font-black text-hyundai-navy uppercase mb-6">Hyundai {product.name}</h3>

                <div className="pt-6 border-t border-gray-100 mt-auto flex justify-between items-center">
                  <div>
                    <p className="text-[9px] text-gray-400 uppercase font-bold mb-1">Harga Mulai</p>
                    <p className="text-lg font-black text-hyundai-navy">{product.price}</p>
                  </div>
                  <a href={`${SITE_CONFIG.WHATSAPP_LINK}?text=Halo, tanya ${product.name}`} className="w-10 h-10 bg-hyundai-navy text-white flex items-center justify-center hover:bg-hyundai-blue transition-colors">
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
