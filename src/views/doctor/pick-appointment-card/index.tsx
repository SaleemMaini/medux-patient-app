'use client'
import { useState } from 'react'
import DatePicker from 'react-datepicker'
import { WorkingHours } from '@/types/appointments'
import moment from 'moment'
import { generateAppointmentsSlotsDatesRange } from '@/app/utils'
import { AppointmentSlot } from '@/components/appointments/appointment-slot'

export const PickAppointmentCard = () => {
  // ** State
  const [selectedDate, setSelectedDate] = useState<Date>(new Date())
  const [selectedSlot, setSelectedSlot] = useState<Date | null>(null)
  const [slots, setSlots] = useState<Date[]>([])

  // ** Handlers
  const onSelectSlot = (slot: any) => {
    setSelectedSlot(slot)
  }

  const workingHours: WorkingHours = {
    mo: {
      active: '0',
      from: '10:30',
      to: '10:30'
    },
    tu: {
      active: '1',
      from: '09:30',
      to: '10:30'
    },
    we: {
      active: '1',
      from: '09:30',
      to: '10:30'
    },
    th: {
      active: '1',
      from: '03:30',
      to: '09:30'
    },
    fr: {
      active: '1',
      from: '09:00',
      to: '14:00'
    },
    su: {
      active: '1',
      from: '09:00',
      to: '09:30'
    },
    sa: {
      active: '0',
      from: '09:00',
      to: '14:00'
    }
  }

  const appointments = [
    {
      date: '2023-09-15 09:00'
    }
  ]

  const appointmentAverageTime = 30

  const handleBookAppointment = () => {
    console.log('ss')
  }

  const getHours = (time: string): number => {
    return Number(time.split(':')[0])
  }

  const getMinutes = (time: string): number => {
    return Number(time.split(':')[1])
  }

  const onChangeSelectedDate = (date: Date) => {
    setSelectedDate(date)
    setSelectedSlot(null)

    // ** Get the slots depending on the selected date and the working hours
    const day = moment(date).format('ddd').toLocaleLowerCase().slice(0, 2)
    const dayWorkingHours = workingHours[day]
    const firstSlotAsDate = new Date(
      date.setHours(getHours(dayWorkingHours['from']), getMinutes(dayWorkingHours['from']), 0)
    )
    const lastSlotAsDate = new Date(
      date.setHours(getHours(dayWorkingHours['to']), getMinutes(dayWorkingHours['to']), 0)
    )

    setSlots(generateAppointmentsSlotsDatesRange(firstSlotAsDate, lastSlotAsDate, appointmentAverageTime))
  }

  return (
    <div className='card w-full bg-base-100 shadow-xl min-h-fit  p-5'>
      <div className='flex justify-between'>
        {/* Title */}
        <p className='card-title text-2xl'>Book Appointment</p>
        <div>
          {/* Date Picker */}
          <DatePicker
            selected={selectedDate}
            onChange={date => date && onChangeSelectedDate(date)}
            showMonthDropdown
            className='btn btn-primary outline-none  my-4'
            minDate={new Date()}
          />
        </div>
      </div>

      {/* Available Times Slots */}
      {slots.length ? (
        <div className='grid grid-cols-8 gap-4 mt-2 transition ease-in-out  duration-100 '>
          {slots.map((slot, idx) => {
            const isAvailable = appointments.find((ap: any) => {
              return new Date(ap.date).getTime() === slot.getTime()
            })
            const isSelected = selectedSlot === slot

            return (
              <AppointmentSlot
                key={idx}
                date={slot}
                disabled={Boolean(isAvailable)}
                isSelected={isSelected}
                onClick={() => onSelectSlot(slot)}
              />
            )
          })}
        </div>
      ) : (
        <div className='alert alert-warning'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='stroke-current shrink-0 h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z'
            />
          </svg>
          <span>Sorry, No Available appointments for this day!</span>
        </div>
      )}

      {/* Book Now Button */}
      <div className='divider mt-12'>
        <button className='btn btn-primary ' onClick={handleBookAppointment} disabled={!selectedSlot}>
          Book Now
        </button>
      </div>
    </div>
  )
}
