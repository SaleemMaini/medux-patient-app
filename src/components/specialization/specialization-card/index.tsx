import { Specialization } from '@/types/specializations'
import { FaArrowRight } from 'react-icons/fa6'

type Props = {
  data: Specialization
}

export const SpecializationCard = (props: Props) => {
  // ** Props
  const { data } = props
  const { img, name, description } = data

  return (
    <div className='card w-full bg-base-100 shadow-xl min-h-fit hover:-translate-y-2 transition duration-200 cursor-pointer'>
      {/* Image */}
      <div className='h-64'>
        <img src={img} alt={name} className='object-cover h-full w-full rounded-t-2xl' />
      </div>

      {/* Card Body */}
      <div className='card-body'>
        <h2 className='card-title'>{name}</h2>
        <p>{description}</p>
        <div className='card-actions justify-end mt-4'>
          <button className='btn btn-primary'>
            Explore
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  )
}
