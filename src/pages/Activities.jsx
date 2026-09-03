import Section from '../components/Section'
import SmartImage from '../components/SmartImage'
import Icon from '../components/Icon'
import Button from '../components/Button'
import { activities } from '../data/siteContent'

export default function Activities() {
  return (
    <>
      <section className="bg-navy text-white py-20 md:py-28">
        <div className="max-w-container mx-auto px-4 md:px-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Activities</h1>
          <p className="text-white/80 text-lg max-w-2xl">
            We are a movement of living water, flowing into communities through practical action and spiritual
            dedication. Explore our core impact areas below.
          </p>
        </div>
      </section>

      {activities.map((a, i) => (
        <Section key={a.id} id={a.id} className={i % 2 === 0 ? 'bg-surface' : 'bg-surface-container'}>
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
            <div className="relative h-[320px] md:h-[420px] rounded-card overflow-hidden shadow-lg">
              <SmartImage src={a.image} alt={a.title} className="w-full h-full" />
            </div>
            <div>
              <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6">
                <Icon name={a.icon} size={26} />
              </div>
              <h2 className="text-3xl font-bold mb-4">{a.title}</h2>
              <p className="text-ink-muted text-lg leading-relaxed mb-8">{a.description}</p>
              <div className="flex items-center gap-6 bg-white rounded-card border border-black/5 p-6 max-w-sm">
                <div>
                  <div className="text-2xl font-bold text-primary">{a.impactValue}</div>
                  <div className="text-ink-muted text-sm">{a.impactLabel}</div>
                </div>
              </div>
            </div>
          </div>
        </Section>
      ))}

      <Section className="bg-primary text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Want to Support These Efforts?</h2>
        <p className="text-white/80 text-lg max-w-xl mx-auto mb-8">
          Every gift helps us extend medical care, share the Gospel, deliver relief, and disciple believers.
        </p>
        <Button to="/give" variant="primary">Give Now</Button>
      </Section>
    </>
  )
}
