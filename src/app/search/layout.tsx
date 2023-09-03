import { SearchPageLayoutView } from '@/views/search/layout'

type Props = {
  children: React.ReactNode
}
const SearchPageLayout = (props: Props) => {
  // ** Props
  const { children } = props

  return <SearchPageLayoutView>{children}</SearchPageLayoutView>
}

export default SearchPageLayout
