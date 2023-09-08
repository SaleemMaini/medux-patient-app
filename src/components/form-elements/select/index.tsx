import { SelectOption } from '@/types/others'
import { ChangeEvent } from 'react'

type Props = {
  options: SelectOption[]
  placeholder: string
  selectedValue: any
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void
}

export const Select = (props: Props) => {
  // ** Props
  const { options, placeholder, selectedValue, onChange } = props

  return (
    <select className='select select-bordered w-full max-w-xs appearance-none' onChange={onChange}>
      <option disabled selected>
        {placeholder}
      </option>
      {options.map(opt => {
        return (
          <option key={opt.value} value={opt.value} selected={selectedValue === opt.value}>
            {opt.label}
          </option>
        )
      })}
    </select>
  )
}
