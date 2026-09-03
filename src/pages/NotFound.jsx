import Section from '../components/Section'
import Button from '../components/Button'

export default function NotFound() {
  return (
    <Section className="bg-surface text-center py-32">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="text-ink-muted text-lg mb-8">The page you're looking for doesn't exist.</p>
      <Button to="/" variant="primary">Back to Home</Button>
    </Section>
  )
}
