import { Button } from "../../../components/Button"

export function CTASection() {
    return (
        <section className="px-64 py-32 flex flex-col items-center justify-center gap-8 cursor-default">
            <div className="flex items-center justify-center gap-8">
                <span className="font-semibold text-9xl">(</span>
                <div className="flex flex-col items-center justify-center gap-4">
                    <h2 className="text-center text-9xl">Gimana?</h2>
                    <p className="text-center text-7xl">Punya ide gila di pikiranmu? Langsung gas aja kita <span className="text-white/75">wujudkan</span> bersama!</p>
                </div>
                <span className="font-semibold text-9xl">)</span>
            </div>
            <Button className="bg-primary-gradient">Wujudkan Ide Anda!</Button>
        </section>
    )
}