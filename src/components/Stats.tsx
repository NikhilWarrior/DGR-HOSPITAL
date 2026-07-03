import { STATS } from '../data/content'
import { CountUp, RevealGroup, itemVariants } from './ui'
import { motion } from 'framer-motion'

export default function Stats() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-600 to-brand-700" />
      <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_90%_120%,rgba(0,230,189,0.35),transparent)]" />
      <RevealGroup className="container-x relative grid grid-cols-2 md:grid-cols-4 gap-6 py-14">
        {STATS.map((s) => (
          <motion.div key={s.label} variants={itemVariants}>
            <b className="block font-display text-4xl md:text-5xl text-white">
              <CountUp to={s.value} suffix={s.suffix} raw={s.raw} />
            </b>
            <span className="text-sm text-white/80 mt-1 block">{s.label}</span>
          </motion.div>
        ))}
      </RevealGroup>
    </section>
  )
}
