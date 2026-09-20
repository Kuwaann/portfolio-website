import { Button } from '../../../components/Button'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/all'

export function AboutMeSection() {
    useGSAP(() => {
        const paragraphSplit = SplitText.create('#about-paragraph', { type: 'chars' });

        gsap.timeline({
            scrollTrigger: {
                trigger: "#about-me",
                scrub: true,
                pin: true,
                start: "top top",
                end: "+=500"
            }
        })
            .from(paragraphSplit.chars, {
                opacity: 0.1,
                y: 15,
                stagger: 0.02,
                ease: 'none'
            })
            .fromTo("#about-button", {
                opacity: 0,
                y: 15,
            }, {
                opacity: 1,
                y: 0
            })
    })

    return (
        <section id="about-me" className="px-32 flex flex-col justify-start">
            <div className="py-32 flex flex-col gap-8">
                <p id="about-paragraph" className="text-5xl font-normal text-justify">Saya adalah seorang <span className="opacity-75">pengembang web</span>, <span className="opacity-75">desainer UI/UX</span>, dan juga <span className="opacity-75">desainer grafis</span> yang berbasis di <span className="opacity-75">Jakarta, Indonesia</span>. Membangun project saya dengan cara yang <span className="opacity-75">terstruktur</span> dan <span className="opacity-75 italic">detailed</span> sehingga menghasilkan produk yang <span className="opacity-75">fantastis</span> dan <span className="opacity-75 italic">polished</span> untuk Anda.</p>
                <Button id="about-button">Pelajari Lebih Lanjut</Button>
            </div>
        </section>
    )
}