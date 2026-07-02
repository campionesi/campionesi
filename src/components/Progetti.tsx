'use client'

import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import AnimatedSection from './AnimatedSection'
import SectionLabel from './SectionLabel'
import { projects } from '@/data/projects'

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const isCompletato = project.status === 'completato'

  return (
    <AnimatedSection delay={index * 0.08}>
      <Link href={`/progetti/${project.slug}`} className="group block h-full">
        <div className={`relative h-full min-h-[260px] p-8 flex flex-col justify-between transition-all duration-500 ${
          isCompletato
            ? 'bg-brand-blu hover:bg-brand-blu-light'
            : 'bg-brand-beige hover:bg-brand-beige-dark'
        }`}>

          {/* Top row */}
          <div className="flex items-start justify-between">
            <div className="flex flex-col gap-2">
              <span className={`text-xs font-sans font-medium uppercase tracking-[0.2em] ${
                isCompletato ? 'text-brand-oro' : 'text-brand-blu/50'
              }`}>
                {project.zona}
              </span>
              {project.personalizzabile && (
                <span className="inline-block px-2 py-1 text-[10px] font-sans font-medium uppercase tracking-wider bg-brand-oro/20 text-brand-oro border border-brand-oro/30">
                  Personalizzabile
                </span>
              )}
            </div>

            {/* Project number */}
            <span className={`font-serif text-6xl font-light leading-none select-none transition-colors duration-500 ${
              isCompletato
                ? 'text-white/10 group-hover:text-white/20'
                : 'text-brand-blu/10 group-hover:text-brand-blu/20'
            }`}>
              {String(index + 1).padStart(2, '0')}
            </span>
          </div>

          {/* Title */}
          <div className="mt-6">
            <h3 className={`font-serif text-2xl font-semibold mb-3 transition-colors duration-300 ${
              isCompletato
                ? 'text-white group-hover:text-brand-oro'
                : 'text-brand-blu group-hover:text-brand-oro'
            }`}>
              {project.title}
            </h3>
            <p className={`font-sans text-sm leading-relaxed line-clamp-2 ${
              isCompletato ? 'text-white/50' : 'text-brand-blu/50'
            }`}>
              {project.shortDescription}
            </p>
          </div>

          {/* Bottom row */}
          <div className={`mt-8 pt-5 border-t flex items-end justify-between ${
            isCompletato ? 'border-white/10' : 'border-brand-blu/10'
          }`}>
            <div className="flex items-center gap-4">
              <span className={`font-sans text-xs ${isCompletato ? 'text-white/40' : 'text-brand-blu/40'}`}>
                {project.mq} mq
              </span>
              <span className={`font-sans text-xs ${isCompletato ? 'text-white/20' : 'text-brand-blu/20'}`}>·</span>
              <span className={`font-sans text-xs ${isCompletato ? 'text-white/40' : 'text-brand-blu/40'}`}>
                {project.locali}
              </span>
              <span className={`font-sans text-xs ${isCompletato ? 'text-white/20' : 'text-brand-blu/20'}`}>·</span>
              <span className={`font-sans text-xs ${isCompletato ? 'text-white/40' : 'text-brand-blu/40'}`}>
                {project.consegna ?? project.anno}
              </span>
            </div>

            <div className={`w-8 h-8 flex items-center justify-center border transition-all duration-300 ${
              isCompletato
                ? 'border-white/20 text-white/40 group-hover:border-brand-oro group-hover:text-brand-oro'
                : 'border-brand-blu/20 text-brand-blu/40 group-hover:border-brand-oro group-hover:text-brand-oro'
            }`}>
              <ArrowUpRight size={14} />
            </div>
          </div>
        </div>
      </Link>
    </AnimatedSection>
  )
}

export default function Progetti() {
  const completati = projects.filter(p => p.status === 'completato')
  const inCorso = projects.filter(p => p.status === 'in-corso')

  return (
    <section id="progetti" className="section-padding pt-12 md:pt-16 pb-20 md:pb-28 lg:pb-36 bg-white">
      <div className="max-w-7xl mx-auto">

        <AnimatedSection>
          <SectionLabel>I Nostri Progetti</SectionLabel>
          <h2 className="heading-section mt-4 mb-6">
            Ogni immobile,<br />
            <span className="text-brand-oro">una trasformazione.</span>
          </h2>
          <p className="body-text max-w-2xl mb-20">
            Dai progetti in corso a quelli completati.
            Ogni intervento racconta il nostro modo di lavorare.
          </p>
        </AnimatedSection>

        {/* In Corso */}
        <AnimatedSection>
          <div className="flex items-center gap-5 mb-8">
            <span className="font-serif text-2xl md:text-3xl font-semibold text-brand-oro">In Corso</span>
            <div className="flex-1 h-px bg-brand-oro/20" />
            <span className="font-serif text-xl text-brand-oro/40">{inCorso.length}</span>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
          {inCorso.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>

        {/* Completati */}
        <AnimatedSection>
          <div className="flex items-center gap-5 mb-8">
            <span className="font-serif text-2xl md:text-3xl font-semibold text-brand-blu">Completati</span>
            <div className="flex-1 h-px bg-brand-beige-dark" />
            <span className="font-serif text-xl text-brand-blu/30">{completati.length}</span>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {completati.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>

      </div>
    </section>
  )
}
