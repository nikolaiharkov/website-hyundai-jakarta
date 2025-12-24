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
    <div className="bg-hyundai-light min-h-screen pb-20 overflow-hidden">
      {/* HEADER DENGAN BLUE OVERLAY */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/assets/backgroud/hyundai-simprug.jpeg" className="w-full h-full object-cover" alt="Showroom" />
          {/* Overlay Biru (Sesuai Referensi) */}
          <div className="absolute inset-0 bg-gradient-to-b from-hyundai-primary/95 to-hyundai-primary/80 backdrop-blur-[2px]"></div>
        </div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">PROSES KREDIT</h1>
          <p className="text-blue-200 font-bold tracking-[0.4em] text-[10px] mt-6 uppercase">Mudah, Cepat, dan Transparan</p>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="max-w-7xl mx-auto px-6 -mt-20 relative z-20">
        <div className="grid md:grid-cols-5 gap-4">
          {steps.map((step) => (
            <div key={step.n} className="bg-white p-8 rounded-xl border border-gray-100 shadow-xl flex flex-col items-center text-center group hover:bg-hyundai-primary transition-all duration-500">
              <span className="text-4xl font-black text-hyundai-primary/10 group-hover:text-blue-300 transition-colors mb-4">{step.n}</span>
              <h3 className="text-[11px] font-black text-hyundai-primary group-hover:text-white uppercase tracking-widest mb-4">{step.title}</h3>
              <p className="text-[11px] text-gray-500 group-hover:text-blue-100 font-medium leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Syarat Dokumen */}
        <div className="mt-20 bg-white p-10 lg:p-16 rounded-3xl shadow-2xl relative overflow-hidden border border-gray-50">
          <h2 className="text-2xl font-black text-hyundai-primary uppercase tracking-tighter mb-12 border-b-4 border-hyundai-secondary inline-block pb-2">Persyaratan Dokumen</h2>

          <div className="grid md:grid-cols-2 gap-12 relative z-10">
            <div className="space-y-6">
              <h4 className="text-[11px] font-black text-hyundai-secondary uppercase tracking-widest flex items-center gap-2">
                <i className="fa-solid fa-user text-hyundai-primary"></i> Perorangan / Karyawan
              </h4>
              <ul className="space-y-4 text-[12px] font-bold text-hyundai-dark uppercase tracking-wider">
                <li className="flex gap-3"><i className="fa-solid fa-check text-green-500"></i> KTP Suami & Istri</li>
                <li className="flex gap-3"><i className="fa-solid fa-check text-green-500"></i> Kartu Keluarga</li>
                <li className="flex gap-3"><i className="fa-solid fa-check text-green-500"></i> NPWP & PBB Rumah</li>
                <li className="flex gap-3"><i className="fa-solid fa-check text-green-500"></i> Rekening Tabungan 3 Bulan</li>
                <li className="flex gap-3"><i className="fa-solid fa-check text-green-500"></i> Slip Gaji / SKU</li>
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="text-[11px] font-black text-hyundai-secondary uppercase tracking-widest flex items-center gap-2">
                <i className="fa-solid fa-building text-hyundai-primary"></i> Perusahaan / PT
              </h4>
              <ul className="space-y-4 text-[12px] font-bold text-hyundai-dark uppercase tracking-wider">
                <li className="flex gap-3"><i className="fa-solid fa-check text-green-500"></i> Akta Pendirian & SIUP</li>
                <li className="flex gap-3"><i className="fa-solid fa-check text-green-500"></i> KTP Direksi & Komisaris</li>
                <li className="flex gap-3"><i className="fa-solid fa-check text-green-500"></i> Rekening Koran Perusahaan</li>
                <li className="flex gap-3"><i className="fa-solid fa-check text-green-500"></i> NPWP & NIB</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
