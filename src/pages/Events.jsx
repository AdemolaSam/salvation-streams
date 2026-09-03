import { useMemo, useState } from 'react'
import { MapPin, SlidersHorizontal } from 'lucide-react'
import Section from '../components/Section'
import SmartImage from '../components/SmartImage'
import Button from '../components/Button'
import { events, brand } from '../data/siteContent'

const activityTypes = ['All Types', 'Medical', 'Crusade', 'Relief']
const countries = ['All Countries', ...new Set(events.map((e) => e.location.split(', ')[1]))]

export default function Events() {
  const [country, setCountry] = useState('All Countries')
  const [type, setType] = useState('All Types')

  const filtered = useMemo(() => {
    return events.filter((e) => {
      const matchCountry = country === 'All Countries' || e.location.endsWith(country)
      const matchType = type === 'All Types' || e.type === type
      return matchCountry && matchType
    })
  }, [country, type])

  return (
    <>
      <section className="relative min-h-[380px] flex items-center">
        <SmartImage
          src={events[1].image}
          alt="Large outdoor crusade gathering at dusk"
          className="absolute inset-0 w-full h-full"
        />
        <div className="absolute inset-0 bg-navy/70" />
        <div className="relative z-10 max-w-container mx-auto px-4 md:px-10 text-center w-full">
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">Global Missions &amp; Events</h1>
          <p className="text-white/85 text-lg max-w-2xl mx-auto">
            Join us across the globe as we bring hope, healing, and the message of living water to communities in
            need. Find an upcoming event near you.
          </p>
        </div>
      </section>

      {/* Filters */}
      <div className="bg-white border-b border-black/5">
        <div className="max-w-container mx-auto px-4 md:px-10 py-6 flex flex-wrap items-end gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold text-ink-muted uppercase" htmlFor="country">Country</label>
            <select
              id="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="border border-black/10 rounded-lg px-3 py-2 text-sm min-w-[180px]"
            >
              {countries.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold text-ink-muted uppercase" htmlFor="type">Activity Type</label>
            <select
              id="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="border border-black/10 rounded-lg px-3 py-2 text-sm min-w-[180px]"
            >
              {activityTypes.map((t) => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>
          <div className="flex items-center gap-2 text-secondary font-semibold text-sm ml-auto">
            <SlidersHorizontal size={16} />
            {filtered.length} event{filtered.length !== 1 ? 's' : ''} found
          </div>
        </div>
      </div>

      <Section className="bg-surface">
        <h2 className="text-3xl font-bold mb-2">Upcoming Events</h2>
        <p className="text-ink-muted text-lg mb-10">Join our mission in the coming months.</p>

        {filtered.length === 0 ? (
          <p className="text-ink-muted">No events match your filters right now — check back soon.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filtered.map((e) => (
              <div key={e.id} className="bg-white rounded-card overflow-hidden shadow-sm border border-black/5 flex flex-col">
                <div className="h-48 relative">
                  <SmartImage src={e.image} alt={`${e.title} in ${e.location}`} className="w-full h-full" />
                  <span className="absolute top-4 left-4 bg-secondary text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                    {e.type}
                  </span>
                  <div className="absolute top-4 right-4 bg-white/95 rounded-lg px-3 py-1.5 text-center shadow-sm">
                    <div className="font-bold text-primary leading-none">{e.day}</div>
                    <div className="text-[10px] font-semibold uppercase text-ink-muted">{e.month}</div>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-1.5 text-ink-muted text-sm mb-2">
                    <MapPin size={14} /> {e.location}
                  </div>
                  <h3 className="font-bold text-lg mb-3">{e.title}</h3>
                  <p className="text-ink-muted text-sm mb-6 flex-grow">{e.description}</p>
                  <div className="flex gap-3 mt-auto">
                    <Button href="#" variant="primary" className="flex-1 px-4 py-2.5 text-sm">RSVP</Button>
                    <Button href="#" variant="outline" className="flex-1 px-4 py-2.5 text-sm">
                      Book {brand.pastorName.split(' ').slice(-1)}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </Section>
    </>
  )
}
