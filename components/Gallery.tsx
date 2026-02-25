'use client'

import { useState } from 'react'
import { ImageIcon } from 'lucide-react'

type GalleryItem = {
  caption: string
  cat: string
  span?: 'tall' | 'wide'
}

const items: GalleryItem[] = [
  { caption: 'Kır Bahçesi', cat: 'genel' },
  { caption: 'Sünnet Düğünü', cat: 'sunnet', span: 'tall' },
  { caption: 'Nişan Töreni', cat: 'nisan' },
  { caption: 'Açık Hava Etkinliği', cat: 'genel', span: 'wide' },
  { caption: 'Mevlüt', cat: 'mevlut' },
  { caption: 'Yeşil Alan', cat: 'genel' },
  { caption: 'Nişan Dekorasyonu', cat: 'nisan', span: 'tall' },
  { caption: 'Sünnet Kutlaması', cat: 'sunnet' },
  { caption: 'Bahçe Düzeni', cat: 'genel', span: 'wide' },
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
          {items.map((item) => {
            const isVisible = activeFilter === 'all' || item.cat === activeFilter
            return (
              <div
                key={item.caption}
                className={[
                  'gallery-item',
                  item.span ?? '',
                  !isVisible ? 'hidden' : '',
                ]
                  .filter(Boolean)
                  .join(' ')}
              >
                <div className="gallery-placeholder">
                  <ImageIcon size={26} strokeWidth={1.5} />
                  <span>{item.caption}</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
