'use client'
import { Slot, WorkingHours } from '@/types/appointments'
import { useState } from 'react'
import moment from 'moment'
import { generateAppointmentsSlotsDatesRange } from '../utils'

type Props = {
  workingHours: WorkingHours
}

export const useAppointmentsSlots = (props: Props) => {
  // ** Props
  const { workingHours } = props

  // ** States
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedSlot, setSelectedSlot] = useState<Slot | null>(null)
  const [slots, setSlots] = useState<Slot[]>([])

  // ** Vars
  const appointmentAverageTime = 30

  // ** Handlers
  const getHours = (time: string): number => {
    return Number(time.split(':')[0])
  }

  const getMinutes = (time: string): number => {
    return Number(time.split(':')[1])
  }

  const isWorkingDay = (date: Date) => {
    const day = moment(date).format('dddd').toLowerCase()
    const dayWorkingHours = workingHours.find(d => d.day === day)

    return dayWorkingHours?.active === '1'
  }

  const handleGenerateAppointmentSlots = (date: Date) => {
    const day = moment(date).format('dddd').toLowerCase()
    const dayWorkingHours = workingHours.find(d => d.day === day)
    if (!dayWorkingHours) {
      return
    }

    const firstSlotAsDate = new Date(
      date.setHours(getHours(dayWorkingHours.from), getMinutes(dayWorkingHours['from']), 0)
    )
    const lastSlotAsDate = new Date(
      date.setHours(getHours(dayWorkingHours['to']), getMinutes(dayWorkingHours['to']), 0)
    )
    const dates = generateAppointmentsSlotsDatesRange(firstSlotAsDate, lastSlotAsDate, appointmentAverageTime)
    const slotsArr: Slot[] = []

    dates.forEach(gDate => {
      slotsArr.push({
        date: gDate,
        isBooked: false
      })
    })

    setSlots(slotsArr)
  }

  const onChangeSelectedDate = (date: Date) => {
    setSelectedDate(date)
    setSelectedSlot(null)

    // ** Get the slots depending on the selected date and the working hours
    handleGenerateAppointmentSlots(date)
  }

  return {
    slots,
    selectedDate,
    selectedSlot,
    setSelectedSlot,
    onChangeSelectedDate,
    isWorkingDay,
    handleGenerateAppointmentSlots
  }
}
