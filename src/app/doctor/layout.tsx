import { MainLayout } from '@/layout/main-layout'

type Props = {
  children: React.ReactNode
}
const SearchPageLayout = (props: Props) => {
  // ** Props
  const { children } = props

  return <MainLayout>{children}</MainLayout>
}

export default SearchPageLayout
