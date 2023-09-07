import { Gender } from '@/types/others'

export type ErrCallbackType = (err: { [key: string]: string }) => void

export type LoginParams = {
  email: string
  password: string
}

export type UserDataType = {
  id: number
  email: string
  name: string
  gender: Gender
}

export type AuthValuesType = {
  loading: boolean
  logout: () => void
  user: UserDataType | null
  setLoading: (value: boolean) => void
  setUser: (value: UserDataType | null) => void
  login: (params: LoginParams, errorCallback?: ErrCallbackType) => void
}
