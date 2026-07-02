export type ProjectStatus = 'completato' | 'in-corso'

export interface Project {
  slug: string
  title: string
  zona: string
  indirizzo: string
  status: ProjectStatus
  statusLabel: string
  description: string
  shortDescription: string
  mq: number
  locali: string
  piano?: string
  anno: string
  unita: number
  consegna?: string
  personalizzabile?: boolean
  planimetria?: string
  renders?: string[]
  finiture: string[]
  images: string[]
  hero: string
}

export const projects: Project[] = [
  // ── COMPLETATI ─────────────────────────────────────────────
  {
    slug: 'viale-regina-margherita',
    title: 'Viale Regina Margherita',
    zona: 'Porta Vittoria',
    indirizzo: 'Viale Regina Margherita, Milano',
    status: 'completato',
    statusLabel: 'Completato',
    description: 'Ristrutturazione integrale di un appartamento di 90 mq trasformato in un elegante trilocale. Intervento completo degli impianti, parquet in rovere naturale, cucina italiana su misura e bagno con sanitari sospesi di design. Consegnato chiavi in mano, arredato e pronto da vivere.',
    shortDescription: 'Trilocale di 90 mq completamente ristrutturato in Porta Vittoria.',
    mq: 90,
    locali: 'Trilocale',
    anno: '2024',
    unita: 1,
    finiture: ['Parquet in rovere naturale', 'Cucina italiana su misura', 'Sanitari sospesi di design', 'Infissi in legno con doppio vetro', 'Impianti completamente rifatti'],
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80',
    ],
    hero: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=80',
  },
  {
    slug: 'via-maestri-campionesi',
    title: 'Via Maestri Campionesi',
    zona: 'Porta Romana',
    indirizzo: 'Via Maestri Campionesi, Milano',
    status: 'completato',
    statusLabel: 'Completato',
    description: 'Frazionamento di un appartamento di 130 mq in tre unità indipendenti: due bilocali e un monolocale. Ogni unità è stata ristrutturata con finiture di pregio e arredata con mobili italiani. Un intervento che coniuga ottimizzazione degli spazi e qualità costruttiva di alto livello.',
    shortDescription: 'Frazionamento in 3 unità (2 bilocali + monolocale) in Porta Romana.',
    mq: 130,
    locali: '2 Bilocali + Monolocale',
    anno: '2024',
    unita: 3,
    finiture: ['Parquet in rovere massello', 'Mobili italiani su misura', 'Sanitari sospesi italiani', 'Infissi in legno', 'Porte a filomuro laccate'],
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
      'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=1200&q=80',
    ],
    hero: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80',
  },
  {
    slug: 'via-morosini',
    title: 'Via Morosini',
    zona: 'Porta Romana',
    indirizzo: 'Via Morosini, Milano',
    status: 'completato',
    statusLabel: 'Completato',
    description: 'Frazionamento di 105 mq in due bilocali indipendenti, entrambi ristrutturati con finiture di pregio. Parquet in rovere a spina di pesce, cucine con isola e bagni con rivestimenti in gres effetto marmo. Appartamenti consegnati arredati e immediatamente abitabili.',
    shortDescription: '2 bilocali da 105 mq totali con finiture di pregio in Porta Romana.',
    mq: 105,
    locali: '2 Bilocali',
    anno: '2025',
    unita: 2,
    finiture: ['Parquet in rovere a spina di pesce', 'Cucina con isola', 'Gres effetto marmo', 'Sanitari sospesi Ideal Standard', 'Infissi in legno massello'],
    images: [
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200&q=80',
    ],
    hero: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1600&q=80',
  },
  {
    slug: 'piazzale-libia',
    title: 'Piazzale Libia',
    zona: 'Porta Romana',
    indirizzo: 'Piazzale Libia, Milano',
    status: 'completato',
    statusLabel: 'Completato',
    description: 'Frazionamento di un appartamento di 98 mq in due bilocali di alta qualità. Intervento completo con rifacimento degli impianti, parquet in rovere spazzolato e arredi italiani su misura. Posizione privilegiata in Piazzale Libia, nel cuore del quartiere Porta Romana.',
    shortDescription: '2 bilocali da 98 mq totali in posizione privilegiata in Piazzale Libia.',
    mq: 98,
    locali: '2 Bilocali',
    anno: '2025',
    unita: 2,
    finiture: ['Parquet in rovere spazzolato', 'Arredi italiani su misura', 'Sanitari sospesi Ceramica Flaminia', 'Infissi in legno con doppio vetro', 'Climatizzazione canalizzata'],
    images: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200&q=80',
    ],
    hero: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1600&q=80',
  },
  {
    slug: 'via-friuli',
    title: 'Via Friuli 14',
    zona: 'Porta Vittoria',
    indirizzo: 'Via Friuli 14, Milano',
    status: 'completato',
    statusLabel: 'Completato',
    description: 'Ristrutturazione completa di un bilocale di 55 mq. Nonostante la metratura contenuta, il progetto ha ottimizzato ogni centimetro: soluzioni su misura per cucina e bagno, parquet in rovere massello e infissi in legno per un risultato elegante e funzionale.',
    shortDescription: 'Bilocale di 55 mq completamente ristrutturato con soluzioni su misura.',
    mq: 55,
    locali: 'Bilocale',
    anno: '2025',
    unita: 1,
    finiture: ['Parquet in rovere massello', 'Cucina su misura', 'Sanitari sospesi di design', 'Infissi in legno', 'Arredi ottimizzati per gli spazi'],
    images: [
      'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=1200&q=80',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80',
    ],
    hero: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=1600&q=80',
  },
  {
    slug: 'via-stoppani',
    title: 'Via Stoppani',
    zona: 'Porta Venezia',
    indirizzo: 'Via Stoppani, Milano',
    status: 'completato',
    statusLabel: 'Completato',
    description: 'Frazionamento di 135 mq in due unità distinte: un bilocale e un trilocale. Entrambi ristrutturati con finiture premium nel vivace quartiere di Porta Venezia. Parquet in rovere naturale, cucine italiane complete e bagni con rivestimenti di pregio.',
    shortDescription: 'Bilocale e trilocale da 135 mq totali nel cuore di Porta Venezia.',
    mq: 135,
    locali: 'Bilocale + Trilocale',
    anno: '2026',
    unita: 2,
    finiture: ['Parquet in rovere naturale', 'Cucine italiane complete', 'Sanitari sospesi Duravit', 'Infissi in legno massello', 'Porte blindate classe 3'],
    images: [
      'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
    ],
    hero: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1600&q=80',
  },

  // ── IN CORSO ───────────────────────────────────────────────
  {
    slug: 'via-pinaroli',
    planimetria: '/planimetria-via-pinaroli.pdf',
    renders: ['/pinaroli-1.png', '/pinaroli-2.png', '/pinaroli-3.png', '/pinaroli-4.png'],
    title: 'Via Pinaroli',
    zona: 'Porta Romana',
    indirizzo: 'Via Pinaroli, Milano',
    status: 'in-corso',
    statusLabel: 'In Corso',
    description: 'Ristrutturazione integrale di un bilocale di 75 mq al primo piano in Porta Romana. Intervento completo con finiture di alta qualità e arredi italiani su misura. L\'appartamento sarà consegnato chiavi in mano, pronto da vivere, entro settembre 2026.',
    shortDescription: 'Bilocale di 75 mq al 1° piano in Porta Romana — consegna settembre 2026.',
    mq: 75,
    locali: 'Bilocale',
    piano: '1° piano',
    anno: '2026',
    consegna: 'Settembre 2026',
    unita: 1,
    finiture: ['Parquet in rovere naturale', 'Cucina italiana su misura', 'Sanitari sospesi di design', 'Infissi in legno con doppio vetro', 'Impianti completamente rifatti'],
    images: [
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80',
    ],
    hero: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1600&q=80',
  },
  {
    slug: 'via-botta',
    planimetria: '/planimetria-via-botta.pdf',
    personalizzabile: true,
    title: 'Via Botta',
    zona: 'Porta Romana',
    indirizzo: 'Via Botta, Milano',
    status: 'in-corso',
    statusLabel: 'In Corso',
    description: 'Frazionamento di 110 mq in due bilocali indipendenti in Porta Romana. I lavori sono in corso: entrambe le unità saranno consegnate complete di arredi e finiture di pregio. Acquistando su carta è possibile personalizzare layout e materiali.',
    shortDescription: '2 bilocali da 110 mq totali in Porta Romana — consegna ottobre 2026.',
    mq: 110,
    locali: '2 Bilocali',
    anno: '2026',
    consegna: 'Ottobre 2026',
    unita: 2,
    finiture: ['Parquet in rovere massello', 'Mobili italiani su misura', 'Sanitari sospesi italiani', 'Infissi in legno', 'Climatizzazione canalizzata'],
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
    ],
    hero: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80',
  },
  {
    slug: 'via-bergamo',
    planimetria: '/planimetria-via-bergamo.pdf',
    personalizzabile: true,
    title: 'Via Bergamo',
    zona: 'Porta Romana',
    indirizzo: 'Via Bergamo, Milano',
    status: 'in-corso',
    statusLabel: 'In Corso',
    description: 'Frazionamento di 130 mq al piano rialzato in due unità: un trilocale e un bilocale. Progetto in fase di ristrutturazione con finiture di altissimo livello. Acquisto su carta disponibile con ampia possibilità di personalizzazione degli spazi.',
    shortDescription: 'Trilocale e bilocale da 130 mq al piano rialzato — consegna novembre 2026.',
    mq: 130,
    locali: 'Trilocale + Bilocale',
    piano: 'Piano rialzato',
    anno: '2026',
    consegna: 'Novembre 2026',
    unita: 2,
    finiture: ['Parquet in rovere spazzolato', 'Cucine italiane su misura', 'Sanitari sospesi di design', 'Infissi in legno massello', 'Domotica base'],
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80',
    ],
    hero: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=80',
  },
  {
    slug: 'via-maj',
    planimetria: '/planimetria-via-maj.pdf',
    personalizzabile: true,
    title: 'Via Maj',
    zona: 'Porta Romana',
    indirizzo: 'Via Maj, Milano',
    status: 'in-corso',
    statusLabel: 'In Corso',
    description: 'Frazionamento di 105 mq al secondo piano in due bilocali. Intervento in corso con rifacimento completo degli impianti e finiture premium. La posizione centrale e il piano elevato garantiscono luminosità e tranquillità.',
    shortDescription: '2 bilocali da 105 mq al 2° piano in Porta Romana — consegna dicembre 2026.',
    mq: 105,
    locali: '2 Bilocali',
    piano: '2° piano',
    anno: '2026',
    consegna: 'Dicembre 2026',
    unita: 2,
    finiture: ['Parquet in rovere massello', 'Mobili italiani', 'Sanitari sospesi italiani', 'Infissi in legno con doppio vetro', 'Impianti completamente rifatti'],
    images: [
      'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=1200&q=80',
    ],
    hero: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=1600&q=80',
  },
  {
    slug: 'via-reina',
    planimetria: '/planimetria-via-reina.pdf',
    personalizzabile: true,
    title: 'Via Reina',
    zona: 'Susa',
    indirizzo: 'Via Reina, Milano',
    status: 'in-corso',
    statusLabel: 'In Corso',
    description: 'Ristrutturazione integrale di un trilocale di 75 mq al piano rialzato nella zona Susa. Progetto in fase di realizzazione con finiture di pregio e arredi italiani completi. Acquistando su carta è possibile concordare la disposizione degli ambienti.',
    shortDescription: 'Trilocale di 75 mq al piano rialzato in zona Susa — consegna dicembre 2026.',
    mq: 75,
    locali: 'Trilocale',
    piano: 'Piano rialzato',
    anno: '2026',
    consegna: 'Dicembre 2026',
    unita: 1,
    finiture: ['Parquet in rovere naturale', 'Cucina italiana su misura', 'Sanitari sospesi di design', 'Infissi in legno', 'Arredi italiani completi'],
    images: [
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200&q=80',
    ],
    hero: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1600&q=80',
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug)
}

export function getProjectsByStatus(status: ProjectStatus): Project[] {
  return projects.filter(p => p.status === status)
}
