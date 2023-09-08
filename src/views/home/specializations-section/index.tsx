import { SpecializationCard } from '@/components/specialization/specialization-card'
import { Specialization } from '@/types/specializations'

type Props = {
  specializations: Specialization[]
}
export const SpecializationsSection = (props: Props) => {
  // ** Props
  const { specializations } = props

  return (
    <div className='bg-primary  py-20 min-h-full -mt-2'>
      <div className='container'>
        {/* Title */}
        <div className='flex gap-3 items-center mb-7 text-white'>
          <span className='w-10 border-b-4 border-white block' />
          <h2 className='text-2xl	font-extrabold'>Book from top specialties</h2>
        </div>

        {/* Specializations */}
        <div className='grid grid-cols-3 gap-8 '>
          {specializations.map(s => {
            return <SpecializationCard key={s.id} data={s} />
          })}
        </div>
      </div>
    </div>
  )
}
