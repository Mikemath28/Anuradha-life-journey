import { getPhoto } from '../data/gallery'
import { PhotoFrame } from '../components/PhotoFrame'
import { Reveal } from '../components/Reveal'

interface OpeningSectionProps {
  onOpen: (id: number) => void
}

export function OpeningSection({ onOpen }: OpeningSectionProps) {
  const photo = getPhoto(4)
  if (!photo) return null

  return (
    <section id="story" className="paper-texture bg-cream px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <Reveal>
          <p className="chapter-label">The beginning</p>
          <h2 className="section-title">A Story Made of Moments</h2>
          <div className="mt-8 max-w-2xl space-y-6 text-base leading-8 text-charcoal/68 sm:text-lg">
            <p>Every photograph holds more than a moment.</p>
            <p>
              It carries a place, a person, a feeling, a laugh, a story — sometimes even an entire chapter of life.
            </p>
            <p>
              This is Anuradha’s story, told not through a list of dates and milestones, but through the everyday moments that quietly became memories: a smile across a table, a road taken, a place visited, people standing beside her, and the many versions of herself captured along the way.
            </p>
          </div>
          <blockquote className="mt-10 max-w-xl font-serif text-3xl italic leading-snug text-burgundy sm:text-4xl">
            “Every photograph remembers something we almost forgot.”
          </blockquote>
        </Reveal>

        <Reveal delay={0.15} className="mx-auto w-full max-w-md rotate-[1.5deg] lg:mr-6">
          <PhotoFrame photo={photo} onOpen={onOpen} imageClassName="aspect-square" />
        </Reveal>
      </div>
    </section>
  )
}
