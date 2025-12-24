"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SITE_CONFIG } from "../lib/config";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "PRICELIST", href: "/pricelist" },
    { name: "PROSES KREDIT", href: "/proses-kredit" },
    { name: "SIMULASI KREDIT", href: "/simulasi-kredit" },
    { name: "TEST DRIVE", href: "/test-drive" },
    { name: "GALERI", href: "/galeri" },
    { name: "KONTAK", href: "/kontak" },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-white shadow-sm"}`}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <img src={SITE_CONFIG.LOGO_PATH} alt="Hyundai Logo" className="h-8 w-auto" />
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-none text-hyundai-primary tracking-tight uppercase">
                {SITE_CONFIG.SALES_NAME.split(' ')[1]} HYUNDAI
              </span>
              <span className="text-[10px] text-gray-500 tracking-widest uppercase">Brand Consultant</span>
            </div>
          </Link>

          <div className="hidden xl:flex space-x-6 items-center text-sm font-semibold text-gray-600">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`uppercase tracking-wide transition ${
                  pathname === link.href
                    ? "text-hyundai-primary border-b-2 border-hyundai-primary pb-1 font-bold"
                    : "hover:text-hyundai-primary"
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
                <i className="fa-solid fa-phone mr-2"></i>
                {SITE_CONFIG.WHATSAPP_NUMBER.replace(/(\d{4})(\d{4})(\d{3})/, '$1-$2-$3')}
              </span>
            </a>
          </div>

          <div className="xl:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-hyundai-primary focus:outline-none p-2 text-2xl">
              <i className={`fa-solid ${isOpen ? "fa-xmark" : "fa-bars"}`}></i>
            </button>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"} overflow-hidden transition-all duration-300 xl:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl`}>
        <div className="px-4 pt-2 pb-6 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-3 text-base font-medium rounded-md ${
                pathname === link.href
                  ? "text-hyundai-primary bg-blue-50 font-bold"
                  : "text-gray-700 hover:text-hyundai-primary hover:bg-gray-50"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
