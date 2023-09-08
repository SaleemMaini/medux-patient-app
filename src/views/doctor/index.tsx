import { DoctorDetailsCard } from './doctor-details-card'
import { PickAppointmentCard } from './pick-appointment-card'

export const DoctorPageView = () => {
  return (
    <div className='w-full flex flex-col gap-5'>
      <DoctorDetailsCard />
      <PickAppointmentCard />
    </div>
  )
}
