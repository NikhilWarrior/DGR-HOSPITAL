import { motion } from 'framer-motion'
import { EXPERT_SERVICES } from '../data/content'
import { SectionHeading, RevealGroup, itemVariants } from './ui'

export default function ExpertServices() {
  return (
    <section id="expert-services" className="container-x py-16 md:py-24">
      <SectionHeading eyebrow="Discover Our" title="Expert Services" center />
      <RevealGroup className="flex flex-wrap justify-center gap-2.5 max-w-4xl mx-auto" stagger={0.03}>
        {EXPERT_SERVICES.map((service) => (
          <motion.span
            key={service}
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-ink/85 bg-surface border border-line shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/40 hover:text-brand-600 hover:shadow-md"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-mint shrink-0" />
            {service}
          </motion.span>
        ))}
      </RevealGroup>
    </section>
  )
}
