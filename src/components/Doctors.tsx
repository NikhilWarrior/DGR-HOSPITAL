import { motion, useReducedMotion } from 'framer-motion'
import { CalendarPlus, Stethoscope } from 'lucide-react'
import { DOCTORS } from '../data/content'
import { SectionHeading, RevealGroup, itemVariants } from './ui'

function initials(name: string): string {
  if (name.includes('[')) return 'DR'
  const parts = name.replace('Dr.', '').trim().split(' ').filter(Boolean)
  return parts.slice(0, 2).map((w) => w[0]).join('').toUpperCase()
}

export default function Doctors() {
  const reduce = useReducedMotion()
  return (
    <section id="doctors" className="container-x py-16 md:py-24">
      <SectionHeading
        eyebrow="Best Team of Doctors"
        title="Meet our specialists"
        sub="Experienced, friendly doctors caring for Giddalur across every major speciality."
      />
      <RevealGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {DOCTORS.map((d) => (
          <motion.article
            key={d.name + d.specialty}
            variants={itemVariants}
            whileHover={reduce ? {} : { y: -6 }}
            className="group glass-card p-6 flex items-center gap-5"
          >
            <div className="shrink-0 w-16 h-16 rounded-2xl grid place-items-center bg-gradient-to-br from-brand to-brand-700 text-bg font-display text-xl font-semibold shadow-glow group-hover:scale-105 transition-transform duration-300">
              {initials(d.name)}
            </div>
            <div className="min-w-0">
              <h3 className="font-semibold text-lg leading-tight">{d.name}</h3>
              <p className="text-brand-400 text-sm font-medium inline-flex items-center gap-1.5">
                <Stethoscope size={14} /> {d.specialty}
              </p>
              <p className="text-muted text-xs mt-0.5">
                {d.qualification}{d.note ? ', ' + d.note : ''}
              </p>
            </div>
          </motion.article>
        ))}
      </RevealGroup>
      <div className="mt-8">
        <a href="#contact" className="btn btn-primary">
          <CalendarPlus size={16} /> Book a consultation
        </a>
      </div>
    </section>
  )
}
