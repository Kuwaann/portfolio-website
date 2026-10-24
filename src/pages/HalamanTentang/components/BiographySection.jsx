import { useRef } from "react"
import { SplitText } from "gsap/all";
import gsap from "gsap";
import Picture from "../../../assets/HalamanKontak/contact-picture.jpeg"
import { useGSAP } from "@gsap/react";

export function BiographySection() {
    const sectionRef = useRef();
    const imgRef = useRef();
    const paragraphRef = useRef();

    useGSAP(() => {
        const split = SplitText.create(paragraphRef.current, { type: "chars" });

        // Set initial state secara eksplisit sebelum ScrollTrigger jalan
        // supaya chars tidak langsung muncul sebelum animasi dimulai
        gsap.set(split.chars, { opacity: 0.1 });

        gsap.to(imgRef.current, {
            scrollTrigger: {
                trigger: imgRef.current,
                scrub: true,
                start: "top bottom",
                end: "bottom top",
                invalidateOnRefresh: true,
            },
            yPercent: 20,
        });

        gsap.to(split.chars, {
            scrollTrigger: {
                trigger: sectionRef.current,
                scrub: true,
                start: 'top 40%',
                end: 'bottom bottom',
                invalidateOnRefresh: true,
            },
            stagger: 0.02,
            opacity: 1,
        });

        return () => split.revert();
    })

    return (
        <section className="bg-black relative flex gap-8 p-8  pt-32 z-10 drop-shadow-2xl" ref={sectionRef}>
            <div className="flex-1">
                <div className="w-xl overflow-hidden">
                    <img src={Picture} alt="" className="w-full h-full object-cover scale-125" ref={imgRef} />
                </div>
            </div>
            <div className="flex-1">
                <p className="text-lg sticky top-1/2" ref={paragraphRef}>Halo, Saya Muhammad Emir Rivaldy, mahasiswa aktif Sistem Informasi di Universitas Pembangunan Nasional "Veteran" Yogyakarta dan berbasis di Jakarta, Indonesia yang menekuni bidang Web Developing, UI/UX & Graphics Design, dan Video Editing.</p>
            </div>
        </section>
    )
}