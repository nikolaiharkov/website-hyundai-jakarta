import Link from "next/link";
import { SITE_CONFIG } from "../lib/config";
import { PRODUCTS } from "../lib/products";

export default function HomePage() {
  const featured = PRODUCTS.slice(0, 3);

  return (
    <>
      {/* Hero Section dengan Dekorasi SVG */}
      <section className="relative overflow-hidden bg-hyundai-navy min-h-[90vh] flex items-center">
        {/* Background Decoration SVG */}
        <div className="absolute inset-0 z-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>

        {/* Abstract Shape SVG */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 z-0 text-hyundai-blue/20">
          <svg width="600" height="600" viewBox="0 0 200 200" fill="currentColor">
            <circle cx="100" cy="100" r="80" />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight mb-6 tracking-tight">
              Driving <span className="text-hyundai-blue">Future</span> <br/>With Style.
            </h1>
            <p className="text-xl text-gray-300 mb-10 max-w-lg font-light leading-relaxed">
              {SITE_CONFIG.HERO_SUBHEAD}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/pricelist" className="bg-hyundai-blue hover:bg-white hover:text-hyundai-navy px-10 py-4 rounded-sm font-bold transition-all duration-300 uppercase tracking-widest text-sm shadow-xl">
                Explore Models
              </Link>
              <a href={SITE_CONFIG.WHATSAPP_LINK} className="border-2 border-white/30 hover:bg-white/10 px-10 py-4 rounded-sm font-bold transition-all text-sm uppercase tracking-widest">
                Consultation
              </a>
            </div>
          </div>
          <div className="hidden lg:block relative">
             {/* Product Spotlight Image */}
             <img src="/foto-product/18ce96208b_hyundai-ioniq-5-color-751349-removebg-preview-1.png" className="w-full drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)] scale-125" alt="Hero Car" />
          </div>
        </div>
      </section>

      {/* Benefit Section dengan Icon SVG Clean */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-16">
            <div className="group">
              <div className="text-hyundai-navy mb-6 group-hover:text-hyundai-blue transition-colors">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold uppercase tracking-widest mb-4">Official Warranty</h3>
              <p className="text-hyundai-subtext leading-relaxed">Layanan purna jual resmi Hyundai Indonesia dengan garansi mesin dan baterai terbaik di kelasnya.</p>
            </div>

            <div className="group">
              <div className="text-hyundai-navy mb-6 group-hover:text-hyundai-blue transition-colors">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold uppercase tracking-widest mb-4">Fast Process</h3>
              <p className="text-hyundai-subtext leading-relaxed">Proses pengajuan kredit yang transparan, cepat, dan data dibantu hingga pengiriman unit ke garasi Anda.</p>
            </div>

            <div className="group">
              <div className="text-hyundai-navy mb-6 group-hover:text-hyundai-blue transition-colors">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-lg font-bold uppercase tracking-widest mb-4">Home Test Drive</h3>
              <p className="text-hyundai-subtext leading-relaxed">Nikmati kemudahan mencoba mobil impian langsung di rumah atau kantor Anda tanpa biaya tambahan.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
