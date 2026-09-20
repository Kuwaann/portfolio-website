import { ProcessCard } from "../../../components/HalamanBeranda/ProcessCard"
import { processes } from "../../../../constants"

export function ProsesSection() {
    return (
        <section className="cursor-default">
            <div className="flex items-center pb-64 border-b border-b-white/15 px-8">
                <h2 className="text-9xl font-semibold w-full">Dari <span className="font-crimson-text italic">Ide</span> ke <span className="font-crimson-text italic">Hasil</span></h2>
                <p className="text-2xl">Di balik setiap karya, ada proses panjang untuk mencoba, mengeksplorasi, dan mencari cara terbaik untuk mewujudkannya.</p>
            </div>
            <div className="flex flex-col">
                {processes.map((process, index) => <ProcessCard key={process.name} process={process} index={index} />)}
            </div>
        </section>

    )
}