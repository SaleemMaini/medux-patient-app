import { SearchFilters } from '../search-filters'
import { SearchResultsSection } from '../search-results'

export const SearchPageLayoutView = () => {
  return (
    <div className='bg-base-200'>
      <div className='flex flex-row min-h-screen container'>
        {/* Search Results */}
        <div className='w-full'>
          <SearchResultsSection />
        </div>

        {/* Search Filters */}
        <div className='basis-1/2'>
          <SearchFilters />
        </div>
      </div>
    </div>
  )
}
