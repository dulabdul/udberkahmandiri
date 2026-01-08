import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const alt = 'UD Cahaya Barokah - Pusat Grosir Sembako';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  // KITA HAPUS FETCH FONT AGAR TIDAK ERROR
  // Next.js OG akan menggunakan font default (sans-serif) yang aman.

  return new ImageResponse(
    (
      // Container Utama
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f8fafc', // Slate-50
          backgroundImage:
            'radial-gradient(circle at 25px 25px, #e2e8f0 2%, transparent 0%), radial-gradient(circle at 75px 75px, #e2e8f0 2%, transparent 0%)',
          backgroundSize: '100px 100px',
          fontFamily: 'sans-serif', // Gunakan font system
        }}>
        {/* Dekorasi Background Circle */}
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            left: '-100px',
            height: '400px',
            width: '400px',
            borderRadius: '100%',
            background: 'rgba(22, 163, 74, 0.1)',
            filter: 'blur(80px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-50px',
            right: '-50px',
            height: '300px',
            width: '300px',
            borderRadius: '100%',
            background: 'rgba(249, 115, 22, 0.1)',
            filter: 'blur(80px)',
          }}
        />

        {/* Logo / Brand Box */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '40px',
            padding: '20px',
            background: '#16A34A',
            borderRadius: '24px',
            boxShadow: '0 10px 30px rgba(22, 163, 74, 0.3)',
          }}>
          {/* Icon Keranjang Sederhana */}
          <svg
            width='64'
            height='64'
            viewBox='0 0 24 24'
            fill='none'
            stroke='white'
            strokeWidth='3'
            strokeLinecap='round'
            strokeLinejoin='round'>
            <circle
              cx='9'
              cy='21'
              r='1'
            />
            <circle
              cx='20'
              cy='21'
              r='1'
            />
            <path d='M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6' />
          </svg>
        </div>

        {/* Main Title */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 900, // Bold
            color: '#1e293b', // Slate-800
            lineHeight: 1.1,
            textAlign: 'center',
            marginBottom: '20px',
            display: 'flex',
          }}>
          UD Cahaya Barokah
        </div>

        {/* Subtitle / Tagline */}
        <div
          style={{
            fontSize: 32,
            color: '#64748B',
            textAlign: 'center',
            maxWidth: '80%',
            lineHeight: 1.4,
          }}>
          Pusat Grosir Sembako Termurah & Terpercaya
        </div>

        {/* Badge */}
        <div
          style={{
            marginTop: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#F0FDF4',
            border: '2px solid #16A34A',
            padding: '12px 32px',
            borderRadius: '50px',
            color: '#15803D',
            fontSize: 24,
            fontWeight: 600,
          }}>
          Siap Antar Seluruh Indonesia
        </div>
      </div>
    ),
    {
      ...size,
      // fonts: [] <--- KITA HAPUS OPSI FONTS AGAR MENGGUNAKAN DEFAULT
    }
  );
}
