const PLANS = [
  {
    name: 'Lancement',
    badge: '50 premiers agents',
    price: '99',
    unit: '\u20ac / mois / agent',
    description:
      "Offre fondateurs r\u00e9serv\u00e9e aux 50 premiers agents qui rejoignent Zefir. Prix bloqu\u00e9 \u00e0 vie.",
    features: [
      'Digital Cards illimit\u00e9es',
      'Matching IA en 3 passes',
      'Score d\u2019affinit\u00e9 0\u2013100',
      'Enrichissement quartier IA',
      'Acc\u00e8s r\u00e9seau intercabinet',
      'Prix bloqu\u00e9 \u2014 jamais 200\u00a0\u20ac',
    ],
    cta: 'Rejoindre les fondateurs',
    highlight: false,
    urgent: true,
  },
  {
    name: 'Agent',
    badge: null,
    price: '200',
    unit: '\u20ac / mois',
    description:
      "Pour l\u2019agent ind\u00e9pendant qui veut matcher ses clients avec pr\u00e9cision, sans d\u00e9penser en pub.",
    features: [
      'Digital Cards illimit\u00e9es',
      'Matching IA en 3 passes',
      'Score d\u2019affinit\u00e9 0\u2013100',
      'Enrichissement quartier IA',
      'Acc\u00e8s r\u00e9seau intercabinet',
    ],
    cta: 'Demander une d\u00e9mo',
    highlight: true,
    urgent: false,
  },
  {
    name: 'Agence',
    badge: 'Multi-comptes',
    price: '149',
    unit: '\u20ac / mois / agent',
    description:
      'Pour les cabinets avec plusieurs agents. Minimum 3 comptes. Dashboard partag\u00e9 et pool de mandats commun.',
    features: [
      'Tout ce qu\u2019inclut Agent',
      'Dashboard cabinet centralis\u00e9',
      'Pool de mandats partag\u00e9',
      'Gestion multi-agents',
      'Stats cabinet globales',
      'Onboarding \u00e9quipe d\u00e9di\u00e9',
    ],
    cta: 'Nous contacter',
    highlight: false,
    urgent: false,
  },
]

const MRR_PHASES = [
  { phase: 'Lancement', agents: '50', mrr: '4 950\u00a0\u20ac' },
  { phase: 'Phase 2', agents: '200', mrr: '~35 000\u00a0\u20ac' },
  { phase: 'Phase 3', agents: '500', mrr: '~90 000\u00a0\u20ac' },
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
            SaaS pur.<br />
            <span className="text-white/40">Z\u00e9ro commission.</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Revenus r\u00e9currents, mod\u00e8le pr\u00e9visible. Pas de frais sur transaction,
            pas de surprise. L\u2019agent paie un abonnement fixe \u2014 Zefir travaille pour lui chaque mois.
          </p>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
          {PLANS.map(({ name, badge, price, unit, description, features, cta, highlight, urgent }) => (
            <div
              key={name}
              className={`rounded-2xl p-8 flex flex-col gap-8 border relative ${
                highlight
                  ? 'bg-white text-black border-white'
                  : 'bg-white/5 text-white border-white/10'
              }`}
            >
              {/* Badge */}
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

              {/* Plan name + price */}
              <div>
                <p className={`text-xs font-medium tracking-[0.15em] uppercase mb-6 ${highlight ? 'text-black/40' : 'text-white/40'}`}>
                  {name}
                </p>
                <div className="flex items-end gap-1.5 mb-1">
                  <span
                    className="font-semibold leading-none"
                    style={{ letterSpacing: '-0.04em', fontSize: '3rem' }}
                  >
                    {price}\u00a0\u20ac
                  </span>
                </div>
                <p className={`text-xs mb-4 ${highlight ? 'text-black/40' : 'text-white/30'}`}>
                  {unit}
                </p>
                <p className={`text-sm leading-relaxed ${highlight ? 'text-black/60' : 'text-gray-400'}`}>
                  {description}
                </p>
              </div>

              {/* Features */}
              <ul className="flex flex-col gap-3 flex-1">
                {features.map(f => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <span className={`mt-0.5 leading-none ${highlight ? 'text-black/40' : 'text-white/30'}`}>
                      \u2192
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

        {/* MRR projection */}
        <div className="border border-white/10 rounded-2xl overflow-hidden">
          <div className="px-8 py-5 border-b border-white/10">
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/30">
              Projection MRR \u2014 mod\u00e8le SaaS pur
            </p>
          </div>
          <div className="grid grid-cols-3 divide-x divide-white/10">
            {MRR_PHASES.map(({ phase, agents, mrr }) => (
              <div key={phase} className="px-8 py-8">
                <p className="text-xs text-white/30 uppercase tracking-[0.12em] mb-3">{phase}</p>
                <p
                  className="text-3xl font-semibold text-white mb-1"
                  style={{ letterSpacing: '-0.04em' }}
                >
                  {mrr}
                </p>
                <p className="text-xs text-white/40">{agents} agents payants</p>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-white/20 text-xs mt-8">
          Tous les tarifs sont HT. Engagement mensuel, sans frais de r\u00e9siliation. Agence\u00a0: minimum 3 comptes.
        </p>

      </div>
    </section>
  )
}
