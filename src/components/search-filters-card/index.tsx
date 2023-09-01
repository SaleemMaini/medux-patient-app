'use client'
import { FiltersOptions, SearchMetadata } from '@/types/search'
import { useState } from 'react'
import { SpecializationFilter } from './specialization-filter'
import { GenderFilter } from './gender-filter'
import { Gender } from '@/types/others'

export const SearchFiltersCard = () => {
  // ** States
  const [selectedFiltersOption, setSelectedFiltersOptions] = useState<FiltersOptions>({
    specializations: [],
    gender: []
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
    if (oldArray.includes(id)) {
      const index = oldArray.findIndex(v => v === id)
      oldArray.splice(index, 1)

      setSelectedFiltersOptions(s => ({ ...s, specializations: oldArray }))

      return
    }

    const newArray = oldArray?.length ? [...oldArray, id] : [id]
    setSelectedFiltersOptions(s => ({ ...s, specializations: newArray }))
  }

  const onChangeGenderFilter = (type: Gender) => {
    const oldArray = selectedFiltersOption.gender
    if (oldArray.includes(type)) {
      const index = oldArray.findIndex(v => v === type)
      oldArray.splice(index, 1)

      setSelectedFiltersOptions(s => ({ ...s, gender: oldArray }))

      return
    }

    const newArray = oldArray?.length ? [...oldArray, type] : [type]
    setSelectedFiltersOptions(s => ({ ...s, gender: newArray }))
  }

  return (
    <div className='card bg-base-100 h-96 p-5 sticky top-20'>
      <SpecializationFilter
        checkedOptions={selectedFiltersOption.specializations}
        data={metadata.specializations}
        onChangeSpecializationFilter={onChangeSpecializationFilter}
      />

      {/* Divider */}
      <div className='divider' />

      <GenderFilter onChangeGenderFilter={onChangeGenderFilter} selectedGender={selectedFiltersOption.gender} />
    </div>
  )
}
