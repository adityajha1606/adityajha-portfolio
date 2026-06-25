import Link from 'next/link'
import { Hero } from '@/components/home/Hero'
import { FeaturedWork } from '@/components/home/FeaturedWork'
import { ExperienceHighlight } from '@/components/home/ExperienceHighlight'
import { CredentialsGrid } from '@/components/home/CredentialsGrid'
import { StackPreview } from '@/components/home/StackPreview'
import { CurrentlyBuilding } from '@/components/home/CurrentlyBuilding'
import { LatestWritingPreview } from '@/components/home/LatestWritingPreview'
import { BeyondCodePreview } from '@/components/home/BeyondCodePreview'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { GoldRule } from '@/components/ui/GoldRule'
import { GoldDot } from '@/components/ui/GoldDot'

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

      <SectionWrapper id="experience">
        <Link href="/experience" className="group inline-block no-underline mb-6">
          <h2 className="font-display font-semibold text-2xl md:text-3xl text-gold group-hover:text-gold-bright transition-colors duration-150 flex items-center gap-2 border-b border-gold/30 group-hover:border-gold pb-0.5">
            Experience <GoldDot linkMode />
          </h2>
        </Link>
        <ExperienceHighlight />
      </SectionWrapper>

      <div className="max-w-content mx-auto px-6 md:px-12 lg:px-16">
        <GoldRule className="w-full" />
      </div>

      <SectionWrapper id="credentials">
        <CredentialsGrid />
      </SectionWrapper>

      <div className="max-w-content mx-auto px-6 md:px-12 lg:px-16">
        <GoldRule className="w-full" />
      </div>

      <SectionWrapper id="stack-preview">
        <StackPreview />
      </SectionWrapper>

      <div className="max-w-content mx-auto px-6 md:px-12 lg:px-16">
        <GoldRule className="w-full" />
      </div>

      <SectionWrapper id="currently-building">
        <Link href="/work" className="group inline-block no-underline mb-6">
          <h2 className="font-display font-semibold text-2xl md:text-3xl text-gold group-hover:text-gold-bright transition-colors duration-150 flex items-center gap-2 border-b border-gold/30 group-hover:border-gold pb-0.5">
            Currently Building <GoldDot linkMode />
          </h2>
        </Link>
        <CurrentlyBuilding />
      </SectionWrapper>

      <div className="max-w-content mx-auto px-6 md:px-12 lg:px-16">
        <GoldRule className="w-full" />
      </div>

      <SectionWrapper id="latest-writing">
        <LatestWritingPreview />
      </SectionWrapper>

      <div className="max-w-content mx-auto px-6 md:px-12 lg:px-16">
        <GoldRule className="w-full" />
      </div>

      <SectionWrapper id="beyond-code">
        <BeyondCodePreview />
      </SectionWrapper>
    </>
  )
}