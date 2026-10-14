'use client'

import React, { useState, useEffect, useRef } from 'react'

interface MouseGradientStyle {
  left: string
  top: string
  opacity: number
}

interface Ripple {
  id: number
  x: number
  y: number
}

interface DigitalSerenityProps {
  backgroundImage?: string
  headline?: string
  subheadline?: string
  taglineTop?: string
  taglineBottom?: string
  ctaLabel?: string
  ctaHref?: string
  ctaSecondaryLabel?: string
  ctaSecondaryHref?: string
  overlayOpacity?: number
}

const DigitalSerenity = ({
  backgroundImage = '/hero-kitchen.jpg',
  headline = 'Investiamo in immobili.',
  subheadline = 'Li trasformiamo in case.',
  taglineTop = 'Investimenti Immobiliari · Milano',
  taglineBottom = 'Qualità senza compromessi.',
  ctaLabel = 'Scopri i Progetti',
  ctaHref = '#progetti',
  ctaSecondaryLabel = 'Contattaci',
  ctaSecondaryHref = '#contatti',
  overlayOpacity = 0.55,
}: DigitalSerenityProps) => {
  const [mouseGradientStyle, setMouseGradientStyle] = useState<MouseGradientStyle>({
    left: '0px',
    top: '0px',
    opacity: 0,
  })
  const [ripples, setRipples] = useState<Ripple[]>([])
  const [scrolled, setScrolled] = useState(false)
  const floatingElementsRef = useRef<HTMLElement[]>([])

  // Word-appear animation on mount
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const wordElements = document.querySelectorAll<HTMLElement>('.ds-word-animate')
      wordElements.forEach(word => {
        const delay = parseInt(word.getAttribute('data-delay') || '0')
        setTimeout(() => {
          if (word) word.style.animation = 'ds-word-appear 0.8s ease-out forwards'
        }, delay)
      })
    }, 300)
    return () => clearTimeout(timeoutId)
  }, [])

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouseGradientStyle({ left: `${e.clientX}px`, top: `${e.clientY}px`, opacity: 1 })
    }
    const handleMouseLeave = () => {
      setMouseGradientStyle(prev => ({ ...prev, opacity: 0 }))
    }
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  // Click ripples
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const newRipple: Ripple = { id: Date.now(), x: e.clientX, y: e.clientY }
      setRipples(prev => [...prev, newRipple])
      setTimeout(() => setRipples(prev => prev.filter(r => r.id !== newRipple.id)), 1000)
    }
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  // Floating elements on scroll
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('.ds-floating-element')
    floatingElementsRef.current = Array.from(elements)
    const handleScroll = () => {
      if (!scrolled) {
        setScrolled(true)
        floatingElementsRef.current.forEach((el, index) => {
          setTimeout(() => {
            if (el) {
              el.style.animationPlayState = 'running'
              el.style.opacity = ''
            }
          }, (parseFloat(el.style.animationDelay || '0') * 1000) + index * 100)
        })
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [scrolled])

  const pageStyles = `
    #ds-mouse-gradient {
      position: fixed;
      pointer-events: none;
      border-radius: 9999px;
      background: radial-gradient(circle, rgba(196, 162, 101, 0.08), rgba(240, 235, 227, 0.04), transparent 70%);
      transform: translate(-50%, -50%);
      will-change: left, top, opacity;
      transition: left 70ms linear, top 70ms linear, opacity 300ms ease-out;
    }
    @keyframes ds-word-appear {
      0%   { opacity: 0; transform: translateY(28px) scale(0.85); filter: blur(8px); }
      55%  { opacity: 0.85; transform: translateY(8px) scale(0.97); filter: blur(1px); }
      100% { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }
    }
    @keyframes ds-grid-draw {
      0%   { stroke-dashoffset: 1000; opacity: 0; }
      50%  { opacity: 0.2; }
      100% { stroke-dashoffset: 0; opacity: 0.1; }
    }
    @keyframes ds-pulse-glow {
      0%, 100% { opacity: 0.1; transform: scale(1); }
      50%       { opacity: 0.4; transform: scale(1.15); }
    }
    @keyframes ds-underline-grow {
      to { width: 100%; }
    }
    @keyframes ds-float {
      0%, 100% { transform: translateY(0) translateX(0); opacity: 0.15; }
      25%       { transform: translateY(-12px) translateX(6px); opacity: 0.5; }
      50%       { transform: translateY(-6px) translateX(-4px); opacity: 0.3; }
      75%       { transform: translateY(-18px) translateX(8px); opacity: 0.7; }
    }
    @keyframes ds-ripple {
      0%   { transform: translate(-50%, -50%) scale(1); opacity: 0.6; }
      100% { transform: translate(-50%, -50%) scale(6); opacity: 0; }
    }
    .ds-word-animate {
      display: inline-block;
      opacity: 0;
      margin: 0 0.08em;
      transition: color 0.3s ease, transform 0.3s ease, text-shadow 0.3s ease;
      cursor: default;
    }
    .ds-word-animate:hover {
      color: #C4A265;
      transform: translateY(-2px);
      text-shadow: 0 0 24px rgba(196, 162, 101, 0.4);
    }
    .ds-grid-line {
      stroke: #F0EBE3;
      stroke-width: 0.4;
      opacity: 0;
      stroke-dasharray: 4 8;
      stroke-dashoffset: 1000;
      animation: ds-grid-draw 2.5s ease-out forwards;
    }
    .ds-detail-dot {
      fill: #C4A265;
      opacity: 0;
      animation: ds-pulse-glow 3s ease-in-out infinite;
    }
    .ds-corner-element {
      position: absolute;
      width: 36px;
      height: 36px;
      border: 1px solid rgba(240, 235, 227, 0.18);
      opacity: 0;
      animation: ds-word-appear 1s ease-out forwards;
    }
    .ds-text-underline::after {
      content: '';
      position: absolute;
      bottom: -6px;
      left: 0;
      width: 0;
      height: 1px;
      background: linear-gradient(90deg, transparent, #C4A265, transparent);
      animation: ds-underline-grow 2s ease-out forwards;
      animation-delay: 2.2s;
    }
    .ds-floating-element {
      position: absolute;
      width: 2px;
      height: 2px;
      background: #C4A265;
      border-radius: 50%;
      opacity: 0;
      animation: ds-float 5s ease-in-out infinite;
      animation-play-state: paused;
    }
    .ds-ripple {
      position: fixed;
      width: 6px;
      height: 6px;
      border: 1px solid rgba(196, 162, 101, 0.5);
      border-radius: 50%;
      transform: translate(-50%, -50%);
      pointer-events: none;
      animation: ds-ripple 1s ease-out forwards;
      z-index: 9999;
    }
  `

  return (
    <>
      <style>{pageStyles}</style>

      <section className="relative min-h-screen flex flex-col justify-between items-center overflow-hidden">

        {/* Background photo */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />

        {/* Brand-color overlay — warm dark */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(
              135deg,
              rgba(42, 53, 71, ${overlayOpacity + 0.1}) 0%,
              rgba(42, 53, 71, ${overlayOpacity}) 50%,
              rgba(30, 38, 52, ${overlayOpacity + 0.05}) 100%
            )`,
          }}
        />

        {/* Subtle warm vignette */}
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse at center, transparent 30%, rgba(20, 26, 36, 0.5) 100%)'
        }} />

        {/* Animated SVG grid */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <pattern id="ds-grid" width="70" height="70" patternUnits="userSpaceOnUse">
              <path d="M 70 0 L 0 0 0 70" fill="none" stroke="rgba(240,235,227,0.06)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#ds-grid)" />
          <line x1="0" y1="20%" x2="100%" y2="20%" className="ds-grid-line" style={{ animationDelay: '0.5s' }} />
          <line x1="0" y1="80%" x2="100%" y2="80%" className="ds-grid-line" style={{ animationDelay: '1s' }} />
          <line x1="20%" y1="0" x2="20%" y2="100%" className="ds-grid-line" style={{ animationDelay: '1.5s' }} />
          <line x1="80%" y1="0" x2="80%" y2="100%" className="ds-grid-line" style={{ animationDelay: '2s' }} />
          <circle cx="20%" cy="20%" r="2" className="ds-detail-dot" style={{ animationDelay: '2.5s' }} />
          <circle cx="80%" cy="20%" r="2" className="ds-detail-dot" style={{ animationDelay: '2.7s' }} />
          <circle cx="20%" cy="80%" r="2" className="ds-detail-dot" style={{ animationDelay: '2.9s' }} />
          <circle cx="80%" cy="80%" r="2" className="ds-detail-dot" style={{ animationDelay: '3.1s' }} />
          <circle cx="50%" cy="50%" r="1.5" className="ds-detail-dot" style={{ animationDelay: '3.5s' }} />
        </svg>

        {/* Corner decorations */}
        <div className="ds-corner-element top-6 left-6 md:top-10 md:left-10" style={{ animationDelay: '3.8s' }}>
          <div className="absolute top-0 left-0 w-2 h-2 bg-brand-oro opacity-40 rounded-full" />
        </div>
        <div className="ds-corner-element top-6 right-6 md:top-10 md:right-10" style={{ animationDelay: '4s' }}>
          <div className="absolute top-0 right-0 w-2 h-2 bg-brand-oro opacity-40 rounded-full" />
        </div>
        <div className="ds-corner-element bottom-6 left-6 md:bottom-10 md:left-10" style={{ animationDelay: '4.2s' }}>
          <div className="absolute bottom-0 left-0 w-2 h-2 bg-brand-oro opacity-40 rounded-full" />
        </div>
        <div className="ds-corner-element bottom-6 right-6 md:bottom-10 md:right-10" style={{ animationDelay: '4.4s' }}>
          <div className="absolute bottom-0 right-0 w-2 h-2 bg-brand-oro opacity-40 rounded-full" />
        </div>

        {/* Floating dots */}
        <div className="ds-floating-element" style={{ top: '25%', left: '12%', animationDelay: '0.5s' }} />
        <div className="ds-floating-element" style={{ top: '60%', left: '88%', animationDelay: '1s' }} />
        <div className="ds-floating-element" style={{ top: '40%', left: '8%', animationDelay: '1.5s' }} />
        <div className="ds-floating-element" style={{ top: '72%', left: '92%', animationDelay: '2s' }} />
        <div className="ds-floating-element" style={{ top: '15%', left: '75%', animationDelay: '2.5s' }} />

        {/* Content */}
        <div className="relative z-10 w-full min-h-screen flex flex-col justify-between items-center px-6 py-12 md:px-16 md:py-20">

          {/* Top tagline */}
          <div className="text-center">
            <p className="font-sans text-xs md:text-sm font-light uppercase tracking-[0.25em] text-white/70">
              <span className="ds-word-animate" data-delay="0">{taglineTop}</span>
            </p>
            <div className="mt-4 w-16 h-px bg-gradient-to-r from-transparent via-brand-oro to-transparent opacity-50 mx-auto" />
          </div>

          {/* Main headline */}
          <div className="text-center max-w-5xl mx-auto relative">

            <h1 className="font-serif font-bold text-white leading-tight tracking-tight">
              <div className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-4 md:mb-5 relative inline-block ds-text-underline">
                {headline.split(' ').map((word, i) => (
                  <span key={i} className="ds-word-animate" data-delay={600 + i * 150}>
                    {word}
                  </span>
                ))}
              </div>
              <div className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light text-brand-oro tracking-wide">
                {subheadline.split(' ').map((word, i) => (
                  <span key={i} className="ds-word-animate" data-delay={1000 + i * 180}>
                    {word}
                  </span>
                ))}
              </div>
            </h1>

            <p className="font-sans font-light text-white/60 text-base md:text-lg mt-6 tracking-wide opacity-0"
               style={{ animation: 'ds-word-appear 1s ease-out forwards', animationDelay: '1.8s' }}>
              Frazionamenti · Ristrutturazioni · Finiture di Pregio · Milano Centro
            </p>

            {/* CTA */}
            <div
              className="mt-10 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0"
              style={{ animation: 'ds-word-appear 1s ease-out forwards', animationDelay: '2.2s' }}
            >
              <a
                href={ctaHref}
                className="inline-flex items-center gap-2 bg-brand-oro hover:bg-brand-oro-light text-white px-8 py-4 text-sm font-sans font-medium uppercase tracking-wider transition-all duration-300"
              >
                {ctaLabel}
              </a>
              <a
                href={ctaSecondaryHref}
                className="inline-flex items-center gap-2 border border-white/30 text-white hover:border-brand-oro hover:text-brand-oro px-8 py-4 text-sm font-sans font-medium uppercase tracking-wider transition-all duration-300"
              >
                {ctaSecondaryLabel}
              </a>
            </div>

            {/* Side accents */}
            <div className="absolute -left-8 top-1/2 -translate-y-1/2 w-5 h-px bg-brand-oro opacity-0"
                 style={{ animation: 'ds-word-appear 1s ease-out forwards', animationDelay: '3s' }} />
            <div className="absolute -right-8 top-1/2 -translate-y-1/2 w-5 h-px bg-brand-oro opacity-0"
                 style={{ animation: 'ds-word-appear 1s ease-out forwards', animationDelay: '3.2s' }} />
          </div>

          {/* Bottom tagline + scroll */}
          <div className="text-center">
            <div className="mb-4 w-16 h-px bg-gradient-to-r from-transparent via-brand-oro to-transparent opacity-50 mx-auto" />
            <p className="font-sans text-xs md:text-sm font-light uppercase tracking-[0.25em] text-white/60">
              {taglineBottom.split(' ').map((word, i) => (
                <span key={i} className="ds-word-animate" data-delay={2800 + i * 200}>{word} </span>
              ))}
            </p>
            <div
              className="mt-8 flex justify-center space-x-3 opacity-0"
              style={{ animation: 'ds-word-appear 1s ease-out forwards', animationDelay: '3.6s' }}
            >
              {[0.4, 0.7, 0.4].map((op, i) => (
                <div key={i} className="w-1 h-1 bg-brand-oro rounded-full" style={{ opacity: op }} />
              ))}
            </div>
            {/* Scroll arrow */}
            <div
              className="mt-6 opacity-0"
              style={{ animation: 'ds-word-appear 1s ease-out forwards', animationDelay: '4s' }}
            >
              <a href="#approccio" className="block text-white/30 hover:text-brand-oro transition-colors" aria-label="Scorri">
                <svg width="20" height="30" viewBox="0 0 20 30" className="mx-auto">
                  <path d="M10 0 L10 24 M4 18 L10 24 L16 18" stroke="currentColor" strokeWidth="1" fill="none" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Mouse gradient */}
        <div
          id="ds-mouse-gradient"
          className="w-72 h-72 blur-3xl md:w-[450px] md:h-[450px]"
          style={{
            left: mouseGradientStyle.left,
            top: mouseGradientStyle.top,
            opacity: mouseGradientStyle.opacity,
          }}
        />

        {/* Ripples */}
        {ripples.map(ripple => (
          <div
            key={ripple.id}
            className="ds-ripple"
            style={{ left: `${ripple.x}px`, top: `${ripple.y}px` }}
          />
        ))}
      </section>
    </>
  )
}

export default DigitalSerenity
