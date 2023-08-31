import { Select } from '@/components/select'

export const SearchBox = () => {
  // ** Vars
  const specializationsOptions = [
    { label: 'spec1', value: 'spec1' },
    { label: 'spec2', value: 'spec2' },
    { label: 'spec3', value: 'spec3' }
  ]

  return (
    <div className='card w-full bg-base-100 shadow-xl'>
      <div className='card-body'>
        <h4 className='card-title'>Search for appointments</h4>

        <div className='flex flex-row gap-3'>
          {/* Specialization Select */}
          <Select options={specializationsOptions} placeholder='Choose Specialization' />

          {/* City Select */}
          <Select options={specializationsOptions} placeholder='Choose City' />

          {/* District Select */}
          <Select options={specializationsOptions} placeholder='Choose District' />

          <button className='btn btn-primary'>Book Now</button>
        </div>
      </div>
    </div>
  )
}
