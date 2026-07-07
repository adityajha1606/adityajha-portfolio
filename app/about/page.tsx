import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { SectionRule } from '@/components/ui/SectionRule'
import { Card, type CardVariant } from '@/components/ui/Card'
import { Tag } from '@/components/ui/Tag'
import { Button } from '@/components/ui/Button'
import { Marquee } from '@/components/ui/Marquee'
import EducationTimeline from '@/components/about/EducationTimeline'

// ── City data (corrected) ──
const cities = [
  { name: 'Aurangabad', year: '2005' },
  { name: 'Solapur', year: '2013' },
  { name: 'Pune', year: null },
  { name: 'Mumbai', year: null },
  { name: 'Kolhapur', year: null },
  { name: 'Indore', year: null },
  { name: 'Nagpur', year: null },
  { name: 'Nashik', year: null },
  { name: 'Delhi', year: '2018' },
  { name: 'Gurgaon', year: null },
  { name: 'Hyderabad', year: '2022' },
  { name: 'Chennai', year: '2024', active: true },
]

// ── Marquee items ──
const aboutMarqueeItems = [
  'Solapur Born',
  '12 Cities Survived',
  'Defensive Midfielder',
  'Backend First',
  'ML Second',
  'Diary Carrier',
  'Qawali Loud',
  'Over-Engineer by Diagnosis',
  'Pessimism of Intellect',
  'Optimism of Will',
  'Aurangabad U-15',
  'Chennai Made',
]

// ── Poem (em dashes replaced with hyphens) ──
const poem = `If you were the sun,
I would be Icarus.
I would still rise toward you -
not out of courage,
but out of fear.
Fear of never touching your warmth,
fear of standing still
while regret gnaws at me
for never trying.

If you were the sun,
I would be Icarus.
I would chart your path from afar,
orbiting in silence,
hoping you'd glance my way -
hoping you'd finally see me
in the quiet spaces between your rays.

If you were the sun,
I would be Icarus.
I would stitch wings
with trembling hands -
wings sewn from fragile breath,
from words I never dared to say,
from thoughts of you
that clouded my every sky.
And I would know,
as I stitched,
just how little time they'd last.

If you were the sun,
I would be Icarus.
I would fly,
knowing well you could never be reached,
knowing you'd burn me -
not enough to die,
just enough to remember.

If you were the sun,
I would be Icarus.
And I wouldn't scream as I fell -
I would only hope
that in that single, sacred moment
when I drew closest,
you saw me ablaze.
That you saw me -
and looked back, even just once.

If you were the sun,
I would be Icarus.
And I would laugh even as I fell -
because to fall
is proof I once soared.

If you were the sun,
I would be Icarus.
For I always knew I would fall.
And still,
I chose to fly
towards you.`

// ── Shared section header ──
function SectionHeader({ index, eyebrow, title }: { index: string; eyebrow: string; title: string }) {
  return (
    <div className="pb-5 mb-10 border-b-[3px] border-ink">
      <p className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-ink/35 mb-2">
        {index} / {eyebrow}
      </p>
      <h2 className="font-display font-extrabold text-[clamp(2rem,5vw,3rem)] leading-[0.95] tracking-[-0.03em]">
        {title}
      </h2>
    </div>
  )
}

export default function AboutPage() {
  return (
    <>
      {/* ══════════════════════════════════════════════════
          COLD OPEN
      ══════════════════════════════════════════════════ */}
      <section className="grid grid-cols-1 md:grid-cols-2 border-b-[3px] border-ink">
        {/* LEFT — bone */}
        <div className="bg-bone flex flex-col justify-center px-10 md:px-14 lg:px-20 py-20 md:py-28 border-r-0 md:border-r-[3px] border-ink">
          <p className="font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-ink/35 mb-5">
            About · Aditya Jha · SRMIST CSE 2024–2028
          </p>

          <h1 className="font-display font-extrabold text-[clamp(3.5rem,9vw,6rem)] leading-[0.88] tracking-[-0.04em] text-ink mb-7">
            Aditya<br />Jha<span className="text-fault">.</span>
          </h1>

          <p className="font-body font-medium text-base text-ink/65 max-w-[38ch] mb-10 leading-relaxed">
            Aspiring Backend/Infra engineer. I make ML systems actually run in
            production. Very strong feelings about cookie-based auth and
            vanishing gradients.
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-4">
            <div className="inline-flex items-center gap-2 bg-strike border-[3px] border-ink px-4 py-2.5 font-mono text-[11px] font-bold uppercase tracking-[0.1em] text-ink">
              <span className="w-2 h-2 rounded-full bg-ink animate-pulse" />
              Open · 2027 Internships
            </div>
            <Button variant="primary" href="/contact">
              Get in Touch ↓
            </Button>
          </div>
        </div>

        {/* RIGHT — image with Instagram link */}
        <div className="bg-ink flex items-center justify-center px-10 md:px-14 lg:px-20 py-20 md:py-28">
          <a
            href="https://www.instagram.com/adi_on_ig/"
            target="_blank"
            rel="noopener noreferrer"
            className="block border-[3px] border-fault shadow-[8px_8px_0_var(--color-fault)] max-w-[240px] w-full aspect-[3/4] overflow-hidden bg-bone/10 transition-all duration-150 hover:translate-x-[6px] hover:translate-y-[6px] hover:shadow-[2px_2px_0_var(--color-fault)]"
          >
            <img
              src="/images/aditya.jpeg"
              alt="Aditya Jha"
              className="w-full h-full object-cover"
              width={240}
              height={320}
            />
          </a>
        </div>
      </section>

      {/* MARQUEE */}
      <Marquee items={aboutMarqueeItems} />

      {/* ══════════════════════════════════════════════════
          S1 — WHAT I BUILD
      ══════════════════════════════════════════════════ */}
      <SectionWrapper id="what-i-build" className="relative">
        <span className="absolute right-6 top-2 font-display font-extrabold text-[clamp(120px,18vw,200px)] text-ink/[0.04] leading-none pointer-events-none select-none">
          01
        </span>

        <SectionHeader index="01" eyebrow="What I Build" title="The Work" />

        {/* Stat cards – simple & direct */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
          <Card variant="blue" noHover className="p-6">
            <span className="font-display font-extrabold text-3xl leading-none text-ink block mb-1">
              Backend
            </span>
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.1em] text-ink/45">
              Production-grade
            </p>
          </Card>
          <Card variant="yellow" noHover className="p-6">
            <span className="font-display font-extrabold text-3xl leading-none text-ink block mb-1">
              Machine Learning / AI
            </span>
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.1em] text-ink/45">
              Real-world data
            </p>
          </Card>
          <Card variant="teal" noHover className="p-6">
            <span className="font-display font-extrabold text-3xl leading-none text-bone block mb-1">
              Systems &amp; Infra
            </span>
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.1em] text-bone/40">
              Target · 2028
            </p>
          </Card>
        </div>

        <p className="font-body font-medium text-base leading-relaxed text-ink/90 mb-4 max-w-[72ch]">
          The job I want: backend and infrastructure, ML fluency as the sharp
          edge. Not the person writing Jupyter notebooks that never see
          production. The person building what they run on — the pipeline, the
          system, the thing that stays alive at 3&nbsp;AM when it really
          shouldn&apos;t.
        </p>
        <p className="font-body font-medium text-base leading-relaxed text-ink/90 mb-10 max-w-[72ch]">
          I want to understand the model <em>and</em> the environment it&apos;s
          living in. One without the other is either a science project or a
          house fire.
        </p>

        {/* Before the Code + NMDC – now coloured */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          <Card variant="coral" noHover className="p-6">
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-bone/60 mb-4">
              Before the Code
            </p>
            <p className="font-body font-medium text-sm leading-relaxed text-bone/90">
              I was engineering things before I knew the word for it. Rationing
              30 minutes of dongle internet like a job scheduler. Memorizing
              Pokémon type charts without realising that was a data structure.
              Filling notebooks with football formations nobody asked for. The
              tools showed up later. The brain was already doing the work.
            </p>
          </Card>
          <Card variant="purple" noHover className="p-6">
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-bone/60 mb-4">
              NMDC Project
            </p>
            <p className="font-body font-medium text-sm leading-relaxed text-bone/90 mb-4">
              Built an internal event management and reporting system for NMDC —
              India&apos;s largest iron ore producer, Government of India. Real
              departments, real deadlines. Previously they ran operations on
              forwarded screenshots and three WhatsApp groups. It ran. It
              helped. First time I felt the actual distance between
              "functional" and "useful."
            </p>
            <div className="flex flex-wrap gap-2">
              <Tag>ASP.NET Core</Tag>
              <Tag>Razor Pages</Tag>
              <Tag>SignalR</Tag>
              <Tag>SQL Server</Tag>
              <Tag>Tailwind</Tag>
            </div>
          </Card>
        </div>

        <div className="border-t-[3px] border-ink pt-6">
          <p className="font-body font-medium text-base leading-relaxed text-ink/70 max-w-[72ch]">
            Second year at SRMIST. 9.4 CGPA. Targeting ML Infra / SDE roles
            with real data depth by 2028 — and the increasingly specific hope
            that "35 LPA" is not as delusional as it sounds.
          </p>
        </div>
      </SectionWrapper>

      <SectionRule />

      {/* ══════════════════════════════════════════════════
          S2 — EDUCATION
      ══════════════════════════════════════════════════ */}
      <SectionWrapper id="education" className="relative">
        <span className="absolute right-6 top-2 font-display font-extrabold text-[clamp(120px,18vw,200px)] text-ink/[0.04] leading-none pointer-events-none select-none">
          02
        </span>
        <SectionHeader index="02" eyebrow="Education" title="The Path" />
        <EducationTimeline />
      </SectionWrapper>

      <SectionRule />

      {/* ══════════════════════════════════════════════════
          S3 — CRAFT
      ══════════════════════════════════════════════════ */}
      <SectionWrapper id="craft" className="relative">
        <span className="absolute right-6 top-2 font-display font-extrabold text-[clamp(120px,18vw,200px)] text-ink/[0.04] leading-none pointer-events-none select-none">
          03
        </span>

        <SectionHeader index="03" eyebrow="Craft" title="How I Build" />

        <blockquote className="font-display font-extrabold text-[clamp(1.4rem,3.5vw,2.25rem)] leading-tight border-l-[6px] border-fault pl-6 mb-10 tracking-[-0.02em] max-w-[28ch]">
          "I over-engineer things. People say it like it&apos;s an insult.
          I have never once taken it as one."
        </blockquote>

        <p className="font-body font-medium text-base leading-relaxed text-ink/90 mb-4 max-w-[72ch]">
          Minimalism can keep knocking. I&apos;m not home. I&apos;m a
          hyper-detailing enthusiast — I will raise the bar past what was asked,
          past what was expected, past the point where most people would even
          notice, purely because the noticing was never the point.
        </p>
        <p className="font-body font-medium text-base leading-relaxed text-ink/90 mb-10 max-w-[72ch]">
          I think code deserves the same care you&apos;d give a relationship you
          actually intend to keep. How you name things. How the pieces talk to
          each other. The rhythm a well-built system falls into once you finally
          stop fighting it. Building is art with a compiler attached. Skip the
          love and the thing still runs, technically — the way a relationship
          "still works" when nobody&apos;s actually talking anymore.
        </p>

        {/* Craft cards – coral, purple */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <Card variant="coral" className="p-6">
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-bone/60 mb-4">
              NMDC
            </p>
            <p className="font-body italic font-medium text-sm leading-relaxed text-bone/90">
              Real people, with actual deadlines and actual managers breathing
              down their necks, used it instead of three WhatsApp groups and a
              prayer. It saved 2–3 weeks of miscommunication between sites that
              had previously been running on vibes and forwarded screenshots.
              That was the first time I felt the gap between "it runs" and "it
              helps someone" — and I&apos;ve been chasing that gap ever since.
            </p>
          </Card>
          <Card variant="purple" noHover className="p-6">
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-bone/60 mb-4">
              The Play
            </p>
            <p className="font-body italic font-medium text-sm leading-relaxed text-bone/90">
              I wrote a play once. My friends read it and said, not unkindly,
              "this is over-engineered." I said thank you. Not sarcastically —
              genuinely. If people can feel the amount of effort you buried in
              something, the effort did its job. In my book, "over-engineered"
              isn&apos;t a critique. It&apos;s a five-star review with terrible
              PR.
            </p>
          </Card>
        </div>
      </SectionWrapper>

      <SectionRule />

      {/* ══════════════════════════════════════════════════
          S4 — ORIGIN
      ══════════════════════════════════════════════════ */}
      <SectionWrapper id="origin" className="relative">
        <span className="absolute right-6 top-2 font-display font-extrabold text-[clamp(120px,18vw,200px)] text-ink/[0.04] leading-none pointer-events-none select-none">
          04
        </span>

        <SectionHeader index="04" eyebrow="Origin" title="Where It Started" />

        {/* Stat cards – blue, coral */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
          <Card variant="blue" noHover className="p-6">
            <span className="font-display font-extrabold text-4xl leading-none text-ink block mb-1">
              12 Cities
            </span>
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.1em] text-ink/45">
              2004–2024
            </p>
          </Card>
          <Card variant="coral" noHover className="p-6">
            <span className="font-display font-extrabold text-4xl leading-none text-bone block mb-1">
              2008
            </span>
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.1em] text-bone/50">
              First PC · First Pooja
            </p>
          </Card>
        </div>

        {/* Horizontal city timeline */}
        <div className="relative overflow-x-auto -mx-8 md:-mx-14 lg:-mx-20 px-8 md:px-14 lg:px-20 pb-2 mb-10">
          <div className="relative flex items-start min-w-max py-2">
            <div
              className="absolute h-[2px] bg-ink/12"
              style={{ top: '5px', left: '44px', right: '44px' }}
            />
            {cities.map((city) => (
              <div
                key={city.name}
                className="relative flex flex-col items-center w-[88px] flex-shrink-0"
              >
                <div
                  className={`relative w-[11px] h-[11px] rounded-full z-10 flex-shrink-0 ${
                    city.active ? 'bg-fault' : 'bg-ink/40'
                  }`}
                />
                <span
                  className={`font-display font-bold text-[10px] leading-tight text-center mt-2 ${
                    city.active ? 'text-fault' : 'text-ink/60'
                  }`}
                >
                  {city.name}
                </span>
                {city.year && (
                  <span className="font-mono text-[9px] font-bold text-ink/30 mt-0.5">
                    {city.year}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        <p className="font-body font-medium text-base leading-relaxed text-ink/90 mb-4 max-w-[72ch]">
          Dad worked in sales. Sales moves you. That&apos;s the whole
          explanation.
        </p>
        <p className="font-body font-medium text-base leading-relaxed text-ink/90 mb-4 max-w-[72ch]">
          Every couple of years: new city, new school, new accent to fake for a
          semester. I never got to be known before I opened my mouth — I had to
          earn every room fast. That&apos;s where the room-reading came from.
          Eyes don&apos;t lie. I still live by that.
        </p>
        <p className="font-body font-medium text-base leading-relaxed text-ink/90 max-w-[72ch]">
          2008: Dad brought home an all-in-one PC. We did a small pooja for it
          first, because in our house, new technology got a proper welcome. I had
          30 minutes of dongle internet per day and I squeezed every second.
          Found Pokémon on demand. Decided a machine that gives you exactly what
          you ask for is basically magic. Never really updated that opinion.
        </p>
      </SectionWrapper>

      <SectionRule />

      {/* ══════════════════════════════════════════════════
          S5 — FOOTBALL
      ══════════════════════════════════════════════════ */}
      <SectionWrapper id="football" className="relative">
        <span className="absolute right-6 top-2 font-display font-extrabold text-[clamp(120px,18vw,200px)] text-ink/[0.04] leading-none pointer-events-none select-none">
          05
        </span>

        <SectionHeader index="05" eyebrow="Football" title="The Tactical Brain" />

        {/* Stat cards – blue, teal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
          <Card variant="blue" noHover className="p-6">
            <span className="font-display font-extrabold text-4xl leading-none text-ink block mb-1">
              U-15
            </span>
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.1em] text-ink/45">
              Aurangabad District Player
            </p>
          </Card>
          <Card variant="teal" noHover className="p-6">
            <span className="font-display font-extrabold text-4xl leading-none text-bone block mb-1">
              DM
            </span>
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.1em] text-bone/50">
              Defensive Midfielder · The Pausa
            </p>
          </Card>
        </div>

        {/* Cruyff quotes – purple, magenta */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          <Card variant="purple" noHover className="p-6">
            <blockquote className="font-display font-extrabold text-xl leading-tight tracking-[-0.01em] text-bone mb-3">
              "Playing football is very simple, but playing simple football is
              the hardest thing there is."
            </blockquote>
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.1em] text-bone/35">
              Johan Cruyff
            </p>
          </Card>
          <Card variant="magenta" noHover className="p-6">
            <blockquote className="font-display font-extrabold text-xl leading-tight tracking-[-0.01em] text-bone mb-3">
              "You play football with your head, and your legs are there to help
              you."
            </blockquote>
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.1em] text-bone/35">
              Johan Cruyff
            </p>
          </Card>
        </div>

        <p className="font-body font-medium text-base leading-relaxed text-ink/90 mb-4 max-w-[72ch]">
          I wasn&apos;t the goal scorer. I was the reason the goal scorer had
          the ball. Defensive midfielder — the metronome, the guy who wins it
          back, resets the shape, and makes the team look more organised than it
          actually is.
        </p>
        <p className="font-body font-medium text-base leading-relaxed text-ink/90 mb-4 max-w-[72ch]">
          The "pausa" was my thing: knowing when to hold the tempo and when to
          break it. In my age group I was one of the best defensively and
          athletically, which is the most restrained way I know how to say I was
          very good. I&apos;d score when the team needed it. But the assist
          always felt bigger — setting someone else up is a different kind of
          satisfaction, and it&apos;s the same instinct that makes me care about
          infrastructure over features, and systems over demos.
        </p>
        <p className="font-body font-medium text-base leading-relaxed text-ink/90 mb-8 max-w-[72ch]">
          Football found Opta. Opta found ML. ML found SDE. Same week. Never
          looked back.
        </p>

        {/* 🔴 Football Impact Rating → now a red button */}
        <div className="mb-12">
          <a
            href="/work"
            className="inline-flex items-center gap-1.5 whitespace-nowrap border-[3px] border-ink bg-fault text-bone px-5 py-2.5 font-display font-extrabold text-[13px] uppercase tracking-wide no-underline shadow-[4px_4px_0_var(--color-ink)] transition-all duration-150 hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[1px_1px_0_var(--color-ink)]"
          >
            Football Impact Rating →
          </a>
        </div>

        {/* The Club – Arsenal quote wall */}
        <p className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-ink/35 mb-5">
          The Club
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {[
            {
              quote:
                'Arsenal is in my blood and in my heart. I said I am a Gunner for life, I didn\'t lie. Once a Gunner, always a Gunner.',
              author: 'Thierry Henry',
              variant: 'teal' as const,
            },
            {
              quote:
                'When you play for Arsenal, you can\'t just go through the motions. You have to win games, no matter when, home or away, youth team or reserves.',
              author: 'Ian Wright',
              variant: 'coral' as const,
            },
            {
              quote:
                'Sometimes, there is no more exciting way to live than being a Gunner.',
              author: 'Kevin Campbell',
              variant: 'purple' as const,
            },
            {
              quote: 'I always thought the assist meant more than the goal.',
              author: 'Aditya Jha',
              variant: 'magenta' as const,
            },
          ].map(({ quote, author, variant }: { quote: string; author: string; variant: CardVariant }) => (
            <Card key={author} variant={variant} noHover className="p-6">
              <blockquote className="font-body font-medium text-sm leading-relaxed text-bone/80 mb-3">
                "{quote}"
              </blockquote>
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.1em] text-bone/35">
                {author}
              </p>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      <SectionRule />

      {/* ══════════════════════════════════════════════════
          S6 — CITIES (compact, low emphasis)
      ══════════════════════════════════════════════════ */}
      <SectionWrapper id="cities" className="relative">
        <span className="absolute right-6 top-2 font-display font-extrabold text-[clamp(120px,18vw,200px)] text-ink/[0.04] leading-none pointer-events-none select-none">
          06
        </span>

        <SectionHeader index="06" eyebrow="Cities" title="What It Cost & Built" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-coral border-[3px] border-ink p-6">
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-bone/60 mb-4">
              What It Cost
            </p>
            <p className="font-body font-medium text-sm leading-relaxed text-bone/90">
              Childhood friendships with expiry dates. A home city that exists
              only in conversation. The ease of being known before you&apos;ve
              earned it — never had that.
            </p>
          </div>
          <div className="bg-purple border-[3px] border-ink p-6">
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-bone/60 mb-4">
              What It Built
            </p>
            <p className="font-body font-medium text-sm leading-relaxed text-bone/90">
              A brain that reads rooms in seconds. Emotional maturity that
              arrived uninvited but on time. Extroversion that started as
              survival and became genuine. A childish heart that refused every
              eviction notice.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionRule />

      {/* ══════════════════════════════════════════════════
          S7 — INNER LIFE
      ══════════════════════════════════════════════════ */}
      <SectionWrapper id="inner-life" className="relative">
        <span className="absolute right-6 top-2 font-display font-extrabold text-[clamp(120px,18vw,200px)] text-ink/[0.04] leading-none pointer-events-none select-none">
          07
        </span>

        <SectionHeader index="07" eyebrow="Inner Life" title="What Else" />

        {/* Interest cards – teal, blue, yellow, coral */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          <Card variant="teal" noHover className="p-6">
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-bone/60 mb-4">
              Films
            </p>
            <p className="font-body font-medium text-sm leading-relaxed text-bone/90">
              Parasite. 12 Angry Men. Mad Max: Fury Road. Grave of the
              Fireflies. Dune. The Dark Knight. Joker. Black Friday. PK. Films
              that earn their runtime. No patience for two-and-a-half hours of
              confident pacing.
            </p>
          </Card>
          <Card variant="blue" noHover className="p-6">
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-ink/45 mb-4">
              Music
            </p>
            <p className="font-body font-medium text-sm leading-relaxed text-ink/90">
              Qawali. Full stop. Nusrat Fateh Ali Khan is not a debate. Kendrick
              Lamar is the closest thing in English —{' '}
              <em>Good Kid, M.A.A.D City</em> is untouchable and I&apos;ve
              stopped pretending otherwise. I&apos;m in it for the lyrics: the
              ones that hit differently the third time you actually sit with
              them.
            </p>
          </Card>
          <Card variant="yellow" noHover className="p-6">
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-ink/45 mb-4">
              The Diary
            </p>
            <p className="font-body font-medium text-sm leading-relaxed text-ink/90">
              I carry a little diary everywhere. Thoughts go in as prose, come
              out as poems — Hindi and English, love, grief, limerence, that
              specific feeling of being the new person in a city again. The day
              I wrote my first one, I felt seen. Not by anyone else. By myself.
              That was enough.
            </p>
          </Card>
          <Card variant="coral" noHover className="p-6">
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-bone/50 mb-4">
              2 AM YouTube
            </p>
            <p className="font-body font-medium text-sm leading-relaxed text-bone/80">
              Serbian mafia. Chinese education models. Demon whisperers — real
              ones, allegedly. Music feuds from decades I wasn&apos;t alive for.
              The subject never matters. What gets me every time is someone being
              genuinely, embarrassingly obsessed with something. More useful than
              most productivity content.
            </p>
          </Card>
        </div>

        {/* Poem — linked to Instagram with standard hover */}
        <a
          href="https://www.instagram.com/thoughts.by.adi/"
          target="_blank"
          rel="noopener noreferrer"
          className="block border-[3px] border-ink shadow-[8px_8px_0_var(--color-ink)] overflow-hidden cursor-pointer transition-all duration-150 hover:translate-x-[6px] hover:translate-y-[6px] hover:shadow-[2px_2px_0_var(--color-ink)]"
        >
          <div className="grid grid-cols-1 md:grid-cols-[320px_1fr]">
            <div className="bg-ink flex flex-col justify-between px-6 py-8 border-b-[3px] md:border-b-0 md:border-r-[3px] border-ink/20 min-h-[240px]">
              <div>
                <p className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-bone/35 mb-6">
                  From the Diary - Title
                </p>
                <h3 className="font-display font-extrabold text-[clamp(2.5rem,4vw,3.5rem)] leading-[0.88] tracking-[-0.03em] text-bone -ml-0.5">
                  Icarus<span className="text-fault">.</span>
                </h3>
              </div>
              <p className="font-mono text-[9px] font-bold uppercase tracking-[0.1em] text-bone/25 mt-8">
                Hindi &amp; English · Writing Since 2020
              </p>
            </div>

            <div className="bg-bone p-8 overflow-y-auto max-h-[460px] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:bg-fault [&::-webkit-scrollbar-track]:bg-transparent">
              <div className="border-l-[4px] border-fault pl-6">
                <p className="font-body italic font-medium text-sm leading-[2.2] text-ink/85 whitespace-pre-line">
                  {poem}
                </p>
              </div>
            </div>
          </div>
        </a>
      </SectionWrapper>

      <SectionRule />

      {/* ══════════════════════════════════════════════════
          S8 — MOTTOS (vertical stack)
      ══════════════════════════════════════════════════ */}
      <SectionWrapper id="mottos" className="relative">
        <span className="absolute right-6 top-2 font-display font-extrabold text-[clamp(120px,18vw,200px)] text-ink/[0.04] leading-none pointer-events-none select-none">
          08
        </span>

        <SectionHeader index="08" eyebrow="Mottos" title="What Organises Me" />

        <blockquote className="font-display font-extrabold text-[clamp(1.6rem,4vw,2.5rem)] leading-tight tracking-[-0.025em] bg-strike border-[3px] border-ink p-8 mb-10 max-w-[32ch]">
          "Prepare for hell. Wake up loving it anyway."
        </blockquote>

        <div className="flex flex-col gap-5">
          <Card variant="blue" noHover className="p-6">
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-ink/40 mb-4">
              Arsène Wenger
            </p>
            <blockquote className="font-display font-extrabold text-xl leading-tight tracking-[-0.01em] text-ink mb-3">
              "To achieve great things, you must first believe it."
            </blockquote>
            <p className="font-body text-xs text-ink/45 italic">
              No annotation. Stands alone.
            </p>
          </Card>
          <Card variant="yellow" noHover className="p-6">
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-ink/40 mb-4">
              Gramsci, via me
            </p>
            <blockquote className="font-display font-extrabold text-xl leading-tight tracking-[-0.01em] text-ink mb-3">
              "Pessimism of intellect, optimism of will."
            </blockquote>
            <p className="font-body font-medium text-xs leading-relaxed text-ink/70">
              Plan for the worst. Run every bad scenario in advance. The world
              is difficult and the challenges come for everyone — no exceptions,
              no VIP line. But wake up with love anyway. It&apos;s a beautiful
              world. I&apos;m a beautiful, slightly over-engineered part of it.
            </p>
          </Card>
          <Card variant="magenta" noHover className="p-6">
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-bone/50 mb-4">
              From the diary
            </p>
            <blockquote className="font-display font-extrabold text-xl leading-tight tracking-[-0.01em] text-bone mb-3">
              "Humans are meant to create, not consume."
            </blockquote>
            <p className="font-body font-medium text-xs leading-relaxed text-bone/75">
              Consuming is finding yourself in collages of other people&apos;s
              work. Creating is projecting yourself fully — vulnerable, one-to-one,
              a twin of something you actually made. That&apos;s the real stuff.
            </p>
          </Card>
        </div>
      </SectionWrapper>

      <SectionRule />

      {/* ══════════════════════════════════════════════════
          S9 — CLOSER
      ══════════════════════════════════════════════════ */}
      <SectionWrapper id="contact" className="relative">
        <span className="absolute right-6 top-2 font-display font-extrabold text-[clamp(120px,18vw,200px)] text-ink/[0.04] leading-none pointer-events-none select-none">
          09
        </span>

        <SectionHeader index="09" eyebrow="Contact" title="Let's Talk" />

        <p className="font-body font-medium text-xl leading-relaxed text-ink mb-4 max-w-[60ch]">
          I want to build things that run in production, help actual people, and
          were worth building right. Everything else is noise.
        </p>
        <p className="font-body font-medium text-base leading-relaxed text-ink/55 mb-10 max-w-[60ch]">
          If that sounds like someone you&apos;d work with — or argue with about
          football tactics — I&apos;m around.
        </p>

        <div className="flex flex-wrap gap-4">
          <Button variant="primary" href="mailto:adityajha1606@gmail.com">
            Email Me
          </Button>
          {/* 🔵 Book a Call → now a blue button */}
          <a
            href="/contact"
            className="inline-flex items-center gap-1.5 whitespace-nowrap border-[3px] border-ink bg-blue text-bone px-5 py-2.5 font-display font-extrabold text-[13px] uppercase tracking-wide no-underline shadow-[4px_4px_0_var(--color-ink)] transition-all duration-150 hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[1px_1px_0_var(--color-ink)]"
          >
            Book a Call →
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 whitespace-nowrap border-[3px] border-ink bg-fault text-bone px-5 py-2.5 font-display font-extrabold text-[13px] uppercase tracking-wide no-underline shadow-[4px_4px_0_var(--color-ink)] transition-all duration-150 hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[1px_1px_0_var(--color-ink)]"
          >
            Grab Resume (PDF)
          </a>
        </div>
      </SectionWrapper>
    </>
  )
}