const PLANS = [
  {
    name: 'Lancement',
    badge: '50 premiers agents',
    price: '99 €',
    unit: '/ mois / agent',
    description: "Offre fondateurs réservée aux 50 premiers agents qui rejoignent ImmoMatch. Prix bloqué à vie.",
    features: [
      'Digital Cards illimitées',
      'Matching IA en 3 passes',
      "Score d'affinité 0–100",
      'Enrichissement quartier IA',
      'Accès réseau intercabinet',
      'Prix bloqué — jamais 200 €',
    ],
    cta: 'Rejoindre les fondateurs',
    highlight: false,
    urgent: true,
  },
  {
    name: 'Agent',
    badge: null,
    price: '200 €',
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

export default function TarifsSection() {
  return (
    <section id="tarifs" className="bg-[#080808] text-white py-32 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">

        <p className="text-xs font-medium tracking-[0.2em] uppercase text-white/40 mb-6">
          Tarifs
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20 items-end">
          <h2
            className="text-4xl sm:text-5xl xl:text-6xl font-semibold leading-[1.05]"
            style={{ letterSpacing: '-0.04em' }}
          >
            SaaS pur.<br />
            <span className="text-white/40">Zéro commission.</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Revenus récurrents, modèle prévisible. Pas de frais sur transaction,
            pas de surprise. L'agent paie un abonnement fixe — ImmoMatch travaille pour lui chaque mois.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {PLANS.map(({ name, badge, price, unit, description, features, cta, highlight, urgent }) => (
            <div
              key={name}
              className={`rounded-2xl p-8 flex flex-col gap-8 border relative ${
                highlight
                  ? 'bg-white text-black border-white'
                  : 'bg-white/5 text-white border-white/10'
              }`}
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
                    {price}
                  </span>
                </div>
                <p className={`text-xs mb-4 ${highlight ? 'text-black/40' : 'text-white/30'}`}>
                  {unit}
                </p>
                <p className={`text-sm leading-relaxed ${highlight ? 'text-black/60' : 'text-gray-400'}`}>
                  {description}
                </p>
              </div>

              <ul className="flex flex-col gap-3 flex-1">
                {features.map(f => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <span className={`mt-0.5 leading-none ${highlight ? 'text-black/40' : 'text-white/30'}`}>
                      →
                    </span>
                    <span className={highlight ? 'text-black/80' : 'text-gray-300'}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

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
            </div>
          ))}
        </div>

        <p className="text-center text-white/20 text-xs mt-8">
          Tous les tarifs sont HT. Engagement mensuel, sans frais de résiliation. Agence : minimum 3 comptes.
        </p>

      </div>
    </section>
  )
}
