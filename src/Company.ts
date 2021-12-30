import faker from 'faker'
import { Mappable } from './map'

export class Company implements Mappable {
  company: string
  companyPhrase: string
  location: {
    lat: number
    lng: number
  }

  constructor() {
    this.company = faker.company.companyName()
    this.companyPhrase = faker.company.catchPhrase()
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    }
  }

  markerContent(): string {
    return `
    <div>
      <h1>Company Name: ${this.company}</h1>
      <h3>Catchphrase: ${this.companyPhrase}</h3>
    </div>
    `
  }
}
