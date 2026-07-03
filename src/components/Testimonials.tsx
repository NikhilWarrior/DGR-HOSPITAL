import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { TESTIMONIALS } from '../data/content'
import { SectionHeading } from './ui'

export default function Testimonials() {
  const [i, setI] = useState(0)
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return
    const t = setInterval(() => setI((p) => (p + 1) % TESTIMONIALS.length), 5000)
    return () => clearInterval(t)
  }, [])
  const t = TESTIMONIALS[i]
  return (
    <section className="bg-surface/40 py-16 md:py-24">
      <div className="container-x">
        <SectionHeading eyebrow="Patient Stories" title="Trusted by families across the region" center />
        <div className="relative max-w-3xl mx-auto text-center min-h-[220px]">
          <Quote className="mx-auto text-brand-400 mb-6" size={40} />
          <AnimatePresence mode="wait">
            <motion.div key={i}
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5 }}>
              <p className="font-display text-2xl md:text-3xl leading-relaxed">{t.text}</p>
              <div className="flex items-center justify-center gap-1 mt-6 text-yellow">
                {Array.from({ length: 5 }).map((_, k) => <Star key={k} size={16} fill="currentColor" />)}
              </div>
              <p className="mt-3 font-semibold">{t.name} <span className="text-muted font-normal">,  {t.place}</span></p>
            </motion.div>
          </AnimatePresence>
          <div className="flex justify-center gap-2 mt-8">
            {TESTIMONIALS.map((_, k) => (
              <button key={k} onClick={() => setI(k)} aria-label={`Story ${k + 1}`}
                className={`h-2 rounded-full transition-all ${k === i ? 'w-8 bg-brand' : 'w-2 bg-ink/15'}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
