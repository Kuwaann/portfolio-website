import SkillsetPlaceholderImage from '../../../assets/skillsetplaceholder.jpg'

export function LayananSayaSection() {
    return (
        <section className="px-8 pb-32 flex gap-16">
            <div className="pb-32 flex flex-2 flex-col">
                <div className="py-8 border-b border-b-white/25 flex gap-4 bg-white/0 hover:bg-white/5 hover:pl-8 transition ease-in">
                    <span className="font-medium text-2xl text-white/25">[01]</span>
                    <div className="flex flex-col gap-2.5">
                        <h3 className="font-medium text-7xl">Pengembangan Web</h3>
                        <div className="flex gap-2.5">
                            <span className="text-[18px] bg-white/5 px-3 py-1.5">HTML</span>
                            <span className="text-[18px] bg-white/5 px-3 py-1.5">CSS</span>
                            <span className="text-[18px] bg-white/5 px-3 py-1.5">JavaScript</span>
                            <span className="text-[18px] bg-white/5 px-3 py-1.5">PHP</span>
                            <span className="text-[18px] bg-white/5 px-3 py-1.5">Laravel</span>
                            <span className="text-[18px] bg-white/5 px-3 py-1.5">Tailwind CSS</span>
                            <span className="text-[18px] bg-white/5 px-3 py-1.5">React.js</span>
                        </div>
                    </div>
                </div>
                <div className="py-8 border-b border-b-white/25 flex gap-4">
                    <span className="font-medium text-2xl text-white/25">[02]</span>
                    <div className="flex flex-col gap-2.5">
                        <h3 className="font-medium text-7xl">Desain UI/UX</h3>
                        <div className="flex gap-2.5">
                            <span className="text-[18px] bg-white/5 px-3 py-1.5">Figma</span>
                            <span className="text-[18px] bg-white/5 px-3 py-1.5">UX Research</span>
                            <span className="text-[18px] bg-white/5 px-3 py-1.5">UI Design</span>
                            <span className="text-[18px] bg-white/5 px-3 py-1.5">Design Systems</span>
                            <span className="text-[18px] bg-white/5 px-3 py-1.5">Wireframing & Prototyping</span>
                        </div>
                    </div>
                </div>
                <div className="py-8 border-b border-b-white/25 flex gap-4">
                    <span className="font-medium text-2xl text-white/25">[03]</span>
                    <div className="flex flex-col gap-2.5">
                        <h3 className="font-medium text-7xl">Desain Grafis</h3>
                        <div className="flex gap-2.5">
                            <span className="text-[18px] bg-white/5 px-3 py-1.5">Adobe Photoshop</span>
                            <span className="text-[18px] bg-white/5 px-3 py-1.5">Adobe Illustrator</span>
                            <span className="text-[18px] bg-white/5 px-3 py-1.5">Canva</span>
                            <span className="text-[18px] bg-white/5 px-3 py-1.5">Figma</span>
                        </div>
                    </div>
                </div>
                <div className="py-8 border-b border-b-white/25 flex gap-4">
                    <span className="font-medium text-2xl text-white/25">[04]</span>
                    <div className="flex flex-col gap-2.5">
                        <h3 className="font-medium text-7xl">Video Editing</h3>
                        <div className="flex gap-2.5">
                            <span className="text-[18px] bg-white/5 px-3 py-1.5">Adobe Premiere Pro</span>
                            <span className="text-[18px] bg-white/5 px-3 py-1.5">Capcut</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center flex-col flex-1 gap-44">
                <h2 className="text-8xl font-semibold w-full">Skill set Saya</h2>
                <div className="w-full border-white/15 border-8"></div>
                <div className="aspect-video w-full bg-white">
                    <img src={SkillsetPlaceholderImage} alt="" className="object-fit w-full" />
                </div>
            </div>
        </section>
    )
}