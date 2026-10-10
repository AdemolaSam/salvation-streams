import { useState } from 'react'
import { Play } from 'lucide-react'
import Section from '../components/Section'
import Reveal from '../components/Reveal'
import SmartImage from '../components/SmartImage'
import Card from '../components/Card'
import { testimonies, testimonyCategories } from '../data/siteContent'

export default function Testimonies() {
  const [active, setActive] = useState('All Stories')

  const filtered = active === 'All Stories' ? testimonies : testimonies.filter((t) => t.category === active)

  return (
    <>
      <Section className="bg-surface text-center">
        <span className="eyebrow mb-4">Voices</span>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Stories of Transformation</h1>
        <p className="text-ink-muted text-lg max-w-2xl mx-auto mb-10">
          Witness the power of hope and the impact of community through the voices of those we serve.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {testimonyCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full font-heading text-sm font-semibold border transition-all duration-200 ease-enter ${
                active === cat
                  ? 'bg-primary text-white border-primary shadow-glow-sm'
                  : 'border-white/15 text-ink-muted hover:border-primary/50 hover:text-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </Section>

      <Section className="bg-surface pt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((t, i) => (
            <Reveal key={t.id} delay={(i % 3) * 90} className="h-full">
              <Card className="group h-full flex flex-col overflow-hidden">
                <div className="h-56 relative overflow-hidden">
                  <SmartImage src={t.image} alt={`${t.name}, testimony from ${t.location}`} className="w-full h-full transition-transform duration-700 ease-enter group-hover:scale-105" />
                  <div className="absolute inset-0 bg-navy/40 flex flex-col items-center justify-center gap-2">
                    <div className="relative w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white">
                      <span className="absolute inset-0 rounded-full bg-primary/60 animate-pulse-ring" aria-hidden="true" />
                      <Play size={26} className="relative" />
                    </div>
                    {/* Captions on by default — never hidden behind an "enable sound" toggle */}
                    <span className="bg-black/60 px-3 py-1 rounded text-white text-xs border border-white/20">
                      Captions on
                    </span>
                  </div>
                  <span className="absolute top-3 left-3 bg-surface-container-high text-primary text-xs font-heading font-semibold px-2.5 py-1 rounded-full">
                    {t.category}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <p className="italic text-ink mb-4">&ldquo;{t.quote}&rdquo;</p>
                  <div className="flex items-center gap-3 mt-auto">
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
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  )
}
