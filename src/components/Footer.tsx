'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-brand-blu text-white">
      <div className="section-padding py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            {/* Brand */}
            <div>
              <Link href="/" className="font-serif text-2xl font-bold tracking-tight">
                campionesi
              </Link>
              <p className="text-base font-sans text-white/50 mt-4 leading-relaxed max-w-xs">
                Investimenti immobiliari nel centro di Milano.
                Acquisiamo, ristrutturiamo e vendiamo con finiture di pregio.
              </p>
            </div>

            {/* Link */}
            <div>
              <h4 className="text-xs font-sans uppercase tracking-[0.2em] text-brand-oro mb-6">Navigazione</h4>
              <div className="space-y-3">
                <Link href="/#progetti" className="block text-base font-sans text-white/60 hover:text-white transition-colors">Progetti</Link>
                <Link href="/#approccio" className="block text-base font-sans text-white/60 hover:text-white transition-colors">Chi Siamo</Link>
                <Link href="/#qualita" className="block text-base font-sans text-white/60 hover:text-white transition-colors">Qualità</Link>
                <Link href="/#contatti" className="block text-base font-sans text-white/60 hover:text-white transition-colors">Contatti</Link>
              </div>
            </div>

            {/* Contatti */}
            <div>
              <h4 className="text-xs font-sans uppercase tracking-[0.2em] text-brand-oro mb-6">Contatti</h4>
              <div className="space-y-3 text-base font-sans text-white/60">
                <p>Milano, Italia</p>
                <a href="mailto:info@campionesi.com" className="block hover:text-white transition-colors">info@campionesi.com</a>
                <a href="tel:+393454636063" className="block hover:text-white transition-colors">+39 345 463 6063</a>
              </div>
            </div>
          </div>

          {/* Dati societari */}
          <div className="pt-8 border-t border-white/10 mb-6">
            <p className="text-xs font-sans text-white/30 leading-relaxed">
              Campionesi S.r.l. &mdash; P.IVA 14366790963 &mdash; Viale Regina Margherita 39, 20122 Milano
            </p>
          </div>

          {/* Bottom */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs font-sans text-white/40">
              &copy; {new Date().getFullYear()} Campionesi S.r.l. &mdash; Tutti i diritti riservati.
            </p>
            <div className="flex items-center gap-6 text-xs font-sans text-white/40">
              <Link href="/privacy" className="hover:text-white/70 transition-colors">Privacy Policy</Link>
              <Link href="/cookie" className="hover:text-white/70 transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
