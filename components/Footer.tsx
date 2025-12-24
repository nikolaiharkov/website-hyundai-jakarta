"use client";

import Link from "next/link";
import { SITE_CONFIG } from "../lib/config";

export default function Footer() {
  return (
    <footer className="bg-hyundai-primary text-gray-300 pt-16 pb-8 mt-auto border-t-4 border-hyundai-secondary">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Kolom 1 */}
          <div>
            <h3 className="text-white text-2xl font-bold mb-2 uppercase tracking-tighter">HYUNDAI MOBIL INDONESIA</h3>
            <p className="text-sm text-blue-300 mb-4 uppercase tracking-wider font-bold">Authorized Dealer</p>
            <p className="mb-6 leading-relaxed text-sm text-gray-200 font-light">
              Mitra profesional Anda dalam kepemilikan kendaraan Hyundai. Melayani pembelian Cash, Kredit, dan Trade-in dengan penawaran terbaik.
            </p>
          </div>

          {/* Kolom 2 */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6 border-b border-white/10 pb-2 inline-block">Menu Navigasi</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="hover:text-white transition flex items-center gap-2"><i className="fa-solid fa-chevron-right text-[10px]"></i> Home</Link></li>
              <li><Link href="/pricelist" className="hover:text-white transition flex items-center gap-2"><i className="fa-solid fa-chevron-right text-[10px]"></i> Daftar Harga</Link></li>
              <li><Link href="/simulasi-kredit" className="hover:text-white transition flex items-center gap-2"><i className="fa-solid fa-chevron-right text-[10px]"></i> Simulasi Kredit</Link></li>
              <li><Link href="/test-drive" className="hover:text-white transition flex items-center gap-2"><i className="fa-solid fa-chevron-right text-[10px]"></i> Booking Test Drive</Link></li>
            </ul>
          </div>

          {/* Kolom 3 */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6 border-b border-white/10 pb-2 inline-block">Hubungi Kami</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <i className="fa-solid fa-location-dot mt-1 text-blue-300"></i>
                <span className="font-light">Jl. Teuku Nyak Arief No.14, Grogol Selatan, Kec. Kebayoran Lama, Jakarta Selatan</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fa-solid fa-phone text-blue-300"></i>
                <a href={`tel:+${SITE_CONFIG.WHATSAPP_NUMBER}`} className="hover:text-white transition font-bold">+{SITE_CONFIG.WHATSAPP_NUMBER}</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar dengan Link Aktif */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 gap-4">
          <p>
            &copy; 2025{" "}
            <a href="https://carihyundaijakarta.com" className="hover:text-white font-bold transition">
              carihyundaijakarta.com
            </a>
          </p>
          <p>
            Developed by{" "}
            <a
              href="https://harkovnet.biz.id/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-bold hover:underline transition"
            >
              PT. Harkovnet Teknologi Indonesia
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
