import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'

export function IntroLoader() {
  const [visible, setVisible] = useState(true)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), reducedMotion ? 250 : 2300)
    return () => window.clearTimeout(timer)
  }, [reducedMotion])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[200] grid place-items-center bg-charcoal px-6 text-center text-ivory"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reducedMotion ? 0.1 : 0.8 }}
          onClick={() => setVisible(false)}
          role="status"
          aria-live="polite"
        >
          <div>
            <motion.p
              className="mb-5 text-xs uppercase tracking-[0.35em] text-champagne"
              initial={reducedMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              A story made of a thousand little moments
            </motion.p>
            <motion.h1
              className="font-serif text-6xl font-medium sm:text-8xl"
              initial={reducedMotion ? false : { opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.35 }}
            >
              Anuradha
            </motion.h1>
            <motion.p
              className="mt-4 font-serif text-xl italic text-ivory/65"
              initial={reducedMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              A Journey Through Life
            </motion.p>
            <button
              type="button"
              className="mt-10 text-xs uppercase tracking-[0.24em] text-ivory/45 transition hover:text-ivory"
              onClick={() => setVisible(false)}
            >
              Tap to enter
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
