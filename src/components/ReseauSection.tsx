import { motion } from "framer-motion"
import { TitleReveal } from "./motion/TitleReveal"
import { FadeUp } from "./motion/FadeUp"
import { StaggerContainer, StaggerItem } from "./motion/StaggerContainer"
import { useCountUp } from "../hooks/useCountUp"

const STATS = [
  { numericValue: 0, prefix: '', suffix: ' €', label: "Coût d'acquisition client", sub: 'La donnée existait déjà' },
  { numericValue: 3, prefix: '', suffix: '', label: 'passes IA par matching', sub: 'SQL → Score → Sémantique' },
  { numericValue: 40, prefix: '≥ ', suffix: '', label: "Score d'affinité minimum", sub: 'Sur 100 pour être proposé' },
]

const BENEFITS = [
  {
    title: 'Zéro silo entre agences',
    body: "Chaque cabinet partenaire alimente un catalogue commun. Votre client accède à l'ensemble du réseau, pas seulement à vos mandats propres.",
  },
  {
    title: 'Donnée qui existait déjà',
    body: "Vos clients sont déjà qualifiés. Vos mandats existent déjà. ImmoMatch les connecte — sans budget pub, sans scraping de masse, sans leads froids.",
  },
  {
    title: "Quartiers enrichis par l'IA",
    body: "Claude + recherche web enrichit chaque quartier en temps réel : transports, écoles, commerces, sécurité, marché local, fiscalité. Le matching va au-delà des mètres carrés.",
  },
  {
    title: 'Digital Card partageable',
    body: "Le profil client devient un actif structuré. Partageable dans le réseau intercabinet, actionnable immédiatement par n'importe quel agent partenaire.",
  },
]

function StatValue({ value, prefix, suffix }: { value: number; prefix?: string; suffix?: string }) {
  const { ref, rounded } = useCountUp(value, 1.5)
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

export default function ReseauSection() {
  return (
    <section id="reseau" className="bg-surface text-white py-32 px-6 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto">

        <p className="text-xs font-medium tracking-[0.2em] uppercase text-accent mb-6">
          Réseau
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-end">
          <TitleReveal
            segments={[{ text: "Plus seul face au marché." }]}
            className="font-serif text-display"
          />
          <FadeUp delay={0.2}>
            <p className="text-white/50 text-lg leading-relaxed">
              Le vrai avantage concurrentiel d'un agent n'est pas son catalogue — c'est
              sa connaissance de ses clients. ImmoMatch transforme cette connaissance en
              matching automatique à l'échelle du réseau.
            </p>
          </FadeUp>
        </div>

        {/* Stats — hero stat left, two smaller right */}
        <StaggerContainer stagger={0.1} className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr] gap-px bg-white/[0.06] rounded-2xl overflow-hidden mb-24">
          {STATS.map(({ numericValue, prefix, suffix, label, sub }, i) => (
            <StaggerItem key={label}>
              <div className={`bg-surface ${i === 0 ? 'px-10 py-14' : 'px-8 py-10'}`}>
                <p
                  className={`font-serif text-white mb-3 ${i === 0 ? 'text-7xl' : 'text-5xl'}`}
                  style={{ letterSpacing: '-0.04em' }}
                >
                  <StatValue value={numericValue} prefix={prefix} suffix={suffix} />
                </p>
                <FadeUp delay={0.2}>
                  <p className="text-sm font-medium text-white/60 mb-1">{label}</p>
                  <p className="text-xs text-white/25">{sub}</p>
                </FadeUp>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Benefits — 2x2 grid with accent hover glow */}
        <StaggerContainer stagger={0.08} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {BENEFITS.map(({ title, body }) => (
            <StaggerItem key={title}>
              <motion.div
                className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 h-full"
                whileHover={{
                  borderColor: 'rgba(200,117,51,0.2)',
                  backgroundColor: 'rgba(200,117,51,0.03)',
                }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-lg font-serif text-white mb-3" style={{ letterSpacing: '-0.02em' }}>
                  {title}
                </h3>
                <p className="text-sm text-white/40 leading-relaxed">{body}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

      </div>
    </section>
  )
}
