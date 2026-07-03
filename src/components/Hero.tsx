import { Suspense, lazy } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Phone, Ambulance, ScanLine, HeartPulse, ShieldCheck } from 'lucide-react'
import { HOSPITAL } from '../data/content'
import { Magnetic } from './ui'
import EcgCanvas from './EcgCanvas'

const NeuralBackground = lazy(() => import('./NeuralBackground'))

const lineUp = {
  hidden: { y: '110%' },
  show: (i: number) => ({ y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 + i * 0.12 } }),
}

export default function Hero() {
  const reduce = useReducedMotion()
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-16">
      {/* neural network bg */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(1100px_600px_at_80%_-10%,rgba(0,201,160,0.16),transparent_60%),radial-gradient(800px_600px_at_0%_110%,rgba(47,211,224,0.12),transparent_55%)]" />
        {!reduce && (
          <Suspense fallback={null}>
            <NeuralBackground />
          </Suspense>
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-bg/30 via-transparent to-bg pointer-events-none" />
      </div>

      <div className="container-x relative z-10 grid lg:grid-cols-[1.08fr_0.92fr] gap-12 items-center">
        <div>
          <div className="flex gap-1.5 mb-5">
            {['bg-cyan', 'bg-mint', 'bg-yellow'].map((c, i) => (
              <motion.i key={i} className={`block w-4 h-4 rounded-[3px] ${c}`}
                initial={reduce ? false : { scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.15 + i * 0.12, type: 'spring', stiffness: 300, damping: 14 }} />
            ))}
          </div>

          <h1 className="heading text-4xl sm:text-5xl lg:text-[3.6rem] leading-[1.04] tracking-tight">
            <span className="block overflow-hidden"><motion.span className="block" variants={lineUp} custom={0} initial="hidden" animate="show">Healing with heart.</motion.span></span>
            <span className="block overflow-hidden"><motion.span className="block gradient-text italic font-medium animate-flow" variants={lineUp} custom={1} initial="hidden" animate="show">Caring with kindness.</motion.span></span>
          </h1>

          <motion.div initial={reduce ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.8 }}>
            <p className="text-muted text-lg max-w-xl mt-6 mb-8">
              Serving Giddalur with trusted multispeciality healthcare, advanced diagnostics, emergency care and patient first treatment.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <Magnetic href={`tel:${HOSPITAL.phoneRaw}`} className="btn btn-primary"><Phone size={16} /> Book Appointment</Magnetic>
              <Magnetic href={`tel:${HOSPITAL.phoneRaw}`} className="btn btn-emergency"><Ambulance size={16} /> Emergency Care</Magnetic>
            </div>
            <div className="flex flex-wrap gap-x-7 gap-y-3 text-sm text-muted">
              <span className="inline-flex items-center gap-2"><ScanLine size={16} className="text-cyan" /> High Speed CT Scan</span>
              <span className="inline-flex items-center gap-2"><HeartPulse size={16} className="text-cyan" /> ICU & Critical Care</span>
              <span className="inline-flex items-center gap-2"><ShieldCheck size={16} className="text-cyan" /> Aarogyasri Empanelled</span>
            </div>
          </motion.div>
        </div>

        {/* Live vitals card */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ delay: 0.45, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-[22px] p-7 text-white bg-gradient-to-br from-brand-600 to-[#053b33] shadow-card"
        >
          <div className="absolute inset-0 bg-[radial-gradient(420px_220px_at_80%_0%,rgba(0,201,160,0.18),transparent)]" />
          <div className="flex items-center justify-between relative">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.1em] text-mint/90">
              <span className="w-2 h-2 rounded-full bg-mint animate-pulse" /> Live, Stable
            </span>
            <span className="font-display text-lg">72 <span className="text-white/60 text-sm">bpm</span></span>
          </div>
          <EcgCanvas />
          <div className="grid grid-cols-3 gap-2 pt-4 mt-1 border-t border-white/15 relative">
            {[['60+', 'Inpatient Beds'], ['20+', 'ICU Beds'], ['24×7', 'Emergency']].map(([n, l]) => (
              <div key={l}><b className="block font-display text-2xl text-white">{n}</b><span className="text-xs text-white/60">{l}</span></div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
