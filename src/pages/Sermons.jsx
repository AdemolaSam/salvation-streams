import { useMemo, useState } from 'react'
import { Play, Search, Youtube, Music2, Headphones, Mail } from 'lucide-react'
import Section from '../components/Section'
import Reveal from '../components/Reveal'
import SmartImage from '../components/SmartImage'
import Card from '../components/Card'
import Button from '../components/Button'
import { sermons, brand } from '../data/siteContent'

export default function Sermons() {
  const [query, setQuery] = useState('')
  const featured = sermons.find((s) => s.featured) || sermons[0]
  const rest = sermons.filter((s) => s.id !== featured.id)

  const filtered = useMemo(() => {
    if (!query.trim()) return rest
    const q = query.toLowerCase()
    return rest.filter((s) => s.title.toLowerCase().includes(q) || s.topic.toLowerCase().includes(q))
  }, [query, rest])

  return (
    <>
      <section className="relative min-h-[400px] flex items-end overflow-hidden">
        <SmartImage
          src={sermons[0].image}
          alt="Congregation worshipping during a Salvation Streams service"
          className="absolute inset-0 w-full h-full scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-navy/30" />
        <div className="absolute inset-0 bg-grid-dark opacity-70" aria-hidden="true" />
        <div className="absolute -bottom-40 -left-20 w-[28rem] h-[28rem] bg-primary/25 blur-3xl rounded-full pointer-events-none" aria-hidden="true" />
        <div className="relative z-10 max-w-container mx-auto px-4 md:px-10 pb-14 pt-28">
          <p className="font-heading text-xs md:text-sm font-semibold uppercase tracking-[0.24em] text-secondary mb-3 animate-fade-up">Archive &amp; Resources</p>
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-4 animate-fade-up" style={{ animationDelay: '80ms' }}>Sermons</h1>
          <p className="text-white/85 text-lg max-w-2xl animate-fade-up" style={{ animationDelay: '160ms' }}>
            Explore our library of messages. Find hope, encouragement, and deep biblical teaching to fuel your journey.
          </p>
        </div>
      </section>

      <Section className="bg-surface">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <div className="relative mb-8">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-muted" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by title or topic..."
                className="w-full bg-surface-container border border-white/15 rounded-lg pl-11 pr-4 py-3 text-sm transition-colors placeholder:text-ink-muted focus:border-primary"
              />
            </div>

            {/* Featured sermon */}
            <Reveal className="mb-8">
              <Card className="group overflow-hidden">
                <div className="relative aspect-video overflow-hidden">
                  <SmartImage src={featured.image} alt={featured.title} className="w-full h-full transition-transform duration-700 ease-enter group-hover:scale-105" />
                  <div className="absolute inset-0 bg-navy/40 flex items-center justify-center">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white shadow-glow transition-transform duration-300 ease-enter group-hover:scale-110">
                      <Play size={28} className="ml-1 fill-white" />
                    </div>
                  </div>
                  <span className="absolute top-4 left-4 bg-primary text-white text-xs font-heading font-semibold px-3 py-1 rounded-full">
                    Latest Series
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl md:text-2xl font-bold mb-2">{featured.title}</h3>
                  <p className="text-ink-muted mb-4">{featured.description}</p>
                  <p className="text-sm text-ink-muted">{featured.speaker} · {new Date(featured.date).toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric' })} · {featured.duration}</p>
                </div>
              </Card>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {filtered.map((s, i) => (
                <Reveal key={s.id} delay={(i % 2) * 90} className="h-full">
                  <Card className="group overflow-hidden h-full flex flex-col">
                    <div className="relative aspect-video overflow-hidden">
                      <SmartImage src={s.image} alt={s.title} className="w-full h-full transition-transform duration-700 ease-enter group-hover:scale-105" />
                      <div className="absolute inset-0 bg-navy/40 flex items-center justify-center">
                        <div className="w-12 h-12 bg-white/25 backdrop-blur rounded-full flex items-center justify-center text-white transition-transform duration-300 ease-enter group-hover:scale-110">
                          <Play size={20} className="ml-0.5" />
                        </div>
                      </div>
                      <span className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-0.5 rounded">
                        {s.duration}
                      </span>
                    </div>
                    <div className="p-5 flex flex-col flex-grow">
                      <h4 className="font-bold mb-1.5">{s.title}</h4>
                      <p className="text-ink-muted text-sm mb-3 line-clamp-2">{s.description}</p>
                      <div className="flex items-center justify-between text-xs text-ink-muted mt-auto">
                        <span>{s.speaker}</span>
                        <span className="bg-surface-container-high px-2 py-0.5 rounded-full">{s.topic}</span>
                      </div>
                    </div>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card hoverable={false} className="p-6">
              <h4 className="font-heading font-bold mb-3">Listen Anywhere</h4>
              <p className="text-ink-muted text-sm mb-4">Subscribe to the podcast on your favorite platform.</p>
              <div className="space-y-2">
                <a href={brand.social.youtube} className="flex items-center gap-3 bg-surface-container-high rounded-lg px-4 py-3 text-sm font-semibold transition-all duration-200 hover:shadow-card hover:-translate-y-0.5">
                  <Youtube size={18} className="text-primary" /> YouTube
                </a>
                <a href="#" className="flex items-center gap-3 bg-surface-container-high rounded-lg px-4 py-3 text-sm font-semibold transition-all duration-200 hover:shadow-card hover:-translate-y-0.5">
                  <Headphones size={18} className="text-primary" /> Spotify
                </a>
                <a href="#" className="flex items-center gap-3 bg-surface-container-high rounded-lg px-4 py-3 text-sm font-semibold transition-all duration-200 hover:shadow-card hover:-translate-y-0.5">
                  <Music2 size={18} className="text-primary" /> Apple Podcasts
                </a>
              </div>
            </Card>
            <div className="relative bg-primary text-white rounded-card p-6 overflow-hidden">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" aria-hidden="true" />
              <div className="relative">
                <h4 className="font-heading font-bold mb-2">Weekly Updates</h4>
                <p className="text-white/85 text-sm mb-4">Get the latest sermons delivered to your inbox.</p>
                <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
                  <div className="relative">
                    <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/60" />
                    <input
                      type="email"
                      required
                      placeholder="Email address"
                      className="w-full bg-white/15 border border-white/25 rounded-lg pl-9 pr-3 py-2.5 text-sm placeholder:text-white/60 text-white focus:bg-white/20"
                    />
                  </div>
                  <Button variant="light" type="submit" className="w-full">Subscribe</Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
