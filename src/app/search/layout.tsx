import { MainLayout } from '@/layout/main-layout'
import { SearchPageLayoutView } from '@/views/search/layout'

type Props = {
  children: React.ReactNode
}
const SearchPageLayout = (props: Props) => {
  // ** Props
  const { children } = props

  return (
    <MainLayout>
      <SearchPageLayoutView>{children}</SearchPageLayoutView>
    </MainLayout>
  )
}

export default SearchPageLayout
