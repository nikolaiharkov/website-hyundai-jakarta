"use client";

import { useState, useMemo } from "react";
import { PRODUCTS } from "../../lib/products";
import { SITE_CONFIG } from "../../lib/config";

export default function PricelistPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  const categories = [
    { id: "all", name: "All Models" },
    { id: "MPV", name: "MPV" },
    { id: "SUV", name: "SUV" },
    { id: "Electric", name: "EV" },
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
      {/* Header with SVG Pattern */}
      <section className="bg-hyundai-navy text-white pt-32 pb-20 relative overflow-hidden">
        <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none">
          <svg width="400" height="400" viewBox="0 0 100 100"><circle cx="100" cy="100" r="100" fill="white"/></svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight uppercase">Pricelist</h1>
          <p className="text-gray-400 mt-4 max-w-xl font-light leading-relaxed">
            Daftar harga On The Road (OTR) Jakarta terbaru. Temukan kendaraan Hyundai yang sesuai dengan gaya hidup dan kebutuhan masa depan Anda.
          </p>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="py-12 border-b border-gray-200 bg-white sticky top-20 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-6 py-2 text-[10px] font-bold uppercase tracking-widest border transition-all whitespace-nowrap ${
                  activeFilter === cat.id
                    ? "bg-hyundai-navy text-white border-hyundai-navy"
                    : "bg-transparent text-hyundai-text border-gray-200 hover:border-hyundai-navy"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="CARI MODEL..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-hyundai-sand border-none px-5 py-3 text-xs font-bold uppercase tracking-wider focus:ring-2 focus:ring-hyundai-blue outline-none"
            />
            <svg className="w-4 h-4 absolute right-4 top-3.5 text-hyundai-subtext" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </section>

      {/* Product List */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white group overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500 flex flex-col">
              <div className="p-8 aspect-[16/10] flex items-center justify-center bg-gray-50 relative overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full object-contain group-hover:scale-110 transition-transform duration-700 z-10" />
                {/* Decorative background SVG for card */}
                <div className="absolute inset-0 z-0 opacity-50 flex items-center justify-center pointer-events-none">
                   <svg width="80%" height="80%" viewBox="0 0 100 100" className="text-gray-200"><rect width="100" height="100" fill="none" stroke="currentColor" strokeWidth="0.5"/></svg>
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <p className="text-[10px] font-bold text-hyundai-blue uppercase tracking-[0.2em] mb-1">{product.category}</p>
                <h3 className="text-2xl font-extrabold text-hyundai-navy uppercase tracking-tight mb-6">Hyundai {product.name}</h3>

                <div className="pt-6 border-t border-gray-100 mt-auto flex justify-between items-center">
                  <div>
                    <p className="text-[10px] text-hyundai-subtext uppercase font-bold tracking-widest mb-1">Starting From</p>
                    <p className="text-lg font-bold text-hyundai-navy">{product.price}</p>
                  </div>
                  <a
                    href={`${SITE_CONFIG.WHATSAPP_LINK}?text=Halo Alfried, saya tertarik dengan Hyundai ${product.name}`}
                    className="p-3 bg-hyundai-navy text-white hover:bg-hyundai-blue transition-colors rounded-sm"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
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
