import { useRef } from 'react';
import Placeholder from '../../assets/skillsetplaceholder.jpg'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export function ProcessCard({ process, index }) {
    const cardRef = useRef(null);
    const imgRef = useRef(null);

    index++;
    const formattedIndex = index.toString().padStart(2, "0");

    useGSAP(() => {
        gsap.to(cardRef.current, {
            scrollTrigger: {
                trigger: cardRef.current,
                scrub: true,
                start: 'top top',
                end: 'bottom top'
            },
            paddingBottom: '1rem',
            opacity: 0.2
        })

        gsap.to(imgRef.current, {
            scrollTrigger: {
                trigger: cardRef.current,
                scrub: true,
                start: 'top bottom',
                end: 'bottom top'
            },
            y: 150,
            ease: 'none'
        })
    })

    return (
        <div className="p-8 flex border-y border-y-white/15 " ref={cardRef}>
            <div className="flex flex-col justify-between flex-1">
                <h3 className="text-7xl">{process.name}</h3>
                <span className="text-white/15 text-9xl">{formattedIndex}</span>
            </div>
            <div className="flex flex-col justify-between flex-1 gap-32">
                <p className="text-2xl">{process.description}</p>
                <div className="w-md overflow-hidden aspect-video">
                    <div className="w-full h-full scale-125">
                        <img src={Placeholder} alt="" className="w-full h-full object-cover scale-200" ref={imgRef} />
                    </div>
                </div>

            </div>
        </div>
    )
}