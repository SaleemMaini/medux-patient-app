import { Doctor } from '@/types/doctors'
import Link from 'next/link'
import { FaArrowRight, FaLocationDot, FaUserDoctor } from 'react-icons/fa6'

type Props = {
  data: Doctor
}

export const DoctorCard = (props: Props) => {
  // ** Props
  const { data } = props
  const { id, avatar, name, summary, city, district, specialization } = data

  // ** Vars
  const location = `${district?.name}, ${city.name}`

  return (
    <Link href={`/doctor/${id}`}>
      <div className='card w-full bg-base-100 shadow-xl min-h-fit text-center cursor-pointer hover:-translate-y-2 transition duration-200'>
        {/* Avatar */}
        <div className='h-80'>
          <img src={avatar} alt={name} className='object-cover h-full w-full rounded-t-2xl' />
        </div>

        <div className='card-body pt-4'>
          {/* Name */}
          <h2 className='card-title text-center justify-center'>{name}</h2>

          {/* Location & Specialization */}
          <div className='flex items-center gap-1 justify-between'>
            <div className='flex items-center gap-1'>
              <FaUserDoctor />
              <span>{specialization.name}</span>
            </div>

            <div className='flex items-center gap-1'>
              <FaLocationDot />
              <span>{location}</span>
            </div>
          </div>

          {/* summary */}
          <p>{summary}</p>

          {/* Call To Action */}
          <div className='card-actions'>
            <button className='btn btn-primary w-full'>
              Book Appointment
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </Link>
  )
}
