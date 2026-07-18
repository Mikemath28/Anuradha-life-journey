import { motion } from 'framer-motion'
import { useMemo, useState } from 'react'
import { categories, photos } from '../data/gallery'
import type { PhotoCategory } from '../types/content'
import { Reveal } from './Reveal'

interface GalleryProps {
  onOpen: (id: number) => void
}

type GalleryFilter = 'All' | PhotoCategory

export function Gallery({ onOpen }: GalleryProps) {
  const [filter, setFilter] = useState<GalleryFilter>('All')
  const filtered = useMemo(
    () => (filter === 'All' ? photos : photos.filter((photo) => photo.category === filter)),
    [filter],
  )

  return (
    <section id="gallery" className="bg-cream px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <Reveal className="max-w-3xl">
          <p className="chapter-label">The Complete Collection</p>
          <h2 className="section-title">A Life in Frames</h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-charcoal/65 sm:text-lg">
            Every unique photograph shared for this story lives here. Some are posed. Some are candid. Some are loud. Some are quiet. Together, they become a visual memory book.
          </p>
        </Reveal>

        <div className="mt-10 flex flex-wrap gap-2" role="group" aria-label="Filter gallery">
          {categories.map((category) => {
            const active = filter === category
            return (
              <button
                key={category}
                type="button"
                onClick={() => setFilter(category)}
                className={`rounded-full border px-4 py-2 text-sm transition ${
                  active
                    ? 'border-burgundy bg-burgundy text-white'
                    : 'border-charcoal/10 bg-ivory text-charcoal/70 hover:border-champagne hover:text-burgundy'
                }`}
              >
                {category}
              </button>
            )
          })}
        </div>

        <motion.div layout className="gallery-columns mt-10">
          {filtered.map((photo) => (
            <motion.button
              layout
              key={photo.id}
              type="button"
              onClick={() => onOpen(photo.id)}
              className="gallery-card group mb-5 w-full overflow-hidden rounded-2xl bg-ivory text-left shadow-photo"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.35 }}
              aria-label={`Open ${photo.title}`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="h-auto w-full transition duration-700 group-hover:scale-[1.035]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
              </div>
              <div className="p-5">
                <p className="text-xs uppercase tracking-[0.18em] text-champagne">{photo.category}</p>
                <h3 className="mt-2 font-serif text-2xl text-charcoal">{photo.title}</h3>
                <p className="mt-2 text-sm leading-6 text-charcoal/60">{photo.caption}</p>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
