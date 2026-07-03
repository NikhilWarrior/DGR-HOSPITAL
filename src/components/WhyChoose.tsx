import { motion, useReducedMotion } from 'framer-motion'
import { WHY } from '../data/content'
import { SectionHeading, RevealGroup, itemVariants } from './ui'

export default function WhyChoose() {
  const reduce = useReducedMotion()
  return (
    <section className="block container-x py-16 md:py-24">
      <SectionHeading eyebrow="Why DGR Hospitals" title="Care you can trust, outcomes you can feel" />
      <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {WHY.map((f) => (
          <motion.div
            key={f.title}
            variants={itemVariants}
            whileHover={reduce ? {} : { y: -8 }}
            className="group glass-card p-7"
          >
            <div className="w-12 h-12 rounded-xl grid place-items-center bg-brand/15 text-brand-400 group-hover:bg-brand group-hover:text-bg transition-all duration-300 mb-4">
              <f.icon size={24} />
            </div>
            <h3 className="text-lg font-semibold mb-1">{f.title}</h3>
            <p className="text-sm text-muted">{f.text}</p>
          </motion.div>
        ))}
      </RevealGroup>
    </section>
  )
}
