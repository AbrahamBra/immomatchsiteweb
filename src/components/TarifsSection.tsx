const PLANS = [
  {
    name: 'Agent',
    price: '49',
    period: '/ mois',
    description: 'Pour l\'agent indépendant qui veut matcher ses clients dès maintenant.',
    features: [
      'Jusqu\'à 20 Digital Cards actives',
      'Matching IA en 3 passes',
      'Accès au réseau intercabinet',
      'Score d\'affinité 0–100',
      'Enrichissement quartier par IA',
    ],
    cta: 'Commencer',
    highlight: false,
  },
  {
    name: 'Cabinet',
    price: '199',
    period: '/ mois',
    description: 'Pour les équipes qui veulent centraliser et industrialiser le matching.',
    features: [
      'Digital Cards illimitées',
      'Matching IA en 3 passes',
      'Accès prioritaire réseau intercabinet',
      'Dashboard cabinet complet',
      'API & intégration CRM',
      'Support dédié',
    ],
    cta: 'Demander une démo',
    highlight: true,
  },
  {
    name: 'Réseau',
    price: 'Sur mesure',
    period: '',
    description: 'Pour les réseaux d\'agences qui veulent déployer Zefir à grande échelle.',
    features: [
      'Tout Cabinet, sans limites',
      'Catalogue intercabinet privé',
      'Intégration white-label',
      'Accès API Fluximmo',
      'Formation & onboarding équipes',
      'SLA garanti',
    ],
    cta: 'Nous contacter',
    highlight: false,
  },
]

export default function TarifsSection() {
  return (
    <section id="tarifs" className="bg-[#080808] text-white py-32 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">

        {/* Eyebrow */}
        <p className="text-xs font-medium tracking-[0.2em] uppercase text-white/40 mb-6">
          Tarifs
        </p>

        {/* Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20 items-end">
          <h2
            className="text-4xl sm:text-5xl xl:text-6xl font-semibold leading-[1.05]"
            style={{ letterSpacing: '-0.04em' }}
          >
            Simple.<br />
            <span className="text-white/40">Pas de surprise.</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Pas de coût par lead. Pas de commission cachée. Un abonnement fixe —
            et un retour sur investissement mesurable dès le premier matching.
          </p>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {PLANS.map(({ name, price, period, description, features, cta, highlight }) => (
            <div
              key={name}
              className={`rounded-2xl p-8 flex flex-col gap-8 border transition-colors ${
                highlight
                  ? 'bg-white text-black border-white'
                  : 'bg-white/5 text-white border-white/10'
              }`}
            >
              {/* Plan name */}
              <div>
                <p className={`text-xs font-medium tracking-[0.15em] uppercase mb-6 ${highlight ? 'text-black/40' : 'text-white/40'}`}>
                  {name}
                </p>
                <div className="flex items-end gap-1 mb-3">
                  <span
                    className="font-semibold leading-none"
                    style={{ letterSpacing: '-0.04em', fontSize: price === 'Sur mesure' ? '1.75rem' : '3rem' }}
                  >
                    {price === 'Sur mesure' ? price : `${price} €`}
                  </span>
                  {period && (
                    <span className={`text-sm mb-1 ${highlight ? 'text-black/50' : 'text-white/40'}`}>
                      {period}
                    </span>
                  )}
                </div>
                <p className={`text-sm leading-relaxed ${highlight ? 'text-black/60' : 'text-gray-400'}`}>
                  {description}
                </p>
              </div>

              {/* Features */}
              <ul className="flex flex-col gap-3 flex-1">
                {features.map(f => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <span className={`mt-0.5 text-base leading-none ${highlight ? 'text-black' : 'text-white/40'}`}>
                      ↗
                    </span>
                    <span className={highlight ? 'text-black/80' : 'text-gray-300'}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                className={`w-full rounded-xl py-3 text-sm font-medium transition-opacity hover:opacity-80 ${
                  highlight
                    ? 'bg-black text-white'
                    : 'bg-white/10 text-white border border-white/15'
                }`}
              >
                {cta}
              </button>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p className="text-center text-white/25 text-xs mt-10">
          Tous les tarifs sont HT. Engagement mensuel, sans frais de résiliation.
        </p>

      </div>
    </section>
  )
}
