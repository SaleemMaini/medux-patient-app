import { City } from '@/types/others'
import { SearchBox } from './search-box'
import { Specialization } from '@/types/specializations'

type Props = {
  cities: City[]
  specializations: Specialization[]
}
export const HomeHeroSection = (props: Props) => {
  // ** Props
  const { cities, specializations } = props

  return (
    <div
      className='hero min-h-screen indicator min-w-full'
      style={{
        backgroundImage: 'url(/images/hero-section-banner-2.jpg)'
      }}
    >
      <div className='indicator-item indicator-middle indicator-center  min-w-full min-h-full hero-overlay bg-opacity-20'></div>

      {/* Search Box */}
      <div className='indicator-item indicator-middle indicator-center w-8/12 min-h-fit'>
        <SearchBox cities={cities} specializations={specializations} />
      </div>
    </div>
  )
}
