import Link from 'next/link'

type Navigation = {
  href: string
  title: string
}[]

export const Navbar = () => {
  const navigation: Navigation = [
    {
      href: '/',
      title: 'home'
    },
    {
      href: '/search',
      title: 'search'
    }
  ]

  return (
    <div className='navbar  sticky top-0 z-50 px-10 bg-base-100'>
      <div className='navbar-start'>
        {/* Mobile dropdown */}
        <div className='dropdown'>
          <label tabIndex={0} className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h8m-8 6h16' />
            </svg>
          </label>

          <ul tabIndex={0} className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'>
            {navigation.map(n => (
              <li key={n.title}>
                <Link href={n.href}>{n.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Logo */}
        <Link href='/' className=''>
          <img src={'/images/logo/logo-colored.svg'} width='50%' alt='logo' />
        </Link>
      </div>

      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal px-1'>
          {navigation.map(n => (
            <li key={n.title}>
              <Link href={n.href}>{n.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Login Button */}
      <div className='navbar-end'>
        <Link href='/login' className='btn btn-sm'>
          login
        </Link>
      </div>
    </div>
  )
}
