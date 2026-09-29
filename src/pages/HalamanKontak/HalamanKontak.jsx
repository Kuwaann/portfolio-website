import { Navbar } from "../../components/Navbar"
import { Footer } from "../../components/Footer"
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { ExternalLinkIcon } from "lucide-react";
import { Button } from "../../components/Button";
import ContactPic from "../../assets/contact-picture.jpeg"

export function HalamanKontak() {
    return (
        <>
            <Navbar />
            <section className="flex flex-col gap-16 px-8 py-32">
                <h1 className="text-9xl font-medium">Kontak Saya</h1>
                <section>
                    <div className="flex rounded-3xl border border-white/15 overflow-hidden">
                        <div className="flex-1 flex flex-col gap-32 p-8 hover:bg-white/5 transition-all">
                            <FaLinkedinIn className="text-lg" />
                            <div className="flex justify-between items-center">
                                <h2 className="text-lg">LinkedIn</h2>
                                <ExternalLinkIcon className="text-lg" />
                            </div>
                        </div>
                        <div className="flex-1 flex flex-col gap-32 p-8 border-x border-x-white/15 hover:bg-white/5 transition-all">
                            <FaGithub className="text-lg" />
                            <div className="flex justify-between items-center">
                                <h2 className="text-lg">GitHub</h2>
                                <ExternalLinkIcon className="text-lg" />
                            </div>
                        </div>
                        <div className="flex-1 flex flex-col gap-32 p-8 hover:bg-white/5 transition-all">
                            <FaInstagram className="text-lg" />
                            <div className="flex justify-between items-center">
                                <h2 className="text-lg">Instagram</h2>
                                <ExternalLinkIcon className="text-lg" />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="flex gap-8">
                    <div className="flex-1 flex gap-8">
                        <div className="w-50 h-50 overflow-hidden">
                            <img src={ContactPic} alt="" className="w-full h-full object-cover" />
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
            </section>
            <Footer />
        </>
    )
}