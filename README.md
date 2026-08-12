# Rebuild — landing page

Next.js 16.3 (App Router, Turbopack, React 19, Tailwind v4). Long-form structure
modeled on quittrapp.com: hero → press → mission/stats → how-it-works walkthrough →
coin ledger → creators → reviews → features → achievements → benefits → community →
blog → FAQ → final CTA → footer.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Design tokens

All in `src/app/globals.css`. Unchanged from the previous version — see that section
below.

| Token | Value |
|---|---|
| `--color-bg` | `#0d0d0d` |
| `--color-surface` | `#0f0f0f` |
| `--color-border` | `#292929` |
| `--color-accent` | `#f27540` — **still a placeholder, see below** |
| `--color-text-primary` | `#f2f2f0` |
| `--color-text-secondary` | `#8a8a88` |
| `--color-text-tertiary` | `#55534f` |

### Accent color — still needs confirming

Your original spec (`red 0.95, green 0.42/0.5, blue 0.25`) gave two different values
for green, so it's still a guess: `Color(red: 0.95, green: 0.42, blue: 0.25)` →
`#f27540`. One-line fix in `globals.css` once you confirm the real numbers.

## Content that is placeholder — read before publishing

This page borrows Quittr's structure, which leans heavily on social proof (press
logos, creator endorsements, user counts, testimonials, community activity). Rebuild
doesn't have any of that yet, so all of it is placeholder and clearly labeled as such
in the UI copy itself:

- **Press strip** (`PressStrip.tsx`) — empty dashed boxes, no outlet names invented.
- **Mission stats** (`Mission.tsx`) — "38 min", "71%", "12,400+" are illustrative, not
  real numbers.
- **Creator partners** (`Creators.tsx`) — generic `@handle` placeholders, no real
  people attached.
- **Reviews** (`Reviews.tsx`) — sample quotes, not real users.
- **Community stories** (`CommunityStories.tsx`) — sample forum-style posts and
  member counts.
- **Blog teasers** (`BlogTeasers.tsx`) — post titles only, no real posts written, image
  slots are dashed placeholder boxes for you to fill in manually.

**One thing to flag directly:** the "Community stories" section (forum posts, active
member count, posts-today counter) implies Rebuild has an in-app community/social
feature. That wasn't part of your original spec — just the blocking, challenges, and
coin economy. If Rebuild doesn't actually have a community feature, cut that section
(`CommunityStories.tsx`, imported in `page.tsx`) before this goes live, since shipping
it as-is would describe a feature that doesn't exist. If it does or will, leave it in
and swap the placeholder posts for real ones.

## Fonts

Self-hosted via `@fontsource` (Bricolage Grotesque / IBM Plex Sans / IBM Plex Mono) —
no runtime call to Google Fonts.

## Structure

```
src/app/            layout.tsx, page.tsx, globals.css
src/components/
  Nav, Hero, PressStrip, Mission, HowItWorks (zigzag), CoinLedger (signature),
  Creators, Reviews, Features, AchievementOrbs, Benefits, CommunityStories,
  BlogTeasers, FAQ, FinalCTA, Footer
  PhoneFrame, PhoneMockup, PhoneScreens — shared phone-chrome + screen variants
  Reveal — scroll-in wrapper, no extra deps
```
