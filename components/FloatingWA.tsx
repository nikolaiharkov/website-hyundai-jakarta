import { SITE_CONFIG } from "../lib/config";

export default function FloatingWA() {
  return (
    <a
      href={SITE_CONFIG.WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <div className="absolute -top-10 right-0 bg-white text-gray-800 text-xs font-bold py-1 px-3 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap border border-gray-100">
        Chat Sekarang!
      </div>
      <div className="bg-hyundai-wa w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition duration-300 wa-pulse text-white text-3xl">
        <i className="fa-brands fa-whatsapp"></i>
      </div>
    </a>
  );
}
