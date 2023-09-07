'use client'
import { useState } from 'react'
import { AvailableTimeSlot } from '@/components/appointments/available-time-slot'
import DatePicker from 'react-datepicker'
import { AvailableTime } from '@/types/appointments'

export const PickAppointmentCard = () => {
  // ** State
  const [selectedDate, setSelectedDate] = useState<Date>(new Date())
  const [selectedSlot, setSelectedSlot] = useState<AvailableTime | null>(null)

  // ** Handlers
  const onSelectSlot = (avt: AvailableTime) => {
    setSelectedSlot(avt)
  }

  const availableTimes: AvailableTime[] = [
    {
      id: 1,
      status: 'available',
      availibletime: {
        id: 1,
        availibleTime: new Date()
      }
    },
    {
      id: 2,
      status: 'not_available',
      availibletime: {
        id: 2,
        availibleTime: new Date()
      }
    },
    {
      id: 3,
      status: 'available',
      availibletime: {
        id: 3,
        availibleTime: new Date()
      }
    },
    {
      id: 4,
      status: 'available',
      availibletime: {
        id: 4,
        availibleTime: new Date()
      }
    },
    {
      id: 5,
      status: 'not_available',
      availibletime: {
        id: 5,
        availibleTime: new Date()
      }
    }
  ]

  const handleBookAppointment = () => {
    console.log('ss')
  }

  return (
    <div className='card w-full bg-base-100 shadow-xl min-h-fit items-center p-5'>
      {/* Title */}
      <p className='card-title text-2xl'>Book Appointment</p>

      {/* Date Picker */}
      <DatePicker
        selected={selectedDate}
        onChange={date => date && setSelectedDate(date)}
        showMonthDropdown
        className='border-2 rounded-md border-primary outline-none py-2 px-4 my-4'
        minDate={new Date()}
      />

      {/* Available Times Slots */}
      <div className='flex gap-4 mt-2'>
        {availableTimes.map(avt => {
          const isAvailable = avt.status === 'available'
          const isSelected = selectedSlot?.id === avt.id

          return (
            <AvailableTimeSlot
              key={avt.id}
              date={avt.availibletime.availibleTime}
              disabled={!isAvailable}
              isSelected={isSelected}
              onClick={() => onSelectSlot(avt)}
            />
          )
        })}
      </div>

      {/* Book Now Button */}
      <div className='divider mt-12'>
        <button className='btn btn-primary ' onClick={handleBookAppointment} disabled={!selectedSlot}>
          Book Now
        </button>
      </div>
    </div>
  )
}
