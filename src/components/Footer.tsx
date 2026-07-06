import { Facebook, Instagram, Phone, MapPin, type LucideIcon } from 'lucide-react'
import { HOSPITAL } from '../data/content'

function WhatsAppIcon({ size = 18, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884zm8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface/40 pt-16 pb-24 md:pb-12">
      <div className="container-x">
        <div className="grid md:grid-cols-[1.6fr_1fr_1fr] gap-10 pb-10 border-b border-line">
          <div>
            <img src="/DGR_LOGO.png" alt="DGR Multispeciality Hospital" className="h-12 w-auto rounded-lg bg-white px-3 py-1.5 inline-block" />
            <p className="text-muted mt-4 max-w-sm">Healing with heart and caring with kindness, advanced multispeciality care for Giddalur and the Prakasam region.</p>
            <div className="flex gap-3 mt-5">
              {([[Facebook, HOSPITAL.facebook], [Instagram, HOSPITAL.instagram], [WhatsAppIcon, HOSPITAL.whatsapp], [Phone, `tel:${HOSPITAL.phoneRaw}`]] as [LucideIcon, string][]).map(([Icon, href], i) => {
                const isExternal = href.startsWith('http')
                return (
                  <a key={i} href={href} {...(isExternal ? { target: '_blank', rel: 'noopener' } : {})} className="w-10 h-10 grid place-items-center rounded-lg bg-brand/10 text-brand-600 hover:bg-brand hover:text-white transition-all hover:-translate-y-0.5">
                    <Icon size={18} />
                  </a>
                )
              })}
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
      <a href={HOSPITAL.whatsapp} className="flex-1 py-3 text-center text-xs font-semibold text-brand-400 flex flex-col items-center gap-1 border-r border-line"><WhatsAppIcon size={18} />WhatsApp</a>
      <a href="#contact" className="flex-1 py-3 text-center text-xs font-semibold text-emergency flex flex-col items-center gap-1"><MapPin size={18} />Book</a>
    </div>
  )
}
