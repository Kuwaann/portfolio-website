import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { ExternalLinkIcon } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export function ContactsSection() {
    const sectionRef = useRef();

    useGSAP(() => {
        const mm = gsap.matchMedia();

        mm.add({
            isDesktop: "(min-width: 768px)",
            isMobile: "(max-width: 767px)"
        }, (context) => {
            const { isMobile } = context.conditions;

            gsap.from(".contact-card", {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 85%"
                },
                y: isMobile ? 20 : 40,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: "power2.out"
            });
        });
    }, { scope: sectionRef });

    return (
        <section ref={sectionRef}>
            <div className="flex flex-col md:flex-row rounded-3xl border border-white/15 overflow-hidden">
                <a href="https://www.linkedin.com/in/emirrivaldy/" target="_blank" rel="noreferrer" className="contact-card flex-1 flex flex-col gap-32 p-8 hover:bg-white/5 transition-all cursor-pointer">
                    <FaLinkedinIn className="text-lg" />
                    <div className="flex justify-between items-center">
                        <h2 className="text-lg">LinkedIn (<span className="text-white/75">@emirrivaldy</span>)</h2>
                        <ExternalLinkIcon className="text-lg" />
                    </div>
                </a>
                <a href="https://github.com/Kuwaann" target="_blank" rel="noreferrer" className="contact-card flex-1 flex flex-col gap-32 p-8 border-y border-y-white/15 md:border-y-0 md:border-x md:border-x-white/15 hover:bg-white/5 transition-all cursor-pointer">
                    <FaGithub className="text-lg" />
                    <div className="flex justify-between items-center">
                        <h2 className="text-lg">GitHub (<span className="text-white/75">@kuwaann</span>)</h2>
                        <ExternalLinkIcon className="text-lg" />
                    </div>
                </a>
                <a href="https://www.instagram.com/emirrivaldy/" target="_blank" rel="noreferrer" className="contact-card flex-1 flex flex-col gap-32 p-8 hover:bg-white/5 transition-all cursor-pointer">
                    <FaInstagram className="text-lg" />
                    <div className="flex justify-between items-center">
                        <h2 className="text-lg">Instagram (<span className="text-white/75">@emirrivaldy</span>)</h2>
                        <ExternalLinkIcon className="text-lg" />
                    </div>
                </a>
            </div>
        </section>
    );
}
