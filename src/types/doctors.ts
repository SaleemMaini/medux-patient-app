import { Specialization } from './specializations'

export type Doctor = {
  id: number
  avatar: string
  name: string
  description: string
  specialization: Pick<Specialization, 'id' | 'name'>
}
