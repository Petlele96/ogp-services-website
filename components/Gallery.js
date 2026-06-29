'use client'

import { useState } from 'react'

const CLOUD = 'https://res.cloudinary.com/dahhugaqf/image/upload'
const T = 'f_auto,q_auto,w_900'

const grassPhotos = [
  { id: '20230909_151630_voif2g', desc: 'Grass cutting — Sibanye Stillwater, Rustenburg', logo: 'Sibanye_logo_pd2ngs', ext: 'png' },
  { id: '20230910_135853_saz0rr', desc: 'On-site vegetation management — Sibanye Stillwater', logo: 'Sibanye_logo_pd2ngs', ext: 'png' },
  { id: '20230910_120245_ikzxpe', desc: 'Mine shaft vegetation — Rustenburg mining operations', logo: 'Sibanye_logo_pd2ngs', ext: 'png' },
  { id: '20230910_123134_eetcmv', desc: 'Restricted zone grass cutting — Sibanye Stillwater', logo: 'Sibanye_logo_pd2ngs', ext: 'png' },
]

const wallPhotos = [
  { id: '20260211_111603_rplfr4', desc: 'Boundary wall — Tshukudu High School, RBA', logo: 'Royal_Bafokeng_logo_iv9y0f', ext: 'jpg' },
  { id: '20260213_095414_g6a2wo', desc: 'Full bricklaying crew — RBA school wall project', logo: 'Royal_Bafokeng_logo_iv9y0f', ext: 'jpg' },
  { id: '20260225_081421_k73rl4', desc: 'Foundation pour with concrete pump — RBA project', logo: 'Royal_Bafokeng_logo_iv9y0f', ext: 'jpg' },
  { id: '20260207_120249_bsh852', desc: 'Material delivery and site logistics — RBA school', logo: 'Royal_Bafokeng_logo_iv9y0f', ext: 'jpg' },
]

function PhotoCard({ photo }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative', overflow: 'hidden', height: '440px',
        cursor: 'default',
      }}
    >
      <img
        src={`${CLOUD}/${T}/${photo.id}.jpg`}
        alt={photo.desc}
        style={{
          width: '100%', height: '100%', objectFit: 'cover', display: 'block',
          transform: hovered ? 'scale(1.05)' : 'scale(1)',
          transition: 'transform 0.6s ease',
        }}
        loading="lazy"
      />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.1) 55%, transparent 100%)',
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
        padding: '28px',
        opacity: hovered ? 1 : 0,
        transition: 'opacity 0.3s',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '7px' }}>
          <img
            src={`${CLOUD}/f_auto,q_auto,h_36/${photo.logo}.${photo.ext}`}
            alt="client logo"
            style={{ height: '18px', width: 'auto', filter: 'brightness(0) invert(1)', opacity: 0.7 }}
          />
        </div>
        <div style={{
          fontFamily: 'Oswald, sans-serif', fontSize: '13px',
          fontWeight: 400, letterSpacing: '1px',
          color: 'rgba(255,255,255,0.85)',
        }}>{photo.desc}</div>
      </div>
    </div>
  )
}

export default function Gallery() {
  const [tab, setTab] = useState('grass')
  const photos = tab === 'grass' ? grassPhotos : wallPhotos

  return (
    <section id="gallery" style={{ background: '#0A0A0A', padding: 0 }}>
      {/* Header */}
      <div className="gallery-header" style={{ padding: '72px 52px 48px' }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: '14px',
          fontFamily: 'Oswald, sans-serif', fontSize: '11px',
          fontWeight: 400, letterSpacing: '3px', textTransform: 'uppercase',
          color: '#E8650A', marginBottom: '16px',
        }}>
          <span style={{ width: '28px', height: '1px', background: '#E8650A', display: 'block' }} />
          Our Work
        </div>
        <h2 style={{
          fontFamily: 'Oswald, sans-serif',
          fontSize: 'clamp(34px, 4.2vw, 58px)',
          fontWeight: 700, lineHeight: 0.97,
          textTransform: 'uppercase', letterSpacing: '-0.5px',
          color: '#fff', marginBottom: '20px',
        }}>On the Ground.<br />Every Time.</h2>
        <p style={{
          fontSize: '16px', fontWeight: 300,
          color: 'rgba(255,255,255,0.58)',
          maxWidth: '560px', lineHeight: 1.75,
          fontFamily: 'Source Sans 3, sans-serif',
        }}>
          These are not stock photos. This is OGP Services on site — at Sibanye Stillwater&apos;s mining operations and delivering the Royal Bafokeng Administration school boundary wall project.
        </p>

        {/* Tabs */}
        <div className="gallery-tabs" style={{
          display: 'flex', gap: 0, marginTop: '28px',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
        }}>
          {[
            { key: 'grass', label: 'Grass Cutting — Sibanye Stillwater' },
            { key: 'wall', label: 'Boundary Wall Construction — RBA School' },
          ].map(t => (
            <button key={t.key} onClick={() => setTab(t.key)} className="gallery-tab" style={{
              fontFamily: 'Oswald, sans-serif', fontSize: '12px',
              fontWeight: 400, letterSpacing: '2px', textTransform: 'uppercase',
              color: tab === t.key ? '#E8650A' : 'rgba(255,255,255,0.4)',
              padding: '14px 28px', border: 'none', background: 'transparent',
              cursor: 'pointer', transition: 'all 0.2s',
              borderBottom: tab === t.key ? '2px solid #E8650A' : '2px solid transparent',
              marginBottom: '-1px',
            }}>{t.label}</button>
          ))}
        </div>
      </div>

      {/* Photo grid */}
      <div className="gallery-grid" style={{
        display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2px',
      }}>
        {photos.map(p => <PhotoCard key={p.id} photo={p} />)}
      </div>
    </section>
  )
}
