'use client'


import AnimatedSection from './AnimatedSection'
import SectionLabel from './SectionLabel'
import { Compass, Ruler, Hammer, HardHat } from 'lucide-react'

const roles = [
  { icon: Compass, title: 'Architetti', desc: 'Progettazione degli spazi e direzione artistica degli interni' },
  { icon: Ruler, title: 'Geometri', desc: 'Gestione tecnica, pratiche edilizie e supervisione cantiere' },
  { icon: Hammer, title: 'Artigiani', desc: 'Maestranze specializzate per finiture di altissimo livello' },
  { icon: HardHat, title: 'Impiantisti', desc: 'Impianti elettrici, idraulici e di climatizzazione certificati' },
]

export default function Team() {
  return (
    <section className="section-padding section-spacing bg-brand-beige">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <SectionLabel>Il Team</SectionLabel>
            <h2 className="heading-section mt-4 mb-6">
              Professionisti che condividono
              <br />
              <span className="text-brand-oro">lo stesso standard.</span>
            </h2>
            <p className="body-text mb-8">
              Dietro ogni progetto Campionesi c&apos;è un team di figure professionali
              con esperienza consolidata nel settore immobiliare e nell&apos;edilizia
              di qualità. Non ci affidiamo al caso: ogni collaboratore è selezionato
              per competenza e affidabilità.
            </p>
            <p className="body-text">
              Dall&apos;architetto che disegna gli spazi all&apos;artigiano che posa
              il parquet, ogni persona coinvolta lavora con lo stesso obiettivo:
              consegnare una casa che superi le aspettative.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="space-y-4">
              {roles.map((role, i) => (
                <div
                  key={role.title}
                  className="group flex items-start gap-5 p-5 bg-white hover:bg-brand-blu transition-colors duration-500 cursor-default"
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-brand-beige group-hover:bg-brand-oro transition-colors duration-500 shrink-0">
                    <role.icon size={22} className="text-brand-blu group-hover:text-white transition-colors duration-500" />
                  </div>
                  <div>
                    <h3 className="font-serif text-base font-bold group-hover:text-white transition-colors duration-500">
                      {role.title}
                    </h3>
                    <p className="text-sm font-sans text-brand-blu/60 group-hover:text-white/70 transition-colors duration-500 mt-1">
                      {role.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
