import { GsapText } from "../../../components/BelajarGsap/BelajarGsap"

export function KaryaSection() {
    //Buat belajar GSAP animation dulu (catatan untuk gw sendiri)
    return (
        <section className="h-screen flex flex-col justify-center items-center gap-16">
            <GsapText />
        </section>
    )
}