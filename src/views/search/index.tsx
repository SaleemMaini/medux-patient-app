import { SearchFilters } from './search-filters'
import { SearchResultsSection } from './search-results'

export const SearchPageView = () => {
  return (
    <>
      {/* Search Results */}
      <div className='w-full'>
        <SearchResultsSection />
      </div>

      {/* Search Filters */}
      <div className='basis-1/2'>
        <SearchFilters />
      </div>
    </>
  )
}
