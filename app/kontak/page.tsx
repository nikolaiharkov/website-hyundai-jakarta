"use client";
import { SITE_CONFIG } from "../../lib/config";

export default function KontakPage() {
  return (
    <div className="bg-hyundai-sand min-h-screen pb-20">
      <section className="bg-hyundai-navy pt-32 pb-32 text-center text-white relative overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-5xl font-black uppercase tracking-tighter">Hubungi Kami</h1>
          <p className="mt-4 text-gray-300 font-light">Siap melayani pertanyaan Anda 24/7</p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 -mt-20 relative z-20 grid md:grid-cols-3 gap-8">
        <div className="bg-white p-10 text-center shadow-xl border-t-4 border-hyundai-blue rounded-sm">
          <img src={SITE_CONFIG.SALES_PHOTO_PATH} className="w-24 h-24 rounded-full mx-auto mb-6 object-cover border-4 border-hyundai-sand" alt="Sales" />
          <h2 className="text-xl font-black text-hyundai-navy uppercase">{SITE_CONFIG.SALES_NAME}</h2>
          <p className="text-[10px] font-bold text-hyundai-blue tracking-widest uppercase mb-8">{SITE_CONFIG.SALES_TITLE}</p>
          <div className="space-y-3">
             <a href={SITE_CONFIG.WHATSAPP_LINK} className="block w-full py-4 bg-[#25D366] text-white text-[10px] font-black uppercase tracking-widest hover:brightness-110">
               <i className="fa-brands fa-whatsapp mr-2"></i> WhatsApp
             </a>
             <a href={`tel:${SITE_CONFIG.WHATSAPP_NUMBER}`} className="block w-full py-4 bg-hyundai-navy text-white text-[10px] font-black uppercase tracking-widest hover:bg-hyundai-blue">
               <i className="fa-solid fa-phone mr-2"></i> Telepon
             </a>
          </div>
        </div>

        <div className="md:col-span-2 bg-white shadow-xl p-2 h-full min-h-[400px]">
          <iframe src={SITE_CONFIG.SHOWROOM_MAPS_URL} className="w-full h-full border-0" loading="lazy"></iframe>
        </div>
      </section>
    </div>
  );
}
