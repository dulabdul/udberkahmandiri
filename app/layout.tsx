import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FloatingButtons from '@/components/ui/FloatingButton';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'UD Cahaya Barokah | Pusat Grosir Sembako Termurah',
  description:
    'Pusat grosir sembako termurah dan terpercaya. Melayani pengiriman ke seluruh Indonesia untuk toko, agen, dan kebutuhan pribadi.',
  metadataBase: new URL('https://www.udcahayabarokah.com'),
  openGraph: {
    title: 'UD Cahaya Barokah - Grosir Sembako',
    description: 'Belanja kebutuhan pokok harga grosir termurah disini.',
    url: 'https://www.udcahayabarokah.com',
    siteName: 'UD Cahaya Barokah',
    locale: 'id_ID',
    type: 'website',
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
