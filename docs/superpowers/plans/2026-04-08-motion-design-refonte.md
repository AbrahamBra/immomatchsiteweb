# Motion Design Refonte — Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add Framer Motion animations (title reveals, fade-ups, card staggers, stat counters, hover micro-interactions) to the 4 content sections below the hero.

**Architecture:** Create 4 reusable motion primitives (`TitleReveal`, `FadeUp`, `StaggerContainer`/`StaggerItem`, `useCountUp`), then integrate them into each existing section component. No layout changes — only wrapping existing elements with motion components.

**Tech Stack:** React 18, Framer Motion, Tailwind CSS, TypeScript

**Spec:** `docs/superpowers/specs/2026-04-08-design-refonte-motion-design.md`

---

## File Structure

```
src/
├── hooks/
│   └── useCountUp.ts          (NEW — animated counter hook)
├── components/
│   ├── motion/
│   │   ├── TitleReveal.tsx     (NEW — mask reveal for H2 titles)
│   │   ├── FadeUp.tsx          (NEW — fade-up wrapper with whileInView)
│   │   └── StaggerContainer.tsx (NEW — stagger parent + child item)
│   ├── ConceptSection.tsx      (MODIFY — wrap elements with motion components)
│   ├── FonctionnementSection.tsx (MODIFY — wrap elements, animated separators)
│   ├── ReseauSection.tsx       (MODIFY — wrap elements, stat counters)
│   └── TarifsSection.tsx       (MODIFY — wrap elements, price counters, content fix)
```

---

## Chunk 1: Dependencies & Motion Primitives

### Task 1: Install framer-motion

**Files:**
- Modify: `package.json`

- [ ] **Step 1: Install framer-motion**

Run: `npm install framer-motion`

- [ ] **Step 2: Verify installation**

Run: `npm ls framer-motion`
Expected: `framer-motion@` with version number, no errors

- [ ] **Step 3: Commit**

```bash
git add package.json package-lock.json
git commit -m "deps: add framer-motion"
```

---

### Task 2: Create useCountUp hook

**Files:**
- Create: `src/hooks/useCountUp.ts`

- [ ] **Step 1: Create the hook file**

```ts
import { useInView, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useEffect, useRef } from "react"

export function useCountUp(target: number, duration = 1.5) {
  const ref = useRef<HTMLSpanElement>(null)
  const motionValue = useMotionValue(0)
  const spring = useSpring(motionValue, {
    duration: duration * 1000,
    bounce: 0,
  })
  const rounded = useTransform(spring, (v: number) => Math.round(v))
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  useEffect(() => {
    if (isInView) {
      motionValue.set(target)
    }
  }, [isInView, motionValue, target])

  return { ref, rounded }
}
```

- [ ] **Step 2: Verify TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: no errors

- [ ] **Step 3: Commit**

```bash
git add src/hooks/useCountUp.ts
git commit -m "feat: add useCountUp animated counter hook"
```

---

### Task 3: Create TitleReveal component

**Files:**
- Create: `src/components/motion/TitleReveal.tsx`

- [ ] **Step 1: Create the component file**

```tsx
import { motion } from "framer-motion"

interface Segment {
  text: string
  className?: string
}

interface TitleRevealProps {
  segments: Segment[]
  className?: string
  style?: React.CSSProperties
}

export function TitleReveal({ segments, className, style }: TitleRevealProps) {
  const words = segments.flatMap((segment) =>
    segment.text.split(/\s+/).map((word) => ({
      word,
      className: segment.className,
    }))
  )

  return (
    <h2 className={className} style={style}>
      {words.map((item, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <motion.span
            className={`inline-block ${item.className ?? ""}`}
            initial={{ y: "100%" }}
            whileInView={{ y: "0%" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: i * 0.05,
            }}
          >
            {item.word}
          </motion.span>
        </span>
      )).reduce<React.ReactNode[]>((acc, el, i) => {
        if (i === 0) return [el]
        return [...acc, " ", el]
      }, [])}
    </h2>
  )
}
```

- [ ] **Step 2: Verify TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: no errors

- [ ] **Step 3: Commit**

```bash
git add src/components/motion/TitleReveal.tsx
git commit -m "feat: add TitleReveal mask animation component"
```

---

### Task 4: Create FadeUp component

**Files:**
- Create: `src/components/motion/FadeUp.tsx`

- [ ] **Step 1: Create the component file**

```tsx
import { motion } from "framer-motion"

interface FadeUpProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

export function FadeUp({ children, delay = 0, className }: FadeUpProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  )
}
```

- [ ] **Step 2: Verify TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: no errors

- [ ] **Step 3: Commit**

```bash
git add src/components/motion/FadeUp.tsx
git commit -m "feat: add FadeUp scroll-triggered wrapper component"
```

---

### Task 5: Create StaggerContainer and StaggerItem

**Files:**
- Create: `src/components/motion/StaggerContainer.tsx`

- [ ] **Step 1: Create the component file**

```tsx
import { motion } from "framer-motion"

interface StaggerContainerProps {
  children: React.ReactNode
  stagger?: number
  className?: string
}

export function StaggerContainer({ children, stagger = 0.1, className }: StaggerContainerProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger } },
      }}
    >
      {children}
    </motion.div>
  )
}

interface StaggerItemProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function StaggerItem({ children, className, delay = 0 }: StaggerItemProps) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: "easeOut", delay },
        },
      }}
    >
      {children}
    </motion.div>
  )
}
```

- [ ] **Step 2: Verify TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: no errors

- [ ] **Step 3: Commit**

```bash
git add src/components/motion/StaggerContainer.tsx
git commit -m "feat: add StaggerContainer and StaggerItem for cascading reveals"
```

---

## Chunk 2: Apply Animations to Sections

### Task 6: Animate ConceptSection

**Files:**
- Modify: `src/components/ConceptSection.tsx`

- [ ] **Step 1: Add imports at top of file**

Add after line 1 (before MODELS const):

```tsx
import { motion } from "framer-motion"
import { TitleReveal } from "./motion/TitleReveal"
import { FadeUp } from "./motion/FadeUp"
import { StaggerContainer, StaggerItem } from "./motion/StaggerContainer"
```

- [ ] **Step 2: Replace H2 title (lines 55-61) with TitleReveal**

Replace:
```tsx
<h2
  className="text-4xl sm:text-5xl xl:text-6xl font-semibold leading-[1.05] mb-6 max-w-3xl"
  style={{ letterSpacing: '-0.04em' }}
>
  Trois modèles.<br />
  <span className="text-white/40">Un seul qui préserve l'agent.</span>
</h2>
```

With:
```tsx
<TitleReveal
  segments={[
    { text: "Trois modèles." },
    { text: "Un seul qui préserve l'agent.", className: "text-white/40" },
  ]}
  className="text-4xl sm:text-5xl xl:text-6xl font-semibold leading-[1.05] mb-6 max-w-3xl"
  style={{ letterSpacing: '-0.04em' }}
/>
```

- [ ] **Step 3: Wrap subtitle paragraph (lines 63-67) with FadeUp**

Replace:
```tsx
<p className="text-gray-400 text-lg max-w-2xl leading-relaxed mb-20">
```

With:
```tsx
<FadeUp delay={0.2}>
  <p className="text-gray-400 text-lg max-w-2xl leading-relaxed mb-20">
```

Add closing `</FadeUp>` after the paragraph's `</p>`.

- [ ] **Step 4: Replace card grid div (line 69) with StaggerContainer**

Replace:
```tsx
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
```

With:
```tsx
<StaggerContainer stagger={0.1} className="grid grid-cols-1 md:grid-cols-3 gap-4">
```

- [ ] **Step 5: Wrap each card in StaggerItem with hover**

Replace each card's outer div:
```tsx
<div
  key={label}
  className={`rounded-2xl border p-8 flex flex-col gap-6 ${
    dim ? 'bg-white/[0.03] border-white/[0.08]' : 'bg-white/[0.07] border-white/20'
  }`}
>
```

With:
```tsx
<StaggerItem key={label}>
  <motion.div
    className={`rounded-2xl border p-8 flex flex-col gap-6 ${
      dim ? 'bg-white/[0.03] border-white/[0.08]' : 'bg-white/[0.07] border-white/20'
    }`}
    style={!dim ? { boxShadow: '0 0 40px rgba(255,255,255,0.05)' } : undefined}
    whileHover={{ scale: 1.02, borderColor: 'rgba(255,255,255,0.4)' }}
    transition={{ duration: 0.2 }}
  >
```

Close with `</motion.div></StaggerItem>` instead of `</div>`.

- [ ] **Step 6: Add stagger to bullet lists inside each card**

Replace the static `<ul>`:
```tsx
<ul className="flex flex-col gap-3">
  {items.map((item) => (
    <li key={item} className="flex items-start gap-3 text-sm">
```

With:
```tsx
<motion.ul
  className="flex flex-col gap-3"
  variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.05 } } }}
>
  {items.map((item) => (
    <motion.li
      key={item}
      className="flex items-start gap-3 text-sm"
      variants={{
        hidden: { opacity: 0, x: -10 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
      }}
    >
```

Close with `</motion.li>` and `</motion.ul>`.

- [ ] **Step 7: Close StaggerContainer**

Replace closing `</div>` for the grid with `</StaggerContainer>`.

- [ ] **Step 8: Wrap footer paragraph with FadeUp**

Replace:
```tsx
<p className="mt-12 text-center text-white/25 text-sm max-w-xl mx-auto leading-relaxed">
```

With:
```tsx
<FadeUp delay={0.3}>
  <p className="mt-12 text-center text-white/25 text-sm max-w-xl mx-auto leading-relaxed">
```

Add closing `</FadeUp>` after the paragraph.

- [ ] **Step 9: Verify build**

Run: `npx tsc --noEmit && npx vite build`
Expected: no errors

- [ ] **Step 10: Commit**

```bash
git add src/components/ConceptSection.tsx
git commit -m "feat: add motion animations to ConceptSection"
```

---

### Task 7: Animate FonctionnementSection

**Files:**
- Modify: `src/components/FonctionnementSection.tsx`

- [ ] **Step 1: Add imports at top of file**

Add before the STEPS const:

```tsx
import { motion } from "framer-motion"
import { TitleReveal } from "./motion/TitleReveal"
import { FadeUp } from "./motion/FadeUp"
import { StaggerContainer, StaggerItem } from "./motion/StaggerContainer"
```

- [ ] **Step 2: Replace H2 title (lines 48-54) with TitleReveal**

Replace:
```tsx
<h2
  className="text-4xl sm:text-5xl xl:text-6xl font-semibold leading-[1.05] mb-6 max-w-3xl"
  style={{ letterSpacing: '-0.04em' }}
>
  Trois étapes.<br />
  <span className="text-white/40">Un seul résultat qui compte.</span>
</h2>
```

With:
```tsx
<TitleReveal
  segments={[
    { text: "Trois étapes." },
    { text: "Un seul résultat qui compte.", className: "text-white/40" },
  ]}
  className="text-4xl sm:text-5xl xl:text-6xl font-semibold leading-[1.05] mb-6 max-w-3xl"
  style={{ letterSpacing: '-0.04em' }}
/>
```

- [ ] **Step 3: Wrap subtitle paragraph (lines 56-59) with FadeUp**

Wrap the `<p className="text-gray-400 text-lg...">` in `<FadeUp delay={0.2}>...</FadeUp>`.

- [ ] **Step 4: Replace steps container with StaggerContainer**

Replace:
```tsx
<div className="flex flex-col">
  {STEPS.map((step) => (
```

With:
```tsx
<StaggerContainer stagger={0.15} className="flex flex-col">
  {STEPS.map((step) => (
```

- [ ] **Step 5: Wrap each step in StaggerItem and add hover**

Replace each step's outer div:
```tsx
<div
  key={step.number}
  className="grid grid-cols-1 lg:grid-cols-[120px_1fr] border-t border-white/10 py-12"
>
```

With:
```tsx
<StaggerItem key={step.number}>
  <motion.div
    className="grid grid-cols-1 lg:grid-cols-[120px_1fr] py-12"
    whileHover={{ borderColor: 'rgba(255,255,255,0.25)' }}
    transition={{ duration: 0.2 }}
  >
```

Close with `</motion.div></StaggerItem>`.

- [ ] **Step 6: Animate step numbers (01, 02, 03)**

Add import for `useCountUp` at top (if not already):
```tsx
import { useCountUp } from "../hooks/useCountUp"
```

Create a helper component before `export default function FonctionnementSection()`:

```tsx
function StepNumber({ value }: { value: string }) {
  const numericValue = parseInt(value, 10)
  const { ref, rounded } = useCountUp(numericValue, 0.3)
  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
    </span>
  )
}
```

Replace the static step number rendering:
```tsx
<span className="text-5xl font-semibold text-white/10 leading-none" style={{ letterSpacing: '-0.04em' }}>
  {step.number}
</span>
```

With:
```tsx
<span className="text-5xl font-semibold text-white/10 leading-none" style={{ letterSpacing: '-0.04em' }}>
  <StepNumber value={step.number} />
</span>
```

Note: The `StepNumber` component formats the output with a leading zero by using `String(num).padStart(2, '0')`. Update the `StepNumber` to:

```tsx
function StepNumber({ value }: { value: string }) {
  const numericValue = parseInt(value, 10)
  const { ref, rounded } = useCountUp(numericValue, 0.3)
  return (
    <motion.span ref={ref}>
      {rounded.get() !== undefined ? String(Math.round(rounded.get())).padStart(2, '0') : value}
    </motion.span>
  )
}
```

Actually, since `rounded` is a MotionValue, we need to subscribe to it. Simpler approach — use `useTransform` to format:

```tsx
import { useTransform } from "framer-motion"

function StepNumber({ value }: { value: string }) {
  const numericValue = parseInt(value, 10)
  const { ref, rounded } = useCountUp(numericValue, 0.3)
  const formatted = useTransform(rounded, (v: number) => String(v).padStart(2, '0'))
  return (
    <motion.span ref={ref}>
      {formatted}
    </motion.span>
  )
}
```

- [ ] **Step 7: Add animated separator lines between steps**

Before each step's `<motion.div>` (inside StaggerItem), add an animated separator:

```tsx
<motion.div
  className="h-px bg-white/10"
  initial={{ scaleX: 0 }}
  whileInView={{ scaleX: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.4, ease: "easeOut" }}
  style={{ transformOrigin: "left" }}
/>
```

Also replace the closing `<div className="border-t border-white/10" />` (line 107) with the same animated separator.

- [ ] **Step 8: Wrap sub-steps with stagger and arrow micro-animation (step 3 only)**

In the subSteps mapping block, wrap the parent container:

Replace:
```tsx
<div className="mt-8 flex flex-col gap-4">
  {step.subSteps.map((sub) => (
```

With:
```tsx
<StaggerContainer stagger={0.1} className="mt-8 flex flex-col gap-4">
  {step.subSteps.map((sub) => (
```

Wrap each sub-step's outer div in `<StaggerItem key={sub.label}>`. Inside each sub-step, add a subtle arrow animation on the vertical line indicator:

Replace the vertical line div:
```tsx
<div className="w-px self-stretch min-h-[24px] mt-1.5 ml-1 bg-white/20" />
```

With an animated version:
```tsx
<motion.div
  className="w-px self-stretch min-h-[24px] mt-1.5 ml-1 bg-white/20"
  variants={{
    hidden: { scaleY: 0 },
    visible: { scaleY: 1, transition: { duration: 0.3 } },
  }}
  style={{ transformOrigin: "top" }}
/>
```

Close each sub-step with `</StaggerItem>`.
Close with `</StaggerContainer>` instead of `</div>`.

- [ ] **Step 9: Close StaggerContainer**

Replace closing `</div>` for the steps flex container with `</StaggerContainer>`.

- [ ] **Step 10: Verify build**

Run: `npx tsc --noEmit && npx vite build`
Expected: no errors

- [ ] **Step 11: Commit**

```bash
git add src/components/FonctionnementSection.tsx
git commit -m "feat: add motion animations to FonctionnementSection"
```

---

### Task 8: Animate ReseauSection

**Files:**
- Modify: `src/components/ReseauSection.tsx`

- [ ] **Step 1: Add imports at top of file**

Add before the STATS const:

```tsx
import { motion, useTransform } from "framer-motion"
import { TitleReveal } from "./motion/TitleReveal"
import { FadeUp } from "./motion/FadeUp"
import { StaggerContainer, StaggerItem } from "./motion/StaggerContainer"
import { useCountUp } from "../hooks/useCountUp"
```

- [ ] **Step 2: Replace H2 title with TitleReveal (inside the 2-column grid)**

Note: The H2 and subtitle paragraph are inside a `<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-end">`. Keep this grid wrapper intact. Only replace the H2 inside it.

Replace:
```tsx
<h2
  className="text-4xl sm:text-5xl xl:text-6xl font-semibold leading-[1.05]"
  style={{ letterSpacing: '-0.04em' }}
>
  Plus seul face<br />
  au marché.
</h2>
```

With:
```tsx
<TitleReveal
  segments={[{ text: "Plus seul face au marché." }]}
  className="text-4xl sm:text-5xl xl:text-6xl font-semibold leading-[1.05]"
  style={{ letterSpacing: '-0.04em' }}
/>
```

- [ ] **Step 3: Wrap subtitle paragraph with FadeUp (inside the same grid cell)**

The subtitle `<p>` is the second child of the 2-column grid. Wrap it in `<FadeUp delay={0.2}>...</FadeUp>`. The grid wrapper remains unchanged.

- [ ] **Step 4: Create a StatValue helper component inside the file**

Add before the `export default function ReseauSection()`:

```tsx
function StatValue({ value, prefix, suffix }: { value: number; prefix?: string; suffix?: string }) {
  const { ref, rounded } = useCountUp(value, 1.5)
  // For value 0, skip animation — just render statically
  if (value === 0) {
    return <span>{prefix}{value}{suffix}</span>
  }
  return (
    <span ref={ref}>
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  )
}
```

- [ ] **Step 5: Replace stats grid with StaggerContainer and animated counters**

Replace the stats grid (lines 50-63):

```tsx
<StaggerContainer stagger={0.1} className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden mb-24">
  {STATS.map(({ value, label, sub, numericValue, prefix, suffix }) => (
    <StaggerItem key={label}>
      <div className="bg-black px-10 py-10">
```

This requires updating the STATS data structure. Update the STATS const to:

```tsx
const STATS = [
  { numericValue: 0, prefix: '', suffix: ' €', label: "Coût d'acquisition client", sub: 'La donnée existait déjà' },
  { numericValue: 3, prefix: '', suffix: '', label: 'passes IA par matching', sub: 'SQL → Score → Sémantique' },
  { numericValue: 40, prefix: '≥ ', suffix: '', label: "Score d'affinité minimum", sub: 'Sur 100 pour être proposé' },
]
```

Then the stat value rendering becomes:

```tsx
<p
  className="text-5xl font-semibold text-white mb-3"
  style={{ letterSpacing: '-0.04em' }}
>
  <StatValue value={numericValue} prefix={prefix} suffix={suffix} />
</p>
<FadeUp delay={0.2}>
  <p className="text-sm font-medium text-white/70 mb-1">{label}</p>
  <p className="text-xs text-white/30">{sub}</p>
</FadeUp>
```

Close with `</div></StaggerItem>`.
Close grid with `</StaggerContainer>`.

- [ ] **Step 6: Add animated separator between stats and benefits**

Between the stats `</StaggerContainer>` and the benefits grid, add:

```tsx
<motion.div
  className="h-px bg-white/10 mb-24"
  initial={{ scaleX: 0 }}
  whileInView={{ scaleX: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.4, ease: "easeOut" }}
  style={{ transformOrigin: "left" }}
/>
```

Remove `mb-24` from the stats `StaggerContainer` since the separator now handles the spacing.

- [ ] **Step 7: Replace benefits grid with StaggerContainer and hover**

Replace:
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">
  {BENEFITS.map(({ title, body }) => (
    <div key={title} className="bg-black p-10">
```

With:
```tsx
<StaggerContainer stagger={0.1} className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">
  {BENEFITS.map(({ title, body }) => (
    <StaggerItem key={title}>
      <motion.div
        className="bg-black p-10"
        whileHover={{ backgroundColor: 'rgba(255,255,255,0.03)' }}
        transition={{ duration: 0.2 }}
      >
```

Close each card with `</motion.div></StaggerItem>`.
Close grid with `</StaggerContainer>`.

- [ ] **Step 8: Verify build**

Run: `npx tsc --noEmit && npx vite build`
Expected: no errors

- [ ] **Step 9: Commit**

```bash
git add src/components/ReseauSection.tsx src/hooks/useCountUp.ts
git commit -m "feat: add motion animations and stat counters to ReseauSection"
```

---

### Task 9: Animate TarifsSection + price content changes

**Files:**
- Modify: `src/components/TarifsSection.tsx`

- [ ] **Step 1: Fix content — update Agent price and Lancement tagline**

In the PLANS array:

Change Agent plan `price` (line 23):
```tsx
price: '200 €',
```
To:
```tsx
price: '199 €',
```

Change Lancement feature (line 14):
```tsx
'Prix bloqué — jamais 200 €',
```
To:
```tsx
'Prix bloqué — jamais 199 €',
```

- [ ] **Step 2: Add imports at top of file**

Add before the PLANS const:

```tsx
import { motion } from "framer-motion"
import { TitleReveal } from "./motion/TitleReveal"
import { FadeUp } from "./motion/FadeUp"
import { StaggerContainer, StaggerItem } from "./motion/StaggerContainer"
import { useCountUp } from "../hooks/useCountUp"
```

- [ ] **Step 3: Add numeric price data to PLANS**

Add a `numericPrice` field to each plan object:

- Lancement: `numericPrice: 99`
- Agent: `numericPrice: 199`
- Agence: `numericPrice: 149`

- [ ] **Step 4: Create PriceCounter helper component inside the file**

Add before `export default function TarifsSection()`:

```tsx
function PriceCounter({ value, highlight }: { value: number; highlight: boolean }) {
  const { ref, rounded } = useCountUp(value, 0.8)
  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.0 }}
      >
        {" €"}
      </motion.span>
    </span>
  )
}
```

- [ ] **Step 5: Replace H2 title with TitleReveal (inside the 2-column grid)**

Note: The H2 and subtitle paragraph are inside a `<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20 items-end">`. Keep this grid wrapper intact. Only replace the H2 inside it.

Replace:
```tsx
<h2
  className="text-4xl sm:text-5xl xl:text-6xl font-semibold leading-[1.05]"
  style={{ letterSpacing: '-0.04em' }}
>
  SaaS pur.<br />
  <span className="text-white/40">Zéro commission.</span>
</h2>
```

With:
```tsx
<TitleReveal
  segments={[
    { text: "SaaS pur." },
    { text: "Zéro commission.", className: "text-white/40" },
  ]}
  className="text-4xl sm:text-5xl xl:text-6xl font-semibold leading-[1.05]"
  style={{ letterSpacing: '-0.04em' }}
/>
```

- [ ] **Step 6: Wrap subtitle paragraph with FadeUp (inside the same grid cell)**

The subtitle `<p>` is the second child of the 2-column grid. Wrap it in `<FadeUp delay={0.2}>...</FadeUp>`. The grid wrapper remains unchanged.

- [ ] **Step 7: Replace pricing grid with custom stagger (Agent arrives last)**

Replace:
```tsx
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
  {PLANS.map(({ name, badge, price, unit, description, features, cta, highlight, urgent }) => (
```

The card ordering needs custom delays: Lancement (0ms), Agence (100ms), Agent (250ms).

Use a `motion.div` grid wrapper with manual delays instead of StaggerContainer:

```tsx
<motion.div
  className="grid grid-cols-1 md:grid-cols-3 gap-4"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
  variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
>
  {PLANS.map(({ name, badge, price, numericPrice, unit, description, features, cta, highlight, urgent }) => (
```

- [ ] **Step 8: Wrap each plan card with StaggerItem + hover + glow**

Replace each card's outer div:
```tsx
<div
  key={name}
  className={`rounded-2xl p-8 flex flex-col gap-8 border relative ${...}`}
>
```

With:
```tsx
<StaggerItem key={name} delay={highlight ? 0.15 : 0}>
  <motion.div
    className={`rounded-2xl p-8 flex flex-col gap-8 border relative ${
      highlight
        ? 'bg-white text-black border-white'
        : 'bg-white/5 text-white border-white/10'
    }`}
    style={highlight ? { boxShadow: '0 0 40px rgba(255,255,255,0.08)' } : undefined}
    whileHover={{ scale: 1.02, borderColor: highlight ? 'rgba(255,255,255,1)' : 'rgba(255,255,255,0.4)' }}
    transition={{ duration: 0.2 }}
  >
```

Close with `</motion.div></StaggerItem>`.

- [ ] **Step 9: Replace static price with PriceCounter**

Replace:
```tsx
<span
  className="font-semibold leading-none"
  style={{ letterSpacing: '-0.04em', fontSize: '3rem' }}
>
  {price}
</span>
```

With:
```tsx
<span
  className="font-semibold leading-none"
  style={{ letterSpacing: '-0.04em', fontSize: '3rem' }}
>
  <PriceCounter value={numericPrice} highlight={highlight} />
</span>
```

Then update the unit display to fade in after counter:
```tsx
<motion.p
  className={`text-xs mb-4 ${highlight ? 'text-black/40' : 'text-white/30'}`}
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ delay: 1.0 }}
>
  {unit}
</motion.p>
```

- [ ] **Step 10: Add stagger to feature lists inside each pricing card**

Replace:
```tsx
<ul className="flex flex-col gap-3 flex-1">
  {features.map(f => (
    <li key={f} className="flex items-start gap-3 text-sm">
```

With:
```tsx
<motion.ul
  className="flex flex-col gap-3 flex-1"
  variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.05 } } }}
>
  {features.map(f => (
    <motion.li
      key={f}
      className="flex items-start gap-3 text-sm"
      variants={{
        hidden: { opacity: 0, x: -10 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
      }}
    >
```

Close with `</motion.li>` and `</motion.ul>`.

- [ ] **Step 11: Wrap CTA button with FadeUp inside each card**

Replace:
```tsx
<button
  className={`w-full rounded-xl py-3 text-sm font-medium transition-opacity hover:opacity-80 ${
```

With:
```tsx
<FadeUp delay={0.4}>
  <button
    className={`w-full rounded-xl py-3 text-sm font-medium transition-opacity hover:opacity-80 ${
```

Close with `</button></FadeUp>` instead of `</button>`.

- [ ] **Step 12: Wrap footer paragraph with FadeUp**

Replace:
```tsx
<p className="text-center text-white/20 text-xs mt-8">
```

With:
```tsx
<FadeUp>
  <p className="text-center text-white/20 text-xs mt-8">
```

Add closing `</FadeUp>` after the paragraph.

- [ ] **Step 13: Close motion.div grid wrapper**

Replace closing `</div>` for the grid with `</motion.div>`.

- [ ] **Step 14: Verify build**

Run: `npx tsc --noEmit && npx vite build`
Expected: no errors

- [ ] **Step 15: Commit**

```bash
git add src/components/TarifsSection.tsx
git commit -m "feat: add motion animations to TarifsSection, fix Agent price to 199€"
```

---

## Chunk 3: Final Verification

### Task 10: Full build and visual check

- [ ] **Step 1: Run full production build**

Run: `npx tsc --noEmit && npx vite build`
Expected: Build completes with no errors, bundle size reasonable (~175kB + framer-motion)

- [ ] **Step 2: Run dev server and visually verify**

Run: `npm run dev`
Expected: All 4 sections have scroll-triggered animations. Titles reveal with mask effect. Cards stagger in. Stats count up. Hover effects work on cards.

- [ ] **Step 3: Final commit with all changes**

```bash
git add -A
git commit -m "feat: complete motion design refonte — all 4 sections animated"
```
