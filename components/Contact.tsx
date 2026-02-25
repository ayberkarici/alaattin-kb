import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react'

const contactItems = [
  {
    Icon: MapPin,
    label: 'Adres',
    value: 'Alaattin Kırbahçesi, Sakarya, Türkiye',
    href: null,
  },
  {
    Icon: Phone,
    label: 'Telefon',
    value: '+90 530 522 37 93',
    href: 'tel:+905305223793',
  },
  {
    Icon: Mail,
    label: 'E-posta',
    value: 'info@alaattinkirbahcesi.com',
    href: 'mailto:info@alaattinkirbahcesi.com',
  },
  {
    Icon: Clock,
    label: 'Çalışma Saatleri',
    value: 'Her gün 09:00 – 22:00',
    href: null,
  },
]

export default function Contact() {
  return (
    <section className="contact section" id="contact">
      <div className="container">
        <p className="section-label center">İletişim</p>
        <h2 className="section-title center">Bize Ulaşın</h2>
        <p className="section-sub center">
          Etkinliğiniz için en uygun paketi ve tarihi birlikte belirleyelim.
          Sorularınız için bize ulaşın, 24 saat içinde geri dönelim.
        </p>

        <div className="contact-cards">
          {contactItems.map(({ Icon, label, value, href }) => (
            <div key={label} className="contact-card">
              <span className="contact-card-icon">
                <Icon size={22} strokeWidth={1.5} />
              </span>
              <strong>{label}</strong>
              {href ? (
                <a href={href}>{value}</a>
              ) : (
                <p>{value}</p>
              )}
            </div>
          ))}
        </div>

        <div className="contact-social">
          <a href="#" aria-label="Instagram" className="social-btn">
            <Instagram size={16} /> Instagram
          </a>
          <a href="#" aria-label="Facebook" className="social-btn">
            <Facebook size={16} /> Facebook
          </a>
        </div>
      </div>
    </section>
  )
}
