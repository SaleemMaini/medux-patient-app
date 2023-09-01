import { Gender } from '@/types/others'
import { Checkbox } from '../form-elements/checkbox'

type Props = {
  selectedGender: string[]
  onChangeGenderFilter: (type: Gender) => void
}

export const GenderFilter = (props: Props) => {
  // ** Props
  const { onChangeGenderFilter, selectedGender } = props

  return (
    <>
      <h3 className='font-semibold'>Gender</h3>
      {/* Male */}
      <Checkbox label='Male' value={selectedGender.includes('male')} onChange={() => onChangeGenderFilter('male')} />

      {/* Female */}
      <Checkbox
        label='Female'
        value={selectedGender.includes('female')}
        onChange={() => onChangeGenderFilter('female')}
      />
    </>
  )
}
