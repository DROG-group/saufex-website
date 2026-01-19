// Homepage dynamic content - edit this file to update featured content

export const spotlight = {
  active: true,
  type: 'book' as const,
  title: 'Disinfonomics: The Market of Lies',
  description: 'An economic framework for understanding and undermining disinformation. By Bram Alkema.',
  image: '/images/disinfonomics-cover.jpg',
  cta: { text: 'Download PDF', url: '/disinfonomics.pdf' }
};

export const mediaMentions = [
  {
    source: 'TOK FM',
    title: 'Russia spends $4B to mess with our heads',
    url: 'https://www.tokfm.pl/ludzie/rosja-wydaje-4-mld-dolarow-by-mieszac-nam-w-glowach-co-na-to-polska',
    date: '2024-11-15',
    language: 'pl'
  },
  {
    source: 'Nauka w Polsce',
    title: 'PORT leads EU consortium on disinformation',
    url: 'https://naukawpolsce.pl/aktualnosci/news%2C100663%2Cwroclaw-lukasiewicz-port-liderem-konsorcjum-w-projekcie-dot-walki-z',
    date: '2024-10-20',
    language: 'pl'
  },
  {
    source: 'PORT Łukasiewicz',
    title: 'Leading EU project on countering disinformation',
    url: 'https://port.lukasiewicz.gov.pl/en/lukasiewicz-port-is-the-leader-of-eu-international-project-on-countering-disinformation/',
    date: '2024-09-15',
    language: 'en'
  },
  {
    source: 'iRozhlas',
    title: 'Poland journalists face Russian influence',
    url: 'https://www.irozhlas.cz/zpravy-svet/polsko-novinar-vyhrozovani-vliv-rusko-rzeckowski-rsf_2507290702_ula',
    date: '2024-07-29',
    language: 'cs'
  }
];

export const successStories = [
  {
    title: "Poland's Resilience Council",
    summary: 'First EU nation to implement SAUFEX Resilience Council, integrating government, civil society, and academic experts to counter election disinformation.',
    slug: '15-The-Polish-Resilience-Councils',
    highlight: 'Now inspiring similar councils across EU'
  }
];
