import { Button } from "../../components/Button";
import ContactPic from "../../assets/contact-picture.jpeg"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export function FormSection() {
    const contactPicRef = useRef();

    useGSAP(() => {
        gsap.from(contactPicRef.current, {
            width: 0,
            duration: 1.2,
            ease: 'circ.inOut'
        })
    })

    return (
        <section className="flex gap-8">
            <div className="flex-1 flex gap-8">
                <div className="w-50 overflow-hidden">
                    <img src={ContactPic} alt="" className="w-full object-cover aspect-square" ref={contactPicRef} />
                </div>
                <div className="flex flex-col gap-32">
                    <div className="flex flex-col gap-2.5">
                        <h2 className="font-medium text-4xl">(+62) 815 8616 5053</h2>
                        <h2 className="font-medium text-4xl">emirrivaldy@gmail.com</h2>
                    </div>
                    <div className="flex flex-col gap-2.5">
                        <h2 className="font-medium text-4xl">Berbasis di</h2>
                        <p className="font-medium text-4xl">Jakarta, Indonesia</p>
                    </div>
                </div>
            </div>
            <div className="flex-1 flex flex-col gap-16">
                <h2 className="font-medium text-[64px] leading-[93%]">Atau Anda Bisa Mengirimkan Pesan Lewat Sini!</h2>
                <form className="flex flex-col gap-8">
                    <div className="flex flex-col gap-4">
                        <label htmlFor="nama" className="text-lg">Nama</label>
                        <input id="nama" name="nama" type="text" placeholder="John Doe" className="rounded-sm bg-white/5 p-4" />
                    </div>
                    <div className="flex flex-col gap-4">
                        <label htmlFor="email" className="text-lg">Alamat Email</label>
                        <input id="email" name="email" type="text" placeholder="emailanda@email.com" className="rounded-sm bg-white/5 p-4" />
                    </div>
                    <div className="flex flex-col gap-4">
                        <label htmlFor="pesan" className="text-lg">Pesan</label>
                        <textarea name="pesan" id="pesan" className="rounded-sm bg-white/5 p-4"></textarea>
                    </div>
                    <Button>Kirim Pesan</Button>
                </form>
            </div>
        </section>
    )
}