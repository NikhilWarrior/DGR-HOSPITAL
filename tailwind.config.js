/** @type {import('tailwindcss').Config} */
// ───────────────────────────────────────────────────────────────
//  BRAND PALETTE — change the whole site's colours from here.
//  Default = DGR logo identity (teal / mint / charcoal) on a dark
//  futuristic theme. To use the blue palette from the original brief
//  instead, swap the hex values below:
//    brand 500 -> #0057B8 | brand 400 -> #00AEEF | accent -> #00D4FF
//    bg -> #030712 | surface -> #0F172A
// ───────────────────────────────────────────────────────────────
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // ----- PREMIUM LIGHT THEME (teal / mint accents on soft off-white) -----
        bg: '#EEF4F2',          // soft light background (teal-tinted off-white)
        surface: '#FFFFFF',     // white cards / panels
        surface2: '#F4F9F7',
        line: 'rgba(16,42,39,0.10)',
        brand: {
          DEFAULT: '#009B85',
          400: '#00B899',
          500: '#009B85',
          600: '#008573',
          700: '#006B5D',
        },
        mint: '#00C9A0',
        cyan: '#0E9CC0',
        yellow: '#E0A500',
        success: '#00A57A',
        emergency: '#E5484D',
        ink: '#12241F',         // dark text
        muted: '#5C726C',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Fraunces', 'Georgia', 'serif'],
      },
      boxShadow: {
        glow: '0 0 40px -8px rgba(0,155,133,0.35)',
        card: '0 24px 60px -30px rgba(16,42,39,0.35)',
      },
      keyframes: {
        floaty: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } },
        flow: { to: { backgroundPosition: '200% center' } },
        pulseRing: {
          '0%': { boxShadow: '0 0 0 0 rgba(255,77,77,0.5)' },
          '70%': { boxShadow: '0 0 0 22px rgba(255,77,77,0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(255,77,77,0)' },
        },
        marquee: { to: { transform: 'translateX(-50%)' } },
      },
      animation: {
        floaty: 'floaty 3s ease-in-out infinite',
        flow: 'flow 6s linear infinite',
        pulseRing: 'pulseRing 2s infinite',
        marquee: 'marquee 28s linear infinite',
      },
    },
  },
  plugins: [],
}
