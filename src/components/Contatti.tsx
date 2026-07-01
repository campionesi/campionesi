'use client'


import { useState, FormEvent } from 'react'
import { Send, MapPin, Mail, Phone } from 'lucide-react'
import AnimatedSection from './AnimatedSection'
import SectionLabel from './SectionLabel'

export default function Contatti() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    const form = e.currentTarget
    const data = {
      nome: (form.elements.namedItem('nome') as HTMLInputElement).value,
      cognome: (form.elements.namedItem('cognome') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      telefono: (form.elements.namedItem('telefono') as HTMLInputElement).value,
      messaggio: (form.elements.namedItem('messaggio') as HTMLTextAreaElement).value,
    }
    await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <section id="contatti" className="section-padding section-spacing bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Info */}
          <AnimatedSection>
            <SectionLabel>Contatti</SectionLabel>
            <h2 className="heading-section mt-4 mb-6">
              Parliamo della tua
              <br />
              <span className="text-brand-oro">prossima casa.</span>
            </h2>
            <p className="body-text mb-12">
              Che tu stia cercando casa per te, per la tua famiglia o per un investimento,
              siamo a disposizione per mostrarti i nostri progetti e rispondere a ogni domanda.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 flex items-center justify-center bg-brand-beige shrink-0">
                  <MapPin size={22} className="text-brand-blu" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-bold mb-1">Sede</h4>
                  <p className="text-base font-sans text-brand-blu/60">Milano, Italia</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 flex items-center justify-center bg-brand-beige shrink-0">
                  <Mail size={22} className="text-brand-blu" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-bold mb-1">Email</h4>
                  <a href="mailto:info@campionesi.com" className="text-base font-sans text-brand-blu/60 hover:text-brand-oro transition-colors">
                    info@campionesi.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 flex items-center justify-center bg-brand-beige shrink-0">
                  <Phone size={22} className="text-brand-blu" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-bold mb-1">Telefono</h4>
                  <a href="tel:+393454636063" className="text-base font-sans text-brand-blu/60 hover:text-brand-oro transition-colors">
                    +39 345 463 6063
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Form */}
          <AnimatedSection delay={0.2}>
            <div className="bg-brand-beige p-8 md:p-12">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-brand-oro/20 flex items-center justify-center mx-auto mb-6">
                    <Send size={24} className="text-brand-oro" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold mb-3">Messaggio inviato</h3>
                  <p className="body-text">Ti risponderemo il prima possibile.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="font-serif text-2xl font-bold mb-2">Richiedi informazioni</h3>
                  <p className="text-sm font-sans text-brand-blu/60 mb-8">
                    Compila il modulo e ti ricontatteremo entro 24 ore.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="nome" className="block text-xs font-sans font-medium uppercase tracking-wider text-brand-blu/60 mb-2">
                        Nome *
                      </label>
                      <input
                        id="nome"
                        name="nome"
                        type="text"
                        required
                        className="w-full bg-white border-0 px-4 py-3.5 text-sm font-sans text-brand-blu placeholder:text-brand-blu/30 outline-none border-b-2 border-transparent focus:border-brand-oro transition-all duration-300"
                        placeholder="Il tuo nome"
                      />
                    </div>
                    <div>
                      <label htmlFor="cognome" className="block text-xs font-sans font-medium uppercase tracking-wider text-brand-blu/60 mb-2">
                        Cognome *
                      </label>
                      <input
                        id="cognome"
                        name="cognome"
                        type="text"
                        required
                        className="w-full bg-white border-0 px-4 py-3.5 text-sm font-sans text-brand-blu placeholder:text-brand-blu/30 outline-none border-b-2 border-transparent focus:border-brand-oro transition-all duration-300"
                        placeholder="Il tuo cognome"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-sans font-medium uppercase tracking-wider text-brand-blu/60 mb-2">
                      Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full bg-white border-0 px-4 py-3.5 text-sm font-sans text-brand-blu placeholder:text-brand-blu/30 outline-none border-b-2 border-transparent focus:border-brand-oro transition-all duration-300"
                      placeholder="email@esempio.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="telefono" className="block text-xs font-sans font-medium uppercase tracking-wider text-brand-blu/60 mb-2">
                      Telefono
                    </label>
                    <input
                      id="telefono"
                      name="telefono"
                      type="tel"
                      className="w-full bg-white border-0 px-4 py-3.5 text-sm font-sans text-brand-blu placeholder:text-brand-blu/30 outline-none border-b-2 border-transparent focus:border-brand-oro transition-all duration-300"
                      placeholder="+39 ..."
                    />
                  </div>

                  <div>
                    <label htmlFor="messaggio" className="block text-xs font-sans font-medium uppercase tracking-wider text-brand-blu/60 mb-2">
                      Messaggio *
                    </label>
                    <textarea
                      id="messaggio"
                      name="messaggio"
                      required
                      rows={4}
                      className="w-full bg-white border-0 px-4 py-3.5 text-sm font-sans text-brand-blu placeholder:text-brand-blu/30 outline-none border-b-2 border-transparent focus:border-brand-oro transition-all duration-300 resize-none"
                      placeholder="Come possiamo aiutarti?"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Invio in corso...' : 'Invia Messaggio'}
                  </button>

                  <p className="text-xs font-sans text-brand-blu/40 text-center mt-4">
                    I tuoi dati saranno trattati nel rispetto della normativa sulla privacy.
                  </p>
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
