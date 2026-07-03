import {
  useRef, useEffect, useState,
  type ReactNode, type MouseEvent as ReactMouseEvent,
} from 'react'
import { motion, useInView, useReducedMotion, type Variants } from 'framer-motion'

/* Scroll reveal wrapper */
interface RevealProps { children: ReactNode; delay?: number; y?: number; className?: string }
export function Reveal({ children, delay = 0, y = 28, className = '' }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-12% 0px' })
  const reduce = useReducedMotion()
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.2, 0.7, 0.2, 1] }}
    >
      {children}
    </motion.div>
  )
}

/* Staggered group */
interface RevealGroupProps { children: ReactNode; className?: string; stagger?: number }
export function RevealGroup({ children, className = '', stagger = 0.08 }: RevealGroupProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })
  const reduce = useReducedMotion()
  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
      variants={{ show: { transition: { staggerChildren: reduce ? 0 : stagger } } }}
    >
      {children}
    </motion.div>
  )
}
export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.2, 0.7, 0.2, 1] } },
}

/* Section heading */
interface SectionHeadingProps { eyebrow?: string; title: string; sub?: string; center?: boolean }
export function SectionHeading({ eyebrow, title, sub, center }: SectionHeadingProps) {
  return (
    <Reveal className={`max-w-2xl mb-12 ${center ? 'mx-auto text-center' : ''}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="heading text-3xl md:text-5xl mt-3 mb-3">{title}</h2>
      {sub && <p className="text-muted text-lg">{sub}</p>}
    </Reveal>
  )
}

/* Magnetic button/link */
interface MagneticProps {
  as?: 'a' | 'button'
  className?: string
  children: ReactNode
  [key: string]: unknown
}
export function Magnetic({ as = 'a', className = '', children, ...props }: MagneticProps) {
  const ref = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()
  const Comp: any = as === 'button' ? motion.button : motion.a
  function onMove(e: ReactMouseEvent) {
    if (reduce || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    const mx = e.clientX - r.left - r.width / 2
    const my = e.clientY - r.top - r.height / 2
    ref.current.style.transform = `translate(${mx * 0.25}px, ${my * 0.4}px)`
  }
  function reset() { if (ref.current) ref.current.style.transform = '' }
  return (
    <Comp ref={ref} className={className} onMouseMove={onMove} onMouseLeave={reset} {...props}>
      {children}
    </Comp>
  )
}

/* Count-up number */
interface CountUpProps { to: number; suffix?: string; raw?: string }
export function CountUp({ to, suffix = '', raw }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const reduce = useReducedMotion()
  const [n, setN] = useState(0)
  useEffect(() => {
    if (!inView || raw) return
    if (reduce) { setN(to); return }
    let af = 0
    const dur = 1400
    const start = performance.now()
    const tick = (now: number) => {
      const p = Math.min((now - start) / dur, 1)
      setN(Math.round((1 - Math.pow(1 - p, 3)) * to))
      if (p < 1) af = requestAnimationFrame(tick)
    }
    af = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(af)
  }, [inView, to, reduce, raw])
  return <span ref={ref}>{raw ? raw : n}{!raw && suffix}</span>
}
