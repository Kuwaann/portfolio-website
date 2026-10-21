import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../../components/Button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import { env } from "../../utils/env";

const schema = z.object({
    nama: z.string().min(1, "Nama minimal memiliki satu huruf"),
    email: z.string().email("Alamat email tidak valid").min(1),
    pesan: z.string().min(1, "Pesan minimal memiliki satu huruf")
})

export function ContactForm() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
        setError,
        clearErrors
    } = useForm({
        defaultValues: {
            pesan: "Halo Emir, saya tertarik untuk bekerja sama dengan Anda!"
        },
        resolver: zodResolver(schema)
    });

    const onSubmit = async (data) => {
        try {
            clearErrors("root.serverError");

            await emailjs.send(env.VITE_EMAILJS_SERVICE_ID, env.VITE_EMAILJS_TEMPLATE_ID, {
                nama: data.nama,
                email: data.email,
                pesan: data.pesan
            }, env.VITE_EMAILJS_PUBLIC_KEY);
            reset();
        }
        catch {
            setError("root.server", {
                type: "server",
                message: "Pesan gagal dikirim. Silahkan coba lagi."
            })
        }
    };

    return (
        <form className="flex flex-col gap-8" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-4">
                <label htmlFor="nama" className="text-lg">Nama *</label>
                <input {...register("nama")} id="nama" name="nama" type="text" placeholder="John Doe" className={`rounded-sm bg-white/5 p-4 outline-[#95FF00/0] focus:outline-[#95FF00] focus:outline transition-all ${errors.nama && 'outline-red-400 outline'}`} />
                {errors.nama && <span className="text-red-400">{errors.nama.message}</span>}

            </div>
            <div className="flex flex-col gap-4">
                <label htmlFor="email" className="text-lg">Alamat Email *</label>
                <input {...register("email")} id="email" name="email" type="text" placeholder="emailanda@email.com" className={`rounded-sm bg-white/5 p-4 outline-[#95FF00/0] focus:outline-[#95FF00] focus:outline transition-all ${errors.email && 'outline-red-400 outline'}`} />
                {errors.email && <span className="text-red-400">{errors.email.message}</span>}
            </div>
            <div className="flex flex-col gap-4">
                <label htmlFor="pesan" className="text-lg">Pesan *</label>
                <textarea {...register("pesan")} name="pesan" id="pesan" className={`rounded-sm bg-white/5 p-4 outline-[#95FF00/0] focus:outline-[#95FF00] focus:outline transition-all ${errors.pesan && 'outline-red-400 outline'}`}></textarea>
                {errors.pesan && <span className="text-red-400">{errors.pesan.message}</span>}
            </div>
            <Button type={"submit"} disabled={isSubmitting}>{isSubmitting ? "Mengirim Pesan..." : "Kirim Pesan"}</Button>
            {errors.root && <span className="text-red-400">{errors.root.server?.message}</span>}
        </form>
    )
}