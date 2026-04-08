import { motion } from "framer-motion"
import { TitleReveal } from "./motion/TitleReveal"
import { FadeUp } from "./motion/FadeUp"
import { StaggerItem } from "./motion/StaggerContainer"
import { useCountUp } from "../hooks/useCountUp"

const PLANS = [
  {
    name: 'Lancement',
    badge: '50 premiers agents',
    price: '99 €',
    numericPrice: 99,
    unit: '/ mois / agent',
    description: "Offre fondateurs réservée aux 50 premiers agents qui rejoignent ImmoMatch. Prix bloqué à vie.",
    features: [
      'Digital Cards illimitées',
      'Matching IA en 3 passes',
      "Score d'affinité 0–100",
      'Enrichissement quartier IA',
      'Accès réseau intercabinet',
      'Prix bloqué — jamais 199 €',
    ],
    cta: 'Rejoindre les fondateurs',
    highlight: false,
    urgent: true,
  },
  {
    name: 'Agent',
    badge: null,
    price: '199 €',
    numericPrice: 199,
    unit: '/ mois',
    description: "Pour l'agent indépendant qui veut matcher ses clients avec précision, sans dépenser en pub.",
    features: [
      'Digital Cards illimitées',
      'Matching IA en 3 passes',
      "Score d'affinité 0–100",
      'Enrichissement quartier IA',
      'Accès réseau intercabinet',
    ],
    cta: 'Demander une démo',
    highlight: true,
    urgent: false,
  },
  {
    name: 'Agence',
    badge: 'Multi-comptes',
    price: '149 €',
    numericPrice: 149,
    unit: '/ mois / agent',
    description: "Pour les cabinets avec plusieurs agents. Minimum 3 comptes. Dashboard partagé et pool de mandats commun.",
    features: [
      "Tout ce qu'inclut Agent",
      'Dashboard cabinet centralisé',
      'Pool de mandats partagé',
      'Gestion multi-agents',
      'Stats cabinet globales',
      'Onboarding équipe dédié',
    ],
    cta: 'Nous contacter',
    highlight: false,
    urgent: false,
  },
]

function PriceCounter({ value }: { value: number }) {
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

export default function TarifsSection() {
  return (
    <section id="tarifs" className="bg-[#080808] text-white py-32 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">

        <p className="text-xs font-medium tracking-[0.2em] uppercase text-white/40 mb-6">
          Tarifs
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20 items-end">
          <TitleReveal
            segments={[
              { text: "SaaS pur." },
              { text: "Zéro commission.", className: "text-white/40" },
            ]}
            className="text-4xl sm:text-5xl xl:text-6xl font-semibold leading-[1.05]"
            style={{ letterSpacing: '-0.04em' }}
          />
          <FadeUp delay={0.2}>
            <p className="text-gray-400 text-lg leading-relaxed">
              Revenus récurrents, modèle prévisible. Pas de frais sur transaction,
              pas de surprise. L'agent paie un abonnement fixe — ImmoMatch travaille pour lui chaque mois.
            </p>
          </FadeUp>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {PLANS.map(({ name, badge, numericPrice, unit, description, features, cta, highlight, urgent }) => (
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
                {badge && (
                  <span
                    className={`absolute top-4 right-4 text-[10px] font-medium tracking-[0.12em] uppercase px-2.5 py-1 rounded-full ${
                      urgent
                        ? 'bg-white/15 text-white'
                        : highlight
                        ? 'bg-black/10 text-black/60'
                        : 'bg-white/10 text-white/50'
                    }`}
                  >
                    {badge}
                  </span>
                )}

                <div>
                  <p className={`text-xs font-medium tracking-[0.15em] uppercase mb-6 ${highlight ? 'text-black/40' : 'text-white/40'}`}>
                    {name}
                  </p>
                  <div className="flex items-end gap-1.5 mb-1">
                    <span
                      className="font-semibold leading-none"
                      style={{ letterSpacing: '-0.04em', fontSize: '3rem' }}
                    >
                      <PriceCounter value={numericPrice} />
                    </span>
                  </div>
                  <motion.p
                    className={`text-xs mb-4 ${highlight ? 'text-black/40' : 'text-white/30'}`}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.0 }}
                  >
                    {unit}
                  </motion.p>
                  <p className={`text-sm leading-relaxed ${highlight ? 'text-black/60' : 'text-gray-400'}`}>
                    {description}
                  </p>
                </div>

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
                      <span className={`mt-0.5 leading-none ${highlight ? 'text-black/40' : 'text-white/30'}`}>
                        →
                      </span>
                      <span className={highlight ? 'text-black/80' : 'text-gray-300'}>
                        {f}
                      </span>
                    </motion.li>
                  ))}
                </motion.ul>

                <FadeUp delay={0.4}>
                  <button
                    className={`w-full rounded-xl py-3 text-sm font-medium transition-opacity hover:opacity-80 ${
                      highlight
                        ? 'bg-black text-white'
                        : urgent
                        ? 'bg-white text-black'
                        : 'bg-white/10 text-white border border-white/15'
                    }`}
                  >
                    {cta}
                  </button>
                </FadeUp>
              </motion.div>
            </StaggerItem>
          ))}
        </motion.div>

        <FadeUp>
          <p className="text-center text-white/20 text-xs mt-8">
            Tous les tarifs sont HT. Engagement mensuel, sans frais de résiliation. Agence : minimum 3 comptes.
          </p>
        </FadeUp>

      </div>
    </section>
  )
}
