'use client'

import { useEffect, useRef, useState } from 'react'

const badgeData = [
  { icon: '🌳', value: 5000, suffix: ' m²', label: 'Yeşil Alan' },
  { icon: '🎉', value: 500, suffix: '+', label: 'Mutlu Etkinlik' },
  { icon: '👥', value: 1000, suffix: '', label: 'Kişilik Kapasite' },
  { icon: '⭐', value: 15, suffix: '+ Yıl', label: 'Deneyim' },
]

function useCountUp(target: number, duration = 1500, active: boolean) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!active) return
    const start = performance.now()
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const ease = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(ease * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [active, target, duration])

  return count
}

function BadgeItem({
  icon,
  value,
  suffix,
  label,
  active,
}: (typeof badgeData)[0] & { active: boolean }) {
  const count = useCountUp(value, 1500, active)
  return (
    <div className="badge-item">
      <span className="badge-icon">{icon}</span>
      <div>
        <strong>
          {count.toLocaleString('tr-TR')}
          {suffix}
        </strong>
        <p>{label}</p>
      </div>
    </div>
  )
}

export default function Badges() {
  const [active, setActive] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.5 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="badges" ref={ref}>
      <div className="container badges-grid">
        {badgeData.map((b) => (
          <BadgeItem key={b.label} {...b} active={active} />
        ))}
      </div>
    </section>
  )
}
