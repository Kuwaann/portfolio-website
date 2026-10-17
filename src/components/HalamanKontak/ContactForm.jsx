import { Button } from "../../components/Button";

export function ContactForm() {
    return (
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
    )
}