'use client'

import { motion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'
import SectionLabel from './SectionLabel'

const features = [
  {
    number: '01',
    title: 'Parquet in legno massello',
    description: 'Solo rovere vero, mai laminato, mai finto. Posato a regola d\'arte da artigiani specializzati.',
    tag: 'Materiali',
  },
  {
    number: '02',
    title: 'Mobili italiani',
    description: 'Cucine e arredi di produzione italiana, selezionati per qualità costruttiva e design senza tempo. Ogni pezzo è scelto con cura.',
    tag: 'Arredo',
  },
  {
    number: '03',
    title: 'Sanitari di design',
    description: 'Sanitari sospesi italiani, rubinetteria di alta gamma e rivestimenti selezionati. Ogni bagno è un progetto a sé.',
    tag: 'Bagno',
  },
  {
    number: '04',
    title: 'Infissi in legno',
    description: 'Infissi in legno con doppio o triplo vetro. Isolamento termico e acustico superiore, estetica impeccabile e duratura.',
    tag: 'Serramenti',
  },
]

export default function Qualita() {
  return (
    <section id="qualita" className="section-padding pt-20 md:pt-28 lg:pt-36 pb-12 md:pb-16 bg-white">
      <div className="max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <AnimatedSection>
            <SectionLabel>La Qualità</SectionLabel>
            <h2 className="heading-section mt-4">
              Il dettaglio che fa
              <br />
              <span className="text-brand-oro">la differenza.</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2} className="flex items-end">
            <p className="body-text">
              Ciò che ci distingue è la scelta dei materiali. Non scendiamo a compromessi:
              ogni finitura è selezionata per durare nel tempo e valorizzare l&apos;ambiente.
              La qualità non si vede solo, si sente.
            </p>
          </AnimatedSection>
        </div>

        {/* Editorial list */}
        <div className="border-t border-brand-beige-dark">
          {features.map((feat, i) => (
            <AnimatedSection key={feat.number} delay={i * 0.1}>
              <motion.div
                className="group grid grid-cols-[1fr_1fr] md:grid-cols-[1fr_1.2fr_6rem] items-center gap-6 md:gap-10 py-8 md:py-10 border-b border-brand-beige-dark cursor-default"
                whileHover={{ x: 6 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              >
                {/* Title */}
                <h3 className="font-serif text-xl md:text-2xl lg:text-3xl font-semibold text-brand-blu group-hover:text-brand-oro transition-colors duration-400 leading-tight">
                  {feat.title}
                </h3>

                {/* Description */}
                <p className="font-sans text-sm text-brand-blu/50 leading-relaxed hidden md:block">
                  {feat.description}
                </p>

                {/* Tag */}
                <span className="hidden md:block font-sans text-[10px] uppercase tracking-[0.2em] text-brand-blu/30 group-hover:text-brand-oro/60 transition-colors duration-400 text-right">
                  {feat.tag}
                </span>
              </motion.div>

              {/* Mobile description */}
              <p className="md:hidden font-sans text-sm text-brand-blu/50 leading-relaxed pb-4 -mt-2">
                {feat.description}
              </p>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  )
}
