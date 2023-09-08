'use client'
import { useState } from 'react'
import { Select } from '@/components/form-elements/select'
import { City } from '@/types/others'
import { Specialization } from '@/types/specializations'
import { BsSearch } from 'react-icons/bs'
import Link from 'next/link'

type Props = {
  cities: City[]
  specializations: Specialization[]
}
export const SearchBox = (props: Props) => {
  // ** Props
  const { cities, specializations } = props

  // ** States
  const [selectedCityId, setSelectedCityId] = useState<number | null>(null)
  const [selectedDistrictId, setSelectedDistrictId] = useState<number | null>(null)
  const [selectedSpecializationId, setSelectedSpecializationId] = useState<number | null>(null)

  // ** Vars
  const specializationsOptions = specializations.map(sp => ({ label: sp.name, value: sp.id }))
  const citiesOptions = cities.map(c => ({ label: c.name, value: c.id }))

  return (
    <div className='card w-full bg-base-100 shadow-xl'>
      <div className='card-body'>
        <h4 className='card-title'>Search for appointments</h4>

        <div className='flex flex-row gap-3'>
          {/* Specialization Select */}
          <Select
            options={specializationsOptions}
            placeholder='Choose Specialization'
            selectedValue={selectedSpecializationId}
            onChange={e => {
              setSelectedSpecializationId(Number(e.target.value))
            }}
          />

          {/* City Select */}
          <Select
            options={citiesOptions}
            placeholder='Choose City'
            selectedValue={selectedCityId}
            onChange={e => {
              setSelectedCityId(Number(e.target.value))
            }}
          />

          {/* District Select */}
          <Select
            options={specializationsOptions}
            placeholder='Choose District'
            selectedValue={selectedDistrictId}
            onChange={e => {
              setSelectedDistrictId(Number(e.target.value))
            }}
          />

          <Link
            href={{
              pathname: '/search',
              query: {
                city: selectedCityId,
                district: selectedDistrictId,
                specialization: selectedSpecializationId
              }
            }}
            className='btn btn-primary'
          >
            Search
            <BsSearch size='20' />
          </Link>
        </div>
      </div>
    </div>
  )
}
