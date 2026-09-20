import { useGSAP } from "@gsap/react"
import { useRef } from "react";
import gsap from "gsap";
import { Badge } from "../Badge";
import Placeholder from '../../assets/skillsetplaceholder.jpg'

export function SkillsetCard({ index, skillset }) {
    const cardRef = useRef(null);
    const previewRef = useRef(null)
    const xTo = useRef(null);
    const yTo = useRef(null);

    index++;
    const formattedIndex = index.toString().padStart(2, "0")

    const handleMouseEnter = (e) => {
        if (cardRef.current) {
            const rect = cardRef.current.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            gsap.set(previewRef.current, { x, y });
            xTo.current?.(x, x);
            yTo.current?.(y, y);
        }

        gsap.to(previewRef.current, {
            scale: 1,
            opacity: 1,
            duration: 0.3,
            ease: 'back.out(1.7)',
            overwrite: 'auto'
        })
    }

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        xTo.current?.(x);
        yTo.current?.(y);
    }

    const handleMouseLeave = () => {
        gsap.to(previewRef.current, {
            scale: 0,
            opacity: 0,
            duration: 0.2,
            ease: 'power2.in',
            overwrite: 'auto'
        })
    }

    useGSAP(() => {
        gsap.set(previewRef.current, { scale: 0, opacity: 0, xPercent: -50, yPercent: -50 });
        xTo.current = gsap.quickTo(previewRef.current, "x", {
            duration: 0.4,
            ease: 'power3.out'
        });

        yTo.current = gsap.quickTo(previewRef.current, "y", {
            duration: 0.4,
            ease: 'power3.out'
        });

        gsap.timeline({
            scrollTrigger: {
                trigger: cardRef.current,
                start: "top 85%",
            },
            defaults: {
                duration: 0.5,
                ease: "power1.inOut",
            }
        })
            .from("h3", {
                yPercent: 100,
                opacity: 0,
            })
            .from("div div span", {
                yPercent: 100,
                opacity: 0,
                stagger: 0.05,
            })
    }, { scope: cardRef })

    return (
        <div className="border-y border-y-white/25 hover:bg-white/5 transition-all relative" ref={cardRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onMouseMove={handleMouseMove}>
            <div className="skillset flex gap-4 py-8 group px-8">
                <span className="skillset-number font-medium text-2xl text-white/25">[{formattedIndex}]</span>
                <div className="flex flex-col gap-2.5 group-hover:translate-x-2 transition ease-in-out flex-1 items-start">
                    <h3 className="font-medium text-7xl">{skillset.name}</h3>
                    <div className="flex gap-2.5">
                        {skillset.skills.map((skill) => (
                            <Badge key={skill}>{skill}</Badge>
                        ))}
                    </div>
                </div>
            </div>
            <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 aspect-video rounded-sm w-md pointer-events-none overflow-hidden z-20 opacity-0" ref={previewRef}>
                <img src={Placeholder} alt="" className="w-full h-full object-cover" />
            </div>
        </div>
    )
}