import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'
import { KPISection } from '../../../components/KPISection'
import { useRef } from 'react'
import Emir from '../../../assets/hero.png'
import Emir2 from '../../../assets/emir2.png'
import Emir3 from '../../../assets/emir3.png'

export function PencapaianSection() {
    const sectionRef = useRef();
    const leftPhoto = useRef();
    const centerPhoto = useRef();
    const rightPhoto = useRef();

    useGSAP(() => {
        const mm = gsap.matchMedia();

        mm.add({
            isDesktop: "(min-width: 768px)",
            isMobile: "(max-width: 767px)"
        }, (context) => {
            const { isMobile } = context.conditions;

            const paragraphSplit = SplitText.create("figure blockquote", { type: "lines" });

            gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top bottom",
                    end: "center 70%",
                    scrub: true,
                    ease: "power1.inOut",
                    invalidateOnRefresh: true
                }
            }).to(leftPhoto.current, {
                x: isMobile ? -125 : -300,
                rotate: -6,
                y: -30
            }, 0)
                .to(rightPhoto.current, {
                    x: isMobile ? 125 : 300,
                    rotate: 6,
                    y: -30
                }, 0);

            
            gsap.to(centerPhoto.current, {
                y: isMobile ? -80 : -90,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: isMobile ? '10% 90%' : '10% 65%',
                    end: 'bottom 95%',
                    scrub: true,
                    invalidateOnRefresh: true
                }
            })

            gsap.from(paragraphSplit.lines, {
                opacity: 0,
                yPercent: 100,
                ease: 'power1.inOut',
                stagger: 0.05,
                scrollTrigger: {
                    trigger: 'figure blockquote',
                    start: 'top 80%'
                }
            })

            gsap.from('.kpi-card', {
                scrollTrigger: {
                    trigger: '.kpi-card',
                    start: 'top bottom',
                    end: 'bottom 60%'
                },
                ease: 'power1.inOut',
                duration: 0.7,
                stagger: 0.15,
                opacity: 0,
                yPercent: 20,
            })
            
            return () => paragraphSplit.revert()
        })
    }, { scope: sectionRef })

    return (
        <section className="flex flex-col h-fit" ref={sectionRef}>
            <div className="px-8 py-32 flex flex-col gap-16 items-center">
                <div className="relative flex justify-center items-center h-75 md:h-150 w-full">
                    <img src={Emir3} alt="" className="w-40 md:w-80 absolute object-cover z-0" ref={leftPhoto}/>
                    <img src={Emir} alt="" className="w-48 md:w-96 absolute object-cover z-10" ref={centerPhoto}/>
                    <img src={Emir2} alt="" className="w-40 md:w-80 absolute object-cover z-0" ref={rightPhoto}/>
                </div>
                <figure className="text-center flex flex-col gap-16">
                    <blockquote className="text-2xl md:text-5xl max-w-lg font-medium">“Tidak hanya bekerja, tetapi memberikan hasil dan kepuasan nyata”</blockquote>
                    <figcaption className="text-lg md:text-2xl">Muhammad Emir Rivaldy, 2026</figcaption>
                </figure>
                <KPISection />
            </div>
        </section>
    )
}