type Props = {
  children: React.ReactNode
}

export const SearchPageLayoutView = (props: Props) => {
  // ** Props
  const { children } = props

  return (
    <div className='bg-base-200'>
      <div className='flex flex-row min-h-screen container'>{children}</div>
    </div>
  )
}
