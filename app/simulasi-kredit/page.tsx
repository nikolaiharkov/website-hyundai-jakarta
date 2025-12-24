"use client";

import { useState, useEffect } from "react";
import { SITE_CONFIG } from "../../lib/config";

export default function SimulasiKreditPage() {
  const [price, setPrice] = useState<string>("");
  const [dpPercent, setDpPercent] = useState<number>(25);
  const [tenor, setTenor] = useState<number>(48);
  const [rate, setRate] = useState<number>(4.8);
  const [results, setResults] = useState({ dpAmount: 0, tdp: 0, monthly: 0 });

  const toIdr = (num: number) => new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(num);

  useEffect(() => {
    const numericPrice = parseInt(price.replace(/[^0-9]/g, "") || "0", 10);
    if (numericPrice > 0) {
      const dpMurni = numericPrice * (dpPercent / 100);
      const pokokHutang = numericPrice - dpMurni;
      const angsuran = Math.ceil((pokokHutang + (pokokHutang * (rate / 100) * (tenor / 12))) / tenor);
      const tdp = dpMurni + angsuran + (numericPrice * 0.03) + 2500000;
      setResults({ dpAmount: dpMurni, tdp, monthly: angsuran });
    }
  }, [price, dpPercent, tenor, rate]);

  return (
    <div className="bg-hyundai-sand min-h-screen">
      <section className="bg-hyundai-navy text-white pt-32 pb-20 relative overflow-hidden">
        {/* Background Pattern SVG */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
           <svg width="100%" height="100%"><rect width="100%" height="100%" fill="url(#p)"/><defs><pattern id="p" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M0 40L40 0M-10 10L10 -10M30 50L50 30" stroke="white" strokeWidth="1"/></pattern></defs></svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter uppercase">Credit Simulator</h1>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto font-light leading-relaxed">Hitung estimasi pembiayaan Anda dengan transparansi penuh sesuai standar Hyundai Finance Indonesia.</p>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-0 bg-white shadow-2xl border border-gray-100 overflow-hidden">
          {/* Form Input Side */}
          <div className="lg:col-span-7 p-10 lg:p-16">
            <div className="flex items-center gap-3 mb-10">
              <svg className="w-6 h-6 text-hyundai-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>
              <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-hyundai-navy">Calculation Parameters</h2>
            </div>

            <div className="space-y-10">
              <div>
                <label className="text-[10px] font-black uppercase tracking-widest text-hyundai-subtext block mb-3">Vehicle Price (OTR Jakarta)</label>
                <div className="flex items-center border-b-2 border-hyundai-sand focus-within:border-hyundai-blue transition-colors">
                  <span className="text-xl font-bold text-hyundai-navy mr-2">Rp</span>
                  <input
                    type="text"
                    value={price}
                    onChange={(e) => setPrice(e.target.value.replace(/[^0-9]/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, "."))}
                    className="w-full bg-transparent border-none py-4 text-2xl font-black text-hyundai-navy outline-none placeholder:text-gray-200"
                    placeholder="0"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-10">
                <div>
                  <label className="text-[10px] font-black uppercase tracking-widest text-hyundai-subtext block mb-3">Down Payment (%)</label>
                  <select value={dpPercent} onChange={(e) => setDpPercent(Number(e.target.value))} className="w-full bg-hyundai-sand border-none p-4 font-bold text-xs uppercase tracking-widest outline-none cursor-pointer">
                    {[20, 25, 30, 40].map(v => <option key={v} value={v}>{v}% DP</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-[10px] font-black uppercase tracking-widest text-hyundai-subtext block mb-3">Tenor (Months)</label>
                  <select value={tenor} onChange={(e) => setTenor(Number(e.target.value))} className="w-full bg-hyundai-sand border-none p-4 font-bold text-xs uppercase tracking-widest outline-none cursor-pointer">
                    {[12, 24, 36, 48, 60].map(v => <option key={v} value={v}>{v} Months</option>)}
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Results Side */}
          <div className="lg:col-span-5 bg-hyundai-navy text-white p-10 lg:p-16 flex flex-col justify-between relative overflow-hidden group">
            {/* Decoration SVG Result Box */}
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:rotate-12 transition-transform duration-700 pointer-events-none">
              <svg width="150" height="150" viewBox="0 0 24 24" fill="white"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
            </div>

            <div className="relative z-10">
              <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-hyundai-blue mb-12">Estimation Summary</p>

              <div className="mb-10">
                <p className="text-gray-400 text-[10px] uppercase tracking-widest mb-2">Total Down Payment (TDP)</p>
                <p className="text-3xl font-bold tracking-tighter">{toIdr(results.tdp)}</p>
              </div>

              <div className="mb-12">
                <p className="text-gray-400 text-[10px] uppercase tracking-widest mb-2">Monthly Installment</p>
                <p className="text-5xl lg:text-6xl font-extrabold tracking-tighter text-white">{toIdr(results.monthly)}</p>
                <p className="text-hyundai-blue text-[10px] font-bold mt-4 uppercase tracking-[0.2em]">Fixed for {tenor / 12} Years</p>
              </div>
            </div>

            <button
              onClick={() => window.open(`${SITE_CONFIG.WHATSAPP_LINK}?text=Halo Alfried, saya ingin simulasi kredit dengan TDP ${toIdr(results.tdp)} dan Angsuran ${toIdr(results.monthly)}`, "_blank")}
              className="w-full bg-hyundai-blue text-white py-5 font-black uppercase tracking-[0.3em] text-[10px] hover:bg-white hover:text-hyundai-navy transition-all duration-300 relative z-10 shadow-xl"
            >
              Get Official Quote
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
