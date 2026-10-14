'use client'


import AnimatedSection from './AnimatedSection'
import SectionLabel from './SectionLabel'

const timeline = [
  {
    step: '01',
    title: 'Acquisizione',
    description: 'Individuiamo l\'immobile giusto nelle zone centrali di Milano. Valutiamo potenziale, posizione e possibilità di valorizzazione.',
  },
  {
    step: '02',
    title: 'Progettazione',
    description: 'Il nostro team di architetti sviluppa il progetto. Ogni spazio è ottimizzato per funzionalità, luce e vivibilità.',
  },
  {
    step: '03',
    title: 'Ristrutturazione',
    description: 'Artigiani specializzati eseguono i lavori sotto la nostra supervisione diretta. Rispetto dei tempi, controllo qualità costante.',
  },
  {
    step: '04',
    title: 'Consegna',
    description: 'L\'appartamento viene consegnato completo: ristrutturato, arredato e pronto da vivere. Chiavi in mano, senza pensieri.',
  },
]

export default function Processo() {
  return (
    <section className="section-padding section-spacing bg-brand-blu text-white">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <SectionLabel>Come Lavoriamo</SectionLabel>
          <h2 className="heading-section mt-4 mb-6 text-white">
            Un processo chiaro,<br />
            <span className="text-brand-oro">dal primo all&apos;ultimo giorno.</span>
          </h2>
          <p className="body-text !text-white/60 max-w-2xl mb-16">
            Dalla selezione dell&apos;immobile alla consegna delle chiavi, ogni fase è gestita
            internamente dal nostro team. Trasparenza e qualità in ogni passaggio.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {timeline.map((item, i) => (
            <AnimatedSection key={item.step} delay={i * 0.12}>
              <div className="relative">
                <span className="font-serif text-5xl font-bold text-brand-oro/20">{item.step}</span>
                <h3 className="font-serif text-xl font-bold mt-2 mb-4">{item.title}</h3>
                <p className="text-sm font-sans text-white/60 leading-relaxed">{item.description}</p>
                {i < timeline.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-6 w-12 h-px bg-brand-oro/30" />
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.5}>
          <div className="mt-20 p-8 md:p-12 border border-white/10 bg-white/5">
            <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
              <div className="flex-1">
                <h3 className="font-serif text-xl font-bold mb-3">Acquisto su carta</h3>
                <p className="text-sm font-sans text-white/60 leading-relaxed">
                  Se acquisti prima del completamento dei lavori, puoi personalizzare la disposizione
                  degli ambienti, la scelta dei materiali e la configurazione della cucina.
                  Un&apos;opportunità per avere una casa davvero su misura.
                </p>
              </div>
              <a
                href="#contatti"
                className="btn-oro shrink-0"
              >
                Scopri come
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
