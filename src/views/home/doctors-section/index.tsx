import { DoctorCard } from '@/components/doctors/doctor-card'
import { Doctor } from '@/types/doctors'

export const DoctorsSection = () => {
  const doctors: Doctor[] = [
    {
      id: 1,
      avatar: '/images/doctors/doctor-1.jpg',
      name: 'John Doe',
      description: 'lorem ipsum dolor sit amet, consectetur adipiscing',
      location: 'Alwaar, Homs',
      specialization: {
        id: 1,
        name: 'dentist'
      },
      gender: 'male'
    },
    {
      id: 2,
      avatar: '/images/doctors/doctor-2.jpg',
      name: 'Smith Doe',
      location: 'Dablan, Homs',
      description: 'lorem ipsum dolor sit amet, consectetur adipiscing',
      specialization: {
        id: 2,
        name: 'brain'
      },
      gender: 'male'
    },
    {
      id: 3,
      location: 'Malki, Damascus',
      avatar: '/images/doctors/doctor-3.jpg',
      name: 'Ahmad Abdo',
      description: 'lorem ipsum dolor sit amet, consectetur adipiscing',
      specialization: {
        id: 3,
        name: 'eyes'
      },
      gender: 'male'
    },
    {
      id: 4,
      location: 'Hmdani, Aleppo',
      avatar: '/images/doctors/doctor-4.jpg',
      name: 'Sameer Khaled',
      description: 'lorem ipsum dolor sit amet, consectetur adipiscing',
      specialization: {
        id: 4,
        name: 'children'
      },
      gender: 'male'
    }
  ]

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
          {doctors.map(d => {
            return <DoctorCard key={d.id} data={d} />
          })}
        </div>
      </div>
    </div>
  )
}
