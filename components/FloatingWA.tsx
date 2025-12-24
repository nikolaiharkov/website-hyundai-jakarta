import { SITE_CONFIG } from "../lib/config";

export default function FloatingWA() {
  const message = "Halo Alfried, saya ingin tanya promo Hyundai terbaru.";
  const waUrl = `${SITE_CONFIG.WHATSAPP_LINK}?text=${encodeURIComponent(message)}`;

  return (
    <a href={waUrl} target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-50 group">
      <div className="absolute -top-10 right-0 bg-white text-gray-800 text-xs font-bold py-1 px-3 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap border border-gray-100">
        Chat Sekarang!
      </div>
      <div className="bg-hyundai-wa w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition duration-300 wa-pulse">
        <svg className="w-9 h-9 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
        </svg>
      </div>
    </a>
  );
}
