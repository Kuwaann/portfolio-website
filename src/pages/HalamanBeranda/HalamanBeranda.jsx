import { HeroSection } from './components/HeroSection'
import { AboutMeSection } from './components/AboutMeSection'
import { PencapaianSection } from './components/PencapaianSection'
import { LayananSayaSection } from './components/LayananSayaSection'
import { KaryaSection } from './components/KaryaSection'
import { ProsesSection } from './components/ProsesSection'
import { CTASection } from './components/CTASection'
import { Footer } from '../../components/Footer'
import { Navbar } from '../../components/Navbar'
import './HalamanBeranda.css'

export function HalamanBeranda() {
    return (
        <>
            <Navbar />
            <main>
                <HeroSection />
                <AboutMeSection />
                <PencapaianSection />
                <LayananSayaSection />
                <KaryaSection />
                <ProsesSection />
                <CTASection />
            </main>
            <Footer />
        </>


    )
}
