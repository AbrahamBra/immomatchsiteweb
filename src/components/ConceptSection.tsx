export default function ConceptSection() {
  return (
    <section id="concept" className="bg-black text-white py-32 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Eyebrow */}
        <p className="text-xs font-medium tracking-[0.2em] uppercase text-white/40 mb-6">
          Concept
        </p>

        {/* Heading */}
        <h2
          className="text-4xl sm:text-5xl xl:text-6xl font-semibold leading-[1.05] mb-8 max-w-3xl"
          style={{ letterSpacing: '-0.04em' }}
        >
          L'immobilier part toujours du bien.<br />
          <span className="text-white/40">Nous, on part du client.</span>
        </h2>

        {/* Intro */}
        <p className="text-gray-400 text-lg max-w-2xl leading-relaxed mb-20">
          Des milliers d'acheteurs qualifiés coexistent avec des mandats disponibles —
          mais la mise en relation reste aveugle, lente et coûteuse. Les plateformes
          existantes font du marketing de masse sur un acte d'achat ultra-personnel.
          Zefir renverse ce modèle.
        </p>

        {/* Comparison table */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">

          {/* Header row */}
          <div className="bg-black px-8 py-5 flex items-center">
            <span className="text-xs font-medium tracking-[0.15em] uppercase text-white/30">
              Critère
            </span>
          </div>
          <div className="bg-white/5 px-8 py-5 flex items-center">
            <span className="text-xs font-medium tracking-[0.15em] uppercase text-white/40">
              Ancien modèle
            </span>
          </div>
          <div className="bg-white/[0.08] px-8 py-5 flex items-center">
            <span className="text-xs font-medium tracking-[0.15em] uppercase text-white">
              Zefir
            </span>
          </div>

          {/* Rows */}
          {[
            {
              critere: 'Point de départ',
              ancien: 'Un bien à vendre',
              zefir: 'Un client qualifié par un professionnel',
            },
            {
              critere: 'Source des données',
              ancien: 'Scraping, pubs, formulaires web',
              zefir: 'Mandats & clients déjà existants',
            },
            {
              critere: "Rôle de l'IA",
              ancien: 'Deviner qui pourrait acheter',
              zefir: 'Matcher lifestyle ↔ quartier',
            },
            {
              critere: 'Qualité du lead',
              ancien: 'Faible, non vérifié',
              zefir: 'Qualifiée par un professionnel',
            },
            {
              critere: "Coût d'acquisition",
              ancien: 'Élevé — pub massive',
              zefir: 'Nul — la donnée existait déjà',
            },
          ].map(({ critere, ancien, zefir }) => (
            <>
              <div key={`c-${critere}`} className="bg-black border-t border-white/10 px-8 py-6">
                <span className="text-sm font-medium text-white/60">{critere}</span>
              </div>
              <div key={`a-${critere}`} className="bg-white/5 border-t border-white/10 px-8 py-6">
                <span className="text-sm text-white/50">{ancien}</span>
              </div>
              <div key={`z-${critere}`} className="bg-white/[0.08] border-t border-white/10 px-8 py-6">
                <span className="text-sm text-white font-medium">{zefir}</span>
              </div>
            </>
          ))}
        </div>

      </div>
    </section>
  )
}
