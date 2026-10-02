import { useGSAP } from '@gsap/react'
import Placeholder from '../../../assets/imgplaceholder.jpg'
import gsap from 'gsap'
import { Button } from '../../../components/Button'
import { ProjectCard } from '../../../components/HalamanBeranda/ProjectCard'
import { Badge } from '../../../components/Badge'
import { featuredProjects, projects } from '../../../../constants/index'
import { useNavigate } from 'react-router'

export function KaryaSection() {
    const navigate = useNavigate();

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
        <>
            <section id="karya-terpilih" className="flex flex-col justify-center items-center gap-4 mb-64">
                <div className="p-4 pb-0 w-full h-[125vh]">
                    <div className="relative w-full h-full overflow-hidden rounded-sm">
                        <img id="top-work" src={Placeholder} alt="" className="w-full h-full object-cover scale-125" />
                        <div className="absolute inset-0 w-full z-10 px-8 py-16 flex justify-between items-end gap-16">
                            <div id="top-work-left" className="flex flex-col gap-4">
                                <h2 className="text-9xl">{featuredProjects.title}</h2>
                                <div className="flex gap-2">
                                    {featuredProjects.tags.map((tag) => (
                                        <Badge key={featuredProjects.slug}>{tag}</Badge>
                                    ))}
                                </div>
                            </div>
                            <div id="top-work-right" className="w-xl flex flex-col gap-4 items-end">
                                <p className="text-2xl">{featuredProjects.description}</p>
                                <Button id="about-button" variant="secondary" onClick={() => navigate(`/works/${featuredProjects.slug}`)}>Pelajari Lebih Lanjut</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-start gap-4 px-4">
                    {projects.map((project, index) => {
                        if (index > 1) return;
                        if (index === 0) return <ProjectCard key={project.title} project={project} className="h-screen" onClick={() => navigate(`/works/${project.slug}`)} />
                        if (index === 1) return <ProjectCard key={project.title} project={project} className="h-[75vh]" onClick={() => navigate(`/works/${project.slug}`)} />
                    })}
                </div>
            </section>
        </>

    )
}