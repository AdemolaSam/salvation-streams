/**
 * SITE CONTENT — single source of truth.
 *
 * All copy and image references for the whole site live here.
 * To swap a placeholder image for a real photo:
 *   1. Drop your real image file into: src/assets/images/
 *   2. Update the matching `image:` path below to point to it, e.g.
 *      image: "/src/assets/images/pastor-john-doe.jpg"
 *   OR simply replace the placeholder file that already sits at that
 *   path (same filename) and nothing else needs to change.
 *
 * Every image path below already points at a real placeholder file in
 * src/assets/images/ so the app runs out of the box.
 */

const img = (name) => `/src/assets/images/${name}`

export const brand = {
  name: 'Salvation Streams',
  tagline: 'Outreach Missions',
  pastorName: 'Evangelist Charles Owie',
  foundedYear: 2010,
  email: 'contact@salvationstreams.org',
  address: 'Lagos, Nigeria — with outreach offices supporting missions across Africa, Europe, and North America',
  social: {
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    youtube: 'https://youtube.com',
    tiktok: 'https://tiktok.com',
  },
  logo: {
    horizontal: img('logo-horizontal.svg'),
    stacked: img('logo-stacked.svg'),
  },
}

export const nav = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Activities', to: '/activities' },
  { label: 'Events', to: '/events' },
  { label: 'Testimonies', to: '/testimonies' },
  { label: 'Sermons', to: '/sermons' },
]

export const hero = {
  eyebrow: 'Living Water Movement',
  headline: 'Reaching the Nations with Hope, Healing & the Gospel',
  subheadline:
    'Join Salvation Streams Outreach Missions as we bring medical care, relief, and the message of Christ to communities across Nigeria and beyond.',
  image: img('hero-crusade-crowd.jpg'),
  stats: [
    { label: 'Active in 12+ Countries', icon: 'Globe' },
    { label: '500,000+ Lives Impacted', icon: 'Users' },
    { label: 'Since 2010', icon: 'Clock' },
  ],
}

export const impactCounters = [
  { value: 500000, suffix: '+', label: 'Souls Saved' },
  { value: 120, suffix: '+', label: 'Medical Outreaches' },
  { value: 25000, suffix: '+', label: 'Relief Packages' },
  { value: 12, suffix: '+', label: 'Nations Reached' },
]
export const impactCountersUpdated = 'Updated October 2026 — see our full impact report'

export const activities = [
  {
    id: 'medical-outreach',
    icon: 'Stethoscope',
    title: 'Medical Outreach',
    shortDescription: 'Free clinics, surgeries, and health screenings for underserved communities.',
    description:
      'Our volunteer medical professionals travel to remote and underserved regions to provide free consultations, treatments, minor surgeries, and health screenings — restoring health and hope where it is needed most.',
    image: img('activity-medical-outreach.jpg'),
    impactLabel: 'Patients Treated',
    impactValue: '50,000+',
  },
  {
    id: 'crusade-rallies',
    icon: 'Megaphone',
    title: 'Crusade Rallies',
    shortDescription: 'Large open-air evangelistic crusades declaring the Gospel of Jesus Christ.',
    description:
      'Large-scale open-air crusades bringing the message of salvation to thousands at a time, with powerful worship, teaching, and testimonies of transformed lives.',
    image: img('activity-crusade-rally.jpg'),
    impactLabel: 'Attendees Reached',
    impactValue: '2M+',
  },
  {
    id: 'relief-material',
    icon: 'HeartHandshake',
    title: 'Relief Material Distribution',
    shortDescription: 'Essential supplies, food, and clothing distributed to disaster-affected areas.',
    description:
      'We deliver food, clean water, clothing, and essential supplies to communities affected by disaster, conflict, or poverty — meeting practical needs alongside spiritual care.',
    image: img('activity-relief-distribution.jpg'),
    impactLabel: 'Relief Packages Delivered',
    impactValue: '25,000+',
  },
  {
    id: 'discipleship',
    icon: 'BookOpen',
    title: 'Discipleship & Impartation',
    shortDescription: 'Training, equipping, and empowering believers for ministry and life.',
    description:
      'Ongoing discipleship and impartation meetings that train and equip believers in the Word, in character, and in ministry — raising up the next generation of Kingdom workers.',
    image: img('activity-discipleship.jpg'),
    impactLabel: 'Disciples Trained',
    impactValue: '8,000+',
  },
]

export const about = {
  heroImage: img('about-hero-global-unity.jpg'),
  heroHeadline: 'Living Water, Flowing Global.',
  heroSubtext:
    'Since 2010, Salvation Streams Outreach Missions has been a conduit of hope, bringing transformative resources and spiritual warmth to communities worldwide.',
  pastorPortrait: img('pastor-john-doe-portrait.jpg'),
  pastorBio: [
    'Evangelist Charles Owie is the founder and lead visionary of Salvation Streams Outreach Missions. Called to ministry with a mandate to demonstrate the love of Christ in both word and deed, he has led outreach missions and crusades across Nigeria, wider Africa, and beyond.',
    'Under his leadership, Salvation Streams was founded on a simple yet profound conviction: true ministry addresses both the spiritual and physical needs of humanity. By combining world-class medical outreach with bold evangelism, the ministry has seen countless lives transformed, communities restored, and hope renewed in some of the hardest-to-reach places on earth.',
    'Pastor John continues to travel extensively, preaching the Gospel, training leaders, and personally taking part in medical and relief outreach alongside the ministry\u2019s volunteers and partners.',
  ],
  vision: 'To see every nation impacted by the transformative power of the Gospel and holistic care.',
  mission: 'To mobilize resources and people to deliver medical aid, relief, and spiritual discipleship globally.',
  leadership: [
    {
      name: 'Sarah Jenkins',
      role: 'Director of Medical Missions',
      image: img('leader-sarah-jenkins.jpg'),
    },
    {
      name: 'David Chen',
      role: 'Head of International Crusades',
      image: img('leader-david-chen.jpg'),
    },
    {
      name: 'Elena Rodriguez',
      role: 'Relief Operations Manager',
      image: img('leader-elena-rodriguez.jpg'),
    },
    {
      name: 'Michael Okafor',
      role: 'Discipleship Coordinator',
      image: img('leader-michael-okafor.jpg'),
    },
  ],
}

export const events = [
  {
    id: 'lagos-medical-camp',
    title: 'Mega Medical Camp & Outreach',
    type: 'Medical',
    date: '2026-11-15',
    day: '15',
    month: 'Nov',
    location: 'Lagos, Nigeria',
    description:
      'A three-day medical camp providing free checkups, medication, and minor surgeries to underserved communities. Volunteer medical professionals are welcome.',
    image: img('event-lagos-medical-camp.jpg'),
  },
  {
    id: 'nairobi-healing-crusade',
    title: 'East Africa Healing Crusade',
    type: 'Crusade',
    date: '2026-09-02',
    day: '02',
    month: 'Sep',
    location: 'Nairobi, Kenya',
    description:
      'Join us for four nights of powerful worship, transformative messages, and miracles. Expecting over 50,000 attendees across the region.',
    image: img('event-nairobi-crusade.jpg'),
  },
  {
    id: 'accra-flood-relief',
    title: 'Flood Relief & Care Initiative',
    type: 'Relief',
    date: '2026-09-28',
    day: '28',
    month: 'Sep',
    location: 'Accra, Ghana',
    description:
      'Delivering clean water systems, food supplies, and rebuilding materials to communities affected by recent flooding.',
    image: img('event-accra-flood-relief.jpg'),
  },
]

export const testimonies = [
  {
    id: 'mary-o',
    name: 'Mary O.',
    location: 'Lagos, Nigeria',
    category: 'Relief',
    quote:
      'The medical team didn\u2019t just treat my physical ailment; they prayed with me and gave me hope when I had none.',
    image: img('testimony-mary-o.jpg'),
  },
  {
    id: 'david-k',
    name: 'David K.',
    location: 'Nairobi, Kenya',
    category: 'Salvation',
    quote: 'During the crusade, I felt a weight lift off me. I gave my life to Christ and my family has been restored.',
    image: img('testimony-david-k.jpg'),
  },
  {
    id: 'sarah-a',
    name: 'Sarah A.',
    location: 'Accra, Ghana',
    category: 'Relief',
    quote:
      'When the flood destroyed everything, the relief packages fed my children. Thank you for showing God\u2019s love practically.',
    image: img('testimony-sarah-a.jpg'),
  },
  {
    id: 'carlos-p',
    name: 'Carlos',
    location: 'Lima, Peru',
    category: 'Education',
    quote: 'Receiving school supplies and a scholarship changed everything. Now I can dream of becoming a doctor.',
    image: img('testimony-carlos.jpg'),
  },
]

export const testimonyCategories = ['All Stories', 'Healing', 'Relief', 'Salvation', 'Education']

export const sermons = [
  {
    id: 'river-of-life',
    title: 'The River of Life: Flowing Forward',
    speaker: brand.pastorName,
    date: '2026-10-15',
    duration: '45:20',
    topic: 'Faith',
    description:
      'In this opening message of our new series, we explore what it means to carry the living water to the dry places of our world.',
    image: img('sermon-river-of-life.jpg'),
    featured: true,
  },
  {
    id: 'faith-in-the-wilderness',
    title: 'Faith in the Wilderness',
    speaker: brand.pastorName,
    date: '2026-10-08',
    duration: '38:15',
    topic: 'Faith',
    description: 'Examining seasons of testing and how they prepare us for the promises ahead.',
    image: img('sermon-faith-wilderness.jpg'),
  },
  {
    id: 'cost-of-compassion',
    title: 'The Cost of Compassion',
    speaker: brand.pastorName,
    date: '2026-10-01',
    duration: '42:50',
    topic: 'Mission',
    description: 'What does it truly cost to love our neighbors? A look into the practicalities of mission work.',
    image: img('sermon-cost-of-compassion.jpg'),
  },
  {
    id: 'community-in-crisis',
    title: 'Community in Crisis',
    speaker: brand.pastorName,
    date: '2026-09-24',
    duration: '35:10',
    topic: 'Community',
    description: 'Finding strength in unity when circumstances are difficult.',
    image: img('sermon-community-crisis.jpg'),
  },
]

export const givingFunds = [
  { id: 'medical', icon: 'Stethoscope', label: 'Medical Outreach', description: 'Providing essential healthcare to remote areas.' },
  { id: 'crusade', icon: 'Megaphone', label: 'Crusade Fund', description: 'Supporting global evangelism efforts.' },
  { id: 'relief', icon: 'HeartHandshake', label: 'Relief Fund', description: 'Disaster response and emergency aid.' },
  { id: 'general', icon: 'Landmark', label: 'General Ministry', description: 'Where it\u2019s needed most globally.' },
]

export const givingBreakdown = [
  { label: '85% Direct Mission Work', description: 'Funding medical supplies, event logistics, and direct relief in communities.', percent: 85 },
  { label: '10% Operations & Logistics', description: 'Ensuring safe transport, secure distribution, and local partner coordination.', percent: 10 },
  { label: '5% Administration', description: 'Essential organizational upkeep and transparent financial reporting.', percent: 5 },
]

export const givingHeroImage = img('give-hands-water.jpg')
