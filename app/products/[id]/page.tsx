import { PRODUCTS } from "../../../lib/products";
import { SITE_CONFIG } from "../../../lib/config";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = PRODUCTS.find((p) => p.id === params.id);

  if (!product) {
    notFound();
  }

  const waLink = `${SITE_CONFIG.WHATSAPP_LINK}?text=Halo Alfried, saya tertarik dengan Hyundai ${product.name}. Mohon info promonya.`;

  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative pt-24 pb-12 bg-white lg:pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Gallery Mockup */}
            <div className="space-y-4">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-100 aspect-[4/3]">
                <img src={product.image} alt={product.name} className="w-full h-full object-contain p-8" />
              </div>
            </div>

            {/* Info */}
            <div>
              <span className="bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">{product.category}</span>
              <h1 className="text-4xl font-bold text-gray-900 mt-4 mb-2">Hyundai {product.name}</h1>
              <p className="text-3xl font-bold text-hyundai-primary mb-8">{product.price}</p>

              <div className="prose text-gray-600 mb-8 text-sm leading-relaxed">
                <p>Nikmati kecanggihan berkendara dengan {product.name}. Dilengkapi dengan teknologi terbaru Hyundai untuk kenyamanan dan keamanan keluarga Anda.</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href={waLink} className="flex-1 text-center bg-hyundai-wa text-white px-6 py-3.5 rounded-xl font-bold hover:brightness-110 shadow-lg">
                  Minta Penawaran
                </a>
                <Link href="/simulasi-kredit" className="flex-1 text-center bg-white border border-gray-300 text-gray-700 px-6 py-3.5 rounded-xl font-bold hover:bg-gray-50">
                  Hitung Kredit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specs Table Mockup */}
      <section className="py-16 bg-hyundai-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-hyundai-primary mb-8 text-center">Spesifikasi Utama</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="font-bold text-lg mb-4 text-blue-500">Performa</h3>
              <p className="text-sm text-gray-600">Mesin efisien dengan transmisi responsif untuk pengalaman berkendara halus.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="font-bold text-lg mb-4 text-blue-500">SmartSense</h3>
              <p className="text-sm text-gray-600">Fitur keselamatan aktif untuk melindungi Anda di setiap perjalanan.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="font-bold text-lg mb-4 text-blue-500">Kenyamanan</h3>
              <p className="text-center md:text-left text-sm text-gray-600">Kabin lapang dengan material premium dan fitur hiburan mutakhir.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
