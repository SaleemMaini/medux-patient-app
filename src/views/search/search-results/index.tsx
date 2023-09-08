'use client'
import { getDoctors } from '@/api/doctors'
import { DoctorCard } from '@/components/doctors/doctor-card'
import { Doctor } from '@/types/doctors'
import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'next/navigation'
import {} from 'next/router'
import { useEffect, useState } from 'react'

export const SearchResultsSection = () => {
  // ** States
  const [searchResults, setSearchResults] = useState<Doctor[]>([])

  // ** Hooks
  const getDoctorsQuery = useQuery(['getDoctorsQuery'], {
    queryFn: getDoctors,
    enabled: false
  })
  const searchParams = useSearchParams()

  useEffect(() => {
    getDoctorsQuery.refetch()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  useEffect(() => {
    const doctors: Doctor[] = getDoctorsQuery.data?.data.data.doctors
    const cityId = searchParams.get('city')
    const districtId = searchParams.get('district')
    const specializationId = searchParams.get('specialization')

    if ((cityId || districtId || specializationId) && doctors?.length) {
      const filteredData = doctors.filter(
        doc => Number(doc.city.id) === Number(cityId) || Number(doc.specialization.id) === Number(specializationId)
      )

      setSearchResults(filteredData)
    } else if (doctors?.length) {
      setSearchResults(doctors)
    }
  }, [getDoctorsQuery.data?.data.data.doctors, searchParams])

  if (getDoctorsQuery.isLoading) {
    return (
      <div className='w-full text-center min-h-screen flex items-center justify-center'>
        <span className='loading loading-spinner text-primary loading-lg' />
      </div>
    )
  }

  return (
    <div className='py-10'>
      {/* Title */}
      <p className='text-xl font-semibold'>Search Results:</p>
      <span>{searchResults.length} results found</span>

      {/* Doctors */}
      <div className='grid grid-cols-3 gap-5 mt-2'>
        {searchResults.map(d => {
          return <DoctorCard key={d.id} data={d} />
        })}
      </div>
    </div>
  )
}
