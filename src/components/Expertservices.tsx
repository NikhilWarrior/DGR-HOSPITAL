import { EXPERT_SERVICES } from '../data/content'
import { SectionHeading } from './ui'

// give each pill a colour, cycling through this palette
const COLORS = [
  'bg-[#E06A54] text-white', 'bg-[#4A7A8C] text-white', 'bg-[#EBC85B] text-ink',
  'bg-[#4C9A6B] text-white', 'bg-[#E8A0B0] text-ink', 'bg-[#5B6E5A] text-white',
  'bg-[#7A6FB0] text-white', 'bg-[#E39A6B] text-white', 'bg-[#3E8E9E] text-white',
]

export default function ExpertServices() {
  return (
    <section id="expert-services" className="container-x py-16 md:py-24">
      <SectionHeading
        eyebrow="Discover Our"
        title="Expert Services"
        center
      />
      <div className="flex flex-wrap justify-center gap-3">
        {EXPERT_SERVICES.map((service, i) => (
          <span
            key={service}
            className={`px-5 py-2 rounded-full text-sm font-semibold ${COLORS[i % COLORS.length]}`}
          >
            {service}
          </span>
        ))}
      </div>
    </section>
  )
}