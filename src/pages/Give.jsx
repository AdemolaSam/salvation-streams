import { useState } from 'react'
import { Lock } from 'lucide-react'
import Section from '../components/Section'
import Reveal from '../components/Reveal'
import SmartImage from '../components/SmartImage'
import Card from '../components/Card'
import Icon from '../components/Icon'
import Button from '../components/Button'
import { givingFunds, givingBreakdown, givingHeroImage } from '../data/siteContent'

const amounts = ['$50', '$100', '$250']

export default function Give() {
  const [frequency, setFrequency] = useState('one-time')
  const [amount, setAmount] = useState('$100')
  const [customAmount, setCustomAmount] = useState('')
  const [fund, setFund] = useState(givingFunds[0].id)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Wire this up to your real payment processor (Stripe, Paystack, Pushpay, etc).
    alert('This is a demo form. Connect it to a real payment processor before going live.')
  }

  return (
    <Section className="bg-surface">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-14 items-center">
        <div>
          <span className="eyebrow mb-4">Generosity</span>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Flow with Purpose.</h1>
          <p className="text-ink-muted text-lg">
            Your generous contribution is the living water that nourishes communities in need. Choose how you want
            to make an impact today.
          </p>
        </div>
        <div className="relative rounded-card overflow-hidden h-56 md:h-64 shadow-lift group">
          <SmartImage src={givingHeroImage} alt="Hands cupped to receive flowing water, symbolizing giving" className="w-full h-full transition-transform duration-700 ease-enter group-hover:scale-105" />
          <div className="absolute inset-0 bg-navy/60 flex items-end p-6">
            <p className="text-white italic text-sm md:text-base">
              &ldquo;Whoever believes in me, as Scripture has said, rivers of living water will flow from within them.&rdquo;
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8">
        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-surface-container rounded-card border border-white/10 p-8 shadow-card">
          <h2 className="text-2xl font-bold mb-6">Make a Contribution</h2>

          <div className="inline-flex bg-surface-container rounded-lg p-1 mb-8">
            {['one-time', 'monthly'].map((f) => (
              <button
                type="button"
                key={f}
                onClick={() => setFrequency(f)}
                className={`px-5 py-2 rounded-md font-heading text-sm font-semibold capitalize transition-colors duration-200 ${
                  frequency === f ? 'bg-primary text-white' : 'text-ink-muted hover:text-ink'
                }`}
              >
                {f === 'one-time' ? 'One-time' : 'Monthly Partner'}
              </button>
            ))}
          </div>

          <label className="block text-sm font-heading font-semibold mb-3">Select Amount</label>
          <div className="grid grid-cols-4 gap-3 mb-6">
            {amounts.map((a) => (
              <button
                type="button"
                key={a}
                onClick={() => { setAmount(a); setCustomAmount('') }}
                className={`py-3 rounded-lg border-2 font-heading font-semibold text-sm transition-all duration-200 ${
                  amount === a && !customAmount ? 'border-primary bg-primary/5 text-primary' : 'border-white/15 text-ink-muted hover:border-white/25'
                }`}
              >
                {a}
              </button>
            ))}
            <input
              type="text"
              placeholder="Other"
              value={customAmount}
              onChange={(e) => { setCustomAmount(e.target.value); setAmount('') }}
              className={`py-3 px-3 rounded-lg border-2 text-sm font-semibold text-center bg-transparent transition-colors placeholder:text-ink-muted ${
                customAmount ? 'border-primary bg-primary/5' : 'border-white/15'
              }`}
            />
          </div>

          <label className="block text-sm font-heading font-semibold mb-3">Designate Your Gift</label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {givingFunds.map((f) => (
              <button
                type="button"
                key={f.id}
                onClick={() => setFund(f.id)}
                className={`text-left p-4 rounded-lg border-2 flex items-start gap-3 transition-all duration-200 ${
                  fund === f.id ? 'border-primary bg-primary/5' : 'border-white/15 hover:border-white/25'
                }`}
              >
                <Icon name={f.icon} size={20} className="text-primary mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-heading font-bold text-sm">{f.label}</h4>
                  <p className="text-ink-muted text-xs mt-0.5">{f.description}</p>
                </div>
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-heading font-semibold mb-2" htmlFor="firstName">First Name</label>
              <input id="firstName" required type="text" className="w-full bg-transparent border border-white/15 rounded-lg px-3 py-2.5 text-sm transition-colors placeholder:text-ink-muted focus:border-primary" />
            </div>
            <div>
              <label className="block text-sm font-heading font-semibold mb-2" htmlFor="lastName">Last Name</label>
              <input id="lastName" required type="text" className="w-full bg-transparent border border-white/15 rounded-lg px-3 py-2.5 text-sm transition-colors placeholder:text-ink-muted focus:border-primary" />
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-sm font-heading font-semibold mb-2" htmlFor="email">Email Address</label>
            <input id="email" required type="email" className="w-full bg-transparent border border-white/15 rounded-lg px-3 py-2.5 text-sm transition-colors placeholder:text-ink-muted focus:border-primary" />
          </div>

          <Button type="submit" variant="primary" className="w-full py-4 text-lg">
            Give Now {customAmount || amount}
          </Button>
          <p className="text-center text-ink-muted text-xs mt-4 flex items-center justify-center gap-1.5">
            <Lock size={12} /> Secure, SSL encrypted transaction
          </p>
        </form>

        {/* Transparency sidebar */}
        <div className="space-y-6">
          <Reveal>
            <Card hoverable={false} className="p-6">
              <h4 className="font-heading font-bold mb-4">Where Your Money Goes</h4>
              <div className="space-y-4 mb-4">
                {givingBreakdown.map((b) => (
                  <div key={b.label}>
                    <h5 className="font-heading font-semibold text-sm">{b.label}</h5>
                    <p className="text-ink-muted text-xs">{b.description}</p>
                  </div>
                ))}
              </div>
              <div className="flex h-2.5 rounded-full overflow-hidden bg-surface-container-high">
                <div className="bg-primary" style={{ width: `${givingBreakdown[0].percent}%` }} />
                <div className="bg-ink" style={{ width: `${givingBreakdown[1].percent}%` }} />
                <div className="bg-ink-muted/40" style={{ width: `${givingBreakdown[2].percent}%` }} />
              </div>
            </Card>
          </Reveal>
          <Reveal delay={120} className="h-full">
            <Card className="p-6">
              <p className="italic text-ink-muted text-sm mb-2">&ldquo;A small ripple creates a big wave.&rdquo;</p>
              <p className="text-xs text-ink-muted">
                Last year, our Medical Outreach Fund provided vital care to over 12,000 individuals in remote regions
                thanks to partners like you.
              </p>
            </Card>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}
