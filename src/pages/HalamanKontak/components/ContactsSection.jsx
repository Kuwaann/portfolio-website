import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { ExternalLinkIcon } from "lucide-react";

export function ContactsSection() {
    return (
        <section>
            <div className="flex rounded-3xl border border-white/15 overflow-hidden">
                <a href="https://www.linkedin.com/in/emirrivaldy/" target="_blank" className="flex-1 flex flex-col gap-32 p-8 hover:bg-white/5 transition-all cursor-pointer">
                    <FaLinkedinIn className="text-lg" />
                    <div className="flex justify-between items-center">
                        <h2 className="text-lg">LinkedIn (<span className="text-white/75">@emirrivaldy</span>)</h2>
                        <ExternalLinkIcon className="text-lg" />
                    </div>
                </a>
                <a href="https://github.com/Kuwaann" target="_blank" className="flex-1 flex flex-col gap-32 p-8 border-x border-x-white/15 hover:bg-white/5 transition-all cursor-pointer">
                    <FaGithub className="text-lg" />
                    <div className="flex justify-between items-center">
                        <h2 className="text-lg">GitHub (<span className="text-white/75">@kuwaann</span>)</h2>
                        <ExternalLinkIcon className="text-lg" />
                    </div>
                </a>
                <a href="https://www.instagram.com/emirrivaldy/" target="_blank" className="flex-1 flex flex-col gap-32 p-8 hover:bg-white/5 transition-all cursor-pointer">
                    <FaInstagram className="text-lg" />
                    <div className="flex justify-between items-center">
                        <h2 className="text-lg">Instagram (<span className="text-white/75">@emirrivaldy</span>)</h2>
                        <ExternalLinkIcon className="text-lg" />
                    </div>
                </a>
            </div>
        </section>
    )
}