import { useState } from 'react'
import { BackToTop } from './components/BackToTop'
import { Footer } from './components/Footer'
import { Gallery } from './components/Gallery'
import { IntroLoader } from './components/IntroLoader'
import { Lightbox } from './components/Lightbox'
import { MemoryMosaic } from './components/MemoryMosaic'
import { Navbar } from './components/Navbar'
import { ScrollProgress } from './components/ScrollProgress'
import { chapters } from './data/chapters'
import { photos } from './data/gallery'
import { AffectionSpotlight } from './sections/AffectionSpotlight'
import { ChapterSection } from './sections/ChapterSection'
import { FinalSection } from './sections/FinalSection'
import { HeroSection } from './sections/HeroSection'
import { OpeningSection } from './sections/OpeningSection'
import { PhotoEssaySection } from './sections/PhotoEssaySection'
import { PortraitMosaicSection } from './sections/PortraitMosaicSection'

function App() {
  const [activePhotoId, setActivePhotoId] = useState<number | null>(null)

  return (
    <>
      <IntroLoader />
      <ScrollProgress />
      <Navbar />
      <main>
        <HeroSection />
        <OpeningSection onOpen={setActivePhotoId} />
        <ChapterSection chapter={chapters[0]} onOpen={setActivePhotoId} />
        <ChapterSection chapter={chapters[1]} onOpen={setActivePhotoId} />
        <ChapterSection chapter={chapters[2]} onOpen={setActivePhotoId} />
        <AffectionSpotlight onOpen={setActivePhotoId} />
        <ChapterSection chapter={chapters[3]} onOpen={setActivePhotoId} />
        <ChapterSection chapter={chapters[4]} onOpen={setActivePhotoId} />
        <ChapterSection chapter={chapters[5]} onOpen={setActivePhotoId} />
        <ChapterSection chapter={chapters[6]} onOpen={setActivePhotoId} />
        <PortraitMosaicSection onOpen={setActivePhotoId} />
        <PhotoEssaySection />
        <Gallery onOpen={setActivePhotoId} />
        <MemoryMosaic onOpen={setActivePhotoId} />
        <FinalSection onOpen={setActivePhotoId} />
      </main>
      <Footer />
      <BackToTop />
      <Lightbox
        photos={photos}
        activeId={activePhotoId}
        onClose={() => setActivePhotoId(null)}
        onChange={setActivePhotoId}
      />
    </>
  )
}

export default App
