import Button from '../ui/Button';
import { SITE_CONFIG } from '@/data/content';

export default function CtaBanner() {
  return (
    <section className='py-10 container-custom'>
      <div className='relative rounded-3xl overflow-hidden bg-primary text-white text-center py-16 px-6'>
        {/* Background Overlay Image could go here via CSS or Next Image absolute */}
        <div className="absolute inset-0 bg-[url('https://placehold.co/1200x400/15803D/15803D?text=')] opacity-20 mix-blend-multiply"></div>

        <div className='relative z-10 max-w-3xl mx-auto space-y-6'>
          <div className='text-sm font-bold tracking-widest opacity-80 uppercase'>
            {SITE_CONFIG.name}
          </div>
          <h2 className='text-3xl md:text-5xl font-bold'>
            Mulai Belanja Sembako Grosir Termurah Sekarang!
          </h2>
          <p className='text-lg md:text-xl text-green-50'>
            Dapatkan penawaran terbatas untuk pembelian besar! Jaminan stok aman
            dan pengiriman cepat ke seluruh Indonesia.
          </p>
          <Button
            href={`https://wa.me/${SITE_CONFIG.whatsappNumber}`}
            external
            variant='secondary'
            size='lg'
            className='mt-4'>
            Hubungi Kami Sekarang
          </Button>
        </div>
      </div>
    </section>
  );
}
