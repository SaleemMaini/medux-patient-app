import { Doctor } from '@/types/doctors'
import { FaLocationDot, FaUserDoctor } from 'react-icons/fa6'

type Props = {
  data: Doctor
}

export const DoctorDetailsCard = (props: Props) => {
  // ** Props
  const { data } = props
  const { avatar, name, description, location, specialization } = data

  return (
    <div className='card w-full card-side bg-base-100 shadow-xl min-h-fit items-center p-5'>
      {/* Avatar */}
      <div className='h-48 min-w-fit'>
        <img src={avatar} alt={name} className='object-cover h-full w-full rounded-2xl' />
      </div>

      {/* Details */}
      <div className='card-body pt-4 flex flex-col gap-2'>
        {/* Name */}
        <h2 className='card-title text-3xl'>{name}</h2>

        {/* Location  */}
        <div className='flex items-center gap-2'>
          <FaUserDoctor />
          <span>{specialization.name}</span>
        </div>

        {/* Specialization */}
        <div className='flex items-center gap-2'>
          <FaLocationDot />
          <span>{location}</span>
        </div>

        {/* Description */}
        <p>{description}</p>
      </div>
    </div>
  )
}
