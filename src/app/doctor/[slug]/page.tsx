import { Doctor } from '@/types/doctors'
import { DoctorPageView } from '@/views/doctor'

const DoctorPage = () => {
  const doctorData: Doctor = {
    id: 3,
    location: 'Malki, Damascus',
    avatar: '/images/doctors/doctor-3.jpg',
    name: 'Ahmad Abdo',
    description: 'lorem ipsum dolor sit amet, consectetur adipiscing',
    specialization: {
      id: 3,
      name: 'eyes'
    },
    gender: 'male',
    slug: 'ahmad-abdo'
  }

  return <DoctorPageView doctorData={doctorData} />
}

export default DoctorPage
