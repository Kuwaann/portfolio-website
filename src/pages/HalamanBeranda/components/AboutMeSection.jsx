import { Button } from '../../../components/Button'

export function AboutMeSection() {
    return (
        <section className="px-32 flex flex-col">
            <div className="py-32 flex flex-col gap-4">
                <p className="text-5xl font-normal text-justify">Saya adalah seorang <span className="opacity-75">pengembang web</span>, <span className="opacity-75">desainer UI/UX</span>, dan juga <span className="opacity-75">desainer grafis</span> yang berbasis di <span className="opacity-75">Jakarta, Indonesia</span>. Membangun project saya dengan cara yang <span className="opacity-75">terstruktur</span> dan <span className="opacity-75 italic">detailed</span> sehingga menghasilkan produk yang <span className="opacity-75">fantastis</span> dan <span className="opacity-75 italic">polished</span> untuk Anda.</p>
                <Button text={"Pelajari Lebih Lanjut"} />
            </div>
        </section>
    )
}