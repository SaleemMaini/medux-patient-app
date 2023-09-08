type Option = {
  label: string
  value: string | number
}

type Props = {
  options: Option[]
  placeholder: string
}

export const Select = (props: Props) => {
  // ** Props
  const { options, placeholder } = props

  return (
    <select className='select select-bordered w-full max-w-xs appearance-none'>
      <option disabled selected>
        {placeholder}
      </option>
      {options.map(opt => {
        return (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        )
      })}
    </select>
  )
}
