import { useGSAP } from '@gsap/react'
import Placeholder from '../../../assets/imgplaceholder.jpg'
import gsap from 'gsap'
import { Button } from '../../../components/Button'
import { ProjectCard } from '../../../components/HalamanBeranda/ProjectCard'
import { Badge } from '../../../components/Badge'
import { featuredProjects, projects } from '../../../../constants/index'
import { useNavigate } from 'react-router'
import { useMediaQuery } from 'react-responsive'

export function KaryaSection() {
    const navigate = useNavigate();

    const isMobile = useMediaQuery({ maxWidth: 767 });

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
                <div className="p-4 pb-0 w-full h-screen md:h-[125vh]">
                    <div className="relative w-full h-full overflow-hidden rounded-sm" onClick={() => {
                        if (!isMobile) return;

                        return navigate(`/works/${featuredProjects.slug}`);
                    }}>
                        <img id="top-work" src={Placeholder} alt="" className="w-full h-full object-cover scale-125" />
                        <div className="absolute inset-0 w-full z-10 px-8 py-8 md:py-16 flex flex-col md:flex-row justify-end md:justify-between md:items-end gap-8 md:gap-16">
                            <div id="top-work-left" className="flex flex-col gap-4">
                                <h2 className="text-[64px] md:text-9xl">{featuredProjects.title}</h2>
                                <div className="flex gap-2">
                                    {featuredProjects.tags.map((tag) => (
                                        <Badge key={featuredProjects.slug} className="bg-black/15">{tag}</Badge>
                                    ))}
                                </div>
                            </div>
                            <div id="top-work-right" className="w-auto md:w-xl flex flex-col gap-4 items-start md:items-end">
                                <p className="text-lg text-justify md:text-right">{featuredProjects.description}</p>
                                {!isMobile && <Button id="about-button" variant="primary" onClick={() => navigate(`/works/${featuredProjects.slug}`)}>Pelajari Lebih Lanjut</Button>}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-start gap-4 px-4">
                    {projects.map((project, index) => {
                        if (index > 1) return;
                        if (index === 0) return <ProjectCard key={project.title} project={project} className="md:h-screen" onClick={() => navigate(`/works/${project.slug}`)} />
                        if (index === 1) return <ProjectCard key={project.title} project={project} className="h-[75vh]" onClick={() => navigate(`/works/${project.slug}`)} />
                    })}
                </div>
            </section>
        </>

    )
}