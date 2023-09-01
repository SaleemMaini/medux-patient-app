import { Gender } from '@/types/others'
import { Checkbox } from '../form-elements/checkbox'
import { PiGenderIntersexBold } from 'react-icons/pi'

type Props = {
  selectedGender: string[]
  onChangeGenderFilter: (type: Gender) => void
}

export const GenderFilter = (props: Props) => {
  // ** Props
  const { onChangeGenderFilter, selectedGender } = props

  return (
    <>
      <div className='flex gap-1 items-center ms-1 mb-2'>
        <PiGenderIntersexBold size='24' />
        <h3 className='font-semibold'>Gender</h3>
      </div>

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
