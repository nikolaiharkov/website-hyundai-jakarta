"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SITE_CONFIG } from "../lib/config";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Pricelist", href: "/pricelist" },
    { name: "Proses Kredit", href: "/proses-kredit" },
    { name: "Simulasi", href: "/simulasi-kredit" },
    { name: "Test Drive", href: "/test-drive" },
    { name: "Galeri", href: "/galeri" },
    { name: "Kontak", href: "/kontak" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md shadow-sm transition-all duration-300">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <img src={SITE_CONFIG.LOGO_PATH} alt="Hyundai Logo" className="h-8 w-auto" />
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-none text-hyundai-primary tracking-tight uppercase">
                {SITE_CONFIG.SALES_NAME.split(' ')[1]} HYUNDAI
              </span>
              <span className="text-[10px] text-gray-500 tracking-widest uppercase">{SITE_CONFIG.SALES_TITLE}</span>
            </div>
          </Link>

          <div className="hidden xl:flex space-x-6 items-center text-sm font-semibold text-gray-600">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${
                  pathname === link.href ? "text-hyundai-primary border-b-2 border-hyundai-primary pb-1" : "hover:text-hyundai-primary transition"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a href={`tel:+${SITE_CONFIG.WHATSAPP_NUMBER}`} className="flex flex-col text-right group">
              <span className="text-[10px] text-gray-400 uppercase tracking-wide group-hover:text-hyundai-primary">Hubungi Kami</span>
              <span className="font-bold text-hyundai-primary text-lg group-hover:underline tracking-wide">
                {SITE_CONFIG.WHATSAPP_NUMBER.replace(/(\d{2})(\d{3})(\d{4})(\d{3})/, '+$1 $2-$3-$4')}
              </span>
            </a>
          </div>

          <div className="xl:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-hyundai-primary focus:outline-none p-2">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? "block" : "hidden"} xl:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl`}>
        <div className="px-4 pt-2 pb-6 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-3 text-base font-medium rounded-md ${
                pathname === link.href ? "text-hyundai-primary bg-blue-50 font-bold" : "text-gray-700 hover:text-hyundai-primary hover:bg-gray-50"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="border-t border-gray-100 my-2 pt-2">
            <a href={`tel:+${SITE_CONFIG.WHATSAPP_NUMBER}`} className="block px-3 py-2 text-base font-medium text-gray-600">
              📞 {SITE_CONFIG.WHATSAPP_NUMBER}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
