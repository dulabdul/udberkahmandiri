import Image from 'next/image';
import Button from '../ui/Button';
import { SITE_CONFIG } from '@/data/content';

export default function HeroSection() {
  return (
    <section
      id='hero'
      className='relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-green-50 to-white'>
      <div className='container-custom grid md:grid-cols-2 gap-12 items-center'>
        {/* Left Content */}
        <div className='space-y-6 animate-fade-in-up'>
          <span className='inline-block px-4 py-1.5 rounded-full bg-orange-100 text-secondary font-semibold text-sm'>
            #1 Pusat Grosir Sembako Terpercaya
          </span>
          <h1 className='text-4xl md:text-6xl font-extrabold leading-tight text-text-main'>
            Belanja <span className='text-primary'>Sembako Grosir</span> <br />
            Lebih Murah & Mudah
          </h1>
          <p className='text-lg text-text-muted max-w-lg'>
            Solusi tepat untuk toko, agen, dan kebutuhan rumah tangga. Harga
            bersaing, stok melimpah, siap antar ke seluruh Indonesia.
          </p>
          <div className='flex flex-wrap gap-4'>
            <Button
              href={`https://wa.me/${SITE_CONFIG.whatsappNumber}`}
              external
              size='lg'>
              Hubungi Kami via WA
            </Button>
            <Button
              href='#products'
              variant='outline'
              size='lg'>
              Lihat Katalog
            </Button>
          </div>
        </div>

        {/* Right Image Grid (Collage) */}
        <div className='relative h-[400px] md:h-[500px] rounded-3xl w-full'>
          {/* Placeholder for collage. In real project, use separate images positioned absolutely */}
          <div className='absolute top-0 right-0 w-3/4 h-3/4 rounded-3xl transform rotate-3 opacity-20 z-0'></div>
          <Image
            src='/images/hero.png'
            alt='Aneka Sembako Indonesia'
            fill
            className='object-contain rounded-3xl'
            priority
            sizes='(max-width: 768px) 100vw, 50vw'
          />
        </div>
      </div>
    </section>
  );
}
