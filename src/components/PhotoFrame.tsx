import type { Photo } from '../types/content'

interface PhotoFrameProps {
  photo: Photo
  onOpen: (id: number) => void
  className?: string
  imageClassName?: string
  showCaption?: boolean
}

export function PhotoFrame({
  photo,
  onOpen,
  className = '',
  imageClassName = 'aspect-[4/5]',
  showCaption = true,
}: PhotoFrameProps) {
  return (
    <button
      type="button"
      className={`group text-left ${className}`}
      onClick={() => onOpen(photo.id)}
      aria-label={`Open ${photo.title}`}
    >
      <div className={`overflow-hidden rounded-[1.5rem] bg-cream shadow-photo ${imageClassName}`}>
        <img
          src={photo.src}
          alt={photo.alt}
          loading="lazy"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.035]"
          style={{ objectPosition: photo.objectPosition ?? 'center' }}
        />
      </div>
      {showCaption && (
        <div className="mt-4">
          <p className="font-serif text-xl text-charcoal">{photo.title}</p>
          <p className="mt-1 text-sm leading-6 text-charcoal/55">{photo.caption}</p>
        </div>
      )}
    </button>
  )
}
