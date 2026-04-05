const MODELS = [
  {
    label: "L'ancien modèle",
    sublabel: "Portails & pub",
    verdict: "Dépassé",
    verdictStyle: "text-white/30 border-white/15",
    items: [
      "Point de départ : un bien à vendre",
      "Scraping, pubs, formulaires web",
      "Lead non vérifié, faible valeur",
      "Coût d'acquisition élevé",
      "L'agent trie des centaines de contacts",
    ],
    dim: true,
  },
  {
    label: "Les disrupteurs B2C",
    sublabel: "Zefir & consorts",
    verdict: "Dangereux",
    verdictStyle: "text-red-400/70 border-red-400/20",
    items: [
      "Court-circuitent l'agent entièrement",
      "Vendent l'autonomie aux particuliers",
      "L'agence devient superflue",
      "Marges compressées, volume faible",
      "Si ça marche, l'agent disparaît",
    ],
    dim: true,
  },
  {
    label: "ImmoMatch",
    sublabel: "L'agent augmenté",
    verdict: "Votre arme",
    verdictStyle: "text-white border-white/30",
    items: [
      "Part du client déjà qualifié par vous",
      "IA qui matche lifestyle ↔ quartier",
      "L'agent reste au centre, augmenté",
      "Coût d'acquisition : nul",
      "La donnée existait — on la rendait inutilisable",
    ],
    dim: false,
  },
]

export default function ConceptSection() {
  return (
    <section id="concept" className="bg-black text-white py-32 px-6">
      <div className="max-w-7xl mx-auto">

        <p className="text-xs font-medium tracking-[0.2em] uppercase text-white/40 mb-6">
          Concept
        </p>

        <h2
          className="text-4xl sm:text-5xl xl:text-6xl font-semibold leading-[1.05] mb-6 max-w-3xl"
          style={{ letterSpacing: '-0.04em' }}
        >
          Trois modèles.<br />
          <span className="text-white/40">Un seul qui préserve l'agent.</span>
        </h2>

        <p className="text-gray-400 text-lg max-w-2xl leading-relaxed mb-20">
          Le marché immobilier est en train de se recomposer. L'ancien modèle s'essouffle.
          Les disrupteurs B2C veulent supprimer l'intermédiaire. ImmoMatch prend le
          contre-pied : on donne à l'agent les armes de l'IA pour être irremplaçable.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {MODELS.map(({ label, sublabel, verdict, verdictStyle, items, dim }) => (
            <div
              key={label}
              className={`rounded-2xl border p-8 flex flex-col gap-6 ${
                dim ? 'bg-white/[0.03] border-white/[0.08]' : 'bg-white/[0.07] border-white/20'
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p
                    className={`text-lg font-semibold leading-tight ${dim ? 'text-white/40' : 'text-white'}`}
                    style={{ letterSpacing: '-0.02em' }}
                  >
                    {label}
                  </p>
                  <p className={`text-xs mt-1 ${dim ? 'text-white/20' : 'text-white/40'}`}>
                    {sublabel}
                  </p>
                </div>
                <span className={`text-[10px] font-medium tracking-[0.12em] uppercase border rounded-full px-2.5 py-1 whitespace-nowrap ${verdictStyle}`}>
                  {verdict}
                </span>
              </div>

              <div className={`h-px ${dim ? 'bg-white/[0.08]' : 'bg-white/15'}`} />

              <ul className="flex flex-col gap-3">
                {items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <span className={`mt-0.5 leading-none ${dim ? 'text-white/20' : 'text-white/40'}`}>
                      {dim ? '—' : '→'}
                    </span>
                    <span className={dim ? 'text-white/30' : 'text-gray-300'}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-white/25 text-sm max-w-xl mx-auto leading-relaxed">
          ImmoMatch ne désintermédie pas. Il augmente l'agent — et le rend impossible à contourner.
        </p>

      </div>
    </section>
  )
}
