import { Navbar } from '../../components/Navbar'
import { projects } from '../../../constants'
import { ProjectCard } from '../../components/HalamanBeranda/ProjectCard'
import { Badge } from '../../components/Badge'
import { Footer } from '../../components/Footer'
import { useNavigate } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useRef } from 'react'
import Placeholder from '../../assets/imgplaceholder.jpg'
import Placeholder2 from '../../assets/imgplaceholder2.jpg'

export function HalamanKarya() {
    const navigate = useNavigate();

    const bg1Ref = useRef(null);
    const bg2Ref = useRef(null);
    const activeLayerRef = useRef(1);

    const handleHoverProject = (imgUrl) => {
        const isLayerOneActive = activeLayerRef.current === 1;

        const currentBg = isLayerOneActive ? bg1Ref.current : bg2Ref.current;
        const nextBg = isLayerOneActive ? bg2Ref.current : bg1Ref.current;

        if (nextBg && currentBg) {
            nextBg.src = imgUrl;
            gsap.set(nextBg, { scale: 1 });


            gsap.to(nextBg, {
                opacity: 0.2,
                duration: 0.5,
                ease: 'power2.out'
            });

            gsap.to(nextBg, {
                scale: 1.2,
                duration: 1.5,
                ease: 'circ.out',
                overwrite: 'auto'
            });

            gsap.to(currentBg, {
                opacity: 0,
                duration: 0.5,
                ease: 'power2.out',
                overwrite: 'auto'
            });

            activeLayerRef.current = isLayerOneActive ? 2 : 1
        }
    }

    const handleLeaveProject = () => {
        gsap.to([bg1Ref.current, bg2Ref.current], {
            opacity: 0,
            duration: 0.5,
            ease: 'power2.out',
            overwrite: 'auto'
        })
    }

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
            <img id="karya-background-1" src={Placeholder} className="fixed inset-0 -z-10 w-full h-full pointer-events-none object-cover opacity-0" ref={bg1Ref} alt="" />
            <img id="karya-background-2" src={Placeholder2} className="fixed inset-0 -z-10 w-full h-full pointer-events-none object-cover opacity-0" ref={bg2Ref} alt="" />

            <section id="karya" className="w-full grid grid-cols-[1fr_1.5fr_1fr] items-start gap-x-4 gap-y-16 p-4 py-32">
                {projects.map((project, index) => (
                    <div key={`${project.slug}-${index}`} className="project-card flex flex-col gap-4">
                        <ProjectCard project={project} onClick={() => navigate(`/works/${project.slug}`)} onHoverBg={() => handleHoverProject(project.img[0])} onLeaveBg={handleLeaveProject} />
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