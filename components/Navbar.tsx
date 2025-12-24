"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SITE_CONFIG } from "../lib/config";

export default function Navbar() {
  const pathname = usePathname();
  const links = [
    { name: "HOME", href: "/" },
    { name: "PRICELIST", href: "/pricelist" },
    { name: "PROSES KREDIT", href: "/proses-kredit" },
    { name: "SIMULASI KREDIT", href: "/simulasi-kredit" }, // Perbaikan Teks
    { name: "TEST DRIVE", href: "/test-drive" },
    { name: "KONTAK", href: "/kontak" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white border-b border-gray-100 shadow-sm h-20 flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full flex justify-between items-center">
        <Link href="/" className="flex items-center gap-4">
          <img src={SITE_CONFIG.LOGO_PATH} alt="Logo" className="h-6 w-auto" />
          <p className="text-[11px] font-black tracking-tighter text-hyundai-navy border-l pl-4 border-gray-200 uppercase">
            {SITE_CONFIG.SALES_NAME.split(' ')[1]} Hyundai
          </p>
        </Link>
        <div className="hidden xl:flex gap-8">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className={`text-[10px] font-bold tracking-[0.2em] transition-colors ${pathname === link.href ? "text-hyundai-blue border-b-2 border-hyundai-blue" : "text-hyundai-navy hover:text-hyundai-blue"}`}>
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
