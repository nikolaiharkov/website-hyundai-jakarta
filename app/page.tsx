import Link from "next/link";
import Image from "next/image";
import { SITE_CONFIG } from "../lib/config";
import { PRODUCTS } from "../lib/products";
import PromoSection from "../components/PromoSection";

export default function HomePage() {
  // MODIFIKASI: Menampilkan 6 mobil terpopuler/unggulan
  const featuredProducts = PRODUCTS.filter(p =>
    [
      "New Creta",
      "Stargazer",
      "Stargazer X",
      "All New Kona Electric",
      "IONIQ 5",
      "Palisade"
    ].includes(p.name)
  ).slice(0, 6);

  return (
    <div className="bg-hyundai-light">
      {/* HERO SECTION */}
      <section className="relative pt-20 lg:pt-0 lg:h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/backgroud/hyundai-simprug.jpeg"
            alt="Showroom Hyundai Jakarta"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-hyundai-primary/95 via-hyundai-primary/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 lg:py-0">
          <div className="lg:w-7/12 text-white">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 pr-6 pl-2 py-2 rounded-full mb-6">
              <div className="relative w-10 h-10 overflow-hidden rounded-full border-2 border-white">
                <Image
                  src={SITE_CONFIG.SALES_PHOTO_PATH}
                  alt={SITE_CONFIG.SALES_NAME}
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <div className="text-left leading-tight">
                <p className="font-bold text-sm text-white">{SITE_CONFIG.SALES_NAME}</p>
                <p className="text-[11px] text-blue-200 uppercase tracking-wider">{SITE_CONFIG.SALES_TITLE}</p>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Wujudkan Mobil <span className="text-blue-300">Hyundai</span> Impian Anda
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl">
              {SITE_CONFIG.HERO_SUBHEAD}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href={SITE_CONFIG.WHATSAPP_LINK} className="flex justify-center items-center gap-3 bg-white text-hyundai-primary px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition shadow-lg text-lg">
                <i className="fa-brands fa-whatsapp text-2xl"></i> Hubungi Sales
              </a>
              <Link href="/pricelist" className="flex justify-center items-center gap-3 bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition text-lg backdrop-blur-sm">
                <i className="fa-solid fa-tags"></i> Lihat Pricelist
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* KEUNGGULAN SECTION */}
      <section className="py-16 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-hyundai-primary">Kenapa Memilih Kami?</h2>
            <p className="text-gray-500 mt-2">Layanan standar showroom resmi dengan sentuhan personal.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
                { title: "Consultant Berpengalaman", icon: "fa-user-tie", desc: "Rekomendasi unit terbaik sesuai kebutuhan dan budget Anda." },
                { title: "Harga & Diskon Terbaik", icon: "fa-tags", desc: "Jaminan penawaran termurah dengan bonus aksesoris maksimal." },
                { title: "Layanan Delivery", icon: "fa-truck-fast", desc: "Unit diantar langsung ke rumah Anda dengan aman dan bersih." },
                { title: "Free Test Drive", icon: "fa-car-side", desc: "Layanan test drive fleksibel di showroom kami atau unit kami antar langsung ke rumah Anda." }
            ].map((item, idx) => (
                <div key={idx} className="p-8 rounded-2xl bg-hyundai-light hover:shadow-xl transition duration-300 border border-transparent hover:border-hyundai-secondary/20 group">
                    <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-hyundai-secondary shadow-sm mb-6 group-hover:bg-hyundai-primary group-hover:text-white transition text-2xl">
                        <i className={`fa-solid ${item.icon}`}></i>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODIFIKASI: SECTION PROMO TERBARU */}
      <PromoSection />

      {/* MODEL TERPOPULER */}
      <section className="py-16 bg-hyundai-light">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold text-hyundai-primary">Model Terpopuler</h2>
              <p className="text-gray-500 mt-2">Pilihan favorit keluarga Indonesia.</p>
            </div>
            <Link href="/pricelist" className="hidden md:inline-flex items-center text-hyundai-secondary font-semibold hover:text-hyundai-primary gap-2">
              Lihat Semua Model <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition border border-gray-100 flex flex-col group">
                <div className="relative h-56 bg-gray-50 overflow-hidden flex items-center justify-center">
                  <Image
                    src={product.image}
                    alt={`Hyundai ${product.name}`}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold text-gray-900 uppercase">Hyundai {product.name}</h3>
                  <p className="text-gray-500 text-sm mb-4">Unit terbaik di kelasnya.</p>
                  <div className="mt-auto">
                    <p className="text-sm text-gray-500">Harga Mulai</p>
                    <p className="text-xl font-bold text-hyundai-primary mb-6">{product.price}</p>
                    <Link href={`/products/${product.id}`} className="block w-full text-center py-3 rounded-xl bg-hyundai-secondary text-white font-bold hover:bg-hyundai-primary transition shadow-md">
                      Lihat Detail
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link href="/pricelist" className="inline-flex items-center text-hyundai-secondary font-semibold hover:text-hyundai-primary gap-2">
              Lihat Semua Model <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* AREA LAYANAN (LOCAL SEO ENHANCEMENT) */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-hyundai-primary mb-4 text-center">Wilayah Cakupan Layanan</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto">
              Kami melayani konsultasi, test drive, dan pengantaran unit mobil Hyundai untuk seluruh wilayah Jakarta, Tangerang, dan Tangerang Selatan hingga tingkat kecamatan.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {SITE_CONFIG.SERVICE_AREAS.map((area, idx) => (
              <div key={idx} className="space-y-6">
                <div className="flex items-center gap-3 border-b-2 border-hyundai-secondary/20 pb-2">
                  <i className="fa-solid fa-location-dot text-hyundai-secondary text-xl"></i>
                  <h3 className="text-xl font-bold text-hyundai-primary uppercase tracking-wide">
                    {area.city}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {area.districts.map((district, dIdx) => (
                    <span
                      key={dIdx}
                      className="px-3 py-1 bg-hyundai-light text-gray-600 text-xs rounded-full border border-gray-100 hover:border-hyundai-secondary/30 transition-colors cursor-default"
                      title={`Dealer & Sales Hyundai di ${district}`}
                    >
                      <span className="sr-only">Dealer & Sales Hyundai </span>
                      {district}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 bg-hyundai-primary rounded-3xl text-white text-center shadow-2xl">
            <h3 className="text-2xl font-bold mb-4">Lokasi Anda Tidak Terdaftar?</h3>
            <p className="mb-8 opacity-90">Jangan khawatir, kami tetap melayani pengiriman dan test drive untuk seluruh area JABODETABEK.</p>
            <a
              href={SITE_CONFIG.WHATSAPP_LINK}
              className="inline-flex items-center gap-3 bg-white text-hyundai-primary px-10 py-4 rounded-xl font-black hover:scale-105 transition-transform"
            >
              <i className="fa-brands fa-whatsapp text-2xl"></i> CEK PROMO WILAYAH ANDA
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
