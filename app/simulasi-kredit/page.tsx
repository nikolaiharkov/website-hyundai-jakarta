"use client";

import { useState } from "react";
import { SITE_CONFIG } from "../../lib/config";
import { PRODUCTS } from "../../lib/products";

export default function SimulasiKreditPage() {
  const [formData, setFormData] = useState({
    carType: "",
    tenor: "1 Tahun",
    dp: "",
    fullName: "",
    city: "",
    phone: ""
  });

  const handleSendWA = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.carType || !formData.fullName || !formData.phone) {
      alert("Mohon lengkapi data utama.");
      return;
    }

    const message = `Halo Alfried, saya ingin *Simulasi Kredit*:\n\n` +
      `- Tipe Mobil: ${formData.carType}\n` +
      `- Tenor: ${formData.tenor}\n` +
      `- Uang Muka: ${formData.dp || "-"}\n` +
      `- Nama: ${formData.fullName}\n` +
      `- Kota: ${formData.city || "-"}\n` +
      `- No. HP: ${formData.phone}`;

    window.open(`${SITE_CONFIG.WHATSAPP_LINK}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div className="bg-hyundai-sand min-h-screen">
      {/* HEADER: Background Navy Gelap + Teks Putih */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/assets/backgroud/hyundai-simprug.jpeg" alt="Showroom" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-hyundai-navy/90 backdrop-blur-sm"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center text-white">
          <div className="inline-block px-4 py-1 border border-hyundai-blue text-hyundai-blue text-[10px] font-black uppercase tracking-[0.3em] mb-4 bg-black/20">
            <i className="fa-solid fa-calculator mr-2"></i> Perhitungan Resmi
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">Simulasi Kredit</h1>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto font-light">
            Dapatkan hitungan cicilan transparan dan promo bunga rendah khusus bulan ini.
          </p>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="py-16 max-w-4xl mx-auto px-6 -mt-10 relative z-20">
        <div className="bg-white shadow-2xl rounded-sm overflow-hidden flex flex-col md:flex-row border border-gray-200">

          {/* Info Side (Navy Background) */}
          <div className="md:w-1/3 bg-hyundai-navy p-10 text-white flex flex-col justify-center border-r border-white/10">
            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-hyundai-blue mb-8">
              <i className="fa-solid fa-circle-info mr-2"></i> Benefit
            </h3>
            <ul className="space-y-6">
              <li className="flex gap-4 items-start">
                <i className="fa-solid fa-percent text-hyundai-blue mt-1"></i>
                <p className="text-[11px] font-bold uppercase tracking-widest">Bunga Kompetitif mulai 0%</p>
              </li>
              <li className="flex gap-4 items-start">
                <i className="fa-solid fa-wallet text-hyundai-blue mt-1"></i>
                <p className="text-[11px] font-bold uppercase tracking-widest">DP Ringan Mulai 10%</p>
              </li>
              <li className="flex gap-4 items-start">
                <i className="fa-solid fa-file-circle-check text-hyundai-blue mt-1"></i>
                <p className="text-[11px] font-bold uppercase tracking-widest">Approve Dibantu 99%</p>
              </li>
            </ul>
          </div>

          {/* Form Side (White Background, Text Navy) */}
          <form onSubmit={handleSendWA} className="flex-1 p-10 lg:p-14 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">

              {/* Tipe Mobil */}
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-hyundai-navy flex items-center gap-2">
                  <i className="fa-solid fa-car"></i> Tipe Mobil
                </label>
                <select
                  required
                  onChange={(e) => setFormData({...formData, carType: e.target.value})}
                  className="w-full bg-hyundai-sand border border-transparent focus:border-hyundai-blue focus:bg-white p-4 text-[11px] font-bold uppercase outline-none transition-all text-hyundai-dark"
                >
                  <option value="">PILIH MODEL</option>
                  {PRODUCTS.map(p => <option key={p.id} value={p.name}>{p.name}</option>)}
                </select>
              </div>

              {/* Tenor */}
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-hyundai-navy flex items-center gap-2">
                  <i className="fa-regular fa-calendar-days"></i> Tenor
                </label>
                <select
                  onChange={(e) => setFormData({...formData, tenor: e.target.value})}
                  className="w-full bg-hyundai-sand border border-transparent focus:border-hyundai-blue focus:bg-white p-4 text-[11px] font-bold uppercase outline-none transition-all text-hyundai-dark"
                >
                  {["1 Tahun", "2 Tahun", "3 Tahun", "4 Tahun", "5 Tahun", "6 Tahun"].map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>

              {/* Uang Muka */}
              <div className="space-y-2 md:col-span-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-hyundai-navy flex items-center gap-2">
                  <i className="fa-solid fa-money-bill-wave"></i> Uang Muka (DP)
                </label>
                <input
                  type="text"
                  placeholder="CONTOH: 50 JUTA"
                  onChange={(e) => setFormData({...formData, dp: e.target.value})}
                  className="w-full bg-hyundai-sand border border-transparent focus:border-hyundai-blue focus:bg-white p-4 text-[11px] font-bold uppercase outline-none transition-all text-hyundai-dark placeholder:text-gray-400"
                />
              </div>

              {/* Nama Lengkap */}
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-hyundai-navy flex items-center gap-2">
                  <i className="fa-solid fa-user"></i> Nama Lengkap
                </label>
                <input
                  type="text" required
                  placeholder="NAMA SESUAI KTP"
                  onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                  className="w-full bg-hyundai-sand border border-transparent focus:border-hyundai-blue focus:bg-white p-4 text-[11px] font-bold uppercase outline-none transition-all text-hyundai-dark placeholder:text-gray-400"
                />
              </div>

              {/* Asal Kota */}
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-hyundai-navy flex items-center gap-2">
                  <i className="fa-solid fa-location-dot"></i> Kota / Daerah
                </label>
                <input
                  type="text"
                  placeholder="DOMISILI"
                  onChange={(e) => setFormData({...formData, city: e.target.value})}
                  className="w-full bg-hyundai-sand border border-transparent focus:border-hyundai-blue focus:bg-white p-4 text-[11px] font-bold uppercase outline-none transition-all text-hyundai-dark placeholder:text-gray-400"
                />
              </div>

              {/* No. HP */}
              <div className="space-y-2 md:col-span-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-hyundai-navy flex items-center gap-2">
                  <i className="fa-brands fa-whatsapp"></i> No. HP / WhatsApp
                </label>
                <input
                  type="tel" required
                  placeholder="0812XXXXXX"
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full bg-hyundai-sand border border-transparent focus:border-hyundai-blue focus:bg-white p-4 text-[11px] font-bold uppercase outline-none transition-all text-hyundai-dark placeholder:text-gray-400"
                />
              </div>
            </div>

            {/* Tombol Aksi - Warna Navy Solid (Kontras Tinggi) */}
            <button
              type="submit"
              className="w-full bg-hyundai-navy text-white py-5 font-black uppercase tracking-[0.3em] text-[11px] hover:bg-hyundai-blue transition-all shadow-xl flex items-center justify-center gap-3"
            >
              <i className="fa-solid fa-paper-plane"></i> Hitung Cicilan
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
