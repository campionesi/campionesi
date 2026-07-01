'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, MapPin, Maximize2, DoorOpen, Building, Calendar, Check } from 'lucide-react'
import { Project } from '@/data/projects'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import AnimatedSection from '@/components/AnimatedSection'

const statusColors: Record<string, string> = {
  completato: 'bg-white/10 text-white border border-white/20',
  'in-corso': 'bg-brand-oro text-white',
}

export default function ProgettoClient({ project }: { project: Project | null }) {
  if (!project) {
    return (
      <main>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center section-padding pt-32">
          <div className="text-center">
            <h1 className="heading-section mb-6">Progetto non trovato</h1>
            <Link href="/#progetti" className="btn-primary">Torna ai Progetti</Link>
          </div>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main>
      <Navbar />

      {/* Hero — tipografico, niente foto */}
      <section className="relative bg-brand-blu flex items-end overflow-hidden min-h-[50vh]">
        {/* Decorative logo */}
        <div className="absolute right-8 md:right-16 top-1/2 -translate-y-1/2 pointer-events-none select-none">
          <img
            src="/logo-icon.png"
            alt=""
            className="w-48 md:w-64 lg:w-80 opacity-[0.06]"
          />
        </div>

        <div className="relative z-10 section-padding py-20 md:py-28 w-full max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link
              href="/#progetti"
              className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm font-sans mb-10 transition-colors"
            >
              <ArrowLeft size={16} /> Tutti i progetti
            </Link>

            <div className="flex items-center gap-3 mb-6">
              <span className={`px-3 py-1.5 text-xs font-sans font-medium uppercase tracking-wider ${statusColors[project.status]}`}>
                {project.statusLabel}
              </span>
              {project.personalizzabile && (
                <span className="px-3 py-1.5 text-xs font-sans font-medium uppercase tracking-wider bg-brand-oro text-white">
                  Personalizzabile
                </span>
              )}
            </div>

            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-semibold text-white mb-4 leading-tight">
              {project.title}
            </h1>

            <div className="flex items-center gap-2 text-white/40">
              <MapPin size={14} />
              <span className="font-sans text-sm">{project.indirizzo}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Details */}
      <section className="section-padding py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-16">

            {/* Main content */}
            <div className="lg:col-span-2">
              <AnimatedSection>
                <h2 className="heading-section mb-6">Il Progetto</h2>
                <p className="body-text mb-12">{project.description}</p>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <h3 className="font-serif text-2xl font-semibold mb-8">Finiture e Materiali</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {project.finiture.map(f => (
                    <div key={f} className="flex items-center gap-3 p-4 bg-brand-beige">
                      <Check size={16} className="text-brand-oro shrink-0" />
                      <span className="text-sm font-sans text-brand-blu">{f}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>

            {/* Sidebar */}
            <div>
              <AnimatedSection delay={0.15}>
                <div className="bg-brand-beige p-8 sticky top-28">
                  {project.personalizzabile && (
                    <div className="flex items-start gap-3 bg-brand-oro/10 border border-brand-oro/30 p-4 mb-6">
                      <span className="text-brand-oro mt-0.5">✦</span>
                      <div>
                        <p className="font-sans text-xs font-semibold uppercase tracking-wider text-brand-oro mb-1">Personalizzabile</p>
                        <p className="font-sans text-xs text-brand-blu/60 leading-relaxed">Acquistando su carta puoi scegliere disposizione degli ambienti, finiture e materiali.</p>
                      </div>
                    </div>
                  )}

                  <h3 className="font-serif text-lg font-bold mb-6">Dettagli</h3>
                  <div className="space-y-5">
                    <div className="flex items-center gap-4">
                      <Maximize2 size={18} className="text-brand-oro" />
                      <div>
                        <span className="block text-xs font-sans text-brand-blu/50 uppercase tracking-wider">Superficie</span>
                        <span className="text-sm font-sans font-medium">{project.mq} mq</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <DoorOpen size={18} className="text-brand-oro" />
                      <div>
                        <span className="block text-xs font-sans text-brand-blu/50 uppercase tracking-wider">Locali</span>
                        <span className="text-sm font-sans font-medium">{project.locali}</span>
                      </div>
                    </div>
                    {project.piano && (
                      <div className="flex items-center gap-4">
                        <Building size={18} className="text-brand-oro" />
                        <div>
                          <span className="block text-xs font-sans text-brand-blu/50 uppercase tracking-wider">Piano</span>
                          <span className="text-sm font-sans font-medium">{project.piano}</span>
                        </div>
                      </div>
                    )}
                    <div className="flex items-center gap-4">
                      <Calendar size={18} className="text-brand-oro" />
                      <div>
                        <span className="block text-xs font-sans text-brand-blu/50 uppercase tracking-wider">
                          {project.consegna ? 'Consegna prevista' : 'Anno'}
                        </span>
                        <span className="text-sm font-sans font-medium">
                          {project.consegna ?? project.anno}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-brand-beige-dark mt-8 pt-8">
                    <p className="text-xs font-sans text-brand-blu/50 mb-1 uppercase tracking-wider">Unità abitative</p>
                    <p className="font-serif text-3xl font-bold text-brand-oro">{project.unita}</p>
                  </div>

                  <div className="mt-8 space-y-3">
                    <Link href="/#contatti" className="btn-primary w-full justify-center">
                      Richiedi Informazioni
                    </Link>
                    <a
                      href={`https://wa.me/393454636063?text=Buongiorno%2C%20vorrei%20informazioni%20sul%20progetto%20${encodeURIComponent(project.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline w-full justify-center"
                    >
                      Scrivi su WhatsApp
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
