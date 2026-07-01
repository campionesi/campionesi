'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null)

  // Subtle parallax on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (bgRef.current) {
        bgRef.current.style.transform = `translateY(${window.scrollY * 0.3}px)`
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden flex items-center">

      {/* Background with parallax */}
      <div className="absolute inset-0 scale-110">
        <div
          ref={bgRef}
          className="w-full h-full bg-cover bg-center bg-no-repeat will-change-transform"
          style={{ backgroundImage: 'url(/hero-kitchen.jpg)' }}
        />
      </div>

      {/* Overlay: dark gradient left-heavy for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-blu/80 via-brand-blu/50 to-brand-blu/20" />
      {/* Bottom vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-blu/40 via-transparent to-transparent" />

      {/* Content — left aligned, premium layout */}
      <div className="relative z-10 section-padding w-full max-w-7xl mx-auto">
        <div className="max-w-2xl">

          {/* Headline */}
          <div className="overflow-hidden mb-4">
            <motion.h1
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-[1.05] tracking-tight"
            >
              Investiamo
              <br />
              in immobili.
            </motion.h1>
          </div>

          {/* Sub-headline */}
          <div className="overflow-hidden mb-10">
            <motion.p
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-brand-oro italic"
            >
              Li trasformiamo in case.
            </motion.p>
          </div>

          {/* Divider line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 1.1, ease: 'easeOut' }}
            className="w-16 h-px bg-brand-oro origin-left mb-10"
          />

          {/* Body */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="font-sans text-white/85 text-base md:text-lg leading-relaxed mb-12 max-w-md font-light"
          >
            Acquistiamo immobili nel cuore di Milano, li trasformiamo
            e li consegniamo pronti da vivere. Finiture di pregio, arredi italiani, zero compromessi.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="/#progetti" className="btn-oro">
              Scopri i Progetti
            </Link>
            <Link
              href="/#contatti"
              className="inline-flex items-center gap-2 border border-white/30 text-white hover:border-brand-oro hover:text-brand-oro px-8 py-4 text-sm font-sans font-medium uppercase tracking-wider transition-all duration-400"
            >
              Contattaci
            </Link>
          </motion.div>

        </div>
      </div>

      {/* Right side — floating detail card */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.8 }}
        className="absolute right-8 md:right-16 bottom-20 hidden lg:block"
      >
        <div className="border border-white/15 bg-white/5 backdrop-blur-sm px-10 py-9 text-right">
          <p className="font-sans text-sm uppercase tracking-[0.2em] text-white/65 mb-4">
            In consegna
          </p>
          <p className="font-serif text-5xl font-bold text-white leading-none">8</p>
          <p className="font-sans text-sm text-white/60 mt-2">nuovi appartamenti</p>
          <div className="mt-5 w-full h-px bg-brand-oro/30" />
          <p className="font-sans text-xs uppercase tracking-[0.2em] text-white/40 mt-5 mb-3">
            Zona
          </p>
          <p className="font-serif text-sm font-medium text-white">Milano Centro</p>
        </div>
      </motion.div>

      {/* Scroll indicator — bottom center */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-white/30">Scorri</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full bg-brand-oro"
            style={{ height: '40%' }}
            animate={{ y: ['0%', '250%'] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut', repeatDelay: 0.3 }}
          />
        </div>
      </motion.div>

    </section>
  )
}
