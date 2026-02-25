'use client'

import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu on outside click
  useEffect(() => {
    if (!menuOpen) return
    const handleClick = (e: MouseEvent) => {
      const nav = document.getElementById('navbar')
      if (nav && !nav.contains(e.target as Node)) {
        setMenuOpen(false)
        document.body.style.overflow = ''
      }
    }
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [menuOpen])

  const toggleMenu = () => {
    setMenuOpen((prev) => {
      document.body.style.overflow = !prev ? 'hidden' : ''
      return !prev
    })
  }

  const closeMenu = () => {
    setMenuOpen(false)
    document.body.style.overflow = ''
  }

  return (
    <nav id="navbar" className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-inner">
        <a href="#hero" className="logo" onClick={closeMenu}>
          <span className="logo-leaf">🌿</span>
          <span>
            Alaattin <em>Kırbahçesi</em>
          </span>
        </a>

        <button
          className="burger"
          aria-label="Menüyü aç"
          aria-expanded={menuOpen}
          onClick={toggleMenu}
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
          <li>
            <a href="#about" onClick={closeMenu}>
              Hakkımızda
            </a>
          </li>
          <li>
            <a href="#packages" onClick={closeMenu}>
              Paketler
            </a>
          </li>
          <li>
            <a href="#gallery" onClick={closeMenu}>
              Galeri
            </a>
          </li>
          <li>
            <a href="#contact" className="nav-cta" onClick={closeMenu}>
              İletişim
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
