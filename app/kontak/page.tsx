"use client";

import { useState } from "react";
import { SITE_CONFIG } from "../../lib/config";

export default function KontakPage() {
  const [formData, setFormData] = useState({ name: "", message: "" });

  const sendWa = () => {
    if (!formData.name || !formData.message) {
      alert("Mohon isi nama dan pesan Anda.");
      return;
    }
    const text = `Halo Alfried, perkenalkan saya *${formData.name}*.\n\n${formData.message}`;
    window.open(`${SITE_CONFIG.WHATSAPP_LINK}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-hyundai-primary text-white pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Hubungi Kami</h1>
          <p className="text-blue-100 max-w-2xl mx-auto">Siap melayani pertanyaan Anda seputar produk Hyundai, simulasi kredit, dan promo terbaru.</p>
        </div>
      </section>

      <section className="flex-grow py-12 relative -mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Profil Card */}
            <div className="md:col-span-1 bg-white rounded-2xl shadow-xl p-8 border border-gray-100 flex flex-col items-center text-center h-fit">
              <div className="w-32 h-32 rounded-full p-1 bg-gradient-to-tr from-hyundai-primary to-hyundai-accent mb-6">
                <img src={SITE_CONFIG.SALES_PHOTO_PATH} alt={SITE_CONFIG.SALES_NAME} className="w-full h-full rounded-full object-cover border-4 border-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">{SITE_CONFIG.SALES_NAME.split(' ')[1]}</h2>
              <p className="text-hyundai-secondary font-medium mb-6">{SITE_CONFIG.SALES_TITLE}</p>

              <div className="w-full space-y-4">
                <a href={`https://wa.me/${SITE_CONFIG.WHATSAPP_NUMBER}`} className="flex items-center gap-3 p-4 rounded-xl bg-green-50 text-green-700 hover:bg-green-100 transition border border-green-100">
                  <span className="font-bold text-sm">WhatsApp Chat</span>
                </a>
                <a href={`tel:+${SITE_CONFIG.WHATSAPP_NUMBER}`} className="flex items-center gap-3 p-4 rounded-xl bg-blue-50 text-blue-700 hover:bg-blue-100 transition border border-blue-100">
                  <span className="font-bold text-sm">Telepon Langsung</span>
                </a>
              </div>
            </div>

            {/* Map & Form */}
            <div className="md:col-span-2 space-y-8">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-80 relative">
                <iframe src={SITE_CONFIG.SHOWROOM_MAPS_URL} width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"></iframe>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <h3 className="text-xl font-bold mb-1 text-hyundai-primary">Kirim Pesan Cepat</h3>
                <div className="space-y-4 mt-6">
                  <input
                    type="text"
                    placeholder="Nama Anda"
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-hyundai-primary"
                  />
                  <textarea
                    rows={3}
                    placeholder="Pesan Anda..."
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-hyundai-primary"
                  ></textarea>
                  <button onClick={sendWa} className="px-8 py-3 bg-hyundai-primary text-white font-bold rounded-lg hover:bg-hyundai-secondary transition shadow-md">
                    Kirim ke WhatsApp
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
