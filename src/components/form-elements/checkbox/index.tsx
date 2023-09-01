import { ChangeEvent } from 'react'

type Props = {
  label: string
  value: boolean
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const Checkbox = (props: Props) => {
  // ** Props
  const { label, value, onChange } = props

  return (
    <div className='form-control w-fit'>
      <label className='label cursor-pointer'>
        <input
          type='checkbox'
          checked={value}
          className='checkbox checkbox-secondary'
          onChange={onChange}
          style={{ transform: 'scaleX(-1)' }}
        />
        <span className='label-text ml-2'>{label}</span>
      </label>
    </div>
  )
}
