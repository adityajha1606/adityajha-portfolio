import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { SectionRule } from '@/components/ui/SectionRule'
import { ClickableHeading } from '@/components/ui/ClickableHeading'
import { Card } from '@/components/ui/Card'
import { Tag } from '@/components/ui/Tag'
import { Button } from '@/components/ui/Button'
import { Marquee } from '@/components/ui/Marquee'

// ── City data for the typographic city list ──
const cities = [
  { name: 'Solapur', year: '2004' },
  { name: 'Aurangabad', year: '2006' },
  { name: 'Pune', year: '--' },
  { name: 'Mumbai', year: '--' },
  { name: 'Kolhapur', year: '--' },
  { name: 'Indore', year: '--' },
  { name: 'Nagpur', year: '--' },
  { name: 'Nashik', year: '--' },
  { name: 'Delhi', year: '2018' },
  { name: 'Gurgaon', year: '--' },
  { name: 'Hyderabad', year: '2022' },
  { name: 'Chennai', year: '2024', active: true },
]

// ── Marque content (personal register, distinct from hero marque) ──
const aboutMarqueeItems = [
  'Solapur Born',
  'Chennai-Adjacent',
  'Defensive Midfielder',
  'Diary Smuggler',
  'Maximalist',
  'Qawali Evangelist',
  'District Champion (Once, Proudly)',
  'Professional Over-Engineer',
  'Pessimist by Day',
  'Optimist by Stubbornness',
]

export default function AboutPage() {
  return (
    <>
      {/* ════════════════════════════════════════════════
          S1 — OPENING STATEMENT (split grid)
          bone left · ink right
      ════════════════════════════════════════════════ */}
      <section className="grid grid-cols-1 md:grid-cols-2 border-b-[3px] border-ink">
        {/* ── LEFT (bone) ── */}
        <div className="bg-bone flex flex-col justify-center px-8 md:px-12 lg:px-16 py-16 md:py-24 border-r-0 md:border-r-[3px] border-ink">
          <p className="font-mono text-[11px] font-bold uppercase tracking-[0.12em] text-ink/50 mb-4">
            About · Aditya Jha
          </p>

          {/* Stamp */}
          <span className="inline-block font-mono text-[10px] font-bold uppercase tracking-[0.12em] border-2 border-fault text-fault px-3 py-1.5 mb-8">
            SRMIST · CSE · 2024–2028
          </span>

          <h1 className="font-display font-extrabold text-[clamp(3rem,8vw,5rem)] leading-[0.92] tracking-[-0.03em] text-ink mb-6">
            Aditya<br />Jha<span className="text-fault">.</span>
          </h1>

          <p className="font-body font-medium text-lg text-ink/70 max-w-md mb-8 leading-relaxed">
            I write code like I write poetry: too many revisions, an unhealthy attachment
            to semicolons, and a tendency to make things harder than they needed to be on
            purpose. ML by day, SDE by night, defensive midfielder always. I keep a diary
            nobody&apos;s allowed to read and a GitHub everyone&apos;s invited to judge.
          </p>

          {/* Status pill */}
          <div className="inline-flex items-center gap-2 bg-strike border-[3px] border-ink px-4 py-2 font-mono text-[11px] font-bold uppercase tracking-[0.08em] text-ink w-fit mb-12">
            <span className="w-[7px] h-[7px] rounded-full bg-ink animate-[pulse_2s_ease-in-out_infinite]" />
            Open · 2027 Internships
          </div>

          <div>
            <Button variant="primary" href="/contact">
              Get in Touch ↓
            </Button>
          </div>
        </div>

        {/* ── RIGHT (ink) ── */}
        <div className="bg-ink flex flex-col justify-center px-8 md:px-12 lg:px-16 py-16 md:py-24">
          <h2 className="font-display font-extrabold text-[clamp(3rem,6vw,5rem)] leading-[0.9] tracking-[-0.04em] text-bone">
            Building<br />With Love<br /><span className="text-strike">(and Mild Obsession).</span>
          </h2>
          <p className="font-body font-medium text-bone/65 mt-6 max-w-sm leading-relaxed">
            CS undergrad who believes over-engineering is just engineering with passion,
            empathy is an underrated tech stack, and the assist always outscores the goal
            - on the pitch and in the pull request.
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          MARQUEE — personal register (between S1 & S2)
      ════════════════════════════════════════════════ */}
      <Marquee items={aboutMarqueeItems} />

      {/* ════════════════════════════════════════════════
          S2 — ORIGIN
      ════════════════════════════════════════════════ */}
      <SectionWrapper id="origin" className="relative">
        {/* Ghost number */}
        <span className="absolute right-8 top-4 font-display font-extrabold text-[180px] text-ink/4 leading-none pointer-events-none select-none">
          02
        </span>

        <div className="flex items-center gap-3 pb-4 mb-8 border-b-[3px] border-ink">
          <span className="font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-ink/50">
            02 / Origin
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-[-0.02em]">
            Where It Started
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-start">
          <div>
            {/* Stat row */}
            <div className="flex flex-wrap gap-4 mb-8">
              <Card variant="default" className="p-5 min-w-[130px]">
                <span className="font-display font-extrabold text-4xl leading-none text-ink">12</span>
                <p className="font-mono text-[10px] font-bold uppercase tracking-[0.08em] text-ink/50 mt-1">
                  Cities lived in
                </p>
              </Card>
              <Card variant="default" className="p-5 min-w-[130px]">
                <span className="font-display font-extrabold text-4xl leading-none text-ink">2008</span>
                <p className="font-mono text-[10px] font-bold uppercase tracking-[0.08em] text-ink/50 mt-1">
                  First computer
                </p>
              </Card>
            </div>

            {/* DropCap paragraph */}
            <p className="dropcap font-body font-medium text-base leading-relaxed text-ink/85 mb-4 max-w-[75ch]">
              I remember the bubble wrap better than I remember most of third grade. Dad
              came home with this all-in-one PC - no separate tower, just a screen that
              quietly did everything, like a Swiss Army knife that also happened to
              compute. We did a small pooja for it, because in our house, new electronics
              got the same welcome as a new family member. I remember thinking{' '}
              <em>this important thing belongs to us now</em>, with the gravity of a kid
              who has clearly never owned anything important before.
            </p>

            <p className="font-body font-medium text-base leading-relaxed text-ink/85 mb-4 max-w-[75ch]">
              We had a dongle for internet and a strict time limit, so I learned to ration
              like a war economist. That&apos;s how I discovered I could watch Pokémon
              episodes on demand - at four years old, that felt less like a feature and
              more like discovering fire, except the fire also gave you Pikachu. The idea
              that a machine could just <em>give you exactly what you asked for</em> never
              really left me. It&apos;s basically my whole personality now, just pointed at
              APIs instead of cartoons.
            </p>

            <p className="font-body font-medium text-base leading-relaxed text-ink/85 mb-4 max-w-[75ch]">
              Years later I wrote my first line of HTML in Dr. Angela Yu&apos;s Udemy
              course, had the classic &ldquo;oh, <em>that&apos;s</em> how the internet
              works&rdquo; moment, and immediately concluded I was basically a founder.
              Then I found StatQuest - a YouTube channel where a man explains gradient
              descent using stick figures and, occasionally, a song - and realized you
              could be a colossal nerd and still be likable. Possibly even cool. This was
              a personal revelation roughly on par with the Pokémon thing.
            </p>

            <p className="font-body font-medium text-base leading-relaxed text-ink/85 mb-4 max-w-[75ch]">
              Around the same time I found Opta, the people who turn twenty-two grown men
              kicking a ball into a spreadsheet, and something clicked properly. ML and
              software development didn&apos;t arrive separately - they showed up in the
              same week, through football, like two friends who turn out to know each
              other from a completely different context. I decided: I will build systems,
              train models, and eventually pretend to understand football tactics better
              than the actual coaches. Still working on that last part.
            </p>

            {/* PullQuote 1 — yellow */}
            <blockquote className="font-display font-extrabold text-2xl md:text-3xl leading-tight border-l-[6px] border-strike pl-6 my-8 tracking-[-0.01em]">
              &ldquo;I always thought the assist meant more than the goal.&rdquo;
            </blockquote>

            <p className="font-body font-medium text-sm text-ink/50 -mt-4 mb-4">
              Possibly because I have a complicated relationship with taking credit.
            </p>
          </div>

          {/* Photo card */}
          <div className="border-[3px] border-ink shadow-[8px_8px_0_var(--color-ink)] bg-ink max-w-[200px] aspect-[3/4] flex flex-col overflow-hidden">
            <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a]">
              <span className="font-display font-extrabold text-6xl text-strike">AJ</span>
            </div>
            <div className="bg-strike border-t-[3px] border-ink px-3 py-1.5 font-mono text-[9px] font-bold uppercase tracking-[0.08em] text-ink">
              Aditya Jha · Solapur · 2008 · pre-existential crisis, post-pooja
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionRule />

      {/* ════════════════════════════════════════════════
          S3 — FOOTBALL
      ════════════════════════════════════════════════ */}
      <SectionWrapper id="football" className="relative">
        <span className="absolute right-8 top-4 font-display font-extrabold text-[180px] text-ink/4 leading-none pointer-events-none select-none">
          03
        </span>

        <div className="flex items-center gap-3 pb-4 mb-8 border-b-[3px] border-ink">
          <span className="font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-ink/50">
            03 / Football
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-[-0.02em]">
            The Tactical Brain
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            {/* Blue stat row */}
            <div className="flex flex-wrap gap-4 mb-8">
              <Card variant="blue" className="p-5 min-w-[130px]">
                <span className="font-display font-extrabold text-4xl leading-none text-ink">U‑15</span>
                <p className="font-mono text-[10px] font-bold uppercase tracking-[0.08em] text-ink/50 mt-1">
                  District Level
                </p>
              </Card>
              <Card variant="blue" className="p-5 min-w-[130px]">
                <span className="font-display font-extrabold text-4xl leading-none text-ink">9</span>
                <p className="font-mono text-[10px] font-bold uppercase tracking-[0.08em] text-ink/50 mt-1">
                  Age first played
                </p>
              </Card>
            </div>

            <p className="font-body font-medium text-base leading-relaxed text-ink/85 mb-4 max-w-[75ch]">
              I was never the guy who scored the bicycle kick everyone still talks about
              at reunions. I was the guy who made sure the team didn&apos;t concede in the
              83rd minute because somebody forgot to track back - the metronome, the
              deeply unglamorous job of being the reason things{' '}
              <em>didn&apos;t</em> fall apart. I had a thing called the
              &ldquo;pausa&rdquo;: knowing exactly when to slow the game to a crawl and
              when to detonate it. In my age group I was, modestly, one of the best
              defensively and athletically - which is sports-speak for &ldquo;fast, and
              extremely annoying to play against.&rdquo; I&apos;d score when the team
              genuinely needed it, because someone has to, but the assist always felt like
              the better story: set someone else up to be the hero, then watch from
              midfield like a proud, slightly smug parent.
            </p>

            <div className="flex flex-wrap gap-2 mt-4">
              <Tag>Defensive Midfielder</Tag>
              <Tag>The Metronome</Tag>
              <Tag>District Level</Tag>
              <Tag>Opta</Tag>
              <Tag>PPDA</Tag>
              <Tag>xT</Tag>
            </div>
          </div>

          <div>
            <p className="font-body font-medium text-base leading-relaxed text-ink/85 mb-4 max-w-[75ch]">
              Football and code run on the same engine, honestly. You inherit players - or
              legacy code - with real limitations, and your job is to build a structure
              that makes them look better than they have any right to. You solve problems
              inside constraints, you adapt mid-match, you manage space, or state, or
              both, badly, at 2 AM. Shipping a formation and shipping a product require
              exactly the same kind of stubbornness, and roughly the same amount of
              yelling at a whiteboard.
            </p>

            <Button variant="default" href="/work" className="mt-2">
              See Football Impact Rating →
            </Button>

            {/* PullQuote — red left border */}
            <blockquote className="font-display font-extrabold text-xl md:text-2xl leading-tight border-l-[6px] border-fault pl-6 my-8 tracking-[-0.01em]">
              &ldquo;Football and code live in the same mental space - usually
              rent-free.&rdquo;
            </blockquote>
          </div>
        </div>
      </SectionWrapper>

      <SectionRule />

      {/* ════════════════════════════════════════════════
          S4 — CITIES
      ════════════════════════════════════════════════ */}
      <SectionWrapper id="cities" className="relative">
        <span className="absolute right-8 top-4 font-display font-extrabold text-[180px] text-ink/4 leading-none pointer-events-none select-none">
          04
        </span>

        <div className="flex items-center gap-3 pb-4 mb-8 border-b-[3px] border-ink">
          <span className="font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-ink/50">
            04 / Cities
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-[-0.02em]">
            12 Cities
          </h2>
        </div>

        {/* Loss / Gain cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="bg-ink text-bone border-[3px] border-ink p-6">
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-bone/40 mb-3">
              What It Cost
            </p>
            <p className="font-body font-medium text-sm leading-relaxed text-bone/75">
              Childhood friendships with an expiration date stamped on them before
              they&apos;d even started. A &ldquo;home city&rdquo; that exists only as a
              rumor I tell people at parties. The simple luxury of being known in a place
              before you&apos;ve had to perform for it - never had that, wouldn&apos;t
              recognize it if it introduced itself.
            </p>
          </div>
          <div className="bg-strike border-[3px] border-ink p-6">
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-ink/50 mb-3">
              What It Built
            </p>
            <p className="font-body font-medium text-sm leading-relaxed text-ink">
              A brain that reads a room faster than most people read a text notification.
              Emotional maturity that arrived a few years ahead of schedule, uninvited
              but, in hindsight, extremely useful. An extroversion that isn&apos;t a
              performance so much as a survival skill that got so good at its job it
              started passing as a personality trait. And, somehow, against all logistics,
              a childish heart that refused every single eviction notice life tried to
              serve it.
            </p>
          </div>
        </div>

        {/* City list */}
        <div className="mb-10">
          {cities.map(({ name, year, active }) => (
            <div
              key={name}
              className="grid grid-cols-[1fr_auto] items-baseline py-3.5 border-b border-ink/10 last:border-b-0 hover:bg-strike/10 hover:pl-2 transition-all cursor-pointer"
            >
              <span
                className={`font-display font-extrabold text-2xl md:text-3xl tracking-[-0.02em] leading-none ${
                  active ? 'text-strike' : 'text-ink'
                }`}
              >
                {name}
              </span>
              <span className="font-mono text-sm text-ink/50 flex items-center gap-3">
                {year}
                {active && (
                  <span className="w-[8px] h-[8px] rounded-full bg-strike animate-[pulse_2s_ease-in-out_infinite]" />
                )}
              </span>
            </div>
          ))}
        </div>

        <p className="font-body font-medium text-base leading-relaxed text-ink/85 max-w-[75ch]">
          My dad&apos;s government job came with a built-in moving truck. Every couple of
          years: new city, new school, a new accent to half-learn before everyone could
          tell I was faking it, a new social hierarchy to crack like a system with no
          documentation and a hostile onboarding process. I never got the luxury of being
          known before I opened my mouth, so I learned to read a room before I&apos;d
          even finished walking into it - who&apos;s barely holding it together,
          who&apos;s actually fine, who&apos;s <em>performing</em> fine. Eyes don&apos;t
          lie, even when everything else does. I still run on that.
        </p>
      </SectionWrapper>

      <SectionRule />

      {/* ════════════════════════════════════════════════
          S5 — CRAFT PHILOSOPHY
      ════════════════════════════════════════════════ */}
      <SectionWrapper id="craft" className="relative">
        <span className="absolute right-8 top-4 font-display font-extrabold text-[180px] text-ink/4 leading-none pointer-events-none select-none">
          05
        </span>

        <div className="flex items-center gap-3 pb-4 mb-8 border-b-[3px] border-ink">
          <span className="font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-ink/50">
            05 / Craft
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-[-0.02em]">
            How I Build
          </h2>
        </div>

        {/* PullQuote — red left border */}
        <blockquote className="font-display font-extrabold text-2xl md:text-3xl leading-tight border-l-[6px] border-fault pl-6 my-8 tracking-[-0.01em]">
          &ldquo;I over-engineer things. People say it like it&apos;s an insult. I have
          never once taken it as one.&rdquo;
        </blockquote>

        <p className="font-body font-medium text-base leading-relaxed text-ink/85 mb-4 max-w-[75ch]">
          Minimalism can keep knocking. I&apos;m not home. I&apos;m a hyper-detailing
          enthusiast - I will raise the bar past what was asked, past what was expected,
          past the point where most people would even notice, purely because the noticing
          was never the point. There&apos;s a very specific high in making something more
          than it needed to be, and I am, unapologetically, chasing it the way other
          people chase a personal best.
        </p>

        <p className="font-body font-medium text-base leading-relaxed text-ink/85 mb-8 max-w-[75ch]">
          I think code deserves the same care you&apos;d give a relationship you actually
          intend to keep. How you name things. How the pieces talk to each other. The
          rhythm a well-built system falls into once you finally stop fighting it.
          It&apos;s the same part of the brain that writes a bad poem at 1 AM or sketches
          a formation that probably won&apos;t work but might. Building is art with a
          compiler attached. It asks for love. Skip the love and the thing still runs,
          technically - the way a relationship &ldquo;still works&rdquo; when
          nobody&apos;s actually talking anymore.
        </p>

        {/* Evidence cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card variant="default" className="p-6">
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-ink/50 mb-3">
              The NMDC Moment
            </p>
            <p className="font-body italic font-medium text-sm leading-relaxed text-ink/85">
              The project got approved. Real people, with actual deadlines and actual
              managers breathing down their necks, used it instead of three WhatsApp
              groups and a prayer. It saved 2–3 weeks of miscommunication between sites
              that had previously been running on vibes and forwarded screenshots. That
              was the first time I felt the gap between &ldquo;it runs&rdquo; and
              &ldquo;it helps someone&rdquo; - and I&apos;ve been chasing that gap ever
              since, the way some people chase a high score.
            </p>
          </Card>
          <Card variant="yellow" className="p-6">
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-ink/50 mb-3">
              The Script That Over‑Engineered Itself
            </p>
            <p className="font-body italic font-medium text-sm leading-relaxed text-ink/85">
              I wrote a play once. My friends read it and said, not unkindly, &ldquo;this
              is over-engineered.&rdquo; I said thank you. Not sarcastically - genuinely.
              If people can feel the amount of effort you buried in something, the effort
              did its job. In my book, &ldquo;over-engineered&rdquo; isn&apos;t a
              critique. It&apos;s a five-star review with terrible PR.
            </p>
          </Card>
        </div>
      </SectionWrapper>

      <SectionRule />

      {/* ════════════════════════════════════════════════
          S6 — INNER LIFE
      ════════════════════════════════════════════════ */}
      <SectionWrapper id="inner-life" className="relative">
        <span className="absolute right-8 top-4 font-display font-extrabold text-[180px] text-ink/4 leading-none pointer-events-none select-none">
          06
        </span>

        <div className="flex items-center gap-3 pb-4 mb-8 border-b-[3px] border-ink">
          <span className="font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-ink/50">
            06 / Inner Life
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-[-0.02em]">
            What Else
          </h2>
        </div>

        {/* Poem card */}
        <Card variant="default" className="p-8 mb-8">
          <p className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-ink/50 mb-5">
            FROM THE DIARY · UNTITLED
          </p>
          <div className="font-body italic font-medium text-base leading-loose border-l-[4px] border-strike pl-5 text-ink">
            The city changes but the weight stays the same,<br />
            I unpack myself into every new room -<br />
            hang my habits on unfamiliar nails,<br />
            and call it home before morning comes.<br />
            <br />
            Some things travel light.<br />
            I am not one of them.
          </div>
        </Card>

        {/* Interest cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-ink text-bone border-[3px] border-ink p-5">
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-bone/40 mb-3">
              Films
            </p>
            <p className="font-body font-medium text-sm leading-relaxed text-bone/80">
              <strong>Parasite.</strong> 12 Angry Men. Mad Max: Fury Road. Grave of the
              Fireflies. Dune. The Dark Knight. Joker. Black Friday. PK. Cinema that
              earns its runtime instead of just filling it - I have very little patience
              for movies that are two and a half hours long for no reason other than
              confidence.
            </p>
          </div>
          <div className="border-[3px] border-ink p-5">
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-ink/50 mb-3">
              Music
            </p>
            <p className="font-body font-medium text-sm leading-relaxed text-ink/85">
              Qawali is the genre, full stop. <strong>Nusrat Fateh Ali Khan</strong> is
              god, and I will not be entertaining counterarguments. Kendrick Lamar is the
              closest thing in English - <em>Good Kid, M.A.A.D City</em> will never be
              topped, and I&apos;ve stopped pretending I&apos;m open-minded about this.
              I&apos;m in it for the lyrics: the intricate, clever ones that hit
              differently the third time you actually sit with them instead of just having
              them on in the background like furniture.
            </p>
          </div>
          <div className="bg-strike border-[3px] border-ink p-5">
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-ink/50 mb-3">
              The Diary
            </p>
            <p className="font-body font-medium text-sm leading-relaxed text-ink/85">
              I carry a little diary everywhere, which is either deeply old-fashioned or
              deeply unhinged depending on who you ask. My thoughts go in and come out as
              poems - Hindi and English, love and grief and limerence and melancholy,
              occasionally in the same poem because apparently I contain multitudes and
              none of them are organized. The day I wrote my first one, I felt seen. Not
              by anyone else. By myself. That was, somehow, enough.
            </p>
          </div>
          <div className="border-[3px] border-ink p-5">
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-ink/50 mb-3">
              What I Watch
            </p>
            <p className="font-body font-medium text-sm leading-relaxed text-ink/85">
              Documentary YouTube about literally anything. Serbian mafia at 2 AM.
              Chinese education models. Demon whisperers - real ones, allegedly. Music
              band feuds from decades I wasn&apos;t alive for. The subject doesn&apos;t
              matter; what gets me every time is watching someone be genuinely,
              embarrassingly obsessed with something. I find it more inspiring than most
              motivational content, and considerably more entertaining.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionRule />

      {/* ════════════════════════════════════════════════
          S7 — MOTTOS
      ════════════════════════════════════════════════ */}
      <SectionWrapper id="mottos" className="relative">
        <span className="absolute right-8 top-4 font-display font-extrabold text-[180px] text-ink/4 leading-none pointer-events-none select-none">
          07
        </span>

        <div className="flex items-center gap-3 pb-4 mb-8 border-b-[3px] border-ink">
          <span className="font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-ink/50">
            07 / Mottos
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-[-0.02em]">
            What Organises Me
          </h2>
        </div>

        {/* Full‑bleed yellow pull quote */}
        <blockquote className="font-display font-extrabold text-2xl md:text-4xl leading-tight tracking-[-0.02em] bg-strike border-[3px] border-ink p-8 mb-10">
          &ldquo;Prepare for hell. Wake up loving it anyway.&rdquo;
        </blockquote>

        {/* Motto cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card variant="yellow" className="p-8">
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-ink/50 mb-4">
              Antonio Gramsci · via Aditya Jha
            </p>
            <blockquote className="font-display font-extrabold text-2xl leading-tight tracking-[-0.01em] mb-4">
              &ldquo;Pessimism of intellect, optimism of will.&rdquo;
            </blockquote>
            <p className="font-body font-medium text-sm leading-relaxed text-ink/80">
              Plan for everything. Run every bad scenario in advance, because the world
              is tough and the challenges will come for all of us eventually, no
              exceptions, no VIP line. But wake up loving it anyway - yourself, other
              people, the whole inconvenient mess of it. It&apos;s a beautiful world and
              I&apos;m a beautiful, slightly over-engineered part of it. That&apos;s the
              balance I try to hold.
            </p>
          </Card>
          <Card variant="ink" className="p-8">
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-bone/40 mb-4">
              Personal · Found in the diary
            </p>
            <blockquote className="font-display font-extrabold text-2xl leading-tight tracking-[-0.01em] text-bone mb-4">
              &ldquo;Humans are meant to create, not consume.&rdquo;
            </blockquote>
            <p className="font-body font-medium text-sm leading-relaxed text-bone/70">
              The day I wrote my first poem, I understood the difference. Consuming is
              finding yourself in collages of other people&apos;s work - borrowed shapes,
              secondhand feelings. Creating is projecting yourself fully: vulnerable,
              authentic, a one-to-one twin of the thing you actually made. That&apos;s
              the real stuff. Everything else is just scrolling with extra steps.
            </p>
          </Card>
        </div>
      </SectionWrapper>

      <SectionRule />

      {/* ════════════════════════════════════════════════
          S8 — CLOSER
      ════════════════════════════════════════════════ */}
      <SectionWrapper id="contact" className="relative">
        <span className="absolute right-8 top-4 font-display font-extrabold text-[180px] text-ink/4 leading-none pointer-events-none select-none">
          08
        </span>

        <div className="flex items-center gap-3 pb-4 mb-8 border-b-[3px] border-ink">
          <span className="font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-ink/50">
            08 / Contact
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-[-0.02em]">
            Let&apos;s Talk
          </h2>
        </div>

        <p className="font-body font-medium text-xl leading-relaxed text-ink mb-8 max-w-[75ch]">
          I want to wake up, look in the mirror, and see someone smiling back - someone
          whose work made something easier for someone else, who built things with love
          and meant both words equally. That&apos;s the long game. I&apos;m playing it,
          badly some days, but I&apos;m playing it.
        </p>

        <div className="flex flex-wrap gap-4 mb-12">
          <Button variant="primary" href="mailto:adityajha1606@gmail.com">
            Email Me
          </Button>
          <Button variant="default" href="/contact">
            Book a Call →
          </Button>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 whitespace-nowrap border-[3px] px-5 py-2.5 font-display font-extrabold text-[13px] uppercase tracking-wide no-underline transition-all duration-150 border-ink bg-fault text-bone shadow-[4px_4px_0_var(--color-ink)] hover:translate-x-[6px] hover:translate-y-[6px] hover:shadow-[2px_2px_0_var(--color-ink)]"
          >
            Grab My Resume (PDF)
          </a>
        </div>

        {/* Auth stamp — slightly rotated */}
        <div className="inline-block font-mono text-[10px] font-bold uppercase tracking-[0.12em] leading-relaxed border-2 border-fault text-fault px-4 py-2.5 -rotate-2 origin-center">
          AUTHORED BY<br />
          ADITYA JHA<br />
          SRMIST · 2026<br />
          HARD COPY v2
        </div>
      </SectionWrapper>
    </>
  )
}