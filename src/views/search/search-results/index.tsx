import { DoctorCard } from '@/components/doctors/doctor-card'

export const SearchResultsSection = () => {
  const searchResults = [
    {
      id: 1,
      avatar: '/images/doctors/doctor-1.jpg',
      name: 'John Doe',
      description: 'lorem ipsum dolor sit amet, consectetur adipiscing',
      location: 'Alwaar, Homs',
      specialization: {
        id: 1,
        name: 'dentist'
      }
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
      }
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
      }
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
      }
    }
  ]

  return (
    <div className='py-10'>
      <div className='grid grid-cols-2 gap-5'>
        {searchResults.map(d => {
          return <DoctorCard key={d.id} data={d} />
        })}
      </div>
    </div>
  )
}
