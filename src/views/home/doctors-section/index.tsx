import { DoctorCard } from '@/components/doctors/doctor-card'
import { Doctor } from '@/types/doctors'

type Props = {
  topDoctors: Doctor[]
}
export const DoctorsSection = (props: Props) => {
  // ** Props
  const { topDoctors } = props

  return (
    <div className='py-20 min-h-full bg-base-200'>
      <div className='container'>
        {/* Title */}
        <div className='flex gap-2 items-center mb-7'>
          <span className='w-10 border-b-4 border-primary block' />
          <h2 className='text-2xl	font-extrabold'>Meet The Top And Best Rated Doctors</h2>
        </div>

        {/* Doctors */}
        <div className='grid grid-cols-4 gap-4'>
          {topDoctors.map(d => {
            return <DoctorCard key={d.id} data={d} />
          })}
        </div>
      </div>
    </div>
  )
}
