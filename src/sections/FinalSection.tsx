import { ArrowUpRight } from 'lucide-react'
import { getPhoto } from '../data/gallery'
import { Reveal } from '../components/Reveal'

interface FinalSectionProps {
  onOpen: (id: number) => void
}

export function FinalSection({ onOpen }: FinalSectionProps) {
  const photo = getPhoto(3)
  if (!photo) return null

  return (
    <section id="future" className="relative overflow-hidden bg-burgundy text-ivory">
      <div className="grid min-h-[88vh] lg:grid-cols-2">
        <button type="button" onClick={() => onOpen(photo.id)} className="relative min-h-[55vh] overflow-hidden lg:min-h-full" aria-label={`Open ${photo.title}`}>
          <img src={photo.src} alt={photo.alt} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
          <span className="absolute inset-0 bg-gradient-to-t from-burgundy/55 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-burgundy/15" />
        </button>
        <div className="flex items-center px-6 py-20 sm:px-10 lg:px-16 xl:px-20">
          <Reveal className="max-w-2xl">
            <p className="chapter-label !text-champagne">The final chapter — for now</p>
            <h2 className="font-serif text-6xl leading-[0.9] sm:text-8xl">And the Story Continues…</h2>
            <div className="mt-8 space-y-5 text-base leading-8 text-ivory/72 sm:text-lg">
              <p>There are photographs here of places visited, people met, afternoons spent together, quiet moments, loud moments, celebrations and ordinary days.</p>
              <p>But this collection does not tell Anuradha’s entire story. It could not. The most beautiful thing about her story is that it is still being written.</p>
              <p>There are still photographs that have not been taken. Places she has not stood yet. People she has not met. Days she does not yet know she will remember forever.</p>
              <p>Somewhere ahead is another ordinary morning. Another journey. Another laugh. Another photograph. Another chapter.</p>
            </div>
            <blockquote className="mt-10 border-l border-champagne pl-6 font-serif text-3xl italic leading-tight text-champagne sm:text-4xl">
              “Here’s to the moments that made her who she is — and to all the moments that will make her who she is yet to become.”
            </blockquote>
            <a href="#top" className="mt-10 inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm transition hover:bg-white/10">
              The story continues <ArrowUpRight size={16} />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
