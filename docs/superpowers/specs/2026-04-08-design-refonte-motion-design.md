# Design Spec: Refonte Motion & Polish — ImmoMatch

**Date**: 2026-04-08
**Scope**: ConceptSection, FonctionnementSection, ReseauSection, TarifsSection
**Out of scope**: HeroSection (unchanged)

## Summary

Add Framer Motion animations and micro-interactions to the 4 content sections below the hero. The hero already sets the quality bar — the goal is to bring the rest of the page to the same level of polish and fluidity. No layout changes, no content changes (except Agent price 200 → 199 €).

## Dependencies

- Add `framer-motion` to project dependencies

## Animation System (shared)

### Title Reveal (mask animation)

Every section H2 uses the same reveal pattern:

- Wrapper div with `overflow: hidden`
- Inner text animated with Framer Motion: `y: "100%"` → `y: "0%"`
- Trigger: `whileInView`, `viewport: { once: true, amount: 0.3 }`
- Duration: 0.8s, `ease: [0.25, 0.46, 0.45, 0.94]` (same as hero)
- Word-level stagger: 50ms between words (split title into words, animate each)

### Content Fade-Up

All content blocks below titles:

- Initial: `opacity: 0, y: 40`
- Animate to: `opacity: 1, y: 0`
- Trigger: `whileInView`, `viewport: { once: true, amount: 0.3 }`
- Duration: 0.6s, ease-out
- Delay: 200ms after title reveal starts

### Card Stagger

Grid items (cards, plan cards, benefit cards):

- Same fade-up animation as content
- Parent uses `staggerChildren: 0.1` (100ms between each card)
- Trigger: `whileInView` on parent container

### Stat Counter

Animated number counting from 0 to target value:

- Duration: 1.5s
- Easing: decelerate (fast start, slow finish)
- Trigger: `whileInView`, `viewport: { once: true }`
- Handles special formats: "0 €", "3", "≥ 40"

### Hover Micro-interactions

All interactive cards:

- `scale: 1.02` on hover
- Border opacity increase: `border-white/20` → `border-white/40`
- `transition: { duration: 0.2 }`

### Reusable Hooks / Components

- `<TitleReveal>` — component wrapping any H2 with mask animation
- `<FadeUp>` — component wrapping content with fade-up + whileInView
- `<StaggerContainer>` + `<StaggerItem>` — parent/child for stagger grids
- `useCountUp(target, duration)` — hook returning animated number value

## Section-Specific Details

### ConceptSection

- Title "Trois modeles. Un seul qui preserve l'agent." → `<TitleReveal>`
- Subtitle → `<FadeUp delay={0.2}>`
- 3 model cards → `<StaggerContainer>` with 100ms stagger
- Each card's bullet list → stagger within card (50ms per line)
- ImmoMatch card (highlighted): permanent subtle glow `box-shadow: 0 0 40px rgba(255,255,255,0.05)`
- Hover on all cards: scale + border lighten

### FonctionnementSection

- Title → `<TitleReveal>`
- 3 steps → `<StaggerContainer>` with 150ms stagger
- Step numbers (01, 02, 03): quick counter animation 00 → value (300ms), then content fades up beside it
- Step 3 sub-steps (3 passes IA): cascade appearance with 100ms stagger, subtle arrow micro-animation
- Horizontal separator lines between steps: animated width `0%` → `100%` (0.4s) triggered at scroll
- Hover on step blocks: border lightens subtly

### ReseauSection

- Title "Plus seul face au marche." → `<TitleReveal>`
- 3 stat values → `useCountUp` with 1.5s duration, stagger 100ms between stats
- Stat labels → `<FadeUp delay={0.2}>` after their number
- Separator between stats and benefits → animated width 0% → 100%
- 4 benefit cards → `<StaggerContainer>` with 100ms stagger (0ms, 100ms, 200ms, 300ms)
- Hover on benefit cards: scale + border lighten

### TarifsSection

- Title → `<TitleReveal>`
- Subtitle → `<FadeUp delay={0.2}>`
- 3 pricing cards → `<StaggerContainer>` with 100ms stagger
- Agent card (highlighted) arrives 50ms after the other two (extra delay for emphasis)
- Price numbers (99, 199, 149) → `useCountUp` with 0.8s duration
- "€" and "/ mois" → fade-in 200ms after price counter finishes
- Feature list lines → stagger within each card (50ms per line)
- CTA buttons → fade-up last in each card
- Highlighted card: subtle glow `box-shadow: 0 0 40px rgba(255,255,255,0.08)`
- Hover on all cards: scale + border lighten
- Footer text "Pas de commission..." → `<FadeUp>` final element
- **Content change**: Agent plan price 200 € → 199 €

## Files Modified

- `package.json` — add `framer-motion`
- `src/components/ConceptSection.tsx` — add animations
- `src/components/FonctionnementSection.tsx` — add animations
- `src/components/ReseauSection.tsx` — add animations
- `src/components/TarifsSection.tsx` — add animations + price change
- `src/hooks/useCountUp.ts` — new file, counter hook
- `src/components/motion/TitleReveal.tsx` — new file, title mask component
- `src/components/motion/FadeUp.tsx` — new file, fade-up wrapper
- `src/components/motion/StaggerContainer.tsx` — new file, stagger parent/child

## Files NOT Modified

- `src/components/HeroSection.tsx` — no changes
- `src/App.tsx` — no changes
- `src/index.css` — no changes (glow effect applied inline via Tailwind arbitrary values)
