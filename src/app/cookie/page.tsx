import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie Policy — Campionesi',
  description: 'Informativa sull\'uso dei cookie sul sito campionesi.com.',
}

export default function CookiePage() {
  return (
    <main>
      <Navbar />
      <section className="section-padding pt-36 pb-24 bg-white">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-brand-blu mb-4">
            Cookie Policy
          </h1>
          <p className="font-sans text-sm text-brand-blu/40 mb-16">
            Aggiornata al 1° luglio 2026
          </p>

          <div className="font-sans text-brand-blu/70 space-y-10 leading-relaxed">

            <div>
              <h2 className="font-serif text-xl font-semibold text-brand-blu mb-3">1. Cosa sono i cookie</h2>
              <p>
                I cookie sono piccoli file di testo che i siti web salvano sul dispositivo dell&apos;utente durante la navigazione.
                Servono a far funzionare correttamente il sito, a ricordare le preferenze dell&apos;utente e a raccogliere
                informazioni statistiche anonime sulla navigazione.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-semibold text-brand-blu mb-3">2. Cookie utilizzati da questo sito</h2>
              <p className="mb-4">
                Il sito <strong className="text-brand-blu">campionesi.com</strong> utilizza esclusivamente <strong className="text-brand-blu">cookie tecnici</strong>,
                necessari al corretto funzionamento delle pagine. Non utilizziamo cookie di profilazione,
                cookie di tracciamento o cookie pubblicitari di terze parti.
              </p>
              <div className="border border-brand-beige-dark overflow-hidden">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-brand-beige">
                      <th className="text-left px-4 py-3 font-sans font-semibold text-brand-blu">Nome</th>
                      <th className="text-left px-4 py-3 font-sans font-semibold text-brand-blu">Tipo</th>
                      <th className="text-left px-4 py-3 font-sans font-semibold text-brand-blu">Finalità</th>
                      <th className="text-left px-4 py-3 font-sans font-semibold text-brand-blu">Durata</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-brand-beige-dark">
                      <td className="px-4 py-3 font-mono text-xs">__vercel_live_token</td>
                      <td className="px-4 py-3">Tecnico</td>
                      <td className="px-4 py-3">Gestione sessione hosting</td>
                      <td className="px-4 py-3">Sessione</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h2 className="font-serif text-xl font-semibold text-brand-blu mb-3">3. Cookie di terze parti</h2>
              <p>
                Questo sito non installa cookie di terze parti a fini pubblicitari o di profilazione.
                L&apos;utilizzo di Google Fonts (caricati tramite Google servers) potrebbe comportare
                la lettura di cookie tecnici da parte di Google, secondo la loro{' '}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-brand-oro hover:underline">
                  Privacy Policy
                </a>.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-semibold text-brand-blu mb-3">4. Come disabilitare i cookie</h2>
              <p className="mb-3">
                È possibile disabilitare i cookie direttamente dal proprio browser. Tieni presente che
                disabilitare i cookie tecnici potrebbe compromettere il corretto funzionamento del sito.
              </p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li><strong>Chrome:</strong> Impostazioni → Privacy e sicurezza → Cookie</li>
                <li><strong>Safari:</strong> Preferenze → Privacy → Gestisci dati siti web</li>
                <li><strong>Firefox:</strong> Impostazioni → Privacy e sicurezza → Cookie</li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-xl font-semibold text-brand-blu mb-3">5. Contatti</h2>
              <p>
                Per qualsiasi informazione relativa alla presente Cookie Policy, puoi scrivere a:{' '}
                <a href="mailto:privacy@campionesi.com" className="text-brand-oro hover:underline">
                  privacy@campionesi.com
                </a>
              </p>
            </div>

          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
