'use client'

import { TextInput } from '@/components/form-elements/text-input'
import { LoginInputs } from '@/types/others'
import { useState } from 'react'

export const LoginPageView = () => {
  // ** States
  const [loginInputs, setLoginInputs] = useState<LoginInputs>({
    email: '',
    password: ''
  })

  // ** Handlers
  const onChangeLoginInput = (value: string, field: 'email' | 'password') => {
    setLoginInputs(prevState => ({ ...prevState, [field]: value }))
  }

  console.log('liginInputs', loginInputs)

  return (
    <div className='hero min-h-screen bg-base-200'>
      <div className='hero-content flex-col lg:flex-row-reverse'>
        {/* Welcome Content */}
        <div className='text-center lg:text-left ms-10'>
          <h1 className='text-5xl font-bold'>Welcome to Medux App!</h1>
          <p className='py-6'>
            Thank you for choosing our Doctor Appointment App for your healthcare needs. We are here to make managing
            your appointments as easy as possible.
          </p>
        </div>

        {/* Login Form */}
        <div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
          <div className='card-body'>
            {/* Email */}
            <TextInput
              label='Email'
              placeholder='johndoe@gmail.com'
              value={loginInputs.email}
              onChange={val => onChangeLoginInput(val, 'email')}
            />

            {/* Password */}
            <TextInput
              label='Password'
              type='password'
              value={loginInputs.password}
              onChange={val => onChangeLoginInput(val, 'password')}
            />

            {/* Login Button */}
            <div className='form-control mt-4'>
              <button className='btn btn-primary'>Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
