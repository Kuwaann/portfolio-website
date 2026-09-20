import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all';
import { SkillsetCard } from '../../../components/HalamanBeranda/SkillsetCard';
import { skillsets } from '../../../../constants';

export function LayananSayaSection() {
    useGSAP(() => {
        const subtitleSplit = SplitText.create('.subtitle', { type: "lines" });
        gsap.from(subtitleSplit.lines, {
            scrollTrigger: {
                trigger: '.subtitle',
                start: 'top bottom',
            },
            yPercent: 100,
            opacity: 0,
            stagger: 0.05
        })
    })

    return (
        <section className="flex flex-col gap-16 overflow-hidden cursor-default">
            <div className="flex flex-1 gap-44 px-8 justify-between">
                <h2 className="text-8xl font-semibold w-xl">Lingkup Keahlian Saya.</h2>
                <p className="subtitle text-2xl w-md">Bagi saya, membangun sebuah website bukan hanya tentang membuatnya bekerja, tetapi juga bagaimana desain, interaksi, dan teknologi dapat berpadu menjadi pengalaman yang terasa nyaman dan berkesan.</p>
            </div>
            <div className="pb-32 flex flex-2 flex-col">
                {skillsets.map((skillset, index) => (
                    <SkillsetCard key={skillset.name} index={index} skillset={skillset} />
                ))}
            </div>
        </section>
    )
}