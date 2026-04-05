const MODELS = [
  {
    label: "L\u2019ancien mod\u00e8le",
    sublabel: "Portails & pub",
    verdict: "D\u00e9pass\u00e9",
    verdictStyle: "text-white/30 border-white/15",
    items: [
      "Point de d\u00e9part\u00a0: un bien \u00e0 vendre",
      "Scraping, pubs, formulaires web",
      "Lead non v\u00e9rifi\u00e9, faible valeur",
      "Co\u00fbt d\u2019acquisition \u00e9lev\u00e9",
      "L\u2019agent trie des centaines de contacts",
    ],
    dim: true,
  },
  {
    label: "Les disrupteurs B2C",
    sublabel: "Zefir & consorts",
    verdict: "Dangereux",
    verdictStyle: "text-red-400/70 border-red-400/20",
    items: [
      "Court-circuitent l\u2019agent enti\u00e8rement",
      "Vendent l\u2019autonomie aux particuliers",
      "L\u2019agence devient superflue",
      "Marges compress\u00e9es, volume faible",
      "Si \u00e7a marche, l\u2019agent dispara\u00eet",
    ],
    dim: true,
  },
  {
    label: "ImmoMatch",
    sublabel: "L\u2019agent augment\u00e9",
    verdict: "Votre arme",
    verdictStyle: "text-white border-white/30",
    items: [
      "Part du client d\u00e9j\u00e0 qualifi\u00e9 par vous",
      "IA qui matche lifestyle \u2194 quartier",
      "L\u2019agent reste au centre, augment\u00e9",
      "Co\u00fbt d\u2019acquisition\u00a0: nul",
      "La donn\u00e9e existait \u2014 on la rendait inutilisable",
    ],
    dim: false,
  },
]

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
          className="text-4xl sm:text-5xl xl:text-6xl font-semibold leading-[1.05] mb-6 max-w-3xl"
          style={{ letterSpacing: '-0.04em' }}
        >
          Trois mod\u00e8les.<br />
          <span className="text-white/40">Un seul qui pr\u00e9serve l\u2019agent.</span>
        </h2>

        <p className="text-gray-400 text-lg max-w-2xl leading-relaxed mb-20">
          Le march\u00e9 immobilier est en train de se recomposer. L\u2019ancien mod\u00e8le s\u2019essouffle.
          Les disrupteurs B2C veulent supprimer l\u2019interm\u00e9diaire. ImmoMatch prend le
          contre-pied\u00a0: on donne \u00e0 l\u2019agent les armes de l\u2019IA pour \u00eatre irremplaçable.
        </p>

        {/* Three columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {MODELS.map(({ label, sublabel, verdict, verdictStyle, items, dim }) => (
            <div
              key={label}
              className={`rounded-2xl border p-8 flex flex-col gap-6 transition-all ${
                dim
                  ? 'bg-white/[0.03] border-white/8'
                  : 'bg-white/[0.07] border-white/20'
              }`}
            >
              {/* Header */}
              <div className="flex flex-col gap-2">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className={`text-lg font-semibold leading-tight ${dim ? 'text-white/40' : 'text-white'}`}
                      style={{ letterSpacing: '-0.02em' }}>
                      {label}
                    </p>
                    <p className={`text-xs mt-1 ${dim ? 'text-white/20' : 'text-white/40'}`}>
                      {sublabel}
                    </p>
                  </div>
                  <span className={`text-[10px] font-medium tracking-[0.12em] uppercase border rounded-full px-2.5 py-1 whitespace-nowrap h-fit ${verdictStyle}`}>
                    {verdict}
                  </span>
                </div>
              </div>

              {/* Divider */}
              <div className={`h-px ${dim ? 'bg-white/8' : 'bg-white/15'}`} />

              {/* Items */}
              <ul className="flex flex-col gap-3">
                {items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <span className={`mt-0.5 leading-none ${dim ? 'text-white/20' : 'text-white/40'}`}>
                      {dim ? '\u2014' : '\u2192'}
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

        {/* Bottom line */}
        <p className="mt-12 text-center text-white/25 text-sm max-w-xl mx-auto leading-relaxed">
          ImmoMatch ne d\u00e9sinterм\u00e9die pas. Il augmente l\u2019agent \u2014 et le rend impossible \u00e0 contourner.
        </p>

      </div>
    </section>
  )
}
