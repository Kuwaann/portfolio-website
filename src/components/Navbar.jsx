import { MenuIcon } from "lucide-react"
import { Button } from "./Button"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useState } from "react";
import { Link } from "react-router";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenMenu = () => {
        setIsOpen(true);

        gsap.to('#navbar-menu', {
            yPercent: 0,
            ease: 'circ.inOut'
        })

        gsap.to('#navbar-background', {
            opacity: 1,
            pointerEvents: 'auto'
        })
    }

    const handleCloseMenu = () => {
        setIsOpen(false);

        gsap.to('#navbar-menu', {
            yPercent: -100,
            ease: 'circ.inOut'
        })

        gsap.to('#navbar-background', {
            opacity: 0,
            pointerEvents: 'none'
        })
    }

    useGSAP(() => {
        gsap.set('#navbar-menu', {
            yPercent: -100
        })

        gsap.set('#navbar-background', {
            opacity: 0,
            pointerEvents: 'none'
        })
    })

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : ''
    }, [isOpen])

    return (
        <nav className="fixed w-full flex justify-center z-60">
            <div className="absolute top-8 left-1/2 -translate-x-1/2 flex gap-8 rounded-2xl bg-black/75 pl-8 backdrop-blur-md ">
                <button className="flex gap-4 justify-center items-center cursor-pointer" onClick={handleOpenMenu}>
                    <MenuIcon />
                    <span className="font-semibold text-2xl">Menu</span>
                </button>
                <Button className="rounded-2xl">Kontak</Button>
            </div>
            <div id="navbar-menu" className="absolute top-0 bg-primary-gradient py-8 z-60 w-full">
                <div className="relative border-y border-y-black/25 py-32">
                    <ul className="flex items-center justify-center gap-8 absolute inset-0">
                        <li className="text-black text-7xl font-semibold"><Link to="/">beranda</Link></li>
                        <li className="text-black text-7xl font-semibold"><Link to="">tentang</Link></li>
                        <li className="text-black text-7xl font-semibold"><Link to="/works">karya</Link></li>
                    </ul>
                    <div className="h-full flex items-start absolute top-0 bottom-0 right-0">
                        <button className="h-full text-black font-semibold text-8xl cursor-pointer" onClick={handleCloseMenu}>[X]</button>
                    </div>
                </div>
            </div>
            <div id="navbar-background" className="h-screen w-full bg-black/50 absolute opacity-0 z-40" onClick={handleCloseMenu}>
            </div>
        </nav>
    )
}