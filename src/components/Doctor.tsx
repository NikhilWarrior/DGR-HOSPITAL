import { motion, useReducedMotion } from 'framer-motion'
import { HOSPITAL } from '../data/content'
import { Reveal } from './ui'

export default function Doctor() {
  const reduce = useReducedMotion()
  return (
    <section id="doctor" className="bg-surface/40 py-16 md:py-24">
      <div className="container-x grid lg:grid-cols-[0.8fr_1.2fr] gap-12 items-center">
        <Reveal>
          <motion.div
            whileHover={reduce ? {} : { rotateY: 6, rotateX: -4 }}
            style={{ transformStyle: 'preserve-3d' }}
            className="relative aspect-[4/5] rounded-3xl overflow-hidden grid place-items-center shadow-card"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-brand-600 to-brand-700" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(0,230,189,0.4),transparent_60%)]" />
            <div className="absolute inset-3.5 border border-dashed border-white/25 rounded-2xl animate-[spin_26s_linear_infinite]" />
            <div className="relative font-display text-5xl text-white text-center leading-tight">Dr.<br />D.H.R</div>
            <div className="absolute left-5 bottom-5 bg-white/95 text-brand-700 px-3 py-2 rounded-xl text-xs font-semibold">Founder &amp; Chief Physician</div>
          </motion.div>
        </Reveal>
        <Reveal delay={0.1}>
          <span className="eyebrow">Meet Our Doctor</span>
          <h2 className="heading text-3xl md:text-4xl mt-3 mb-5">A familiar face, trusted by Giddalur</h2>
          <p className="font-display text-2xl leading-relaxed">
            <span className="text-mint text-3xl align-[-0.4rem] mr-1">“</span>
            Good care is simple, listen to the patient, treat them like family, and use the best equipment you can to get them well.
          </p>
          <p className="text-muted my-6">
            DGR Multispeciality Hospital was built on that belief. As the town’s first hospital with a high speed CT scanner,
            fully equipped ICU and modern operation theatres, it brings hospital-grade care within reach of every family in the
            Giddalur region, backed by a friendly, hands on team.
          </p>
          <p className="font-semibold">{HOSPITAL.director}<span className="block font-normal text-muted text-sm">Founder &amp; Chief Medical Director, {HOSPITAL.shortName}</span></p>
        </Reveal>
      </div>
    </section>
  )
}
