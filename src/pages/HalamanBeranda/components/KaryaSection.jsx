import { useGSAP } from '@gsap/react'
import Placeholder from '../../../assets/skillsetplaceholder.jpg'
import gsap from 'gsap'
import { Button } from '../../../components/Button'
import { ProjectCard } from '../../../components/HalamanBeranda/ProjectCard'
import { Badge } from '../../../components/Badge'

export function KaryaSection() {
    useGSAP(() => {
        gsap.from('#top-work', {
            scrollTrigger: {
                trigger: '#top-work',
                scrub: true,
                start: "top bottom",
                end: "bottom bottom"
            },
            opacity: 0.1
        })

        gsap.fromTo('#top-work',
            { y: -100 },
            {
                scrollTrigger: {
                    trigger: '#top-work',
                    scrub: true,
                    start: "top bottom",
                    end: "bottom top"
                },
                y: 100,
                ease: 'none'
            }
        )
    })

    return (
        <section id="karya-terpilih" className="flex flex-col justify-center items-center gap-4">
            <div className="p-4 pb-0 w-full h-[125vh]">
                <div className="relative w-full h-full overflow-hidden rounded-sm">
                    <img id="top-work" src={Placeholder} alt="" className="w-full h-full object-cover scale-125" />
                    <div className="absolute inset-0 w-full z-10 px-8 py-16 flex justify-between items-end gap-16">
                        <div id="top-work-left" className="flex flex-col gap-4">
                            <h2 className="font-medium text-9xl">Nama Project</h2>
                            <div className="flex gap-2">
                                <Badge>Tag 1</Badge>
                                <Badge>Tag 2</Badge>
                                <Badge>Tag 3</Badge>
                            </div>
                        </div>
                        <div id="top-work-right" className="w-xl flex flex-col gap-4 items-end">
                            <p className="text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias eveniet sunt nobis reiciendis incidunt, ipsa mollitia eligendi neque distinctio asperiores provident culpa excepturi molestias deserunt quo, doloribus accusamus aut dignissimos?</p>
                            <Button id="about-button">Pelajari Lebih Lanjut</Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-start gap-4 px-4">
                <ProjectCard id='top-work-2' className='h-screen' />
                <ProjectCard id='top-work-3' className='h-[75vh]' />
            </div>
        </section>
    )
}