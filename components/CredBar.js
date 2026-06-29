'use client'

import Image from 'next/image'

const CLOUD = 'https://res.cloudinary.com/dahhugaqf/image/upload'

// ── CREDENTIALS BAR ──────────────────────────────────────
export function CredBar() {
  const creds = [
    { label: 'CIDB', sub: 'Registered' },
    { label: 'B-BBEE', sub: 'Compliant' },
    { label: 'CSD', sub: 'Registered' },
    { label: 'SARS', sub: 'Tax Cleared' },
    { label: 'CIPC', sub: 'Registered' },
  ]

  return (
    <div className="credbar" style={{
      background: '#0A0A0A', padding: '0 52px',
      display: 'flex', alignItems: 'center',
      borderBottom: '1px solid rgba(255,255,255,0.07)',
      flexWrap: 'wrap', gap: 0,
    }}>
      {creds.map((c, i) => (
        <div key={i} style={{
          display: 'flex', alignItems: 'center', gap: '8px',
          padding: '18px 28px 18px 0', marginRight: '28px',
          borderRight: i < creds.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none',
          whiteSpace: 'nowrap',
        }}>
          <span style={{
            fontFamily: 'Oswald, sans-serif', fontSize: '11px',
            fontWeight: 400, letterSpacing: '2px', textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.45)',
          }}>
            <strong style={{ color: '#E8650A', fontWeight: 600 }}>{c.label}</strong> {c.sub}
          </span>
        </div>
      ))}
      <span className="credbar-reg" style={{
        marginLeft: 'auto',
        fontFamily: 'Oswald, sans-serif', fontSize: '10px',
        letterSpacing: '1.5px', color: 'rgba(255,255,255,0.22)',
        paddingLeft: '28px', whiteSpace: 'nowrap',
      }}>Reg No: 2019/343931/07</span>
    </div>
  )
}

// ── CLIENTS STRIP ─────────────────────────────────────────
export function Clients() {
  return (
    <div className="clients-strip" style={{
      background: '#F5F5F3', padding: '44px 52px',
      display: 'flex', alignItems: 'center', gap: '56px',
      borderBottom: '1px solid #E0E0E0', flexWrap: 'wrap',
    }}>
      <span style={{
        fontFamily: 'Oswald, sans-serif', fontSize: '11px',
        fontWeight: 400, letterSpacing: '3px', textTransform: 'uppercase',
        color: '#888', whiteSpace: 'nowrap', flexShrink: 0,
      }}>Work Delivered For</span>

      <div style={{ display: 'flex', alignItems: 'center', gap: '52px', flexWrap: 'wrap' }}>
        {[
          { id: 'Royal_Bafokeng_logo_iv9y0f', name: 'Royal Bafokeng Administration', ext: 'jpg' },
          { id: 'Sibanye_logo_pd2ngs', name: 'Sibanye Stillwater', ext: 'png' },
        ].map(c => (
          <div key={c.id} style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '7px',
            opacity: 0.45, transition: 'opacity 0.25s', cursor: 'default',
          }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.8'}
            onMouseLeave={e => e.currentTarget.style.opacity = '0.45'}
          >
            <img
              src={`${CLOUD}/q_auto,h_80/${c.id}.${c.ext}`}
              alt={c.name}
              style={{ height: '42px', width: 'auto', objectFit: 'contain' }}
            />
            <span style={{
              fontFamily: 'Oswald, sans-serif', fontSize: '9px',
              letterSpacing: '2px', textTransform: 'uppercase', color: '#888',
            }}>{c.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── STATS BAR ─────────────────────────────────────────────
export function Stats() {
  const stats = [
    { n: '7', l: 'Service Capabilities' },
    { n: '3+', l: 'Completed Contracts' },
    { n: '100%', l: 'Procurement Compliant' },
    { n: '2019', l: 'Year Established' },
  ]

  return (
    <div className="stats-grid" style={{
      display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
      background: '#E8650A',
    }}>
      {stats.map((s, i) => (
        <div key={i} style={{
          padding: '52px 36px', textAlign: 'center',
          borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.2)' : 'none',
        }}>
          <div style={{
            fontFamily: 'Oswald, sans-serif', fontSize: '58px',
            fontWeight: 700, color: '#fff', lineHeight: 1,
            marginBottom: '8px', letterSpacing: '-2px',
          }}>{s.n}</div>
          <div style={{
            fontFamily: 'Oswald, sans-serif', fontSize: '11px',
            fontWeight: 400, letterSpacing: '2.5px',
            textTransform: 'uppercase', color: 'rgba(255,255,255,0.72)',
          }}>{s.l}</div>
        </div>
      ))}
    </div>
  )
}

// ── EMAIL STRIP ───────────────────────────────────────────
export function EmailStrip() {
  const copy = () => {
    navigator.clipboard.writeText('info@ogpservices.co.za').catch(() => {})
  }

  return (
    <div className="email-strip" style={{
      background: 'linear-gradient(135deg, #E8650A, #D85C00)',
      padding: '28px 52px',
      display: 'flex', alignItems: 'center',
      justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px',
    }}>
      {[
        { label: 'Director — OG Petlele', val: 'gratitude@ogpservices.co.za' },
        { label: 'General & Tender Enquiries', val: 'info@ogpservices.co.za' },
      ].map(e => (
        <div key={e.val}>
          <div style={{
            fontFamily: 'Oswald, sans-serif', fontSize: '10px',
            fontWeight: 400, letterSpacing: '2.5px', textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.68)', marginBottom: '4px',
          }}>{e.label}</div>
          <div style={{
            fontFamily: 'Oswald, sans-serif', fontSize: '20px',
            fontWeight: 600, color: '#fff',
          }}>{e.val}</div>
        </div>
      ))}
      <button onClick={copy} style={{
        fontFamily: 'Oswald, sans-serif', fontSize: '11px',
        fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase',
        background: 'rgba(0,0,0,0.22)', color: '#fff',
        border: 'none', padding: '13px 26px', cursor: 'pointer',
        transition: 'background 0.2s',
      }}
        onMouseEnter={e => e.target.style.background = 'rgba(0,0,0,0.38)'}
        onMouseLeave={e => e.target.style.background = 'rgba(0,0,0,0.22)'}
      >Copy Email</button>
    </div>
  )
}
