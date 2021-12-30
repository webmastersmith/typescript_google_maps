/// <reference types="@types/google.maps" />
import { User } from './User'
import { Company } from './company'

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

  addUserMarker(user: User): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: user.location.lat,
        lng: user.location.lng,
      },
    })
  }

  addCompanyMarker(company: Company): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: company.location.lat,
        lng: company.location.lng,
      },
    })
  }
}
