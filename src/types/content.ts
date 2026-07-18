export type PhotoCategory =
  | 'Her'
  | 'Together'
  | 'Everyday'
  | 'Out & About'
  | 'Special Days'
  | 'Little Moments'

export interface Photo {
  id: number
  src: string
  title: string
  caption: string
  alt: string
  category: PhotoCategory
  objectPosition?: string
  featured?: boolean
  stylised?: boolean
}

export interface Chapter {
  id: string
  number: string
  eyebrow: string
  title: string
  intro: string
  paragraphs: string[]
  quote: string
  photoIds: number[]
  layout: 'editorial' | 'collage' | 'filmstrip' | 'spotlight' | 'dark'
}
