import Section from '../components/Section'
import Reveal from '../components/Reveal'
import SmartImage from '../components/SmartImage'
import Card from '../components/Card'
import { about, brand } from '../data/siteContent'

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[480px] flex items-end overflow-hidden">
        <SmartImage
          src={about.heroImage}
          alt="Diverse global congregation gathered together, representing Salvation Streams' worldwide reach"
          className="absolute inset-0 w-full h-full scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/70 to-navy/20" />
        <div className="absolute inset-0 bg-grid-dark opacity-70" aria-hidden="true" />
        <div className="absolute -bottom-40 -left-20 w-[28rem] h-[28rem] bg-primary/25 blur-3xl rounded-full pointer-events-none" aria-hidden="true" />
        <div className="relative z-10 max-w-container mx-auto px-4 md:px-10 pb-16 pt-32">
          <p className="font-heading text-xs md:text-sm font-semibold uppercase tracking-[0.24em] text-secondary mb-5 animate-fade-up">
            About Us
          </p>
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-6 max-w-3xl animate-fade-up" style={{ animationDelay: '80ms' }}>
            {about.heroHeadline}
          </h1>
          <p className="text-white/85 text-lg max-w-2xl animate-fade-up" style={{ animationDelay: '160ms' }}>
            {about.heroSubtext}
          </p>
        </div>
      </section>

      {/* Pastor bio */}
      <Section className="bg-surface">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="relative h-[420px] md:h-[560px] rounded-card overflow-hidden shadow-lift group">
            <SmartImage
              src={about.pastorPortrait}
              alt={`Portrait of ${brand.pastorName}`}
              className="w-full h-full transition-transform duration-700 ease-enter group-hover:scale-105"
            />
          </div>
          <div>
            <span className="eyebrow mb-4">Meet The Founder</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">About {brand.pastorName}</h2>
            <p className="text-primary font-heading font-semibold mb-6">Founder & Lead Visionary, {brand.name}</p>
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
          <Reveal className="h-full">
            <Card className="bg-surface-container-high p-10 h-full">
              <span className="eyebrow mb-4">Vision</span>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Vision</h3>
              <p className="text-ink-muted text-lg leading-relaxed">{about.vision}</p>
            </Card>
          </Reveal>
          <Reveal delay={120} className="h-full">
            <Card className="bg-surface-container-high p-10 h-full">
              <span className="eyebrow mb-4">Mission</span>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Mission</h3>
              <p className="text-ink-muted text-lg leading-relaxed">{about.mission}</p>
            </Card>
          </Reveal>
        </div>
      </Section>

      {/* Leadership */}
      <Section className="bg-surface">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="eyebrow mb-4">The Team</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Ministry Leadership</h2>
          <p className="text-ink-muted text-lg">The team helping carry this mission to the nations.</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {about.leadership.map((leader, i) => (
            <Reveal key={leader.name} delay={i * 90} className="group text-center">
              <div className="w-full aspect-square rounded-card overflow-hidden mb-4 relative">
                <SmartImage
                  src={leader.image}
                  alt={`Portrait of ${leader.name}, ${leader.role}`}
                  className="w-full h-full transition-transform duration-700 ease-enter group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
              <h4 className="font-heading font-bold">{leader.name}</h4>
              <p className="text-ink-muted text-sm">{leader.role}</p>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  )
}
