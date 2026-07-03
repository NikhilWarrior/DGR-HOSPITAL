import { SPECIALITY_LIST } from '../data/content'

export default function Marquee() {
  const items = [...SPECIALITY_LIST, ...SPECIALITY_LIST]
  return (
    <div className="border-y border-line bg-surface/60 overflow-hidden py-3.5">
      <div className="flex gap-10 whitespace-nowrap animate-marquee w-max">
        {items.map((s, i) => (
          <span key={i} className="inline-flex items-center gap-2 text-sm font-medium text-ink/80">
            <span className="text-mint">+</span> {s}
          </span>
        ))}
      </div>
    </div>
  )
}
