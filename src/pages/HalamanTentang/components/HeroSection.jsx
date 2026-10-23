import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import AboutPic from "../../../assets/HalamanKontak/about-picture.jpeg"

export function HeroSection() {
    const imgContainerRef = useRef();
    const imgRef = useRef();

    useGSAP(() => {
        gsap.timeline({
            defaults: {
                ease: 'circ.inOut'
            }
        }).fromTo(imgContainerRef.current, {
            duration: 1.5,
            clipPath: "inset(100% 0% 100% 0%)",
        }, {
            duration: 1.5,
            clipPath: "inset(0% 0% 0% 0%)",
        }, 0)
            .from(imgRef.current, {
                scale: 1.5,
                duration: 2,
            }, 0.3);

    })
    return (
        <section className="w-full h-screen overflow-hidden sticky top-0">
            <div className="w-full h-full overflow-hidden relative z-0" ref={imgContainerRef}>
                <img src={AboutPic} alt="" className="w-full h-full object-cover overflow-hidden saturate-0 contrast-125 scale-125" ref={imgRef} />
                <div className="absolute inset-0"></div>
                <div className="bg-linear-to-b from-black/75 to-black/0 absolute inset-0"></div>
            </div>
        </section>
    )
}