import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import AboutPic from "../../../assets/HalamanKontak/about-picture.jpeg"

export function HeroSection() {
    const imgRef = useRef();

    useGSAP(() => {
        gsap.from(imgRef.current, {
            scale: 1.5,
            duration: 1.2,
            ease: 'circ.inOut'
        });

    })
    return (
        <section className="w-full h-screen overflow-hidden sticky top-0">
            <div className="w-full h-full overflow-hidden relative z-0">
                <img src={AboutPic} alt="" className="w-full h-full object-cover overflow-hidden saturate-0 contrast-125 scale-125" ref={imgRef} />
                <div className="bg-linear-to-b from-black/75 to-black/0 absolute inset-0"></div>
            </div>
        </section>
    )
}