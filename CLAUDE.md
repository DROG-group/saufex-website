# SAUFEX Website Redesign - Project Context

## What This Is
A complete redesign of saufex.eu - the website for SAUFEX, an EU Horizon Europe funded research project combating foreign information manipulation and interference (FIMI).

## Project Location
`/Users/ruurdoosterwoud/saufex-new/`

## Tech Stack
- **Framework:** Astro (static site generator)
- **Styling:** Custom CSS (no framework)
- **Content:** Markdown blog posts via Astro content collections
- **Deployment:** GitHub Pages (planned)

## Key Commands
```bash
cd ~/saufex-new
npm run dev      # Development server (localhost:4321)
npm run build    # Build static site to /dist
npm run preview  # Preview built site
```

## Current Status
**Homepage design approved.** Bold, modern design with:
- Full-screen hero with dramatic headline
- Space Grotesk display font
- Purple (#6b4ce6) accent color
- Clean, minimal navigation
- Featured latest post section
- Podcast/media highlights

**Inner pages need updating** to match new design system.

---

## Project Structure
```
saufex-new/
├── src/
│   ├── content/
│   │   └── blog/           # 116 Markdown blog posts
│   ├── layouts/
│   │   └── BaseLayout.astro # Old layout (needs update)
│   ├── pages/
│   │   ├── index.astro     # Homepage (NEW DESIGN ✓)
│   │   ├── about.astro     # Needs redesign
│   │   ├── media.astro     # Needs redesign
│   │   ├── partners.astro  # Needs redesign
│   │   ├── research.astro  # Needs redesign
│   │   └── insights/
│   │       ├── index.astro      # Blog listing (needs redesign)
│   │       └── [...slug].astro  # Blog post template (needs redesign)
│   └── styles/
│       └── global.css      # New design system (v3)
├── public/
│   ├── images/             # Logos, EU badge, partner logos
│   └── styles/
│       └── global.css      # Copy of styles (for static serving)
├── content.config.ts       # Astro content collection config
├── astro.config.mjs        # Astro config
├── IMPLEMENTATION-PLAN.md  # Detailed todo list
└── CLAUDE.md               # This file
```

---

## Design System (v3)

### Colors
```css
--color-dark: #0a0a0f;
--color-light: #fafafa;
--color-purple: #6b4ce6;
--color-purple-light: #8b6cf6;
--color-gold: #d4a000;
--color-muted: #71717a;
```

### Typography
- **Display:** Space Grotesk (headings)
- **Body:** Inter (text)

### Key Classes
- `.hero` - Full-screen hero sections
- `.featured` - Dark background featured content
- `.content-section` - Standard content sections
- `.post-card` - Blog post cards
- `.media-card` - Media/podcast cards
- `.section__header` - Section headers with title + link

---

## What's Done
1. ✅ Astro project setup
2. ✅ New design system (CSS v3)
3. ✅ Homepage with new bold design
4. ✅ Blog posts migrated (116 posts)
5. ✅ Content collection configured
6. ✅ Logos copied (7 color variants)
7. ✅ Partner logos copied

## What's Left (Priority Order)

### Phase 1: Inner Pages
- [ ] Update BaseLayout.astro to match new design
- [ ] Insights listing page - new card design
- [ ] Blog post template - new article styling
- [ ] Media page - match new design
- [ ] Research page - match new design
- [ ] Partners page - match new design
- [ ] About page - match new design

### Phase 2: Navigation
- [ ] Mobile hamburger menu
- [ ] Active state for current page

### Phase 3: Polish
- [ ] Featured visual on homepage (decide: image or remove)
- [ ] All partner logos sourced
- [ ] Blog posts: strip boilerplate headers
- [ ] Discord link in footer (subtle)

### Phase 4: Technical
- [ ] SEO meta tags
- [ ] Sitemap
- [ ] GitHub Actions deployment
- [ ] Performance optimization

---

## Key Decisions Made
1. **Astro over plain HTML** - Better for 116 blog posts, component reuse
2. **No React** - Astro components sufficient for static content site
3. **Bold typography** - Space Grotesk for personality, not generic
4. **Purple accent** - From original brand, used sparingly
5. **Gold as secondary** - Used very sparingly (dots, occasional accents)
6. **No events calendar** - Blog posts/podcast = activity (low maintenance)
7. **Discord subtle** - Keep in footer, not prominent
8. **LinkedIn primary social** - No Twitter/X

---

## Content Sources
- **Blog posts:** `~/saufex.eu/blog/posts/` (original)
- **Old site:** `~/saufex.eu/site/` (reference for content)
- **New logos:** `~/Downloads/saufex logo new *.png`
- **Podcast:** SoundCloud - soundcloud.com/saufex
- **YouTube:** youtube.com/channel/UCJpiyIP4lWTgpqgJE830Kqw
- **LinkedIn:** linkedin.com/company/saufex

---

## Important Notes
- Inner pages still use old BaseLayout with old CSS variables
- Need to either update BaseLayout or have pages use inline layout like homepage
- Blog posts have boilerplate at top (logo, contact links) - hidden via CSS but should be stripped
- Some partner logos missing - need to source from partner websites
- The "featured visual" on homepage is placeholder (✦ symbol) - needs decision

---

## How to Continue Work

1. **Build the site first** to check current state:
   ```bash
   cd ~/saufex-new && npm run build && npm run preview
   ```

2. **Check IMPLEMENTATION-PLAN.md** for detailed task list

3. **After CSS changes**, copy to public:
   ```bash
   cp ~/saufex-new/src/styles/global.css ~/saufex-new/public/styles/global.css
   ```

4. **Test on localhost:4321** before any major changes

---

## Owner
Ruurd Oosterwoud (ruurd@...) - DROG organization

## Related Projects
- Original site repo: `~/saufex.eu/` (DROG-group/saufex.eu on GitHub)
- This will replace the original when ready
