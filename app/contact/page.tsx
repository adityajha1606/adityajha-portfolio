import { ContactForm } from '@/components/contact/ContactForm'
import { ExternalLink } from '@/components/ui/ExternalLink'
import { CopyButton } from '@/components/ui/CopyButton'
import { siteConfig } from '@/data/site'

export default function ContactPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
      {/* ── LEFT COLUMN — BONE background ── */}
      <div className="bg-bone flex flex-col justify-between p-8 md:p-16 md:pl-4 border-r-0 md:border-r-[3px] border-ink">
        <div>
          {/* Headline — pushed further left */}
          <h1 className="font-display font-extrabold text-[clamp(2.5rem,5vw,4rem)] leading-[1.05] text-ink mb-10 whitespace-nowrap md:whitespace-normal">
            Let&rsquo;s build<br />
            <span className="text-fault">something.</span>
          </h1>

          {/* Email + copy button */}
          <div className="flex items-center gap-2 mb-8 flex-wrap">
            <a
              href={`mailto:${siteConfig.email}`}
              className="font-body font-medium text-lg text-ink border-b-2 border-ink hover:border-fault transition-colors duration-150 no-underline"
            >
              {siteConfig.email}
            </a>
            <CopyButton text={siteConfig.email} />
          </div>

          {/* Social links */}
          <div className="flex gap-6 flex-wrap mb-6">
            <ExternalLink
              href="https://github.com/adityajha1606"
              className="font-mono text-xs font-medium uppercase tracking-[0.08em] text-ink border-b-2 border-transparent hover:border-strike transition-colors duration-150"
            >
              GitHub ↗
            </ExternalLink>
            <ExternalLink
              href="https://linkedin.com/in/jhaadi/"
              className="font-mono text-xs font-medium uppercase tracking-[0.08em] text-ink border-b-2 border-transparent hover:border-strike transition-colors duration-150"
            >
              LinkedIn ↗
            </ExternalLink>
            <ExternalLink
              href="/resume.pdf"
              className="font-mono text-xs font-medium uppercase tracking-[0.08em] text-ink border-b-2 border-transparent hover:border-strike transition-colors duration-150"
            >
              Resume ↗
            </ExternalLink>
            <ExternalLink
              href="https://dev.to/aditya_1606"
              className="font-mono text-xs font-medium uppercase tracking-[0.08em] text-ink border-b-2 border-transparent hover:border-strike transition-colors duration-150"
            >
              Dev.to ↗
            </ExternalLink>
          </div>

          {/* Cal.com link */}
          <a
            href={siteConfig.calUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-display font-extrabold text-sm uppercase tracking-wide border-b-2 border-ink pb-0.5 hover:gap-2 transition-all mt-2"
          >
            Book a call →
          </a>
        </div>

        {/* Lore line */}
        <p className="font-display font-extrabold italic text-ink/60 pt-8 mt-8 border-t-[3px] border-ink">
          The best work starts with a conversation.
        </p>
      </div>

      {/* ── RIGHT COLUMN — BONE background ── */}
      <div className="bg-bone flex flex-col justify-between p-8 md:p-16">
        <div>
          {/* Big headline — same top as left column */}
          <h2 className="font-display font-extrabold text-[clamp(3rem,6vw,6rem)] leading-[0.95] text-ink mb-12">
            Get in.<br />
            <span className="text-fault">Touch.</span>
          </h2>

          {/* Contact form */}
          <ContactForm />
        </div>
      </div>
    </div>
  )
}