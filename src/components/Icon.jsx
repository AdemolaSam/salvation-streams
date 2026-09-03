import {
  Globe, Users, Clock, Stethoscope, Megaphone, HeartHandshake, BookOpen, Landmark,
} from 'lucide-react'

const map = {
  Globe, Users, Clock, Stethoscope, Megaphone, HeartHandshake, BookOpen, Landmark,
}

/** Renders a lucide-react icon by name (as stored in siteContent.js). */
export default function Icon({ name, ...props }) {
  const Cmp = map[name] || Globe
  return <Cmp {...props} />
}
