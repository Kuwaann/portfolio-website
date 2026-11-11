import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";

export function ProjectStorySection({ project }) {
    const sectionRef = useRef();
    const titleRef = useRef();
    const descRef = useRef();

    useGSAP(() => {
        const mm = gsap.matchMedia();

        mm.add({
            isDesktop: "(min-width: 768px)",
            isMobile: "(max-width: 767px)"
        }, () => {
            const titleSplit = SplitText.create(titleRef.current, { type: "lines", mask: "lines" });
            const descSplit = SplitText.create(descRef.current, { type: "lines", mask: "lines" });

            gsap.from(titleSplit.lines, {
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: "top 85%"
                },
                yPercent: 100,
                duration: 0.8,
                stagger: 0.1,
                ease: "circ.inOut"
            });

            gsap.from(descSplit.lines, {
                scrollTrigger: {
                    trigger: descRef.current,
                    start: "top 85%"
                },
                yPercent: 100,
                duration: 0.8,
                stagger: 0.05,
                ease: "circ.inOut"
            });

            return () => {
                titleSplit.revert();
                descSplit.revert();
            };
        });
    }, { scope: sectionRef });

    return (
        <section className="px-8 md:px-32 border-y border-y-white/15 border-dashed mb-4 flex flex-col gap-2" ref={sectionRef}>
            <div className="flex flex-col md:flex-row border-x border-x-white/15 border-dashed px-8 py-8 md:px-32 md:py-32 gap-8 md:gap-16">
                <h3 className="text-[32px] md:text-[64px] leading-none text-white" ref={titleRef}>Cerita di Balik Karya</h3>
                <p className="text-lg text-white/50 text-justify hyphens-auto" ref={descRef}>{project?.description}</p>
            </div>
        </section>
    );
}
