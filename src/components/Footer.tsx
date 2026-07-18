import { Sparkles } from 'lucide-react'
import { useState } from 'react'

export function Footer() {
  const [showSecret, setShowSecret] = useState(false)

  return (
    <footer className="border-t border-champagne/20 bg-ivory px-5 py-12 text-charcoal sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-7 text-center md:flex-row md:text-left">
        <div>
          <p className="font-serif text-3xl">Anuradha</p>
          <p className="mt-1 text-sm text-charcoal/55">A Journey Through Life · Made with memories.</p>
        </div>
        <button
          type="button"
          onClick={() => setShowSecret((value) => !value)}
          className="inline-flex items-center gap-2 rounded-full border border-champagne/30 px-4 py-2 text-xs uppercase tracking-[0.18em] text-burgundy transition hover:bg-cream"
          aria-expanded={showSecret}
        >
          <Sparkles size={14} /> A little secret
        </button>
      </div>
      {showSecret && (
        <div className="mx-auto mt-8 max-w-2xl rounded-2xl bg-cream p-6 text-center font-serif text-xl italic leading-8 text-charcoal/75">
          Behind every photograph is a story. Behind this website is a reminder of how many beautiful stories are still waiting to be lived.
        </div>
      )}
      <p className="mx-auto mt-8 max-w-7xl text-center text-xs text-charcoal/35 md:text-left">© {new Date().getFullYear()} · Personal memory website</p>
    </footer>
  )
}
