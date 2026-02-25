const events = [
  {
    icon: '🎊',
    title: 'Sünnet Düğünü',
    desc: 'Oğlunuzun en özel gününü renkli süslemeler, canlı müzik ve özel ikramlarla taçlandırıyoruz.',
  },
  {
    icon: '💍',
    title: 'Nişan',
    desc: 'Çiçekler, romantik dekor ve özel menülerle nişan töreninizi masalsı bir anıya dönüştürüyoruz.',
  },
  {
    icon: '🕌',
    title: 'Mevlüt',
    desc: 'Huzurlu doğa ortamımızda mevlüt töreninizi saygın ve sıcak bir atmosferde gerçekleştirin.',
  },
  {
    icon: '🌸',
    title: 'Kına Gecesi',
    desc: 'Geleneksel kına gecenizi; folklör, eğlence ve özel kına dekorasyonuyla yaşayın.',
  },
  {
    icon: '🍽️',
    title: 'Şirket Pikniği',
    desc: 'Takım ruhunu doğada güçlendirin. Kurumsal piknikler için geniş alan ve özel ikram hizmeti.',
  },
  {
    icon: '🎂',
    title: 'Doğum Günü',
    desc: 'Yaşım başına özel temalar, pasta ve sürpriz organizasyonlarla doğum günlerini unutulmaz kılıyoruz.',
  },
]

export default function Events() {
  return (
    <section className="events section" id="events">
      <div className="container">
        <p className="section-label center">Etkinlik Türleri</p>
        <h2 className="section-title center">
          Her Özel Gün İçin
          <br />
          Buradayız
        </h2>
        <div className="events-grid">
          {events.map((e) => (
            <div key={e.title} className="event-card">
              <div className="event-icon">{e.icon}</div>
              <h3>{e.title}</h3>
              <p>{e.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
