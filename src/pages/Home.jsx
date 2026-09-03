import { ArrowRight, Play, Lock } from 'lucide-react'
import Section from '../components/Section'
import SmartImage from '../components/SmartImage'
import Icon from '../components/Icon'
import AnimatedCounter from '../components/AnimatedCounter'
import Button from '../components/Button'
import {
  hero, impactCounters, impactCountersUpdated, activities, about,
  events, testimonies, sermons, givingFunds, brand,
} from '../data/siteContent'

export default function Home() {
  const featuredSermon = sermons.find((s) => s.featured) || sermons[0]

  return (
    <>
      {/* 1. Hero */}
      <section className="relative min-h-[640px] flex items-end">
        <SmartImage
          src={hero.image}
          alt="Crowd gathered at a Salvation Streams outreach crusade"
          className="absolute inset-0 w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/70 to-navy/20" />
        <div className="relative z-10 max-w-container mx-auto px-4 md:px-10 pb-16 pt-32 w-full">
          <p className="text-secondary font-semibold uppercase tracking-widest text-sm mb-4">{hero.eyebrow}</p>
          <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight max-w-3xl mb-6">
            {hero.headline}
          </h1>
          <p className="text-white/85 text-lg max-w-2xl mb-8">{hero.subheadline}</p>
          <div className="flex flex-wrap gap-4 mb-12">
            <Button to="/give" variant="primary">Give Now</Button>
            <Button to="/events" variant="ghost">See Upcoming Events</Button>
          </div>
          <div className="flex flex-wrap gap-x-10 gap-y-3 border-t border-white/20 pt-6">
            {hero.stats.map((stat) => (
              <div key={stat.label} className="flex items-center gap-2 text-white/90 text-sm font-semibold">
                <Icon name={stat.icon} size={18} className="text-secondary" />
                {stat.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Impact Counter Band */}
      <section className="bg-navy text-white py-14">
        <div className="max-w-container mx-auto px-4 md:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {impactCounters.map((c) => (
              <div key={c.label}>
                <div className="text-3xl md:text-4xl font-bold text-accent font-heading">
                  <AnimatedCounter value={c.value} suffix={c.suffix} />
                </div>
                <div className="text-white/70 text-xs md:text-sm uppercase tracking-wide mt-2">{c.label}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-white/40 text-xs mt-8">{impactCountersUpdated}</p>
        </div>
      </section>

      {/* 3. Our Activities */}
      <Section className="bg-surface">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Activities</h2>
          <p className="text-ink-muted text-lg">
            Bringing comprehensive physical and spiritual healing to communities in need.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {activities.map((a) => (
            <div
              key={a.id}
              className="bg-white rounded-card p-6 shadow-sm hover:shadow-md transition-shadow border border-black/5 flex flex-col"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                <Icon name={a.icon} size={22} />
              </div>
              <h3 className="text-lg font-bold mb-2">{a.title}</h3>
              <p className="text-ink-muted text-sm mb-6 flex-grow">{a.shortDescription}</p>
              <a
                href={`/activities#${a.id}`}
                className="text-secondary font-bold text-sm inline-flex items-center gap-1 mt-auto hover:text-primary transition-colors"
              >
                Learn More <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>
      </Section>

      {/* 4. About Preview */}
      <Section className="bg-surface-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[420px] md:h-[500px] rounded-card overflow-hidden shadow-lg">
            <SmartImage
              src={about.pastorPortrait}
              alt={`Portrait of ${brand.pastorName}`}
              className="w-full h-full"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Driven by Compassion. Guided by Faith.</h2>
            <p className="text-ink-muted text-lg leading-relaxed mb-6">{about.pastorBio[0]}</p>
            <a href="/about" className="text-secondary font-bold inline-flex items-center gap-2 border-b-2 border-secondary pb-1 hover:text-primary transition-colors mb-8">
              Read Full Story <ArrowRight size={16} />
            </a>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-card border border-black/5">
                <h4 className="font-bold mb-2">Our Vision</h4>
                <p className="text-ink-muted text-sm">{about.vision}</p>
              </div>
              <div className="bg-white p-6 rounded-card border border-black/5">
                <h4 className="font-bold mb-2">Our Mission</h4>
                <p className="text-ink-muted text-sm">{about.mission}</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 5. Upcoming Events Preview */}
      <Section className="bg-surface">
        <div className="flex flex-col sm:flex-row justify-between items-end gap-4 mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Upcoming Events</h2>
            <p className="text-ink-muted text-lg">Join us in the field or support from home.</p>
          </div>
          <Button to="/events" variant="outline" className="px-6 py-2.5 text-sm">See All Events</Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((e) => (
            <div key={e.id} className="bg-white rounded-card overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-black/5 group">
              <div className="h-48 relative overflow-hidden">
                <SmartImage
                  src={e.image}
                  alt={`${e.title} in ${e.location}`}
                  className="w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/95 rounded-lg px-3 py-1.5 text-center shadow-sm">
                  <div className="font-bold text-primary leading-none">{e.day}</div>
                  <div className="text-[10px] font-semibold uppercase text-ink-muted">{e.month}</div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-ink-muted text-sm mb-2">{e.location}</p>
                <h3 className="font-bold text-lg mb-4">{e.title}</h3>
                <a href="/events" className="text-secondary font-bold text-sm flex items-center justify-between hover:text-primary transition-colors">
                  View Details <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 6. Testimonies */}
      <Section className="bg-surface-container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stories of Transformation</h2>
          <p className="text-ink-muted text-lg mb-8">
            Real lives touched and changed by the power of Christ and compassionate care.
          </p>
          <Button to="/testimonies" variant="outline" className="px-6 py-2.5 text-sm">Watch More Testimonies</Button>
        </div>
        <div className="flex overflow-x-auto no-scrollbar gap-6 pb-4 snap-x snap-mandatory">
          {testimonies.slice(0, 3).map((t) => (
            <div key={t.id} className="min-w-[300px] md:min-w-[380px] snap-center bg-white rounded-card overflow-hidden shadow-sm border border-black/5">
              <div className="h-56 relative">
                <SmartImage src={t.image} alt={`${t.name}, testimony from ${t.location}`} className="w-full h-full opacity-90" />
                <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center gap-2">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white">
                    <Play size={26} />
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
                  <div className="w-10 h-10 rounded-full bg-secondary/20 text-secondary flex items-center justify-center font-bold">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">{t.name}</h4>
                    <p className="text-xs text-ink-muted">{t.location}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 7. Latest Sermon */}
      <section className="bg-primary text-white relative overflow-hidden py-16 md:py-24">
        <div className="absolute -right-20 -top-20 w-96 h-96 bg-secondary/30 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-container mx-auto px-4 md:px-10 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-white/10 text-secondary font-semibold text-xs px-3 py-1 rounded-full mb-4">
              Latest Message
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{featuredSermon.title}</h2>
            <p className="text-white/80 text-lg mb-4">{featuredSermon.description}</p>
            <p className="text-white/60 text-sm mb-6">with {featuredSermon.speaker}</p>
            <div className="flex flex-wrap gap-4">
              <Button href="#" variant="secondary" className="bg-secondary hover:bg-secondary/90">
                <Play size={18} /> Watch Now
              </Button>
              <Button href={brand.social.youtube} variant="ghost">Subscribe on YouTube</Button>
            </div>
          </div>
          <div className="relative rounded-card overflow-hidden shadow-2xl aspect-video border-4 border-white/10">
            <SmartImage src={featuredSermon.image} alt={featuredSermon.title} className="w-full h-full" />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center text-primary-dark">
                <Play size={32} className="ml-1" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Give */}
      <Section className="bg-surface text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Flow with Purpose</h2>
        <p className="text-ink-muted text-lg max-w-2xl mx-auto mb-10">
          Your generosity is the stream that carries hope, healing, and the Gospel to the ends of the earth.
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-10">
          {givingFunds.map((f) => (
            <div key={f.id} className="p-6 rounded-card border-2 border-black/10 bg-white">
              <Icon name={f.icon} size={26} className="text-secondary mx-auto mb-2" />
              <h3 className="font-bold text-sm">{f.label}</h3>
            </div>
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
