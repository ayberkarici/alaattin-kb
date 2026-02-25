import { Sparkles, Gem, BookOpen, Flame, Trees, Cake, type LucideIcon } from 'lucide-react'

const events: { Icon: LucideIcon; title: string; desc: string }[] = [
  {
    Icon: Sparkles,
    title: 'Sünnet Düğünü',
    desc: 'Oğlunuzun en özel gününü renkli süslemeler, canlı müzik ve özel ikramlarla taçlandırıyoruz.',
  },
  {
    Icon: Gem,
    title: 'Nişan',
    desc: 'Çiçekler, romantik dekor ve özel menülerle nişan töreninizi masalsı bir anıya dönüştürüyoruz.',
  },
  {
    Icon: BookOpen,
    title: 'Mevlüt',
    desc: 'Huzurlu doğa ortamımızda mevlüt töreninizi saygın ve sıcak bir atmosferde gerçekleştirin.',
  },
  {
    Icon: Flame,
    title: 'Kına Gecesi',
    desc: 'Geleneksel kına gecenizi; folklör, eğlence ve özel kına dekorasyonuyla yaşayın.',
  },
  {
    Icon: Trees,
    title: 'Şirket Pikniği',
    desc: 'Takım ruhunu doğada güçlendirin. Kurumsal piknikler için geniş alan ve özel ikram hizmeti.',
  },
  {
    Icon: Cake,
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
          {events.map(({ Icon, title, desc }) => (
            <div key={title} className="event-card">
              <div className="event-icon">
                <Icon size={30} strokeWidth={1.5} />
              </div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
