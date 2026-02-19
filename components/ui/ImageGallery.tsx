'use client'

import { useState } from 'react'
import Image from 'next/image'
import { CustomModal } from './CustomModal'

interface ImageGalleryProps {
  images: {
    src: string
    alt: string
    thumbnail?: string
  }[]
  className?: string
}

export function ImageGallery({ images, className = '' }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  if (images.length === 0) return null

  return (
    <>
      <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ${className}`}>
        {images.map((image, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setSelectedImage(index)}
            className="relative aspect-square rounded-xl overflow-hidden group focus:outline-none focus:ring-2 focus:ring-primary-500"
            aria-label={`Открыть изображение ${image.alt}`}
          >
            <Image
              src={image.thumbnail || image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
          </button>
        ))}
      </div>

      {selectedImage !== null && (
        <CustomModal
          isOpen={selectedImage !== null}
          onClose={() => setSelectedImage(null)}
          size="xl"
          className="bg-transparent"
        >
          <div className="relative w-full aspect-video">
            <Image
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              fill
              className="object-contain"
              sizes="90vw"
              priority
            />
          </div>
          <p className="mt-4 text-center text-white">{images[selectedImage].alt}</p>
        </CustomModal>
      )}
    </>
  )
}
