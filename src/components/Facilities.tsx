import { motion, useReducedMotion } from 'framer-motion'
import { FACILITIES } from '../data/content'
import { SectionHeading, RevealGroup, itemVariants } from './ui'

export default function Facilities() {
  const reduce = useReducedMotion()
  return (
    <section id="facilities" className="container-x py-16 md:py-24">
      <SectionHeading
        eyebrow="Facilities & Services"
        title="A complete care command centre"
        sub="Diagnostics, critical care and support services, all on one campus in Giddalur."
      />
      <RevealGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
        {FACILITIES.map((f) => (
          <motion.div
            key={f.name}
            variants={itemVariants}
            whileHover={reduce ? {} : { y: -6 }}
            className="group relative glass-card p-6 overflow-hidden"
          >
            {/* corner glow on hover */}
            <div className="pointer-events-none absolute -right-8 -top-8 w-28 h-28 rounded-full bg-brand/25 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative w-12 h-12 rounded-xl grid place-items-center bg-gradient-to-br from-brand to-brand-700 text-bg mb-4 shadow-glow group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">
              <f.icon size={22} />
            </div>
            <h3 className="relative font-semibold text-[1.02rem] leading-snug">{f.name}</h3>
            <span className="relative inline-block mt-2.5 text-[0.66rem] font-semibold uppercase tracking-wider text-mint bg-mint/10 px-2.5 py-1 rounded-full">
              {f.meta}
            </span>
          </motion.div>
        ))}
      </RevealGroup>
    </section>
  )
}
