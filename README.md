# Website Sales Hyundai Jakarta

Website profil profesional dan katalog produk otomotif yang dirancang khusus untuk Brand Consultant Hyundai (**M. Alfried Taftazani**) di wilayah Jakarta dan sekitarnya. Proyek ini dibangun menggunakan teknologi web modern untuk memastikan performa tinggi, SEO yang optimal, dan pengalaman pengguna yang responsif.

## Deskripsi Singkat

Proyek ini berfungsi sebagai platform pemasaran digital untuk memamerkan jajaran mobil Hyundai (seperti **Stargazer, Creta, IONIQ 5**, dll.). Website ini memfasilitasi calon pembeli untuk melihat spesifikasi detail, promo terbaru, melakukan simulasi kredit, hingga menghubungi sales secara langsung melalui integrasi **WhatsApp**.

## Fitur Utama

- **Katalog Produk Dinamis:** Menampilkan daftar mobil Hyundai lengkap dengan kategori (SUV, MPV, Electric, dll.) dan harga terbaru.
- **Halaman Detail Produk:** Informasi teknis mendalam mencakup fitur unggulan, spesifikasi mesin, varian harga, hingga penawaran promo khusus per model.
- **Integrasi Kontak Langsung:** Tombol WhatsApp melayang (*Floating WA*) dan tautan langsung untuk mempermudah konversi pengunjung menjadi prospek.
- **Sistem Simulasi & Proses Kredit:** Halaman khusus untuk membantu pengguna memahami simulasi cicilan dan persyaratan pengajuan kredit.
- **Optimasi SEO & Metadata:** Metadata dinamis pada setiap halaman untuk meningkatkan visibilitas di mesin pencari.
- **Tracking & Analytics:** Integrasi bawaan dengan **Harkovnet Analytics** dan **Meta Pixel** untuk memantau perilaku pengunjung dan efektivitas iklan.
- **Desain Responsif:** Antarmuka yang dioptimalkan untuk perangkat mobile dan desktop menggunakan **Tailwind CSS**.

## Teknologi & Dependensi

- **Framework Utama:** Next.js **16.1.1** (App Router)
- **Library UI:** React **19.2.3**
- **Bahasa Pemrograman:** TypeScript
- **Styling:** Tailwind CSS **3.4.19**, PostCSS, Autoprefixer
- **Ikon & Font:** FontAwesome **6.4.0** dan Google Fonts (**Inter**)
- **Analitik:** Harkovnet Analytics Script & Meta Pixel

## Struktur Proyek

```text
├── app/                    # Routing Next.js (App Router)
│   ├── galeri/             # Halaman galeri foto penyerahan/unit
│   ├── kontak/             # Informasi kontak lengkap
│   ├── pricelist/          # Daftar harga terbaru
│   ├── products/[id]/      # Halaman detail produk dinamis berdasarkan ID
│   ├── proses-kredit/      # Informasi alur pengajuan kredit
│   ├── simulasi-kredit/    # Kalkulator/informasi simulasi cicilan
│   ├── test-drive/         # Form/halaman permintaan test drive
│   ├── layout.tsx          # Layout utama (Navbar, Footer, Analytics)
│   └── page.tsx            # Landing page utama
├── components/             # Komponen UI (Navbar, Footer, FloatingWA, dll.)
├── lib/                    # Manajemen Data & Konfigurasi
│   ├── config.ts           # Pusat pengaturan identitas sales & dealer
│   ├── products.ts         # Data dasar katalog produk
│   └── productData.ts      # Data spesifikasi detail & promo produk
├── public/                 # File statis (Logo, Foto Produk, Favicon, dll.)
├── tailwind.config.ts      # Konfigurasi Tailwind CSS
└── package.json            # Dependensi dan script project
```

## Konfigurasi

Pusat konfigurasi aplikasi berada di `lib/config.ts`. Anda dapat mengubah informasi sales tanpa menyentuh kode komponen.

Beberapa field yang umum diatur:

- `SALES_NAME`: Nama lengkap tenaga penjual.
- `WHATSAPP_NUMBER`: Nomor WhatsApp (format internasional, misal: `628...`).
- `WHATSAPP_LINK`: Tautan langsung menuju chat WhatsApp.
- `SHOWROOM_MAPS_URL`: Tautan lokasi Google Maps dealer.
- `HERO_HEADLINE`: Teks utama pada bagian landing page.

> **Catatan:** Pastikan nilai-nilai di atas konsisten dengan identitas sales/dealer agar metadata SEO tetap relevan.

## Cara Instalasi

1) Clone repositori:

```bash
git clone <repository-url>
cd website-hyundai-jakarta
```

2) Install dependensi:

```bash
npm install
```

## Cara Menjalankan Aplikasi

### Mode Pengembangan (Development)

```bash
npm run dev
```

Aplikasi akan berjalan di `http://localhost:3000`.

### Mode Produksi (Build & Start)

```bash
npm run prod
# atau secara manual
npm run build
npm run start
```

## Struktur Data Produk

Aplikasi menggunakan sistem pemetaan **ID** untuk menampilkan detail produk.

- **List Produk** (`lib/products.ts`): berisi `id`, `name`, `priceNumeric`, dan `category`.
- **Detail Produk** (`lib/productData.ts`): menggunakan ID dari list produk (misal: `h-01` untuk Stargazer) untuk menarik data fitur, spesifikasi teknis, dan varian harga.

Contoh pemanggilan data di halaman dinamis:

```ts
// app/products/[id]/page.tsx
const productInfo = DETAILED_PRODUCT_INFO[params.id];
```

## Catatan Tambahan

- **Hydration Warning:** Pada `app/layout.tsx`, atribut `suppressHydrationWarning` digunakan pada tag `<html>` untuk menghindari error akibat injeksi skrip analitik atau ekstensi browser.
- **Dynamic Theme Injection:** Terdapat konfigurasi Tailwind yang disuntikkan langsung via `<script>` di dalam `layout.tsx` untuk memastikan konsistensi warna brand Hyundai secara runtime.
- **SEO:** Pastikan setiap perubahan pada `SITE_CONFIG` di `lib/config.ts` sesuai dengan identitas sales agar metadata yang dihasilkan tetap relevan untuk pencarian Google.
