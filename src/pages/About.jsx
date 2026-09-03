import Section from '../components/Section'
import SmartImage from '../components/SmartImage'
import { about, brand } from '../data/siteContent'

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[420px] flex items-end">
        <SmartImage
          src={about.heroImage}
          alt="Diverse global congregation gathered together, representing Salvation Streams' worldwide reach"
          className="absolute inset-0 w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-navy/10" />
        <div className="relative z-10 max-w-container mx-auto px-4 md:px-10 pb-16 pt-32">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-6 max-w-3xl">{about.heroHeadline}</h1>
          <p className="text-white/85 text-lg max-w-2xl">{about.heroSubtext}</p>
        </div>
      </section>

      {/* Pastor bio */}
      <Section className="bg-surface">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="relative h-[420px] md:h-[560px] rounded-card overflow-hidden shadow-lg">
            <SmartImage
              src={about.pastorPortrait}
              alt={`Portrait of ${brand.pastorName}`}
              className="w-full h-full"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-2">About {brand.pastorName}</h2>
            <p className="text-secondary font-semibold mb-6">Founder & Lead Visionary, {brand.name}</p>
            <div className="space-y-4 text-ink-muted text-lg leading-relaxed">
              {about.pastorBio.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Vision / Mission */}
      <Section className="bg-surface-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-10 rounded-card border border-black/5">
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-ink-muted text-lg leading-relaxed">{about.vision}</p>
          </div>
          <div className="bg-white p-10 rounded-card border border-black/5">
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-ink-muted text-lg leading-relaxed">{about.mission}</p>
          </div>
        </div>
      </Section>

      {/* Leadership */}
      <Section className="bg-surface">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ministry Leadership</h2>
          <p className="text-ink-muted text-lg">The team helping carry this mission to the nations.</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {about.leadership.map((leader) => (
            <div key={leader.name} className="text-center">
              <div className="w-full aspect-square rounded-card overflow-hidden mb-4 shadow-sm">
                <SmartImage
                  src={leader.image}
                  alt={`Portrait of ${leader.name}, ${leader.role}`}
                  className="w-full h-full"
                />
              </div>
              <h4 className="font-bold">{leader.name}</h4>
              <p className="text-ink-muted text-sm">{leader.role}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  )
}
