import { motion } from 'framer-motion'
import { getPhoto } from '../data/gallery'
import type { Chapter } from '../types/content'
import { PhotoFrame } from '../components/PhotoFrame'
import { Reveal } from '../components/Reveal'

interface ChapterSectionProps {
  chapter: Chapter
  onOpen: (id: number) => void
}

export function ChapterSection({ chapter, onOpen }: ChapterSectionProps) {
  const chapterPhotos = chapter.photoIds.map(getPhoto).filter(Boolean)
  const isDark = chapter.layout === 'dark'

  if (chapter.layout === 'filmstrip') {
    return (
      <section id={chapter.id} className={`overflow-hidden px-5 py-24 sm:px-8 sm:py-32 lg:px-12 ${isDark ? 'bg-charcoal text-ivory' : 'bg-ivory text-charcoal'}`}>
        <div className="mx-auto max-w-7xl">
          <Reveal className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div>
              <p className={`chapter-label ${isDark ? '!text-champagne' : ''}`}>{chapter.number} · {chapter.eyebrow}</p>
              <h2 className={`section-title ${isDark ? '!text-ivory' : ''}`}>{chapter.title}</h2>
            </div>
            <div>
              <p className={`text-xl leading-9 ${isDark ? 'text-ivory/70' : 'text-charcoal/65'}`}>{chapter.intro}</p>
              <div className={`mt-7 space-y-4 text-base leading-8 ${isDark ? 'text-ivory/60' : 'text-charcoal/60'}`}>
                {chapter.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-14 overflow-x-auto pb-6 scrollbar-thin">
          <div className="mx-auto flex w-max min-w-full gap-5 px-[max(1.25rem,calc((100vw-80rem)/2))]">
            {chapterPhotos.map((photo, index) => photo && (
              <motion.button
                key={photo.id}
                type="button"
                onClick={() => onOpen(photo.id)}
                className="group w-[72vw] max-w-sm shrink-0 text-left sm:w-[42vw] lg:w-[28vw]"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: index * 0.06 }}
              >
                <div className="aspect-[4/5] overflow-hidden rounded-3xl shadow-photo">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    style={{ objectPosition: photo.objectPosition ?? 'center' }}
                  />
                </div>
                <p className={`mt-4 font-serif text-2xl ${isDark ? 'text-ivory' : 'text-charcoal'}`}>{photo.title}</p>
              </motion.button>
            ))}
          </div>
        </div>

        <Reveal className="mx-auto mt-10 max-w-4xl px-5 text-center">
          <blockquote className={`font-serif text-3xl italic leading-tight sm:text-5xl ${isDark ? 'text-champagne' : 'text-burgundy'}`}>
            “{chapter.quote}”
          </blockquote>
        </Reveal>
      </section>
    )
  }

  if (chapter.layout === 'collage') {
    return (
      <section id={chapter.id} className="paper-texture bg-cream px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mx-auto max-w-4xl text-center">
            <p className="chapter-label">{chapter.number} · {chapter.eyebrow}</p>
            <h2 className="section-title">{chapter.title}</h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-charcoal/65">{chapter.intro}</p>
          </Reveal>

          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-12 lg:grid-rows-2">
            {chapterPhotos.map((photo, index) => photo && (
              <motion.button
                key={photo.id}
                type="button"
                onClick={() => onOpen(photo.id)}
                className={`group relative overflow-hidden rounded-3xl shadow-photo ${
                  index === 0 ? 'lg:col-span-5 lg:row-span-2' :
                  index === 1 ? 'lg:col-span-4' :
                  index === 2 ? 'lg:col-span-3' :
                  index === 3 ? 'lg:col-span-3' :
                  index === 4 ? 'lg:col-span-4' : 'lg:col-span-5'
                }`}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.7, delay: index * 0.05 }}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className={`w-full object-cover transition duration-700 group-hover:scale-105 ${index === 0 ? 'h-full min-h-[34rem]' : 'h-72 lg:h-full lg:min-h-[17rem]'}`}
                  style={{ objectPosition: photo.objectPosition ?? 'center' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/0 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-left text-white">
                  <p className="font-serif text-2xl">{photo.title}</p>
                  <p className="mt-1 text-sm text-white/70">{photo.caption}</p>
                </div>
              </motion.button>
            ))}
          </div>

          <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <Reveal className="space-y-5 text-base leading-8 text-charcoal/62 sm:text-lg">
              {chapter.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </Reveal>
            <Reveal delay={0.1}>
              <blockquote className="border-l border-champagne pl-6 font-serif text-3xl italic leading-snug text-burgundy sm:text-4xl">
                “{chapter.quote}”
              </blockquote>
            </Reveal>
          </div>
        </div>
      </section>
    )
  }

  if (chapter.layout === 'spotlight') {
    const [first, ...rest] = chapterPhotos
    return (
      <section id={chapter.id} className="bg-ivory px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {first && (
              <Reveal className="relative">
                <PhotoFrame photo={first} onOpen={onOpen} imageClassName="aspect-[3/4]" showCaption={false} />
                <div className="absolute -bottom-6 -right-2 hidden max-w-xs rounded-2xl border border-champagne/25 bg-cream p-6 shadow-xl sm:block">
                  <p className="font-serif text-2xl italic text-burgundy">“{chapter.quote}”</p>
                </div>
              </Reveal>
            )}
            <Reveal delay={0.1}>
              <p className="chapter-label">{chapter.number} · {chapter.eyebrow}</p>
              <h2 className="section-title">{chapter.title}</h2>
              <p className="mt-6 text-lg leading-8 text-charcoal/65">{chapter.intro}</p>
              <div className="mt-6 space-y-5 text-base leading-8 text-charcoal/60">
                {chapter.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
              <blockquote className="mt-8 border-l border-champagne pl-5 font-serif text-3xl italic text-burgundy sm:hidden">“{chapter.quote}”</blockquote>
              <div className="mt-10 grid grid-cols-2 gap-4">
                {rest.map((photo) => photo && <PhotoFrame key={photo.id} photo={photo} onOpen={onOpen} imageClassName="aspect-[3/4]" showCaption={false} />)}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    )
  }

  if (chapter.layout === 'dark') {
    const [hero, ...rest] = chapterPhotos
    return (
      <section id={chapter.id} className="relative overflow-hidden bg-[#17110f] px-5 py-24 text-ivory sm:px-8 sm:py-32 lg:px-12">
        <div className="absolute inset-0 opacity-[0.07] [background-image:radial-gradient(circle_at_20%_20%,#C9A66B_0,transparent_22%),radial-gradient(circle_at_80%_60%,#6B2737_0,transparent_30%)]" />
        <div className="relative mx-auto max-w-7xl">
          <Reveal className="mx-auto max-w-4xl text-center">
            <p className="chapter-label !text-champagne">{chapter.number} · {chapter.eyebrow}</p>
            <h2 className="font-serif text-5xl leading-none sm:text-7xl">{chapter.title}</h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-ivory/65">{chapter.intro}</p>
          </Reveal>

          {hero && (
            <Reveal className="mx-auto mt-14 max-w-4xl">
              <button type="button" onClick={() => onOpen(hero.id)} className="group block w-full overflow-hidden rounded-[2rem] border border-white/10 bg-black shadow-2xl">
                <img src={hero.src} alt={hero.alt} className="max-h-[50rem] w-full object-cover transition duration-700 group-hover:scale-[1.02]" />
              </button>
            </Reveal>
          )}

          <div className="mx-auto mt-12 grid max-w-5xl gap-8 lg:grid-cols-[1fr_0.8fr]">
            <Reveal className="space-y-5 text-base leading-8 text-ivory/60 sm:text-lg">
              {chapter.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </Reveal>
            <Reveal delay={0.1}>
              <blockquote className="font-serif text-4xl italic leading-tight text-champagne sm:text-5xl">“{chapter.quote}”</blockquote>
            </Reveal>
          </div>

          <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-4">
            {rest.map((photo) => photo && <PhotoFrame key={photo.id} photo={photo} onOpen={onOpen} imageClassName="aspect-[4/3]" showCaption={false} />)}
          </div>
        </div>
      </section>
    )
  }

  // Editorial layout
  const [lead, ...rest] = chapterPhotos
  return (
    <section id={chapter.id} className="bg-ivory px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20">
          <Reveal>
            <p className="chapter-label">{chapter.number} · {chapter.eyebrow}</p>
            <h2 className="section-title">{chapter.title}</h2>
            <p className="mt-6 text-lg leading-8 text-charcoal/65">{chapter.intro}</p>
            <div className="mt-7 space-y-5 text-base leading-8 text-charcoal/60">
              {chapter.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <blockquote className="mt-9 border-l border-champagne pl-6 font-serif text-3xl italic leading-snug text-burgundy sm:text-4xl">“{chapter.quote}”</blockquote>
          </Reveal>

          <div>
            {lead && <Reveal><PhotoFrame photo={lead} onOpen={onOpen} imageClassName="aspect-[4/3] lg:aspect-[5/4]" /></Reveal>}
            <div className="mt-6 grid grid-cols-2 gap-4">
              {rest.slice(0, 4).map((photo, index) => photo && (
                <Reveal key={photo.id} delay={index * 0.04}>
                  <PhotoFrame photo={photo} onOpen={onOpen} imageClassName="aspect-square" showCaption={false} />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
