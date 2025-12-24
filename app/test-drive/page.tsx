"use client";

import { useState } from "react";
import { SITE_CONFIG } from "../../lib/config";

export default function TestDrivePage() {
  const [formData, setFormData] = useState({ name: "", model: "Stargazer", date: "" });

  return (
    <div className="bg-hyundai-sand min-h-screen">
      <section className="bg-hyundai-navy text-white pt-32 pb-20 relative overflow-hidden">
        {/* Abstract SVG Decoration */}
        <div className="absolute top-0 right-0 p-20 opacity-10 pointer-events-none">
          <svg width="300" height="300" viewBox="0 0 24 24" fill="white">
            <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter uppercase">Test Drive</h1>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto font-light">Rasakan langsung teknologi Hyundai SmartSense di jalan raya.</p>
        </div>
      </section>

      <section className="py-20 max-w-4xl mx-auto px-4">
        <div className="bg-white flex flex-col md:flex-row shadow-2xl overflow-hidden border border-gray-100">
          {/* Accent Side */}
          <div className="bg-hyundai-navy w-full md:w-2 p-0"></div>

          <div className="flex-1 p-10 lg:p-16">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <label className="text-[10px] font-black uppercase tracking-widest text-hyundai-subtext block mb-3">Full Name</label>
                  <input
                    type="text"
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="ENTER YOUR NAME"
                    className="w-full bg-hyundai-sand border-none p-4 text-xs font-bold uppercase tracking-widest outline-none focus:ring-1 focus:ring-hyundai-blue"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-black uppercase tracking-widest text-hyundai-subtext block mb-3">Select Model</label>
                  <select
                    onChange={(e) => setFormData({...formData, model: e.target.value})}
                    className="w-full bg-hyundai-sand border-none p-4 text-xs font-bold uppercase tracking-widest outline-none cursor-pointer"
                  >
                    <option>Stargazer</option><option>Creta</option><option>Ioniq 5</option><option>Palisade</option>
                  </select>
                </div>
                <div>
                  <label className="text-[10px] font-black uppercase tracking-widest text-hyundai-subtext block mb-3">Preferred Date</label>
                  <input
                    type="date"
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                    className="w-full bg-hyundai-sand border-none p-4 text-xs font-bold uppercase tracking-widest outline-none"
                  />
                </div>
              </div>

              <div className="flex flex-col justify-between">
                <div className="p-8 bg-hyundai-sand border-l-4 border-hyundai-blue">
                  <h3 className="text-xs font-black uppercase tracking-widest text-hyundai-navy mb-4">Why Test Drive?</h3>
                  <ul className="space-y-4 text-[11px] text-hyundai-subtext leading-relaxed font-medium">
                    <li className="flex gap-3"><span>01</span> Konfirmasi kenyamanan kabin & suspensi.</li>
                    <li className="flex gap-3"><span>02</span> Coba fitur bantuan pengemudi aktif.</li>
                    <li className="flex gap-3"><span>03</span> Konsultasi teknis dengan spesialis.</li>
                  </ul>
                </div>

                <button
                  onClick={() => window.open(`${SITE_CONFIG.WHATSAPP_LINK}?text=Halo Alfried, saya *${formData.name}* ingin booking Test Drive ${formData.model} pada tanggal ${formData.date}`, "_blank")}
                  className="mt-8 md:mt-0 w-full bg-hyundai-navy text-white py-5 font-black uppercase tracking-[0.3em] text-[10px] hover:bg-hyundai-blue transition-all duration-300 shadow-xl"
                >
                  Confirm Booking
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
