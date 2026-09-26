import { cn } from "../lib/utils";

const buttonVariants = {
    primary: 'bg-primary-gradient',
    secondary: 'bg-white hover:bg-[#C9C9C9]'
};

const buttonSizes = {
    normal: 'text-2xl',
    small: 'text-lg'
}

export function Button({ id = "", children, variant = "primary", size = "normal", className }) {
    return (
        <button id={id} className={cn("text-black font-semibold px-8 py-4 rounded-sm w-fit transition-all cursor-pointer", buttonVariants[variant], buttonSizes[size], className)}>{children}</button>
    )
}