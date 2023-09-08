import { City, District } from './others'
import { Specialization } from './specializations'

export type Doctor = {
  id: number
  avatar: string
  name: string
  city: City
  district: District
  summary: string
  gender: 'male' | 'female'
  specialization: Pick<Specialization, 'id' | 'name'>
}
