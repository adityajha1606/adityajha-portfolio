import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { ContactForm } from '@/components/contact/ContactForm';
import { ExternalLink } from '@/components/ui/ExternalLink';
import { siteConfig } from '@/data/site';

export default function ContactPage() {
  return (
    <SectionWrapper id="contact">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

        <div className="flex flex-col">
          <h1 className="font-display font-semibold text-ink-bright text-[clamp(36px,6vw,64px)] leading-[1.1] mb-6">
            Get in touch
          </h1>

          <a
            href={`mailto:${siteConfig.email}`}
            className="font-body text-ink-primary hover:text-gold transition-colors duration-150 mb-4"
          >
            {siteConfig.email}
          </a>

          <div className="flex items-baseline gap-2">
            <span className="font-body text-sm text-ink-secondary">
              Or book a call:
            </span>
            <ExternalLink
              href={siteConfig.calUrl}
              className="font-body text-sm text-gold hover:underline transition-colors duration-150"
            >
              30 min →
            </ExternalLink>
          </div>

          <p className="font-display italic text-ink-secondary text-[clamp(17px,2.2vw,22px)] leading-relaxed mt-12">
            The best work starts with a conversation.
          </p>
        </div>

        <div>
          <ContactForm />
        </div>

      </div>
    </SectionWrapper>
  );
}