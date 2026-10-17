import { cn } from "../lib/utils";

const buttonVariants = {
    primary: 'bg-white',
    secondary: 'border border-white/15 text-white/90 hover:bg-white/15'
};

const buttonSizes = {
    normal: 'text-lg',
    small: 'text-lg'
}

export function Button({ id = "", children, variant = "primary", size = "normal", className, onClick }) {
    return (
        <button id={id} className={cn("text-black font-semibold px-4 py-2 rounded-xl w-fit transition-all cursor-pointer shadow-2xl", buttonVariants[variant], buttonSizes[size], className)} onClick={onClick}>{children}</button>
    )
}