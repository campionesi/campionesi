import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — Campionesi',
  description: 'Informativa sul trattamento dei dati personali ai sensi del GDPR.',
}

export default function PrivacyPage() {
  return (
    <main>
      <Navbar />
      <section className="section-padding pt-36 pb-24 bg-white">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-brand-blu mb-4">
            Privacy Policy
          </h1>
          <p className="font-sans text-sm text-brand-blu/40 mb-16">
            Aggiornata al 1° luglio 2026
          </p>

          <div className="prose prose-sm max-w-none font-sans text-brand-blu/70 space-y-10 leading-relaxed">

            <div>
              <h2 className="font-serif text-xl font-semibold text-brand-blu mb-3">1. Titolare del trattamento</h2>
              <p>
                Il titolare del trattamento dei dati personali è <strong className="text-brand-blu">Campionesi S.r.l.</strong>,
                con sede legale in Viale Regina Margherita 39, 20122 Milano, P.IVA 14366790963.
              </p>
              <p className="mt-3">
                Per qualsiasi questione relativa alla privacy, è possibile contattarci all&apos;indirizzo email:{' '}
                <a href="mailto:privacy@campionesi.com" className="text-brand-oro hover:underline">
                  privacy@campionesi.com
                </a>
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-semibold text-brand-blu mb-3">2. Dati raccolti</h2>
              <p>
                Tramite il modulo di contatto presente sul sito raccogliamo i seguenti dati personali:
              </p>
              <ul className="list-disc pl-5 mt-3 space-y-1">
                <li>Nome e cognome</li>
                <li>Indirizzo email</li>
                <li>Numero di telefono (facoltativo)</li>
                <li>Messaggio liberamente inserito dall&apos;utente</li>
              </ul>
              <p className="mt-3">
                Raccogliamo inoltre dati tecnici di navigazione (indirizzo IP, browser, pagine visitate) tramite i sistemi di hosting, esclusivamente per finalità di sicurezza e manutenzione del sito.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-semibold text-brand-blu mb-3">3. Finalità del trattamento</h2>
              <p>I dati raccolti vengono utilizzati esclusivamente per:</p>
              <ul className="list-disc pl-5 mt-3 space-y-1">
                <li>Rispondere alle richieste di informazioni inviate tramite il modulo di contatto</li>
                <li>Fornire informazioni sui progetti immobiliari di Campionesi S.r.l.</li>
                <li>Adempiere a obblighi di legge</li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-xl font-semibold text-brand-blu mb-3">4. Base giuridica</h2>
              <p>
                Il trattamento dei dati personali si basa sul consenso dell&apos;interessato (art. 6, par. 1, lett. a del GDPR),
                espresso al momento dell&apos;invio del modulo di contatto, e sul legittimo interesse del titolare
                a rispondere alle richieste ricevute (art. 6, par. 1, lett. f del GDPR).
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-semibold text-brand-blu mb-3">5. Conservazione dei dati</h2>
              <p>
                I dati personali sono conservati per il tempo strettamente necessario a evadere la richiesta
                e comunque non oltre 24 mesi dalla raccolta, salvo diversi obblighi di legge.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-semibold text-brand-blu mb-3">6. Condivisione dei dati</h2>
              <p>
                I dati personali non vengono ceduti, venduti o comunicati a terzi, ad eccezione dei fornitori
                di servizi tecnici strettamente necessari al funzionamento del sito (hosting, infrastruttura),
                i quali agiscono in qualità di responsabili del trattamento ai sensi dell&apos;art. 28 del GDPR.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-semibold text-brand-blu mb-3">7. Diritti dell&apos;interessato</h2>
              <p>
                Ai sensi degli artt. 15-22 del GDPR, l&apos;interessato ha il diritto di:
              </p>
              <ul className="list-disc pl-5 mt-3 space-y-1">
                <li>Accedere ai propri dati personali</li>
                <li>Richiederne la rettifica o la cancellazione</li>
                <li>Opporsi al trattamento o richiederne la limitazione</li>
                <li>Richiedere la portabilità dei dati</li>
                <li>Revocare il consenso in qualsiasi momento</li>
                <li>Proporre reclamo all&apos;Autorità Garante per la Protezione dei Dati Personali</li>
              </ul>
              <p className="mt-3">
                Per esercitare tali diritti, scrivere a:{' '}
                <a href="mailto:privacy@campionesi.com" className="text-brand-oro hover:underline">
                  privacy@campionesi.com
                </a>
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-semibold text-brand-blu mb-3">8. Cookie</h2>
              <p>
                Il sito utilizza esclusivamente cookie tecnici necessari al corretto funzionamento delle pagine.
                Non vengono utilizzati cookie di profilazione o di terze parti a fini pubblicitari.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-semibold text-brand-blu mb-3">9. Modifiche alla presente informativa</h2>
              <p>
                Campionesi S.r.l. si riserva il diritto di aggiornare la presente informativa in qualsiasi momento.
                Le modifiche saranno pubblicate su questa pagina con indicazione della data di aggiornamento.
              </p>
            </div>

          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
