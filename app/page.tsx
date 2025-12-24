import Link from "next/link";
import { SITE_CONFIG } from "../lib/config";
import { PRODUCTS } from "../lib/products";

export default function HomePage() {
  // Filter produk unggulan
  const featuredProducts = PRODUCTS.filter(p =>
    ["Stargazer", "Creta", "IONIQ 5"].includes(p.name)
  ).slice(0, 3);

  return (
    <div className="bg-white overflow-hidden">
      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[90vh] flex items-center">
        {/* Background Image & Dark Overlay untuk Kontras Teks Putih */}
        <div className="absolute inset-0 z-0">
          <img src="/assets/backgroud/hyundai-simprug.jpeg" alt="Hyundai Showroom" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-hyundai-navy/95 via-hyundai-navy/80 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10 py-20 lg:py-0">
          <div className="text-white">
            <div className="inline-flex items-center gap-2 px-4 py-1 border border-hyundai-blue text-hyundai-blue text-[10px] font-black uppercase tracking-[0.3em] mb-6 bg-hyundai-navy/40 backdrop-blur-md rounded-sm">
              <i className="fa-solid fa-certificate"></i> Official Consultant
            </div>

            <h1 className="text-5xl lg:text-7xl font-black tracking-tighter leading-tight mb-6 drop-shadow-xl">
              Inovasi <br/>
              <span className="text-hyundai-blue">Berkendara.</span>
            </h1>

            <p className="text-lg text-gray-200 font-light max-w-md leading-relaxed mb-10 drop-shadow-md">
              {SITE_CONFIG.HERO_SUBHEAD}
            </p>

            <div className="flex flex-wrap gap-4">
              {/* Tombol Utama: Biru Solid (Kontras Tinggi) */}
              <Link href="/pricelist" className="bg-hyundai-blue text-white px-8 py-4 font-bold uppercase tracking-widest text-[11px] hover:bg-white hover:text-hyundai-navy transition-all duration-300 shadow-lg rounded-sm flex items-center gap-3">
                <i className="fa-solid fa-tag"></i> Lihat Promo
              </Link>

              {/* Tombol Sekunder: Border Putih */}
              <a href={SITE_CONFIG.WHATSAPP_LINK} className="border-2 border-white text-white px-8 py-4 font-bold uppercase tracking-widest text-[11px] hover:bg-white hover:text-hyundai-navy transition-all rounded-sm flex items-center gap-3">
                <i className="fa-brands fa-whatsapp text-lg"></i> Konsultasi
              </a>
            </div>
          </div>

          <div className="hidden lg:block relative group z-20">
            <img
              src="/foto-product/18ce96208b_hyundai-ioniq-5-color-751349-removebg-preview-1.png"
              className="w-full drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform group-hover:scale-105 transition-transform duration-700"
              alt="Hyundai Ioniq 5"
            />
          </div>
        </div>
      </section>

      {/* --- KEUNGGULAN (BENEFITS) DENGAN FONTAWESOME --- */}
      <section className="py-24 bg-white relative border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-hyundai-blue mb-3">
              <i className="fa-solid fa-star mr-2"></i> Kenapa Kami
            </h2>
            <p className="text-3xl font-black uppercase tracking-tighter text-hyundai-navy">Standar Layanan Premium</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="bg-hyundai-sand p-8 rounded-xl border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-14 h-14 bg-white text-hyundai-navy rounded-lg flex items-center justify-center text-2xl shadow-sm mb-6 group-hover:bg-hyundai-navy group-hover:text-hyundai-blue transition-colors">
                <i className="fa-solid fa-shield-halved"></i>
              </div>
              <h3 className="text-sm font-black uppercase tracking-widest text-hyundai-navy mb-4">Garansi Resmi</h3>
              <p className="text-sm text-gray-500 leading-relaxed">Jaminan purna jual standar Hyundai Indonesia untuk mesin dan baterai kendaraan Anda.</p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-hyundai-sand p-8 rounded-xl border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-14 h-14 bg-white text-hyundai-navy rounded-lg flex items-center justify-center text-2xl shadow-sm mb-6 group-hover:bg-hyundai-navy group-hover:text-hyundai-blue transition-colors">
                <i className="fa-solid fa-bolt"></i>
              </div>
              <h3 className="text-sm font-black uppercase tracking-widest text-hyundai-navy mb-4">Proses Cepat</h3>
              <p className="text-sm text-gray-500 leading-relaxed">Data dibantu hingga approve. Kami menangani seluruh proses administrasi leasing dengan cepat.</p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-hyundai-sand p-8 rounded-xl border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-14 h-14 bg-white text-hyundai-navy rounded-lg flex items-center justify-center text-2xl shadow-sm mb-6 group-hover:bg-hyundai-navy group-hover:text-hyundai-blue transition-colors">
                <i className="fa-solid fa-house-chimney-user"></i>
              </div>
              <h3 className="text-sm font-black uppercase tracking-widest text-hyundai-navy mb-4">Home Test Drive</h3>
              <p className="text-sm text-gray-500 leading-relaxed">Unit test drive kami antar ke rumah atau kantor Anda. Coba kenyamanan Hyundai tanpa macet.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- FEATURED MODELS --- */}
      <section className="py-24 bg-hyundai-sand">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <p className="text-hyundai-blue font-bold tracking-[0.3em] uppercase text-[10px] mb-2">
                <i className="fa-solid fa-fire mr-1"></i> Pilihan Favorit
              </p>
              <h2 className="text-4xl font-black text-hyundai-navy tracking-tighter uppercase">Model Terpopuler</h2>
            </div>
            {/* Tombol Teks Gelap agar terlihat di background Sand */}
            <Link href="/pricelist" className="group flex items-center gap-2 text-xs font-black uppercase tracking-widest text-hyundai-navy border-b-2 border-hyundai-blue pb-1 hover:text-hyundai-blue transition-colors">
              Lihat Semua Unit <i className="fa-solid fa-arrow-right transform group-hover:translate-x-1 transition-transform"></i>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 group">
                <div className="p-8 aspect-[16/10] flex items-center justify-center bg-gradient-to-b from-gray-50 to-white relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full object-contain group-hover:scale-110 transition-transform duration-700 z-10"
                  />
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <p className="text-[9px] font-bold text-hyundai-blue uppercase tracking-widest border border-hyundai-blue/20 px-2 py-1 rounded">
                      {product.category}
                    </p>
                  </div>
                  <h3 className="text-2xl font-black text-hyundai-navy uppercase tracking-tight mb-6">{product.name}</h3>

                  <div className="flex justify-between items-end border-t border-gray-100 pt-6">
                    <div>
                      <p className="text-[9px] text-gray-400 uppercase font-bold tracking-widest mb-1">Mulai Dari</p>
                      <p className="text-lg font-black text-hyundai-navy">{product.price}</p>
                    </div>
                    {/* Tombol Detail Navy Solid */}
                    <Link href="/pricelist" className="w-10 h-10 bg-hyundai-navy text-white rounded-full flex items-center justify-center hover:bg-hyundai-blue transition-colors shadow-lg">
                       <i className="fa-solid fa-chevron-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
