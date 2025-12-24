import { SITE_CONFIG } from "../../lib/config";

export default function ProsesKreditPage() {
  const steps = [
    { n: 1, title: "Pemesanan (SPK)", desc: "Tentukan tipe, warna, dan bayar Booking Fee sebagai tanda jadi pemesanan unit." },
    { n: 2, title: "Proses Data", desc: "Penyerahan dokumen persyaratan kredit. Tim kami akan bantu proses survey leasing." },
    { n: 3, title: "Approval (PO)", desc: "Kabar gembira! Kredit disetujui. Unit dialokasikan untuk Anda." },
    { n: 4, title: "Pelunasan DP", desc: "Pembayaran sisa uang muka. Administrasi STNK diproses." },
    { n: 5, title: "Delivery", desc: "Unit dikirim ke rumah Anda. Cek fisik kendaraan dan serah terima!", isSuccess: true },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-hyundai-primary text-white pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Proses Kredit Mudah & Transparan</h1>
          <p className="text-blue-100 max-w-2xl mx-auto">Kami memandu Anda langkah demi langkah, dari pemilihan unit hingga mobil parkir di garasi Anda.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center text-hyundai-primary mb-12">5 Langkah Menuju Mobil Impian</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {steps.map((step) => (
              <div key={step.n} className="bg-white p-6 rounded-xl border border-gray-100 shadow-lg text-center transform hover:-translate-y-1 transition duration-300">
                <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 border-4 border-white shadow-sm font-bold text-xl ${step.isSuccess ? "bg-green-100 text-green-600" : "bg-blue-100 text-hyundai-primary"}`}>
                  {step.isSuccess ? <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> : step.n}
                </div>
                <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-hyundai-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center text-hyundai-primary mb-12">Syarat Dokumen Kredit</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Perorangan */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="bg-hyundai-secondary p-4 text-white text-center font-bold text-lg">Karyawan / Perorangan</div>
              <div className="p-8">
                <ul className="space-y-4 text-gray-700">
                  {["Fotokopi KTP Suami & Istri", "Fotokopi Kartu Keluarga (KK)", "Fotokopi NPWP", "PBB Rumah / Rekening Listrik", "Rekening Tabungan 3 Bulan Terakhir", "Slip Gaji / Surat Keterangan Kerja"].map(item => (
                    <li key={item} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-green-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* Perusahaan */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="bg-hyundai-primary p-4 text-white text-center font-bold text-lg">Perusahaan / PT</div>
              <div className="p-8 text-gray-700">
                <ul className="space-y-4">
                  {["Akta Pendirian & Perubahan", "SIUP, TDP, NIB, NPWP Perusahaan", "KTP Direksi & Komisaris", "Rekening Koran 3 Bulan Terakhir", "Domisili Perusahaan"].map(item => (
                    <li key={item} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-green-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
