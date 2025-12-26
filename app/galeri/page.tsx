"use client";

import { useState } from "react";
import Image from "next/image";

export default function GaleriPage() {
  const [active, setActive] = useState("all");

  const items = [
    { id: 1, type: "delivery", title: "Delivery Stargazer", img: "/foto-product/2130555e48_hyundai-stargazer-prime-creamy-white-pearl__1_-removebg-preview-5.png" },
    { id: 2, type: "event", title: "Pameran Mall", img: "/assets/backgroud/hyundai-simprug.jpeg" },
    { id: 3, type: "delivery", title: "Delivery Creta", img: "/foto-product/1cc4564e94_hyundai-creta-2022-color-451142-removebg-preview-1-1.png" },
    { id: 4, type: "delivery", title: "Delivery Ioniq 5", img: "/foto-product/18ce96208b_hyundai-ioniq-5-color-751349-removebg-preview-1.png" },
    { id: 5, type: "event", title: "Test Drive Event", img: "/assets/backgroud/hyundai-simprug.jpeg" },
  ];

  return (
    <div className="bg-hyundai-light min-h-screen pb-20">
      <section className="relative pt-32 pb-20 bg-hyundai-primary text-center text-white">
        <div className="absolute inset-0 z-0">
          {/* OPTIMASI: Background Header Galeri */}
          <Image
            src="/assets/backgroud/hyundai-simprug.jpeg"
            alt="Galeri Background"
            fill
            className="object-cover opacity-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-hyundai-primary/90 to-hyundai-primary/70"></div>
        </div>
        <div className="relative z-10 px-6">
          <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-4">Galeri Momen</h1>
          <p className="text-blue-100 max-w-2xl mx-auto font-light">
            Bukti kepuasan pelanggan dan aktivitas kami melayani Anda.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 -mt-10 relative z-20">
        <div className="flex justify-center gap-4 mb-10 bg-white p-2 rounded-xl shadow-md w-fit mx-auto">
          {["all", "delivery", "event"].map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-6 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                active === cat
                ? "bg-hyundai-primary text-white shadow-md"
                : "text-gray-500 hover:bg-gray-100"
              }`}
            >
              {cat === "all" ? "Semua" : cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {items.filter(i => active === "all" || i.type === active).map(item => (
            <div key={item.id} className="group relative aspect-[4/3] bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100">
              {/* OPTIMASI: Grid Galeri Responsif */}
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-hyundai-primary/80 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-4 text-center">
                <p className="text-white font-bold text-lg mb-2">{item.title}</p>
                <span className="text-xs text-blue-200 uppercase tracking-widest border border-blue-200/50 px-3 py-1 rounded-full">{item.type}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
