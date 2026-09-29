import { Badge } from '../../components/Badge'
import Placeholder from '../../assets/imgplaceholder.jpg'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'
import { Navbar } from '../../components/Navbar'
import { Footer } from '../../components/Footer'
import { CTASection } from '../HalamanBeranda/components/CTASection'
import { SplitText } from 'gsap/all'
import { useParams } from 'react-router'
import { projects } from '../../../constants'

export function HalamanDetilKarya() {
    const { slug } = useParams();
    const project = projects.find((project) => project.slug === slug);

    const imgRef = useRef();

    useGSAP(() => {
        const projectClientYearSplit = SplitText.create('#project-client-year', { type: 'chars' });
        const projectNameSplit = SplitText.create('#project-name', { type: 'chars' });

        const timeline = gsap.timeline({
            defaults: {
                duration: 0.5,
                stagger: 0.01,
            }
        });

        timeline.from(projectClientYearSplit.chars, {
            opacity: 0,
            y: 30,

            ease: 'circ.inOut'
        }).from(projectNameSplit.chars, {
            opacity: 0,
            y: 30,
            ease: 'circ.inOut'
        }, '<30%')

        gsap.from(imgRef.current, {
            scale: 1.5,
            duration: 1.5,
            ease: 'circ.out'
        })

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
                    <span id="project-client-year" className="text-2xl">{project.client} • {project.year}</span>
                    <h2 id="project-name" className="text-9xl text-white text-center">{project.title}</h2>
                    <div className="flex gap-2">
                        <Badge>Tag 1</Badge>
                        <Badge>Tag 2</Badge>
                        <Badge>Tag 3</Badge>
                    </div>
                </div>
                <div className="w-full h-full overflow-hidden opacity-50 absolute inset-0 z-10">
                    <img src={project.img[0]} alt="" className="w-full h-full object-cover scale-125" ref={imgRef} />
                </div>
            </section>
            <section className="px-32 py-32 border-y border-y-white/15 border-dashed mb-4 flex flex-col gap-2">
                <h3 className="text-7xl text-white/50 font-crimson-text italic">Cerita di Balik Karya</h3>
                <p className="text-2xl">{project.description}</p>
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