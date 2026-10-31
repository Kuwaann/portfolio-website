import Hero from '../../../assets/hero.png'
import { ChevronDownIcon } from 'lucide-react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import { useMediaQuery } from 'react-responsive'

export function HeroSection() {
    const containerRef = useRef();

    const isMobile = useMediaQuery({ maxWidth: 767 });

    useGSAP(() => {
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: "#hero",
                start: "top top",
                end: "+=300",
                scrub: true,
                pin: true,
            }
        })

        timeline.to(".chevron", {
            y: isMobile ? -15 : -50,
            opacity: 0,
            ease: "none"
        })

        gsap.to("#hero-profile", {
            y: 30,
            opacity: 0,
            scrollTrigger: {
                trigger: "#hero",
                start: "top top",
                end: "bottom top",
                scrub: true,
            }
        })

        gsap.to("#based", {
            y: -90,
            scrollTrigger: {
                trigger: "#hero",
                start: "top top",
                end: "bottom top",
                scrub: true,
            }
        })


    })

    return (
        <section id="hero" className="flex flex-col items-center justify-between h-screen py-16 cursor-default">
            <span></span>
            <div id="hero-title" className="flex flex-col max-w-full">
                <div className="flex justify-between px-8 md:px-32 -translate-y-32 md:translate-y-0">
                    <div className="flex justify-center gap-4 md:gap-16 ">
                        <span className="font-medium text-center text-xs md:text-lg">Pengembang Web</span>
                        <span className="font-medium text-center text-xs md:text-lg">Desainer UI/UX</span>
                    </div>
                    <div className="flex justify-center gap-4 md:gap-16">
                        <span className="font-medium text-center text-xs md:text-lg">Desainer Grafis</span>
                        <span className="font-medium text-center text-xs md:text-lg">Video Editor</span>
                    </div>
                </div>
                <div className="w-full py-5 overflow-hidden">
                    <div className="flex marquee mix-blend-difference">
                        <h1 className="text-9xl md:text-[256px] whitespace-nowrap pr-16">Muhammad Emir Rivaldy •</h1>
                        <h1 aria-hidden className="text-8xl md:text-[256px] whitespace-nowrap pr-16">Muhammad Emir Rivaldy •</h1>
                    </div>
                </div>


            </div>
            <div className="flex justify-between items-center w-full px-32" id="chevron">
                <ChevronDownIcon className="chevron" />
                <span id="based" className="font-medium text-center text-xs md:text-lg">Geser ke Bawah</span>
                <ChevronDownIcon className="chevron" />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[-9999] overflow-hidden flex items-center justify-center" ref={containerRef}>
                <img src={Hero} alt="Hero Section Profile" id="hero-profile" className="scale-110" />
            </div>
        </section>
    )
}