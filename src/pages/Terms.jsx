import Section from '../components/Section'
import { brand } from '../data/siteContent'

export default function Terms() {
  return (
    <Section className="bg-surface">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>
        <p className="text-ink-muted mb-4">
          This is placeholder terms text. Replace with your ministry's actual terms of service before launch.
        </p>
        <p className="text-ink-muted">
          Questions can be sent to{' '}
          <a href={`mailto:${brand.email}`} className="text-secondary font-semibold">{brand.email}</a>.
        </p>
      </div>
    </Section>
  )
}
