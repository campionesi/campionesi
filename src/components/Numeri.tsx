'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { label: 'Appartamenti venduti', value: 16, detail: 'dal 2024 ad oggi' },
  { label: 'Progetti completati', value: 8, detail: 'operazioni concluse' },
  { label: 'Progetti in corso', value: 5, detail: 'attualmente in cantiere' },
  { label: 'In consegna', value: 8, detail: 'nuovi appartamenti' },
]

function CountUp({ target, duration = 1.4 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const steps = 40
    const increment = target / steps
    const interval = (duration * 1000) / steps
    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, interval)
    return () => clearInterval(timer)
  }, [inView, target, duration])

  return <span ref={ref}>{count}</span>
}

export default function Numeri() {
  return (
    <section className="section-padding py-16 md:py-20 bg-brand-blu">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="border border-white/10 bg-white/5 px-6 py-7 text-left hover:border-brand-oro/30 transition-colors duration-500 group">
                <p className="font-sans text-sm uppercase tracking-[0.18em] text-white/55 mb-4 group-hover:text-brand-oro/70 transition-colors duration-500">
                  {stat.label}
                </p>
                <p className="font-serif text-5xl md:text-6xl font-light text-white leading-none mb-2">
                  <CountUp target={stat.value} />
                </p>
                <div className="w-6 h-px bg-brand-oro/40 mt-4 mb-3 group-hover:w-10 transition-all duration-500" />
                <p className="font-sans text-base text-white/50">
                  {stat.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
