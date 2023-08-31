import { Doctor } from '@/types/doctors'
import { FaArrowRight } from 'react-icons/fa6'

type Props = {
  data: Doctor
}

export const DoctorCard = (props: Props) => {
  // ** Props
  const { data } = props
  const { avatar, name, description } = data

  return (
    <div className='card w-full bg-base-100 shadow-xl min-h-fit text-center cursor-pointer'>
      {/* Avatar */}
      <div className='h-80'>
        <img src={avatar} alt={name} className='object-cover h-full w-full rounded-t-2xl' />
      </div>

      <div className='card-body '>
        {/* Name */}
        <h2 className='card-title text-center justify-center'>{name}</h2>

        {/* Location */}

        {/* Description */}
        <p>{description}</p>

        {/* Call To Action */}
        <div className='card-actions'>
          <button className='btn btn-primary w-full'>
            Book Appointment
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  )
}
