import { SpecializationCard } from '@/components/specialization/specialization-card'
import { Specialization } from '@/types/specializations'

export const SpecializationsSection = () => {
  const specializations: Specialization[] = [
    {
      id: 1,
      img: '/images/specializations/dentist.jpg',
      name: 'Dentist',
      description: 'lorem ipsum dolor sit amet, consectetur adipiscing'
    },
    {
      id: 1,
      img: '/images/specializations/eye.jpg',
      name: 'Eyes',
      description: 'lorem ipsum dolor sit amet, consectetur adipiscing'
    }
  ]

  return (
    <div className='bg-primary px-10 py-20 min-h-full -mt-1.5'>
      {/* Title */}
      <div className='flex gap-3 items-center mb-7 text-white'>
        <span className='w-10 border-b-4 border-white block' />
        <h2 className='text-2xl	font-extrabold'>Book from top specialties</h2>
      </div>

      {/* Specializations */}
      <div className='grid grid-cols-3 gap-8 '>
        {specializations.map(s => {
          return <SpecializationCard data={s} />
        })}
      </div>
    </div>
  )
}
