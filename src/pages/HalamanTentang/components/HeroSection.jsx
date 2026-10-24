import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import AboutPic from "../../../assets/HalamanKontak/about-picture.jpeg";

export function HeroSection() {
    const containerRef = useRef();
    const dummyDivRef = useRef();
    const imgContainerRef = useRef();
    const imgRef = useRef();
    const emirRef = useRef();
    const rivaldyRef = useRef();


    useGSAP(() => {
        const dummyRect = dummyDivRef.current.getBoundingClientRect();
        const xDummyCenter = dummyRect.left + (dummyRect.width / 2);
        const xWindowCenter = window.innerWidth / 2;
        const shiftX = xWindowCenter - xDummyCenter

        const tl = gsap.timeline({
            defaults: {
                ease: 'circ.inOut',
                duration: 1.8
            }
        });

        gsap.set(containerRef.current, {
            x: shiftX
        })
        tl.fromTo(emirRef.current, {
            xPercent: -160,
        }, {
            xPercent: 0,
            x: -32
        }, 0)
            .fromTo(rivaldyRef.current, {
                xPercent: 150,
            }, {
                xPercent: 0,
                x: 16
            }, 0)
            .fromTo(imgContainerRef.current, {
                borderRadius: '0px',
                width: '100vw',
                height: '100vh'
            }, {
                width: "180px",
                height: "180px",
                borderRadius: '8px',
            }, 0)
            .fromTo(imgRef.current, {
                scale: 2,
            }, {
                scale: 1,
            }, 0)
            .to(containerRef.current, {
                x: 0,
            }, 2)
            .to(imgContainerRef.current, {
                x: 0 - shiftX,
            }, '<');

    });

    return (
        <section
            className="w-full h-screen sticky top-0 flex justify-center items-center overflow-hidden bg-black text-white"
        >
            <div className="flex items-center justify-center select-none" ref={containerRef}>
                <span
                    ref={emirRef}
                    className="text-[256px] leading-none"
                >
                    emir
                </span>
                <div className="w-45 aspect-square" ref={dummyDivRef}>

                </div>

                <span
                    ref={rivaldyRef}
                    className="text-[256px] leading-none inline-block"
                >
                    rivaldy<span className="text-white/50">©</span>
                </span>
            </div>
            <div
                ref={imgContainerRef}
                className="absolute z-10 aspect-square overflow-hidden flex justify-center items-center"
            >
                <img
                    ref={imgRef}
                    src={AboutPic}
                    alt="About"
                    className="w-full h-full object-cover saturate-0 contrast-125"
                />
                <div className="absolute inset-0 bg-linear-to-b from-black/60 via-transparent to-black/80 pointer-events-none" />
            </div>
        </section>
    );
}