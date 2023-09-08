'use client'

import { getDoctorDetails } from '@/api/doctors'
import { Alert } from '@/components/ui/alert'
import { Doctor } from '@/types/doctors'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'
import { useEffect } from 'react'
import { FaLocationDot, FaUserDoctor } from 'react-icons/fa6'

export const DoctorDetailsCard = () => {
  // ** Hooks
  const params = useParams()
  const doctorDetailsQuery = useQuery(['doctorDetailsQuery'], {
    queryFn: () => getDoctorDetails(Number(params.id)),
    enabled: false
  })

  const data: Doctor = doctorDetailsQuery.data?.data?.data.doctor

  useEffect(() => {
    doctorDetailsQuery.refetch()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (doctorDetailsQuery.isLoading) {
    return <p>loading..</p>
  }

  if (doctorDetailsQuery.isSuccess && data) {
    // ** Destructure
    const { avatar, name,  city, district, specialization, summary } = data

    // ** Vars
    const location = `${district?.name}, ${city?.name}`

    return (
      <div className='card w-full card-side bg-base-100 shadow-xl min-h-fit items-center p-5'>
        {/* Avatar */}
        <div className='h-48 min-w-fit'>
          <img src={avatar} alt={name} className='object-cover h-full w-full rounded-2xl' />
        </div>

        {/* Details */}
        <div className='card-body pt-4 flex flex-col gap-2'>
          {/* Name */}
          <h2 className='card-title text-3xl'>{name}</h2>

          {/* Location  */}
          <div className='flex items-center gap-2'>
            <FaUserDoctor />
            <span>{specialization.name}</span>
          </div>

          {/* Specialization */}
          <div className='flex items-center gap-2'>
            <FaLocationDot />
            <span>{location}</span>
          </div>

          {/* Description */}
          <p>{summary}</p>
        </div>
      </div>
    )
  }

  if (doctorDetailsQuery.isSuccess && !data) {
    return <Alert text='No data found...' type='error' />
  }

  return null
}
