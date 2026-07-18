import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { getPhoto } from '../data/gallery'

export function HeroSection() {
  const photo = getPhoto(1)
  const reducedMotion = useReducedMotion()
  const { scrollY } = useScroll()
  const imageY = useTransform(scrollY, [0, 800], [0, reducedMotion ? 0 : 70])

  if (!photo) return null

  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-ivory pt-20">
      <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-[1500px] items-stretch lg:grid-cols-[0.95fr_1.05fr]">
        <div className="relative z-10 flex items-center px-6 py-16 sm:px-10 lg:px-16 xl:px-24">
          <div className="max-w-2xl">
            <motion.p
              className="mb-6 text-xs uppercase tracking-[0.34em] text-champagne"
              initial={reducedMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
            >
              Pages of Her Life
            </motion.p>
            <motion.h1
              className="font-serif text-[clamp(4rem,10vw,9rem)] font-medium leading-[0.78] tracking-[-0.045em] text-charcoal"
              initial={reducedMotion ? false : { opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              Anuradha
            </motion.h1>
            <motion.p
              className="mt-7 font-serif text-2xl italic text-burgundy sm:text-3xl"
              initial={reducedMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              A Journey Through Life
            </motion.p>
            <motion.blockquote
              className="mt-10 max-w-xl border-l border-champagne pl-5 text-lg leading-8 text-charcoal/65 sm:text-xl"
              initial={reducedMotion ? false : { opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 1.05 }}
            >
              “A life is not made only of milestones. It is made of the little moments we never knew we would miss.”
            </motion.blockquote>
            <motion.a
              href="#story"
              className="mt-10 inline-flex items-center gap-3 rounded-full border border-charcoal/10 bg-white/60 px-5 py-3 text-sm font-medium text-charcoal transition hover:border-champagne hover:text-burgundy"
              initial={reducedMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.25 }}
            >
              Begin her story <ArrowDown size={16} />
            </motion.a>
          </div>
        </div>

        <div className="relative min-h-[60vh] overflow-hidden lg:min-h-0">
          <motion.img
            src={photo.src}
            alt={photo.alt}
            className="absolute inset-0 h-[110%] w-full object-cover"
            style={{ y: imageY, objectPosition: 'center 42%' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ivory via-ivory/5 to-transparent lg:from-ivory/30" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-charcoal/25 to-transparent" />
          <div className="absolute bottom-7 right-7 rounded-full border border-white/30 bg-black/20 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white backdrop-blur-md">
            A story still unfolding
          </div>
        </div>
      </div>
    </section>
  )
}
