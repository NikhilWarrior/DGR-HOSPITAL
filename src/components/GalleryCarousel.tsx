import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'

const INTERVAL_MS = 2800

export default function GalleryCarousel({ photos, alt }: { photos: string[]; alt: string }) {
  const reduce = useReducedMotion()
  const [i, setI] = useState(0)

  useEffect(() => {
    if (reduce || photos.length < 2) return
    const id = setInterval(() => setI((n) => (n + 1) % photos.length), INTERVAL_MS)
    return () => clearInterval(id)
  }, [reduce, photos.length])

  return (
    <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-card">
      <AnimatePresence initial={false}>
        <motion.img
          key={photos[i]}
          src={photos[i]}
          alt={alt}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </AnimatePresence>
      {photos.length > 1 && (
        <>
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent h-16" />
          <div className="absolute bottom-3 inset-x-0 flex justify-center gap-2">
            {photos.map((p, idx) => (
              <span key={p} className={`h-2 rounded-full transition-all ${idx === i ? 'w-6 bg-white' : 'w-2 bg-white/50'}`} />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
