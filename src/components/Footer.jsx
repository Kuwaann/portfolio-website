import { Link } from "react-router"

export function Footer() {

    return (
        <footer className="bg-black p-8 relative z-20">
            <div className="bg-primary-gradient rounded-3xl flex flex-col overflow-hidden">
                <div className="flex border-b border-b-black/25">
                    <span className="font-extrabold text-black text-[256px] leading-48 overflow-hidden">EMIR<br />RIVA<br />LDY.</span>
                    <div className="flex-1 flex flex-col border-x border-x-black/25">
                        <div className="flex flex-1">
                            <span className="font-semibold text-8xl text-black">Ayo Kolaborasi!</span>
                        </div>
                        <div className="flex-1 flex flex-col px-16">
                            <span className="text-black text-2xl">emirrivaldy@gmail.com</span>
                            <div className="flex gap-8">
                                <a href="https://www.linkedin.com/in/emirrivaldy/" target="_blank" className="text-black text-2xl">LinkedIn</a>
                                <a href="https://www.instagram.com/emirrivaldy/" target="_blank" className="text-black text-2xl">Instagram</a>
                                <a href="https://github.com/Kuwaann" target="_blank" className="text-black text-2xl">GitHub</a>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 flex flex-col">
                        <div className="flex flex-1">
                            <span className="font-semibold text-8xl text-black">Navigasi Cepat</span>
                        </div>
                        <div className="flex-1 flex flex-col gap-2 px-16 items-start">
                            <Link to="/" className="text-black text-2xl">Beranda</Link>
                            <Link to="/about" className="text-black text-2xl">Tentang</Link>
                            <Link to="/works" className="text-black text-2xl">Karya</Link>
                            <Link to="/contact" className="text-black text-2xl">Kontak</Link>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end">
                    <span className="font-extrabold text-black text-9xl">© 2026 Emir Rivaldy</span>
                </div>
            </div>
        </footer>
    )
}