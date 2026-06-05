'use client'

const services = [
  'Grass Cutting & Vegetation',
  'Fencing & Boundary Walls',
  'Plumbing & Sanitation',
  'Roads & Stormwater',
  'Water Tankers & Logistics',
  'Building Maintenance',
  'Mining Site Services',
]

const company = [
  { label: 'About Us', href: '#about' },
  { label: 'Our Work', href: '#gallery' },
  { label: 'Track Record', href: '#track' },
  { label: 'Contact Us', href: '#contact' },
  { label: 'Get a Quote', href: '#contact' },
]

const compliance = [
  'CIDB Registration',
  'B-BBEE Certificate',
  'CSD Registration',
  'Tax Clearance',
  'CIPC Registration',
]

export default function Footer() {
  return (
    <footer style={{ background: '#0A0A0A', padding: '72px 52px 40px' }}>
      {/* Top grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '2fr 1fr 1fr 1fr',
        gap: '52px',
        paddingBottom: '52px',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
      }}>

        {/* Brand */}
        <div>
          <img
            src="/logo.png"
            alt="OGP Services (Pty) Ltd"
            style={{ height: '60px', width: 'auto', display: 'block', marginBottom: '20px', objectFit: 'contain' }}
          />
          <p style={{
            fontFamily: 'Oswald, sans-serif', fontSize: '13px',
            fontWeight: 400, letterSpacing: '1px',
            color: 'rgba(255,255,255,0.35)',
            lineHeight: 1.6, maxWidth: '280px', marginBottom: '24px',
          }}>
            Civil Contractor & Mining Support Services.<br />
            Based in Rustenburg, North West.<br />
            Serving mines, municipalities, and government since 2019.
          </p>

          {/* Compliance badges */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
            {['CIDB', 'B-BBEE', 'CSD', 'Tax Cleared'].map(b => (
              <span key={b} style={{
                fontFamily: 'Oswald, sans-serif', fontSize: '9px',
                fontWeight: 400, letterSpacing: '1.5px', textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.35)', border: '1px solid rgba(255,255,255,0.1)',
                padding: '4px 10px',
              }}>{b}</span>
            ))}
          </div>

          {/* Contact details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {[
              { href: 'tel:+27795335440', text: '079 533 5440' },
              { href: 'mailto:info@ogpservices.co.za', text: 'info@ogpservices.co.za' },
              { href: 'mailto:gratitude@ogpservices.co.za', text: 'gratitude@ogpservices.co.za' },
              { href: '#top', text: 'www.ogpservices.co.za' },
            ].map(l => (
              <a key={l.text} href={l.href} style={{
                fontSize: '13px', fontWeight: 300,
                color: 'rgba(255,255,255,0.38)',
                textDecoration: 'none', transition: 'color 0.2s',
                fontFamily: 'Source Sans 3, sans-serif',
              }}
                onMouseEnter={e => e.target.style.color = '#fff'}
                onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.38)'}
              >{l.text}</a>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <h5 style={{
            fontFamily: 'Oswald, sans-serif', fontSize: '10px',
            fontWeight: 400, letterSpacing: '2.5px', textTransform: 'uppercase',
            color: '#E8650A', marginBottom: '20px',
          }}>Services</h5>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '11px' }}>
            {services.map(s => (
              <li key={s}>
                <a href="#services" style={{
                  fontSize: '13px', fontWeight: 300,
                  color: 'rgba(255,255,255,0.35)', textDecoration: 'none',
                  transition: 'color 0.2s', fontFamily: 'Source Sans 3, sans-serif',
                }}
                  onMouseEnter={e => e.target.style.color = '#fff'}
                  onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.35)'}
                >{s}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h5 style={{
            fontFamily: 'Oswald, sans-serif', fontSize: '10px',
            fontWeight: 400, letterSpacing: '2.5px', textTransform: 'uppercase',
            color: '#E8650A', marginBottom: '20px',
          }}>Company</h5>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '11px' }}>
            {company.map(c => (
              <li key={c.label}>
                <a href={c.href} style={{
                  fontSize: '13px', fontWeight: 300,
                  color: 'rgba(255,255,255,0.35)', textDecoration: 'none',
                  transition: 'color 0.2s', fontFamily: 'Source Sans 3, sans-serif',
                }}
                  onMouseEnter={e => e.target.style.color = '#fff'}
                  onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.35)'}
                >{c.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Compliance */}
        <div>
          <h5 style={{
            fontFamily: 'Oswald, sans-serif', fontSize: '10px',
            fontWeight: 400, letterSpacing: '2.5px', textTransform: 'uppercase',
            color: '#E8650A', marginBottom: '20px',
          }}>Compliance</h5>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '11px' }}>
            {compliance.map(c => (
              <li key={c}>
                <a href="#about" style={{
                  fontSize: '13px', fontWeight: 300,
                  color: 'rgba(255,255,255,0.35)', textDecoration: 'none',
                  transition: 'color 0.2s', fontFamily: 'Source Sans 3, sans-serif',
                }}
                  onMouseEnter={e => e.target.style.color = '#fff'}
                  onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.35)'}
                >{c}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{
        display: 'flex', alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap', gap: '12px',
        paddingTop: '28px',
      }}>
        <p style={{
          fontSize: '11px', color: 'rgba(255,255,255,0.18)',
          fontFamily: 'Oswald, sans-serif', letterSpacing: '0.5px',
        }}>
          &copy; 2025 OGP Services (Pty) Ltd &middot; All Rights Reserved &middot; Rustenburg, North West
        </p>
        <div style={{
          fontSize: '11px', color: 'rgba(255,255,255,0.18)',
          fontFamily: 'Oswald, sans-serif', letterSpacing: '0.5px',
        }}>
          Reg No: 2019/343931/07 &middot; CIDB &middot; B-BBEE &middot; CSD
        </div>
      </div>

      <style>{`
        @media(max-width:900px) {
          footer { padding: 56px 20px 32px !important; }
          footer > div:first-child { grid-template-columns: 1fr 1fr !important; gap: 32px !important; }
          footer > div:first-child > div:first-child { grid-column: span 2; }
        }
      `}</style>
    </footer>
  )
}
