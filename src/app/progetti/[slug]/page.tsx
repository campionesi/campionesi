import { Metadata } from 'next'
import { projects, getProjectBySlug } from '@/data/projects'
import ProgettoClient from './ProgettoClient'

export function generateStaticParams() {
  return projects.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const project = getProjectBySlug(params.slug)
  if (!project) return { title: 'Progetto non trovato — Campionesi' }

  return {
    title: `${project.title}, ${project.zona} — Campionesi`,
    description: project.shortDescription,
    openGraph: {
      title: `${project.title}, ${project.zona} — Campionesi`,
      description: project.shortDescription,
      images: [{ url: project.hero, width: 1200, height: 630 }],
    },
  }
}

export default function ProgettoPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug)
  return <ProgettoClient project={project ?? null} />
}
