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
    const msg = `Halo Alfried, saya ingin simulasi kredit:\n\n- Mobil: ${formData.carType}\n- Tenor: ${formData.tenor}\n- DP: ${formData.dp}\n- Nama: ${formData.fullName}\n- Kota: ${formData.city}\n- HP: ${formData.phone}`;
    window.open(`${SITE_CONFIG.WHATSAPP_LINK}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <div className="bg-hyundai-light min-h-screen pb-20">
      {/* Header dengan Overlay Gradient (Sesuai Referensi) */}
      <section className="relative pt-32 pb-20 bg-hyundai-primary">
        <div className="absolute inset-0 z-0">
          <img src="/assets/backgroud/hyundai-simprug.jpeg" className="w-full h-full object-cover opacity-50" alt="Background" />
          <div className="absolute inset-0 bg-gradient-to-b from-hyundai-primary/90 to-hyundai-primary/70"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">SIMULASI KREDIT</h1>
          <p className="text-blue-100">Dapatkan hitungan cicilan terbaik sesuai budget Anda.</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 -mt-10 relative z-20">
        <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100">
          <div className="bg-hyundai-primary p-4 text-center">
            <p className="text-white text-sm font-bold uppercase tracking-widest">Formulir Pengajuan</p>
          </div>

          <form onSubmit={handleSendWA} className="p-8 lg:p-12 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Tipe Mobil */}
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2"><i className="fa-solid fa-car mr-1"></i> Tipe Mobil</label>
                <select onChange={(e) => setFormData({...formData, carType: e.target.value})} className="w-full border-gray-300 rounded-lg p-3 text-sm focus:ring-hyundai-primary focus:border-hyundai-primary bg-gray-50">
                  <option value="">Pilih Model</option>
                  {PRODUCTS.map(p => <option key={p.id} value={p.name}>{p.name}</option>)}
                </select>
              </div>

              {/* Tenor */}
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2"><i className="fa-regular fa-clock mr-1"></i> Tenor</label>
                <select onChange={(e) => setFormData({...formData, tenor: e.target.value})} className="w-full border-gray-300 rounded-lg p-3 text-sm focus:ring-hyundai-primary focus:border-hyundai-primary bg-gray-50">
                  {["1 Tahun", "2 Tahun", "3 Tahun", "4 Tahun", "5 Tahun", "6 Tahun"].map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>

              {/* DP */}
              <div className="md:col-span-2">
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2"><i className="fa-solid fa-money-bill-wave mr-1"></i> Uang Muka (DP)</label>
                <input type="text" placeholder="Contoh: 50 Juta" onChange={(e) => setFormData({...formData, dp: e.target.value})} className="w-full border-gray-300 rounded-lg p-3 text-sm focus:ring-hyundai-primary focus:border-hyundai-primary bg-gray-50" />
              </div>

              {/* Nama */}
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2"><i className="fa-solid fa-user mr-1"></i> Nama Lengkap</label>
                <input type="text" required onChange={(e) => setFormData({...formData, fullName: e.target.value})} className="w-full border-gray-300 rounded-lg p-3 text-sm focus:ring-hyundai-primary focus:border-hyundai-primary bg-gray-50" />
              </div>

              {/* Kota */}
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2"><i className="fa-solid fa-location-dot mr-1"></i> Kota / Daerah</label>
                <input type="text" onChange={(e) => setFormData({...formData, city: e.target.value})} className="w-full border-gray-300 rounded-lg p-3 text-sm focus:ring-hyundai-primary focus:border-hyundai-primary bg-gray-50" />
              </div>

              {/* HP */}
              <div className="md:col-span-2">
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2"><i className="fa-brands fa-whatsapp mr-1"></i> No. WhatsApp</label>
                <input type="tel" required placeholder="0812..." onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full border-gray-300 rounded-lg p-3 text-sm focus:ring-hyundai-primary focus:border-hyundai-primary bg-gray-50" />
              </div>
            </div>

            <button type="submit" className="w-full bg-hyundai-primary text-white py-4 rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-hyundai-secondary transition shadow-lg flex justify-center items-center gap-2">
              <i className="fa-solid fa-paper-plane"></i> Hitung Sekarang
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
