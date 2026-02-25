'use client'

/* eslint-disable @next/next/no-img-element */
import { useState, useEffect, useCallback } from 'react'

type GalleryItem = {
  src: string
  alt: string
  caption: string
  cat: string
  span?: 'tall' | 'wide'
}

const items: GalleryItem[] = [
  {
    src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
    alt: 'Kır bahçesi genel görünüm',
    caption: 'Kır Bahçesi',
    cat: 'genel',
  },
  {
    src: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=80',
    alt: 'Sünnet düğünü dekorasyonu',
    caption: 'Sünnet Düğünü',
    cat: 'sunnet',
    span: 'tall',
  },
  {
    src: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&q=80',
    alt: 'Nişan töreni',
    caption: 'Nişan Töreni',
    cat: 'nisan',
  },
  {
    src: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=900&q=80',
    alt: 'Açık hava etkinliği',
    caption: 'Açık Hava Etkinliği',
    cat: 'genel',
    span: 'wide',
  },
  {
    src: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=600&q=80',
    alt: 'Mevlüt organizasyonu',
    caption: 'Mevlüt',
    cat: 'mevlut',
  },
  {
    src: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=600&q=80',
    alt: 'Yeşil alan',
    caption: 'Yeşil Alan',
    cat: 'genel',
  },
  {
    src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&q=80',
    alt: 'Nişan dekorasyonu',
    caption: 'Nişan Dekorasyonu',
    cat: 'nisan',
    span: 'tall',
  },
  {
    src: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&q=80',
    alt: 'Çocuk etkinliği',
    caption: 'Sünnet Kutlaması',
    cat: 'sunnet',
  },
  {
    src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80',
    alt: 'Bahçe masası düzeni',
    caption: 'Bahçe Düzeni',
    cat: 'genel',
    span: 'wide',
  },
]

const filters = [
  { key: 'all', label: 'Tümü' },
  { key: 'sunnet', label: 'Sünnet' },
  { key: 'nisan', label: 'Nişan' },
  { key: 'mevlut', label: 'Mevlüt' },
  { key: 'genel', label: 'Mekan' },
]

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const visible = items.filter(
    (item) => activeFilter === 'all' || item.cat === activeFilter,
  )

  const openLightbox = (idx: number) => {
    setLightboxIndex(idx)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null)
    document.body.style.overflow = ''
  }, [])

  const prev = useCallback(() => {
    setLightboxIndex((i) =>
      i === null ? null : (i - 1 + visible.length) % visible.length,
    )
  }, [visible.length])

  const next = useCallback(() => {
    setLightboxIndex((i) =>
      i === null ? null : (i + 1) % visible.length,
    )
  }, [visible.length])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [lightboxIndex, closeLightbox, prev, next])

  const current = lightboxIndex !== null ? visible[lightboxIndex] : null

  return (
    <section className="gallery section" id="gallery">
      <div className="container">
        <p className="section-label center">Fotoğraf Galerisi</p>
        <h2 className="section-title center">
          Kırbahçemizden
          <br />
          Kareler
        </h2>

        <div className="gallery-filters">
          {filters.map((f) => (
            <button
              key={f.key}
              className={`filter-btn${activeFilter === f.key ? ' active' : ''}`}
              onClick={() => setActiveFilter(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {items.map((item, i) => {
            const isVisible =
              activeFilter === 'all' || item.cat === activeFilter
            const visibleIndex = visible.indexOf(item)
            return (
              <div
                key={item.src}
                className={[
                  'gallery-item',
                  item.span ?? '',
                  !isVisible ? 'hidden' : '',
                ]
                  .filter(Boolean)
                  .join(' ')}
                onClick={() => isVisible && openLightbox(visibleIndex)}
                role="button"
                tabIndex={isVisible ? 0 : -1}
                onKeyDown={(e) =>
                  e.key === 'Enter' && isVisible && openLightbox(visibleIndex)
                }
                aria-label={item.caption}
              >
                <img src={item.src} alt={item.alt} loading="lazy" />
                <div className="gallery-overlay">
                  <span>{item.caption}</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Lightbox */}
      {current && (
        <div
          className="lightbox open"
          onClick={(e) => e.target === e.currentTarget && closeLightbox()}
          role="dialog"
          aria-modal="true"
          aria-label={current.caption}
        >
          <button className="lightbox-close" onClick={closeLightbox} aria-label="Kapat">
            ✕
          </button>
          <button className="lightbox-nav prev" onClick={prev} aria-label="Önceki">
            ‹
          </button>
          <button className="lightbox-nav next" onClick={next} aria-label="Sonraki">
            ›
          </button>
          <div className="lightbox-content">
            <img src={current.src} alt={current.alt} />
            <p className="lightbox-caption">{current.caption}</p>
          </div>
        </div>
      )}
    </section>
  )
}
