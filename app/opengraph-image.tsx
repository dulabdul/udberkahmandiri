import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const alt = 'UD Berkah Mandiri - Pusat Grosir Sembako Termurah';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  // Kita fetch font agar tampilan teks terlihat profesional (mirip font website)
  // Menggunakan Google Fonts API untuk mengambil raw font data
  const fontSemiBold = await fetch(
    new URL(
      'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuGKYAZ9hA-E.woff2',
      import.meta.url
    )
  ).then((res) => res.arrayBuffer());

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
            background: 'rgba(22, 163, 74, 0.1)', // Green-600 with opacity
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
            background: 'rgba(249, 115, 22, 0.1)', // Orange-500 with opacity
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
            background: '#16A34A', // Green-600
            borderRadius: '24px',
            boxShadow: '0 10px 30px rgba(22, 163, 74, 0.3)',
          }}>
          {/* Simple Icon Sembako (SVG Path) */}
          <svg
            width='64'
            height='64'
            viewBox='0 0 24 24'
            fill='none'
            stroke='white'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'>
            <path d='M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z' />
            <path d='M3 6h18' />
            <path d='M16 10a4 4 0 0 1-8 0' />
          </svg>
        </div>

        {/* Main Title */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 900,
            background: 'linear-gradient(to bottom right, #0f172a, #334155)',
            backgroundClip: 'text',
            color: 'transparent',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            textAlign: 'center',
            marginBottom: '20px',
            display: 'flex',
          }}>
          UD Berkah Mandiri
        </div>

        {/* Subtitle / Tagline */}
        <div
          style={{
            fontSize: 32,
            color: '#64748B', // Slate-500
            textAlign: 'center',
            maxWidth: '80%',
            lineHeight: 1.4,
          }}>
          Pusat Grosir Sembako Termurah & Terlengkap
        </div>

        {/* Badge / Footer Info */}
        <div
          style={{
            marginTop: '40px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            background: '#F0FDF4', // Green-50
            border: '1px solid #BBF7D0', // Green-200
            padding: '12px 32px',
            borderRadius: '50px',
          }}>
          <div
            style={{
              width: '12px',
              height: '12px',
              background: '#16A34A',
              borderRadius: '50%',
            }}
          />
          <div style={{ fontSize: 24, color: '#15803D', fontWeight: 600 }}>
            Melayani Pengiriman Seluruh Indonesia
          </div>
        </div>
      </div>
    ),
    // ImageResponse options
    {
      ...size,
      fonts: [
        {
          name: 'Inter',
          data: fontSemiBold,
          style: 'normal',
          weight: 600,
        },
      ],
    }
  );
}
