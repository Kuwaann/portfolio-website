export function Button({ id = "", href, children }) {
    return (
        <a id={id} href={href} className="bg-white text-black font-semibold text-2xl px-8 py-4 rounded-sm w-fit hover:bg-[#C9C9C9] transition-all cursor-pointer">{children}</a>
    )
}