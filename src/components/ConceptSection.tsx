import { motion } from "framer-motion"
import { TitleReveal } from "./motion/TitleReveal"
import { FadeUp } from "./motion/FadeUp"
import { StaggerContainer, StaggerItem } from "./motion/StaggerContainer"

const OLD_MODELS = [
  {
    label: "L'ancien modèle",
    sublabel: "Portails & pub",
    items: [
      "Point de départ : un bien à vendre",
      "Scraping, pubs, formulaires web",
      "Lead non vérifié, faible valeur",
      "Coût d'acquisition élevé",
    ],
  },
  {
    label: "Les disrupteurs B2C",
    sublabel: "Zefir & consorts",
    items: [
      "Court-circuitent l'agent entièrement",
      "Vendent l'autonomie aux particuliers",
      "Marges compressées, volume faible",
      "Si ça marche, l'agent disparaît",
    ],
  },
]

const IMMOMATCH = {
  label: "ImmoMatch",
  sublabel: "L'agent augmenté",
  items: [
    "Part du client déjà qualifié par vous",
    "IA qui matche lifestyle ↔ quartier",
    "L'agent reste au centre, augmenté",
    "Coût d'acquisition : nul",
    "La donnée existait. On la rendait inutilisable.",
  ],
}

export default function ConceptSection() {
  return (
    <section id="concept" className="bg-black/60 backdrop-blur-sm text-white py-32 px-6">
      <div className="max-w-7xl mx-auto">

        <p className="text-xs font-medium tracking-[0.2em] uppercase text-accent mb-6">
          Concept
        </p>

        <TitleReveal
          segments={[
            { text: "Trois modèles." },
            { text: "Un seul qui préserve l'agent.", className: "text-white/40" },
          ]}
          className="font-serif text-display mb-6 max-w-4xl"
        />

        <FadeUp delay={0.2}>
          <p className="text-white/50 text-lg max-w-2xl leading-relaxed mb-20">
            Le marché immobilier est en train de se recomposer. L'ancien modèle s'essouffle.
            Les disrupteurs B2C veulent supprimer l'intermédiaire. ImmoMatch prend le
            contre-pied : on donne à l'agent les armes de l'IA pour être irremplaçable.
          </p>
        </FadeUp>

        {/* Asymmetric layout: 2 old models stacked left, ImmoMatch hero right */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-4 items-stretch">

          {/* Left: stacked old models (dimmed) */}
          <StaggerContainer stagger={0.1} className="flex flex-col gap-4">
            {OLD_MODELS.map(({ label, sublabel, items }) => (
              <StaggerItem key={label}>
                <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 h-full">
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div>
                      <p className="text-base font-sans font-semibold text-white/30" style={{ letterSpacing: '-0.02em' }}>
                        {label}
                      </p>
                      <p className="text-xs mt-0.5 text-white/15">{sublabel}</p>
                    </div>
                    <span className="text-[10px] font-medium tracking-[0.12em] uppercase text-white/20 border border-white/10 rounded-full px-2.5 py-1">
                      Dépassé
                    </span>
                  </div>
                  <ul className="flex flex-col gap-2">
                    {items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-white/20">
                        <span className="mt-0.5 leading-none">·</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Right: ImmoMatch — the hero card */}
          <FadeUp delay={0.15}>
            <motion.div
              className="rounded-2xl border border-accent/20 p-10 h-full flex flex-col justify-between accent-glow"
              style={{
                background: 'linear-gradient(135deg, rgba(200,117,51,0.06) 0%, rgba(200,117,51,0.02) 50%, rgba(255,255,255,0.02) 100%)',
                boxShadow: '0 0 60px rgba(200,117,51,0.06)',
              }}
              whileHover={{ borderColor: 'rgba(200,117,51,0.4)' }}
              transition={{ duration: 0.3 }}
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-6">
                  <div>
                    <p className="text-2xl font-sans font-semibold text-white" style={{ letterSpacing: '-0.02em' }}>
                      {IMMOMATCH.label}
                    </p>
                    <p className="text-sm mt-1 text-accent-light">{IMMOMATCH.sublabel}</p>
                  </div>
                  <span className="text-[10px] font-medium tracking-[0.12em] uppercase text-accent border border-accent/30 rounded-full px-3 py-1.5">
                    Votre arme
                  </span>
                </div>

                <div className="h-px bg-accent/15 mb-6" />

                <StaggerContainer stagger={0.06} className="flex flex-col gap-3.5">
                  {IMMOMATCH.items.map((item) => (
                    <StaggerItem key={item}>
                      <div className="flex items-start gap-3 text-sm">
                        <span className="mt-0.5 leading-none text-accent/60">→</span>
                        <span className="text-white/80">{item}</span>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>

              <p className="mt-8 text-xs text-white/25 leading-relaxed">
                ImmoMatch ne désintermédie pas. Il augmente l'agent et le rend impossible à contourner.
              </p>
            </motion.div>
          </FadeUp>

        </div>
      </div>
    </section>
  )
}
