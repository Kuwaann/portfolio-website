import { Navbar } from '../../components/Navbar'
import { projects } from '../../../constants'
import { ProjectCard } from '../../components/HalamanBeranda/ProjectCard'
import { Badge } from '../../components/Badge'
import { Footer } from '../../components/Footer'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

export function HalamanKarya() {
    useGSAP(() => {
        gsap.set('.project-card', { opacity: 0, y: 30 })

        ScrollTrigger.batch('.project-card', {
            start: 'top 95%',
            once: true,
            onEnter: (batch) => {
                gsap.to(batch, {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    stagger: 0.15,
                    ease: 'power2.out',
                    overwrite: 'auto'
                })
            }
        })
    })

    return (
        <>
            <Navbar />
            <section id="karya" className="w-full grid grid-cols-[1fr_1.5fr_1fr] items-start gap-x-4 gap-y-16 p-4 py-32">
                {projects.map((project, index) => (
                    <div key={`${project.slug}-${index}`} className="project-card flex flex-col gap-4">
                        <Link to={`/works/${project.slug}`}>
                            <ProjectCard project={project} />
                        </Link>
                        <div className="flex flex-col gap-2">
                            <h2 className="text-2xl font-medium">{project.title}</h2>
                            <div className="flex gap-2.5">
                                {project.tags.map((tag) => (
                                    <Badge key={tag}>{tag}</Badge>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </section>
            <Footer />
        </>
    )
}