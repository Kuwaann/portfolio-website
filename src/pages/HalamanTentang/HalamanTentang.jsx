import { Navbar } from "../../components/Navbar"
import { Footer } from "../../components/Footer"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"
import { SplitText } from "gsap/all"
import AboutPic from "../../assets/about-picture.jpeg"
import AboutPic2 from "../../assets/contact-picture.jpeg"

export function HalamanTentang() {
    const mainImageRef = useRef();
    const mainHeadingRef = useRef();
    const paragraphRef = useRef();
    const section2Ref = useRef();
    const aboutPicRef = useRef();

    useGSAP(() => {
        const paragraphSplit = SplitText.create(paragraphRef.current, { type: "chars, words" })

        gsap.from(mainImageRef.current, {
            scale: 1.5,
            duration: 1.2,
            ease: 'circ.inOut'
        });

        gsap.from(mainHeadingRef.current, {
            letterSpacing: '-10%',
            duration: 1.2,
            ease: 'circ.inOut'
        })

        gsap.timeline({
            scrollTrigger: {
                trigger: section2Ref.current,
                scrub: true,
                start: 'top 40%',
                end: 'bottom bottom'
            },
            defaults: {
                stagger: 0.02
            }
        }).from(paragraphSplit.chars, {
            opacity: 0.1,
        })

        gsap.to(aboutPicRef.current, {
            scrollTrigger: {
                trigger: section2Ref.current,
                scrub: true,
                start: "top bottom",
                end: "bottom top"
            },
            yPercent: 20,
        })
    })

    return (
        <>
            <Navbar />
            <section className="w-full h-screen overflow-hidden sticky top-0">
                <div className="w-full h-full overflow-hidden relative z-0">
                    <img src={AboutPic} alt="" className="w-full h-full object-cover overflow-hidden saturate-0 contrast-125 scale-125" ref={mainImageRef} />
                    <div className="bg-linear-to-b from-black/75 to-black/0 absolute inset-0"></div>
                </div>
                <div className="absolute left-8 right-8 bottom-8 z-10 mix-blend-difference">
                    <h1 className="text-[144px] text-center font-medium drop-shadow-3xl leading-[93%]" ref={mainHeadingRef}>Muhammad Emir Rivaldy</h1>
                </div>
            </section>
            <section className="bg-black relative flex gap-8 p-8 z-10" ref={section2Ref}>
                <div className="flex-1 pt-32">
                    <div className="w-xl overflow-hidden">
                        <img src={AboutPic2} alt="" className="w-full h-full object-cover scale-125" ref={aboutPicRef} />
                    </div>
                </div>
                <div className="flex-1 pt-32">
                    <p className="text-4xl sticky top-1/2" ref={paragraphRef}>Mahasiswa Sistem Informasi asal Jakarta, Indonesia yang menekuni bidang Web Developing, UI/UX & Graphics Design, dan Video Editing.</p>
                </div>
            </section>
            <Footer />
        </>
    )
}