import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SPECIALITIES } from '../data/content'

gsap.registerPlugin(ScrollTrigger)

export default function Specialities() {
  const sectionRef = useRef<HTMLElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Matches the Tailwind `lg:` breakpoint used below for the row/column layout switch,
    // so the pinned animation only ever runs when the CSS layout is actually horizontal.
    const mm = gsap.matchMedia()
    mm.add('(min-width: 1024px) and (prefers-reduced-motion: no-preference)', () => {
      const track = trackRef.current
      if (!track) return
      const amount = track.scrollWidth - window.innerWidth + 40
      gsap.to(track, {
        x: -amount,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: () => '+=' + amount,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      })
    })
    return () => mm.revert()
  }, [])

  return (
    <section id="specialities" ref={sectionRef} className="relative bg-surface/40 py-16 md:py-24 lg:py-0 lg:h-screen lg:flex lg:items-center overflow-hidden">
      <div className="container-x lg:absolute lg:top-16 lg:left-1/2 lg:-translate-x-1/2 z-10 mb-10 lg:mb-0">
        <span className="eyebrow">Our Departments</span>
        <h2 className="heading text-3xl md:text-5xl mt-3">Centres of care, end to end</h2>
      </div>

      <div ref={trackRef} className="flex flex-col lg:flex-row gap-6 lg:gap-8 px-[4%] lg:px-[6vw] lg:pt-32 w-full lg:w-max">
        {SPECIALITIES.map((s, i) => (
          <article
            key={s.name}
            className="relative shrink-0 lg:w-[clamp(320px,34vw,460px)] p-8 glass-card overflow-hidden group"
          >
            <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-brand/10 blur-2xl group-hover:bg-brand/20 transition-all" />
            <span className="font-display text-6xl text-white/10 absolute top-5 right-6">{String(i + 1).padStart(2, '0')}</span>
            <div className="w-14 h-14 rounded-2xl grid place-items-center bg-brand/15 text-brand-400 mb-6">
              <s.icon size={28} />
            </div>
            <h3 className="font-display text-2xl font-semibold mb-3">{s.name}</h3>
            <p className="text-muted mb-6">{s.desc}</p>
            <div className="flex items-baseline gap-2 border-t border-line pt-5">
              <span className="font-display text-3xl text-mint">{s.stat}</span>
              <span className="text-xs text-muted uppercase tracking-wider">{s.statLabel}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
