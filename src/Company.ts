import faker from 'faker'

export class Company {
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
  render() {
    return ''
  }
}
