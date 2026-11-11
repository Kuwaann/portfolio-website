import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { ContactsSection } from "./components/ContactsSection";
import { FormSection } from "./components/FormSection";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useRef } from "react";

export function HalamanKontak() {
    const pageRef = useRef();
    const headingRef = useRef();

    useGSAP(() => {
        const mm = gsap.matchMedia();

        mm.add({
            isDesktop: "(min-width: 768px)",
            isMobile: "(max-width: 767px)"
        }, (context) => {
            const { isMobile } = context.conditions;

            const headingSplit = SplitText.create(headingRef.current, { type: "chars", mask: "chars" });

            gsap.from(headingSplit.chars, {
                yPercent: 100,
                stagger: isMobile ? 0.02 : 0.04,
                duration: 0.8,
                ease: "circ.inOut"
            });

            return () => headingSplit.revert();
        });
    }, { scope: pageRef });

    return (
        <div ref={pageRef}>
            <Navbar />
            <main className="flex flex-col gap-16 px-8 py-32">
                <h1 className="text-[64px] md:text-9xl font-medium" ref={headingRef}>Kontak Saya</h1>
                <ContactsSection />
                <FormSection />
            </main>
            <Footer />
        </div>
    );
}
