import { motion, useReducedMotion } from 'framer-motion'
import { AAROGYASRI_STEPS } from '../data/content'
import { SectionHeading, RevealGroup, itemVariants, Magnetic } from './ui'
import { HOSPITAL } from '../data/content'

export default function Aarogyasri() {
  const reduce = useReducedMotion()
  return (
    <section id="aarogyasri" className="container-x py-16 md:py-24">
      <SectionHeading eyebrow="Aarogyasri & Cashless" title="Quality healthcare, accessible to everyone" sub="We are empanelled for Aarogyasri and major cashless insurance, our desk guides you through every step." />
      <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {AAROGYASRI_STEPS.map((s) => (
          <motion.div key={s.step} variants={itemVariants} whileHover={reduce ? {} : { y: -6 }}
            className="relative glass-card p-7 overflow-hidden">
            <span className="font-display text-5xl gradient-text">{s.step}</span>
            <h3 className="font-semibold mt-3 mb-1">{s.title}</h3>
            <p className="text-sm text-muted">{s.text}</p>
          </motion.div>
        ))}
      </RevealGroup>
      <div className="mt-8">
        <Magnetic href={HOSPITAL.whatsapp} target="_blank" rel="noopener" className="btn btn-primary">Ask about Aarogyasri on WhatsApp</Magnetic>
      </div>
    </section>
  )
}
