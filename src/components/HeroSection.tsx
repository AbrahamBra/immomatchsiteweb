import { useEffect, useRef, useState } from 'react'

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260403_050628_c4e32401-fab4-4a27-b7a8-6e9291cd5959.mp4'

const HEADING = 'Les biens parfaits pour vos clients.\nTrouvés en quelques clics.'

interface CharState {
  visible: boolean
}

export default function HeroSection() {
  const [charStates, setCharStates] = useState<CharState[]>([])
  const [subVisible, setSubVisible] = useState(false)
  const [buttonsVisible, setButtonsVisible] = useState(false)
  const [tagVisible, setTagVisible] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const chars = HEADING.split('')

  useEffect(() => {
    // Initialize all chars as hidden
    setCharStates(chars.map(() => ({ visible: false })))

    // Stagger each character starting at 200ms, 30ms apart
    chars.forEach((_, i) => {
      setTimeout(() => {
        setCharStates(prev => {
          const next = [...prev]
          next[i] = { visible: true }
          return next
        })
      }, 200 + i * 30)
    })

    // Subheading at 800ms
    setTimeout(() => setSubVisible(true), 800)

    // Buttons at 1200ms
    setTimeout(() => setButtonsVisible(true), 1200)

    // Tag at 1400ms
    setTimeout(() => setTagVisible(true), 1400)
  }, [])

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black font-sans antialiased">
      {/* Video Background */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src={VIDEO_URL}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Navbar */}
      <header className="absolute top-0 left-0 right-0 z-20">
        <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between relative">
          {/* Logo */}
          <span className="text-2xl font-semibold tracking-tight text-white select-none">
            VEX
          </span>

          {/* Nav links — truly centered in the header */}
          <ul className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {['Concept', 'Fonctionnement', 'Réseau', 'Tarifs'].map(link => (
              <li key={link}>
                <a
                  href="#"
                  className="text-white/80 hover:text-white text-sm font-medium transition-colors duration-200"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <button className="bg-white text-black text-sm font-medium rounded-lg px-4 py-2 hover:bg-white/90 transition-colors duration-200">
            Demander une démo
          </button>
        </div>
      </header>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-16 px-6">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          {/* Left Column */}
          <div className="flex flex-col gap-6">
            {/* Main Heading */}
            <h1
              className="text-4xl sm:text-5xl xl:text-7xl font-semibold text-white leading-[1.05]"
              style={{ letterSpacing: '-0.04em' }}
              aria-label={HEADING}
            >
              {chars.map((char, i) => {
                const isNewline = char === '\n'
                if (isNewline) return <br key={i} />
                return (
                  <span
                    key={i}
                    className="inline-block transition-all duration-500"
                    style={{
                      opacity: charStates[i]?.visible ? 1 : 0,
                      transform: charStates[i]?.visible
                        ? 'translateX(0)'
                        : 'translateX(-18px)',
                      transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    }}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </span>
                )
              })}
            </h1>

            {/* Subheading */}
            <p
              className="text-base lg:text-lg text-gray-300 max-w-lg leading-relaxed transition-all duration-1000"
              style={{
                opacity: subVisible ? 1 : 0,
                transform: subVisible ? 'translateY(0)' : 'translateY(8px)',
                transitionDelay: '0ms',
              }}
            >
              Partez du client qualifié, pas du bien à vendre. Notre moteur IA
              analyse le profil lifestyle de vos acheteurs et les matche avec
              les meilleurs mandats du réseau intercabinet — en temps réel.
            </p>

            {/* Action Buttons */}
            <div
              className="flex flex-wrap items-center gap-3 transition-all duration-1000"
              style={{
                opacity: buttonsVisible ? 1 : 0,
                transform: buttonsVisible ? 'translateY(0)' : 'translateY(8px)',
              }}
            >
              <button className="bg-white text-black font-medium rounded-lg px-5 py-2.5 text-sm hover:bg-white/90 transition-colors duration-200">
                Demander une démo
              </button>
              <button className="liquid-glass text-white font-medium rounded-lg px-5 py-2.5 text-sm border border-white/20 hover:bg-white/10 transition-colors duration-200">
                Voir le moteur IA
              </button>
            </div>
          </div>

          {/* Right Column — Tag (bottom-right) */}
          <div className="flex justify-end items-end">
            <div
              className="liquid-glass border border-white/20 rounded-xl px-5 py-3 transition-all duration-1000"
              style={{
                opacity: tagVisible ? 1 : 0,
                transform: tagVisible ? 'translateY(0)' : 'translateY(10px)',
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
