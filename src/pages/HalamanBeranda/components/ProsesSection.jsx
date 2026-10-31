import { ProcessCard } from "../../../components/HalamanBeranda/ProcessCard"
import { processes } from "../../../../constants"
import { useGSAP } from "@gsap/react"
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useRef } from "react";

export function ProsesSection() {
    const titleRef = useRef();
    const subtitleRef = useRef();

    useGSAP(() => {
        const titleSplit = SplitText.create(titleRef.current, { type: "lines", mask: "lines" });
        const subtitleSplit = SplitText.create(subtitleRef.current, { type: "lines", mask: "lines" });


        gsap.from(titleSplit.lines, {
            yPercent: 100,
            ease: 'circle.inOut',
            stagger: 0.1,
            scrollTrigger: {
                trigger: titleRef.current,
                start: 'top 65%'
            }
        });

        gsap.from(subtitleSplit.lines, {
            yPercent: 100,
            ease: 'circle.inOut',
            stagger: 0.1,
            scrollTrigger: {
                trigger: titleRef.current,
                start: 'top 65%'
            }
        });
    })

    return (
        <section className="cursor-default">
            <div className="flex items-center pb-32 md:pb-64 border-b border-b-white/15 px-8">
                <h2 className="text-9xl font-medium leading-none w-full" ref={titleRef}>Dari <span className="font-crimson-text italic">Ide</span> ke <span className="font-crimson-text italic">Hasil</span></h2>
                <p className="text-lg text-right" ref={subtitleRef}>Di balik setiap karya, ada proses panjang untuk mencoba, mengeksplorasi, dan mencari cara terbaik untuk mewujudkannya.</p>
            </div>
            <div className="flex flex-col">
                {processes.map((process, index) => <ProcessCard key={process.name} process={process} index={index} />)}
            </div>
        </section>

    )
}