import Section from '../components/Section'
import Button from '../components/Button'

export default function NotFound() {
  return (
    <Section className="bg-surface text-center py-32">
      <span className="eyebrow mb-4">Page Not Found</span>
      <h1 className="text-7xl md:text-9xl font-bold text-primary font-heading mb-4 animate-fade-up">404</h1>
      <p className="text-ink-muted text-lg mb-8">The page you're looking for doesn't exist.</p>
      <Button to="/" variant="primary">Back to Home</Button>
    </Section>
  )
}
