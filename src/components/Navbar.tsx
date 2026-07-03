import { useEffect, useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { HOSPITAL } from '../data/content'
import { Magnetic } from './ui'

const LINKS = [
  ['Specialities', '#specialities'],
  ['Facilities', '#facilities'],
  ['Aarogyasri', '#aarogyasri'],
  ['Emergency', '#emergency'],
  ['Contact', '#contact'],
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'bg-bg/85 backdrop-blur-xl border-b border-line' : 'bg-transparent'}`}>
      <nav className="container-x flex items-center justify-between py-3" aria-label="Primary">
        <a href="#top" className="flex items-center gap-2">
          <img src="/DGR_LOGO.png" alt="DGR Multispeciality Hospital" className="h-11 w-auto rounded-md bg-white/95 px-2 py-1" />
        </a>

        <div className="hidden md:flex items-center gap-7">
          {LINKS.map(([label, href]) => (
            <a key={href} href={href} className="text-sm font-medium text-ink/85 hover:text-brand-400 transition-colors relative group">
              {label}
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-cyan transition-all group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Magnetic href={`tel:${HOSPITAL.phoneRaw}`} className="btn btn-primary hidden sm:inline-flex">
            <Phone size={16} /> Book Appointment
          </Magnetic>
          <button className="md:hidden p-2 text-ink" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden bg-bg/95 backdrop-blur-xl border-b border-line px-[4%] py-4 flex flex-col gap-4">
          {LINKS.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)} className="text-ink/90 text-base">{label}</a>
          ))}
          <a href={`tel:${HOSPITAL.phoneRaw}`} className="btn btn-primary justify-center"><Phone size={16} /> Book Appointment</a>
        </div>
      )}
    </header>
  )
}
