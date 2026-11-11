import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/all';
// import { useMediaQuery } from 'react-responsive';

export function ProcessCard({ process, index }) {
    const cardRef = useRef(null);
    const imgRef = useRef(null);
    const titleRef = useRef();
    const descriptionRef = useRef();

    index++;
    const formattedIndex = index.toString().padStart(2, "0");

    useGSAP(() => {
        const mm = gsap.matchMedia();

        mm.add({
            isDesktop: "(min-width: 768px)",
            isMobile: "(max-width: 767px)"
        }, () => {
            const titleSplit = SplitText.create(titleRef.current, { type: "chars", mask: "chars" });
            const descriptionSplit = SplitText.create(descriptionRef.current, { type: "lines", mask: "lines" });

            gsap.set(cardRef.current, { paddingBottom: 32 });

            gsap.from(titleSplit.chars, {
                yPercent: 100,
                duration: 0.8,
                stagger: 0.1,
                ease: 'circ.inOut',
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: 'top 95%'
                }
            });

            gsap.from(descriptionSplit.lines, {
                yPercent: 100,
                duration: 0.8,
                stagger: 0.1,
                ease: 'circ.inOut',
                scrollTrigger: {
                    trigger: descriptionRef.current,
                    start: 'top 95%'
                }
            });

            gsap.to(cardRef.current, {
                scrollTrigger: {
                    trigger: cardRef.current,
                    scrub: true,
                    start: 'top 20%',
                    end: 'bottom top'
                },
                paddingBottom: 0,
                opacity: 0.2
            });

            gsap.to(imgRef.current, {
                scrollTrigger: {
                    trigger: cardRef.current,
                    scrub: true,
                    start: 'top bottom',
                    end: 'bottom top'
                },
                yPercent: 15,
                ease: 'none'
            });

            return () => {
                titleSplit.revert();
                descriptionSplit.revert();
            }
        })

    }, { scope: cardRef })

    return (
        <div className="p-8 flex flex-col md:flex-row border-y border-y-white/15 " ref={cardRef}>
            <div className="flex flex-row-reverse md:flex-col items-center md:items-start justify-between flex-1">
                <h3 className="text-[48px] md:text-7xl" ref={titleRef}>{process.name}</h3>
                <span className="text-white/15 text-[32px] md:text-[64px] md:text-9xl">{formattedIndex}</span>
            </div>
            <div className="flex flex-col justify-between flex-1 gap-24 md:gap-32">
                <p className="text-lg text-justify opacity-50 md:opacity-100 hyphens-auto" ref={descriptionRef}>{process.description}</p>
                <div className="w-full md:w-md overflow-hidden aspect-video">
                    <div className="w-full h-full rounded-sm grayscale">
                        <img src={process.img} alt="" className="w-full h-full object-cover scale-125" ref={imgRef} />
                    </div>
                </div>

            </div>
        </div>
    )
}