'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

interface Props {
  images: string[]
  title: string
}

export default function ProjectGallery({ images, title }: Props) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const openLightbox = (i: number) => setLightboxIndex(i)
  const closeLightbox = () => setLightboxIndex(null)

  const goNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % images.length)
    }
  }

  const goPrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + images.length) % images.length)
    }
  }

  return (
    <>
      <h3 className="font-serif text-2xl font-bold mb-6">Galleria</h3>
      <div className="grid grid-cols-2 gap-3">
        {images.map((img, i) => (
          <div
            key={i}
            className={`img-zoom cursor-pointer ${i === 0 ? 'col-span-2 aspect-[16/9]' : 'aspect-square'}`}
            onClick={() => openLightbox(i)}
          >
            <img
              src={img}
              alt={`${title} — foto ${i + 1}`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white/70 hover:text-white p-2"
              aria-label="Chiudi"
            >
              <X size={28} />
            </button>

            {images.length > 1 && (
              <>
                <button
                  onClick={(e) => { e.stopPropagation(); goPrev() }}
                  className="absolute left-4 md:left-8 text-white/70 hover:text-white p-2"
                  aria-label="Foto precedente"
                >
                  <ChevronLeft size={36} />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); goNext() }}
                  className="absolute right-4 md:right-8 text-white/70 hover:text-white p-2"
                  aria-label="Foto successiva"
                >
                  <ChevronRight size={36} />
                </button>
              </>
            )}

            <motion.img
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              src={images[lightboxIndex]}
              alt={`${title} — foto ${lightboxIndex + 1}`}
              className="max-h-[85vh] max-w-[90vw] object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            <div className="absolute bottom-6 text-white/50 text-sm font-sans">
              {lightboxIndex + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
