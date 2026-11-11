import { useNavigate } from "react-router"
import { Button } from "../../../components/Button"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export function CTASection() {
    const navigate = useNavigate();

    const sectionRef = useRef();
    const textsRef = useRef();

    useGSAP(() => {
        const mm = gsap.matchMedia();

        mm.add({
            isDesktop: "(min-width: 768px)",
            isMobile: "(max-width: 767px)"
        }, () => {
            gsap.from(textsRef.current, {
                scrollTrigger: {
                    trigger: textsRef.current,
                    start: 'top 80%'
                },
                gap: '16px',
                duration: 1.2,
                ease: 'circ.inOut'
            });
        })
    }, { scope: sectionRef })

    return (
        <section className="px-8 py-16 md:px-64 md:py-32 flex flex-col items-center justify-center gap-8 cursor-default" ref={sectionRef}>
            <div className="flex items-center justify-center gap-2" ref={textsRef}>
                <span className="font-semibold text-[64px] md:text-9xl">(</span>
                <div className="flex flex-col items-center justify-center gap-4">
                    <h2 className="text-center  text-[64px] md:text-9xl">Gimana?</h2>
                    <p className="text-center text-2xl md:text-7xl">Punya ide gila di pikiranmu? Langsung gas aja kita <span className="text-white/75">wujudkan</span> bersama!</p>
                </div>
                <span className="font-semibold text-[64px] md:text-9xl">)</span>
            </div>
            <Button onClick={() => navigate('/contact')}>Wujudkan Ide Anda!</Button>
        </section>
    )
}