import { Button } from "../../../components/Button"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { SplitText } from "gsap/all"
import { useRef } from "react"
import { useNavigate } from "react-router"
import Emir1 from "../../../assets/HalamanTentang/marquee/emir1.jpg"
import Emir2 from "../../../assets/HalamanTentang/marquee/emir2.jpg"
import Emir3 from "../../../assets/HalamanTentang/marquee/emir3.jpg"
import Emir4 from "../../../assets/HalamanTentang/marquee/emir4.jpg"

export function StorySection() {
    const navigate = useNavigate();

    const headingRef = useRef();
    const paragraphRef = useRef();
    const marqueeRef = useRef();

    useGSAP(() => {
        const headingSplit = SplitText.create(headingRef.current, { type: "chars", mask: "chars" });
        const paragraphSplit = SplitText.create(paragraphRef.current, { type: "lines", mask: "lines" });

        gsap.from(headingSplit.chars, {
            scrollTrigger: {
                trigger: headingRef.current,
                start: 'bottom bottom'
            },
            yPercent: 100,
            opacity: 0,
            stagger: 0.05,
            duration: 1,
            ease: 'circ.inOut'
        });

        gsap.from(paragraphSplit.lines, {
            scrollTrigger: {
                trigger: paragraphRef.current,
                start: 'top 95%'
            },
            yPercent: 100,
            opacity: 0,
            stagger: 0.02,
            duration: 1,
            ease: 'circ.inOut'
        });

        gsap.to(marqueeRef.current, {
            xPercent: -50,
            repeat: -1,
            duration: 25,
            ease: 'none'
        });
    })
    return (
        <section className="pt-32 pb-8 flex flex-col gap-16 md:gap-32 bg-black relative z-10">
            <div className="px-4 md:px-8 flex flex-col items-center flex-1 gap-8">
                <div className="flex flex-col items-center gap-8">
                    <h2 className="text-[64px] text-left md:text-center leading-none" ref={headingRef}>Bagaimana Ini Semua Dimulai</h2>
                    <p className="text-xs md:text-lg text-justify md:text-center text-white/50 w-full md:w-2/3 hypens-auto" ref={paragraphRef}>Kecintaan Saya terhadap teknologi dimulai sejak umur dini. Saya gemar bermain video gim bernama Minecraft. Di usia Saya yang masih kecil, Saya membuat sebuah server untuk bermain dengan teman online saya. Untuk teman online saya terhubung, Saya tonton banyak tutorial di platform YouTube, disitu Saya mengotak-atik router Saya seakan-akan Saya mengerti apa yang saya lakukan. Banyak yang Saya pelajari tentang teknologi jaringan dari situ. Lalu, seni adalah turun-temurun dari Ayah Saya, dari kecil Saya berusaha untuk menggambar sebanyak-mungkin dan sangat menyukainya. Intinya, Saya cinta terhadap dunia teknologi dan seni, dan barangkali bisa dipadukan menjadi sebuah mahakarya.</p>
                </div>
                <div className="flex w-full md:w-auto gap-2">
                    <Button variant="primary" onClick={() => navigate("/works")} className="flex-1 md:flex-none">Lihat Semua Karya</Button>
                    <Button variant="secondary" onClick={() => navigate("/contact") } className="flex-1 md:flex-none">Kontak Saya</Button>
                </div>
            </div>
            <div className="overflow-hidden w-full relative flex-1">
                {/* <div className="absolute inset-0 bg-linear-to-r from-black to-black/0 z-10">
                </div> */}
                <div className="flex items-start flex-nowrap w-max gap-4 relative z-0" ref={marqueeRef}>
                    <div className="w-xs md:w-md aspect-video md:aspect-square shrink-0">
                        <img src={Emir1} alt="" className="w-full h-full object-cover grayscale" />
                    </div>
                    <div className="w-xs md:w-md aspect-video shrink-0">
                        <img src={Emir2} alt="" className="w-full h-full object-cover grayscale" />
                    </div>
                    <div className="w-xs md:w-md aspect-video md:aspect-square shrink-0">
                        <img src={Emir3} alt="" className="w-full h-full object-cover grayscale" />
                    </div>
                    <div className="w-xs md:w-md aspect-video md:aspect-4/3 shrink-0">
                        <img src={Emir4} alt="" className="w-full h-full object-cover grayscale" />
                    </div>
                    <div className="w-xs md:w-md aspect-video md:aspect-square shrink-0">
                        <img src={Emir1} alt="" className="w-full h-full object-cover grayscale" />
                    </div>
                    <div className="w-xs md:w-md aspect-video shrink-0">
                        <img src={Emir2} alt="" className="w-full h-full object-cover grayscale" />
                    </div>
                    <div className="w-xs md:w-md aspect-video md:aspect-square shrink-0">
                        <img src={Emir3} alt="" className="w-full h-full object-cover grayscale" />
                    </div>
                    <div className="w-xs md:w-md aspect-video md:aspect-4/3 shrink-0">
                        <img src={Emir4} alt="" className="w-full h-full object-cover grayscale" />
                    </div>
                </div>
            </div>
        </section>
    )
}