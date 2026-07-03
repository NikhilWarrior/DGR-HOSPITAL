import { useEffect, useRef } from 'react'

export default function EcgCanvas() {
  const ref = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    const cv = ref.current
    if (!cv) return
    const ctx = cv.getContext('2d')
    if (!ctx) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const DPR = Math.min(window.devicePixelRatio || 1, 2)
    let W = 0, H = 0, off = 0, raf = 0
    function size() {
      const r = cv!.getBoundingClientRect()
      W = r.width; H = r.height
      cv!.width = W * DPR; cv!.height = H * DPR
      ctx!.setTransform(DPR, 0, 0, DPR, 0, 0)
    }
    size()
    window.addEventListener('resize', size)
    const g = (x: number, c0: number, w: number) => Math.exp(-Math.pow((x - c0) / w, 2))
    const beat = (t: number) => (
      -0.08 * g(t, 0.18, 0.03) + 0.10 * g(t, 0.30, 0.02) - 0.30 * g(t, 0.40, 0.012)
      + 1.0 * g(t, 0.44, 0.012) - 0.45 * g(t, 0.49, 0.014) + 0.22 * g(t, 0.66, 0.04)
    )
    function frame() {
      ctx!.clearRect(0, 0, W, H)
      ctx!.lineWidth = 2.4
      ctx!.strokeStyle = '#00E6BD'
      ctx!.shadowColor = 'rgba(0,230,189,0.8)'
      ctx!.shadowBlur = 8
      ctx!.beginPath()
      const mid = H * 0.56, amp = H * 0.42, cycle = W * 0.5
      for (let px = 0; px <= W; px++) {
        const t = ((px + off) % cycle) / cycle
        const y = mid - beat(t) * amp
        px === 0 ? ctx!.moveTo(px, y) : ctx!.lineTo(px, y)
      }
      ctx!.stroke()
      const lt = ((W + off) % cycle) / cycle
      ctx!.shadowBlur = 12; ctx!.fillStyle = '#C9FFF2'
      ctx!.beginPath(); ctx!.arc(W - 1, mid - beat(lt) * amp, 3.2, 0, 6.28); ctx!.fill()
      ctx!.shadowBlur = 0
      if (!reduce) { off += 1.6; raf = requestAnimationFrame(frame) }
    }
    frame()
    return () => { window.removeEventListener('resize', size); cancelAnimationFrame(raf) }
  }, [])
  return <canvas ref={ref} className="block w-full h-[92px] relative my-4" />
}
