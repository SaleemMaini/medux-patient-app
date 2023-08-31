import { SearchBox } from './search-box'

export const HomeHeroSection = () => {
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
        <SearchBox />
      </div>
    </div>
  )
}
