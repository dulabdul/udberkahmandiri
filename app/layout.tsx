import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FloatingButtons from '@/components/ui/FloatingButton';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

// URL Website Anda (Pastikan konsisten pakai www atau tidak)
const BASE_URL = 'https://www.udcahayabarokah.com';

export const metadata: Metadata = {
  // 1. MetadataBase: Wajib ada agar opengraph-image.tsx terbaca
  metadataBase: new URL(BASE_URL),

  // 2. Judul & Deskripsi Utama
  title: {
    default: 'UD Cahaya Barokah | Pusat Grosir Sembako Termurah',
    template: '%s | UD Cahaya Barokah', // Jika di halaman lain ada title berbeda
  },
  description:
    'Pusat grosir sembako termurah dan terpercaya di Indonesia. Melayani pengiriman beras, minyak, gula, dan kebutuhan pokok lainnya.',

  // 3. OpenGraph (Facebook, WA, LinkedIn)
  openGraph: {
    title: 'UD Cahaya Barokah - Pusat Grosir Sembako Termurah',
    description:
      'Belanja kebutuhan pokok harga grosir termurah disini. Siap antar ke seluruh Indonesia.',
    url: BASE_URL,
    siteName: 'UD Cahaya Barokah',
    locale: 'id_ID',
    type: 'website',
    // Catatan: 'images' tidak perlu ditulis disini karena sudah ada opengraph-image.tsx
  },

  // 4. Twitter Card (Penting agar tampilan di Twitter/X besar)
  twitter: {
    card: 'summary_large_image',
    title: 'UD Cahaya Barokah - Grosir Sembako',
    description: 'Pusat grosir sembako termurah dan terpercaya.',
    // Twitter akan otomatis fallback mengambil gambar dari OpenGraph jika tidak didefinisikan spesifik
  },

  // 5. Canonical URL (SEO Best Practice)
  alternates: {
    canonical: BASE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='id'
      className='scroll-smooth'>
      <body className={inter.className}>
        <Navbar />
        <main className='min-h-screen flex flex-col'>{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
