import { ReactNode } from 'react'

type Props = {
  disabled: boolean
  children: ReactNode
  loading: boolean
  type?: 'submit' | 'button'
}

export const Button = (props: Props) => {
  // ** Props
  const { children, disabled, loading, type = 'button' } = props

  return (
    <button className='btn btn-primary' disabled={disabled || loading} type={type}>
      {loading ? <span className='loading loading-spinner loading-md' /> : children}
    </button>
  )
}
