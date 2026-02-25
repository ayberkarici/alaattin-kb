import { Star } from 'lucide-react'

const testimonials = [
  {
    initials: 'AY',
    name: 'Ahmet Yıldız',
    location: 'Sakarya',
    quote:
      "Oğlumun sünnet düğününü Alaattin Kırbahçesi'nde yaptık. Yeşil ortam, güler yüzlü ekip ve harika organizasyon ile tam istediğimiz gibi oldu.",
  },
  {
    initials: 'FD',
    name: 'Fatma & Deniz',
    location: 'Sakarya',
    quote:
      'Nişanımızı burada yaptık, çiçek dekorasyonu mükemmeldi. Misafirlerimiz hâlâ mekanı övüyor. Kesinlikle tavsiye ederiz!',
  },
  {
    initials: 'MK',
    name: 'Mustafa Kaya',
    location: 'Adapazarı',
    quote:
      'Mevlütümüz için hem huzurlu hem de etkileyici bir mekan aradık. Alaattin Kırbahçesi tam aradığımız yerdi. Herkese tavsiye ederiz.',
  },
]

export default function Testimonials() {
  return (
    <section className="testimonials section">
      <div className="container">
        <p className="section-label center">Misafir Yorumları</p>
        <h2 className="section-title center">
          Mutlu Aileler
          <br />
          Ne Diyor?
        </h2>
        <div className="testimonials-grid">
          {testimonials.map((t) => (
            <div key={t.name} className="testimonial-card">
              <div className="stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p>&ldquo;{t.quote}&rdquo;</p>
              <div className="testimonial-author">
                <div className="author-avatar">{t.initials}</div>
                <div>
                  <strong>{t.name}</strong>
                  <span>{t.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
