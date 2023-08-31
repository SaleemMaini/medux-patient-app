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
    <div className='card w-full bg-base-100 shadow-xl min-h-fit'>
      <div className='h-44'>
        <img src={avatar} alt={name} className='object-cover h-48 w-full rounded-t-2xl' />
      </div>
      <div className='card-body'>
        <h2 className='card-title'>{name}</h2>
        <p>{description}</p>
        <div className='card-actions justify-end'>
          <button className='btn btn-primary'>
            Explore
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  )
}
