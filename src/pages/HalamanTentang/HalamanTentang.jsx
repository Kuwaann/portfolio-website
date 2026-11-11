import { Navbar } from "../../components/Navbar"
import { Footer } from "../../components/Footer"
import { HeroSection } from "./components/HeroSection"
import { BiographySection } from "./components/BiographySection"
import { StorySection } from "./components/StorySection"
import { KPISection } from "../../components/KPISection"


export function HalamanTentang() {
    return (
        <>
            <Navbar />
            <main>
                <HeroSection />
                <BiographySection />
                <StorySection />
                <KPISection className="bg-black relative border-white/15 border" />
            </main>
            <Footer />
        </>
    )
}