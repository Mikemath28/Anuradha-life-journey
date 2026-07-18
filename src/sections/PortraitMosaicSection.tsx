import { getPhoto } from '../data/gallery'
import { Reveal } from '../components/Reveal'

interface PortraitMosaicSectionProps {
  onOpen: (id: number) => void
}

const ids = [2, 3, 8, 9, 10, 18, 19, 26]

export function PortraitMosaicSection({ onOpen }: PortraitMosaicSectionProps) {
  const portraits = ids.map(getPhoto).filter(Boolean)

  return (
    <section className="paper-texture bg-cream px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-4xl text-center">
          <p className="chapter-label">A thousand versions</p>
          <h2 className="section-title">There Is No Single Photograph That Can Explain a Person</h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-charcoal/65">
            We are the person who laughs loudly, the person who goes quiet, the person who dresses up, the person who does not care, the person surrounded by people and the person completely comfortable alone. Every photograph captures a version of us. None captures the whole story.
          </p>
        </Reveal>

        <div className="portrait-wall mt-14">
          {portraits.map((photo, index) => photo && (
            <button
              key={photo.id}
              type="button"
              onClick={() => onOpen(photo.id)}
              className={`portrait-tile portrait-tile-${index + 1} group overflow-hidden rounded-2xl shadow-photo`}
              aria-label={`Open ${photo.title}`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                style={{ objectPosition: photo.objectPosition ?? 'center' }}
              />
            </button>
          ))}
        </div>

        <Reveal className="mx-auto mt-16 max-w-4xl text-center">
          <blockquote className="font-serif text-3xl italic leading-tight text-burgundy sm:text-5xl">
            “She is not who she was yesterday. She is not yet everything she will become. Somewhere between the two is a beautiful story still unfolding.”
          </blockquote>
        </Reveal>
      </div>
    </section>
  )
}
