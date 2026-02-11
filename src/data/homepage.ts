// Homepage dynamic content - edit this file to update featured content

export const spotlight = {
  active: true,
  type: 'book' as const,
  title: 'Resilience Council Handbook',
  description: 'Practical guidance for establishing and sustaining Resilience Councils.',
  image: '/images/saufex-overview.svg',
  cta: { text: 'Download PDF', url: '/Resilience-Council-Handbook.pdf' }
};

export const mediaMentions = [
  {
    source: 'Polskie Radio Koszalin',
    title: 'Grzegorz Rzeczkowski on fake news, hate speech and troll farms',
    url: 'https://prk24.pl/91465482/',
    date: '2026-02-07',
    language: 'pl'
  },
  {
    source: 'TVP INFO',
    title: 'Did Epstein work on Russia\'s orders? Conclusions from new files',
    url: 'https://www.tvp.info/91417018/',
    date: '2026-02-04',
    language: 'pl'
  },
  {
    source: 'Radio Krakow',
    title: 'Rzeczkowski on Braun\'s actions at Auschwitz: deliberate antisemitism incitement',
    url: 'https://www.radiokrakow.pl/audycje/',
    date: '2025-11-24',
    language: 'pl'
  },
  {
    source: 'YouTube',
    title: 'Grzegorz Rzeczkowski Exposes Kremlin Infiltration',
    url: 'https://www.youtube.com/watch?v=bJSO8dQntUA',
    date: '2025-10-01',
    language: 'en'
  },
  {
    source: 'YouTube',
    title: 'How Russia & Putin Recruits Spies? Inside the Polish Railway Sabotage',
    url: 'https://www.youtube.com/watch?v=vCvDv0o8_RU',
    date: '2025-09-01',
    language: 'en'
  },
  {
    source: 'TOK FM',
    title: 'Russia spends $4B to mess with our heads',
    url: 'https://www.tokfm.pl/ludzie/rosja-wydaje-4-mld-dolarow-by-mieszac-nam-w-glowach-co-na-to-polska',
    date: '2024-11-15',
    language: 'pl'
  },
  {
    source: 'PORT Łukasiewicz',
    title: 'Leading EU project on countering disinformation',
    url: 'https://port.lukasiewicz.gov.pl/en/lukasiewicz-port-is-the-leader-of-eu-international-project-on-countering-disinformation/',
    date: '2024-09-15',
    language: 'en'
  }
];

export const successStories = [
  {
    title: "Poland's Resilience Council",
    summary: 'First EU nation to implement SAUFEX Resilience Council, integrating government, civil society, and academic experts to counter election disinformation.',
    slug: '15-The-Polish-Resilience-Councils',
    url: '/Resilience-Council-Handbook.pdf',
    highlight: 'Now inspiring similar councils across EU'
  }
];
