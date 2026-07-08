import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const FEED = [
  { text: 'ICU bed assigned', tag: 'Critical Care' },
  { text: 'CT scan completed', tag: 'Diagnostics' },
  { text: 'Aarogyasri claim approved', tag: 'Cashless Care' },
  { text: 'Ambulance dispatched', tag: 'Giddalur' },
  { text: 'Patient discharged', tag: 'General Medicine' },
  { text: 'Surgery completed', tag: 'Orthopedics' },
]

const VISIBLE = 3
const INTERVAL_MS = 2600

export default function HeroLiveFeed({ reduce }: { reduce?: boolean | null }) {
  const [start, setStart] = useState(0)

  useEffect(() => {
    if (reduce) return
    const id = setInterval(() => setStart((s) => (s + 1) % FEED.length), INTERVAL_MS)
    return () => clearInterval(id)
  }, [reduce])

  const items = Array.from({ length: VISIBLE }, (_, i) => FEED[(start + i) % FEED.length])

  return (
    <ul className="py-3 space-y-2">
      <AnimatePresence initial={false} mode="popLayout">
        {items.map((item) => (
          <motion.li
            key={item.text}
            layout
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.5, ease: [0.2, 0.7, 0.2, 1] }}
            className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3"
          >
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-mint" />
            </span>
            <span className="flex-1 text-sm text-white/90">{item.text}</span>
            <span className="text-[11px] uppercase tracking-wide text-white/50">{item.tag}</span>
          </motion.li>
        ))}
      </AnimatePresence>
    </ul>
  )
}
