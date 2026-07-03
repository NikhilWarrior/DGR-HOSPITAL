import { useState, type ChangeEvent, type FormEvent } from 'react'
import { MapPin, Phone, Clock, Send } from 'lucide-react'
import { HOSPITAL, SPECIALITY_LIST } from '../data/content'
import { SectionHeading, Reveal, Magnetic } from './ui'

export default function Contact() {
  interface FormState { name: string; phone: string; dept: string; msg: string }
  const [form, setForm] = useState<FormState>({ name: '', phone: '', dept: 'General Medicine', msg: '' })
  const update = (k: keyof FormState) => (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => setForm({ ...form, [k]: e.target.value })

  function submit(e: FormEvent) {
    e.preventDefault()
    const text =
      `New appointment request:%0A%0AName: ${form.name}%0APhone: ${form.phone}%0ADepartment: ${form.dept}%0ANote: ${form.msg}`
    window.open(`${HOSPITAL.whatsapp}?text=${text}`, '_blank')
  }

  return (
    <section id="contact" className="container-x py-16 md:py-24">
      <SectionHeading eyebrow="Book an Appointment" title="We’re here, every day" sub="Send a request and our team will confirm your appointment over WhatsApp or a call." />
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Form */}
        <Reveal>
          <form onSubmit={submit} className="glass-panel p-7 md:p-9 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <label className="block">
                <span className="text-sm text-muted">Full name</span>
                <input required value={form.name} onChange={update('name')} type="text"
                  className="mt-1 w-full rounded-xl bg-white border border-line px-4 py-3 text-ink placeholder:text-muted/60 focus:border-brand outline-none"
                  placeholder="Your name" />
              </label>
              <label className="block">
                <span className="text-sm text-muted">Phone</span>
                <input required value={form.phone} onChange={update('phone')} type="tel"
                  className="mt-1 w-full rounded-xl bg-white border border-line px-4 py-3 text-ink placeholder:text-muted/60 focus:border-brand outline-none"
                  placeholder="+91 ..." />
              </label>
            </div>
            <label className="block">
              <span className="text-sm text-muted">Department</span>
              <select value={form.dept} onChange={update('dept')}
                className="mt-1 w-full rounded-xl bg-white border border-line px-4 py-3 text-ink focus:border-brand outline-none">
                {SPECIALITY_LIST.map((s) => <option key={s} className="bg-surface">{s}</option>)}
              </select>
            </label>
            <label className="block">
              <span className="text-sm text-muted">Note (optional)</span>
              <textarea value={form.msg} onChange={update('msg')} rows={3}
                className="mt-1 w-full rounded-xl bg-white border border-line px-4 py-3 text-ink placeholder:text-muted/60 focus:border-brand outline-none resize-none"
                placeholder="Preferred time, symptoms, etc." />
            </label>
            <button type="submit" className="btn btn-primary w-full"><Send size={16} /> Send request via WhatsApp</button>
          </form>
        </Reveal>

        {/* Details + map */}
        <Reveal delay={0.1}>
          <div className="glass-panel p-7 md:p-9 h-full flex flex-col gap-5">
            <div className="flex gap-3"><MapPin className="text-brand-400 shrink-0 mt-1" size={20} /><p className="text-muted">{HOSPITAL.address}</p></div>
            <div className="flex gap-3"><Phone className="text-brand-400 shrink-0 mt-1" size={20} /><a href={`tel:${HOSPITAL.phoneRaw}`} className="hover:text-brand-400"><b>{HOSPITAL.phone}</b>, Appointments &amp; Emergency</a></div>
            <div className="flex gap-3"><Clock className="text-brand-400 shrink-0 mt-1" size={20} /><p className="text-muted">{HOSPITAL.hours}</p></div>
            <div className="rounded-2xl overflow-hidden border border-line flex-1 min-h-[240px]">
              <iframe
                title="DGR Hospital location"
                className="w-full h-full min-h-[240px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://maps.google.com/maps?q=DGR%20Hospital%20Giddalur&t=&z=14&ie=UTF8&iwloc=&output=embed"
              />
            </div>
            <Magnetic href={HOSPITAL.maps} target="_blank" rel="noopener" className="btn btn-ghost justify-center">Open in Google Maps</Magnetic>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
