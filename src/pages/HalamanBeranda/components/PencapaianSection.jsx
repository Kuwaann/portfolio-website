import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'
import { KPISection } from '../../../components/KPISection'
import Emir from '../../../assets/hero.png'
import Emir2 from '../../../assets/emir2.png'
import Emir3 from '../../../assets/emir3.png'

export function PencapaianSection() {
    useGSAP(() => {
        gsap.timeline({
            scrollTrigger: {
                trigger: "#pencapaian",
                start: "top bottom",
                end: "center 70%",
                scrub: true,
                ease: "power1.inOut"
            }
        }).to('#emir-photo-left', {
            x: -300,
            rotate: -6,
            y: -50
        }, 0)
            .to('#emir-photo-right', {
                x: 300,
                rotate: 6,
                y: -50
            }, 0);

        const paragraphSplit = SplitText.create("figure blockquote", { type: "lines" });

        gsap.to('#emir-photo-center', {
            y: -90,
            scrollTrigger: {
                trigger: '#pencapaian',
                start: '10% 65%',
                end: 'bottom 95%',
                scrub: true,
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

        gsap.to('blockquote', {
            y: -120,
            scrollTrigger: {
                trigger: 'blockquote',
                start: 'top bottom',
                scrub: true
            },
        })

        gsap.to('figcaption', {
            y: -45,
            scrollTrigger: {
                trigger: 'figcaption',
                start: 'top bottom',
                scrub: true
            },
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
    })

    return (
        <section id="pencapaian" className="flex flex-col h-fit">
            <div className="py-32 flex flex-col gap-16 items-center">
                <div className="relative flex justify-center items-center h-150 w-full">
                    <img id="emir-photo-left" src={Emir3} alt="" className="w-80 absolute object-cover z-0" />
                    <img id="emir-photo-center" src={Emir} alt="" className="w-96 absolute object-cover z-10" />
                    <img id="emir-photo-right" src={Emir2} alt="" className="w-80 absolute object-cover z-0" />
                </div>
                <figure className="text-center flex flex-col gap-16">
                    <blockquote className="text-5xl max-w-lg font-medium">“Tidak hanya bekerja, tetapi memberikan hasil dan kepuasan nyata”</blockquote>
                    <figcaption className="text-2xl font-medium">Muhammad Emir Rivaldy, 2026</figcaption>
                </figure>
                <KPISection />
            </div>
        </section>
    )
}