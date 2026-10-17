import { HeroSection } from './components/HeroSection'
import { ProjectStorySection } from './components/ProjectStorySection'
import { ProjectImagesSection } from './components/ProjectImagesSection'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { Navbar } from '../../components/Navbar'
import { Footer } from '../../components/Footer'
import { CTASection } from '../HalamanBeranda/components/CTASection'
import { useParams } from 'react-router'
import { projects } from '../../../constants'

export function HalamanDetilKarya() {
    const { slug } = useParams();
    const project = projects.find((project) => project.slug === slug);

    useGSAP(() => {
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
            <HeroSection project={project} />
            <ProjectStorySection project={project} />
            <ProjectImagesSection project={project} />
            <CTASection />
            <Footer />
        </>
    )
}