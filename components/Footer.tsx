export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <a href="#hero" className="logo">
            <span className="logo-leaf">🌿</span>
            <span>
              Alaattin <em>Kırbahçesi</em>
            </span>
          </a>
          <p>
            Sakarya&apos;nın yeşil kalbinde
            <br />
            unutulmaz anlar için.
          </p>
        </div>

        <div className="footer-links">
          <h4>Hızlı Erişim</h4>
          <ul>
            <li>
              <a href="#about">Hakkımızda</a>
            </li>
            <li>
              <a href="#packages">Paketler</a>
            </li>
            <li>
              <a href="#gallery">Galeri</a>
            </li>
            <li>
              <a href="#contact">İletişim</a>
            </li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Etkinlikler</h4>
          <ul>
            <li>
              <a href="#events">Sünnet Düğünü</a>
            </li>
            <li>
              <a href="#events">Nişan</a>
            </li>
            <li>
              <a href="#events">Mevlüt</a>
            </li>
            <li>
              <a href="#events">Kına Gecesi</a>
            </li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>İletişim</h4>
          <p>📍 Sakarya, Türkiye</p>
          <p>
            📞{' '}
            <a href="tel:+905001234567">+90 500 123 45 67</a>
          </p>
          <p>
            📧{' '}
            <a href="mailto:info@alaattinkirbahcesi.com">
              info@alaattinkirbahcesi.com
            </a>
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © 2024 Alaattin Kırbahçesi · Tüm hakları saklıdır. · Sakarya,
          Türkiye
        </p>
      </div>
    </footer>
  )
}
