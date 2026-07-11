import { motion, useReducedMotion } from 'framer-motion'
import { GALLERY } from '../data/content'
import { SectionHeading, RevealGroup, itemVariants } from './ui'
import GalleryCarousel from './GalleryCarousel'

export default function Gallery() {
  const reduce = useReducedMotion()
  return (
    <section id="gallery" className="container-x py-16 md:py-24">
      <SectionHeading
        eyebrow="Inside DGR Hospitals"
        title="A closer look at our facilities"
        sub="A look inside our wards and theatres — more photos coming soon."
      />
      <RevealGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {GALLERY.map((g) => (
          <motion.div
            key={g.title}
            variants={itemVariants}
            whileHover={reduce ? {} : { y: -8 }}
            className="group"
          >
            {g.photos ? (
              <GalleryCarousel photos={g.photos} alt={g.title} />
            ) : g.photo ? (
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-card">
                <img src={g.photo} alt={g.title} className="absolute inset-0 h-full w-full object-cover" />
              </div>
            ) : (
              <div className="relative aspect-[4/3] rounded-3xl border-2 border-dashed border-brand/25 bg-brand/5 grid place-items-center overflow-hidden transition-colors group-hover:border-brand/40 group-hover:bg-brand/10">
                <div className="flex flex-col items-center gap-3 text-center px-4">
                  <g.icon size={56} className="text-brand-400" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted">Photo coming soon</span>
                </div>
              </div>
            )}
            <h3 className="font-semibold mt-4 text-lg">{g.title}</h3>
            <p className="text-muted text-sm">{g.caption}</p>
          </motion.div>
        ))}
      </RevealGroup>
    </section>
  )
}
