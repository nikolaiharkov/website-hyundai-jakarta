import type { Metadata } from "next";
import "./globals.css";
import { SITE_CONFIG } from "../lib/config";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingWA from "../components/FloatingWA";

export const metadata: Metadata = {
  title: `${SITE_CONFIG.SALES_NAME} - Hyundai Jakarta`,
  description: SITE_CONFIG.HERO_SUBHEAD,
  icons: { icon: "/assets/logo/favicon.ico" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    /* Menambahkan suppressHydrationWarning untuk menghindari error atribut yang disuntikkan browser/plugin */
    <html lang="id" style={{ colorScheme: 'light' }} suppressHydrationWarning>
      <head>
        {/* FontAwesome CDN */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />

        {/* Google Fonts */}
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />

        {/* FIX: Menggunakan tag <script> biasa (bukan next/script)
           untuk memastikan urutan eksekusi yang benar (Synchronous).
        */}
        <script src="https://cdn.tailwindcss.com"></script>

        <script dangerouslySetInnerHTML={{
          __html: `
            tailwind.config = {
              theme: {
                extend: {
                  colors: {
                    hyundai: {
                      primary: '#012C68',   // Deep Blue
                      secondary: '#2A4B78', // Medium Blue
                      accent: '#576F96',    // Soft Blue
                      light: '#F6F8FA',     // Background White-ish
                      dark: '#0B1220',      // Text Black-ish
                      wa: '#25D366',        // WhatsApp Green
                    }
                  },
                  fontFamily: {
                    sans: ['Inter', 'sans-serif'],
                  }
                }
              }
            }
          `
        }} />

        {/* Fallback CSS */}
        <style dangerouslySetInnerHTML={{
          __html: `
            body {
                font-family: 'Inter', sans-serif;
                background-color: #F6F8FA !important;
                color: #0B1220 !important;
            }
            @keyframes pulse-wa {
                0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7); }
                70% { box-shadow: 0 0 0 15px rgba(37, 211, 102, 0); }
                100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
            }
            .wa-pulse { animation: pulse-wa 2s infinite; }
          `
        }} />
      </head>
      <body className="antialiased flex flex-col min-h-screen bg-hyundai-light text-hyundai-dark">
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
        <FloatingWA />
      </body>
    </html>
  );
}
