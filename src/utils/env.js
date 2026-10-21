import z from "zod";

const envSchema = z.object({
    VITE_EMAILJS_SERVICE_ID: z.string(),
    VITE_EMAILJS_TEMPLATE_ID: z.string(),
    VITE_EMAILJS_PUBLIC_KEY: z.string()
})

export const env = envSchema.parse(import.meta.env);