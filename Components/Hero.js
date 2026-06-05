'use client'

import { useState, useEffect } from 'react'

const CLOUD = 'https://res.cloudinary.com/dahhugaqf/image/upload'
const T = 'f_auto,q_auto,w_1600'

const slides = [
  { id: '20230910_120245_ikzxpe', alt: 'OGP Services grass cutting at Sibanye Stillwater mine' },
  { id: '20260211_111603_rplfr4', alt: 'OGP Services boundary wall construction RBA school' },
  { id: '20230909_151630_voif2g', alt: 'OGP Services vegetation management Sibanye Stillwater' },
  { id: '20260213_095414_g6a2wo', alt: 'OGP Services bricklaying crew RBA school project' },
]

export default function Hero() {
  const [cur, setCur] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setCur(c => (c + 1) % slides.length), 5000)
    return () => clearInterval(t)
  }, [])

  return (
    <section id="top" style={{
      height: '100vh', minHeight: '620px',
      position: 'relative', overflow: 'hidden',
      display: 'flex', alignItems: 'flex-end',
    }}>
      {/* Slides */}
      {slides.map((s, i) => (
        <div key={s.id} style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url(${CLOUD}/${T}/${s.id}.jpg)`,
          backgroundSize: 'cover', backgroundPosition: 'center',
          opacity: i === cur ? 1 : 0,
          transition: 'opacity 1.4s ease',
        }} />
      ))}

      {/* Overlays */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to right, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.35) 60%, rgba(0,0,0,0.15) 100%)',
      }} />
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: '35%',
        background: 'linear-gradient(to top, rgba(0,0,0,0.55), transparent)',
      }} />

      {/* Content */}
      <div style={{
        position: 'relative', zIndex: 2,
        padding: '0 52px 88px', maxWidth: '860px',
      }}>
        {/* Eyebrow */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: '14px',
          fontFamily: 'Oswald, sans-serif', fontSize: '11px',
          fontWeight: 400, letterSpacing: '3px', textTransform: 'uppercase',
          color: '#E8650A', marginBottom: '22px',
        }}>
          <span style={{ width: '32px', height: '1px', background: '#E8650A', display: 'block' }} />
          Rustenburg, North West &nbsp;&bull;&nbsp; Est. 2019
        </div>

        {/* H1 */}
        <h1 style={{
          fontFamily: 'Oswald, sans-serif',
          fontSize: 'clamp(56px, 7.5vw, 104px)',
          fontWeight: 700, lineHeight: 0.93,
          color: '#fff', letterSpacing: '-1px',
          textTransform: 'uppercase', marginBottom: '28px',
        }}>
          Built on<br />
          <span style={{ color: '#E8650A' }}>Local Ground.</span>
        </h1>

        {/* Sub */}
        <p style={{
          fontSize: '17px', fontWeight: 300,
          color: 'rgba(255,255,255,0.72)',
          maxWidth: '500px', lineHeight: 1.7, marginBottom: '40px',
          fontFamily: 'Source Sans 3, sans-serif',
        }}>
          OGP Services (Pty) Ltd is a <strong style={{ color: '#fff', fontWeight: 500 }}>CIDB-registered civil contractor and mining support company</strong> based in Rustenburg &mdash; with a proven track record at Royal Bafokeng Administration and Sibanye Stillwater.
        </p>

        {/* Buttons */}
        <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
          <a href="#services" style={{
            fontFamily: 'Oswald, sans-serif', fontSize: '12px',
            fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase',
            background: '#E8650A', color: '#fff',
            padding: '16px 38px', textDecoration: 'none',
            transition: 'background 0.2s', display: 'inline-block',
          }}
            onMouseEnter={e => e.target.style.background = '#FF7A20'}
            onMouseLeave={e => e.target.style.background = '#E8650A'}
          >Our Services</a>
          <a href="#gallery" style={{
            fontFamily: 'Oswald, sans-serif', fontSize: '12px',
            fontWeight: 500, letterSpacing: '2px', textTransform: 'uppercase',
            background: 'transparent', color: '#fff',
            padding: '16px 38px', textDecoration: 'none',
            border: '1px solid rgba(255,255,255,0.4)',
            transition: 'all 0.2s', display: 'inline-block',
          }}
            onMouseEnter={e => { e.target.style.borderColor = '#fff'; e.target.style.background = 'rgba(255,255,255,0.08)' }}
            onMouseLeave={e => { e.target.style.borderColor = 'rgba(255,255,255,0.4)'; e.target.style.background = 'transparent' }}
          >See Our Work</a>
        </div>
      </div>

      {/* Dots */}
      <div style={{
        position: 'absolute', bottom: '36px', right: '52px',
        zIndex: 2, display: 'flex', gap: '8px',
      }}>
        {slides.map((_, i) => (
          <button key={i} onClick={() => setCur(i)} style={{
            width: i === cur ? '26px' : '8px',
            height: '8px',
            borderRadius: i === cur ? '4px' : '50%',
            background: i === cur ? '#E8650A' : 'rgba(255,255,255,0.3)',
            border: 'none', cursor: 'pointer',
            transition: 'all 0.3s', padding: 0,
          }} />
        ))}
      </div>

      <style>{`
        @media (max-width: 900px) {
          #top > div[style*="padding: 0 52px"] {
            padding: 0 20px 72px !important;
          }
        }
      `}</style>
    </section>
  )
}
