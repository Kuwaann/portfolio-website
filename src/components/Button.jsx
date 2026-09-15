export function Button({ text, href }) {
    return (
        <a href={href} className="bg-white text-black font-semibold text-2xl px-8 py-4 rounded-full w-fit hover:bg-[#C9C9C9] transition-all">{text}</a>
    )
}