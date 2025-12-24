"use client";

import { useState } from "react";
import { SITE_CONFIG } from "../../lib/config";
import { PRODUCTS } from "../../lib/products";

export default function TestDrivePage() {
  const [formData, setFormData] = useState({ name: "", model: "Stargazer", date: "", phone: "" });

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Halo Alfried, saya ingin Booking Test Drive:\n\n- Nama: ${formData.name}\n- Unit: ${formData.model}\n- Tanggal: ${formData.date}\n- No. HP: ${formData.phone}`;
    window.open(`${SITE_CONFIG.WHATSAPP_LINK}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <div className="bg-hyundai-light min-h-screen pb-20">
      {/* Header dengan Overlay Gradient */}
      <section className="relative pt-32 pb-24 bg-hyundai-primary text-center text-white">
        <div className="absolute inset-0 z-0">
          <img src="/assets/backgroud/hyundai-simprug.jpeg" alt="Test Drive" className="w-full h-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-b from-hyundai-primary/90 to-hyundai-primary/70"></div>
        </div>
        <div className="relative z-10 px-6">
          <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-4">Test Drive</h1>
          <p className="text-blue-100 max-w-2xl mx-auto font-light">
            Rasakan sensasi berkendara Hyundai langsung di rumah atau kantor Anda. Gratis.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="max-w-4xl mx-auto px-6 -mt-10 relative z-20">
        <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100 flex flex-col md:flex-row">

          {/* Sidebar Info (Biru) */}
          <div className="md:w-1/3 bg-hyundai-primary p-10 text-white">
            <h3 className="text-sm font-bold uppercase tracking-widest mb-8 border-b border-white/20 pb-4">
              <i className="fa-solid fa-list-check mr-2"></i> Langkah Mudah
            </h3>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 font-bold">1</div>
                <p className="text-sm leading-relaxed">Pilih model mobil impian Anda.</p>
              </li>
              <li className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 font-bold">2</div>
                <p className="text-sm leading-relaxed">Tentukan jadwal yang sesuai.</p>
              </li>
              <li className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 font-bold">3</div>
                <p className="text-sm leading-relaxed">Unit kami antar ke lokasi Anda.</p>
              </li>
            </ul>
          </div>

          {/* Form Input */}
          <form onSubmit={handleBooking} className="flex-1 p-10 lg:p-12 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase"><i className="fa-solid fa-car mr-1"></i> Pilih Model</label>
                <div className="relative">
                  <select onChange={(e) => setFormData({...formData, model: e.target.value})} className="w-full border-gray-300 rounded-lg p-3 text-sm focus:ring-hyundai-primary focus:border-hyundai-primary bg-gray-50">
                    {PRODUCTS.map(p => <option key={p.id} value={p.name}>{p.name}</option>)}
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase"><i className="fa-regular fa-calendar mr-1"></i> Tanggal</label>
                <input type="date" onChange={(e) => setFormData({...formData, date: e.target.value})} className="w-full border-gray-300 rounded-lg p-3 text-sm focus:ring-hyundai-primary focus:border-hyundai-primary bg-gray-50 text-gray-600" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase"><i className="fa-solid fa-user mr-1"></i> Nama Lengkap</label>
                <input type="text" placeholder="Nama Anda" onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full border-gray-300 rounded-lg p-3 text-sm focus:ring-hyundai-primary focus:border-hyundai-primary bg-gray-50" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase"><i className="fa-brands fa-whatsapp mr-1"></i> No. WhatsApp</label>
                <input type="tel" placeholder="0812..." onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full border-gray-300 rounded-lg p-3 text-sm focus:ring-hyundai-primary focus:border-hyundai-primary bg-gray-50" />
              </div>
            </div>
            <button type="submit" className="w-full bg-hyundai-primary text-white py-4 rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-hyundai-secondary transition shadow-lg flex justify-center items-center gap-2">
              <i className="fa-solid fa-calendar-check"></i> Booking Sekarang
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
