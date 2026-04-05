import { useEffect, useState } from 'react'

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260403_050628_c4e32401-fab4-4a27-b7a8-6e9291cd5959.mp4'

// Each entry is either a word (string[]) or a line-break (null)
function tokenize(text: string): (string[] | null)[] {
  return text.split('\n').flatMap((line, i, arr) => {
    const words = line.split(' ').map(w => w.split(''))
    return i < arr.length - 1 ? [...words, null] : words
  })
}

const TOKENS = tokenize('Les biens parfaits\npour vos clients.')

const TOTAL_CHARS = TOKENS.reduce((acc, t) => acc + (t ? t.length : 0), 0)

export default function HeroSection() {
  const [visible, setVisible] = useState<boolean[]>(Array(TOTAL_CHARS).fill(false))
  const [subVisible, setSubVisible] = useState(false)
  const [buttonsVisible, setButtonsVisible] = useState(false)
  const [tagVisible, setTagVisible] = useState(false)

  useEffect(() => {
    let charIndex = 0
    TOKENS.forEach(token => {
      if (token === null) return
      token.forEach(() => {
        const idx = charIndex++
        setTimeout(() => {
          setVisible(prev => {
            const next = [...prev]
            next[idx] = true
            return next
          })
        }, 200 + idx * 30)
      })
    })
    setTimeout(() => setSubVisible(true), 800)
    setTimeout(() => setButtonsVisible(true), 1200)
    setTimeout(() => setTagVisible(true), 1400)
  }, [])

  let globalCharIdx = 0

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black font-sans antialiased">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={VIDEO_URL}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Navbar — compact, flat, full-width */}
      <header className="absolute top-0 left-0 right-0 z-20">
        <div className="max-w-7xl mx-auto px-8 py-3 flex items-center justify-between relative">
          <span className="text-xl font-semibold tracking-tight text-white select-none">
            Zefir
          </span>

          <ul className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {[
              { label: 'Concept', href: '#concept' },
              { label: 'Fonctionnement', href: '#fonctionnement' },
              { label: 'R\u00e9seau', href: '#reseau' },
              { label: 'Tarifs', href: '#tarifs' },
            ].map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className="text-white/80 hover:text-white text-sm font-medium transition-colors duration-200"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <button className="bg-white text-black text-sm font-medium rounded-lg px-4 py-1.5 hover:bg-white/90 transition-colors duration-200">
            Demander une d\u00e9mo
          </button>
        </div>
      </header>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-16 px-6">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">

          {/* Left column */}
          <div className="flex flex-col gap-6">
            {/* Heading — words wrapped in whitespace-nowrap to prevent mid-word breaks */}
            <h1
              className="text-4xl sm:text-5xl xl:text-7xl font-semibold text-white leading-[1.05]"
              style={{ letterSpacing: '-0.04em' }}
              aria-label="Les biens parfaits pour vos clients."
            >
              {TOKENS.map((token, tokenIdx) => {
                if (token === null) return <br key={`br-${tokenIdx}`} />

                const wordElement = (
                  <span
                    key={`word-${tokenIdx}`}
                    style={{ display: 'inline-block', whiteSpace: 'nowrap' }}
                  >
                    {token.map(char => {
                      const idx = globalCharIdx++
                      return (
                        <span
                          key={idx}
                          className="inline-block transition-all duration-500"
                          style={{
                            opacity: visible[idx] ? 1 : 0,
                            transform: visible[idx] ? 'translateX(0)' : 'translateX(-18px)',
                            transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                          }}
                        >
                          {char}
                        </span>
                      )
                    })}
                  </span>
                )

                // Add a regular space between words (not animated, not breakable inside)
                return (
                  <span key={`wrap-${tokenIdx}`}>
                    {wordElement}
                    {'\u00A0'}
                  </span>
                )
              })}
            </h1>

            {/* Subheading */}
            <p
              className="text-base lg:text-lg text-gray-300 max-w-lg leading-relaxed"
              style={{
                opacity: subVisible ? 1 : 0,
                transform: subVisible ? 'translateY(0)' : 'translateY(8px)',
                transition: 'opacity 1000ms, transform 1000ms',
              }}
            >
              Partez du client qualifi\u00e9, pas du bien \u00e0 vendre. Notre moteur IA
              analyse le profil lifestyle de vos acheteurs et les matche avec
              les meilleurs mandats du r\u00e9seau intercabinet \u2014 en temps r\u00e9el.
            </p>

            {/* Buttons */}
            <div
              className="flex flex-wrap items-center gap-3"
              style={{
                opacity: buttonsVisible ? 1 : 0,
                transform: buttonsVisible ? 'translateY(0)' : 'translateY(8px)',
                transition: 'opacity 1000ms, transform 1000ms',
              }}
            >
              <button className="bg-white text-black font-medium rounded-lg px-5 py-2.5 text-sm hover:bg-white/90 transition-colors duration-200">
                Demander une d\u00e9mo
              </button>
              <button className="liquid-glass text-white font-medium rounded-lg px-5 py-2.5 text-sm border border-white/20 hover:bg-white/10 transition-colors duration-200">
                Voir le moteur IA
              </button>
            </div>
          </div>

          {/* Right column — tag */}
          <div className="flex justify-end items-end">
            <div
              className="liquid-glass border border-white/20 rounded-xl px-5 py-3"
              style={{
                opacity: tagVisible ? 1 : 0,
                transform: tagVisible ? 'translateY(0)' : 'translateY(10px)',
                transition: 'opacity 1000ms, transform 1000ms',
              }}
            >
              <span className="text-lg lg:text-2xl font-light text-white tracking-tight">
                Qualification. Matching IA. Intercabinet.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
