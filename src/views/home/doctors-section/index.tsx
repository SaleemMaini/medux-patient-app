import { DoctorCard } from '@/components/doctors/doctor-card'
import { Doctor } from '@/types/doctors'

export const DoctorsSection = () => {
  const doctors: Doctor[] = [
    {
      id: 1,
      avatar: '/images/doctors/doctor-1.jpg',
      name: 'John Doe',
      description: 'lorem ipsum dolor sit amet, consectetur adipiscing',
      specialization: {
        id: 1,
        name: 'dentist'
      }
    },
    {
      id: 2,
      avatar: '/images/doctors/doctor-2.jpg',
      name: 'Smith Doe',
      description: 'lorem ipsum dolor sit amet, consectetur adipiscing',
      specialization: {
        id: 2,
        name: 'eyes'
      }
    },
    {
      id: 3,
      avatar: '/images/doctors/doctor-3.jpg',
      name: 'Ahmad Abdo',
      description: 'lorem ipsum dolor sit amet, consectetur adipiscing',
      specialization: {
        id: 3,
        name: 'eyes'
      }
    },
    {
      id: 4,
      avatar: '/images/doctors/doctor-4.jpg',
      name: 'Sameer Khaled',
      description: 'lorem ipsum dolor sit amet, consectetur adipiscing',
      specialization: {
        id: 4,
        name: 'children'
      }
    }
  ]

  return (
    <div className='px-10 py-20 min-h-full'>
      {/* Title */}
      <div className='flex gap-3 items-center mb-7'>
        <span className='w-10 border-b-4 border-primary block' />
        <h2 className='text-2xl	font-extrabold'>Meet The Top And Best Rated Doctors</h2>
      </div>

      {/* Doctors */}
      <div className='grid grid-cols-4 gap-8'>
        {doctors.map(s => {
          return <DoctorCard data={s} />
        })}
      </div>
    </div>
  )
}
