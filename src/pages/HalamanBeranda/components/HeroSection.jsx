import Hero from '../../../assets/hero.png'
import { ChevronDownIcon } from 'lucide-react'

export function HeroSection() {
    return (
        <section className="flex flex-col items-center justify-between h-screen py-16 cursor-default">
            <span></span>
            <div className="flex flex-col max-w-full">
                <div className="flex justify-between px-32">
                    <div className="flex justify-center gap-16">
                        <span className="font-semibold text-2xl">PENGEMBANG WEB</span>
                        <span className="font-semibold text-2xl">DESAINER UI/UX</span>
                    </div>
                    <div className="flex justify-center gap-16">
                        <span className="font-semibold text-2xl">DESAINER GRAFIS</span>
                        <span className="font-semibold text-2xl">VIDEO EDITOR</span>
                    </div>
                </div>
                <div className="w-full overflow-hidden">
                    <div className="flex marquee mix-blend-difference">
                        <h1 className="text-[256px] whitespace-nowrap pr-16">Muhammad Emir Rivaldy •</h1>
                        <h1 aria-hidden className="text-[256px] whitespace-nowrap pr-16">Muhammad Emir Rivaldy •</h1>
                    </div>
                </div>


            </div>
            <div className="flex justify-between items-center w-full px-32">
                <ChevronDownIcon />
                <span className="font-medium text-2xl">BASED IN INDONESIA</span>
                <ChevronDownIcon />
            </div>
            <img src={Hero} alt="Hero Section Profile" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[-9999] " />
        </section>
    )
}