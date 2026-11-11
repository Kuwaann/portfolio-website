import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { HeroSection } from "./components/HeroSection";
import { BiographySection } from "./components/BiographySection";
import { StorySection } from "./components/StorySection";
import { KPISection } from "../../components/KPISection";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export function HalamanTentang() {
    const mainRef = useRef(null);

    useGSAP(() => {
        const mm = gsap.matchMedia();

        mm.add({
            isDesktop: "(min-width: 768px)",
            isMobile: "(max-width: 767px)"
        }, (context) => {
            const { isMobile } = context.conditions;

            gsap.from('.kpi-card', {
                scrollTrigger: {
                    trigger: '.kpi-card',
                    start: 'top bottom',
                    end: 'bottom 60%'
                },
                ease: 'power1.inOut',
                duration: 0.7,
                stagger: isMobile ? 0.1 : 0.15,
                opacity: 0,
                yPercent: 20,
            });
        });
    }, { scope: mainRef });

    return (
        <div ref={mainRef}>
            <Navbar />
            <main>
                <HeroSection />
                <BiographySection />
                <StorySection />
                <KPISection className="bg-black relative border-white/15 border" />
            </main>
            <Footer />
        </div>
    );
}
