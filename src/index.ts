import { User } from './User'
import { Company } from './company'
import { Map } from './map'

const user = new User()
const company = new Company()

const map = new Map('map')
map.addUserMarker(user)
map.addCompanyMarker(company)
