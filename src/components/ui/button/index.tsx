import { ReactNode } from 'react'

type Props = {
  disabled: boolean
  children: ReactNode
  loading: boolean
  onClick?: () => void
  type?: 'submit' | 'button'
}

export const Button = (props: Props) => {
  // ** Props
  const { children, disabled, loading, type = 'button', onClick } = props

  return (
    <button className='btn btn-primary' disabled={disabled || loading} type={type} onClick={onClick}>
      {loading ? <span className='loading loading-spinner loading-md' /> : children}
    </button>
  )
}
