import { Hero } from '@/components/home/Hero'
import { FeaturedWork } from '@/components/home/FeaturedWork'
import { StatsRow } from '@/components/home/StatsRow'
import { CurrentlyBuilding } from '@/components/home/CurrentlyBuilding'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { GoldRule } from '@/components/ui/GoldRule'

export default function HomePage() {
  return (
    <>
      <Hero />
      <SectionWrapper id="selected-work">
        <FeaturedWork />
      </SectionWrapper>
      <div className="max-w-content mx-auto px-6 md:px-12 lg:px-16">
        <GoldRule className="w-full" />
      </div>
      <SectionWrapper id="stats">
        <StatsRow />
      </SectionWrapper>
      <div className="max-w-content mx-auto px-6 md:px-12 lg:px-16">
        <GoldRule className="w-full" />
      </div>
      <SectionWrapper id="currently-building">
        <CurrentlyBuilding />
      </SectionWrapper>
    </>
  )
}