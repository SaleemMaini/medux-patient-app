import { Specialization } from './specializations'

export type Doctor = {
  id: number
  avatar: string
  name: string
  city: { id: number; name: string }
  district: { id: number; name: string }
  summary: string
  gender: 'male' | 'female'
  specialization: Pick<Specialization, 'id' | 'name'>
}
