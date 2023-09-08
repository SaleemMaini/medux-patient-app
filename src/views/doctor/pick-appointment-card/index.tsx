'use client'
import DatePicker from 'react-datepicker'
import { WorkingHours } from '@/types/appointments'
import { AppointmentSlot } from '@/components/appointments/appointment-slot'
import { useAppointmentsSlots } from '@/app/hooks/useAppointmentsSlots'

export const PickAppointmentCard = () => {
  // ** Hooks
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
      date: '2023-09-8 09:00'
    }
  ]

  const { slots, selectedDate, setSelectedSlot, onChangeSelectedDate, selectedSlot, isWorkingDay, isAvailableSlot } =
    useAppointmentsSlots({
      appointments,
      workingHours
    })

  // ** Handlers
  const onSelectSlot = (slot: any) => {
    setSelectedSlot(slot)
  }

  const handleBookAppointment = () => {
    console.log('ss')
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
            filterDate={isWorkingDay}
          />
        </div>
      </div>

      {/* Available Times Slots */}
      {slots.length ? (
        <div className='grid grid-cols-8 gap-4 mt-2 transition ease-in-out  duration-100 '>
          {slots.map((slot, idx) => {
            const isAvailable = isAvailableSlot(slot)
            const isSelected = selectedSlot === slot

            return (
              <AppointmentSlot
                key={idx}
                date={slot}
                disabled={isAvailable}
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
