'use client'
import DatePicker from 'react-datepicker'
import { WorkingHours } from '@/types/appointments'
import { AppointmentSlot } from '@/components/appointments/appointment-slot'
import { useAppointmentsSlots } from '@/app/hooks/useAppointmentsSlots'
import { useAuth } from '@/app/hooks/useAuth'
import { useRouter, useParams } from 'next/navigation'
import { useMutation, useQuery } from '@tanstack/react-query'
import { bookAppointment, getDoctorAppointments } from '@/api/appointments'
import moment from 'moment'
import { Button } from '@/components/ui/button'
import toast from 'react-hot-toast'
import { Alert } from '@/components/ui/alert'
import { useEffect } from 'react'

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

export const PickAppointmentCard = () => {
  // ** Hooks
  const doctorAppointmentsQuery = useQuery(['doctorAppointmentsData'], {
    queryFn: () => getDoctorAppointments(Number(params.id)),
    enabled: false
  })
  const bookAppointmentMutation = useMutation({
    mutationFn: bookAppointment,
    onSuccess: () => {
      toast.success('booked successfully!')
      doctorAppointmentsQuery.refetch()
      setSelectedSlot(null)
    }
  })

  const { slots, selectedDate, setSelectedSlot, onChangeSelectedDate, selectedSlot, isWorkingDay } =
    useAppointmentsSlots({
      workingHours
    })
  const { isLoggedIn } = useAuth()
  const router = useRouter()
  const params = useParams()

  // ** Handlers
  const onSelectSlot = (slot: any) => {
    setSelectedSlot(slot)
  }

  useEffect(() => {
    doctorAppointmentsQuery.refetch()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleBookAppointment = () => {
    if (!isLoggedIn) {
      router.push('/login')
    }

    if (selectedSlot && params.id) {
      bookAppointmentMutation.mutate({
        date: moment(selectedSlot.date).format('YYYY-MM-DD HH:mm:ss'),
        doctorId: Number(params.id)
      })
    }
  }

  // ** Conditions
  const shouldRenderTheSlots =
    slots.length && doctorAppointmentsQuery.isSuccess && selectedDate && !bookAppointmentMutation.isSuccess
  const noData = !slots.length && doctorAppointmentsQuery.isSuccess && selectedDate

  return (
    <div className='card w-full bg-base-100 shadow-xl min-h-fit  p-5'>
      <div className='flex justify-between'>
        {/* Title */}
        <p className='card-title text-2xl'>Book Appointment</p>

        {/* Date Picker */}
        {bookAppointmentMutation.isSuccess ? null : (
          <div>
            <DatePicker
              selected={selectedDate}
              onChange={date => date && onChangeSelectedDate(date)}
              showMonthDropdown
              className='btn btn-primary outline-none  my-4 placeholder-white'
              minDate={new Date()}
              filterDate={isWorkingDay}
              disabled={bookAppointmentMutation.isLoading}
              placeholderText='Select a date'
            />
          </div>
        )}
      </div>

      {/* Loading */}
      {doctorAppointmentsQuery.isLoading ? (
        <div className='w-full text-center'>
          <span className='loading loading-spinner text-primary loading-lg' />
        </div>
      ) : null}

      {/* Available Times Slots */}
      {shouldRenderTheSlots ? (
        <div className='grid grid-cols-8 gap-4 mt-2 transition ease-in-out  duration-100 '>
          {slots.map((slot, idx) => {
            const isSelected = selectedSlot === slot
            const isBooked = doctorAppointmentsQuery.data.data?.data.doctor.appointments.find((ap: any) => {
              return new Date(ap.date).getTime() === new Date(slot.date).getTime()
            })

            return (
              <AppointmentSlot
                key={idx}
                date={slot.date}
                disabled={isBooked || bookAppointmentMutation.isLoading}
                isSelected={isSelected}
                onClick={() => onSelectSlot(slot)}
              />
            )
          })}
        </div>
      ) : null}

      {/* Select Date Alert */}
      {!selectedDate && doctorAppointmentsQuery.isSuccess ? <Alert text='Please Choose a Date!' /> : null}

      {/* No Data Alert */}
      {noData ? <Alert text='Sorry, No Available appointments for this day!' type='warning' /> : null}

      {/* Appointment Booked Message */}
      {bookAppointmentMutation.isSuccess ? (
        <Alert
          text={`your appointment at (${bookAppointmentMutation.data.data.data.createAppointment.date}) booked successfully.`}
          className='mt-3'
          type='success'
        />
      ) : null}

      {/* Book Now Button */}
      {!bookAppointmentMutation.isSuccess && selectedDate ? (
        <div className='divider mt-12'>
          <Button loading={bookAppointmentMutation.isLoading} onClick={handleBookAppointment} disabled={!selectedSlot}>
            Book Now
          </Button>
        </div>
      ) : null}
    </div>
  )
}
