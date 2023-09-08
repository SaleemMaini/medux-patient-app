export type WorkingHours = {
  [day: string] : {
    active: "0" | "1"
    from: string
    to: string
  }
}
