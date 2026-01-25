import type { Metadata } from "next";
import Script from "next/script"; // Import komponen Script Next.js
import "./globals.css";
import { SITE_CONFIG } from "../lib/config";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingWA from "../components/FloatingWA";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.DOMAIN),
  title: {
    default: `${SITE_CONFIG.SALES_NAME} - Dealer Resmi Hyundai Jakarta`,
    template: `%s | ${SITE_CONFIG.SALES_NAME} Hyundai`
  },
  description: SITE_CONFIG.SITE_DESCRIPTION,
  keywords: SITE_CONFIG.SITE_KEYWORDS,
  authors: [{ name: SITE_CONFIG.SALES_NAME }],
  robots: "index, follow",
  icons: { icon: SITE_CONFIG.ICON_PATH },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: SITE_CONFIG.DOMAIN,
    title: `${SITE_CONFIG.SALES_NAME} - Hyundai Jakarta`,
    description: SITE_CONFIG.SITE_DESCRIPTION,
    siteName: SITE_CONFIG.DEALER_NAME,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.SALES_NAME} - Hyundai Jakarta`,
    description: SITE_CONFIG.SITE_DESCRIPTION,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // JSON-LD untuk Profile Sales (LocalBusiness/Person)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoDealer",
    "name": SITE_CONFIG.DEALER_NAME,
    "description": SITE_CONFIG.SITE_DESCRIPTION,
    "url": SITE_CONFIG.DOMAIN,
    "telephone": SITE_CONFIG.WHATSAPP_NUMBER,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Jakarta",
      "addressRegion": "DKI Jakarta",
      "addressCountry": "ID"
    },
    "founder": {
      "@type": "Person",
      "name": SITE_CONFIG.SALES_NAME,
      "jobTitle": SITE_CONFIG.SALES_TITLE
    }
  };

  return (
    <html lang="id" style={{ colorScheme: 'light' }} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* --- EXISTING SCRIPTS (Harkovnet & FB Pixel) --- */}
        <script defer src="https://analytics.harkovnet.biz.id/script.js" data-website-id="810454d3-d0dd-456f-95e5-1b0256297b7a"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '2245403295939944');
            fbq('track', 'PageView');
          `
        }} />

        {/* --- STYLES & FONTS --- */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />

        {/* --- TAILWIND CONFIG INJECTION --- */}
        <script dangerouslySetInnerHTML={{
          __html: `
            tailwind.config = {
              theme: {
                extend: {
                  colors: {
                    hyundai: {
                      primary: '#012C68', secondary: '#2A4B78', accent: '#576F96',
                      light: '#F6F8FA', dark: '#0B1220', wa: '#25D366',
                    }
                  },
                  fontFamily: { sans: ['Inter', 'sans-serif'] }
                }
              }
            }
          `
        }} />
        <style dangerouslySetInnerHTML={{
          __html: `
            body { font-family: 'Inter', sans-serif; background-color: #F6F8FA !important; color: #0B1220 !important; }
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
        <noscript>
          <img height="1" width="1" style={{ display: 'none' }} src="https://www.facebook.com/tr?id=2245403295939944&ev=PageView&noscript=1" alt="" />
        </noscript>

        <Navbar />

        <main className="flex-grow pt-20">
          {children}
        </main>

        <Footer />
        <FloatingWA />

        {/* --- GOOGLE TAGS (Analytics & Ads) START --- */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-MHH139N98W"
          strategy="afterInteractive"
        />
        <Script id="google-tags" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            // Konfigurasi Google Analytics 4
            gtag('config', 'G-MHH139N98W');

            // Konfigurasi Google Ads
            gtag('config', 'AW-17882059118');
          `}
        </Script>
        {/* --- GOOGLE TAGS END --- */}

      </body>
    </html>
  );
}
