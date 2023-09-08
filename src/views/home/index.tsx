'use client'
import { useEffect } from 'react'
import { getHomePageData } from '@/api/others'
import { DoctorsSection } from './doctors-section'
import { HomeHeroSection } from './hero-section'
import { SpecializationsSection } from './specializations-section'
import { useQuery } from '@tanstack/react-query'
import { City } from '@/types/others'
import { Specialization } from '@/types/specializations'
import { Doctor } from '@/types/doctors'

export const HomePageView = () => {
  // ** Hooks
  const homePageQuery = useQuery(['homePageQuery'], {
    queryFn: getHomePageData,
    enabled: false
  })

  useEffect(() => {
    homePageQuery.refetch()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (homePageQuery.isLoading) {
    return (
      <div className='w-full text-center min-h-screen flex items-center justify-center'>
        <span className='loading loading-spinner text-primary loading-lg' />
      </div>
    )
  }

  const cities: City[] = homePageQuery.data?.data.data.cities
  const specializations: Specialization[] = homePageQuery.data?.data.data.specializations
  const topDoctors: Doctor[] = homePageQuery.data?.data.data.doctors.splice(0, 4)

  return (
    <div>
      <HomeHeroSection cities={cities} specializations={specializations} />
      <SpecializationsSection specializations={specializations} />
      <DoctorsSection topDoctors={topDoctors} />
    </div>
  )
}
