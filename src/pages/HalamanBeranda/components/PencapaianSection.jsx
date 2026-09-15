import Emir from '../../../assets/hero.png'
import Emir2 from '../../../assets/emir2.png'
import Emir3 from '../../../assets/emir3.png'

export function PencapaianSection() {
    return (
        <section className="px-32 flex flex-col h-fit">
            <div className="py-32 flex flex-col gap-16 items-center">
                <div className="relative flex justify-center items-center h-150 w-full">
                    <img src={Emir3} alt="" className="w-80 absolute object-cover z-0 -translate-x-72 -rotate-6" />
                    <img src={Emir} alt="" className="w-96 absolute object-cover z-10" />
                    <img src={Emir2} alt="" className="w-80 absolute object-cover z-0  translate-x-72 rotate-6" />
                </div>
                <figure className="text-center flex flex-col gap-16">
                    <blockquote className="text-5xl max-w-lg font-medium">“Tidak hanya bekerja, tetapi memberikan hasil dan kepuasan nyata”</blockquote>
                    <figcaption className="text-2xl font-medium">Muhammad Emir Rivaldy, 2026</figcaption>
                </figure>
                <div className="flex item-center justify-between w-full">
                    <div className="flex flex-col gap-2.5 py-16 justify-center">
                        <h3 className="font-light">Klien</h3>
                        <span className="font-semibold text-7xl">500+</span>
                    </div>
                    <div className="flex flex-col gap-2.5 py-16 justify-center">
                        <h3 className="font-light">Proyek</h3>
                        <span className="font-semibold text-7xl">15+</span>
                    </div>
                    <div className="flex flex-col gap-2.5 py-16 justify-center">
                        <h3 className="font-light">Pengalaman Kerja</h3>
                        <span className="font-semibold text-7xl">3 th</span>
                    </div>
                    <div className="flex flex-col gap-2.5 py-16 justify-center">
                        <h3 className="font-light">Sertifikat</h3>
                        <span className="font-semibold text-7xl">0</span>
                    </div>
                </div>
            </div>
        </section>
    )
}