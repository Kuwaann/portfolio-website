import { Button } from '../../../components/Button'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/all'
import { useNavigate } from 'react-router'
import { useRef } from 'react'

export function AboutMeSection() {
    const navigate = useNavigate();

    const sectionRef = useRef();
    const paragraphRef = useRef();
    const buttonRef = useRef();

    useGSAP(() => {
        const mm = gsap.matchMedia();

        mm.add({
            isDesktop: "(min-width: 768px)",
            isMobile: "(max-width: 767px)"
        }, () => {
            const paragraphSplit = SplitText.create(paragraphRef.current, { type: 'chars' });

            gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
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
                .fromTo(buttonRef.current, {
                    opacity: 0,
                    y: 15,
                }, {
                    opacity: 1,
                    y: 0
                })

            return () => paragraphSplit.revert();
        })
    }, { scope: sectionRef })

    return (
        <section id="about-me" className="px-8 md:px-32 flex flex-col justify-start" ref={sectionRef}>
            <div className="py-32 flex flex-col gap-8">
                <p className="text-2xl md:text-5xl font-normal text-justify hyphens-auto" ref={paragraphRef}>Saya adalah seorang <span className="opacity-75">pengembang web</span>, <span className="opacity-75">desainer UI/UX</span>, dan juga <span className="opacity-75">desainer grafis</span> yang berbasis di <span className="opacity-75">Jakarta, Indonesia</span>. Membangun project saya dengan cara yang <span className="opacity-75">terstruktur</span> dan <span className="opacity-75 italic">detailed</span> sehingga menghasilkan produk yang <span className="opacity-75">fantastis</span> dan <span className="opacity-75 italic">polished</span> untuk Anda.</p>
                <Button variant="primary" onClick={() => navigate('/about')} ref={buttonRef}>Tentang Saya</Button>
            </div>
        </section>
    )
}