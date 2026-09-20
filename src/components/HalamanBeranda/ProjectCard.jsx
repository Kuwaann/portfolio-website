import { cn } from '../../lib/utils'
import gsap from 'gsap'
import Placeholder from '../../assets/skillsetplaceholder.jpg'
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { EyeIcon } from 'lucide-react'

export function ProjectCard({ id = "", className = "" }) {
    const cardRef = useRef(null);
    const imgRef = useRef(null);
    const buttonRef = useRef(null);

    const xTo = useRef(null);
    const yTo = useRef(null);

    const handleMouseEnter = (e) => {
        if (cardRef.current) {
            const rect = cardRef.current.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            gsap.set(buttonRef.current, { x, y });
            xTo.current?.(x, x);
            yTo.current?.(y, y);
        }

        gsap.to(imgRef.current, {
            scale: 0.95,
            duration: 0.5,
            ease: 'circ.inOut'
        });

        gsap.to(buttonRef.current, {
            scale: 1,
            opacity: 1,
            duration: 0.3,
            ease: 'back.out(1.7)',
            overwrite: 'auto'
        });
    }

    const handleMouseLeave = () => {
        gsap.to(imgRef.current, {
            scale: 1,
            duration: 0.5,
            ease: 'circ.inOut'
        });

        gsap.to(buttonRef.current, {
            scale: 0,
            opacity: 0,
            duration: 0.2,
            ease: 'power2.in',
            overwrite: 'auto'
        });
    }

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        xTo.current?.(x);
        yTo.current?.(y);
    };

    useGSAP(() => {
        gsap.fromTo(`#${id}`,
            { y: -100 },
            {
                scrollTrigger: {
                    trigger: `#${id}`,
                    scrub: true,
                    start: "top bottom",
                    end: "bottom top"
                },
                y: 100,
                ease: 'none'
            }
        )

        gsap.set(buttonRef.current, { xPercent: -100, yPercent: -100, scale: 0, opacity: 0 });
        xTo.current = gsap.quickTo(buttonRef.current, "x", {
            duration: 0.4,
            ease: 'power3.out'
        })
        yTo.current = gsap.quickTo(buttonRef.current, "y", {
            duration: 0.4,
            ease: 'power3.out'
        })
    }, { scope: cardRef })

    return (
        <div className={cn("rounded-sm flex-1 bg-primary-gradient overflow-hidden flex justify-center items-center relative cursor-pointer", className)} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onMouseMove={handleMouseMove} ref={cardRef} >
            <div className="flex justify-center items-center w-full h-full bg-amber-400 flex-1 overflow-hidden" ref={imgRef}>
                <img id={id} src={Placeholder} alt="Project Number 2" className="object-cover w-full h-full scale-150" />
            </div>
            <div className="absolute top-0 left-0 -translate-x-full -translate-y-full z-20 bg-white px-4 py-2 rounded-sm text-lg flex items-center justify-center whitespace-nowrap pointer-events-none font-semibold text-black shadow-lg gap-2" ref={buttonRef}>
                <EyeIcon />
                Pelajari Karya
            </div>
        </div>
    )
}