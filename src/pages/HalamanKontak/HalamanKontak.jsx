import { Navbar } from "../../components/Navbar"
import { Footer } from "../../components/Footer"
import { ContactsSection } from "./components/ContactsSection";
import { FormSection } from "./components/FormSection";

export function HalamanKontak() {
    return (
        <>
            <Navbar />
            <main className="flex flex-col gap-16 px-8 py-32">
                <h1 className="text-9xl font-medium">Kontak Saya</h1>
                <ContactsSection />
                <FormSection />
            </main>
            <Footer />
        </>
    )
}