# Homepage Enhancement Plan - Media Mentions, Spotlight & Success Stories

## Goal
Add three new sections to the homepage:
1. **Spotlight** - Prominent banner for featuring books, tools, or major announcements
2. **In The Media** - Grid of media mentions/press coverage
3. **Success Stories** - Teaser for case studies

## Current Homepage Structure
```
Hero
Featured (Latest Insight)
Recent Insights
Media Section (Podcast/Webinars)
About Strip
Partners
Footer
```

## Proposed New Structure
```
Hero
┌─ Spotlight (optional, toggleable) ─────────────┐
│  For books, tools, major announcements         │
└────────────────────────────────────────────────┘
Featured (Latest Insight)
Recent Insights
┌─ In The Media ─────────────────────────────────┐
│  Press coverage cards with source logos        │
└────────────────────────────────────────────────┘
┌─ Success Stories ──────────────────────────────┐
│  Poland Resilience Council case study teaser   │
└────────────────────────────────────────────────┘
Media Section (Podcast/Webinars)
About Strip
Partners
Footer
```

---

## Implementation Plan

### Step 1: Create Data File for Dynamic Content
**File:** `src/data/homepage.ts`

Contains:
- `spotlight` - Featured item (book/tool) with toggle
- `mediaMentions` - Array of press coverage
- `successStories` - Array of case studies

```typescript
export const spotlight = {
  active: true,  // Toggle on/off
  type: 'book',  // 'book' | 'tool' | 'announcement'
  title: 'New Book: International Disinformation Handbook',
  description: 'Comprehensive guide to analyzing and responding to disinformation campaigns.',
  image: '/images/book-cover.png',
  cta: { text: 'Get the Book', url: 'https://...' }
};

export const mediaMentions = [
  {
    source: 'TOK FM',
    title: 'Russia spends $4B to mess with our heads',
    url: 'https://www.tokfm.pl/...',
    date: '2024-11-15',
    language: 'pl'
  },
  // ... more
];

export const successStories = [
  {
    title: 'Poland\'s Resilience Council',
    summary: 'First EU nation to implement SAUFEX Resilience Council...',
    slug: 'poland-resilience-council'
  }
];
```

### Step 2: Add CSS Styles
**File:** `src/styles/global.css`

New styles for:
- `.spotlight` - Full-width banner with image + text
- `.media-mentions` - Grid of press cards
- `.success-stories` - Case study teaser section

### Step 3: Update Homepage
**File:** `src/pages/index.astro`

- Import data from `homepage.ts`
- Add Spotlight section (conditionally rendered)
- Add In The Media section
- Add Success Stories section

### Step 4: Create Impact/Press Page (Optional)
**File:** `src/pages/impact.astro`

Full listing of all media mentions and success stories.

---

## Files to Modify

| File | Action |
|------|--------|
| `src/data/homepage.ts` | Create (new) |
| `src/styles/global.css` | Add new section styles |
| `src/pages/index.astro` | Add 3 new sections |
| `public/styles/global.css` | Sync after CSS changes |

---

## Media Mentions Data (from user)

```
1. TOK FM - "Russia spends $4B on disinformation"
   https://www.tokfm.pl/ludzie/rosja-wydaje-4-mld-dolarow-by-mieszac-nam-w-glowach-co-na-to-polska

2. Nauka w Polsce - "PORT leads EU consortium"
   https://naukawpolsce.pl/aktualnosci/news%2C100663%2Cwroclaw-lukasiewicz-port-liderem-konsorcjum-w-projekcie-dot-walki-z

3. PORT Łukasiewicz (EN) - "Leading EU project"
   https://port.lukasiewicz.gov.pl/en/lukasiewicz-port-is-the-leader-of-eu-international-project-on-countering-disinformation/

4. iRozhlas (Czech) - "Poland journalists Russian influence"
   https://www.irozhlas.cz/zpravy-svet/polsko-novinar-vyhrozovani-vliv-rusko-rzeckowski-rsf_2507290702_ula

5. Wojna.co.pl - "PORT leads consortium"
   https://wojna.co.pl/lukasiewicz-port-liderem-konsorcjum-w-projekcie-dot-walki-z-dezinformacja-w-ue-8925965.html
```

---

## Success Story Data

**Poland's Resilience Council (2024)**
- First EU nation to implement SAUFEX Resilience Council
- Integrated government, civil society, and academic experts
- Successfully identified and neutralized election disinformation campaigns
- Now inspiring similar councils across EU

---

## Verification

1. Run `npm run build` - should complete without errors
2. Run `npm run preview` - check homepage at localhost
3. Verify:
   - Spotlight banner appears (when active=true)
   - Media mentions display in grid
   - Success story teaser links correctly
   - All sections responsive on mobile
