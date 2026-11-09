'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const links = [
  { href: '/', label: 'Home' },
  { href: '/#about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/#contact', label: 'Contact' },
]

const linkStyle = {
  fontFamily: 'Oswald, sans-serif', fontSize: '13px',
  fontWeight: 400, letterSpacing: '2px', textTransform: 'uppercase',
  color: 'rgba(255,255,255,0.82)', textDecoration: 'none',
  padding: '28px 18px', display: 'block',
  borderBottom: '2px solid transparent',
  transition: 'color 0.2s, border-color 0.2s',
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // The top contact bar is 36px tall and scrolls away; the nav sits under it until then.
  const top = scrolled ? 0 : 36

  return (
    <nav style={{
      position: 'fixed', top, left: 0, right: 0, zIndex: 1000,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 52px', height: '80px',
      background: scrolled ? '#0A0A0A' : 'rgba(10,10,10,0.35)',
      boxShadow: scrolled ? '0 2px 24px rgba(0,0,0,0.5)' : 'none',
      transition: 'background 0.4s, box-shadow 0.4s, top 0.2s',
    }}>

      <Link href="/" style={{
        display: 'flex', alignItems: 'center',
        textDecoration: 'none', background: 'transparent',
      }}>
        <img
          src="/logo.png"
          alt="OGP Services"
          style={{
            height: '64px', width: 'auto',
            objectFit: 'contain', display: 'block',
            mixBlendMode: 'lighten',
          }}
        />
      </Link>

      <ul style={{ display: 'flex', gap: 0, listStyle: 'none', margin: 0, padding: 0 }}
        className="desktop-nav">
        {links.map(l => (
          <li key={l.href}>
            <Link href={l.href} style={linkStyle}
              onMouseEnter={e => {
                e.currentTarget.style.color = '#E8650A'
                e.currentTarget.style.borderBottomColor = '#E8650A'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = 'rgba(255,255,255,0.82)'
                e.currentTarget.style.borderBottomColor = 'transparent'
              }}
            >{l.label}</Link>
          </li>
        ))}
      </ul>

      <Link href="/#contact" style={{
        fontFamily: 'Oswald, sans-serif', fontSize: '12px',
        fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase',
        background: '#E8650A', color: '#fff',
        padding: '13px 26px', textDecoration: 'none',
        transition: 'background 0.2s',
      }}
        onMouseEnter={e => { e.currentTarget.style.background = '#FF7A20' }}
        onMouseLeave={e => { e.currentTarget.style.background = '#E8650A' }}
        className="desktop-nav"
      >Request a Quote</Link>

      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="mobile-menu-btn"
        aria-label="Open menu"
        aria-expanded={menuOpen}
        style={{
          background: 'none', border: 'none', cursor: 'pointer',
          display: 'none', flexDirection: 'column', gap: '5px', padding: '8px',
        }}
      >
        <span style={{ width: '24px', height: '2px', background: '#fff', display: 'block' }} />
        <span style={{ width: '24px', height: '2px', background: '#fff', display: 'block' }} />
        <span style={{ width: '24px', height: '2px', background: '#fff', display: 'block' }} />
      </button>

      {menuOpen && (
        <div style={{
          position: 'fixed', top: top + 80, left: 0, right: 0,
          background: '#0A0A0A', padding: '20px 24px',
          display: 'flex', flexDirection: 'column', gap: '4px',
          borderTop: '1px solid rgba(255,255,255,0.1)',
        }}>
          {links.map(l => (
            <Link key={l.href} href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: 'Oswald, sans-serif', fontSize: '16px',
                fontWeight: 400, letterSpacing: '2px', textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.8)', textDecoration: 'none',
                padding: '14px 0', borderBottom: '1px solid rgba(255,255,255,0.07)',
              }}
            >{l.label}</Link>
          ))}
          <Link href="/#contact" onClick={() => setMenuOpen(false)} style={{
            fontFamily: 'Oswald, sans-serif', fontSize: '13px',
            fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase',
            background: '#E8650A', color: '#fff',
            padding: '14px 24px', textDecoration: 'none',
            textAlign: 'center', marginTop: '12px',
          }}>Request a Quote</Link>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
          nav { padding: 0 20px !important; }
        }
      `}</style>
    </nav>
  )
}
