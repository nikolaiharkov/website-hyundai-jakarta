"use client";

import { useState } from "react";
import { SITE_CONFIG } from "../../lib/config";
import { PRODUCTS } from "../../lib/products";

export default function TestDrivePage() {
  const [formData, setFormData] = useState({ name: "", model: "Stargazer", date: "", phone: "" });

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Booking Test Drive:\n- Nama: ${formData.name}\n- Unit: ${formData.model}\n- Tgl: ${formData.date}\n- HP: ${formData.phone}`;
    window.open(`${SITE_CONFIG.WHATSAPP_LINK}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <div className="bg-hyundai-sand min-h-screen">
      <section className="relative pt-32 pb-24 text-center">
        <div className="absolute inset-0 bg-hyundai-navy">
           {/* Pattern Overlay could go here */}
        </div>
        <div className="relative z-10 text-white">
          <h1 className="text-5xl font-black uppercase tracking-tighter">Test Drive</h1>
          <p className="mt-4 font-light text-gray-300">Rasakan sensasi berkendara sebelum membeli.</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 -mt-16 relative z-20">
        <div className="bg-white shadow-2xl grid md:grid-cols-12 border border-gray-100">
          <div className="md:col-span-4 bg-hyundai-blue p-10 text-white">
            <h3 className="text-xs font-black uppercase tracking-widest mb-8 border-b border-white/20 pb-4">Proses Mudah</h3>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <i className="fa-solid fa-1 text-2xl opacity-50"></i>
                <p className="text-[11px] font-bold uppercase tracking-widest leading-relaxed">Pilih Unit & Jadwal</p>
              </li>
              <li className="flex gap-4">
                <i className="fa-solid fa-2 text-2xl opacity-50"></i>
                <p className="text-[11px] font-bold uppercase tracking-widest leading-relaxed">Konfirmasi Sales</p>
              </li>
              <li className="flex gap-4">
                <i className="fa-solid fa-3 text-2xl opacity-50"></i>
                <p className="text-[11px] font-bold uppercase tracking-widest leading-relaxed">Unit Datang ke Rumah</p>
              </li>
            </ul>
          </div>

          <form onSubmit={handleBooking} className="md:col-span-8 p-10 lg:p-16 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-hyundai-navy">Pilih Model</label>
                <div className="relative">
                  <select onChange={(e) => setFormData({...formData, model: e.target.value})} className="w-full bg-hyundai-sand p-4 text-[11px] font-bold uppercase outline-none focus:ring-1 focus:ring-hyundai-blue appearance-none">
                    {PRODUCTS.map(p => <option key={p.id} value={p.name}>{p.name}</option>)}
                  </select>
                  <i className="fa-solid fa-chevron-down absolute right-4 top-4 text-gray-400 text-xs pointer-events-none"></i>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-hyundai-navy">Tanggal</label>
                <input type="date" onChange={(e) => setFormData({...formData, date: e.target.value})} className="w-full bg-hyundai-sand p-4 text-[11px] font-bold uppercase outline-none focus:ring-1 focus:ring-hyundai-blue text-gray-500" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-hyundai-navy">Nama Lengkap</label>
                <input type="text" placeholder="NAMA ANDA" onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full bg-hyundai-sand p-4 text-[11px] font-bold uppercase outline-none focus:ring-1 focus:ring-hyundai-blue placeholder:text-gray-300" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-hyundai-navy">No. WhatsApp</label>
                <input type="tel" placeholder="0812..." onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full bg-hyundai-sand p-4 text-[11px] font-bold uppercase outline-none focus:ring-1 focus:ring-hyundai-blue placeholder:text-gray-300" />
              </div>
            </div>
            <button type="submit" className="w-full bg-hyundai-navy text-white py-5 font-black uppercase tracking-[0.3em] text-[11px] hover:bg-hyundai-blue transition-all shadow-xl">
              <i className="fa-solid fa-calendar-check mr-2"></i> Booking Sekarang
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
