import { Phone, Ambulance } from 'lucide-react'
import { HOSPITAL } from '../data/content'
import { Reveal, Magnetic } from './ui'

export default function Emergency() {
  return (
    <section id="emergency" className="relative py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emergency/10 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(700px_300px_at_20%_0%,rgba(229,72,77,0.10),transparent)]" />
      <div className="container-x relative">
        <Reveal className="glass-panel p-8 md:p-14 flex flex-col md:flex-row items-center gap-8 justify-between">
          <div className="flex items-center gap-6">
            <span className="grid place-items-center w-16 h-16 rounded-full bg-emergency text-white animate-pulseRing shrink-0">
              <Ambulance size={28} />
            </span>
            <div>
              <span className="eyebrow text-emergency before:bg-emergency">24×7 Emergency</span>
              <h2 className="heading text-3xl md:text-4xl mt-2">Every second matters. We’re ready.</h2>
              <p className="text-muted mt-2 max-w-lg">Round the clock casualty, ambulance and ICU support. If it’s an emergency, call now, our team is standing by.</p>
            </div>
          </div>
          <div className="flex flex-col gap-3 w-full md:w-auto">
            <Magnetic href={`tel:${HOSPITAL.phoneRaw}`} className="btn btn-emergency text-base"><Phone size={18} /> Call {HOSPITAL.phone}</Magnetic>
            <Magnetic href={`tel:${HOSPITAL.phoneRaw}`} className="btn btn-ghost"><Ambulance size={18} /> Request Ambulance</Magnetic>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
