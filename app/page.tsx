import { Hero } from '@/components/home/Hero'
import { FeaturedWork } from '@/components/home/FeaturedWork'
import { ExperienceHighlight } from '@/components/home/ExperienceHighlight'
import { CredentialsGrid } from '@/components/home/CredentialsGrid'
import { StackPreview } from '@/components/home/StackPreview'
import { CurrentlyBuilding } from '@/components/home/CurrentlyBuilding'
import { LatestWritingPreview } from '@/components/home/LatestWritingPreview'
import { BeyondCodePreview } from '@/components/home/BeyondCodePreview'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { SectionRule } from '@/components/ui/SectionRule'
import { ClickableHeading } from '@/components/ui/ClickableHeading'
import { Marquee } from '@/components/ui/Marquee'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />

      <SectionWrapper id="selected-work">
        <FeaturedWork />
      </SectionWrapper>

      <div className="max-w-content mx-auto px-6 md:px-12 lg:px-16">
        <SectionRule className="w-full" />
      </div>

      <SectionWrapper id="experience">
        <ClickableHeading href="/experience" className="mb-6">
          Experience
        </ClickableHeading>
        <ExperienceHighlight />
      </SectionWrapper>

      <div className="max-w-content mx-auto px-6 md:px-12 lg:px-16">
        <SectionRule className="w-full" />
      </div>

      <SectionWrapper id="credentials">
        <CredentialsGrid />
      </SectionWrapper>

      <div className="max-w-content mx-auto px-6 md:px-12 lg:px-16">
        <SectionRule className="w-full" />
      </div>

      <SectionWrapper id="stack-preview">
        <StackPreview />
      </SectionWrapper>

      <div className="max-w-content mx-auto px-6 md:px-12 lg:px-16">
        <SectionRule className="w-full" />
      </div>

      <SectionWrapper id="currently-building">
        <CurrentlyBuilding />
      </SectionWrapper>

      <div className="max-w-content mx-auto px-6 md:px-12 lg:px-16">
        <SectionRule className="w-full" />
      </div>

      <SectionWrapper id="latest-writing">
        <LatestWritingPreview />
      </SectionWrapper>

      <div className="max-w-content mx-auto px-6 md:px-12 lg:px-16">
        <SectionRule className="w-full" />
      </div>

      <SectionWrapper id="beyond-code">
        <BeyondCodePreview />
      </SectionWrapper>
    </>
  )
}