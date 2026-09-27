import { Badge } from '../../components/Badge'
import Placeholder from '../../assets/imgplaceholder.jpg'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'
import { Navbar } from '../../components/Navbar'
import { Footer } from '../../components/Footer'
import { CTASection } from '../HalamanBeranda/components/CTASection'

export function HalamanDetilKarya() {
    const imgRef = useRef();

    useGSAP(() => {
        gsap.to(imgRef.current, {
            scrollTrigger: {
                trigger: imgRef.current,
                scrub: true,
                start: 'top top'
            },
            yPercent: 20
        })

        const projectImages = gsap.utils.toArray('.project-img');
        projectImages.forEach((image) => {
            gsap.to(image, {
                scrollTrigger: {
                    trigger: image,
                    scrub: true,
                    start: 'top bottom'
                },
                yPercent: 20
            })
        })

    })

    return (
        <>
            <Navbar />
            <section className="w-full h-[120vh] relative py-64  mb-4">
                <div className="relative z-20 w-full h-full flex flex-col justify-end items-center gap-6">
                    <span className="text-2xl">Nama Klien • 2026</span>
                    <h2 className="text-9xl text-white">Nama Project</h2>
                    <div className="flex gap-2">
                        <Badge>Tag 1</Badge>
                        <Badge>Tag 2</Badge>
                        <Badge>Tag 3</Badge>
                    </div>
                </div>
                <div className="w-full h-full overflow-hidden opacity-50 absolute inset-0 z-10">
                    <img src={Placeholder} alt="" className="w-full h-full object-cover scale-125" ref={imgRef} />
                </div>
            </section>
            <section className="px-32 py-32 border-y border-y-white/15 border-dashed mb-4 flex flex-col gap-2">
                <h3 className="text-7xl text-white/50 font-crimson-text italic">Cerita di Balik Karya</h3>
                <p className="text-2xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, animi modi. Odit necessitatibus nemo facilis provident beatae mollitia vitae unde voluptates iusto, repellat harum illum ipsa dolore numquam aspernatur iure!</p>
            </section>
            <section className="grid grid-cols-2 px-4 gap-4">
                <div className="overflow-hidden aspect-square rounded-sm">
                    <img src={Placeholder} alt="" className="project-img w-full h-full object-cover scale-150" />
                </div>
                <div className="overflow-hidden aspect-square rounded-sm">
                    <img src={Placeholder} alt="" className="project-img w-full h-full object-cover scale-150" />
                </div>
                <div className="overflow-hidden h-[75vh] rounded-sm col-span-2">
                    <img src={Placeholder} alt="" className="project-img w-full h-full object-cover scale-150" />
                </div>
            </section>
            <CTASection />
            <Footer />
        </>
    )
}