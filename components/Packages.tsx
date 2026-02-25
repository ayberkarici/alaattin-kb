const packages = [
  {
    tier: 'Başlangıç',
    icon: '🌱',
    name: 'Tomurcuk',
    sub: 'Küçük ve samimi etkinlikler için',
    price: '15.000',
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
    icon: '🌿',
    name: 'Çiçek',
    sub: 'Çoğu etkinlik için ideal seçim',
    price: '35.000',
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
    icon: '🌳',
    name: 'Orman',
    sub: 'Eksiksiz lüks deneyim',
    price: '65.000',
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
        <p className="section-label center">Fiyatlandırma</p>
        <h2 className="section-title center">
          İhtiyacınıza Uygun
          <br />
          Paket Seçin
        </h2>
        <p className="section-sub center">
          Tüm paketlerimiz kişisel danışmanlık ve 7/24 destek içermektedir.
        </p>

        <div className="packages-grid">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`pkg-card${pkg.featured ? ' featured' : ''}`}
            >
              {pkg.featured && (
                <div className="popular-badge">En Popüler</div>
              )}
              <div className="pkg-header">
                <span className="pkg-badge">{pkg.tier}</span>
                <div className="pkg-icon">{pkg.icon}</div>
                <h3>{pkg.name}</h3>
                <p className="pkg-sub">{pkg.sub}</p>
              </div>
              <div className="pkg-price">
                <span className="currency">₺</span>
                <span className="amount">{pkg.price}</span>
                <span className="per">&apos;den başlayan</span>
              </div>
              <ul className="pkg-features">
                {pkg.features.map((f) => (
                  <li key={f.text} className={f.enabled ? '' : 'disabled'}>
                    <span>{f.enabled ? '✓' : '✗'}</span>
                    {f.text}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`btn pkg-btn ${pkg.featured ? 'btn-primary' : 'btn-outline'}`}
              >
                Teklif Al
              </a>
            </div>
          ))}
        </div>

        <p className="pkg-note">
          * Fiyatlar etkinlik türü ve tarihe göre değişiklik gösterebilir. Özel
          fiyatlandırma için lütfen iletişime geçin.
        </p>
      </div>
    </section>
  )
}
