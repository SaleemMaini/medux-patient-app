import { Checkbox } from '../form-elements/checkbox'

type Props = {
  data: { id: number; name: string }[]
  checkedOptions: number[]
  onChangeSpecializationFilter: (id: number) => void
}

export const SpecializationFilter = (props: Props) => {
  // ** Props
  const { data, onChangeSpecializationFilter, checkedOptions } = props

  return (
    <>
      <h3 className='font-semibold'>Specialization</h3>
      {data.map(s => {
        const isChecked = Boolean(checkedOptions.includes(s.id))

        return (
          <Checkbox key={s.id} label={s.name} value={isChecked} onChange={() => onChangeSpecializationFilter(s.id)} />
        )
      })}
    </>
  )
}
