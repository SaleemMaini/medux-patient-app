export type Slot = {
  date: Date
  isBooked: boolean
}

export type WorkingHours = {
  day: string
  active: '0' | '1'
  from: string
  to: string
}[]
