import { DoctorCard } from '@/components/doctors/doctor-card'
import { Doctor } from '@/types/doctors'

export const SearchResultsSection = () => {
  const searchResults: Doctor[] = [
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
    <div className='py-10'>
      {/* Title */}
      <p className='text-xl font-semibold'>Search Results:</p>
      <span >{searchResults.length} results found</span>

      {/* Doctors */}
      <div className='grid grid-cols-2 gap-5 mt-2'>
        {searchResults.map(d => {
          return <DoctorCard key={d.id} data={d} />
        })}
      </div>
    </div>
  )
}
