"use client";

import { useParams, notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { PRODUCTS } from "../../../lib/products";
import { DETAILED_PRODUCT_INFO } from "../../../lib/productData";
import { SITE_CONFIG } from "../../../lib/config";

export default function ProductDetailPage() {
  const { id } = useParams();
  const product = PRODUCTS.find((p) => p.id === id);
  const details = DETAILED_PRODUCT_INFO[id as string];

  if (!product) return notFound();

  const displayDetails = details || {
    promo: "Promo Harga Nego & Diskon Maksimal",
    tagline: "Proses Cepat, Data Dibantu Sampai Approve",
    features: ["Teknologi Bluelink", "Hyundai SmartSense", "Kabin Premium"],
    specs: { "Layanan": "Unit Ready Stok & Siap Kirim" }
  };

  return (
    <div className="bg-hyundai-light min-h-screen pb-20">
      <section className="relative pt-32 pb-24 bg-hyundai-primary overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* OPTIMASI: Background Header dengan priority */}
          <Image
            src="/assets/backgroud/hyundai-simprug.jpeg"
            fill
            className="object-cover opacity-30"
            alt="Showroom Hyundai Background"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-hyundai-primary/95 via-hyundai-primary/80 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center text-white">
          <div>
            <span className="bg-blue-400/20 text-blue-200 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest border border-blue-400/30">
              Hyundai {product.category}
            </span>
            <h1 className="text-4xl md:text-6xl font-black mt-6 mb-4 leading-tight">
              {product.name}
            </h1>
            <p className="text-xl text-blue-300 font-bold mb-8">{displayDetails.promo}</p>
            <div className="flex flex-wrap gap-4">
              <a href={`${SITE_CONFIG.WHATSAPP_LINK}?text=Halo Alfried, saya ingin info promo ${product.name}`}
                 className="bg-hyundai-wa hover:brightness-105 text-white px-8 py-4 rounded-xl font-bold transition shadow-lg flex items-center gap-3">
                <i className="fa-brands fa-whatsapp text-2xl"></i> Minta Penawaran
              </a>
              <Link href="/simulasi-kredit" className="bg-white/10 border border-white/20 hover:bg-white/20 px-8 py-4 rounded-xl font-bold backdrop-blur-md transition">
                Simulasi Kredit
              </Link>
            </div>
          </div>
          <div className="hidden lg:block relative h-[300px] xl:h-[400px]">
            {/* OPTIMASI: Gambar Unit Mobil dengan object-contain agar tidak terpotong */}
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform hover:scale-105 transition-transform duration-700"
              sizes="50vw"
            />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 -mt-10 relative z-20">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {displayDetails.variants && (
              <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100">
                <h2 className="text-2xl font-bold text-hyundai-primary mb-8 flex items-center gap-3">
                  <i className="fa-solid fa-list-ul text-hyundai-secondary"></i> Daftar Varian & Harga
                </h2>
                <div className="overflow-hidden border border-gray-100 rounded-2xl">
                  {displayDetails.variants.map((v: any, idx: number) => (
                    <div key={idx} className="grid grid-cols-2 p-5 border-b last:border-0 even:bg-gray-50">
                      <span className="font-bold text-gray-700 uppercase text-sm">{v.name}</span>
                      <span className="text-hyundai-primary font-black text-right">{v.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100">
              <h2 className="text-2xl font-bold text-hyundai-primary mb-8">Fitur Unggulan</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {displayDetails.features.map((f: string, i: number) => (
                  <div key={i} className="p-4 bg-hyundai-light rounded-xl text-center border border-gray-100">
                    <i className="fa-solid fa-circle-check text-hyundai-secondary mb-3"></i>
                    <p className="font-bold text-[11px] uppercase tracking-tight">{f}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100">
              <h2 className="text-2xl font-bold text-hyundai-primary mb-8">Spesifikasi</h2>
              <div className="space-y-4">
                {Object.entries(displayDetails.specs).map(([label, value]: any) => (
                  <div key={label} className="flex justify-between items-center py-4 border-b border-gray-50 last:border-0">
                    <span className="text-gray-400 font-bold uppercase text-[10px] tracking-widest">{label}</span>
                    <span className="text-hyundai-primary font-bold text-sm text-right">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-hyundai-primary p-10 rounded-3xl text-white shadow-2xl relative overflow-hidden">
              <i className="fa-solid fa-shield-halved absolute -right-4 -bottom-4 text-9xl opacity-10 rotate-12"></i>
              <h3 className="text-xl font-bold mb-8 border-b border-white/20 pb-4">Keuntungan Pembelian</h3>
              <ul className="space-y-5">
                {[
                  "Cash, Kredit, Tukar Tambah, atau COP",
                  "Data & BI Checking dibantu sampai Approve",
                  "Layanan Home Test Drive 24 Jam",
                  "Bonus Aksesoris Lengkap & Diskon Maksimal"
                ].map((text, i) => (
                  <li key={i} className="flex gap-4 items-start text-sm text-blue-100 font-light">
                    <i className="fa-solid fa-check-circle text-blue-400 mt-1"></i>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
