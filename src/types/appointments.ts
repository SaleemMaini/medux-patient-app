export type AvailableTime = {
  id: number
  status: 'available' | 'not_available'
  availibletime: {
    id: number
    availibleTime: Date
  }
}
