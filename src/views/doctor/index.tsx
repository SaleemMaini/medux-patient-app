import { Doctor } from '@/types/doctors'
import { DoctorDetailsCard } from './doctor-details-card'
import { PickAppointmentCard } from './pick-appointment-card'

type Props = {
  doctorData: Doctor
}
export const DoctorPageView = (props: Props) => {
  // ** Props
  const { doctorData } = props

  return (
    <div className='w-full flex flex-col gap-5'>
      <DoctorDetailsCard data={doctorData} />
      <PickAppointmentCard />
    </div>
  )
}
