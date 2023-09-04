type Props = {
  children: React.ReactNode
}

export const DoctorPageLayoutView = (props: Props) => {
  // ** Props
  const { children } = props

  return (
    <div className='bg-base-200 py-10'>
      <div className='flex flex-row min-h-screen container'>{children}</div>
    </div>
  )
}
