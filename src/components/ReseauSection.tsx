const STATS = [
  { value: '0 €', label: "Coût d'acquisition client", sub: 'La donnée existait déjà' },
  { value: '3', label: 'passes IA par matching', sub: 'SQL → Score → Sémantique' },
  { value: '≥ 40', label: "Score d'affinité minimum", sub: 'Sur 100 pour être proposé' },
]

const BENEFITS = [
  {
    title: 'Zéro silo entre agences',
    body: "Chaque cabinet partenaire alimente un catalogue commun. Votre client accède à l'ensemble du réseau — pas seulement à vos mandats propres.",
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

export default function ReseauSection() {
  return (
    <section id="reseau" className="bg-black text-white py-32 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">

        <p className="text-xs font-medium tracking-[0.2em] uppercase text-white/40 mb-6">
          Réseau
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-end">
          <h2
            className="text-4xl sm:text-5xl xl:text-6xl font-semibold leading-[1.05]"
            style={{ letterSpacing: '-0.04em' }}
          >
            Plus seul face<br />
            au marché.
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Le vrai avantage concurrentiel d'un agent n'est pas son catalogue — c'est
            sa connaissance de ses clients. ImmoMatch transforme cette connaissance en
            matching automatique à l'échelle du réseau.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden mb-24">
          {STATS.map(({ value, label, sub }) => (
            <div key={label} className="bg-black px-10 py-10">
              <p
                className="text-5xl font-semibold text-white mb-3"
                style={{ letterSpacing: '-0.04em' }}
              >
                {value}
              </p>
              <p className="text-sm font-medium text-white/70 mb-1">{label}</p>
              <p className="text-xs text-white/30">{sub}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">
          {BENEFITS.map(({ title, body }) => (
            <div key={title} className="bg-black p-10">
              <h3
                className="text-lg font-semibold text-white mb-3"
                style={{ letterSpacing: '-0.02em' }}
              >
                {title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
