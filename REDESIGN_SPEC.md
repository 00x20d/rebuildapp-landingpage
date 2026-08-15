# Rebuild Landing Page Redesign — MenuFit-style spec

Goal: restructure the landing page to mirror [MenuFit](https://menufit.com/)'s layout and
storytelling rhythm, reusing existing sections/components wherever possible, and rewriting
copy for Rebuild's niche (screen-time app: block by default → earn coins via brain
challenges → spend coins to unlock apps).

**Scope rules**

- Layout + copy only. No new assets from us (hero logo background, app icons, etc. — user supplies).
- Reuse existing components; prefer editing over creating.
- Keep the current dark theme + accent palette unless a specific issue says otherwise.
- Each checkbox is one shippable change, implemented independently.

**Legend:** ♻️ reuse (edit existing) · ✨ new component

---

## Mapping table (current → MenuFit → action)

| # | MenuFit section | Current equivalent | Action |
|---|---|---|---|
| Hero | badge + headline + mockup | `Hero.tsx` | ♻️ restyle ✅ in progress |
| Nav | logo / links / CTA | `Nav.tsx` | ♻️ minor polish |
| Feature 1 | "Know exactly what to order" | `HowItWorks.tsx` | ♻️ restyle |
| Logo strip | "Your favorite restaurants" | `PressStrip.tsx` (currently disabled) | ♻️→✨ app logos |
| Feature 2 | "Search any restaurant" | — | ✨ new |
| Big statement | "It's not where you eat" | `Mission.tsx` (sticky scroll) | ♻️ restyle |
| Testimonials | influencer carousel | `Reviews.tsx` (grid) / `Benefits.tsx` | ♻️→ cards (no influencers — see issue 8) |
| Dual CTA | "Bulking or Cutting?" | — | ✨ new |
| FAQ | accordion | `FAQ.tsx` | ♻️ minor restyle |
| Final CTA | "Ready to eat guilt free?" | `FinalCTA.tsx` | ♻️ copy |
| Footer | footer | `Footer.tsx` | ♻️ copy |
| (cut/absorb) | — | `CoinLedger.tsx`, `Features.tsx`, `Benefits.tsx` | decide placement |

---

## Issues

### Structure

- [ ] **1. ~~Reorder the page~~ — superseded: NO reordering.**
  The user wants a redesign of each section in place, not a reorder. Sections keep their current order (Hero → Mission → HowItWorks → CoinLedger → Reviews → Features → Benefits → FAQ → FinalCTA → Footer). Each section's internal layout is restyled to match MenuFit.

- [x] **2. Decide theme/palette**
  ✅ Decided: keep the current dark theme + accent palette as-is.

### Hero

- [x] **3. Restyle Hero (♻️ `Hero.tsx`)**
  MenuFit-style stacked hero:
  1. Headline: "The #1 App For / Cutting Screen Time" (accent on second line, `<br>`)
  2. Trust line: "Join over 2,000+ members rebuilding their attention" (number TBD)
  3. App Store badge (image + link to listing — TODO: real URL/asset)
  4. Full-width app-icons background + bigger phone mockup
  5. Download CTA: download icon + "Download on iOS"
  "Finally scroll on purpose." + description moved into a new `Statement.tsx` section below the hero (smaller heading, larger description).
  Placeholder image slots: `/hero/logo-background.*`, `/hero/phone-mockup.*`, `/hero/app-store-badge.*`.

### Feature sections

- [ ] **4. "Know exactly what to open" (♻️ `HowItWorks.tsx`)**
  Restyle the 4-step section into MenuFit's feature-1 pattern: big two-line statement ("Know exactly what to open. Stay focused.") + supporting paragraph, followed by the existing alternating phone/text steps. Keep the 01/02/03/04 numbering. Copy: mirror MenuFit's "we score meals for your body and goal" → "we score unlocks against your goals and your streak."

- [ ] **5. Supported-apps strip (♻️→✨ from `PressStrip.tsx`)**
  Replace press logos with an app-icon strip: "Your most-used apps. Your personalized block list." Show Instagram, TikTok, YouTube, X, Reddit, Snapchat + a "+ every app" chip. Use simple monogram/lock placeholders for now (user supplies real icons).

- [ ] **6. "Block any app in seconds" feature (✨ new)**
  Mirror MenuFit's search section: phone mockup (search bar + app list) beside text — "Block any app in seconds." + copy about setting a coin price per app, categories, and system-level enforcement. Reuse `PhoneFrame` + a new small screen, or `PhoneMockup`.

- [ ] **7. Big statement (♻️ `Mission.tsx`)**
  Convert the sticky scroll-reveal into MenuFit's giant static typography: **"It's not how long you scroll — it's what you open."** Keep the 3 stats (they're good social proof) below it. Optionally keep the scroll-reveal effect but simplify — flag for user to decide.

### Social proof

- [ ] **8. Replace influencer section with user-results cards (♻️ `Benefits.tsx`)**
  No influencers yet — don't mislead. In MenuFit's testimonials position, use "What users commonly report" (`Benefits.tsx`) instead. Convert the 6 plain chips into nicer cards (icon + label + one-line description) and style the heading like MenuFit's. Iterate later once real testimonials exist.

- [ ] **9. Place/absorb remaining sections**
  Decide: keep `CoinLedger` ("Every coin, itemized") and `Features` (6 image cards) as feature detail sections, and `Benefits` (6 chips) as a results grid — or fold them into issues 4–6. Mark the chosen home + order in `page.tsx`.

### Bottom of page

- [ ] **10. Dual CTA (✨ new)**
  MenuFit's "Bulking or Cutting?" moment: **"Cutting back or cutting the noise? Rebuild has you covered."** + subtext + both store buttons (reuse `FinalCTA`'s button markup). Includes a "Join over X members" trust line.

- [ ] **11. FAQ polish (♻️ `FAQ.tsx`)**
  Match MenuFit's headline treatment ("Frequently Asked Questions" — big display text) and tighten answers to the new copy voice. Keep the accordion behavior.

- [ ] **12. Final CTA + Footer copy (♻️ `FinalCTA.tsx`, `Footer.tsx`)**
  Final CTA → "Ready to scroll on purpose?" + one-line subtext. Footer tagline → "Screen time you earn back, spent on purpose." (already close — verify).

### Copy & cleanup

- [ ] **13. Full-page copy pass**
  Read every section top-to-bottom for a single consistent voice: "earn → spend → stay on budget." Update anything that reads stale after issues 3–12.

---

## Open questions

1. ~~Dark theme (keep) or light theme (match MenuFit)?~~ ✅ Keep dark theme.
2. Keep the sticky scroll-reveal in the Mission/big-statement section, or go static like MenuFit?
3. Real number for the "Join over X members" badge, or keep the neutral "Join thousands" placeholder?
