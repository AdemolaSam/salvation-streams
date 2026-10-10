import Section from '../components/Section'
import Reveal from '../components/Reveal'
import SmartImage from '../components/SmartImage'
import Card from '../components/Card'
import Icon from '../components/Icon'
import Button from '../components/Button'
import { activities } from '../data/siteContent'

export default function Activities() {
  return (
    <>
      <section className="relative bg-navy text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-grid-dark" aria-hidden="true" />
        <div className="absolute -top-24 right-0 w-[30rem] h-[30rem] bg-primary/25 blur-3xl rounded-full pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-container mx-auto px-4 md:px-10">
          <p className="font-heading text-xs md:text-sm font-semibold uppercase tracking-[0.24em] text-secondary mb-5 animate-fade-up">
            Our Impact Areas
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-up" style={{ animationDelay: '80ms' }}>Our Activities</h1>
          <p className="text-white/80 text-lg max-w-2xl animate-fade-up" style={{ animationDelay: '160ms' }}>
            We are a movement of living water, flowing into communities through practical action and spiritual
            dedication. Explore our core impact areas below.
          </p>
        </div>
      </section>

      {activities.map((a, i) => (
        <Section key={a.id} id={a.id} className={i % 2 === 0 ? 'bg-surface' : 'bg-surface-container'}>
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
            <div className="relative h-[320px] md:h-[420px] rounded-card overflow-hidden shadow-lift group">
              <SmartImage src={a.image} alt={a.title} className="w-full h-full transition-transform duration-700 ease-enter group-hover:scale-105" />
            </div>
            <div>
              <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6">
                <Icon name={a.icon} size={26} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{a.title}</h2>
              <p className="text-ink-muted text-lg leading-relaxed mb-8">{a.description}</p>
              <Card className="flex items-center gap-6 p-6 max-w-sm">
                <div>
                  <div className="text-3xl font-bold text-primary font-heading">{a.impactValue}</div>
                  <div className="text-ink-muted text-sm">{a.impactLabel}</div>
                </div>
              </Card>
            </div>
          </div>
        </Section>
      ))}

      <section className="relative bg-gradient-to-br from-primary via-primary-dark to-navy text-white text-center py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-dark opacity-60" aria-hidden="true" />
        <div className="relative max-w-container mx-auto px-4 md:px-10">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Want to Support These Efforts?</h2>
            <p className="text-white/85 text-lg max-w-xl mx-auto mb-8">
              Every gift helps us extend medical care, share the Gospel, deliver relief, and disciple believers.
            </p>
            <Button to="/give" variant="light">Give Now</Button>
          </Reveal>
        </div>
      </section>
    </>
  )
}
