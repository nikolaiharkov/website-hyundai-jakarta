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
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className="scroll-smooth" style={{ colorScheme: 'light' }}>
      <head>
        <Script src="https://cdn.tailwindcss.com" strategy="beforeInteractive" />
        <script dangerouslySetInnerHTML={{
          __html: `
            tailwind.config = {
              darkMode: 'class',
              theme: {
                extend: {
                  colors: {
                    hyundai: {
                      navy: '#002c5f',      // Primary Brand Color
                      blue: '#00aad2',      // Secondary/Electric
                      sand: '#f6f3f2',      // Background
                      text: '#333333',      // Main Text
                      subtext: '#666666',   // Muted Text
                    }
                  },
                  fontFamily: {
                    sans: ['Inter', 'sans-serif'],
                    display: ['Inter', 'sans-serif'],
                  }
                }
              }
            }
          `
        }} />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{
          __html: `
            body {
              background-color: #f6f3f2 !important;
              color: #333333 !important;
              font-feature-settings: "cv11", "ss01";
            }
            .hyundai-gradient {
              background: linear-gradient(135deg, #002c5f 0%, #004a99 100%);
            }
          `
        }} />
      </head>
      <body className="antialiased flex flex-col min-h-screen">
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
