import { Doctor } from '@/types/doctors'
import { DoctorDetailsCard } from './doctor-details-card'

type Props = {
  doctorData: Doctor
}
export const DoctorPageView = (props: Props) => {
  // ** Props
  const { doctorData } = props

  return (
    <div className='w-full'>
      <DoctorDetailsCard data={doctorData} />
    </div>
  )
}
