'use client'

import { motion } from 'framer-motion'

interface Props {
  children: string
}

export default function SectionLabel({ children }: Props) {
  return (
    <div className="flex items-center gap-4 mb-4">
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="w-8 h-px bg-brand-oro origin-left"
      />
      <motion.span
        initial={{ opacity: 0, x: -8 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="label-section"
      >
        {children}
      </motion.span>
    </div>
  )
}
