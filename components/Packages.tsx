import { Sprout, Flower2, TreePine, Check, X, type LucideIcon } from 'lucide-react'

type PackageData = {
  tier: string
  Icon: LucideIcon
  name: string
  sub: string
  featured: boolean
  features: { text: string; enabled: boolean }[]
}

const packages: PackageData[] = [
  {
    tier: 'Başlangıç',
    Icon: Sprout,
    name: 'Tomurcuk',
    sub: 'Küçük ve samimi etkinlikler için',
    featured: false,
    features: [
      { text: '200 kişiye kadar kapasite', enabled: true },
      { text: '5 saat kiralama', enabled: true },
      { text: 'Temel masa & sandalye kurulumu', enabled: true },
      { text: 'Ses sistemi', enabled: true },
      { text: 'Ücretsiz otopark', enabled: true },
      { text: 'Dekorasyon paketi', enabled: false },
      { text: 'İkram servisi', enabled: false },
    ],
  },
  {
    tier: 'Orta',
    Icon: Flower2,
    name: 'Çiçek',
    sub: 'Çoğu etkinlik için ideal seçim',
    featured: true,
    features: [
      { text: '500 kişiye kadar kapasite', enabled: true },
      { text: '8 saat kiralama', enabled: true },
      { text: 'Tam masa & sandalye kurulumu', enabled: true },
      { text: 'Profesyonel ses & ışık sistemi', enabled: true },
      { text: 'Temel dekorasyon paketi', enabled: true },
      { text: 'Çay & kahve ikram servisi', enabled: true },
      { text: 'Tam menü ikramı', enabled: false },
    ],
  },
  {
    tier: 'Premium',
    Icon: TreePine,
    name: 'Orman',
    sub: 'Eksiksiz lüks deneyim',
    featured: false,
    features: [
      { text: '1.000 kişiye kadar kapasite', enabled: true },
      { text: '12 saat kiralama', enabled: true },
      { text: 'Lüks masa & sandalye kurulumu', enabled: true },
      { text: 'Premium ses, ışık & DJ sistemi', enabled: true },
      { text: 'Özel dekorasyon & çiçek aranjmanı', enabled: true },
      { text: 'Tam menü ikram servisi', enabled: true },
      { text: 'Fotoğrafçı & video hizmeti', enabled: true },
    ],
  },
]

export default function Packages() {
  return (
    <section className="packages section" id="packages">
      <div className="packages-bg" />
      <div className="container">
        <p className="section-label center">Paketlerimiz</p>
        <h2 className="section-title center">
          İhtiyacınıza Uygun
          <br />
          Paket Seçin
        </h2>
        <p className="section-sub center">
          Tüm paketlerimiz kişisel danışmanlık ve 7/24 destek içermektedir.
        </p>

        <div className="packages-grid">
          {packages.map(({ tier, Icon, name, sub, featured, features }) => (
            <div key={name} className={`pkg-card${featured ? ' featured' : ''}`}>
              {featured && <div className="popular-badge">En Popüler</div>}
              <div className="pkg-header">
                <span className="pkg-badge">{tier}</span>
                <div className="pkg-icon">
                  <Icon size={28} strokeWidth={1.5} />
                </div>
                <h3>{name}</h3>
                <p className="pkg-sub">{sub}</p>
              </div>
              <ul className="pkg-features">
                {features.map((f) => (
                  <li key={f.text} className={f.enabled ? '' : 'disabled'}>
                    <span className="pkg-feature-icon">
                      {f.enabled
                        ? <Check size={14} strokeWidth={3} />
                        : <X size={14} strokeWidth={3} />}
                    </span>
                    {f.text}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`btn pkg-btn ${featured ? 'btn-primary' : 'btn-outline'}`}
              >
                Teklif Al
              </a>
            </div>
          ))}
        </div>

        <p className="pkg-note">
          * Fiyatlandırma etkinlik türü ve tarihe göre belirlenmektedir. Özel
          teklif için lütfen iletişime geçin.
        </p>
      </div>
    </section>
  )
}
