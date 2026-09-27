import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs) {
    return twMerge(clsx(inputs))
}

export function slugify(input) {
    const loweredCaseInput = input.toLowerCase();
    return loweredCaseInput.replaceAll(' ', '-');
}