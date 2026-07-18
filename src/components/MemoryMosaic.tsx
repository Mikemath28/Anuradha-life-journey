import { motion } from 'framer-motion'
import { photos } from '../data/gallery'
import { Reveal } from './Reveal'

interface MemoryMosaicProps {
  onOpen: (id: number) => void
}

export function MemoryMosaic({ onOpen }: MemoryMosaicProps) {
  return (
    <section id="memories" className="relative overflow-hidden bg-charcoal py-24 text-ivory sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="chapter-label !text-champagne">All the little pieces</p>
          <h2 className="font-serif text-5xl leading-none sm:text-7xl">This was never just a collection of photographs.</h2>
          <p className="mt-6 font-serif text-2xl italic text-ivory/65 sm:text-3xl">It was a life happening.</p>
        </Reveal>
      </div>

      <div className="mosaic-grid mx-auto mt-16 max-w-[1500px] px-3 sm:px-5">
        {photos.map((photo, index) => (
          <motion.button
            key={photo.id}
            type="button"
            onClick={() => onOpen(photo.id)}
            className={`mosaic-tile mosaic-${(index % 7) + 1} group relative overflow-hidden rounded-lg`}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.65, delay: (index % 8) * 0.04 }}
            aria-label={`Open ${photo.title}`}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              style={{ objectPosition: photo.objectPosition ?? 'center' }}
            />
            <span className="absolute inset-0 bg-black/0 transition group-hover:bg-black/20" />
          </motion.button>
        ))}
      </div>
    </section>
  )
}
