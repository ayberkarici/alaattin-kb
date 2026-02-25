'use client'

import { useState, FormEvent } from 'react'

type FormState = {
  name: string
  phone: string
  email: string
  eventType: string
  eventDate: string
  guestCount: string
  message: string
}

const initialState: FormState = {
  name: '',
  phone: '',
  email: '',
  eventType: '',
  eventDate: '',
  guestCount: '',
  message: '',
}

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialState)
  const [errors, setErrors] = useState<Partial<FormState>>({})
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const validate = () => {
    const e: Partial<FormState> = {}
    if (!form.name.trim()) e.name = 'Zorunlu'
    if (!form.phone.trim()) e.phone = 'Zorunlu'
    if (!form.eventType) e.eventType = 'Zorunlu'
    return e
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const errs = validate()
    setErrors(errs)
    if (Object.keys(errs).length > 0) return

    setLoading(true)
    // Simulate API call
    setTimeout(() => {
      setLoading(false)
      setSuccess(true)
      setForm(initialState)
      setTimeout(() => setSuccess(false), 6000)
    }, 1200)
  }

  const field = (key: keyof FormState) => ({
    value: form[key],
    onChange: (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >,
    ) => {
      setForm((prev) => ({ ...prev, [key]: e.target.value }))
      if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }))
    },
    style: errors[key] ? { borderColor: '#e53935' } : undefined,
  })

  return (
    <section className="contact section" id="contact">
      <div className="container contact-grid">
        {/* Info */}
        <div className="contact-info">
          <p className="section-label">İletişim</p>
          <h2>
            Rezervasyon &amp;
            <br />
            Bilgi Alın
          </h2>
          <p>
            Etkinliğiniz için en uygun paketi ve tarihi birlikte belirleyelim.
            Ekibimiz size 24 saat içinde geri dönecektir.
          </p>
          <ul className="contact-details">
            <li>
              <span className="contact-icon">📍</span>
              <div>
                <strong>Adres</strong>
                <p>Alaattin Kırbahçesi, Sakarya, Türkiye</p>
              </div>
            </li>
            <li>
              <span className="contact-icon">📞</span>
              <div>
                <strong>Telefon</strong>
                <p>
                  <a href="tel:+905001234567">+90 500 123 45 67</a>
                </p>
              </div>
            </li>
            <li>
              <span className="contact-icon">📧</span>
              <div>
                <strong>E-posta</strong>
                <p>
                  <a href="mailto:info@alaattinkirbahcesi.com">
                    info@alaattinkirbahcesi.com
                  </a>
                </p>
              </div>
            </li>
            <li>
              <span className="contact-icon">🕐</span>
              <div>
                <strong>Çalışma Saatleri</strong>
                <p>Her gün 09:00 – 22:00</p>
              </div>
            </li>
          </ul>
          <div className="social-links">
            <a href="#" aria-label="Instagram" className="social-btn">
              📸 Instagram
            </a>
            <a href="#" aria-label="Facebook" className="social-btn">
              📘 Facebook
            </a>
          </div>
        </div>

        {/* Form */}
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Ad Soyad *</label>
              <input
                type="text"
                id="name"
                placeholder="Adınız Soyadınız"
                {...field('name')}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Telefon *</label>
              <input
                type="tel"
                id="phone"
                placeholder="05XX XXX XX XX"
                {...field('phone')}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email">E-posta</label>
            <input
              type="email"
              id="email"
              placeholder="ornek@mail.com"
              {...field('email')}
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="eventType">Etkinlik Türü *</label>
              <select id="eventType" {...field('eventType')}>
                <option value="">Seçiniz…</option>
                <option>Sünnet Düğünü</option>
                <option>Nişan</option>
                <option>Mevlüt</option>
                <option>Kına Gecesi</option>
                <option>Şirket Pikniği</option>
                <option>Doğum Günü</option>
                <option>Diğer</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="eventDate">Etkinlik Tarihi</label>
              <input type="date" id="eventDate" {...field('eventDate')} />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="guestCount">Misafir Sayısı</label>
            <input
              type="number"
              id="guestCount"
              placeholder="Tahmini kişi sayısı"
              min="1"
              {...field('guestCount')}
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Mesajınız</label>
            <textarea
              id="message"
              rows={4}
              placeholder="Özel istekleriniz veya sorularınız…"
              {...field('message')}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary btn-full"
            disabled={loading}
          >
            <span>{loading ? 'Gönderiliyor…' : 'Teklif İsteyin'}</span>
            {!loading && <span>→</span>}
          </button>

          {success && (
            <div className="form-success show">
              ✅ Mesajınız alındı! En kısa sürede sizi arayacağız.
            </div>
          )}
        </form>
      </div>
    </section>
  )
}
