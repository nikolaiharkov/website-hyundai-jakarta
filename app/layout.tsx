import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
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
    <html lang="id" style={{ colorScheme: 'light' }}>
      <head>
        {/* FontAwesome CDN */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossOrigin="anonymous" referrerPolicy="no-referrer" />

        {/* Google Fonts */}
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />

        <Script src="https://cdn.tailwindcss.com" strategy="beforeInteractive" />
        <script dangerouslySetInnerHTML={{
          __html: `
            tailwind.config = {
              darkMode: 'class',
              theme: {
                extend: {
                  colors: {
                    hyundai: {
                      navy: '#002c5f',      // Warna Utama (Logo Text)
                      blue: '#00aad2',      // Warna Aksen (Logo Symbol)
                      sand: '#f6f3f2',      // Background Showroom Light
                      dark: '#1a1a1a',      // Text Body
                      gray: '#666666',      // Text Muted
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
      </head>
      <body className="antialiased flex flex-col min-h-screen bg-hyundai-sand text-hyundai-dark">
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
