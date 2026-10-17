import { Navbar } from "../../components/Navbar"
import { Footer } from "../../components/Footer"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"
import { SplitText, } from "gsap/all"
import { HeroSection } from "./components/HeroSection"
import { BiographySection } from "./components/BiographySection"
import { StorySection } from "./components/StorySection"


export function HalamanTentang() {
    const paragraph2Ref = useRef();
    const marqueeRef = useRef();

    useGSAP(() => {
        const paragraph2Split = SplitText.create(paragraph2Ref.current, { type: "lines" });

        gsap.from(paragraph2Split.lines, {
            scrollTrigger: {
                trigger: paragraph2Ref.current,
                start: 'top 80%'
            },
            yPercent: 100,
            opacity: 0,
            stagger: 0.05,
            duration: 1,
            ease: 'circ.inOut'
        });

        gsap.to(marqueeRef.current, {
            xPercent: -50,
            repeat: -1,
            duration: 25,
            ease: 'none'
        });

        // Re-refresh ScrollTrigger setelah font selesai dimuat
        // document.fonts.ready.then(() => {
        //     ScrollTrigger.refresh();
        // });

        // return () => {
        //     paragraph1Split.revert();
        //     paragraph2Split.revert();
        // };
    })

    return (
        <>
            <Navbar />
            <main>
                <HeroSection />
                <BiographySection />
                <StorySection />
            </main>
            <Footer />
        </>
    )
}