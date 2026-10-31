import { cn } from "../lib/utils"

export function Badge({ children, className }) {
    return (
        <span className={cn("text-lg text-white/75 bg-white/5 rounded-sm px-3 py-1.5", className)}>{children}</span>
    )
}