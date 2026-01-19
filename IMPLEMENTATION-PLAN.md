# SAUFEX Website Redesign - Implementation Plan

## Overview
Complete the bold redesign of saufex.eu with all detail-level refinements.

**Status:** Homepage design approved. Inner pages and refinements needed.

---

## Phase 1: Core Pages (Match New Design System)

### 1.1 Insights Listing Page (`/insights`)
- [ ] Update to use new typography and spacing
- [ ] Post cards with numbers, hover effects
- [ ] Section header style matching homepage
- [ ] Add category filters (optional)
- [ ] Search functionality (optional)
- [ ] Pagination or "load more"

### 1.2 Individual Blog Post Template (`/insights/[slug]`)
- [ ] Article header with back link
- [ ] Bold title styling
- [ ] Author and date meta
- [ ] Clean article content styling
- [ ] Remove old boilerplate from posts (logo, contact links at top)
- [ ] Related posts at bottom (optional)

### 1.3 Media Page (`/media`)
- [ ] Match new design system
- [ ] Podcast section with SoundCloud embed
- [ ] Episode list with guest names prominent
- [ ] YouTube/webinar section
- [ ] Clean card layouts

### 1.4 Research Page (`/research`)
- [ ] Publications list (clean, not bureaucratic)
- [ ] Reports/deliverables section
- [ ] EMOD tools link
- [ ] Download links styled properly

### 1.5 Partners Page (`/partners`)
- [ ] Partner cards with descriptions
- [ ] Actual partner logos (need to source)
- [ ] Collaboration CTA section

### 1.6 About Page (`/about`)
- [ ] Mission statement
- [ ] What we do section
- [ ] EU Horizon funding info
- [ ] Contact information

---

## Phase 2: Navigation & Layout

### 2.1 Header
- [ ] Mobile hamburger menu
- [ ] Mobile navigation drawer
- [ ] Active state for current page

### 2.2 Footer
- [ ] Add Discord link (subtle, in Connect section)
- [ ] Verify all links work
- [ ] Privacy policy link (if needed)

### 2.3 Base Layout Component
- [ ] Create reusable layout for inner pages
- [ ] Consistent header/footer across all pages
- [ ] Meta tags and SEO setup

---

## Phase 3: Visual Refinements

### 3.1 Homepage
- [ ] Featured section visual - decide: image, illustration, or remove
- [ ] Hero background - subtle texture or keep clean?
- [ ] Partner logos - source all actual logos
- [ ] Test on mobile devices

### 3.2 Typography
- [ ] Verify font loading performance
- [ ] Check line heights on long-form content
- [ ] Heading hierarchy on all pages

### 3.3 Colors & Spacing
- [ ] Consistent purple accent usage
- [ ] Gold used sparingly (currently just dots)
- [ ] Spacing consistency across pages

### 3.4 Interactions
- [ ] Hover states on all interactive elements
- [ ] Focus states for accessibility
- [ ] Smooth scroll behavior
- [ ] Page transitions (optional)

---

## Phase 4: Content

### 4.1 Blog Posts Cleanup
- [ ] Script to strip boilerplate header from all 116 posts
- [ ] Verify all posts render correctly
- [ ] Check for broken internal links

### 4.2 Images & Assets
- [ ] Collect all partner logos
- [ ] EU funding badge (have it)
- [ ] Any hero/feature images needed
- [ ] Optimize image sizes

### 4.3 Copy Review
- [ ] Hero headline - final approval
- [ ] About page copy
- [ ] Research page - verify publication links work
- [ ] Media page - verify all embed URLs

---

## Phase 5: Technical

### 5.1 Performance
- [ ] Optimize font loading
- [ ] Image optimization
- [ ] Lazy loading for below-fold content
- [ ] Check Lighthouse scores

### 5.2 SEO
- [ ] Meta titles and descriptions per page
- [ ] Open Graph tags for social sharing
- [ ] Sitemap generation
- [ ] robots.txt

### 5.3 Accessibility
- [ ] Keyboard navigation
- [ ] Screen reader testing
- [ ] Color contrast verification
- [ ] Alt text on images

### 5.4 Build & Deploy
- [ ] GitHub Actions workflow for deployment
- [ ] Test build on clean environment
- [ ] Domain/DNS setup (if changing)
- [ ] Redirects from old URLs (if structure changed)

---

## Phase 6: Final QA

- [ ] Test all pages on desktop (Chrome, Firefox, Safari)
- [ ] Test all pages on mobile (iOS, Android)
- [ ] Test all external links
- [ ] Test podcast/YouTube embeds
- [ ] Verify blog post rendering (sample of 10-20 posts)
- [ ] Check 404 page
- [ ] Final stakeholder review

---

## Assets Needed From You

1. **Partner logos** - High-res versions of all 6 consortium partners
2. **Featured visual decision** - Image for featured section or remove it?
3. **Hero imagery** - Any background image/texture desired?
4. **Copy approval** - Review headlines and page descriptions
5. **Any missing publications** - PDFs and links for research page

---

## Questions to Resolve

1. **Categories for blog posts?** - Do you want to filter by topic?
2. **Search?** - Add search functionality for 115+ posts?
3. **Newsletter signup?** - Any email capture needed?
4. **Privacy policy?** - Do you have one / need one?
5. **Analytics?** - Google Analytics or alternative?
6. **Old URL redirects?** - Will URL structure change?

---

## Estimated Work Breakdown

| Phase | Items |
|-------|-------|
| Phase 1: Core Pages | 6 pages to build/update |
| Phase 2: Navigation | Header, footer, layout |
| Phase 3: Visual | Polish and refinements |
| Phase 4: Content | Blog cleanup, assets |
| Phase 5: Technical | SEO, performance, deploy |
| Phase 6: QA | Testing across devices |

---

## Next Steps

1. Approve this plan
2. Answer questions above
3. Provide missing assets
4. I'll work through phases sequentially
