import { Reveal } from '../components/Reveal'

export function PhotoEssaySection() {
  return (
    <section className="bg-ivory px-5 py-28 sm:px-8 sm:py-40 lg:px-12">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <p className="chapter-label">What the camera cannot hold</p>
          <h2 className="section-title">Things Photographs Cannot Show</h2>
          <div className="mt-10 space-y-7 font-serif text-2xl leading-relaxed text-charcoal/70 sm:text-3xl">
            <p>A photograph can show you where someone stood. But not what they were thinking.</p>
            <p>It can show you who was beside them. But not every conversation that happened.</p>
            <p>It can capture a smile. But not necessarily the reason behind it.</p>
            <p>It can freeze one second. But never everything that came before or after.</p>
          </div>
          <p className="mt-12 max-w-3xl text-lg leading-9 text-charcoal/60">
            Perhaps that is why photographs are so special. They do not tell us everything. They simply open a door — and memory does the rest.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
