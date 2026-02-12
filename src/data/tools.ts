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
    description: 'The citizen-facing platform for establishing grassroots Resilience Councils that coordinate DSA violation reports to EU regulators.',
    longDescription: `GetResilience is the practical entry point for the SAUFEX Resilience Council model. While the full SAUFEX vision includes formal, expert-level councils advising governments and Digital Services Coordinators, GetResilience focuses on the citizen-driven foundation: enabling any trained EU citizen to form a council, document platform violations with proper evidence, and coordinate reports across borders under the Digital Services Act.

Councils that build a track record of quality reporting through GetResilience can work toward formal recognition, including DSA Trusted Flagger status. The platform complements the broader SAUFEX framework described in the Resilience Council Handbook.`,
    url: 'https://getresilience.eu',
    status: 'live',
    cta: {
      text: 'Launch a Council',
      url: 'https://getresilience.eu'
    },
    secondaryCta: {
      text: 'Download Handbook',
      url: 'https://docs.saufex.eu/resilience-council-handbookfinal%20(1).pdf'
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
