import Image from 'next/image'

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container about-grid">
        <div className="about-images">
          <div className="img-main">
            <Image
              src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=700&q=80"
              alt="Bahçe etkinliği"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
          <div className="img-accent">
            <div className="img-accent-inner">
              <Image
                src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400&q=80"
                alt="Nişan töreni"
                fill
                sizes="220px"
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
          <div className="about-badge-float">
            <span>
              Sakarya&apos;nın
              <br />
              #1 Kır Bahçesi
            </span>
          </div>
        </div>

        <div className="about-text">
          <p className="section-label">Biz Kimiz</p>
          <h2>
            Doğanın İçinde
            <br />
            Eşsiz Bir Deneyim
          </h2>
          <p>
            Alaattin Kırbahçesi, Sakarya&apos;nın yeşil dokusu içinde yer alan, özel
            günlerinizi doğanın büyüsüyle buluşturan köklü bir etkinlik mekanıdır.
            5.000 m²&apos;yi aşan geniş yeşil alanımız, gölgelik ağaçlarımız ve modern
            altyapımızla her etkinliği özel kılıyoruz.
          </p>
          <p>
            Sünnet düğünü, nişan, mevlüt, şirket pikniği ya da aile buluşması; her
            organizasyona özel çözümler üretiyor, anılarınızı hayata geçiriyoruz.
          </p>
          <ul className="about-features">
            <li>
              <span className="check">✓</span> Açık &amp; Kapalı Alan Seçeneği
            </li>
            <li>
              <span className="check">✓</span> Profesyonel İkram Hizmeti
            </li>
            <li>
              <span className="check">✓</span> Dekorasyon Paketleri
            </li>
            <li>
              <span className="check">✓</span> Ücretsiz Otopark
            </li>
            <li>
              <span className="check">✓</span> Ses &amp; Işık Sistemi
            </li>
            <li>
              <span className="check">✓</span> 7/24 Destek Ekibi
            </li>
          </ul>
          <a href="#contact" className="btn btn-primary">
            Bize Ulaşın
          </a>
        </div>
      </div>
    </section>
  )
}
