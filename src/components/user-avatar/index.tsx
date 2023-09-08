'use client'

import { useAuth } from '@/app/hooks/useAuth'
import Link from 'next/link'

export const UserAvatar = () => {
  // ** Hooks
  const { isLoggedIn, logout, user } = useAuth()

  return (
    <>
      <div className='navbar-end'>
        {isLoggedIn ? (
          <div className='dropdown dropdown-bottom cursor-pointer dropdown-start'>
            <div tabIndex={0} className='avatar'>
              <div className='w-12 rounded-full'>
                <img
                  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfm8UnQUb93iMa_J1a9GuKRJ1LWIzTD8dxrA&usqp=CAU'
                  alt='user-avatar'
                />
              </div>
            </div>
            <ul tabIndex={0} className='dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52  -ms-40'>
              <li className='text-center mb-3'>
                <p className='text-lg '>{user?.name}</p>
              </li>
              <li>
                <button className='btn btn-sm' onClick={logout}>
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link href='/login' className='btn btn-sm'>
            Login
          </Link>
        )}
      </div>
    </>
  )
}
