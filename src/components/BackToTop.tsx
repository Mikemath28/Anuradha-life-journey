import { ArrowUp } from 'lucide-react'
import { useEffect, useState } from 'react'

export function BackToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 900)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!show) return null

  return (
    <a
      href="#top"
      className="fixed bottom-5 right-5 z-40 grid size-12 place-items-center rounded-full border border-champagne/30 bg-ivory/90 text-burgundy shadow-lg backdrop-blur transition hover:-translate-y-1"
      aria-label="Back to top"
    >
      <ArrowUp size={18} />
    </a>
  )
}
