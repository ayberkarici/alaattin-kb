import { Leaf, Flower2, Sprout } from 'lucide-react'

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-overlay" />
      <div className="hero-content">
        <p className="hero-tagline">Sakarya · Doğanın Kalbinde</p>
        <h1>
          Özel Günleriniz İçin
          <br />
          <span>Yeşilin Büyüsü</span>
        </h1>
        <p className="hero-sub">
          Sünnet düğünü, nişan, mevlüt ve daha fazlası için
          <br />
          unutulmaz anlar yaratıyoruz.
        </p>
        <div className="hero-btns">
          <a href="#packages" className="btn btn-primary">Paketleri Gör</a>
          <a href="#contact" className="btn btn-outline">Rezervasyon Yap</a>
        </div>
      </div>
      <div className="hero-scroll">
        <span />
      </div>
      <div className="leaf leaf-1"><Leaf size={36} /></div>
      <div className="leaf leaf-2"><Flower2 size={28} /></div>
      <div className="leaf leaf-3"><Sprout size={22} /></div>
    </section>
  )
}
