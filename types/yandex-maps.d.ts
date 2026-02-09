/**
 * Типы для Яндекс.Карт API
 */

interface YandexPlacemarkProperties {
  balloonContentHeader?: string
  balloonContentBody?: string
  balloonContentFooter?: string
  hintContent?: string
  iconContent?: string
  balloonContent?: string
}

interface YandexPlacemarkOptions {
  preset?: string
  iconColor?: string
  iconLayout?: string
}

interface YandexClustererOptions {
  clusterDisableClickZoom?: boolean
  clusterOpenBalloonOnClick?: boolean
}

interface YandexClusterer {
  add(placemark: YandexPlacemark): void
}

interface YandexMaps {
  ready(callback: () => void): void
  Map: new (
    element: string,
    options: {
      center: [number, number]
      zoom: number
      controls?: string[]
    }
  ) => YandexMapInstance
  Placemark: new (
    coordinates: [number, number],
    properties?: YandexPlacemarkProperties,
    options?: YandexPlacemarkOptions
  ) => YandexPlacemark
  Clusterer: new (options?: YandexClustererOptions) => YandexClusterer
}

interface YandexMapInstance {
  controls: {
    add(control: string): void
  }
  geoObjects: {
    add(object: YandexPlacemark | YandexClusterer): void
  }
}

interface YandexPlacemark {
  geometry: {
    getCoordinates(): [number, number]
  }
}

interface Window {
  ymaps?: YandexMaps
}
