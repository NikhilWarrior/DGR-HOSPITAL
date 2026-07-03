import {
  Stethoscope, Bone, Baby, HeartPulse, Scan, Activity,
  Microscope, Ambulance, Pill, Cross, Syringe, Users, BadgeIndianRupee,
  type LucideIcon,
} from 'lucide-react'

export interface Stat { value: number; suffix: string; label: string; raw?: string }
export interface Feature { icon: LucideIcon; title: string; text: string }
export interface Speciality { icon: LucideIcon; name: string; desc: string; stat: string; statLabel: string }
export interface Facility { icon: LucideIcon; name: string; meta: string }
export interface ProcessStep { step: string; title: string; text: string }
export interface Testimonial { name: string; place: string; text: string }
export interface Doctor { name: string; specialty: string; qualification: string; note?: string }


export const HOSPITAL = {
  name: 'DGR Multispeciality Hospital',
  shortName: 'DGR Hospitals',
  location: 'Giddalur',
  tagline: 'Healing with heart. Caring with kindness.',
  phone: '+91 91006 33355',
  phoneRaw: '+919100633355',
  whatsapp: 'https://wa.me/919100633355',
  maps: 'https://www.google.com/maps/search/DGR+Hospital+Giddalur',
  facebook: 'https://www.facebook.com/p/DGR-Hospitals-Giddalur-100063701934166/',
  instagram: 'https://www.instagram.com/dgr.hospitals/',
  address: '8/7/21/21/A, Kasi Reddy Kunta, Narva Road, Ganesh Nagar, Ongole Kurnool Main Road, Giddalur, Prakasam District, Andhra Pradesh, 523357',
  hours: 'Open all 7 days. OPD 9:00 AM to 11:00 PM. Emergency 24×7',
  director: 'Dr. D. Harinath Reddy, MD',
}

/* Our team of doctors.
   NOTE: replace the [Name] placeholders with the real doctor names,
   qualifications and specialties from the hospital. */
export const DOCTORS: Doctor[] = [
  { name: 'Dr. D. Harinath Reddy', specialty: 'General Medicine', qualification: 'MD General Medicine, Physician & Diabetologist' },
  { name: 'Dr. K. N. Sandeep', specialty: 'Orthopedics', qualification: 'MS Orthopedics' },
  { name: 'Dr. B. V. Kiran Kumar', specialty: 'General & Laparoscopic Surgery', qualification: 'MS General and Laparoscopic Surgery' },
]
export const STATS: Stat[] = [
  { value: 60, suffix: '+', label: 'Inpatient Beds' },
  { value: 20, suffix: '+', label: 'ICU Beds' },
  { value: 24, suffix: '×7', label: 'Emergency & Critical Care', raw: '24×7' },
  { value: 100, suffix: '%', label: 'Aarogyasri & Cashless' },
]

export const WHY: Feature[] = [
  { icon: HeartPulse, title: '24×7 Emergency', text: 'Round the clock casualty, ambulance dispatch and critical care response, every single day.' },
  { icon: Stethoscope, title: 'Expert Specialists', text: 'Experienced doctors across medicine, surgery, orthopaedics, gynaecology and paediatrics.' },
  { icon: Microscope, title: 'Advanced Diagnostics', text: 'High speed CT, digital X ray, ECG and a full diagnostic laboratory under one roof.' },
  { icon: HeartPulse, title: 'ICU & Critical Care', text: 'Monitored intensive care beds for trauma, serious illness and post surgery recovery.' },
  { icon: BadgeIndianRupee, title: 'Aarogyasri Support', text: 'Empanelled for Aarogyasri with cashless insurance and on site documentation help.' },
  { icon: Users, title: 'Patient Centered Care', text: 'Healing with heart and caring with kindness, treating every patient like family.' },
]

export const SPECIALITIES: Speciality[] = [
  { icon: Stethoscope, name: 'General Medicine', desc: 'Fever, infections, diabetes, blood pressure and everyday illness, with accurate diagnosis and treatment.', stat: '15k+', statLabel: 'Consults / year' },
  { icon: Bone, name: 'Orthopedics', desc: 'Fracture care, bone and joint treatment, trauma management and rehabilitation.', stat: '1.2k+', statLabel: 'Procedures' },
  { icon: Syringe, name: 'General & Laparoscopic Surgery', desc: 'Planned and emergency surgery, including minimally invasive laparoscopic procedures.', stat: '900+', statLabel: 'Surgeries' },
  { icon: HeartPulse, name: 'Critical Care', desc: 'ICU, casualty and ambulance support available round the clock with continuous monitoring.', stat: '20+', statLabel: 'ICU beds' },
  { icon: Scan, name: 'Diagnostics', desc: 'High speed CT scan, digital X ray, ECG and laboratory for fast, accurate results on site.', stat: '1st', statLabel: 'High speed CT in Giddalur' },
]

export const FACILITIES: Facility[] = [
  { icon: HeartPulse, name: 'ICU & Critical Care', meta: 'Monitored, 24×7' },
  { icon: Scan, name: 'High Speed CT Scan', meta: 'First in Giddalur' },
  { icon: Activity, name: 'Digital X Ray & ECG', meta: 'Instant reports' },
  { icon: Microscope, name: 'Diagnostic Laboratory', meta: 'On site testing' },
  { icon: Pill, name: 'Pharmacy', meta: '24×7 in house' },
  { icon: Ambulance, name: 'Ambulance Service', meta: 'Rapid dispatch' },
  { icon: BadgeIndianRupee, name: 'Aarogyasri Desk', meta: 'Cashless help' },
  { icon: Cross, name: 'Emergency Ward', meta: 'Always open' },
]

export const AAROGYASRI_STEPS: ProcessStep[] = [
  { step: '01', title: 'Check Eligibility', text: 'Bring your Aarogyasri or insurance card and our desk verifies coverage in minutes.' },
  { step: '02', title: 'Cashless Approval', text: 'We handle prior authorisation with the scheme so you can focus on treatment.' },
  { step: '03', title: 'Treatment', text: 'Receive care from our specialists with no upfront payment for covered procedures.' },
  { step: '04', title: 'Documentation Help', text: 'Our support team completes the paperwork and discharge formalities for you.' },
]

export const SPECIALITY_LIST: string[] = [
  'General Medicine', 'Orthopedics', 'Obstetrics & Gynecology', 'Pediatrics',
  'Emergency Medicine', 'Critical Care', 'ICU Services', 'CT Scan', 'X Ray',
  'ECG', 'Diagnostic Laboratory', 'Pharmacy', 'Aarogyasri', 'Ambulance',
]

export const TESTIMONIALS: Testimonial[] = [
  { name: 'Ramesh K.', place: 'Giddalur', text: 'They had a CT scanner right here in town. Quick diagnosis and the doctors explained everything calmly.' },
  { name: 'Lakshmi D.', place: 'Cumbum', text: 'My delivery was safe and the staff were so caring. The Aarogyasri desk handled all the paperwork.' },
  { name: 'Suresh B.', place: 'Markapur', text: 'Came in at night with a fracture and the emergency team was ready. The ICU support was excellent.' },
]

export const EXPERT_SERVICES: string[] = [
  'Jaundice', 'Poisoning', 'Asthma', 'Pneumonia', 'Kidney Stones',
  'Dengue Fever', 'Malaria', 'Viral Fevers', 'Hernia', 'Hydrocele',
  'Fistula', 'Fractures', 'Accidents', 'Trauma', 'Varicose Veins',
  'Snake Bites', 'Scorpion Stings', 'Sciatica', 'Disc Problems',
]