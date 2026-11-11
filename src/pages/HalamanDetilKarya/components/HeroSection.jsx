import { useRef } from "react"
import { Badge } from "../../../components/Badge"
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";

export function HeroSection({ project }) {
    const sectionRef = useRef();
    const imgRef = useRef();
    const projectClientYearRef = useRef();
    const projectTitleRef = useRef();

    useGSAP(() => {
        const mm = gsap.matchMedia();

        mm.add({
            isDesktop: "(min-width: 768px)",
            isMobile: "(max-width: 767px)"
        }, (context) => {
            const { isMobile } = context.conditions;

            const projectClientYearSplit = SplitText.create(projectClientYearRef.current, { type: "chars" });
            const projectTitleSplit = SplitText.create(projectTitleRef.current, { type: "chars" });

            gsap.timeline({
                defaults: {
                    duration: 0.5,
                    stagger: 0.01,
                    ease: 'circ.inOut'
                }
            }).from(projectClientYearSplit.chars, {
                opacity: 0,
                y: isMobile ? 15 : 30,
            }).from(projectTitleSplit.chars, {
                opacity: 0,
                y: isMobile ? 15 : 30,
            }, "<30%");

            gsap.from(imgRef.current, {
                scale: isMobile ? 1.3 : 1.5,
                duration: 1.5,
                ease: 'circ.out'
            });

            gsap.to(imgRef.current, {
                scrollTrigger: {
                    trigger: imgRef.current,
                    scrub: true,
                    start: 'top top'
                },
                yPercent: isMobile ? 10 : 20
            });

            return () => {
                projectClientYearSplit.revert();
                projectTitleSplit.revert();
            };
        });
    }, { scope: sectionRef });

    return (
        <section className="w-full h-[120vh] relative py-64 mb-4" ref={sectionRef}>
            <div className="relative z-20 w-full h-full flex flex-col justify-end items-center gap-6">
                <span className="text-2xl" ref={projectClientYearRef}>{project?.client} • {project?.year}</span>
                <h2 className="text-[64px] md:text-9xl text-white text-center" ref={projectTitleRef}>{project?.title}</h2>
                <div className="flex gap-2">
                    {project?.tags?.length ? (
                        project.tags.map((tag) => (
                            <Badge key={tag}>{tag}</Badge>
                        ))
                    ) : (
                        <>
                            <Badge>Tag 1</Badge>
                            <Badge>Tag 2</Badge>
                            <Badge>Tag 3</Badge>
                        </>
                    )}
                </div>
            </div>
            <div className="w-full h-full overflow-hidden opacity-50 absolute inset-0 z-10">
                <img src={project?.img?.[0]} alt="" className="w-full h-full object-cover scale-125" ref={imgRef} />
            </div>
        </section>
    )
}
