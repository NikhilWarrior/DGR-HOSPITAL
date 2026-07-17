import {
  Stethoscope, Bone, Baby, HeartPulse, Scan, ScanLine, Activity, Waves,
  Microscope, Ambulance, Pill, Cross, Syringe, Users, BadgeIndianRupee, Award, Shield,
  BedDouble, FlaskConical, Wind, Scissors,
  type LucideIcon,
} from 'lucide-react'

export interface Stat { value: number; suffix: string; label: string; raw?: string }
export interface Feature { icon: LucideIcon; title: string; text: string }
export interface Speciality { icon: LucideIcon; name: string; desc: string; stat: string; statLabel: string }
export interface Facility { icon: LucideIcon; name: string; meta: string }
export interface ProcessStep { step: string; title: string; text: string }
export interface Testimonial { name: string; place: string; text: string }
export interface Doctor { name: string; specialty: string; qualification: string; note?: string }
export interface GalleryItem { icon: LucideIcon; title: string; caption: string; photo?: string; photos?: string[] }


export const HOSPITAL = {
  name: 'DGR Multispeciality Hospital',
  shortName: 'DGR Hospitals',
  location: 'Giddalur',
  tagline: 'Healing with heart. Caring with kindness.',
  phone: '+91 91778 20261',
  phoneRaw: '+919177820261',
  whatsapp: 'https://wa.me/919177820261',
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
  { name: 'Dr. D. Harinath Reddy', specialty: 'General Medicine', qualification: 'MD General Medicine, Physician & Diabetologist', note: "Giddalur's first physician, 12+ years experience" },
  { name: 'Dr. K. N. Sandeep', specialty: 'Orthopedics', qualification: 'MS Orthopedics', note: "Giddalur's first orthopaedician" },
  { name: 'Dr. B. V. Kiran Kumar', specialty: 'General & Laparoscopic Surgery', qualification: 'MS General and Laparoscopic Surgery' },
  { name: 'Dr. Batthula Gnana Prasanna', specialty: 'Obstetrics & Gynaecology', qualification: 'MBBS, MS OBG (Gynaecologist)', note: '1500+ procedures' },
]
export const STATS: Stat[] = [
  { value: 60, suffix: '+', label: 'Inpatient Beds' },
  { value: 20, suffix: '+', label: 'ICU Beds' },
  { value: 24, suffix: '×7', label: 'Emergency & Critical Care', raw: '24×7' },
  { value: 100, suffix: '%', label: 'NTR Vaidyaseva & Cashless' },
]

export const WHY: Feature[] = [
  { icon: Award, title: "Giddalur's First Multispeciality Hospital", text: "12+ years of experience, led by Giddalur's first physician and first orthopaedician." },
  { icon: HeartPulse, title: '24×7 Emergency', text: 'Round the clock casualty, ambulance dispatch and critical care response, every single day.' },
  { icon: Stethoscope, title: 'Expert Specialists', text: 'Experienced doctors across medicine, surgery, orthopaedics, gynaecology and paediatrics.' },
  { icon: Microscope, title: 'Advanced Diagnostics', text: '2D Echo, USG, high speed CT, digital X ray, ECG and a full diagnostic laboratory under one roof.' },
  { icon: HeartPulse, title: 'ICU & Critical Care', text: 'Monitored intensive care beds for trauma, serious illness and post surgery recovery.' },
  { icon: BadgeIndianRupee, title: 'NTR Vaidyaseva & ECHS Support', text: 'Empanelled for NTR Vaidyaseva and ECHS for ex-servicemen, with cashless insurance and on site documentation help.' },
  { icon: Users, title: 'Patient Centered Care', text: 'Healing with heart and caring with kindness, treating every patient like family.' },
]

export const SPECIALITIES: Speciality[] = [
  { icon: Stethoscope, name: 'General Medicine', desc: 'Fever, infections, diabetes, blood pressure and everyday illness, with accurate diagnosis and treatment.', stat: '15k+', statLabel: 'Consults / year' },
  { icon: Bone, name: 'Orthopedics', desc: 'Fracture care, bone and joint treatment, trauma management and rehabilitation.', stat: '1.2k+', statLabel: 'Procedures' },
  { icon: Syringe, name: 'General & Laparoscopic Surgery', desc: 'Planned and emergency surgery, including minimally invasive laparoscopic procedures.', stat: '900+', statLabel: 'Surgeries' },
  { icon: Baby, name: 'Obstetrics & Gynaecology', desc: 'Pregnancy care, safe delivery and gynaecological treatment from an experienced OBG specialist.', stat: '1.5k+', statLabel: 'Procedures' },
  { icon: HeartPulse, name: 'Critical Care', desc: 'ICU, casualty and ambulance support available round the clock with continuous monitoring.', stat: '20+', statLabel: 'ICU beds' },
  { icon: Scan, name: 'Diagnostics', desc: 'High speed CT scan, 2D Echo, USG, digital X ray, ECG and laboratory for fast, accurate results on site.', stat: '1st', statLabel: 'High speed CT in Giddalur' },
]

export const FACILITIES: Facility[] = [
  { icon: HeartPulse, name: 'ICU & Critical Care', meta: 'Monitored, 24×7' },
  { icon: Scan, name: 'High Speed CT Scan', meta: 'First in Giddalur' },
  { icon: Waves, name: '2D Echo', meta: 'Cardiac imaging' },
  { icon: ScanLine, name: 'USG (Ultrasound)', meta: 'On site imaging' },
  { icon: Activity, name: 'Digital X Ray & ECG', meta: 'Instant reports' },
  { icon: Microscope, name: 'Diagnostic Laboratory', meta: 'On site testing' },
  { icon: Pill, name: 'Pharmacy', meta: '24×7 in house' },
  { icon: Ambulance, name: 'Ambulance Service', meta: 'Rapid dispatch' },
  { icon: BadgeIndianRupee, name: 'NTR Vaidyaseva Desk', meta: 'Cashless help' },
  { icon: Shield, name: 'ECHS Empanelled', meta: 'For ex-servicemen' },
  { icon: Cross, name: 'Emergency Ward', meta: 'Always open' },
]

export const NTR_VAIDYASEVA_STEPS: ProcessStep[] = [
  { step: '01', title: 'Check Eligibility', text: 'Bring your NTR Vaidyaseva or insurance card and our desk verifies coverage in minutes.' },
  { step: '02', title: 'Cashless Approval', text: 'We handle prior authorisation with the scheme so you can focus on treatment.' },
  { step: '03', title: 'Treatment', text: 'Receive care from our specialists with no upfront payment for covered procedures.' },
  { step: '04', title: 'Documentation Help', text: 'Our support team completes the paperwork and discharge formalities for you.' },
]

export const SPECIALITY_LIST: string[] = [
  'General Medicine', 'Orthopedics', 'Obstetrics & Gynecology', 'Pediatrics',
  'Emergency Medicine', 'Critical Care', 'ICU Services', 'CT Scan', '2D Echo', 'USG',
  'X Ray', 'ECG', 'Diagnostic Laboratory', 'Pharmacy', 'Diabetes Care', 'Thyroid Care',
  'Stroke Management', 'NTR Vaidyaseva', 'ECHS', 'Ambulance',
]

export const TESTIMONIALS: Testimonial[] = [
  { name: 'Ramesh K.', place: 'Giddalur', text: 'They had a CT scanner right here in town. Quick diagnosis and the doctors explained everything calmly.' },
  { name: 'Lakshmi D.', place: 'Cumbum', text: 'My delivery was safe and the staff were so caring. The NTR Vaidyaseva desk handled all the paperwork.' },
  { name: 'Suresh B.', place: 'Markapur', text: 'Came in at night with a fracture and the emergency team was ready. The ICU support was excellent.' },
]

export const EXPERT_SERVICES: string[] = [
  'Diabetes', 'Blood Pressure', 'Thyroid Disorders', 'Acute Stroke Management',
  'Jaundice', 'Poisoning', 'Asthma', 'Pneumonia', 'Kidney Stones',
  'Dengue Fever', 'Malaria', 'Viral Fevers', 'Hernia', 'Hydrocele',
  'Fistula', 'Fractures', 'Accidents', 'Trauma', 'Varicose Veins',
  'Snake Bites', 'Scorpion Stings', 'Sciatica', 'Disc Problems',
]

export const GALLERY: GalleryItem[] = [
  { icon: BedDouble, title: 'ICU', caption: 'Intensive Care Unit', photo: '/gallery/icu-1.jpg' },
  { icon: FlaskConical, title: 'Lab Equipments', caption: 'Diagnostic Laboratory', photos: [
    '/gallery/lab-1.jpg', '/gallery/lab-2.jpg', '/gallery/lab-3.jpg', '/gallery/lab-4.jpg', '/gallery/lab-5.jpg',
    '/gallery/lab-6.jpg', '/gallery/lab-7.jpg', '/gallery/lab-8.jpg', '/gallery/lab-9.jpg',
  ] },
  { icon: ScanLine, title: 'CT & X-Ray', caption: 'Imaging Suite', photo: '/gallery/ct-xray-1.jpg' },
  { icon: Waves, title: 'Ultrasound', caption: 'USG Imaging', photo: '/gallery/ultrasound-1.jpg' },
  { icon: Wind, title: 'Ventilators', caption: 'Critical Care Support', photos: ['/gallery/ventilator-1.jpg', '/gallery/ventilator-2.jpg'] },
  { icon: Scissors, title: 'Operation Theatre', caption: 'Surgical Suite', photos: ['/gallery/ot-1.jpg', '/gallery/ot-2.jpg', '/gallery/ot-3.jpg', '/gallery/ot-4.jpg', '/gallery/ot-5.jpg'] },
]