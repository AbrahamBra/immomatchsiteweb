const STATS = [
  { value: '0 \u20ac', label: "Co\u00fbt d'acquisition client", sub: 'La donn\u00e9e existait d\u00e9j\u00e0' },
  { value: '3', label: 'passes IA par matching', sub: 'SQL \u2192 Score \u2192 S\u00e9mantique' },
  { value: '\u2265 40', label: "Score d'affinit\u00e9 minimum", sub: 'Sur 100 pour \u00eatre propos\u00e9' },
]

const BENEFITS = [
  {
    title: 'Z\u00e9ro silo entre agences',
    body: "Chaque cabinet partenaire alimente un catalogue commun. Votre client acc\u00e8de \u00e0 l'ensemble du r\u00e9seau \u2014 pas seulement \u00e0 vos mandats propres.",
  },
  {
    title: 'Donn\u00e9e qui existait d\u00e9j\u00e0',
    body: 'Vos clients sont d\u00e9j\u00e0 qualifi\u00e9s. Vos mandats existent d\u00e9j\u00e0. Zefir les connecte \u2014 sans budget pub, sans scraping de masse, sans leads froids.',
  },
  {
    title: "Quartiers enrichis par l'IA",
    body: 'Claude + recherche web enrichit chaque quartier en temps r\u00e9el\u00a0: transports, \u00e9coles, commerces, s\u00e9curit\u00e9, march\u00e9 local, fiscalit\u00e9. Le matching va au-del\u00e0 des m\u00e8tres carr\u00e9s.',
  },
  {
    title: 'Digital Card partageable',
    body: "Le profil client devient un actif structur\u00e9. Partageable dans le r\u00e9seau intercabinet, actionnable imm\u00e9diatement par n'importe quel agent partenaire.",
  },
]

export default function ReseauSection() {
  return (
    <section id="reseau" className="bg-black text-white py-32 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">

        {/* Eyebrow */}
        <p className="text-xs font-medium tracking-[0.2em] uppercase text-white/40 mb-6">
          R\u00e9seau
        </p>

        {/* Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-end">
          <h2
            className="text-4xl sm:text-5xl xl:text-6xl font-semibold leading-[1.05]"
            style={{ letterSpacing: '-0.04em' }}
          >
            Plus seul face<br />
            au march\u00e9.
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Le vrai avantage concurrentiel d&apos;un agent n&apos;est pas son catalogue \u2014 c&apos;est
            sa connaissance de ses clients. Zefir transforme cette connaissance en
            matching automatique \u00e0 l&apos;\u00e9chelle du r\u00e9seau.
          </p>
        </div>

        {/* Stats */}
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

        {/* Benefits grid */}
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
