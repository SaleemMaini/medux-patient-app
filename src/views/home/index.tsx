import { DoctorsSection } from './doctors-section'
import { HomeHeroSection } from './hero-section'
import { SpecializationsSection } from './specializations-section'

export const HomePageView = () => {
  return (
    <div>
      <HomeHeroSection />
      <SpecializationsSection />
      <DoctorsSection />
    </div>
  )
}
