import { useRef } from "react"
import { Badge } from "../../../components/Badge"
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";

export function HeroSection({ project }) {
    const imgRef = useRef();
    const projectClientYearRef = useRef();
    const projectTitleRef = useRef();

    useGSAP(() => {
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
            y: 30,
        }).from(projectTitleSplit.chars, {
            opacity: 0,
            y: 30,
        }, "<30%")

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
    })

    return (
        <section className="w-full h-[120vh] relative py-64  mb-4">
            <div className="relative z-20 w-full h-full flex flex-col justify-end items-center gap-6">
                <span className="text-2xl" ref={projectClientYearRef}>{project.client} • {project.year}</span>
                <h2 className="text-9xl text-white text-center" ref={projectTitleRef}>{project.title}</h2>
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
    )
}