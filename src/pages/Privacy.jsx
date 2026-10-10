import Section from '../components/Section'
import { brand } from '../data/siteContent'

export default function Privacy() {
  return (
    <Section className="bg-surface">
      <div className="max-w-3xl">
        <span className="eyebrow mb-4">Legal</span>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-ink-muted mb-4">
          This is placeholder policy text. Replace with your ministry's actual privacy policy before launch —
          covering what data is collected (e.g. donation and sign-up forms), how it's used, and how people can
          contact you with questions.
        </p>
        <p className="text-ink-muted">
          Questions about this policy can be sent to{' '}
          <a href={`mailto:${brand.email}`} className="link-underline">{brand.email}</a>.
        </p>
      </div>
    </Section>
  )
}
