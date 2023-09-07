'use client'

import { useAuth } from '@/app/hooks/useAuth'
import { TextInput } from '@/components/form-elements/text-input'
import { Button } from '@/components/ui/button'
import { LoginInputs } from '@/types/others'
import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'

export const LoginPageView = () => {
  // ** States
  const [loginInputs, setLoginInputs] = useState<LoginInputs>({
    email: '',
    password: ''
  })

  // ** Hooks
  const { login } = useAuth()
  const mutation = useMutation({
    mutationFn: () => {
      return login(loginInputs)
    }
  })

  // ** Conditions
  const disableLogin = !loginInputs.email || !loginInputs.password

  // ** Handlers
  const onChangeLoginInput = (value: string, field: 'email' | 'password') => {
    setLoginInputs(prevState => ({ ...prevState, [field]: value }))
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    mutation.mutate()
  }

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
        <form onSubmit={handleSubmit}>
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
                <Button disabled={disableLogin} loading={mutation.isLoading} type='submit'>
                  Login
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
