'use client'
import { FiltersOptions, SearchMetadata } from '@/types/search'
import { useState } from 'react'
import { SpecializationFilter } from './specialization-filter'

export const SearchFiltersCard = () => {
  // ** States
  const [selectedFiltersOption, setSelectedFiltersOptions] = useState<FiltersOptions>({
    specializations: []
  })

  // ** Vars
  const metadata: SearchMetadata = {
    specializations: [
      {
        id: 1,
        name: 'dentist'
      },
      { id: 2, name: 'eye' },
      {
        id: 3,
        name: 'child'
      },
      { id: 4, name: 'brain' }
    ]
  }

  // ** Handlers
  const onChangeSpecializationFilter = (id: number) => {
    const oldArray = selectedFiltersOption.specializations
    const newArray = oldArray?.length ? [...oldArray, id] : [id]

    setSelectedFiltersOptions(s => ({ ...s, specializations: newArray }))
  }

  return (
    <div className='card bg-base-100 h-96 p-5 sticky top-20'>
      <SpecializationFilter
        checkedOptions={selectedFiltersOption.specializations}
        data={metadata.specializations}
        onChangeSpecializationFilter={onChangeSpecializationFilter}
      />
    </div>
  )
}
