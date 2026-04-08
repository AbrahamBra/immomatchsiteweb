import { FadeUp } from "./motion/FadeUp"

const LINKS = [
  { label: 'Concept', href: '#concept' },
  { label: 'Fonctionnement', href: '#fonctionnement' },
  { label: 'Réseau', href: '#reseau' },
  { label: 'Tarifs', href: '#tarifs' },
]

export default function FooterSection() {
  return (
    <footer className="bg-surface text-white border-t border-white/[0.06]">
      {/* CTA band */}
      <div className="max-w-7xl mx-auto px-6 py-24 text-center">
        <FadeUp>
          <h2
            className="font-serif text-3xl sm:text-4xl xl:text-5xl text-white mb-6"
            style={{ letterSpacing: '-0.03em' }}
          >
            Prêt à augmenter votre cabinet ?
          </h2>
        </FadeUp>
        <FadeUp delay={0.1}>
          <p className="text-white/40 text-lg max-w-lg mx-auto leading-relaxed mb-10">
            Rejoignez les 50 premiers agents fondateurs et bloquez votre tarif à vie.
          </p>
        </FadeUp>
        <FadeUp delay={0.2}>
          <button className="bg-accent text-white font-medium rounded-xl px-8 py-3.5 text-sm hover:bg-accent-hover transition-colors duration-200">
            Demander une démo
          </button>
        </FadeUp>
      </div>

      {/* Footer proper */}
      <div className="border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-sm font-medium tracking-tight text-white/60">
            ImmoMatch
          </span>

          <nav className="flex items-center gap-6">
            {LINKS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="text-xs text-white/30 hover:text-white/60 transition-colors duration-200"
              >
                {label}
              </a>
            ))}
          </nav>

          <p className="text-xs text-white/20">
            © {new Date().getFullYear()} ImmoMatch. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}
