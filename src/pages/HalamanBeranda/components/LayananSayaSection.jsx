import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all';
import { SkillsetCard } from '../../../components/HalamanBeranda/SkillsetCard';
import { skillsets } from '../../../../constants';
import { useMediaQuery } from 'react-responsive';
import { useRef } from 'react';

export function LayananSayaSection() {
    const sectionRef = useRef();
    const titleRef = useRef();
    const subtitleRef = useRef();

    const isMobile = useMediaQuery({ maxWidth: 767 });

    useGSAP(() => {
        const titleSplit = SplitText.create(titleRef.current, { type: "lines", mask: "lines" });
        const subtitleSplit = SplitText.create(subtitleRef.current, { type: "lines", mask: "lines" });

        gsap.from(titleSplit.lines, {
            scrollTrigger: {
                trigger: titleRef.current,
                start: 'top 65%',
            },
            yPercent: 100,
            stagger: 0.1
        })

        gsap.from(subtitleSplit.lines, {
            scrollTrigger: {
                trigger: subtitleRef.current,
                start: 'top 65%',
            },
            yPercent: 100,
            stagger: 0.1
        })
    }, { scope: sectionRef, dependencies: [isMobile] })

    return (
        <section className="flex flex-col gap-16 overflow-hidden cursor-default" ref={sectionRef}>
            <div className="flex flex-col md:flex-row flex-1 gap-8 px-8 justify-between items-start md:items-center">
                <h2 className="text-[64px] leading-none md:text-8xl font-medium w-auto md:w-xl" ref={titleRef}>Lingkup Keahlian Saya.</h2>
                <p className="text-lg w-full md:w-md text-justify md:text-right" ref={subtitleRef}>Bagi saya, membangun sebuah website bukan hanya tentang membuatnya bekerja, tetapi juga bagaimana desain, interaksi, dan teknologi dapat berpadu menjadi pengalaman yang terasa nyaman dan berkesan.</p>
            </div>
            <div className="pb-32 flex flex-2 flex-col">
                {skillsets.map((skillset, index) => (
                    <SkillsetCard key={skillset.name} index={index} skillset={skillset} />
                ))}
            </div>
        </section>
    )
}