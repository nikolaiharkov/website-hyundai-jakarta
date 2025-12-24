"use client";

import { SITE_CONFIG } from "../../lib/config";

export default function ProsesKreditPage() {
  const steps = [
    { n: "01", title: "PEMESANAN (SPK)", desc: "Pilih unit, warna, dan tanda jadi pemesanan." },
    { n: "02", title: "DATA KREDIT", desc: "Penyerahan dokumen persyaratan untuk leasing." },
    { n: "03", title: "APPROVAL", desc: "Proses persetujuan kredit oleh pihak bank/leasing." },
    { n: "04", title: "PELUNASAN", desc: "Pembayaran sisa uang muka dan administrasi." },
    { n: "05", title: "DELIVERY", desc: "Unit dikirim langsung dengan towing ke rumah Anda." },
  ];

  return (
    <div className="bg-hyundai-sand min-h-screen pb-20 overflow-hidden">
      {/* --- HEADER DENGAN BG SHOWROOM --- */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <img src="/assets/backgroud/hyundai-simprug.jpeg" className="absolute inset-0 w-full h-full object-cover" alt="Showroom" />
        <div className="absolute inset-0 bg-hyundai-navy/90 backdrop-blur-sm"></div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">PROSES KREDIT</h1>
          <p className="text-hyundai-blue font-bold tracking-[0.4em] text-[10px] mt-6 uppercase">Mudah, Cepat, dan Transparan</p>
        </div>
      </section>

      {/* --- CONTENT SECTION --- */}
      <section className="max-w-7xl mx-auto px-6 -mt-20 relative z-20">
        <div className="grid md:grid-cols-5 gap-4">
          {steps.map((step) => (
            <div key={step.n} className="bg-white p-8 border border-gray-100 shadow-xl flex flex-col items-center text-center group hover:bg-hyundai-navy transition-all duration-500">
              <span className="text-4xl font-black text-hyundai-blue/20 group-hover:text-hyundai-blue transition-colors mb-4">{step.n}</span>
              <h3 className="text-[11px] font-black text-hyundai-navy group-hover:text-white uppercase tracking-widest mb-4">{step.title}</h3>
              <p className="text-[11px] text-gray-500 group-hover:text-gray-300 font-medium leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Syarat Dokumen dengan Dekorasi Mobil Transparan */}
        <div className="mt-20 bg-white p-10 lg:p-16 shadow-2xl relative overflow-hidden border border-gray-50">
          <img src="/foto-product/de48b09298_hyundai-staria-color-999145-removebg-preview-1.png" className="absolute -right-20 -bottom-10 w-96 opacity-[0.05] pointer-events-none" alt="Deco" />

          <h2 className="text-2xl font-black text-hyundai-navy uppercase tracking-tighter mb-12 border-b-2 border-hyundai-blue inline-block pb-2">Persyaratan Dokumen</h2>

          <div className="grid md:grid-cols-2 gap-12 relative z-10">
            <div className="space-y-6">
              <h4 className="text-[11px] font-black text-hyundai-blue uppercase tracking-widest">Perorangan / Karyawan</h4>
              <ul className="space-y-4 text-[12px] font-bold text-hyundai-navy uppercase tracking-wider">
                <li className="flex gap-3"><span>•</span> KTP Suami & Istri</li>
                <li className="flex gap-3"><span>•</span> Kartu Keluarga</li>
                <li className="flex gap-3"><span>•</span> NPWP & PBB Rumah</li>
                <li className="flex gap-3"><span>•</span> Rekening Tabungan 3 Bulan</li>
                <li className="flex gap-3"><span>•</span> Slip Gaji / SKU</li>
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="text-[11px] font-black text-hyundai-blue uppercase tracking-widest">Perusahaan / PT</h4>
              <ul className="space-y-4 text-[12px] font-bold text-hyundai-navy uppercase tracking-wider">
                <li className="flex gap-3"><span>•</span> Akta Pendirian & SIUP</li>
                <li className="flex gap-3"><span>•</span> KTP Direksi & Komisaris</li>
                <li className="flex gap-3"><span>•</span> Rekening Koran Perusahaan</li>
                <li className="flex gap-3"><span>•</span> NPWP & NIB</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
