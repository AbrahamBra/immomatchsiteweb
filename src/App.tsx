import HeroSection from './components/HeroSection'
import ConceptSection from './components/ConceptSection'
import FonctionnementSection from './components/FonctionnementSection'
import ReseauSection from './components/ReseauSection'
import TarifsSection from './components/TarifsSection'
import FooterSection from './components/FooterSection'
import GrainOverlay from './components/GrainOverlay'
import BackgroundVideo from './components/BackgroundVideo'

export default function App() {
  return (
    <main className="relative">
      <BackgroundVideo />
      <GrainOverlay />
      <div className="relative z-10">
        <HeroSection />
        <ConceptSection />
        <FonctionnementSection />
        <ReseauSection />
        <TarifsSection />
        <FooterSection />
      </div>
    </main>
  )
}
