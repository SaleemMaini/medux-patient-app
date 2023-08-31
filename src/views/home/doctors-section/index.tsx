import { DoctorCard } from '@/components/doctors/doctor-card'
import { Doctor } from '@/types/doctors'

export const DoctorsSection = () => {
  const doctors: Doctor[] = [
    {
      id: 1,
      avatar: '/images/specializations/dentist.jpg',
      name: 'Dentist',
      description: 'lorem ipsum dolor sit amet, consectetur adipiscing',
      specialization: {
        id: 1,
        name: 'dentist'
      }
    },
    {
      id: 2,
      avatar: '/images/specializations/eye.jpg',
      name: 'Eyes',
      description: 'lorem ipsum dolor sit amet, consectetur adipiscing',
      specialization: {
        id: 2,
        name: 'eyes'
      }
    }
  ]

  return (
    <div className='bg-primary grid grid-cols-3 gap-8 px-10 py-20 min-h-full -mt-1.5'>
      {doctors.map(s => {
        return <DoctorCard data={s} />
      })}
    </div>
  )
}
