import Placeholder from '../../assets/skillsetplaceholder.jpg'
import { Navbar } from '../../components/Navbar'
import { Badge } from '../../components/Badge'
import { Button } from '../../components/Button'
import { PlayIcon } from 'lucide-react'

export function HalamanKarya() {
    return (
        <>
            <Navbar />
            <section className="w-full h-screen flex items-center justify-center relative">
                <div className="flex-1 h-full flex items-center z-20">
                    <div className="w-full aspect-video">
                        <img src={Placeholder} alt="" className="w-full h-full object-cover" />
                    </div>
                </div>
                <div className="flex flex-col flex-1 justify-center items-center gap-16 z-20">
                    <div className="flex gap-4 items-center justify-center relative w-full">
                        <PlayIcon className="absolute left-0 translate-x-full text-[#95FF00] fill-[#95FF00]" />
                        <span className="text-lg font-semibold">[01]</span>
                        <div className="flex flex-col gap-0">
                            <h2 className="text-lg font-semibold tracking-wide">PROJECT 1</h2>
                            <p className="text-lg text-white/50 font-semibold tracking-wide">Client's Name</p>
                        </div>
                    </div>
                    <div className="flex gap-2.5">
                        <Badge>Tag 1</Badge>
                        <Badge>Tag 2</Badge>
                        <Badge>Tag 3</Badge>
                    </div>
                    <Button size='small'>Pelajari Lebih Lanjut</Button>
                </div>
                <div className="flex-1 h-full flex items-center z-20">
                    <div className="w-full aspect-video">
                        <img src={Placeholder} alt="" className="w-full h-full object-cover" />
                    </div>
                </div>
                <div className="absolute inset-0 z-10 opacity-15">
                    <div className="w-full h-full">
                        <img src={Placeholder} alt="" className="w-full h-full object-cover" />
                    </div>
                </div>
            </section>
        </>

    )
}