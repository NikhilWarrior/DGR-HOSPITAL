import { useEffect, useRef } from 'react'

function beatOffset(px: number): number {
  if (px > 8 && px < 16) return -5
  if (px > 28 && px < 33) return 6
  if (px > 33 && px < 37) return -38
  if (px > 37 && px < 42) return 22
  if (px > 42 && px < 50) return -4
  if (px > 60 && px < 70) return -8
  return 0
}

export default function EcgCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const period = 90
    let raf = 0
    let shift = 0

    function resize() {
      const { width, height } = canvas!.getBoundingClientRect()
      canvas!.width = width * dpr
      canvas!.height = height * dpr
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()
    window.addEventListener('resize', resize)

    function render() {
      const { width, height } = canvas!.getBoundingClientRect()
      const midY = height / 2
      ctx!.clearRect(0, 0, width, height)
      ctx!.lineWidth = 1
      ctx!.strokeStyle = 'rgba(0, 230, 189, 0.95)'
      ctx!.shadowColor = 'rgba(0, 230, 189, 0.55)'
      ctx!.shadowBlur = 5
      ctx!.beginPath()
      for (let x = 0; x <= width; x++) {
        const px = (x + shift) % period
        const y = midY - beatOffset(px)
        if (x === 0) ctx!.moveTo(x, y)
        else ctx!.lineTo(x, y)
      }
      ctx!.stroke()
    }

    function loop() {
      shift += 1.4
      render()
      raf = requestAnimationFrame(loop)
    }

    if (reduce) {
      render()
    } else {
      loop()
    }

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(raf)
    }
  }, [])

  return <canvas ref={canvasRef} className="w-full h-16 md:h-20" aria-hidden="true" />
}
