import { MenuIcon } from "lucide-react"
import { Button } from "./Button"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router";
import { SplitText } from "gsap/all";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navbarMenuItemRef = useRef([]);
    const navbarMenuItemSplitRef = useRef([]);

    const navigate = useNavigate();

    const { contextSafe } = useGSAP(() => {
        navbarMenuItemSplitRef.current = navbarMenuItemRef.current.map((item) => SplitText.create(item, { type: "chars" }));

        const allChars = navbarMenuItemSplitRef.current.flatMap((split) => split.chars);

        gsap.set('#navbar-menu', {
            clipPath: "inset(0% 0% 100% 0%)",
            pointerEvents: 'none'
        })

        gsap.set('#navbar-background', {
            opacity: 0,
            pointerEvents: 'none'
        })

        gsap.set(allChars, {
            yPercent: 100,
            opacity: 0
        })
    })

    const handleOpenMenu = () => {
        contextSafe(() => {
            setIsOpen(true);

            const allChars = navbarMenuItemSplitRef.current.flatMap((split) => split.chars);

            const timeline = gsap.timeline({
                defaults: { overwrite: 'auto' }
            });

            timeline.to('#navbar-menu', {
                clipPath: "inset(0% 0% 0% 0%)",
                pointerEvents: 'auto',
                ease: 'circ.inOut'
            }, 0)
                .to('#navbar-background', {
                    opacity: 1,
                    pointerEvents: 'auto'
                }, 0)
                .to(allChars, {
                    yPercent: 0,
                    duration: 0.6,
                    opacity: 1,
                    stagger: 0.03,
                    ease: 'power3.out'
                }, 0);
        })();
    }

    const handleCloseMenu = () => {
        contextSafe(() => {
            setIsOpen(false);

            const allChars = navbarMenuItemSplitRef.current.flatMap((split) => split.chars);

            const timeline = gsap.timeline({
                defaults: { overwrite: 'auto' }
            });

            timeline.to('#navbar-menu', {
                clipPath: "inset(0% 0% 100% 0%)",
                pointerEvents: 'none',
                ease: 'circ.inOut'
            }, 0).to(allChars, {
                yPercent: 100,
                opacity: 0,
                duration: 0.3,
                stagger: 0.01,
                ease: 'power2.in'
            }, 0)
                .to('#navbar-background', {
                    opacity: 0,
                    pointerEvents: 'none'
                }, 0);
        })();
    }


    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : ''
    }, [isOpen])

    return (
        <nav className="fixed w-full flex justify-center z-60">
            <div className="absolute top-8 left-1/2 -translate-x-1/2 flex gap-4 rounded-2xl bg-black/75 pl-4 backdrop-blur-md ">
                <button className="flex gap-4 justify-center items-center cursor-pointer" onClick={handleOpenMenu}>
                    <MenuIcon />
                    <span className="font-semibold text-lg">Menu</span>
                </button>
                <Button className="rounded-2xl bg-primary-gradient" onClick={() => navigate('/contact')}>Kontak</Button>
            </div>
            <div id="navbar-menu" className="absolute top-0 bg-primary-gradient py-8 z-60 w-full shadow-2xl">
                <div className="relative border-y border-y-black/25 py-32">
                    <ul className="flex items-center justify-center gap-8 overflow-hidden absolute inset-0">
                        <li className="navbar-menu-item text-black text-7xl font-semibold overflow-hidden cursor-pointer p-1" ref={(el) => navbarMenuItemRef.current[0] = el} onClick={() => navigate("/")}>beranda</li>
                        <li className="navbar-menu-item text-black text-7xl font-semibold overflow-hidden cursor-pointer p-1" ref={(el) => navbarMenuItemRef.current[1] = el} onClick={() => navigate("/about")}>tentang</li>
                        <li className="navbar-menu-item text-black text-7xl font-semibold overflow-hidden cursor-pointer p-1" ref={(el) => navbarMenuItemRef.current[2] = el} onClick={() => navigate("/works")}>karya</li>
                    </ul>
                    <div className="h-full flex items-start absolute top-0 bottom-0 right-0">
                        <button className="h-full text-black font-semibold text-8xl cursor-pointer" onClick={handleCloseMenu}>[X]</button>
                    </div>
                </div>
            </div>
            <div id="navbar-background" className="h-screen w-full bg-black/50 fixed opacity-0 z-40" onClick={handleCloseMenu}>
            </div>
        </nav>
    )
}