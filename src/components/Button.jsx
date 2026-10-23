import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { cn } from "../lib/utils";

const buttonVariants = {
    primary: 'bg-white',
    secondary: 'border border-white/15 text-white/90 hover:bg-white/15'
};

const buttonSizes = {
    normal: 'text-lg',
    small: 'text-lg'
}

export function Button({ id = "", children, variant = "primary", size = "normal", className, type = "", disabled = false, onClick }) {
    const mainTextRef = useRef();
    const hiddenTextRef = useRef();
    const timelineRef = useRef();

    useGSAP(() => {
        const mainTextSplit = SplitText.create(mainTextRef.current, { type: "chars" });
        const hiddenTextSplit = SplitText.create(hiddenTextRef.current, { type: "chars" });

        const timeline = gsap.timeline({
            paused: true,
            defaults: {
                stagger: 0.02,
                duration: 0.4,
                ease: 'circ.inOut'
            }
        })

        timeline.to(mainTextSplit.chars, {
            yPercent: -100,
        }, 0).to(hiddenTextSplit.chars, {
            yPercent: -100
        }, 0);

        timelineRef.current = timeline;
    });

    const handleMouseEnter = () => {
        timelineRef.current?.play();
    };

    const handleMouseLeave = () => {
        timelineRef.current?.reverse();
    }

    return (
        <button id={id} className={cn("group relative overflow-hidden text-black font-semibold px-4 py-2 rounded-xl w-fit transition-all cursor-pointer shadow-2xl disabled:opacity-75", buttonVariants[variant], buttonSizes[size], className)} type={type} disabled={disabled} onClick={onClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="flex flex-col overflow-hidden relative">
                <span className="relative" ref={mainTextRef}>{children}</span>
                <span className="absolute top-full" ref={hiddenTextRef}>{children}</span>
            </div>
            {variant === "primary" && <div className="absolute inset-0 bg-black/15 opacity-0 group-hover:opacity-100 transition-all" />}
        </button>
    )
}