'use client'
import { WorkingHours } from '@/types/appointments'
import { useEffect, useState } from 'react'
import moment from 'moment'
import { generateAppointmentsSlotsDatesRange } from '../utils'

type Props = {
  workingHours: WorkingHours
  appointments: any
}

export const useAppointmentsSlots = (props: Props) => {
  // ** Props
  const { appointments, workingHours } = props

  // ** States
  const [selectedDate, setSelectedDate] = useState<Date>(new Date())
  const [selectedSlot, setSelectedSlot] = useState<Date | null>(null)
  const [slots, setSlots] = useState<Date[]>([])

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
    const day = moment(date).format('ddd').toLocaleLowerCase().slice(0, 2)

    return workingHours[day].active === '1'
  }

  const handleGenerateAppointmentSlots = (date: Date) => {
    const day = moment(date).format('ddd').toLocaleLowerCase().slice(0, 2)
    const dayWorkingHours = workingHours[day]
    const firstSlotAsDate = new Date(
      date.setHours(getHours(dayWorkingHours['from']), getMinutes(dayWorkingHours['from']), 0)
    )
    const lastSlotAsDate = new Date(
      date.setHours(getHours(dayWorkingHours['to']), getMinutes(dayWorkingHours['to']), 0)
    )

    isWorkingDay(date) &&
      setSlots(generateAppointmentsSlotsDatesRange(firstSlotAsDate, lastSlotAsDate, appointmentAverageTime))
  }

  const onChangeSelectedDate = (date: Date) => {
    setSelectedDate(date)
    setSelectedSlot(null)

    // ** Get the slots depending on the selected date and the working hours
    handleGenerateAppointmentSlots(date)
  }

  const isAvailableSlot = (slot: Date): boolean => {
    return Boolean(
      appointments.find((ap: any) => {
        return new Date(ap.date).getTime() === slot.getTime()
      })
    )
  }

  useEffect(() => {
    isWorkingDay(new Date()) && handleGenerateAppointmentSlots(new Date())

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    slots,
    selectedDate,
    selectedSlot,
    setSelectedSlot,
    onChangeSelectedDate,
    isWorkingDay,
    isAvailableSlot
  }
}
