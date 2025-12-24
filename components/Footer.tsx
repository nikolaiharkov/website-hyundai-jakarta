import Link from "next/link";
import { SITE_CONFIG } from "../lib/config";

export default function Footer() {
  return (
    <footer className="bg-hyundai-dark text-gray-300 pt-16 pb-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-white text-2xl font-bold mb-2 uppercase">{SITE_CONFIG.SALES_NAME.split(' ')[1]} HYUNDAI</h3>
            <p className="text-sm text-gray-400 mb-4 uppercase tracking-wider">{SITE_CONFIG.SALES_TITLE}</p>
            <p className="mb-6 leading-relaxed text-sm">
              Mitra profesional Anda dalam kepemilikan kendaraan Hyundai. Melayani pembelian Cash, Kredit, dan Trade-in untuk area {SITE_CONFIG.SALES_AREA}.
            </p>
          </div>

          <div>
            <h3 className="text-white text-lg font-bold mb-4">Menu Navigasi</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-hyundai-accent transition">Home</Link></li>
              <li><Link href="/pricelist" className="hover:text-hyundai-accent transition">Daftar Harga</Link></li>
              <li><Link href="/proses-kredit" className="hover:text-hyundai-accent transition">Proses Kredit</Link></li>
              <li><Link href="/simulasi-kredit" className="hover:text-hyundai-accent transition">Simulasi Kredit</Link></li>
              <li><Link href="/test-drive" className="hover:text-hyundai-accent transition">Booking Test Drive</Link></li>
              <li><Link href="/galeri" className="hover:text-hyundai-accent transition">Galeri & Testimoni</Link></li>
              <li><Link href="/kontak" className="hover:text-hyundai-accent transition">Kontak Saya</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-bold mb-4">Hubungi Kami</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-hyundai-accent mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Jl. Jend. Sudirman No.Kav 1, Jakarta Selatan</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-hyundai-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href={`tel:+${SITE_CONFIG.WHATSAPP_NUMBER}`} className="hover:text-white transition">+{SITE_CONFIG.WHATSAPP_NUMBER}</a>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-hyundai-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="break-all">{SITE_CONFIG.EMAIL}</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} {SITE_CONFIG.SALES_NAME} Hyundai. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
