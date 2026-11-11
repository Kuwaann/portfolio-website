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
import { useRef } from 'react'

export function HalamanDetilKarya() {
    const { slug } = useParams();
    const project = projects.find((project) => project.slug === slug);
    const mainRef = useRef(null);

    useGSAP(() => {
        const mm = gsap.matchMedia();

        mm.add({
            isDesktop: "(min-width: 768px)",
            isMobile: "(max-width: 767px)"
        }, (context) => {
            const { isMobile } = context.conditions;

            const projectImages = gsap.utils.toArray('.project-img');
            projectImages.forEach((image) => {
                gsap.to(image, {
                    scrollTrigger: {
                        trigger: image,
                        scrub: true,
                        start: 'top bottom'
                    },
                    yPercent: isMobile ? 10 : 20
                });
            });
        });
    }, { scope: mainRef });

    if (!project) return null;

    return (
        <div ref={mainRef}>
            <Navbar />
            <main>
                <HeroSection project={project} />
                <ProjectStorySection project={project} />
                <ProjectImagesSection project={project} />
                <CTASection />
            </main>
            <Footer />
        </div>
    )
}
