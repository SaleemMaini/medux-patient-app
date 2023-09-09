'use client'

import { getDoctorDetails } from '@/api/doctors'
import { Alert } from '@/components/ui/alert'
import { Doctor } from '@/types/doctors'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'
import { ReactNode, useEffect } from 'react'
import { FaLocationDot, FaMailchimp, FaPhone, FaRegEnvelope, FaUserDoctor } from 'react-icons/fa6'

export const DoctorDetailsCard = () => {
  // ** Hooks
  const params = useParams()
  const doctorDetailsQuery = useQuery(['doctorDetailsQuery'], {
    queryFn: () => getDoctorDetails(Number(params.id)),
    enabled: false
  })

  const data: Doctor = doctorDetailsQuery.data?.data?.data.doctor

  const Wrapper = ({ children }: { children: ReactNode }) => {
    return <div className='card w-full card-side bg-base-100 shadow-xl min-h-fit items-center p-5'>{children}</div>
  }

  useEffect(() => {
    doctorDetailsQuery.refetch()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (doctorDetailsQuery.isLoading) {
    return (
      <Wrapper>
        <div className='w-full text-center'>
          <span className='loading loading-spinner text-primary loading-lg' />
        </div>
      </Wrapper>
    )
  }

  if (doctorDetailsQuery.isSuccess && data) {
    // ** Destructure
    const { avatar, name, city, district, specialization, summary, phone, email } = data

    // ** Vars
    const location = `${district?.name}, ${city?.name}`

    return (
      <Wrapper>
        {/* Avatar */}
        <div className='p-3 h-48 min-w-fit'>
          <img src={avatar} alt={name} className='object-cover h-full w-full rounded-2xl' />
        </div>

        {/* Details */}
        <div className='card-body pt-4 flex flex-col gap-2'>
          {/* Name */}
          <h2 className='card-title text-3xl'>{name}</h2>

          {/* Specialization */}
          <div className='flex items-center gap-2'>
            <FaUserDoctor />
            <span>{specialization.name}</span>
          </div>

          <div className='flex gap-8'>
            {/* Location  */}
            <div className='flex items-center gap-2'>
              <FaLocationDot />
              <span>{location}</span>
            </div>
            {/* Phone  */}
            <div className='flex items-center gap-2'>
              <FaPhone />
              <span>{phone}</span>
            </div>

            {/* Email  */}
            <div className='flex items-center gap-2'>
              <FaRegEnvelope />
              <span>{email}</span>
            </div>
          </div>

          {/* Summary */}
          <p>{summary}</p>
        </div>
      </Wrapper>
    )
  }

  if (doctorDetailsQuery.isSuccess && !data) {
    return <Alert text='No data found...' type='error' />
  }

  return null
}
