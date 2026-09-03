import { useMemo, useState } from 'react'
import { Play, Search, Youtube, Music2, Headphones, Mail } from 'lucide-react'
import Section from '../components/Section'
import SmartImage from '../components/SmartImage'
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
      <section className="relative min-h-[340px] flex items-end">
        <SmartImage
          src={sermons[0].image}
          alt="Congregation worshipping during a Salvation Streams service"
          className="absolute inset-0 w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/70 to-navy/20" />
        <div className="relative z-10 max-w-container mx-auto px-4 md:px-10 pb-14 pt-28">
          <p className="text-secondary font-semibold uppercase tracking-widest text-sm mb-3">Archive &amp; Resources</p>
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">Sermons</h1>
          <p className="text-white/85 text-lg max-w-2xl">
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
                className="w-full border border-black/10 rounded-lg pl-11 pr-4 py-3 text-sm"
              />
            </div>

            {/* Featured sermon */}
            <div className="bg-white rounded-card overflow-hidden shadow-sm border border-black/5 mb-8">
              <div className="relative aspect-video">
                <SmartImage src={featured.image} alt={featured.title} className="w-full h-full" />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-primary-dark">
                    <Play size={28} className="ml-1" />
                  </div>
                </div>
                <span className="absolute top-4 left-4 bg-secondary text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Latest Series
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{featured.title}</h3>
                <p className="text-ink-muted mb-4">{featured.description}</p>
                <p className="text-sm text-ink-muted">{featured.speaker} · {new Date(featured.date).toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric' })} · {featured.duration}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {filtered.map((s) => (
                <div key={s.id} className="bg-white rounded-card overflow-hidden shadow-sm border border-black/5">
                  <div className="relative aspect-video">
                    <SmartImage src={s.image} alt={s.title} className="w-full h-full" />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <div className="w-12 h-12 bg-white/25 backdrop-blur rounded-full flex items-center justify-center text-white">
                        <Play size={20} className="ml-0.5" />
                      </div>
                    </div>
                    <span className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-0.5 rounded">
                      {s.duration}
                    </span>
                  </div>
                  <div className="p-5">
                    <h4 className="font-bold mb-1.5">{s.title}</h4>
                    <p className="text-ink-muted text-sm mb-3 line-clamp-2">{s.description}</p>
                    <div className="flex items-center justify-between text-xs text-ink-muted">
                      <span>{s.speaker}</span>
                      <span className="bg-surface-container-high px-2 py-0.5 rounded-full">{s.topic}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-surface-container rounded-card p-6">
              <h4 className="font-bold mb-3">Listen Anywhere</h4>
              <p className="text-ink-muted text-sm mb-4">Subscribe to the podcast on your favorite platform.</p>
              <div className="space-y-2">
                <a href={brand.social.youtube} className="flex items-center gap-3 bg-white rounded-lg px-4 py-3 text-sm font-semibold hover:shadow-sm transition-shadow">
                  <Youtube size={18} className="text-red-500" /> YouTube
                </a>
                <a href="#" className="flex items-center gap-3 bg-white rounded-lg px-4 py-3 text-sm font-semibold hover:shadow-sm transition-shadow">
                  <Headphones size={18} className="text-green-600" /> Spotify
                </a>
                <a href="#" className="flex items-center gap-3 bg-white rounded-lg px-4 py-3 text-sm font-semibold hover:shadow-sm transition-shadow">
                  <Music2 size={18} className="text-purple-500" /> Apple Podcasts
                </a>
              </div>
            </div>
            <div className="bg-primary text-white rounded-card p-6">
              <h4 className="font-bold mb-2">Weekly Updates</h4>
              <p className="text-white/75 text-sm mb-4">Get the latest sermons delivered to your inbox.</p>
              <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
                <div className="relative">
                  <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50" />
                  <input
                    type="email"
                    required
                    placeholder="Email address"
                    className="w-full bg-white/10 border border-white/20 rounded-lg pl-9 pr-3 py-2.5 text-sm placeholder:text-white/50 text-white"
                  />
                </div>
                <Button variant="primary" type="submit" className="w-full">Subscribe</Button>
              </form>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
