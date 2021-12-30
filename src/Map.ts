/// <reference types="@types/google.maps" />
import { User } from './User'
import { Company } from './company'

export interface Mappable {
  location: {
    lat: number
    lng: number
  }
  markerContent(): string
}

export class Map {
  private googleMap: google.maps.Map
  mapOptions = {
    center: {
      lat: 0,
      lng: 0,
    },
    zoom: 1,
  }

  constructor(htmlId: string) {
    this.googleMap = new google.maps.Map(
      document.getElementById(htmlId),
      this.mapOptions
    )
  }

  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    })

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent(),
      })

      infoWindow.open(this.googleMap, marker)
    })
  }
}
