import { Link } from 'react-router-dom'
import { Facebook, Instagram, Youtube, Music2, Mail, MapPin } from 'lucide-react'
import { brand, nav, activities } from '../data/siteContent'

const socialIcons = [
  { href: brand.social.facebook, Icon: Facebook, label: 'Facebook' },
  { href: brand.social.instagram, Icon: Instagram, label: 'Instagram' },
  { href: brand.social.youtube, Icon: Youtube, label: 'YouTube' },
  { href: brand.social.tiktok, Icon: Music2, label: 'TikTok' },
]

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-container mx-auto px-4 md:px-10 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="flex flex-col gap-4">
          <img src={brand.logo.stacked} alt={`${brand.name} logo`} className="h-24 w-auto" />
          <p className="text-white/70 text-sm leading-relaxed">
            Reaching the unreached, healing the sick, and bringing hope through the Gospel of Jesus Christ.
          </p>
          <div className="flex gap-4 pt-1">
            {socialIcons.map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="text-white/70 hover:text-white transition-colors"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-accent mb-4 text-sm tracking-wide uppercase">Organization</h4>
          <ul className="space-y-2.5">
            {nav.slice(0, 4).map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-white/70 hover:text-white text-sm transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-accent mb-4 text-sm tracking-wide uppercase">Resources</h4>
          <ul className="space-y-2.5">
            <li><Link to="/testimonies" className="text-white/70 hover:text-white text-sm transition-colors">Testimonies</Link></li>
            <li><Link to="/sermons" className="text-white/70 hover:text-white text-sm transition-colors">Sermons</Link></li>
            <li><Link to="/give" className="text-white/70 hover:text-white text-sm transition-colors">Give</Link></li>
            <li><Link to="/privacy" className="text-white/70 hover:text-white text-sm transition-colors">Privacy Policy</Link></li>
            <li><Link to="/terms" className="text-white/70 hover:text-white text-sm transition-colors">Terms of Service</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-accent mb-4 text-sm tracking-wide uppercase">Contact</h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex items-start gap-2">
              <Mail size={16} className="mt-0.5 shrink-0" />
              <a href={`mailto:${brand.email}`} className="hover:text-white transition-colors">{brand.email}</a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0" />
              <span>{brand.address}</span>
            </li>
          </ul>
          <h4 className="font-semibold text-accent mt-6 mb-3 text-sm tracking-wide uppercase">Our Work</h4>
          <ul className="space-y-2.5">
            {activities.map((a) => (
              <li key={a.id}>
                <Link to={`/activities#${a.id}`} className="text-white/70 hover:text-white text-sm transition-colors">
                  {a.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-white/50 text-sm">
        © {new Date().getFullYear()} {brand.name} {brand.tagline}. All rights reserved.
      </div>
    </footer>
  )
}
