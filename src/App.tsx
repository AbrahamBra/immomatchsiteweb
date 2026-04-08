import HeroSection from './components/HeroSection'
import ConceptSection from './components/ConceptSection'
import FonctionnementSection from './components/FonctionnementSection'
import ReseauSection from './components/ReseauSection'
import TarifsSection from './components/TarifsSection'
import FooterSection from './components/FooterSection'
import GrainOverlay from './components/GrainOverlay'

export default function App() {
  return (
    <main>
      <GrainOverlay />
      <HeroSection />
      <ConceptSection />
      <FonctionnementSection />
      <ReseauSection />
      <TarifsSection />
      <FooterSection />
    </main>
  )
}
