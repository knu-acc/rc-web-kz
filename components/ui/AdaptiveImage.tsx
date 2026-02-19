'use client'

import Image, { ImageProps } from 'next/image'
import { useState } from 'react'

interface AdaptiveImageProps extends Omit<ImageProps, 'src'> {
  src: string
  alt: string
  fallbackSrc?: string
}

/**
 * Адаптивное изображение с srcset и fallback
 */
export function AdaptiveImage({
  src,
  alt,
  fallbackSrc,
  className = '',
  ...props
}: AdaptiveImageProps) {
  const [imgSrc, setImgSrc] = useState(src)
  const [hasError, setHasError] = useState(false)

  const handleError = () => {
    if (!hasError && fallbackSrc) {
      setImgSrc(fallbackSrc)
      setHasError(true)
    }
  }

  return (
    <Image
      src={imgSrc}
      alt={alt}
      className={className}
      onError={handleError}
      {...props}
    />
  )
}
