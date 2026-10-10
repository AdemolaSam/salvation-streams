import { ArrowRight, Play, Lock, Star } from 'lucide-react'
import Section from '../components/Section'
import Reveal from '../components/Reveal'
import SmartImage from '../components/SmartImage'
import Icon from '../components/Icon'
import AnimatedCounter from '../components/AnimatedCounter'
import Card from '../components/Card'
import Button from '../components/Button'
import {
  hero, impactCounters, impactCountersUpdated, activities, about,
  events, testimonies, sermons, givingFunds, brand,
} from '../data/siteContent'

const marqueeItems = ['Medical Outreach', 'Crusade Rallies', 'Relief Distribution', 'Discipleship', 'Global Missions']

export default function Home() {
  const featuredSermon = sermons.find((s) => s.featured) || sermons[0]

  return (
    <>
      {/* 1. Hero */}
      <section className="relative min-h-[680px] flex items-end overflow-hidden">
        <SmartImage
          src={hero.image}
          alt="Crowd gathered at a Salvation Streams outreach crusade"
          className="absolute inset-0 w-full h-full scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-navy/30" />
        <div className="absolute inset-0 bg-grid-dark opacity-70" aria-hidden="true" />
        <div className="absolute -bottom-40 -left-24 w-[30rem] h-[30rem] bg-primary/30 blur-3xl rounded-full pointer-events-none" aria-hidden="true" />

        <div className="relative z-10 max-w-container mx-auto px-4 md:px-10 pb-16 pt-32 w-full">
          <p
            className="font-heading text-xs md:text-sm font-semibold uppercase tracking-[0.24em] text-secondary mb-5 animate-fade-up"
          >
            {hero.eyebrow}
          </p>
          <h1
            className="text-white text-4xl md:text-6xl font-bold leading-[1.05] max-w-3xl mb-6 animate-fade-up"
            style={{ animationDelay: '80ms' }}
          >
            {hero.headline}
          </h1>
          <p
            className="text-white/85 text-lg max-w-2xl mb-8 animate-fade-up"
            style={{ animationDelay: '160ms' }}
          >
            {hero.subheadline}
          </p>
          <div className="flex flex-wrap gap-4 mb-12 animate-fade-up" style={{ animationDelay: '240ms' }}>
            <Button to="/give" variant="primary">Give Now</Button>
            <Button to="/events" variant="ghost">See Upcoming Events</Button>
          </div>
          <div
            className="flex flex-wrap gap-x-10 gap-y-3 border-t border-white/20 pt-6 animate-fade-up"
            style={{ animationDelay: '320ms' }}
          >
            {hero.stats.map((stat) => (
              <div key={stat.label} className="flex items-center gap-2 text-white/90 text-sm font-semibold">
                <Icon name={stat.icon} size={18} className="text-secondary" />
                {stat.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Marquee ticker — signature red band */}
      <div className="bg-primary text-white py-3 overflow-hidden">
        <div className="flex w-max animate-marquee">
          {[0, 1].map((half) => (
            <div key={half} className="flex items-center shrink-0" aria-hidden={half === 1}>
              {marqueeItems.map((item) => (
                <span key={item} className="flex items-center font-heading font-semibold uppercase tracking-wide text-sm px-6">
                  {item}
                  <Star size={14} className="ml-6 fill-white" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* 3. Impact Counter Band */}
      <section className="relative bg-navy text-white py-16 overflow-hidden">
        <div className="absolute inset-0 bg-grid-dark" aria-hidden="true" />
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[42rem] h-56 bg-primary/25 blur-3xl rounded-full pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-container mx-auto px-4 md:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {impactCounters.map((c, i) => (
              <Reveal key={c.label} delay={i * 90}>
                <div className="text-3xl md:text-5xl font-bold text-primary font-heading tracking-tight">
                  <AnimatedCounter value={c.value} suffix={c.suffix} />
                </div>
                <div className="text-white/70 text-xs md:text-sm uppercase tracking-wide mt-2">{c.label}</div>
              </Reveal>
            ))}
          </div>
          <p className="text-center text-white/40 text-xs mt-8">{impactCountersUpdated}</p>
        </div>
      </section>

      {/* 4. Our Activities */}
      <Section className="bg-surface">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="eyebrow mb-4">What We Do</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Activities</h2>
          <p className="text-ink-muted text-lg">
            Bringing comprehensive physical and spiritual healing to communities in need.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {activities.map((a, i) => (
            <Reveal key={a.id} delay={i * 90} className="h-full">
              <Card className="group p-6 flex flex-col h-full">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4 transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                  <Icon name={a.icon} size={22} />
                </div>
                <h3 className="text-lg font-bold mb-2">{a.title}</h3>
                <p className="text-ink-muted text-sm mb-6 flex-grow">{a.shortDescription}</p>
                <a
                  href={`/activities#${a.id}`}
                  className="text-primary font-heading font-bold text-sm inline-flex items-center gap-1 mt-auto group/link"
                >
                  Learn More
                  <ArrowRight size={14} className="transition-transform duration-300 ease-move group-hover/link:translate-x-1" />
                </a>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 5. About Preview */}
      <Section className="bg-surface-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[420px] md:h-[500px] rounded-card overflow-hidden shadow-lift">
            <SmartImage
              src={about.pastorPortrait}
              alt={`Portrait of ${brand.pastorName}`}
              className="w-full h-full transition-transform duration-700 ease-enter hover:scale-105"
            />
          </div>
          <div>
            <span className="eyebrow mb-4">Our Heart</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Driven by Compassion. Guided by Faith.</h2>
            <p className="text-ink-muted text-lg leading-relaxed mb-6">{about.pastorBio[0]}</p>
            <a href="/about" className="link-underline inline-flex items-center gap-2 mb-8">
              Read Full Story <ArrowRight size={16} />
            </a>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card hoverable className="p-6">
                <h4 className="font-heading font-bold mb-2">Our Vision</h4>
                <p className="text-ink-muted text-sm">{about.vision}</p>
              </Card>
              <Card hoverable className="p-6">
                <h4 className="font-heading font-bold mb-2">Our Mission</h4>
                <p className="text-ink-muted text-sm">{about.mission}</p>
              </Card>
            </div>
          </div>
        </div>
      </Section>

      {/* 6. Upcoming Events Preview */}
      <Section className="bg-surface">
        <div className="flex flex-col sm:flex-row justify-between items-end gap-4 mb-10">
          <div>
            <span className="eyebrow mb-3">On The Ground</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-2">Upcoming Events</h2>
            <p className="text-ink-muted text-lg">Join us in the field or support from home.</p>
          </div>
          <Button to="/events" variant="outline" className="px-6 py-2.5 text-sm">See All Events</Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((e, i) => (
            <Reveal key={e.id} delay={i * 90} className="h-full">
              <Card className="group overflow-hidden h-full flex flex-col">
                <div className="h-48 relative overflow-hidden">
                  <SmartImage
                    src={e.image}
                    alt={`${e.title} in ${e.location}`}
                    className="w-full h-full transition-transform duration-700 ease-enter group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                  <div className="absolute top-4 left-4 bg-surface-container-high rounded-lg px-3 py-1.5 text-center shadow-sm">
                    <div className="font-heading font-bold text-primary leading-none">{e.day}</div>
                    <div className="text-[10px] font-semibold uppercase text-ink-muted">{e.month}</div>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-ink-muted text-sm mb-2">{e.location}</p>
                  <h3 className="font-bold text-lg mb-4 flex-grow">{e.title}</h3>
                  <a href="/events" className="text-primary font-heading font-bold text-sm flex items-center justify-between group/link">
                    View Details
                    <ArrowRight size={16} className="transition-transform duration-300 ease-move group-hover/link:translate-x-1" />
                  </a>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 7. Testimonies */}
      <Section className="bg-surface-container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="eyebrow mb-4">Voices</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Stories of Transformation</h2>
          <p className="text-ink-muted text-lg mb-8">
            Real lives touched and changed by the power of Christ and compassionate care.
          </p>
          <Button to="/testimonies" variant="outline" className="px-6 py-2.5 text-sm">Watch More Testimonies</Button>
        </div>
        <div className="flex overflow-x-auto no-scrollbar gap-6 pb-4 snap-x snap-mandatory">
          {testimonies.slice(0, 3).map((t) => (
            <div key={t.id} className="min-w-[300px] md:min-w-[380px] snap-center">
              <Card className="group h-full flex flex-col overflow-hidden">
              <div className="h-56 relative">
                <SmartImage src={t.image} alt={`${t.name}, testimony from ${t.location}`} className="w-full h-full opacity-90 transition-transform duration-700 ease-enter group-hover:scale-105" />
                <div className="absolute inset-0 bg-navy/40 flex flex-col items-center justify-center gap-2">
                  <div className="relative w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white">
                    <span className="absolute inset-0 rounded-full bg-primary/60 animate-pulse-ring" aria-hidden="true" />
                    <Play size={26} className="relative" />
                  </div>
                  {/* Captions visible by default — accessibility fix vs. "Enable Sound" pattern */}
                  <span className="bg-black/60 px-3 py-1 rounded text-white text-xs border border-white/20">
                    Captions on
                  </span>
                </div>
              </div>
              <div className="p-6">
                <p className="italic text-ink mb-4">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-heading font-bold">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">{t.name}</h4>
                    <p className="text-xs text-ink-muted">{t.location}</p>
                  </div>
                </div>
              </div>
              </Card>
            </div>
          ))}
        </div>
      </Section>

      {/* 8. Latest Sermon */}
      <section className="relative bg-navy text-white overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 bg-grid-dark" aria-hidden="true" />
        <div className="absolute -right-20 -top-20 w-96 h-96 bg-primary/30 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
        <div className="absolute -left-24 -bottom-24 w-96 h-96 bg-secondary/20 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-container mx-auto px-4 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <span className="inline-block border border-primary/40 bg-primary/10 text-secondary font-heading font-semibold text-xs px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
              Latest Message
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">{featuredSermon.title}</h2>
            <p className="text-white/80 text-lg mb-4">{featuredSermon.description}</p>
            <p className="text-white/60 text-sm mb-6">with {featuredSermon.speaker}</p>
            <div className="flex flex-wrap gap-4">
              <Button href="#" variant="light">
                <Play size={18} /> Watch Now
              </Button>
              <Button href={brand.social.youtube} variant="ghost">Subscribe on YouTube</Button>
            </div>
          </Reveal>
          <Reveal delay={120} className="relative rounded-card overflow-hidden shadow-lift aspect-video border border-white/10 group">
            <SmartImage src={featuredSermon.image} alt={featuredSermon.title} className="w-full h-full transition-transform duration-700 ease-enter group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white shadow-glow transition-transform duration-300 ease-enter group-hover:scale-110">
                <Play size={32} className="ml-1 fill-white" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 9. Give */}
      <Section className="bg-surface text-center">
        <span className="eyebrow mb-4">Generosity</span>
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Flow with Purpose</h2>
        <p className="text-ink-muted text-lg max-w-2xl mx-auto mb-10">
          Your generosity is the stream that carries hope, healing, and the Gospel to the ends of the earth.
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-10">
          {givingFunds.map((f, i) => (
            <Reveal key={f.id} delay={i * 80} className="h-full">
              <Card hoverable className="text-center p-6 h-full">
                <Icon name={f.icon} size={26} className="text-primary mx-auto mb-2" />
                <h3 className="font-heading font-bold text-sm">{f.label}</h3>
              </Card>
            </Reveal>
          ))}
        </div>
        <Button to="/give" variant="primary" className="px-10 py-4 text-lg">Give Now</Button>
        <p className="mt-4 text-ink-muted text-sm flex items-center justify-center gap-1.5">
          <Lock size={14} /> Secure, encrypted transactions.
        </p>
      </Section>
    </>
  )
}
