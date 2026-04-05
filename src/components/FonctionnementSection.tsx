const STEPS = [
  {
    number: '01',
    title: 'Qualification du client',
    description:
      "L'agent saisit le profil complet de son acheteur : budget, zone, surface, type de bien — mais aussi les données lifestyle qui font la vraie différence. Télétravail, animaux, proximité écoles, vie de quartier. Ce profil devient une Digital Card structurée et actionnable.",
    detail: 'Digital Card générée automatiquement',
  },
  {
    number: '02',
    title: 'Inventaire intercabinet',
    description:
      "Les cabinets partenaires alimentent la plateforme avec leurs mandats disponibles. Prix, surface, pièces, adresse, photos, description. Ce catalogue commun supprime les silos entre agences — votre client accède à un marché qu'une seule agence ne pourrait jamais couvrir.",
    detail: 'Réseau de mandats en temps réel',
  },
  {
    number: '03',
    title: 'Moteur de Matching IA — 3 passes',
    description:
      "L'IA ne fait pas une recherche, elle fait un raisonnement. Trois niveaux de précision pour arriver aux biens qui matchent vraiment.",
    detail: "Score d'affinité 0–100, seuil ≥ 40",
    subSteps: [
      {
        label: 'Filtre SQL',
        text: 'Élimination sur critères durs — ville, budget, surface. ~100 candidats.',
      },
      {
        label: 'Score mathématique',
        text: 'Pondération sur critères objectifs. Top 50.',
      },
      {
        label: 'IA Sémantique',
        text: 'Claude compare le lifestyle client avec le profil quartier enrichi — transports, écoles, commerces, sécurité, marché local.',
      },
    ],
  },
]

export default function FonctionnementSection() {
  return (
    <section id="fonctionnement" className="bg-[#080808] text-white py-32 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">

        <p className="text-xs font-medium tracking-[0.2em] uppercase text-white/40 mb-6">
          Fonctionnement
        </p>

        <h2
          className="text-4xl sm:text-5xl xl:text-6xl font-semibold leading-[1.05] mb-6 max-w-3xl"
          style={{ letterSpacing: '-0.04em' }}
        >
          Trois étapes.<br />
          <span className="text-white/40">Un seul résultat qui compte.</span>
        </h2>

        <p className="text-gray-400 text-lg max-w-xl leading-relaxed mb-24">
          De la qualification à la proposition — ImmoMatch automatise la chaîne de
          valeur complète, sans friction pour l'agent.
        </p>

        <div className="flex flex-col">
          {STEPS.map((step) => (
            <div
              key={step.number}
              className="grid grid-cols-1 lg:grid-cols-[120px_1fr] border-t border-white/10 py-12"
            >
              <div className="flex items-start pt-1">
                <span className="text-5xl font-semibold text-white/10 leading-none" style={{ letterSpacing: '-0.04em' }}>
                  {step.number}
                </span>
              </div>

              <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-4" style={{ letterSpacing: '-0.02em' }}>
                    {step.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed max-w-lg">
                    {step.description}
                  </p>

                  {step.subSteps && (
                    <div className="mt-8 flex flex-col gap-4">
                      {step.subSteps.map((sub) => (
                        <div key={sub.label} className="flex gap-4 items-start">
                          <div className="w-px self-stretch min-h-[24px] mt-1.5 ml-1 bg-white/20" />
                          <div>
                            <span className="text-xs font-medium tracking-[0.15em] uppercase text-white/50 block mb-1">
                              {sub.label}
                            </span>
                            <p className="text-sm text-gray-400">{sub.text}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex lg:items-start lg:justify-end">
                  <span className="inline-block text-xs font-medium tracking-[0.1em] uppercase text-white/40 border border-white/15 rounded-full px-4 py-2 whitespace-nowrap h-fit">
                    {step.detail}
                  </span>
                </div>
              </div>
            </div>
          ))}
          <div className="border-t border-white/10" />
        </div>

      </div>
    </section>
  )
}
