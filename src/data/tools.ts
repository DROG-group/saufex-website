export interface Tool {
  id: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  url: string;
  status: 'live' | 'beta' | 'coming-soon';
  cta: {
    text: string;
    url: string;
  };
  secondaryCta?: {
    text: string;
    url: string;
  };
  features?: string[];
  audience?: string;
  icon: string;
}

export const tools: Tool[] = [
  {
    id: 'emod',
    name: 'EMOD',
    tagline: 'Microlearning for practitioners',
    description: 'Bite-sized learning modules that help counter-disinformation practitioners do things that actually work.',
    longDescription: `EMOD (European Master of countering Disinformation) provides microlearning modules built from contributions by experts who excel at specific approaches in the counter-disinformation field. Each module shares one specific value, system, or approach that has proven effective.

Whether you're a journalist, fact-checker, policy maker, or educator, EMOD gives you actionable knowledge you can apply immediately.`,
    url: 'https://emod.saufex.eu',
    status: 'live',
    cta: {
      text: 'Try EMOD',
      url: 'https://emod.saufex.eu'
    },
    features: [
      'Expert-contributed content',
      'Actionable, practical modules',
      'Built for busy practitioners',
      'Evidence-based approaches'
    ],
    audience: 'Journalists, fact-checkers, policy makers, educators, civil society',
    icon: '📚'
  },
  {
    id: 'getresilience',
    name: 'GetResilience',
    tagline: 'Citizen-led Resilience Councils',
    description: 'A decentralized platform enabling any citizen to establish a Resilience Council and bridge the gap between EU citizens and DSA implementation.',
    longDescription: `GetResilience democratizes the fight against disinformation by empowering citizens to create their own Resilience Councils.

The platform provides the structure, tools, and guidance needed to establish a functioning council that can coordinate responses to information manipulation at the local level, while connecting to the broader European framework.`,
    url: 'https://getresilience.eu',
    status: 'live',
    cta: {
      text: 'Launch a Council',
      url: 'https://getresilience.eu'
    },
    secondaryCta: {
      text: 'Download Handbook',
      url: '/Resilience-Council-Handbook.pdf'
    },
    features: [
      'Start your own Resilience Council',
      'Connect with EU DSA framework',
      'Coordinate local responses',
      'Join the European network',
      'Resilience Council Handbook available'
    ],
    audience: 'Citizens, community organizers, local governments, civil society organizations',
    icon: '🛡️'
  },
  {
    id: 'tool-3',
    name: 'Coming Soon',
    tagline: 'New tool in development',
    description: 'We\'re building something new. Details coming soon.',
    longDescription: 'A new tool is currently in development as part of the SAUFEX project. More information will be available soon.',
    url: '#',
    status: 'coming-soon',
    cta: {
      text: 'Get notified',
      url: 'mailto:info@saufex.eu?subject=Notify me about the new SAUFEX tool'
    },
    icon: '🚀'
  }
];
