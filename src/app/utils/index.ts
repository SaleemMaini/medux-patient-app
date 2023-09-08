export function generateAppointmentsSlotsDatesRange(from: Date, to: Date, step: number) {
  const dates = []

  while (from < to) {
    dates.push(new Date(from))
    from.setMinutes(from.getMinutes() + step)
  }

  return dates
}
