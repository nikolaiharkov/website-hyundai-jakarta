"use client";
import { SITE_CONFIG } from "../../lib/config";

export default function KontakPage() {
  return (
    <div className="bg-hyundai-light min-h-screen pb-20">
      {/* Header Sederhana */}
      <section className="bg-hyundai-primary pt-32 pb-48 text-center text-white relative overflow-hidden">
        <div className="relative z-10 px-6">
          <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter">Hubungi Kami</h1>
          <p className="mt-4 text-blue-100 font-light max-w-xl mx-auto">
            Siap melayani konsultasi pembelian, simulasi kredit, dan tukar tambah kendaraan Anda 24/7.
          </p>
        </div>
        {/* Dekorasi gelombang bawah (opsional, bisa dihapus jika tidak suka) */}
        <div className="absolute bottom-0 w-full overflow-hidden leading-[0]">
           <svg className="relative block w-full h-[60px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-hyundai-light"></path>
           </svg>
        </div>
      </section>

      {/* Card Link-in Bio Style */}
      <section className="max-w-2xl mx-auto px-6 -mt-32 relative z-20">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center border border-gray-100">

          {/* Foto Profil */}
          <div className="mb-8 relative inline-block">
            <div className="w-32 h-32 rounded-full p-1 bg-white shadow-lg mx-auto">
              <img
                src={SITE_CONFIG.SALES_PHOTO_PATH}
                className="w-full h-full rounded-full object-cover"
                alt="Sales Profile"
              />
            </div>
            <div className="absolute bottom-2 right-2 bg-green-500 w-6 h-6 rounded-full border-4 border-white" title="Online"></div>
          </div>

          <h2 className="text-2xl font-bold text-hyundai-primary uppercase mb-1">{SITE_CONFIG.SALES_NAME}</h2>
          <p className="text-sm font-bold text-hyundai-accent tracking-widest uppercase mb-8">{SITE_CONFIG.SALES_TITLE}</p>

          {/* Tombol-tombol Kontak (Link-in Bio) */}
          <div className="space-y-4 max-w-sm mx-auto mb-12">

            {/* WhatsApp */}
            <a
              href={SITE_CONFIG.WHATSAPP_LINK}
              target="_blank"
              className="flex items-center p-4 rounded-xl bg-[#25D366] text-white font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all group"
            >
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mr-4 group-hover:bg-white/30 transition">
                <i className="fa-brands fa-whatsapp text-2xl"></i>
              </div>
              <div className="text-left">
                <p className="text-[10px] opacity-90 uppercase tracking-wider font-normal">Chat Langsung</p>
                <p className="text-lg leading-none">WhatsApp</p>
              </div>
              <i className="fa-solid fa-chevron-right ml-auto opacity-50"></i>
            </a>

            {/* Telepon */}
            <a
              href={`tel:+${SITE_CONFIG.WHATSAPP_NUMBER}`}
              className="flex items-center p-4 rounded-xl bg-hyundai-primary text-white font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all group"
            >
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mr-4 group-hover:bg-white/20 transition">
                <i className="fa-solid fa-phone text-xl"></i>
              </div>
              <div className="text-left">
                <p className="text-[10px] opacity-80 uppercase tracking-wider font-normal">Panggilan Suara</p>
                <p className="text-lg leading-none">Telepon Sales</p>
              </div>
              <i className="fa-solid fa-chevron-right ml-auto opacity-50"></i>
            </a>

            {/* Email */}
            <a
              href={`mailto:${SITE_CONFIG.EMAIL}`}
              className="flex items-center p-4 rounded-xl bg-white border-2 border-gray-100 text-gray-700 font-bold hover:border-hyundai-primary hover:text-hyundai-primary transition-all group"
            >
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mr-4 group-hover:bg-blue-50 transition">
                <i className="fa-solid fa-envelope text-xl"></i>
              </div>
              <div className="text-left">
                <p className="text-[10px] text-gray-400 uppercase tracking-wider font-normal">Kirim Penawaran</p>
                <p className="text-lg leading-none">Email</p>
              </div>
              <i className="fa-solid fa-chevron-right ml-auto opacity-30"></i>
            </a>
          </div>

          {/* Maps Embed */}
          <div className="w-full">
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4 flex items-center justify-center gap-2">
              <i className="fa-solid fa-location-dot"></i> Lokasi Showroom
            </h3>
            <div className="rounded-2xl overflow-hidden shadow-lg border-4 border-white">
              <iframe
                src="https://googleusercontent.com/maps.google.com/1"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <p className="mt-4 text-sm text-gray-500 max-w-xs mx-auto">
              Jl. Teuku Nyak Arief No.14, Grogol Selatan, Kec. Kebayoran Lama, Jakarta Selatan
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
