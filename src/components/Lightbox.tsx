import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { useEffect, useRef } from 'react'
import type { Photo } from '../types/content'

interface LightboxProps {
  photos: Photo[]
  activeId: number | null
  onClose: () => void
  onChange: (id: number) => void
}

export function Lightbox({ photos, activeId, onClose, onChange }: LightboxProps) {
  const touchStart = useRef<number | null>(null)
  const activeIndex = photos.findIndex((photo) => photo.id === activeId)
  const photo = activeIndex >= 0 ? photos[activeIndex] : null

  const go = (direction: 1 | -1) => {
    if (!photo) return
    const nextIndex = (activeIndex + direction + photos.length) % photos.length
    onChange(photos[nextIndex].id)
  }

  useEffect(() => {
    if (!photo) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowRight') go(1)
      if (event.key === 'ArrowLeft') go(-1)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeId])

  return (
    <AnimatePresence>
      {photo && (
        <motion.div
          className="fixed inset-0 z-[150] flex flex-col bg-charcoal/98 p-4 text-ivory sm:p-7"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-label={`Viewing ${photo.title}`}
          onTouchStart={(event) => {
            touchStart.current = event.touches[0]?.clientX ?? null
          }}
          onTouchEnd={(event) => {
            if (touchStart.current === null) return
            const delta = event.changedTouches[0].clientX - touchStart.current
            if (Math.abs(delta) > 55) go(delta < 0 ? 1 : -1)
            touchStart.current = null
          }}
        >
          <div className="flex items-center justify-between">
            <p className="text-xs uppercase tracking-[0.22em] text-ivory/50">
              {activeIndex + 1} / {photos.length}
            </p>
            <button
              type="button"
              onClick={onClose}
              className="grid size-11 place-items-center rounded-full border border-white/15 bg-white/5 transition hover:bg-white/10"
              aria-label="Close gallery"
            >
              <X size={20} />
            </button>
          </div>

          <div className="relative flex min-h-0 flex-1 items-center justify-center py-4 sm:py-6">
            <button
              type="button"
              onClick={() => go(-1)}
              className="absolute left-0 z-10 hidden size-12 place-items-center rounded-full border border-white/15 bg-black/25 transition hover:bg-black/50 sm:grid"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>
            <motion.img
              key={photo.id}
              src={photo.src}
              alt={photo.alt}
              className="max-h-full max-w-full rounded-2xl object-contain shadow-2xl"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35 }}
            />
            <button
              type="button"
              onClick={() => go(1)}
              className="absolute right-0 z-10 hidden size-12 place-items-center rounded-full border border-white/15 bg-black/25 transition hover:bg-black/50 sm:grid"
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="mx-auto w-full max-w-3xl pb-2 text-center">
            <h2 className="font-serif text-2xl sm:text-3xl">{photo.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-ivory/60 sm:text-base">{photo.caption}</p>
            {photo.stylised && (
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-champagne">Stylised memory artwork</p>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
