# Tools Implementation Plan

## Overview

Add a dedicated Tools section to the homepage and create a new `/tools` page to showcase SAUFEX's three main products:

1. **EMOD** - Microlearning modules for counter-disinformation practitioners
2. **GetResilience** - Decentralized citizen-led Resilience Council system
3. **Tool #3** - Coming soon (placeholder)

Additionally, update the Spotlight to feature the Disinfonomics book.

---

## Files to Create

| File | Purpose |
|------|---------|
| `src/data/tools.ts` | Data file containing tool information |
| `src/pages/tools.astro` | Dedicated tools page |

## Files to Modify

| File | Changes |
|------|---------|
| `src/pages/index.astro` | Add Tools section, import tools data |
| `src/styles/global.css` | Add styles for tools cards and tools page |
| `public/styles/global.css` | Sync CSS changes |
| `src/data/homepage.ts` | Update spotlight for Disinfonomics book |

---

## Step 1: Create Tools Data File

**File:** `src/data/tools.ts`

```typescript
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
  features?: string[];
  audience?: string;
  icon: string; // Emoji or icon identifier
}

export const tools: Tool[] = [
  {
    id: 'emod',
    name: 'EMOD',
    tagline: 'Microlearning for practitioners',
    description: 'Bite-sized learning modules that help counter-disinformation practitioners do things that actually work.',
    longDescription: `EMOD (European Master of countering Disinformation) provides microlearning modules built from contributions by experts who excel at specific approaches in the counter-disinformation field. Each module shares one specific value, system, or approach that has proven effective.

Whether you're a journalist, fact-checker, policy maker, or educator, EMOD gives you actionable knowledge you can apply immediately.`,
    url: 'https://substance-frontend.vercel.app',
    status: 'live',
    cta: {
      text: 'Try EMOD',
      url: 'https://substance-frontend.vercel.app'
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
    features: [
      'Start your own Resilience Council',
      'Connect with EU DSA framework',
      'Coordinate local responses',
      'Join the European network'
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
```

---

## Step 2: Add CSS Styles for Tools

**File:** `src/styles/global.css`

Add before the PAGE STYLES section:

```css
/* ============================================
   TOOLS SECTION - Homepage tools showcase
   ============================================ */
.tools-section {
  padding: var(--space-2xl) 0;
  background: var(--color-dark);
  color: var(--color-light);
}

.tools-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-md);
}

.tool-card {
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 16px;
  padding: var(--space-lg);
  display: flex;
  flex-direction: column;
  transition: all 0.3s;
}

.tool-card:hover {
  background: rgba(255,255,255,0.08);
  border-color: var(--color-purple);
  transform: translateY(-4px);
}

.tool-card--coming-soon {
  opacity: 0.7;
}

.tool-card--coming-soon:hover {
  transform: none;
  border-color: rgba(255,255,255,0.1);
}

.tool-card__icon {
  font-size: 2.5rem;
  margin-bottom: var(--space-sm);
}

.tool-card__name {
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: var(--space-xs);
}

.tool-card__tagline {
  font-size: 0.875rem;
  color: var(--color-purple-light);
  margin-bottom: var(--space-sm);
}

.tool-card__description {
  color: rgba(255,255,255,0.7);
  font-size: 0.95rem;
  line-height: 1.6;
  flex: 1;
  margin-bottom: var(--space-md);
}

.tool-card__status {
  display: inline-flex;
  align-items: center;
  gap: var(--space-xs);
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: var(--space-md);
}

.tool-card__status--live {
  color: #4ade80;
}

.tool-card__status--live::before {
  content: '';
  width: 6px;
  height: 6px;
  background: #4ade80;
  border-radius: 50%;
}

.tool-card__status--beta {
  color: var(--color-gold);
}

.tool-card__status--coming-soon {
  color: var(--color-muted);
}

.tool-card__cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-xs);
  padding: var(--space-sm) var(--space-md);
  background: var(--color-purple);
  color: var(--color-light);
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 0.875rem;
  border-radius: 100px;
  transition: all 0.3s;
  text-align: center;
}

.tool-card__cta:hover {
  background: var(--color-purple-light);
  transform: translateY(-2px);
}

.tool-card--coming-soon .tool-card__cta {
  background: rgba(255,255,255,0.1);
  color: rgba(255,255,255,0.6);
}

.tool-card--coming-soon .tool-card__cta:hover {
  background: rgba(255,255,255,0.15);
  transform: none;
}

/* ============================================
   TOOLS PAGE - Full tools showcase
   ============================================ */
.tools-page-header {
  padding: calc(80px + var(--space-2xl)) 0 var(--space-xl);
  background: var(--color-dark);
  color: var(--color-light);
}

.tools-page-header__title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  margin-bottom: var(--space-sm);
}

.tools-page-header__subtitle {
  font-size: 1.25rem;
  color: rgba(255,255,255,0.7);
  max-width: 50ch;
}

.tool-detail {
  padding: var(--space-2xl) 0;
  border-bottom: 1px solid rgba(0,0,0,0.1);
}

.tool-detail:last-of-type {
  border-bottom: none;
}

.tool-detail--coming-soon {
  background: #f5f5f7;
}

.tool-detail__inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-xl);
  align-items: center;
}

.tool-detail:nth-child(even) .tool-detail__inner {
  direction: rtl;
}

.tool-detail:nth-child(even) .tool-detail__inner > * {
  direction: ltr;
}

.tool-detail__content {
  max-width: 500px;
}

.tool-detail__icon {
  font-size: 3rem;
  margin-bottom: var(--space-sm);
}

.tool-detail__name {
  font-size: clamp(2rem, 3vw, 2.5rem);
  margin-bottom: var(--space-xs);
}

.tool-detail__tagline {
  font-size: 1.1rem;
  color: var(--color-purple);
  margin-bottom: var(--space-md);
}

.tool-detail__description {
  color: var(--color-muted);
  line-height: 1.8;
  margin-bottom: var(--space-lg);
}

.tool-detail__description p {
  margin-bottom: 1em;
}

.tool-detail__features {
  list-style: none;
  margin-bottom: var(--space-lg);
}

.tool-detail__features li {
  padding: var(--space-xs) 0;
  padding-left: var(--space-md);
  position: relative;
  color: var(--color-muted);
}

.tool-detail__features li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--color-purple);
  font-weight: 600;
}

.tool-detail__audience {
  font-size: 0.875rem;
  color: var(--color-muted);
  margin-bottom: var(--space-lg);
}

.tool-detail__audience strong {
  color: var(--color-dark);
}

.tool-detail__cta {
  display: inline-flex;
  align-items: center;
  gap: var(--space-xs);
  padding: var(--space-sm) var(--space-lg);
  background: var(--color-dark);
  color: var(--color-light);
  font-family: var(--font-display);
  font-weight: 600;
  border-radius: 100px;
  transition: all 0.3s;
}

.tool-detail__cta:hover {
  background: var(--color-purple);
  transform: translateY(-2px);
}

.tool-detail__visual {
  aspect-ratio: 4/3;
  background: linear-gradient(135deg, var(--color-purple) 0%, #3b2a80 100%);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 6rem;
  opacity: 0.9;
}

.tool-detail--coming-soon .tool-detail__visual {
  background: linear-gradient(135deg, #71717a 0%, #52525b 100%);
  opacity: 0.5;
}
```

**Add to responsive section (768px):**

```css
/* Tools mobile */
.tools-grid {
  grid-template-columns: 1fr;
}

.tool-detail__inner {
  grid-template-columns: 1fr;
  text-align: center;
}

.tool-detail:nth-child(even) .tool-detail__inner {
  direction: ltr;
}

.tool-detail__content {
  max-width: 100%;
}

.tool-detail__visual {
  order: -1;
  aspect-ratio: 16/9;
}

.tool-detail__features {
  text-align: left;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
}
```

---

## Step 3: Add Tools Section to Homepage

**File:** `src/pages/index.astro`

### 3.1 Update imports in frontmatter:

```astro
---
import { getCollection } from 'astro:content';
import { spotlight, mediaMentions, successStories } from '../data/homepage';
import { tools } from '../data/tools';
// ... rest of frontmatter
---
```

### 3.2 Add Tools section after Success Stories, before Media Section:

```astro
<!-- Tools Section -->
<section class="tools-section">
  <div class="container">
    <div class="section__header" style="border-color: rgba(255,255,255,0.1);">
      <span class="section__title" style="color: rgba(255,255,255,0.6);">Our Tools</span>
      <a href="/tools" class="section__link">See all tools →</a>
    </div>
    <div class="tools-grid">
      {tools.map((tool) => (
        <div class={`tool-card ${tool.status === 'coming-soon' ? 'tool-card--coming-soon' : ''}`}>
          <span class="tool-card__icon">{tool.icon}</span>
          <h3 class="tool-card__name">{tool.name}</h3>
          <span class="tool-card__tagline">{tool.tagline}</span>
          <span class={`tool-card__status tool-card__status--${tool.status}`}>
            {tool.status === 'live' && 'Live'}
            {tool.status === 'beta' && 'Beta'}
            {tool.status === 'coming-soon' && 'In Development'}
          </span>
          <p class="tool-card__description">{tool.description}</p>
          <a href={tool.cta.url} class="tool-card__cta" target={tool.status !== 'coming-soon' ? '_blank' : undefined} rel={tool.status !== 'coming-soon' ? 'noopener' : undefined}>
            {tool.cta.text}
            {tool.status !== 'coming-soon' && (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15 3 21 3 21 9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
            )}
          </a>
        </div>
      ))}
    </div>
  </div>
</section>
```

---

## Step 4: Create Tools Page

**File:** `src/pages/tools.astro`

```astro
---
import { tools } from '../data/tools';
---

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tools — SAUFEX</title>
  <meta name="description" content="Explore the tools built by SAUFEX to combat disinformation: EMOD microlearning, GetResilience citizen councils, and more.">

  <link rel="canonical" href="https://saufex.eu/tools">
  <meta property="og:title" content="Tools — SAUFEX">
  <meta property="og:description" content="Explore the tools built by SAUFEX to combat disinformation.">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://saufex.eu/tools">

  <link rel="icon" type="image/png" href="/images/logo-primary.png">
  <link rel="stylesheet" href="/styles/global.css">
</head>
<body>
  <a href="#main-content" class="skip-link">Skip to main content</a>

  <!-- Header (same as homepage) -->
  <header class="header">
    <div class="container header__inner">
      <a href="/" class="header__logo">
        <img src="/images/logo-primary.png" alt="">
        <span>SAUFEX</span>
      </a>
      <button class="nav__toggle" id="nav-toggle" aria-label="Toggle navigation" aria-expanded="false">
        <svg class="nav__toggle-open" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M3 12h18M3 6h18M3 18h18"></path>
        </svg>
        <svg class="nav__toggle-close" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M18 6L6 18M6 6l12 12"></path>
        </svg>
      </button>
      <nav class="nav" id="nav">
        <a href="/insights">Insights</a>
        <a href="/research">Research</a>
        <a href="/tools" class="active">Tools</a>
        <a href="/media">Media</a>
        <a href="/partners">Partners</a>
        <a href="/about">About</a>
      </nav>
    </div>
  </header>

  <script>
    const navToggle = document.getElementById('nav-toggle');
    const nav = document.getElementById('nav');
    navToggle?.addEventListener('click', () => {
      const isOpen = nav?.classList.toggle('nav--open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      document.body.classList.toggle('nav-open', isOpen);
    });
  </script>

  <main id="main-content">
    <!-- Page Header -->
    <section class="tools-page-header">
      <div class="container">
        <h1 class="tools-page-header__title">Tools We've Built</h1>
        <p class="tools-page-header__subtitle">
          Practical tools for practitioners, citizens, and organizations fighting information manipulation.
        </p>
      </div>
    </section>

    <!-- Tool Details -->
    {tools.map((tool, index) => (
      <section class={`tool-detail ${tool.status === 'coming-soon' ? 'tool-detail--coming-soon' : ''}`} id={tool.id}>
        <div class="container">
          <div class="tool-detail__inner">
            <div class="tool-detail__content">
              <span class="tool-detail__icon">{tool.icon}</span>
              <h2 class="tool-detail__name">{tool.name}</h2>
              <p class="tool-detail__tagline">{tool.tagline}</p>
              <div class="tool-detail__description">
                {tool.longDescription.split('\n\n').map(para => <p>{para}</p>)}
              </div>
              {tool.features && (
                <ul class="tool-detail__features">
                  {tool.features.map(feature => <li>{feature}</li>)}
                </ul>
              )}
              {tool.audience && (
                <p class="tool-detail__audience">
                  <strong>Built for:</strong> {tool.audience}
                </p>
              )}
              <a
                href={tool.cta.url}
                class="tool-detail__cta"
                target={tool.status !== 'coming-soon' ? '_blank' : undefined}
                rel={tool.status !== 'coming-soon' ? 'noopener' : undefined}
              >
                {tool.cta.text}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
            <div class="tool-detail__visual">
              {tool.icon}
            </div>
          </div>
        </div>
      </section>
    ))}
  </main>

  <!-- Footer (same as homepage) -->
  <footer class="footer">
    <div class="container">
      <div class="footer__inner">
        <div class="footer__brand">
          <img src="/images/logo-primary.png" alt="SAUFEX" style="height: 40px; margin-bottom: 1rem;">
          <p>Combating information manipulation through research, education, and collaboration.</p>
        </div>
        <div class="footer__links">
          <div class="footer__col">
            <h4>Explore</h4>
            <a href="/insights">Insights</a>
            <a href="/research">Research</a>
            <a href="/tools">Tools</a>
            <a href="/media">Media</a>
            <a href="/partners">Partners</a>
            <a href="/about">About</a>
          </div>
          <div class="footer__col">
            <h4>Connect</h4>
            <a href="https://www.linkedin.com/company/saufex" target="_blank">LinkedIn</a>
            <a href="https://soundcloud.com/saufex" target="_blank">Podcast</a>
            <a href="https://www.youtube.com/channel/UCJpiyIP4lWTgpqgJE830Kqw" target="_blank">YouTube</a>
            <a href="https://discord.gg/bvaGd5rahu" target="_blank">Discord</a>
            <a href="mailto:info@saufex.eu">Contact</a>
          </div>
        </div>
      </div>
      <div class="footer__bottom">
        <p class="footer__legal">
          Funded by the European Union. Views expressed are those of the authors only.
        </p>
        <div class="footer__eu">
          <img src="/images/eu-funded.svg" alt="Funded by the European Union">
        </div>
      </div>
    </div>
  </footer>
</body>
</html>
```

---

## Step 5: Update Navigation

**Files:** `src/pages/index.astro` and all other page files

Add "Tools" link to navigation between "Research" and "Media":

```html
<nav class="nav" id="nav">
  <a href="/insights">Insights</a>
  <a href="/research">Research</a>
  <a href="/tools">Tools</a>  <!-- NEW -->
  <a href="/media">Media</a>
  <a href="/partners">Partners</a>
  <a href="/about">About</a>
</nav>
```

Also update footer navigation to include Tools link.

---

## Step 6: Update Spotlight for Disinfonomics Book

**File:** `src/data/homepage.ts`

Once the book file/cover is provided, update:

```typescript
export const spotlight = {
  active: true,
  type: 'book' as const,
  title: 'Disinfonomics: An Economic Framework',
  description: 'Understanding and undermining disinformation through economic analysis.',
  image: '/images/disinfonomics-cover.png', // Add actual cover image
  cta: {
    text: 'Download PDF',
    url: '/files/disinfonomics.pdf' // Or external link
  }
};
```

---

## Step 7: Sync CSS and Test

```bash
cp src/styles/global.css public/styles/global.css
npm run build
npm run dev
```

---

## New Homepage Structure (After Implementation)

```
Hero
Spotlight (Disinfonomics book)
Featured (Latest Insight)
Recent Insights
In The Media
Success Stories
Tools Section ← NEW
Media Section (Podcast/Webinars)
About Strip
Partners
Footer
```

---

## Verification Checklist

- [ ] Tools section displays 3 cards on homepage
- [ ] Cards link to correct external URLs (EMOD, GetResilience)
- [ ] Coming soon card has muted styling
- [ ] /tools page loads with all tool details
- [ ] Navigation includes Tools link on all pages
- [ ] Footer includes Tools link
- [ ] Responsive: cards stack on mobile
- [ ] Build completes without errors
- [ ] External links open in new tab

---

## Assets Needed

| Asset | Status | Notes |
|-------|--------|-------|
| Disinfonomics book cover | Waiting | User to provide |
| Disinfonomics PDF | Waiting | User to provide |
| EMOD screenshot | Optional | Could enhance tools page |
| GetResilience screenshot | Optional | Could enhance tools page |
| Tool #3 details | Waiting | User to provide project outline |

---

## Future Enhancements

1. **Tool screenshots/previews** - Replace emoji icons with actual screenshots
2. **Usage stats** - "500+ practitioners trained" type metrics
3. **Testimonials** - Quotes from tool users
4. **Video demos** - Embedded tool walkthroughs
5. **Tool #3 integration** - Full details when ready
