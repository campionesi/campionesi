'use client'

import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Approccio from '@/components/Approccio'
import Numeri from '@/components/Numeri'
import Qualita from '@/components/Qualita'
import Progetti from '@/components/Progetti'
import Processo from '@/components/Processo'
import Team from '@/components/Team'
import Contatti from '@/components/Contatti'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Approccio />
      <Numeri />
      <Qualita />
      <Progetti />
      <Processo />
      <Team />
      <Contatti />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
