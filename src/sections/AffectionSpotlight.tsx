import { getPhoto } from '../data/gallery'
import { Reveal } from '../components/Reveal'

interface AffectionSpotlightProps {
  onOpen: (id: number) => void
}

export function AffectionSpotlight({ onOpen }: AffectionSpotlightProps) {
  const photo = getPhoto(25)
  if (!photo) return null

  return (
    <section className="relative min-h-[78vh] overflow-hidden bg-charcoal">
      <button type="button" onClick={() => onOpen(photo.id)} className="absolute inset-0 w-full" aria-label={`Open ${photo.title}`}>
        <img src={photo.src} alt={photo.alt} loading="lazy" className="h-full w-full object-cover" />
        <span className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/35 to-black/10" />
      </button>
      <div className="relative z-10 mx-auto flex min-h-[78vh] max-w-7xl items-end px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <Reveal className="max-w-xl text-white">
          <p className="chapter-label !text-champagne">A moment that explains itself</p>
          <h2 className="font-serif text-5xl leading-none sm:text-7xl">Love needs very few words.</h2>
          <p className="mt-5 text-lg leading-8 text-white/70">Some moments do not need a caption. They simply ask to be remembered.</p>
        </Reveal>
      </div>
    </section>
  )
}
