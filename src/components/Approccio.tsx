'use client'

import { motion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'

const statements = [
  'Nessun compromesso\nsui materiali.',
  'Controllo diretto\ndi ogni fase.',
  'Consegna\nchiavi in mano.',
]

const details = [
  'Parquet vero, mobili italiani, infissi in legno. Scegliamo ogni finitura come se fosse casa nostra.',
  'Non siamo intermediari. Acquistiamo, progettiamo e ristrutturiamo in prima persona, con il nostro team.',
  'Appartamenti finiti, arredati e pronti da vivere. Senza sorprese, senza cantieri aperti.',
]

export default function Approccio() {
  return (
    <section id="approccio" className="section-padding section-spacing bg-brand-beige overflow-hidden">
      <div className="max-w-5xl mx-auto text-center">

        <AnimatedSection>
          <div className="flex items-center gap-4 justify-center mb-6">
            <div className="w-8 h-px bg-brand-oro" />
            <span className="font-sans text-xs uppercase tracking-[0.25em] text-brand-oro font-medium">
              Il Nostro Approccio
            </span>
            <div className="w-8 h-px bg-brand-oro" />
          </div>
        </AnimatedSection>

        <div className="flex flex-col items-center gap-16 md:gap-20">
          {statements.map((s, i) => (
            <AnimatedSection key={i} delay={i * 0.15}>
              <div className="group relative">

                {/* Oro accent line top */}
                <motion.div
                  className="w-6 h-px bg-brand-oro mx-auto mb-8"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 + 0.3 }}
                />

                <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-brand-blu leading-tight whitespace-pre-line group-hover:text-brand-oro transition-colors duration-500">
                  {s}
                </h3>

                <p className="font-sans text-base md:text-lg text-brand-blu/50 leading-relaxed mt-6 max-w-md mx-auto">
                  {details[i]}
                </p>

              </div>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  )
}
