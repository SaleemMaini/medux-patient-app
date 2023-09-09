import { Specialization } from '@/types/specializations'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa6'

type Props = {
  data: Specialization
}

export const SpecializationCard = (props: Props) => {
  // ** Props
  const { data } = props
  const { id, image, name, summary } = data

  return (
    <div className='card w-full bg-base-100 shadow-xl min-h-fit hover:-translate-y-2 transition duration-200 cursor-pointer'>
      {/* Image */}
      <div className='h-64'>
        <img src={image} alt={name} className='object-cover h-full w-full rounded-t-2xl' />
      </div>

      {/* Card Body */}
      <div className='card-body'>
        <h2 className='card-title'>{name}</h2>
        <p>{summary.slice(0, 50)}...</p>
        <div className='card-actions justify-end mt-4'>
          <Link
            href={{
              pathname: '/search',
              query: {
                specialization: id
              }
            }}
            className='btn btn-primary'
          >
            Explore
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  )
}
