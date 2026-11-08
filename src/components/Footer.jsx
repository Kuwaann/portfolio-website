import { Link } from "react-router"
import { ExternalLinkIcon, MailIcon } from "lucide-react"

export function Footer() {

    return (
        <footer className="bg-black p-4 md:p-8 relative z-20">
            <div className="bg-primary-gradient rounded-3xl flex flex-col overflow-hidden">
                <div className="flex flex-col md:flex-row border-b border-b-black/25 p-4 md:p-0 gap-8 md:gap-0">
                    <span className="font-extrabold text-black text-[64px] md:text-[256px] leading-48 overflow-hidden hidden md:block">EMIR<br />RIVA<br />LDY.</span>
                    <div className="flex-1 flex flex-col md:border-x border-x-black/25 gap-16 md:gap-0">
                        <div className="flex flex-1">
                            <span className="flex items-start gap-4 font-semibold text-[48px] md:text-8xl text-black leading-none"><MailIcon size={32} className="md:hidden" /> Ayo Kolaborasi!</span>
                        </div>
                        <div className="flex-1 flex flex-col px-0 md:px-16">
                            <span className="text-black text-lg">emirrivaldy@gmail.com</span>
                            <div className="flex gap-8">
                                <a href="https://www.linkedin.com/in/emirrivaldy/" target="_blank" className="text-black text-lg font-semibold">LinkedIn</a>
                                <a href="https://www.instagram.com/emirrivaldy/" target="_blank" className="text-black text-lg font-semibold">Instagram</a>
                                <a href="https://github.com/Kuwaann" target="_blank" className="text-black text-lg font-semibold">GitHub</a>
                            </div>
                        </div>
                    </div>
                    <hr className="md:hidden border border-black/25 rounded-full" />
                    <div className="flex-1 flex flex-col gap-16 md:gap-0 mb-16 md:mb-0">
                        <div className="flex flex-1">
                            <span className="flex items-start gap-4 font-semibold text-[48px] md:text-8xl text-black leading-none"><ExternalLinkIcon size={32} className="md:hidden" /> Navigasi Cepat</span>
                        </div>
                        <div className="flex-1 grid grid-cols-2 md:flex md:flex-col gap-2 px-0 md:px-16 items-start">
                            <Link to="/" className="text-black text-lg font-semibold">Beranda</Link>
                            <Link to="/about" className="text-black text-lg font-semibold">Tentang</Link>
                            <Link to="/works" className="text-black text-lg font-semibold">Karya</Link>
                            <Link to="/contact" className="text-black text-lg font-semibold">Kontak</Link>
                        </div>
                    </div>
                </div>
                <div className="flex justify-start md:justify-end">
                    <span className="font-extrabold text-black text-[32px] md:text-9xl leading-none">© 2026 Emir Rivaldy</span>
                </div>
            </div>
        </footer>
    )
}