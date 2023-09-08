import { Select } from '@/components/form-elements/select'
import { City } from '@/types/others'
import { Specialization } from '@/types/specializations'
import { BsSearch } from 'react-icons/bs'

type Props = {
  cities: City[]
  specializations: Specialization[]
}
export const SearchBox = (props: Props) => {
  // ** Props
  const { cities, specializations } = props

  // ** Vars
  const specializationsOptions = specializations.map(sp => ({ label: sp.name, value: sp.id }))
  const citiesOptions = cities.map(c => ({ label: c.name, value: c.id }))

  return (
    <div className='card w-full bg-base-100 shadow-xl'>
      <div className='card-body'>
        <h4 className='card-title'>Search for appointments</h4>

        <div className='flex flex-row gap-3'>
          {/* Specialization Select */}
          <Select options={specializationsOptions} placeholder='Choose Specialization' />

          {/* City Select */}
          <Select options={citiesOptions} placeholder='Choose City' />

          {/* District Select */}
          <Select options={specializationsOptions} placeholder='Choose District' />

          <button className='btn btn-primary'>
            Search
            <BsSearch size='20' />
          </button>
        </div>
      </div>
    </div>
  )
}
