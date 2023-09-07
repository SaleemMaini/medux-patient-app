import { MainLayout } from '@/layout/main-layout'
import { DoctorPageLayoutView } from '@/views/doctor/layout'

type Props = {
  children: React.ReactNode
}
const SearchPageLayout = (props: Props) => {
  // ** Props
  const { children } = props

  return (
    <MainLayout>
      <DoctorPageLayoutView>{children}</DoctorPageLayoutView>
    </MainLayout>
  )
}

export default SearchPageLayout
