import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { ContactForm } from "../../../components/HalamanKontak/ContactForm";
import ContactPic from "../../../assets/HalamanKontak/contact-picture.jpeg";
import { ChevronDownCircleIcon } from "lucide-react";

export function FormSection() {
    const sectionRef = useRef();
    const contactPicRef = useRef();

    useGSAP(() => {
        const mm = gsap.matchMedia();

        mm.add({
            isDesktop: "(min-width: 768px)",
            isMobile: "(max-width: 767px)"
        }, (context) => {
            const { isMobile } = context.conditions;

            gsap.from(contactPicRef.current, {
                scrollTrigger: {
                    trigger: contactPicRef.current,
                    start: isMobile ? '50% bottom' : 'top bottom'
                },
                width: 0,
                duration: 1.2,
                ease: 'circ.inOut'
            });
        });
    }, { scope: sectionRef });

    return (
        <section className="flex flex-col md:flex-row gap-16 md:gap-8" ref={sectionRef}>
            <div className="flex-1 flex flex-col md:flex-row gap-8">
                <div className="w-50 h-50 overflow-hidden">
                    <img src={ContactPic} alt="" className="w-full object-cover aspect-square" ref={contactPicRef} />
                </div>
                <div className="flex flex-col gap-16 md:gap-32">
                    <div className="flex flex-col gap-2.5">
                        <h2 className="font-medium text-[18px] md:text-4xl">(+62) 815 8616 5053</h2>
                        <h2 className="font-medium text-[18px] md:text-4xl">emirrivaldy@gmail.com</h2>
                    </div>
                    <div className="flex flex-col gap-2.5">
                        <h2 className="font-medium text-[18px] md:text-4xl">Berbasis di</h2>
                        <p className="font-medium text-[18px] md:text-4xl">Jakarta, Indonesia</p>
                    </div>
                </div>
            </div>
            <div className="flex-1 flex flex-col gap-16">
                <div className="flex items-start gap-4">
                    <ChevronDownCircleIcon className="block md:hidden opacity-25" size={32} />
                    <h2 className="font-medium w-2/3 md:w-auto text-[32px] leading-[93%]">Atau Anda Bisa Mengirimkan Pesan Lewat Sini!</h2>
                </div>
                <ContactForm />
            </div>
        </section>
    );
}
