type Props = {
  label: string
  value: string
  onChange: (value: string) => void
  type?: 'text' | 'password'
  placeholder?: string
}

export const TextInput = (props: Props) => {
  // ** Props
  const { label, type = 'text', placeholder, value, onChange } = props

  return (
    <div className='form-control'>
      <label className='label'>
        <span className='label-text'>{label}</span>
      </label>
      <input
        type={type}
        placeholder={placeholder ?? label}
        className='input input-bordered'
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </div>
  )
}
