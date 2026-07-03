import { Facebook, Instagram, Phone, MapPin, type LucideIcon } from 'lucide-react'
import { HOSPITAL } from '../data/content'

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface/40 pt-16 pb-24 md:pb-12">
      <div className="container-x">
        <div className="grid md:grid-cols-[1.6fr_1fr_1fr] gap-10 pb-10 border-b border-line">
          <div>
            <img src="/DGR_LOGO.png" alt="DGR Multispeciality Hospital" className="h-12 w-auto rounded-lg bg-white px-3 py-1.5 inline-block" />
            <p className="text-muted mt-4 max-w-sm">Healing with heart and caring with kindness, advanced multispeciality care for Giddalur and the Prakasam region.</p>
            <div className="flex gap-3 mt-5">
              {([[Facebook, HOSPITAL.facebook], [Instagram, HOSPITAL.instagram], [Phone, `tel:${HOSPITAL.phoneRaw}`]] as [LucideIcon, string][]).map(([Icon, href], i) => (
                <a key={i} href={href} target="_blank" rel="noopener" className="w-10 h-10 grid place-items-center rounded-lg bg-brand/10 text-brand-600 hover:bg-brand hover:text-white transition-all hover:-translate-y-0.5">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-ink mb-4">Hospital</h4>
            <ul className="space-y-2 text-muted text-sm">
              <li><a href="#specialities" className="hover:text-brand-400">Specialities</a></li>
              <li><a href="#facilities" className="hover:text-brand-400">Facilities</a></li>
              <li><a href="#aarogyasri" className="hover:text-brand-400">Aarogyasri</a></li>
              <li><a href="#emergency" className="hover:text-brand-400">Emergency</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-ink mb-4">Contact</h4>
            <ul className="space-y-3 text-muted text-sm">
              <li className="flex gap-2"><Phone size={16} className="shrink-0 mt-0.5 text-brand-400" /><a href={`tel:${HOSPITAL.phoneRaw}`} className="hover:text-brand-400">{HOSPITAL.phone}</a></li>
              <li className="flex gap-2"><MapPin size={16} className="shrink-0 mt-0.5 text-brand-400" />Ganesh Nagar, Ongole Kurnool Main Road, Giddalur 523357</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-3 pt-6 text-xs text-muted">
          <span>© {new Date().getFullYear()} {HOSPITAL.name}, Giddalur. All Rights Reserved.</span>
          <span>Director: {HOSPITAL.director}</span>
        </div>
      </div>
    </footer>
  )
}

export function MobileBar() {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-[60] bg-surface border-t border-line flex">
      <a href={`tel:${HOSPITAL.phoneRaw}`} className="flex-1 py-3 text-center text-xs font-semibold text-brand-400 flex flex-col items-center gap-1 border-r border-line"><Phone size={18} />Call</a>
      <a href={HOSPITAL.whatsapp} className="flex-1 py-3 text-center text-xs font-semibold text-brand-400 flex flex-col items-center gap-1 border-r border-line">WhatsApp</a>
      <a href="#contact" className="flex-1 py-3 text-center text-xs font-semibold text-emergency flex flex-col items-center gap-1"><MapPin size={18} />Book</a>
    </div>
  )
}
