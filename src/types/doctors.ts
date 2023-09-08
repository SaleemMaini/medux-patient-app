import { Specialization } from './specializations'

export type Doctor = {
  id: number
  avatar: string
  name: string
  location: string
  description: string
  gender: 'male' | 'female'
  specialization: Pick<Specialization, 'id' | 'name'>
}
