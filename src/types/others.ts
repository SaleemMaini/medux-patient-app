export type Gender = 'male' | 'female'

export type LoginInputs = {
  email: string
  password: string
}

export type City = {
  id: number
  name: string
}

export type District = {
  id: number
  name: string
}

export type SelectOption = {
  label: string
  value: string | number
}
