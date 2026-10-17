import { useNavigate } from "react-router"
import { Button } from "../../../components/Button"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export function CTASection() {
    const navigate = useNavigate();

    const textsRef = useRef();

    useGSAP(() => {
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

    return (
        <section className="px-64 py-32 flex flex-col items-center justify-center gap-8 cursor-default">
            <div className="flex items-center justify-center gap-2" ref={textsRef}>
                <span className="font-semibold text-9xl">(</span>
                <div className="flex flex-col items-center justify-center gap-4">
                    <h2 className="text-center text-9xl">Gimana?</h2>
                    <p className="text-center text-7xl">Punya ide gila di pikiranmu? Langsung gas aja kita <span className="text-white/75">wujudkan</span> bersama!</p>
                </div>
                <span className="font-semibold text-9xl">)</span>
            </div>
            <Button onClick={() => navigate('/contact')}>Wujudkan Ide Anda!</Button>
        </section>
    )
}