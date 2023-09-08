import clsx from 'clsx'
import { FaRegSquareCheck } from 'react-icons/fa6'

type Props = {
  date: Date
  disabled: boolean
  isSelected: boolean
  onClick: () => void
}
export const AppointmentSlot = (props: Props) => {
  // ** Props
  const { date, disabled, isSelected, onClick } = props

  return (
    <button
      className={clsx('btn btn-primary h-20', {
        'btn-outline': !isSelected
      })}
      disabled={disabled}
      onClick={onClick}
    >
      {date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
      {/* Check icon */}
      {isSelected ? <FaRegSquareCheck size='22' /> : null}
    </button>
  )
}
