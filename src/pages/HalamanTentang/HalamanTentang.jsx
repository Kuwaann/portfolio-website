import { Navbar } from "../../components/Navbar"
import { Footer } from "../../components/Footer"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"
import { SplitText, ScrollTrigger } from "gsap/all"
import { Button } from "../../components/Button"
import AboutPic from "../../assets/about-picture.jpeg"
import AboutPic2 from "../../assets/contact-picture.jpeg"
import Emir1 from "../../assets/HalamanTentang/marquee/emir1.jpg"
import Emir2 from "../../assets/HalamanTentang/marquee/emir2.jpg"
import Emir3 from "../../assets/HalamanTentang/marquee/emir3.jpg"
import Emir4 from "../../assets/HalamanTentang/marquee/emir4.jpg"


export function HalamanTentang() {
    const mainImageRef = useRef();
    const mainHeadingRef = useRef();
    const paragraph1Ref = useRef();
    const section2Ref = useRef();
    const aboutPicRef = useRef();
    const paragraph2Ref = useRef();
    const marqueeRef = useRef();

    useGSAP(() => {
        // Gunakan type: "words, chars" agar pembungkusan kata tetap utuh & tidak patah
        const paragraph1Split = SplitText.create(paragraph1Ref.current, { type: "words, chars" });
        const paragraph2Split = SplitText.create(paragraph2Ref.current, { type: "lines" });

        gsap.from(mainImageRef.current, {
            scale: 1.5,
            duration: 1.2,
            ease: 'circ.inOut'
        });

        gsap.from(mainHeadingRef.current, {
            letterSpacing: '-10%',
            duration: 1.2,
            ease: 'circ.inOut'
        });

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
        }).from(paragraph1Split.chars, {
            opacity: 0.1,
        });

        gsap.to(aboutPicRef.current, {
            scrollTrigger: {
                trigger: section2Ref.current,
                scrub: true,
                start: "top bottom",
                end: "bottom top"
            },
            yPercent: 20,
        });

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
        document.fonts.ready.then(() => {
            ScrollTrigger.refresh();
        });

        return () => {
            paragraph1Split.revert();
            paragraph2Split.revert();
        };
    })

    return (
        <>
            <Navbar />
            <section className="w-full h-screen overflow-hidden sticky top-0">
                <div className="w-full h-full overflow-hidden relative z-0">
                    <img src={AboutPic} alt="" className="w-full h-full object-cover overflow-hidden saturate-0 contrast-125 scale-125" ref={mainImageRef} />
                    <div className="bg-linear-to-b from-black/75 to-black/0 absolute inset-0"></div>
                </div>
                {/* <div className="absolute inset-0 w-full h-full z-10 mix-blend-difference">
                    <h1 className="text-7xl text-center font-medium drop-shadow-3xl leading-[93%]" ref={mainHeadingRef}>Muhammad Emir Rivaldy</h1>
                </div> */}
            </section>
            <section className="bg-black relative flex gap-8 p-8  pt-32 z-10" ref={section2Ref}>
                <div className="flex-1">
                    <div className="w-xl overflow-hidden">
                        <img src={AboutPic2} alt="" className="w-full h-full object-cover scale-125" ref={aboutPicRef} />
                    </div>
                </div>
                <div className="flex-1">
                    <p className="text-lg sticky top-1/2" ref={paragraph1Ref}>Halo, Saya Muhammad Emir Rivaldy, mahasiswa aktif Sistem Informasi di Universitas Pembangunan Nasional "Veteran" Yogyakarta dan berbasis di Jakarta, Indonesia yang menekuni bidang Web Developing, UI/UX & Graphics Design, dan Video Editing.</p>
                </div>
            </section>
            <section className="pt-32 pb-8 flex gap-32 bg-black relative z-10">
                <div className="px-8 flex flex-col flex-1 gap-8">
                    <div className="flex flex-col gap-8">
                        <h2 className="text-[64px] ">Bagaimana Ini Semua Dimulai</h2>
                        <p className="text-lg text-justify text-white/50" ref={paragraph2Ref}>Kecintaan Saya terhadap teknologi dimulai sejak umur dini. Saya gemar bermain video gim bernama Minecraft. Di usia Saya yang masih kecil, Saya membuat sebuah server untuk bermain dengan teman online saya. Untuk teman online saya terhubung, Saya tonton banyak tutorial di platform YouTube, disitu Saya mengotak-atik router Saya seakan-akan Saya mengerti apa yang saya lakukan. Banyak yang Saya pelajari tentang teknologi jaringan dari situ. Lalu, seni adalah turun-temurun dari Ayah Saya, dari kecil Saya berusaha untuk menggambar sebanyak-mungkin dan sangat menyukainya. Intinya, Saya cinta terhadap dunia teknologi dan seni, dan barangkali bisa dipadukan menjadi sebuah mahakarya.</p>
                    </div>
                    <div className="flex gap-2">
                        <Button variant="primary">Lihat Semua Karya</Button>
                        <Button variant="secondary">Kontak Saya</Button>
                    </div>

                </div>

                <div className="overflow-hidden w-full relative flex-1">
                    <div className="absolute inset-0 bg-linear-to-r from-black to-black/0 z-10">
                    </div>
                    <div className="flex items-start flex-nowrap w-max gap-4 relative z-0" ref={marqueeRef}>
                        <div className="w-md aspect-square shrink-0">
                            <img src={Emir1} alt="" className="w-full h-full object-cover grayscale" />
                        </div>
                        <div className="w-md aspect-video shrink-0">
                            <img src={Emir2} alt="" className="w-full h-full object-cover grayscale" />
                        </div>
                        <div className="w-md aspect-square shrink-0">
                            <img src={Emir3} alt="" className="w-full h-full object-cover grayscale" />
                        </div>
                        <div className="w-md aspect-4/3 shrink-0">
                            <img src={Emir4} alt="" className="w-full h-full object-cover grayscale" />
                        </div>
                        <div className="w-md aspect-square shrink-0">
                            <img src={Emir1} alt="" className="w-full h-full object-cover grayscale" />
                        </div>
                        <div className="w-md aspect-video shrink-0">
                            <img src={Emir2} alt="" className="w-full h-full object-cover grayscale" />
                        </div>
                        <div className="w-md aspect-square shrink-0">
                            <img src={Emir3} alt="" className="w-full h-full object-cover grayscale" />
                        </div>
                        <div className="w-md aspect-4/3 shrink-0">
                            <img src={Emir4} alt="" className="w-full h-full object-cover grayscale" />
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}